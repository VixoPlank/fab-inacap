"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Función para cambiar el tema
  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="nav"
      size="icon"
      className="dark-mode-toggle bg-red-700 lg:text-white"
      onClick={toggleDarkMode}
    >
      {!mounted ? (
        <Loader />
      ) : theme === "dark" ? (
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
