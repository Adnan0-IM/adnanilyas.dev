# Ajinex Desktop

**Offline-first Point of Sale and business management application for retail stores in Nigeria and Africa.**

Version 1.0.9 · Released October 10, 2026 · `com.ajinex.desktop`
Backend API: `https://ajinex.com/api/v1` · MIT licensed
Download: https://ajinex.com/download/

---

## Overview

Ajinex is a product with three clients — a web app, an Android app, and a desktop app
— sharing one account and one backend. **My contribution was the desktop app only, and
within it the frontend (the Electron renderer).** The web app, the Android client, the
backend, and the Electron main process were other people's work and are not described
here.

Ajinex Desktop is an offline-first POS and business management application. Sales are
committed to a local encrypted database first and pushed to a central server in the
background once connectivity returns. The desktop app covers point of sale, inventory,
sales reporting, branches, stores, customers, users, billing, and settings.

**Why offline-first matters here:** a cloud-only POS is useless at the moment of a
transaction. In a store where power and connectivity are unreliable, the sale has to
complete, get a receipt printed, and be recorded — whether or not there is a
connection. Reconciliation is the network's problem, not the cashier's.

## My role

I built the renderer: the application shell, the route structure, the feature modules,
the Zustand stores, and the typed contract layer the UI communicates through.

### Application foundation

- Built the renderer application shell and the React Router 6 route structure.
- Implemented the login flow and frontend authentication state (`authStore`).
- Integrated the dashboard against typed IPC contracts in `src/shared/types.ts`.
- Added the `ipcMock` service so the frontend could be developed and tested without the
  Electron shell and backend running.

### Inventory and point of sale

- Built inventory and stock listing interfaces with filtering, pagination, and low-stock
  indicators.
- Implemented the POS cart and checkout workflow with payment modal interactions
  (`cartStore`, `posService`).
- Added debounced product search to reduce redundant queries per keystroke.
- Connected checkout and sale operations to the application's sales API.

### Sales reporting and administration

- Developed sales history with synchronization status indicators, filtering,
  pagination, and transaction detail views.
- Implemented the reports module: sales-over-time charts and summary statistics.
- Built settings interfaces for printer selection and synchronization preferences.
- Added user management: create, edit, delete, search, and filter.
- Built the stores, branches, customers, and profile modules, plus onboarding.

### Access control and reliability

- Implemented role-aware navigation and route restrictions for application modules.
  Roles carry permission codes (`ADM`, `MGR`, `CSH`) that the UI checks before exposing
  actions.
- Updated `src/shared/types.ts` and the `window.api` definitions so the renderer and
  the main process communicate through typed contracts.
- Built the renderer side of sync awareness — `syncOrchestrator` and `syncUi` — including
  the synchronization status shown on sales history.
- Improved loading, error, and empty states across user management and other interfaces.
- Aligned frontend IPC usage with the backend API reference, and added explicit notices
  when IPC was unavailable rather than leaving the UI apparently idle.

**Not my work:** the Electron main process (the database layer and its migrations, the
sync engine, the service layer, and the IPC handlers including `ipcWriteGuard`), the
preload bridge, the backend API, the web app, and the Android app. I built the renderer
against those contracts and called into them — I did not write them.

## Architecture

The desktop app uses a three-process Electron architecture. This is the shape of the
whole application, not only my part of it:

```
src/
├── main/          Node/Electron main process
│   ├── database/  db.ts, schema.ts (migrations), queries.ts
│   ├── services/  syncService, apiClient, tokenService, entitlementService,
│   │              printerService, appSettingsService, updaterService, sessionUser
│   └── ipc-handlers*.ts + ipcWriteGuard
├── preload/       contextBridge IPC bridge → typed window.api
├── renderer/src/  React app  ← my work
│   ├── modules/   pos, billing, inventory, stock, sales, customers, branches,
│   │              stores, users, reports, settings, dashboard, auth, profile
│   ├── store/     authStore, cartStore, billingStore, uiStore, onboardingStore
│   └── services/  posService, syncOrchestrator, syncUi, ipcMock
└── shared/        types.ts (contracts), window.d.ts
```

| Layer | Technology |
| --- | --- |
| Shell | Electron 31 + electron-vite 2 |
| Renderer | React 18, React Router 6, Zustand 4, Jotai |
| Language | TypeScript 5.5, strict, split `tsconfig.node.json` / `tsconfig.web.json` |
| Styling | Tailwind CSS 3.4, lucide-react, tailwind-merge, clsx |
| Local database | better-sqlite3-multiple-ciphers (SQLCipher fork — AES-256) |
| Sync | sync_queue table, batched push/pull, version watermarks, conflict detection |
| Packaging | electron-builder 26 (NSIS / DMG / AppImage) + electron-updater |

### The key pattern

All database access and network calls live in the main process. The renderer never
touches SQLite or the network directly — it calls `window.api`, exposed through a
`contextBridge` preload script, over IPC channels whose request and response shapes are
declared in `src/shared/types.ts`. `axios` runs in the main process, not the renderer.

### Offline-first as a data-layer guarantee, surfaced in the UI

A sale is written to the local encrypted database and queued. The sync engine batches
pushes (50 records) and pulls (500), applies per-table version watermarks, detects and
resolves conflicts, and retries with exponential backoff up to 5 times. Migrations are
versioned and currently at v6.

Reachability is determined by an HTTP check against the API rather than
`navigator.onLine`. The renderer's job was to make that state legible: per-record sync
status on sales history, sync preferences in settings, and loading states that don't lie
about completion.

