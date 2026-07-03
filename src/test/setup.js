/**
 * Vitest setup file.
 * Imports @testing-library/jest-dom to extend Vitest's expect
 * with DOM matchers such as toBeInTheDocument(), toHaveTextContent(), etc.
 * Wired via vite.config.js → test.setupFiles.
 */
import '@testing-library/jest-dom';
