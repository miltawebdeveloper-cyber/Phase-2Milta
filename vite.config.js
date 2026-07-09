import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    // Forward API calls to the local Express backend (server/server.js, port 5000)
    // so contact / newsletter / application submissions work in development.
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
});
