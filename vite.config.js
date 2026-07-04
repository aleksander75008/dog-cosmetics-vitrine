import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite + Vitest configuration.
 * test.globals is true — Vitest injects expect (and other globals) before
 * setup files run, allowing @testing-library/jest-dom to call
 * expect.extend(matchers) successfully in src/test/setup.js.
 * Test files may still explicitly import { describe, it, expect } from
 * 'vitest'; those imports remain valid and harmless alongside globals.
 */
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['src/test/setup.js'],
    globals: true,
  },
});
