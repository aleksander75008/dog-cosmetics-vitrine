import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite configuration.
 * The `test` block configures Vitest with jsdom so DOM APIs are available
 * in Hero.test.jsx, and points to the setup file that extends jest-dom matchers.
 */
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['src/test/setup.js'],
    globals: true,
  },
});
