import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      cssFileName: 'style',
      fileName: 'index',
      formats: ['es'],
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['react', 'react-dom', '@base-ui/react'],
    },
  },
});
