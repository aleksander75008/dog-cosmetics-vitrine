import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite configuration with React plugin and Vitest setup.
 * - environment: jsdom for DOM testing
 * - setupFiles: imports @testing-library/jest-dom matchers
 * - globals: false — all vitest symbols must be explicitly imported in tests
 */
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['src/test/setup.js'],
    globals: false,
  },
});
