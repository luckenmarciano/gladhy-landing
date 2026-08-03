import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The landing page is plain static output — Caddy serves the files directly,
// the same way it serves the app. Nothing here runs on the server.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // 5173 belongs to the app's dev server
    // In production Caddy proxies /api on this host to the backend, so the
    // contact form is same-origin and CORS never enters the picture. Mirroring
    // that here means the form is exercised the same way locally as live.
    proxy: {
      '/api': { target: 'http://localhost:4000', changeOrigin: true },
    },
  },
})
