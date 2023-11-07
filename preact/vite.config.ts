import preact from '@preact/preset-vite';
import path from 'path';
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
    rollupOptions: {
      input: 'src/main.tsx',
      output: {
        sourcemap: true,
        format: 'iife', // Formato IIFE
        name: 'myApp', // Nombre de la función autoejecutable
        entryFileNames: 'checkout6-custom.js',
        chunkFileNames: 'chunks/[name]-custom.js',
        assetFileNames: 'checkout6-custom.css',
      },
    },
  },
});
