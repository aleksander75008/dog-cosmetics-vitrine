// Extends Vitest's expect with @testing-library/jest-dom matchers.
// globals: false means Vitest does NOT inject `expect` as a global, so the
// bare `import '@testing-library/jest-dom'` fails (it calls the global expect
// internally). Instead we import the matchers object and extend explicitly.
import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
