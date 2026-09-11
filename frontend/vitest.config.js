import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.jsx"],  
    exclude: ["node_modules"],        
  },
});
