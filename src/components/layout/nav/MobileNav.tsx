import React from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";
import { GardenButton } from "./GardenAccess";
import Logo from "@/components/logo";

type MobileNavProps = {
  onOpenGarden: () => void;
};

const MobileNav = ({ onOpenGarden }: MobileNavProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [shouldRenderMenu, setShouldRenderMenu] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  React.useEffect(() => {
    if (isMenuOpen) {
      setShouldRenderMenu(true);
      setIsClosing(false);
      return;
    }

    if (!shouldRenderMenu) return;

    setIsClosing(true);
    const timer = window.setTimeout(() => {
      setShouldRenderMenu(false);
      setIsClosing(false);
    }, 200);

    return () => window.clearTimeout(timer);
  }, [isMenuOpen, shouldRenderMenu]);

  React.useEffect(() => {
    document.body.style.overflow = shouldRenderMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [shouldRenderMenu]);

  const openGardenFromMenu = () => {
    setIsMenuOpen(false);
    onOpenGarden();
  };

  return (
    <div className="sm:hidden flex items-center justify-between gap-3 h-14">
      <a
        href="#home"
        className="size-13 -ml-2"
      >
        <Logo />
      </a>

      <div className="flex items-center gap-2">
        <ModeToggle />

        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </Button>
      </div>

      {shouldRenderMenu && (
        <div
          className={`fixed inset-x-0 top-14 bottom-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-200 ${
            isClosing ? "opacity-0" : "opacity-100"
          }`}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        >
          <div
            className={`absolute top-2 right-4 left-4 ml-auto max-w-xs rounded-lg border border-border/50 bg-background/95 p-4 shadow-lg transition-all duration-200 ${
              isClosing
                ? "translate-y-[-8px] scale-95 opacity-0"
                : "translate-y-0 scale-100 opacity-100"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
          

            <div className="flex flex-col gap-4">
              <NavLinks
                className="flex flex-col gap-3 text-base"
                itemClassName="border-b border-border/20 pb-2"
                linkClassName="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded px-1 py-0.5"
                onNavigate={() => setIsMenuOpen(false)}
              />

              <GardenButton
                onOpen={openGardenFromMenu}
                className="w-full hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-sm"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
