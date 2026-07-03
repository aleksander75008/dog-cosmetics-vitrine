/**
 * Vitest global setup file.
 *
 * Imports @testing-library/jest-dom to extend Vitest's `expect` with
 * DOM-specific matchers: toHaveTextContent, toBeInTheDocument, etc.
 *
 * Referenced in vite.config.js → test.setupFiles: ['src/test/setup.js']
 * The path string must match exactly — a typo here is the most common
 * Vitest initialisation failure in this workspace.
 */
import '@testing-library/jest-dom';
