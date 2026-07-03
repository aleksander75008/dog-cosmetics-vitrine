import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite configuration.
 * - React plugin for JSX transform.
 * - Vitest config: jsdom environment so RTL render() works,
 *   setupFiles wires @testing-library/jest-dom matchers.
 */
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['src/test/setup.js'],
    globals: false,
  },
});
