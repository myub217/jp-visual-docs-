import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"         // ใช้ class-based สำหรับ Tailwind
      defaultTheme="system"    // เริ่มต้นตาม system (เช่น dark หรือ light)
      enableSystem             // ให้ระบบเลือกตาม OS ได้
    >
      {children}
    </NextThemesProvider>
  );
}