import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
   server: {
    proxy: {
      '/apis': {
        target: 'https://apis.ccbp.in',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/apis/, ''),
      },
    },
  },
})
