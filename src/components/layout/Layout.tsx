import React from "react";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { RefreshCw } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [processing, setProcessing] = React.useState(false);
  const [key, setKey] = React.useState("");
  const [error, setError] = React.useState("");
  const [spinCount, setSpinCount] = React.useState(0);
  const [renderModal, setRenderModal] = React.useState(false);
  const [isClosingModal, setIsClosingModal] = React.useState(false);

  const gardenKey = import.meta.env.VITE_GARDEN_KEY;
  const gardenUrl = import.meta.env.VITE_GARDEN_URL;

  const handleSubmit = () => {
    setProcessing(true);
    setError("");
    try {
      if (!gardenKey || !gardenUrl) {
        setError("Garden is not configured");
      } else if (key.trim() === gardenKey) {
        window.open(gardenUrl, "_blank");
        setShowModal(false);
      } else {
        setError("Invalid key");
      }
    } catch (error) {
      console.log(error);
    }
    if (error) {
      setKey("");
    }
    setProcessing(false);
  };

  const refresh = () => {
    setSpinCount((prev) => prev + 1);
    setError("");
    setKey("");
  };

  React.useEffect(() => {
    if (showModal) {
      setRenderModal(true);
      setIsClosingModal(false);
      return;
    }

    if (!renderModal) return;

    setIsClosingModal(true);
    const timer = window.setTimeout(() => {
      setRenderModal(false);
      setIsClosingModal(false);
    }, 220);

    return () => window.clearTimeout(timer);
  }, [showModal, renderModal]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky  top-0 z-40 bg-background/80 backdrop-blur border-border border-b ">
        <div className="container relative px-4 md:px-16 lg:px-32 xl:px-64   mx-auto">
          <nav className="h-14 hidden sm:flex font-serif items-center justify-between">
            <a
              href="#home"
              className="font-medium tracking-tight hover:text-primary"
            >
              Adnan Iliyasu
            </a>
            <ul className="flex items-center gap-4 md:gap-6 text-sm">
              <li>
                <a
                  className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded px-1 py-0.5"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded px-1 py-0.5"
                  href="#experience"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded px-1 py-0.5"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded px-1 py-0.5"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
              <Button
                onClick={() => setShowModal((prev) => !prev)}
                className="hover:text-white hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-sm px-2 py-1 "
              >
                Garden
              </Button>{" "}
              <ModeToggle />
            </ul>
          </nav>
          {/* Moibile nav */}
          <div className="sm:hidden flex items-center gap-4 h-14">
            <div className="flex items-center justify-between gap-4 w-full">
              <a
                href="#home"
                className="font-bold font-serif tracking-tight hover:text-primary"
              >
                AI
              </a>
              <Button
                type="button"
                onClick={() => setShowModal((prev) => !prev)}
                className="hover:text-white hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-sm px-2 py-1 "
              >
                Garden
              </Button>
            </div>

            <ModeToggle />
          </div>
          {renderModal && (
            <div
              className={`absolute right-0 top-16 md:right-1/6 w-full max-w-xs mx-auto bg-background border border-border rounded-lg shadow-lg p-6 z-50 transform-gpu will-change-transform ${
                isClosingModal
                  ? "animate-out fade-out-0 zoom-out-95 slide-out-to-top-2 duration-200"
                  : "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200"
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-primary">
                    Hello, Adnan
                  </p>
                  <button
                    type="button"
                    aria-label="Spin icon"
                    onClick={refresh}
                    className="text-primary hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded"
                  >
                    <RefreshCw
                      key={spinCount}
                      className={
                        spinCount > 0 ? "animate-[spin_700ms_linear_1]" : ""
                      }
                    />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground">
                  {error
                    ? "You are not Adnan"
                    : "Enter your key to access your garden"}
                </p>

                <input
                  type="text"
                  disabled={!!error}
                  value={key}
                  onChange={(e) => setKey(e.target.value.trim())}
                  placeholder="Enter your key"
                  className="w-full px-3 py-2 border border-border rounded-md bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button
                  type="submit"
                  disabled={processing || !key.trim() || !!error}
                  onClick={handleSubmit}
                  className="w-full mt-2"
                >
                  {processing
                    ? "processing"
                    : error
                      ? "Will not procces!"
                      : "Enter"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">{children}</main>
      <footer className="mt-16 border-t border-border/60">
        <div className="container px-4 md:px-16 lg:px-32 xl:px-64 mx-auto py-6 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-2">
          <p>
            © {new Date().getFullYear()} Adnan Iliyasu. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="/resume.pdf" className="hover:text-primary">
              Resume
            </a>
            <a
              href="https://github.com/Adnan0-IM"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/adnan-iliyasu-muhammad-90961028a"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
