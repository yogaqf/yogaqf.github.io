// components/ui/theme-switch.tsx
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/theme-provider";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center" title="Tema">
      <Switch
        className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input border-[0.5px] border-[color:var(--color-border-secondary)]"
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
      />
    </div>
  );
}
