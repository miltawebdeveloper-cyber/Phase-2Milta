import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite injects the bundled CSS/JS at the end of <head>. This post-build step
// runs afterwards and moves the JSON-LD <script> blocks to the very end of
// <head>, so the final head order is: SEO tags → favicon → CSS/JS → JSON-LD.
function seoHeadOrder() {
  return {
    name: 'seo-head-order',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        // 1. Move Vite's bundled stylesheet ahead of the module script so all
        //    CSS precedes all JS (section 8 before 9).
        const cssRe = /[ \t]*<link rel="stylesheet" crossorigin href="[^"]+\.css">\n?/;
        const css = html.match(cssRe);
        if (css) {
          html = html.replace(cssRe, '');
          html = html.replace(
            /([ \t]*)(<script type="module" crossorigin)/,
            `$1${css[0].trim()}\n$1$2`,
          );
        }
        // 2. Move JSON-LD blocks to the very end of <head> (section 10, last).
        const ldRe = /[ \t]*<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g;
        const blocks = html.match(ldRe);
        if (blocks) {
          html = html.replace(ldRe, '');
          const moved = blocks.map((b) => '  ' + b.trim()).join('\n') + '\n';
          html = html.replace('</head>', moved + '</head>');
        }
        return html;
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), seoHeadOrder()],
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