### Encrypted local storage

The database uses better-sqlite3-multiple-ciphers (a SQLCipher fork) with AES-256, keyed
from a `DB_ENCRYPTION_KEY` environment variable, with rekey support for rotation.

### Roles and multi-tenancy

Store types are modelled as `GENERAL`, `RESTAURANT`, and `PHARMACY`, with domain fields
like `nafdac_number`, `expiry_date`, and `requires_prescription` for pharmacy-oriented
operations. Roles (`ADM`, `MGR`, `CSH`) carry permission codes such as `pos:void_sale`
and `inventory:delete`.

## Decisions and trade-offs

**Renderer talks only through IPC.** The alternative — reaching into the database from
the renderer — would have been faster to build and would have put SQL and secrets in a
process with DOM access. The typed bridge costs a layer of boilerplate and a rebuild
whenever contracts change, and it keeps the renderer untrusted.

**Write access is guarded in main, not hidden in the UI.** Hiding a button is not access
control. Permission codes are checked at the IPC boundary, so a renderer that calls a
channel anyway is still refused. The cost is that every new write needs a permission code
assigned to it.

**HTTP reachability checks over `navigator.onLine`.** `navigator.onLine` only reports
whether a network interface exists; on a store Wi-Fi with no upstream it returns `true`,
and the sync engine would hammer a dead endpoint and exhaust its retry budget. An actual
HTTP check costs a round trip but gives a truthful answer.

**Debounced product search.** Searching on every keystroke issued a query per character.
Debouncing cuts that work at the cost of a short, deliberate delay before results appear.

**Version watermarks over blind full pulls.** Per-table watermarks keep the payload
small after initial sync; the trade-off is that watermark bookkeeping is state that can
drift and must be reasoned about during conflict resolution.

**IPC mocks over waiting on real services.** Mocks let the frontend move independently of
backend availability. The trade-off is that a mock can drift from the real service, so
the mocks were kept aligned with the backend API reference and are not a substitute for
integration testing.

## Security considerations

The application handles sales data, user accounts with roles, and a local database that
outlives any single session. Most of that sits outside my scope, so the split matters:
these are properties of the application, and only some are work I did.

**Within my scope — the renderer:**

- **Role-aware navigation and route restrictions.** The UI checks the user's role and
  permission codes before exposing actions and modules. This is a usability layer, not a
  security boundary.
- **Typed contracts in `src/shared/types.ts`** keep the renderer talking to a narrow,
  declared surface, and `window.api` exposes no direct filesystem or database handle.

**Outside my scope, but relevant to the design I built against:**

- **Local data is encrypted at rest.** SQLCipher/AES-256 with the key supplied through the
  environment, not committed to the repo, plus rekey support.
- **Write operations are checked in the main process** against permission codes before
  being applied. This is the real boundary — `ipcWriteGuard` refuses a write the renderer
  should not be allowed to make, whether or not the UI offered the control.
- **Multi-tenancy and store types** shape data validation; pharmacy-oriented fields are
  modelled, but this is not a claim of regulatory compliance.

**A real gap worth naming:** the release is currently unsigned. Installers are not
code-signed, so Windows SmartScreen and macOS Gatekeeper both warn on first launch and
require the user to proceed manually. Signing the build is a release-process task outside
the frontend, but it is a genuine gap in the trust story for a binary that handles sales
data.

**Not claimed:** that the application has been security-reviewed or penetration tested.
The encryption and access-control statements describe what the code does, not an audit
result.

## Outcomes

The frontend work listed above was completed and shipped as part of the released desktop
app. What I can demonstrate first-hand:

- POS cart and checkout, including running with the network down and syncing later.
- Inventory and stock browsing with low-stock indicators.
- Sales history with per-record synchronization status, plus the reports dashboard.
- User administration and role-aware navigation across modules.
- The typed contract between renderer and main process, using the IPC mocks without the
  shell running.

**Verifiable facts about the released app:** version 1.0.9, released October 10, 2026,
publicly downloadable for Windows (`.exe`, ~81 MB), macOS (`.dmg`, ~180 MB), and Linux
(`.AppImage`, ~113 MB), with auto-update via a generic provider pointed at GitHub
releases. App id `com.ajinex.desktop`; backend MIT licensed at
`https://ajinex.com/api/v1`.

The desktop codebase as a whole is roughly 77 TypeScript/TSX files and ~23k lines across
all three processes — that figure is the application, not the renderer alone, which is a
subset of it. The web and Android clients are separate codebases again.

**Not claimed:** adoption, store counts, transaction volume, or uptime. None of those
were verified, and none should be inferred from the app being publicly downloadable.

## Build notes

Requires Node 20 or 22 and a C++ toolchain, because the native SQLite module must be
rebuilt against Electron's ABI.

```bash
npm install
cp .env.example .env        # set DB_ENCRYPTION_KEY + API_BASE_URL
npx electron-rebuild -f -w better-sqlite3-multiple-ciphers
npm run dev                 # electron-vite dev (port 5400)
npm run build
npm run package             # electron-builder → dist-electron/
```

Dev port 5400 is deliberate — it avoids the 5173 range reserved on Windows.

One known rough edge: the repository carries both `bun.lock` and `package-lock.json`, so
the package manager in use is ambiguous. The README assumes npm.

---

**Links**

- Download: https://ajinex.com/download/
- Product site: https://ajinex.com
- Source code: private — held in the owner's organization. Not public.