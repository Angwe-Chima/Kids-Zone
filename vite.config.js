import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  
  // Use "/" for local dev, repo name for production
  base: command === 'serve' ? '/' : '/Kids-Zone/',
  
  server: {
    port: 5173,
  },
}))