# Pawfume & Co — Dog Cosmetics Vitrine

> **Vite + React + CSS Modules** (greenfield, bootstrapped 2025)
> Branch: `feat/t1-t2-scaffold-design-system`

[![CI](https://github.com/<your-org>/dog-cosmetics-vitrine/actions/workflows/ci.yml/badge.svg)](https://github.com/<your-org>/dog-cosmetics-vitrine/actions/workflows/ci.yml)

---

## About

Pawfume & Co is a luxury pet fragrance brand. This repository is the marketing vitrine — a fast, accessible single-page site built with Vite + React and a token-driven CSS design system.

---

## Prerequisites

- **Node.js 18+** (Node 20 LTS recommended)
- **npm 9+** (bundled with Node 20)

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (opens at http://localhost:5173)
npm run dev

# 3. Run tests (Vitest)
npm test

# 4. Production build (output → dist/)
npm run build

# 5. Preview the production build locally
npm run preview
```

---

## Project Structure

```
src/
  components/
    Button/           # Reusable Button (primary + ghost variants)
    Navbar/           # Sticky navigation bar
    Hero/             # Full-viewport hero section (#hero)
    ProductHighlights/ # 3-card scent highlights grid (#gallery)
    Contact/          # Contact section (#contact)
    SectionWrapper/   # Layout utility wrapper
  styles/
    tokens.css        # CSS custom properties (colours, spacing, radius, fonts)
    global.css        # Box-sizing reset + base styles
  test/
    setup.js          # @testing-library/jest-dom import
  App.jsx
  main.jsx
```

---

## CI

GitHub Actions runs on every push and pull request to `main`:

1. `npm install` — install dependencies
2. `npm test` — Vitest smoke tests
3. `npm run build` — Vite production build

> **First-time setup:** After pushing to GitHub, visit the **Actions** tab and click **"Enable workflows"** if prompted — some organisations require this on first push.

---

## Tickets Delivered

| Ticket | Description |
|--------|-------------|
| T1 | Vite + React scaffold, design system tokens, Button, Navbar, SectionWrapper, Vitest config, CI |
| T2 | Hero section, ProductHighlights grid, Contact placeholder, full App wiring |
