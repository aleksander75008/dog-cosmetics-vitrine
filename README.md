# dog-cosmetics-vitrine

Landing page for Dog Cosmetics — built with React 18, Vite 5, and Vitest.

## Getting Started

> **⚠️ Important — `package-lock.json` must be generated locally before first push.**
>
> The CI pipeline uses `npm ci`, which requires a real `package-lock.json`
> produced by npm's own dependency resolver. This file **cannot** be
> AI-generated. Run the following once after cloning:
>
> ```bash
> npm install
> ```
>
> This creates `package-lock.json`. Commit it alongside your changes.
> Without it, the CI `npm ci` step will fail with:
> `"npm ci" can only install packages when your package.json and
> package-lock.json are in sync`.

### Prerequisites

- Node.js ≥ 20
- npm ≥ 10

### Install dependencies

```bash
npm install
```

### Development server

```bash
npm run dev
```

Opens at <http://localhost:5173> by default.

### Lint

```bash
npm run lint
```

Uses ESLint v9 flat config (`eslint.config.js`). No `--ext` flag required.

### Tests

```bash
npm test
```

Runs Vitest in `run` mode (single pass, no watch). Tests live in
`src/components/__tests__/` and use `@testing-library/react` with a
`jsdom` environment.

### Build

```bash
npm run build
```

Outputs to `dist/`.

## Project Structure

```
.
├── index.html                        # Vite entry point
├── vite.config.js                    # Vite + Vitest config
├── eslint.config.js                  # ESLint v9 flat config
├── package.json
├── package-lock.json                 # ← must be generated via `npm install`
├── src/
│   ├── main.jsx                      # React root
│   ├── App.jsx                       # Root component
│   ├── index.css                     # Global styles (scroll-behavior: smooth)
│   ├── components/
│   │   ├── Hero.jsx                  # Hero section (id=hero, min-height:100vh)
│   │   ├── Hero.css
│   │   ├── ProductHighlights.jsx     # 3 highlight cards (id=gallery)
│   │   ├── ProductHighlights.css
│   │   └── __tests__/
│   │       ├── Hero.test.jsx
│   │       └── ProductHighlights.test.jsx
│   └── test/
│       └── setup.js                  # jest-dom matchers
└── .github/
    └── workflows/
        └── ci.yml                    # install → lint → test
```

## CI Pipeline

The `.github/workflows/ci.yml` pipeline runs on every push and pull request:

1. **install** — `npm ci` (requires committed `package-lock.json`)
2. **lint** — `npm run lint` (ESLint v9, no `--ext` flag)
3. **test** — `npm test` (Vitest run)

All cache steps use `restore-keys` fallback so partial cache hits work
across lockfile changes.

## Design Decisions

| Decision | Rationale |
|---|---|
| `scroll-behavior: smooth` on `html` element | Required for cross-page anchor scrolling; setting it only on `.hero` would not affect the full-page scroll container |
| Gradient listed first in `background-image` | CSS layers first value on top; gradient must overlay the photo for WCAG AA contrast |
| `id="gallery"` on ProductHighlights | Hero CTA `href=#gallery` needs a real anchor target for UX |
| `className="highlight-card"` (exact) | Tests assert `querySelectorAll('.highlight-card').length === 3` |
| Explicit `import { describe, it, expect } from 'vitest'` | `globals: false` in vite.config.js; all test symbols are imported explicitly |
