import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite configuration with React plugin and Vitest integration.
 * globals: false enforces explicit imports from 'vitest' in every test file.
 */
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['src/test/setup.js'],
    globals: false,
  },
});
