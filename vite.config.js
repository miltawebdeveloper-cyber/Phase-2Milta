import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Split large third-party libs into their own cacheable chunks so the
        // browser can download them in parallel and reuse them across deploys.
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'mui-vendor': ['@mui/material', '@mui/system', '@emotion/react', '@emotion/styled'],
          'motion-vendor': ['framer-motion'],
        },
      },
    },
  },
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
