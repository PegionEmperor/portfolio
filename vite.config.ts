import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const isGitHubPages = process.env.GITHUB_PAGES === 'true'

const isGitHubPages = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
    base: isGitHubPages ? '/portfolio/' : '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
