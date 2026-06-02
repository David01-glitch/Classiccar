import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0
  },
  ssr: {
    noExternal: ['react-router-dom']
  },
  // Emit directory-style HTML (dist/blog/index.html) so every static host —
  // AWS Amplify, Netlify, Vercel, GitHub Pages — serves clean URLs like /blog
  // natively without an SPA rewrite hijacking inner routes.
  ssgOptions: {
    dirStyle: 'nested'
  }
})
