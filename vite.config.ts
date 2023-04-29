import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import filesize from 'rollup-plugin-filesize';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    filesize({
      format: {
        exponent: 2,
        spacer: ' ',
        standard: 'iec'
      }
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
