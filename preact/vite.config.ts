import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
  plugins: [preact()],
  build: {
    outDir: '../checkout-ui-custom',
    assetsDir: '',
    rollupOptions: {
      input: 'src/main.tsx',
      output: {
        entryFileNames: 'checkout6-custom.js',
        chunkFileNames: 'chunks/[name]-custom.js',
        assetFileNames: 'checkout6-custom.css',
      },
    },
  },
})
