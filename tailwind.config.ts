import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // เปิดใช้งาน Dark Mode แบบ class (สำคัญสำหรับ next-themes)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ตรวจจับไฟล์ React ทุกชนิด
  ],
  theme: {
    extend: {
      // สามารถเพิ่ม custom theme ได้ที่นี่
      colors: {
        primary: "#2563eb", // ตัวอย่างสี primary
        secondary: "#64748b",
      },
    },
  },
  plugins: [
    // คุณสามารถเพิ่ม plugins ที่ต้องใช้ เช่น:
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};

export default config;