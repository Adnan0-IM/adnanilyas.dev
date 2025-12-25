import financetequecv from "../../assets/projects/financetequecv.png";
import inzacal from "../../assets/projects/inzacal.png";
import ygGlobal from "../../assets/projects/yg-global.png";
import bcggi from "../../assets/projects/bcggi.png";
export const cards = [
  {
    description: "Full‑stack Investment Platform",
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
              admin panel to manage users and plan access.
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
              Self‑serve registration and admin control improved user
              management, trust, and conversions across investor types.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    description: "Full‑stack Business Manager",
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
              Centralized visibility enables better decisions on investments and
              expansion; automated compliance, reporting, and alerts streamline
              operations and accountability, accuracy, efficiency.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    description: "YG Investment Platform",
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
              Fast-loading site on Vercel with clear content architecture and
              smooth navigation across devices.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    description: "BCGGI",
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
              visitors and stakeholders.
            </p>
          </div>
        </div>
      );
    },
  },
];
