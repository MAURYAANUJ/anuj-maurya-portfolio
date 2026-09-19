import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves from /anuj-maurya-portfolio/
  // Set VITE_BASE_PATH=/ for Vercel or a custom domain.
  base: process.env.VITE_BASE_PATH ?? '/anuj-maurya-portfolio/',
});
