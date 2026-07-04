# dog-cosmetics-vitrine

A product gallery vitrine for natural cosmetics, built with React + Vite.

> **Note:** `ProductGallery.jsx` is the canonical gallery component.
> `Gallery.jsx` does not exist in this project — all gallery functionality lives in `src/components/ProductGallery.jsx`.

## Product Catalogue

| ID  | Name                    | Category  | Price  |
| --- | ----------------------- | --------- | ------ |
| p1  | Oat & Lavender Shampoo  | Hair Care | €28.00 |
| p2  | Argan Silk Conditioner  | Hair Care | €32.00 |
| p3  | Floral Mist Perfume     | Fragrance | €45.00 |
| p4  | Beeswax Paw Balm        | Pet Care  | €18.00 |
| p5  | Omega Coat Serum        | Pet Care  | €38.00 |

## Getting Started

```bash
npm install
npm run dev
```

## Running Tests

```bash
npm test
```

## Scripts

| Script          | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start Vite dev server              |
| `npm run build` | Production build                   |
| `npm test`      | Run test suite once (vitest run)   |
| `npm run test:watch` | Run tests in watch mode       |

## Architecture

```
src/
  data/
    products.js          # Single source of truth for product data
  components/
    ProductCard.jsx      # Individual product card
    ProductCard.css
    ProductGallery.jsx   # Gallery grid (canonical component)
    ProductGallery.css
  __tests__/
    products.test.js     # Data shape tests
    ProductGallery.test.jsx  # Component integration tests
  test/
    setup.js             # jest-dom setup
  App.jsx
  App.css
  main.jsx
```
