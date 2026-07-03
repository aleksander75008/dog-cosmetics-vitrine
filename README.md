# dog-cosmetics-vitrine

Landing page for a premium dog cosmetics brand — built with React + Vite.

---

## Local development

```bash
# Install dependencies (generates / respects package-lock.json)
npm install

# Start dev server at http://localhost:5173
npm run dev

# Run unit tests (vitest run — single pass, no watch)
npm test

# Lint source files
npm run lint
```

> **Visual verification:** The Hero background image is applied via CSS only
> (`background-image` on `.hero` in `src/index.css`). It will not appear in
> jsdom-based tests — open the dev server in a real browser to verify it.

---

## CI pipeline

| Job | Command | Cache key |
|-----|---------|----------|
| Install | `npm install` | `hashFiles('**/package-lock.json')` |
| Lint | `npm run lint` | restored from Install |
| Test | `npm test` | `hashFiles('**/package-lock.json')` |

Both the Install and Test jobs key their caches on `**/package-lock.json`
(not `package.json`) so the cache is invalidated correctly when dependencies
change.

---

## Components

### `<Hero />`

- Full-viewport section (`min-height: 100vh`) with id `hero`.
- Background image is **CSS-only** — no `<img>` element — to avoid jsdom
  network errors in tests. Verify visually in a browser.
- Gradient overlay `<div aria-hidden="true" />` provides WCAG AA contrast.
- `.hero-content` has `max-width: 800px; margin: 0 auto` for wide-viewport
  centering.
- CTA `<a href="#gallery">Explore Collection</a>` triggers smooth scroll
  (via `html { scroll-behavior: smooth }` in `index.css`).

### `<ProductHighlights />`

- Three-card feature strip with id `gallery` (scroll target for Hero CTA).
- Cards: **Natural Ingredients**, **Cruelty-Free**, **Vet Approved**.
- Responsive CSS grid: 3 columns → 2 columns (≤768 px) → 1 column (≤480 px).

---

## Project structure

```
src/
  components/
    Hero.jsx
    ProductHighlights.jsx
  test/
    setup.js          ← imports @testing-library/jest-dom
    Hero.test.jsx
    ProductHighlights.test.jsx
  App.jsx
  main.jsx
  index.css
vite.config.js        ← globals: false; setupFiles: ['src/test/setup.js']
package.json
package-lock.json     ← committed; CI cache key targets this file
.github/workflows/ci.yml
```
