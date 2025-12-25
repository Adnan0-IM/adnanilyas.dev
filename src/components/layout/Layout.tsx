import React from "react";
import { ModeToggle } from "../mode-toggle";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur-md border-border border-b ">
        <div className="container px-4 md:px-16 lg:px-32 xl:px-64   mx-auto">
          <nav className="h-14 hidden sm:flex items-center justify-between">
            <a
              href="#home"
              className="font-medium tracking-tight hover:text-primary"
            >
              AI
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

              <ModeToggle />
            </ul>
          </nav>
          {/* Moibile nav */}
          <div className="sm:hidden flex items-center justify-between h-14">
            <a
              href="#home"
              className="font-medium tracking-tight hover:text-primary"
            >
              AI
            </a>
            <ModeToggle />
          </div>
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
