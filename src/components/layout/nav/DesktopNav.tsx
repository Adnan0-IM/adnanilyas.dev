import { ModeToggle } from "@/components/mode-toggle";
import NavLinks from "./NavLinks";
import { GardenButton } from "./GardenAccess";

type DesktopNavProps = {
  onOpenGarden: () => void;
};

const DesktopNav = ({ onOpenGarden }: DesktopNavProps) => {
  return (
    <nav className="h-14 hidden sm:flex font-serif items-center justify-between">
      <a href="#home" className="font-medium tracking-tight hover:text-primary hover:border-b-2 rounded-none border-primary py-0">
        Adnan Iliyasu
      </a>

      <div className="flex items-center gap-4 md:gap-6 text-sm">
        <NavLinks className="flex items-center gap-4 md:gap-6" />
        <GardenButton
          onOpen={onOpenGarden}
          className="hover:text-white hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-sm px-2 py-1 "
        />
        <ModeToggle />
      </div>
    </nav>
  );
};

export default DesktopNav;
