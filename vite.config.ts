/**
 * Perf follow-up (if LCP/SEO still short after Tailwind build + lazy routes):
 * - Prerender marketing URLs (vite-plugin-prerender, react-snap, or SSR) so HTML carries meta + main copy without waiting for full JS.
 * - Astro + React islands is the strongest “marketing site + light interactivity” option if a larger refactor is acceptable.
 */
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const analyze = process.env.ANALYZE === 'true';

    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          injectRegister: 'auto',
          includeAssets: ['favicon.png'],
          manifest: {
            name: 'Dentech Digital',
            short_name: 'Dentech',
            description: 'Ottawa dental marketing agency',
            theme_color: '#fafaf9',
            background_color: '#fafaf9',
            display: 'browser',
            start_url: '/',
            scope: '/',
            icons: [{ src: 'favicon.png', sizes: '32x32', type: 'image/png', purpose: 'any' }],
          },
          workbox: {
            // Keep precache small for faster first SW install on mobile; images use runtime cache below.
            globPatterns: ['**/*.{js,css,html,ico,woff2}'],
            maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
            navigateFallback: '/index.html',
            navigateFallbackDenylist: [/^\/\.netlify\//, /\.[a-z0-9]+$/i],
            runtimeCaching: [
              {
                urlPattern: ({ request, url }) =>
                  request.destination === 'image' && url.origin === self.location.origin,
                handler: 'StaleWhileRevalidate',
                options: {
                  cacheName: 'dentech-images',
                  expiration: { maxEntries: 64, maxAgeSeconds: 60 * 60 * 24 * 30 },
                },
              },
            ],
          },
        }),
        analyze &&
          visualizer({
            filename: 'dist/stats.html',
            gzipSize: true,
            brotliSize: true,
            template: 'treemap',
            open: false,
          }),
      ].filter(Boolean),
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
