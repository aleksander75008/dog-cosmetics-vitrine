# dog-cosmetics-vitrine

A dog cosmetics product vitrine built with React 18 and Vite.

---

## Gallery Component

The `Gallery` section (`src/components/Gallery.jsx`) renders a responsive CSS grid of product cards sourced from static data in `src/data/products.js`.

### Product Data (`src/data/products.js`)

Exports a `products` array of five dog cosmetics items:

| # | Name | Category |
|---|------|----------|
| 1 | Oat & Lavender Shampoo | Shampoo |
| 2 | Argan Silk Conditioner | Conditioner |
| 3 | Floral Mist Perfume | Perfume |
| 4 | Beeswax Paw Balm | Paw Care |
| 5 | Omega Coat Serum | Coat Serum |

Each product has: `id`, `name`, `category`, `price`, `description`, `image` (Unsplash URL with `?w=600&auto=format`).

### Card Anatomy

Each card renders:
- **Image** — `aspect-ratio: 4/3` wrapper, `object-fit: cover` image
- **Category badge** — `.category-badge` span
- **Name** — `.product-name` heading
- **Description** — short product copy
- **Price** — formatted string (e.g. `€28.00`)
- **Enquire button** — `<a href="#contact">` ghost button; smooth scroll handled by `scroll-behavior: smooth` on `html`

### Responsive Grid

| Viewport | Columns |
|----------|---------|
| ≥ 1024 px | 3 |
| 600 – 1023 px | 2 |
| < 600 px | 1 |

---

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Run tests (Vitest + React Testing Library)
npm test

# Production build
npm run build
```

---

## CI Pipeline

Defined in `.github/workflows/ci.yml`. Runs on every push and pull request:

1. **Install** — `npm install` (no `npm ci`; no `package-lock.json` is committed)
2. **Test** — `npm test` (Vitest in jsdom environment)
3. **Build** — `npm run build` (Vite production build)

The cache step is keyed on `package.json` content hash with a `restore-keys` fallback so the first run succeeds even without a warm cache.
