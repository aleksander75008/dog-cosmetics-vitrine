/**
 * Vitest global test setup.
 *
 * Imports @testing-library/jest-dom to extend Vitest's `expect` with
 * DOM-specific matchers such as `toBeInTheDocument`, `toHaveAttribute`, etc.
 *
 * This file is referenced by `setupFiles` in vite.config.js and is the
 * most common source of CI test-environment initialisation failures when
 * omitted — so it is explicitly required by the acceptance criteria.
 */
import '@testing-library/jest-dom';
