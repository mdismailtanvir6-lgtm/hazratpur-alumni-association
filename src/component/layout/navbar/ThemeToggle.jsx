"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <button
        type="button"
        className="p-2 rounded-xl text-foreground/40 cursor-not-allowed opacity-50"
        aria-label="Toggle theme"
        disabled
      >
        <Sun className="h-5 w-5" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-md text-foreground hover:bg-primary/10 transition-all duration-200 active:scale-95"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-amber-400 hover:text-amber-300 transition-colors" />
      ) : (
        <Moon className="h-5 w-5 text-foreground/80 hover:text-primary transition-colors" />
      )}
    </button>
  );
};

export default ThemeToggle;
