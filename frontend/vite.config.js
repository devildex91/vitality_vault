import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Maps the '@' symbol directly to your 'src' directory
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
