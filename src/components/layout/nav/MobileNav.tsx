import React from "react";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavLinks from "./NavLinks";
import { GardenButton } from "./GardenAccess";

type MobileNavProps = {
  onOpenGarden: () => void;
};

const MobileNav = ({ onOpenGarden }: MobileNavProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const openGardenFromMenu = () => {
    setIsMenuOpen(false);
    onOpenGarden();
  };

  return (
    <div className="sm:hidden flex items-center justify-between gap-3 h-14">
      <a
        href="#home"
        className="font-bold font-serif tracking-tight hover:text-primary"
      >
        AI
      </a>

      <div className="flex items-center gap-2">
        <ModeToggle />

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Open menu"
            >
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[82%] sm:max-w-sm">
            <SheetHeader>
              <SheetTitle className="font-serif">Navigation</SheetTitle>
            </SheetHeader>

            <div className="px-4 pb-6 flex flex-col gap-4">
              <NavLinks
                className="flex flex-col gap-3 text-base"
                itemClassName="border-b border-border/40 pb-2"
                linkClassName="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded px-1 py-0.5"
                onNavigate={() => setIsMenuOpen(false)}
              />

              <GardenButton
                onOpen={openGardenFromMenu}
                className="w-full hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-sm"
              />

              <SheetClose asChild>
                <Button type="button" variant="ghost" className="w-full">
                  Close menu
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNav;
