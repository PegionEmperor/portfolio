const isGitHubPages = process.env.GITHUB_PAGES === 'true'

const isGitHubPages = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
  base: isGitHubPages ? '/portfolio/' : '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
