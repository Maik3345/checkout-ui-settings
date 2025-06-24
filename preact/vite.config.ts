import path from 'node:path';
import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [preact()],
  build: {
    outDir: '../checkout-ui-custom',
    assetsDir: '',
    sourcemap: true,
    rollupOptions: {
      input: 'src/main.tsx',
      output: {
        format: 'iife',
        name: 'myApp',
        entryFileNames: 'checkout6-custom.js',
        chunkFileNames: 'chunks/[name]-custom.js',
        assetFileNames: 'checkout6-custom.css',
      },
    },
    // Added target configuration for Vite 6
    target: 'es2015',
  },
});
