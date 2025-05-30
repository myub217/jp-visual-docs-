"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var plugin_react_1 = require("@vitejs/plugin-react");
var vite_plugin_pwa_1 = require("vite-plugin-pwa");
exports.default = (0, vite_1.defineConfig)({
    build: {
        minify: "esbuild" // ✅ ใช้ esbuild แทน terser
    },
    plugins: [
        (0, plugin_react_1.default)(),
        (0, vite_plugin_pwa_1.VitePWA)({
            strategies: "injectManifest",
            srcDir: "src",
            filename: "sw.ts",
            injectRegister: null,
            registerType: "autoUpdate",
            includeAssets: ["favicon.ico", "icon-192.png", "icon-512.png"],
            manifest: {
                name: "JP Visual & Docs",
                short_name: "JPVD",
                description: "บริการครบวงจรด้านเอกสาร การเงิน วีซ่า และระบบหลังบ้าน",
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
});
