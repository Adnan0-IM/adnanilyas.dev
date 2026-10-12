# Nipe Control

**A desktop shell widget for controlling the [Nipe](https://github.com/htbridge/nipe) Tor gateway — start, stop, and restart it, see your exit IP and country, and get desktop notifications.**

Version 2.1.0 · MIT licensed (declared in `README.md` and `plugin.json`) · QML
Source: https://github.com/Adnan0-IM/nipeControl

---

## Overview

[Nipe](https://github.com/htbridge/nipe) is a Perl script that configures `iptables` to
route a machine's traffic through a Tor gateway. On its own it is a terminal tool: you
run commands, and reading its state means running another command.

Nipe Control is a widget for [DankMaterialShell](https://danklinux.com/) — a desktop
shell for Linux. It puts the gateway's controls and live status in the shell bar, so
checking whether traffic is actually going through Tor is a glance rather than a
terminal.

## What it does

- **Live status widget:** whether a Tor circuit is carrying traffic, the exit IP, and
  the exit node's city and country.
- **One-click controls:** start, stop, and restart the gateway.
- **Copy IP to clipboard** via the shell's built-in `dms cl copy`.
- **Desktop notifications** on status changes via `dms notify`.
- **Silent polling:** reading status is unprivileged, so the refresh timer never
  interrupts you with an auth prompt.

## My role

I designed and built the plugin end to end — the QML widget, the settings panel, and the
Python helper that does the privileged work.

| File | Size | Role |
| --- | --- | --- |
| `NipeControl.qml` | ~30 KB | Main widget: status display, controls, polling |
| `NipeControlSettings.qml` | ~13 KB | Settings panel (Nipe path, interval, notifications) |
| `nipe-widget-py` | ~25 KB | Python helper: status probe, exit-node lookup, privileged actions |
| `NipeSpinner.qml` | ~2.6 KB | Loading state component |
| `plugin.json` | — | Plugin manifest |

The project also includes a line-by-line explanation of the helper
(`nipe-widget-py-explained.md`) and screenshots.

## Architecture

The widget is QML; the work that needs privilege or network access happens in a bundled
Python helper, `nipe-widget-py`. DankMaterialShell unpacks the plugin directory, so the
helper runs from there — no manual install step, no symlink required (though a
`~/.local/bin` fallback exists for older or manual setups).

The helper exposes a small command surface:

```
nipe-widget-py json-status [--api URL] [--nipe-dir DIR] [--socks-port N] [--check-url URL]
nipe-widget-py start | stop | restart | status [--nipe-dir DIR]
nipe-widget-py check-deps [--nipe-dir DIR]
nipe-widget-py path [--nipe-dir DIR]
```

`json-status` returns a single JSON object — `active`, `ip`, `country`, `city`, `source`,
`error`, `nipe_dir` — which the widget renders. It **never elevates**. The privileged
commands return a JSON result object the same way.

Configuration resolves in a fixed order: command line, then
`~/.config/nipeControl/config`, then defaults.

## Decisions and trade-offs

**A Python helper instead of a bash script.** The obvious implementation of a shell
widget is a bash script the QML shells out to. A Python helper gave structured JSON on
stdout instead of text that has to be parsed, real error handling, and dependency
checking. The cost is a Python dependency, and the status probe now spans two languages
rather than one.

**`pkexec` instead of a sudoers file.** Nipe requires root to configure `iptables`, and
`nipe.pl` refuses to run as non-root even for `status` — so something has to elevate.
A sudoers entry granting Nipe passwordless root would work silently, but it leaves a
permanent root-granting rule on the machine for a tool that only needs it occasionally.
`pkexec` opens a normal desktop authentication dialog instead, and no
`/etc/sudoers.d/nipe` is ever created. The trade-off is a prompt on each privileged
action — and on auto-start at login, once.

**Probe SOCKS directly instead of shelling out to `nipe.pl status`.** This is the
decision the widget is built around. `nipe.pl status` only asks the Tor Project whether
the connection is a Tor circuit, and it needs root to answer. So the helper checks
whether anything is listening on the local SOCKS port first:

- **Nothing listening** → no Tor circuit is up, and the probe stops there with no network
  traffic at all.
- **Port open** → it asks the check endpoint through SOCKS5 on `127.0.0.1:9050`. If the
  local Tor instance answers, a circuit is up and the reply carries the exit IP.
- **SOCKS silent but port open** → one direct request decides whether Tor is down or the
  whole network is unreachable.

The result: **the status refresh never elevates and never prompts.** A widget that
demanded a root password every 30 seconds would be unusable. The cost is that this path
is only as good as the SOCKS port and check endpoint, and it needs Python's standard
library rather than `curl`.

**Exit-node geolocation goes through the Tor circuit.** The exit IP is looked up at the
configured geolocation endpoint through the same SOCKS circuit, so the address is never
sent from the real connection. Results are cached per IP for six hours, and a failing
endpoint backs off for 15 minutes.

**Back off polling when the gateway is down.** The refresh interval defaults to 30
seconds with a 15-second floor, but backs off to at least 2 minutes while no circuit is
up — no point asking a dead gateway every 15 seconds.

## Security considerations

This is a control surface for a Tor gateway, so it is worth being precise about what it
does and does not do.

**How it handles privileged commands.** `start`, `stop`, `restart`, and `status` run
`nipe.pl` as root through `pkexec`, which shows a standard desktop authentication dialog.
The user sees and authorizes each privileged action. No sudoers file is created, and
there is no unattended root path.

**What it reads and displays.** The exit IP and the exit node's approximate country,
city, and region, geolocated by a third-party endpoint (default `ipapi.co`, configurable).
That is a coarse location derived from the exit node, not a precise location — and the
geolocation lookup is itself an outbound request to a third party, made through Tor so it
does not originate from the real connection.

**What the status check does not verify.** This is the important caveat. The probe
reports **whether a Tor circuit is reachable** — not whether Nipe's `iptables` redirect is
actually installed. If a plain Tor service is running and Nipe is stopped, the circuit is
up and the widget shows active, even though system traffic is *not* being routed through
it. An accurate answer would mean running the privileged check and prompting on every
refresh, which is the thing the design deliberately avoids.

**No anonymity claims.** This tool tells you whether a Tor circuit is up and which exit
node it is using. That is a diagnostic, not a guarantee. It cannot verify that your
application traffic is actually tunnelled, that no application leaks outside it, or that
the circuit has not been tampered with. Tor's own properties — and the ones Nipe inherits
by rewriting `iptables` — are outside anything this widget can attest to.

The plugin declares `settings_read`, `settings_write`, `process`, and `network`
permissions in its manifest.

## Outcomes

The plugin is published and installable: clone the repo into the DankMaterialShell
plugins directory, enable **Nipe Control** in settings, and set the Nipe path if it is
not `~/nipe`. It supports Arch, Debian/Ubuntu/Mint, Fedora/RHEL, and falls back to CPAN
for missing Perl modules.

What it does concretely: start, stop, and restart the gateway from the shell bar; show
live circuit status, exit IP, and exit country/city; copy the exit IP; notify on status
changes; and detect missing dependencies on demand (`check-deps`, cached for a day).

**Not claimed:** no download counts, install counts, or adoption figures are asserted.
The repository is MIT licensed as declared in `README.md` and `plugin.json`; note that
GitHub does not currently show a detected license for the repository.

## Requirements

Nipe (`~/nipe` or a custom path), `python3`, Perl 5.30+ with `Config::Simple`, `JSON`,
`Readonly`, `Try::Tiny`, `IO::Socket::SSL`, `Net::SSLeay`, `tor`, and `pkexec` (polkit)
for the start/stop/restart actions.

The status probe and exit-node lookup use only the Python standard library, so no
`curl` or `wget` is required. Notifications and clipboard use the shell's built-in
`dms notify` and `dms cl copy`, so `libnotify` and `wl-clipboard` are not needed either.

---

**Links**

- Source: https://github.com/Adnan0-IM/nipeControl
- Nipe (the upstream gateway this controls): https://github.com/htbridge/nipe
- DankMaterialShell: https://danklinux.com/