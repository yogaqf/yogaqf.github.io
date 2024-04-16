import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const buttonDark: string = "absolute scale-0 transition-all dark:scale-100";
  const buttonLight: string = "scale-100 transition-all  dark:scale-0";
  const iconDark: string =
    "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100";
  const iconLight: string =
    "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0";
  return (
    <>
      <Button
        className={buttonDark}
        variant="default"
        size="icon"
        onClick={() => setTheme("light")}
      >
        <Moon className={iconDark} />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <Button
        className={buttonLight}
        variant="default"
        size="icon"
        onClick={() => setTheme("dark")}
      >
        <Sun className={iconLight} />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
}
