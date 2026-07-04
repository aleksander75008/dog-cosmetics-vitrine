# dog-cosmetics-vitrine

A greenfield React + Vite storefront for **Pawfect Treats** — handcrafted dog cosmetics and treats.

## Features

- **#contact section** — responsive two-column Contact & Order Inquiry form with full client-side validation and a success-state swap on clean submission.
- **Footer** — brand name, dynamic copyright year, and tagline.
- Zero network requests — all form state is managed locally via React `useState`.

## Tech Stack

| Tool | Purpose |
|---|---|
| [Vite](https://vitejs.dev/) | Dev server & build tooling |
| [React 18](https://react.dev/) | UI library |
| [Tailwind CSS v3](https://tailwindcss.com/) | Utility-first styling |
| [Vitest](https://vitest.dev/) | Unit / component test runner |
| [@testing-library/react](https://testing-library.com/) | DOM-based component testing |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the development server (http://localhost:5173)
npm run dev

# 3. Run the test suite (exits after one run)
npm test

# 4. Production build (output → dist/)
npm run build

# 5. Preview the production build locally
npm run preview
```

## Project Structure

```
src/
├── main.jsx                          # React 18 entry point
├── index.css                         # Tailwind directives
├── App.jsx                           # Root component
├── sections/
│   └── Contact/
│       ├── ContactSection.jsx        # Two-column form + validation logic
│       └── ContactSection.test.jsx   # Vitest + RTL test suite
├── components/
│   └── Footer/
│       └── Footer.jsx                # Brand footer
└── test/
    └── setup.js                      # jest-dom matcher setup
```

## Contact Section — Validation Rules

| Field | Rule |
|---|---|
| Name | Required (non-empty after trim) |
| Email | Required + `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` format check |
| Subject | Required (must select a non-default option) |
| Message | Required (non-empty after trim) |

On a clean submission the form is replaced by:
> **Thank you! We'll be in touch soon. 🐾**

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs on every push and pull request:
1. `npm install`
2. `npm test` (vitest run)
3. `npm run build`
