import financetequecv from "@/assets/projects/financetequecv.png";
import inzacal from "@/assets/projects/inzacal.png";
import ygGlobal from "@/assets/projects/yg-global.png";
import bcggi from "@/assets/projects/bcggi.png";
import veridoc from "@/assets/projects/veridoc.png";
import nipeControl from "@/assets/projects/nipe-control.png";
import ajinexDesktop from "@/assets/projects/ajinex-desktop.png";
import type { ReactNode } from "react";
import { Download, Github, Globe2 } from "lucide-react";

export const liveDemoIcons = {
  download: Download,
  github: Github,
  globe: Globe2,
} as const;

export type LiveDemoIcon = keyof typeof liveDemoIcons;

export type Project = {
  description: string;
  title: string;
  src: string;
  liveDemo: string;
  liveDemoText: string;
  liveDemoIcon?: LiveDemoIcon;
  githubLink?: string;
  githubLinkText?: string;
  content: () => ReactNode;
};

export const cards: Project[] = [
  {
    description: "Desktop shell widget that controls the Nipe Tor gateway.",
    title: "Nipe Control",
    src: nipeControl,
    liveDemo: "https://github.com/Adnan0-IM/nipeControl",
    liveDemoText: "Source",
    liveDemoIcon: "github",
    content: () => {
      return (
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-foreground">Problem</h4>
            <p className="text-muted-foreground">
              Nipe routes traffic through a Tor gateway, but it is a terminal tool.
              Checking whether traffic is actually going through Tor meant running
              another command.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Role</h4>
            <p className="text-muted-foreground">
              Built the QML widget, settings panel, and Python helper end to end
              for DankMaterialShell: live circuit status, exit IP and exit node
              location, start/stop/restart, clipboard copy, notifications.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Outcome</h4>
            <p className="text-muted-foreground">
              Status refresh probes SOCKS directly and never elevates, so checking
              the gateway never triggers an auth prompt. Privileged actions go
              through pkexec instead of a permanent sudoers rule.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    description: "Offline-first POS and business management desktop app.",
    title: "Ajinex Desktop",
    src: ajinexDesktop,
    liveDemo: "https://ajinex.com/download/",
    liveDemoText: "Download",
    liveDemoIcon: "download",
    content: () => {
      return (
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-foreground">Problem</h4>
            <p className="text-muted-foreground">
              A cloud-only POS is useless at the moment of a transaction. In
              stores with unreliable power and connectivity, the sale has to
              complete and print a receipt whether or not there is a connection.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Role</h4>
            <p className="text-muted-foreground">
              Frontend developer on the Electron renderer: app shell and routes,
              POS cart and checkout, inventory and stock, sales history with
              per-record sync status, reports, user management, and role-aware
              navigation. Built against typed IPC contracts in
              src/shared/types.ts.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Outcome</h4>
            <p className="text-muted-foreground">
              Shipped in Ajinex Desktop 1.0.9 for Windows, macOS, and Linux. Sales
              commit to an encrypted local database first and sync when
              connectivity returns. The renderer never touches the database or
              network directly.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    description: "Secure Document Issuing and Verification Platform for Organizations.",
    title: "VeriDoc",
    src: veridoc,
    liveDemo: "https://vs.adnanilyas.dev",
    liveDemoText: "Visit",
    githubLinkText: "Code",
    githubLink: "https://github.com/Adnan0-IM/vs-frontend",
    content: () => {
      return (
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-foreground">Problem</h4>
            <p className="text-muted-foreground">
              Secure document issuing and verification using digital signature and qr-codes
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Role</h4>
            <p className="text-muted-foreground">
              Built full stack: auth, role‑based flows, rsa keys generation, admin
              dashboard, document uploads, APIs, deployment.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Outcome</h4>
            <p className="text-muted-foreground">
              Self‑serve registration and admin control, user
              management.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    description: "Full-stack investment platform along with admin panel.",
    title: "Finance Teque Investment",
    src: financetequecv,
    liveDemo: "https://financetequecv.com",
    liveDemoText: "Visit",
    githubLinkText: "Code",
    githubLink: "https://github.com/Adnan0-IM/finance-tequecv",
    content: () => {
      return (
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-foreground">Problem</h4>
            <p className="text-muted-foreground">
              Secure onboarding for personal and corporate investors, with an
              admin panel to manage users and carousel.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Role</h4>
            <p className="text-muted-foreground">
              Built full stack: auth, role‑based flows, investor signup, admin
              dashboard, data models, APIs, deployment.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Outcome</h4>
            <p className="text-muted-foreground">
              Self‑serve registration and admin control, user
              management.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    description: "Full‑stack Business Manager to help  make better decisions.",
    title: "Inzacal",
    src: inzacal,
    liveDemo: "https://inzacal-production.up.railway.app/",
    githubLink: "https://github.com/Adnan0-IM/inzacal",
    liveDemoText: "Visit",
    githubLinkText: "Code",
    content: () => {
      return (
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-foreground">Problem</h4>
            <p className="text-muted-foreground">
              Business owners need one dashboard to track sales, top items,
              locations, taxes, currency changes, and generate printable reports
              monthly, quarterly.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Role</h4>
            <p className="text-muted-foreground">
              Built full stack: auth, data models, sales ingestion, analytics,
              reporting, print/export, notifications for policies and FX,
              customer geolocation insights features.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Outcome</h4>
            <p className="text-muted-foreground">
              Smooth Full stack app to help business owners make good decisions by recieving notifications about products.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    description: "YG Investment Platform for showcasing investment services.",
    title: "YG Global Investment ",
    src: ygGlobal,
    liveDemo: "https://yg-investment.vercel.app/",
    githubLink: "https://github.com/Adnan0-IM/yg-investment",
    liveDemoText: "Visit",
    githubLinkText: "Code",
    content: () => {
      return (
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-foreground">Problem</h4>
            <p className="text-muted-foreground">
              Present investment services in a professional, mobile-first
              website with clear navigation.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Role</h4>
            <p className="text-muted-foreground">
              Built responsive layouts, content structure, and navigation to
              improve comprehension and ease of exploration.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Outcome</h4>
            <p className="text-muted-foreground">
              Smooth and aesthetic experience with clear content architecture and
              smooth navigation across devices.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    description: "BCGGI: Bakarean Centre for Global Governance and Innovation",
    title: "Bakarean Centre",
    src: bcggi,
    liveDemo: "https://bcggi.org",
    githubLink: "https://github.com/Adnan0-IM/bakarean-center",
    liveDemoText: "Visit",
    githubLinkText: "Code",
    content: () => {
      return (
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-foreground">Problem</h4>
            <p className="text-muted-foreground">
              Create an accessible organizational website that communicates
              mission, research areas, and initiatives clearly.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Role</h4>
            <p className="text-muted-foreground">
              Implemented content structure, page templates, and
              accessibility-minded UI for readability and navigation.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Outcome</h4>
            <p className="text-muted-foreground">
              Well-organized pages that improve understanding and engagement for
              visitors.
            </p>
          </div>
        </div>
      );
    },
  },
];
