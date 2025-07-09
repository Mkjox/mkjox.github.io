"use client"

import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    const isDark = theme === "dark"

    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
    }

    return (
        <Button onClick={toggleTheme} variant="outline" size="sm" className="cursor-pointer">
            <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"}`} />
            <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${isDark ? "scale-100 rotate-0" : "scale-0 rotate-90"}`} />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}