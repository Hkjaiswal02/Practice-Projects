import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // 👈 ensures assets load correctly after deployment
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist", // 👈 tells Vercel where your build output goes
  },
});
