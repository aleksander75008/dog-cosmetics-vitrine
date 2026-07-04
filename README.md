# dog-cosmetics-vitrine

## Development

### Prerequisites

- Node.js LTS (v20+)
- npm v10+

### Install dependencies

```bash
npm install
```

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server at `http://localhost:5173` |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across `src/` (ESLint v9 flat-config) |
| `npm test` | Run Vitest unit tests once (`vitest run`) |

### CI pipeline

GitHub Actions runs the following steps in order on every push and pull request:

```
npm install → npm run lint → npm test → npm run build
```

1. **lint** — ESLint v9 flat-config checks all `src/**/*.{js,jsx}` files
2. **test** — Vitest runs the component test suite
3. **build** — Vite production build validates the bundle compiles cleanly
