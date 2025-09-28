// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // ✅ Correct import for Tailwind v4

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss() // ✅ Use as a Vite plugin
  ],
})