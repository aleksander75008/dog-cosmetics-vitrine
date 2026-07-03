import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite + Vitest configuration.
 *
 * NOTE: `globals` is intentionally omitted (defaults to false).
 * All test files use explicit `import { describe, it, expect } from 'vitest'`
 * to avoid the globals/import inconsistency finding (#5).
 */
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    // setup.js must be this exact path — a typo here is the most common Vitest init failure
    setupFiles: ['src/test/setup.js'],
    // globals: false is the default; kept explicit here for clarity
    globals: false,
  },
});
