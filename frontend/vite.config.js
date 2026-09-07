import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    headers: {
      
      'Cross-Origin-Opener-Policy': 'same-origin',
      
      
      'X-Frame-Options': 'DENY',
      
      
      "Content-Security-Policy": "default-src 'self'; img-src 'self' https://*.cloudinary.com data:; connect-src 'self' https://vitality-vault-backend-c2878a5636af.herokuapp.com*; require-trusted-types-for 'script';"

    }
  },
  build: {
    outDir: "dist",
    emptyOutDir: true
  },
  preview: {
    allowedHosts: ["://herokuapp.com"]
  }
});
