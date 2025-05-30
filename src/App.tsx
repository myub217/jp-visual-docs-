<<<<<<< HEAD
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function App() {
  const { theme, setTheme } = useTheme();
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 p-4">
      <h1 className="text-4xl font-bold mb-6">JP Visual & Docs</h1>

      <p className="mb-4 text-lg text-center max-w-xl">
        ให้บริการยื่นกู้ วีซ่า เอกสารทางราชการ การเงิน โปรไฟล์ธุรกิจ และระบบหลังบ้าน
      </p>

      <div className="space-x-2 mb-6">
        <Button onClick={() => setTheme("light")}>☀️ Light</Button>
        <Button onClick={() => setTheme("dark")}>🌙 Dark</Button>
        <Button onClick={() => setTheme("system")}>🖥️ System</Button>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <Button onClick={() => setCount((c) => c + 1)} className="w-32">
          เพิ่ม {count}
        </Button>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          ทดลองการทำงานของ React
        </p>
      </div>

      <footer className="mt-10 text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} JP Visual & Docs
      </footer>
    </div>
  );
=======
import React from 'react'
import ThemeToggle from './components/ThemeToggle'

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-colors">
      <ThemeToggle />
      <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-300">
        Hello from <span className="text-black dark:text-white">Applicationlub</span>
      </h1>
    </main>
  )
>>>>>>> ce8e5d5 (Add og:image and SEO meta tags)
}