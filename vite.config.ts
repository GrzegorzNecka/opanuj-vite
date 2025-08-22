import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import packageJson from './package.json';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },

  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
    __APP_NAME__: JSON.stringify(packageJson.name),
  },
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
    }),
  ],
});
