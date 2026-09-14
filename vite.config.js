import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Netlify publishes from "build"
    outDir: 'build',
  },
})
