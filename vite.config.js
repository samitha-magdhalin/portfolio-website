import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    // allow Render domains (subdomains on render.com)
    allowedHosts: ['.onrender.com']
  }
})
