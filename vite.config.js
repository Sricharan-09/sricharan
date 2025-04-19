import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/sricharan/',
  assetsInclude: ['**/*.docx', '**/*.pdf'], // Adding docx and pdf files as assets
})
