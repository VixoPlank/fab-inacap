"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  // Función para cambiar el tema
  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <Button
      variant="nav"
      size="icon"
      className="dark-mode-toggle text-slate-400 hover:bg-red-50 hover:text-red-600 lg:hover:bg-red-700 lg:text-white lg:hover:text-gray-300"
      onClick={toggleDarkMode}
    >
      {theme === undefined || theme === "dark" ? (
        <>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
          <span className="sr-only">Cambiar a modo claro</span>
        </>
      ) : (
        <>
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
          <span className="sr-only">Cambiar a modo oscuro</span>
        </>
      )}
    </Button>
  );
}
