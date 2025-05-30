<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { createHtmlPlugin } from "vite-plugin-html";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png"],
      manifest: {
        name: "JP Visual & Docs",
        short_name: "JP Visual",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#1A237E",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: "JP Visual & Docs",
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
=======
/** @format */

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
    build: {
        minify: "esbuild" // ✅ ใช้ esbuild แทน terser
    },
    plugins: [
        react(),
        VitePWA({
            strategies: "injectManifest",
            srcDir: "src",
            filename: "sw.ts",
            injectRegister: null, // ✅ เราจะ register เอง
            registerType: "autoUpdate",
            includeAssets: ["favicon.ico", "icon-192.png", "icon-512.png"],
            manifest: {
                name: "JP Visual & Docs",
                short_name: "JPVD",
                description:
                    "บริการครบวงจรด้านเอกสาร การเงิน วีซ่า และระบบหลังบ้าน",
                theme_color: "#1A237E",
                background_color: "#ffffff",
                display: "standalone",
                icons: [
                    {
                        src: "/icon-192.png",
                        sizes: "192x192",
                        type: "image/png"
                    },
                    {
                        src: "/icon-512.png",
                        sizes: "512x512",
                        type: "image/png"
                    }
                ]
            }
        })
    ]
})
>>>>>>> ce8e5d5 (Add og:image and SEO meta tags)
