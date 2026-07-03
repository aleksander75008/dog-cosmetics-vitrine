import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite configuration with Vitest settings.
 * Uses jsdom environment for DOM-based component tests.
 */
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['src/test/setup.js'],
  },
});
