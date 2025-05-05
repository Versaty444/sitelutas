import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    open: true
  },
  build: {
    sourcemap: true,
  },
  logLevel: 'info', // Aumenta o nível de log
});