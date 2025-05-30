<<<<<<< HEAD
// components/theme-toggle.tsx (UI แบบ shadcn/ui + Lucide + Tailwind)
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
=======
// src/components/ThemeToggle.tsx
import {
  useEffect,
  useState
} from 'react'

export default function ThemeToggle() {
  const [dark,
    setDark] = useState(() => {
      return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.theme = dark ? 'dark': 'light'
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-4 right-4 p-2 rounded bg-gray-200 dark:bg-gray-700"
      >
      {dark ? '☀️': '🌙'}
    </button>
  )
>>>>>>> ce8e5d5 (Add og:image and SEO meta tags)
}