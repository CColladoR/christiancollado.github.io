
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Esto asegura que los assets se carguen correctamente en GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
