<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./ThemeProvider";
import "./index.css";

// Google Analytics (GA4)
import ReactGA from "react-ga4";
ReactGA.initialize("G-XXXXXXXXXX"); // ← ใส่ Tracking ID จริงของคุณตรงนี้

// Register service worker (ถ้ามี)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("ServiceWorker registration successful:", registration);
      })
      .catch((error) => {
        console.log("ServiceWorker registration failed:", error);
      });
  });
}

// Render
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
=======
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((reg) => {
        console.log('SW registered: ', reg);
      })
      .catch((err) => {
        console.error('SW registration failed: ', err);
      });
  });
}
>>>>>>> ce8e5d5 (Add og:image and SEO meta tags)
