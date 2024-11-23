"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { usePointerGlow } from "../../_hooks/usePointerGlow/usePointerGlow";

import "./ThemeSwitcher.css";

enum ThemeOptions {
  LIGHT = "light",
  DARK = "dark",
  SYSTEM = "system",
}

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  usePointerGlow();

  useEffect(() => {
    setMounted(true);

    if (theme === ThemeOptions.SYSTEM) {
      setTheme(ThemeOptions.DARK);
    }
  }, []);

  if (!mounted) return null;

  const handleThemeChange = () => {
    setTheme(theme === ThemeOptions.DARK ? ThemeOptions.LIGHT : ThemeOptions.DARK);
  };

  return (
    <div className="theme-switcher">
      <input
        type="checkbox"
        className="theme-switcher-checkbox"
        id="theme-switcher-checkbox"
        onChange={handleThemeChange}
        checked={theme === ThemeOptions.DARK || theme === ThemeOptions.SYSTEM}
      />
      <label className="theme-switcher-label" htmlFor="theme-switcher-checkbox">
        <Sun className={`icon sun-icon ${theme === ThemeOptions.DARK ? "hidden" : ""}`} />
        <Moon className={`icon moon-icon ${theme === ThemeOptions.DARK ? "" : "hidden"}`} />
        <span className="theme-switcher-switch" />
      </label>
    </div>
  );
};

export default ThemeSwitcher;
