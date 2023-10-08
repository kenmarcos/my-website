"use client";

import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

import { Button } from "components/ui/button";

const ThemeButton = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      size="icon"
      className="fixed right-4 top-4 rounded-full h-12 w-12 p-2"
      onClick={toggleTheme}
    >
      <LuSun
        size={28}
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 fill-primary-foreground"
      />
      <LuMoon
        size={28}
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 fill-primary-foreground"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeButton;
