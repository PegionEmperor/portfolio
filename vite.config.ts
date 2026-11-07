import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Сайт обслуживается кастомным доменом из корня, поэтому base всегда '/'
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
