// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from 'tailwindcss' // ✅ Correct import

export default defineConfig({
  plugins: [react(), tailwind()],
})