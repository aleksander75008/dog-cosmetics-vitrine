/**
 * Vitest global setup file.
 * Extends Vitest's `expect` with @testing-library/jest-dom DOM matchers
 * (toBeInTheDocument, toHaveValue, etc.).
 * Referenced in vite.config.js → test.setupFiles so it runs before every test.
 */
import '@testing-library/jest-dom';
