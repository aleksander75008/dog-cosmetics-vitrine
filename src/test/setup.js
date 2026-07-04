/**
 * Vitest setup file.
 * Imports @testing-library/jest-dom to extend Vitest's `expect`
 * with DOM-specific matchers (toBeInTheDocument, toHaveClass, etc.).
 * Referenced via vite.config.js → test.setupFiles.
 */
import '@testing-library/jest-dom';
