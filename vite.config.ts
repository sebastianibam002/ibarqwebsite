import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr({
      svgrOptions: {
        icon: true, // optional, makes SVGs size like icons
      },
    }),],
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
