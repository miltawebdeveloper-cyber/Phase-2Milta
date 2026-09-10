import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import https from 'node:https';

// Some ISPs (seen with ACT Broadband in India) hijack plaintext DNS for
// *.supabase.co and point it at a dead host, so the browser can't reach
// Supabase in local dev — blog reads fail with ERR_CONNECTION_CLOSED /
// ERR_QUIC_PROTOCOL_ERROR. This dev-only plugin resolves the Supabase host over
// DoH (encrypted DNS the ISP can't rewrite), then proxies /__supabase → the
// real Supabase origin, connecting straight to the resolved IP while keeping
// SNI and cert validation on the real hostname. src/api/blogs.js routes the
// client through it in dev. Production is untouched — it hits Supabase directly.
function supabaseDohProxy() {
  return {
    name: 'supabase-doh-proxy',
    apply: 'serve',
    async configureServer(server) {
      const targetUrl = loadEnv(server.config.mode, process.cwd(), '').VITE_SUPABASE_URL;
      if (!targetUrl) return;
      const host = new URL(targetUrl).hostname;

      let ip;
      try {
        const res = await fetch(`https://1.1.1.1/dns-query?name=${host}&type=A`, {
          headers: { accept: 'application/dns-json' },
          signal: AbortSignal.timeout(6000),
        });
        ip = (await res.json()).Answer?.find((a) => a.type === 1)?.data;
      } catch {
        /* fall through to the anycast fallback below */
      }
      if (!ip) ip = '172.64.149.246'; // Cloudflare anycast — verified reachable if DoH is blocked too

      // Pooled sockets to the pinned IP so only the first request pays the
      // (sometimes slow) cold TLS handshake to Cloudflare's edge.
      const agent = new https.Agent({ keepAlive: true, maxSockets: 8 });
      const forward = (path, headers, method, onRes) =>
        https.request({ host: ip, servername: host, port: 443, path, method, headers, agent }, onRes);

      server.config.logger.info(
        `  \x1b[32m➜\x1b[0m  \x1b[1mSupabase:\x1b[0m  /__supabase → ${host} @ ${ip} (DoH, ISP DNS bypass)`,
      );

      // Warm the connection at startup so the first blog fetch is fast.
      forward('/rest/v1/', { host, apikey: 'warmup' }, 'HEAD', (r) => r.resume())
        .on('error', () => {})
        .end();

      server.middlewares.use('/__supabase', (req, res) => {
        const upstream = new URL(req.url, targetUrl);
        const proxyReq = forward(
          upstream.pathname + upstream.search,
          { ...req.headers, host }, // connect by pinned IP; Host + SNI stay on the real host
          req.method,
          (proxyRes) => {
            res.writeHead(proxyRes.statusCode || 502, proxyRes.headers);
            proxyRes.pipe(res);
          },
        );
        proxyReq.on('error', (err) => {
          res.statusCode = 502;
          res.end(`supabase proxy error: ${err.message}`);
        });
        req.pipe(proxyReq);
      });
    },
  };
}

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
  plugins: [react(), seoHeadOrder(), supabaseDohProxy()],
  build: {
    // Vite inlines any imported asset under 4 KB as a base64 data: URI. Sixteen
    // of this site's images qualify, and the two carousels that use them
    // (CertificationsSection, ToolsSection) are Swiper loops, which render every
    // slide twice. The home page therefore shipped 61.3 KB of base64 inside its
    // HTML - 39% of the whole document, repeated on every single request because
    // markup is not cacheable the way an image file is. Emitting them as files
    // costs a few more requests and takes that 39% off the page.
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        // Split large third-party libs into their own cacheable chunks so the
        // browser can download them in parallel and reuse them across deploys.
        //
        // The function form exists for @mui/icons-material. Every icon is its
        // own module, so a page importing thirty of them produced thirty
        // separate chunks of 170-300 bytes each, every one of them a
        // <link rel="modulepreload"> and a round trip. A state page was making
        // 46 script requests for 1.9 MB; on a 150ms RTT the request count cost
        // more than the bytes did. Collapsing the icons into one chunk trades
        // that for a single fetch that every page reuses from cache.
        manualChunks(id) {
          if (id.includes('node_modules/@mui/icons-material')) return 'mui-icons';
          if (/node_modules\/(react|react-dom|react-router-dom)\//.test(id)) return 'react-vendor';
          if (/node_modules\/(@mui\/material|@mui\/system|@emotion\/react|@emotion\/styled)\//.test(id))
            return 'mui-vendor';
          if (id.includes('node_modules/framer-motion')) return 'motion-vendor';
          return undefined;
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
