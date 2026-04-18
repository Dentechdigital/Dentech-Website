import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const base = env.VITE_BASE_URL?.replace(/\/?$/, '/') ?? '/';

  return {
    base,
    plugins: [react()],
    resolve: {
      alias: { '@': path.resolve(__dirname, 'src') },
    },
    server: { port: 3010, host: '0.0.0.0' },
  };
});
