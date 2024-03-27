import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/components': fileURLToPath(
        new URL('./src/common/components', import.meta.url),
      ),
      '@/constants': fileURLToPath(
        new URL('./src/common/constants', import.meta.url),
      ),
      '@/funcs': fileURLToPath(new URL('./src/utils/funcs', import.meta.url)),
      '@/types': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@/styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@/apis': fileURLToPath(new URL('./src/apis', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
