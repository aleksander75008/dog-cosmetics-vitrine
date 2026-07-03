# dog-cosmetics-vitrine

A luxury dog grooming product showcase built with Vite + React.

## Development

### Prerequisites

- Node.js ≥ 20
- npm ≥ 10

### Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server (http://localhost:5173)
npm run dev

# 3. Run the test suite (Vitest)
npm test

# 4. Lint the source files (ESLint)
npm run lint

# 5. Build for production
npm run build
```

### Project structure

```
├── index.html                   # Vite entry HTML
├── vite.config.js               # Vite + Vitest configuration
├── src/
│   ├── main.jsx                 # React DOM entry point
│   ├── App.jsx                  # Root component
│   ├── index.css                # Global styles (reset, scroll-behavior)
│   ├── components/
│   │   ├── Hero.jsx             # Full-viewport hero section
│   │   ├── Hero.module.css      # Scoped hero styles
│   │   ├── ProductHighlights.jsx# 3-card highlight strip
│   │   ├── ProductHighlights.module.css
│   │   └── Hero.test.jsx        # Vitest component tests
│   └── test/
│       └── setup.js             # jest-dom matcher setup
└── .github/workflows/ci.yml     # GitHub Actions: Install → Lint → Test
```

### CI pipeline

Pushes and pull requests to any branch trigger the GitHub Actions workflow
defined in `.github/workflows/ci.yml`, which runs three sequential jobs:

| Job | Command |
|-----|---------|
| Install | `npm ci` |
| Lint | `npm run lint` |
| Test | `npm test` |
