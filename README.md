# dog-cosmetics-vitrine

A lightweight product showcase built with **Vite + React 18**.

## Getting started

```bash
npm install   # resolves deps and creates package-lock.json locally
npm run dev   # start the Vite dev server
npm run build # production build
```

## Gallery component

| Item | Location |
|---|---|
| Component | `src/components/Gallery.jsx` |
| Styles | `src/components/Gallery.css` |
| Static data | `src/data/products.js` |

The `Gallery` section (`#gallery`) renders a responsive CSS Grid of product cards driven entirely by the `products` array exported from `src/data/products.js`. Each card displays:

- Product image (stable `picsum.photos` seed URL, `aspect-ratio: 4/3`)
- Category badge
- Product name
- Short description
- Price
- **Enquire** link (`href="#contact"`)

### Grid breakpoints

| Viewport | Columns |
|---|---|
| `< 600 px` | 1 |
| `600 px – 1023 px` | 2 |
| `≥ 1024 px` | 3 |

## Running tests

```bash
npm test          # vitest run (single pass, CI mode)
```

Tests live in `src/components/Gallery.test.jsx` and use **Vitest** + **@testing-library/react**. All product-data assertions are driven from the `products` array — no hardcoded string literals — so tests remain valid if product details change.

## jsdom / scroll-behavior constraint

`scroll-behavior: smooth` is declared in `src/index.css`, which is imported **only** by `src/main.jsx`. It is therefore never evaluated in the jsdom test environment (jsdom does not implement scroll behaviour). Tests assert `href="#contact"` on Enquire links but make no scroll-behaviour assertions.
