import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    outDir: "dist",
    emptyOutDir: true
  },
  preview: {
    allowedHosts: ["vitality-vault-frontend-c226e07c9727.herokuapp.com"]
  }
});
