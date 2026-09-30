import { Moon, Sun } from "lucide-react";

import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === "dark" ? (
        <Button size="icon" variant={"ghost"} onClick={() => setTheme("light")}>
          <Sun className="font-black size-[17.4px]" />
        </Button>
      ) : (
        <Button  size="icon" variant={"ghost"} onClick={() => setTheme("dark")}>
          <Moon className="font-black size-[17.4px]" />
        </Button>
      )}
    </div>
  );
}
