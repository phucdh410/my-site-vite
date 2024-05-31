import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@/components': fileURLToPath(
        new URL('./src/common/components', import.meta.url),
      ),
      '@/constants': fileURLToPath(
        new URL('./src/common/constants', import.meta.url),
      ),
      '@/assets': fileURLToPath(
        new URL('./src/common/assets', import.meta.url),
      ),
      '@/funcs': fileURLToPath(new URL('./src/utils/funcs', import.meta.url)),
      '@/types': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@/styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@/apis': fileURLToPath(new URL('./src/apis', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
