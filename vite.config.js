import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Minimal Vite configuration for the Pawfume gallery app.
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
  },
});
