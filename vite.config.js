import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite + Vitest configuration.
 * test.globals is false — all test files must explicitly import
 * { describe, it, expect } from 'vitest'.
 */
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['src/test/setup.js'],
    globals: false,
  },
});
