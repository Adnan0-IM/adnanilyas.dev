import React from "react";
import DesktopNav from "./nav/DesktopNav";
import MobileNav from "./nav/MobileNav";
import { GardenModal } from "./nav/GardenAccess";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isGardenOpen, setIsGardenOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky  top-0 z-40 bg-background/80 backdrop-blur border-border border-b ">
        <div className="container relative px-4 md:px-16 lg:px-32 xl:px-64   mx-auto">
          <DesktopNav onOpenGarden={() => setIsGardenOpen((prev) => !prev)} />
          <MobileNav onOpenGarden={() => setIsGardenOpen(true)} />
          <GardenModal isOpen={isGardenOpen} onOpenChange={setIsGardenOpen} />
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
