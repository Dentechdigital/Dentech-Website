/**
 * Perf follow-up (if LCP/SEO still short after Tailwind build + lazy routes):
 * - Prerender marketing URLs (vite-plugin-prerender, react-snap, or SSR) so HTML carries meta + main copy without waiting for full JS.
 * - Astro + React islands is the strongest “marketing site + light interactivity” option if a larger refactor is acceptable.
 */
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
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
