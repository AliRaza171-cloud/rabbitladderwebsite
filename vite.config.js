import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// During development, any request to /api is forwarded to the Express
// backend (planned to run on http://localhost:5000).
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
