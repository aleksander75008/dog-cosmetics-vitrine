import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Minimal Vite configuration for the Pawfume & Co storefront.
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [react()],
});
