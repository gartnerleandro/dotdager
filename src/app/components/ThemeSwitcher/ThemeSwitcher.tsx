"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    
    useEffect(() => setMounted(true), []);
    
    if (!mounted) return null;

    const handleThemeChange = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    
    return (
        <div className="theme-switcher">
            <input 
                type="checkbox" 
                className="theme-switcher-checkbox" 
                id="theme-switcher-checkbox" 
                onChange={handleThemeChange} 
                checked={theme === "dark"} 
            />
            <label className="theme-switcher-label" htmlFor="theme-switcher-checkbox">
                <Sun className={`icon sun-icon ${theme === "dark" ? "hidden" : ""}`} />
                <Moon className={`icon moon-icon ${theme === "dark" ? "" : "hidden"}`} />
                <span className="theme-switcher-switch" />
            </label>
        </div>
    );
};

export default ThemeSwitcher;