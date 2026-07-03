# Pawfume & Co — Dog Cosmetics Vitrine

A premium dog-cosmetics brand storefront built with **Vite + React** and a plain-CSS design system.

## Stack

| Layer | Choice |
|---|---|
| Bundler | Vite 5 |
| UI | React 18 |
| Styling | Plain CSS with CSS custom properties (no CSS Modules, no Tailwind) |
| Language | JavaScript (JSX) |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
# → http://localhost:5173

# 3. Production build
npm run build

# 4. Preview the production build locally
npm run preview
```

## Design Tokens

All design tokens live in **`src/tokens.css`** as CSS custom properties and are imported globally at the top of `src/index.css`.

| Category | Tokens |
|---|---|
| Brand colours | `--color-cream`, `--color-gold`, `--color-soft-black` |
| Typography | `--font-display` (serif), `--font-body` (sans-serif) |
| Spacing scale | `--space-xs` · `--space-sm` · `--space-md` · `--space-lg` · `--space-xl` |
| Border radius | `--radius-sm`, `--radius-md` |
| Z-index | `--z-navbar` |

> **Convention:** every component CSS file must reference `var(--token-name)` exclusively — no hard-coded hex or px values. If a new value is needed, add it to `src/tokens.css` first.

## Project Structure

```
src/
  tokens.css                  # Design token definitions
  index.css                   # Global reset + @import tokens.css
  main.jsx                    # React entry point
  App.jsx                     # Root component
  components/
    Navbar/
      Navbar.jsx
      Navbar.css
    Button/
      Button.jsx
      Button.css
    SectionWrapper/
      SectionWrapper.jsx
      SectionWrapper.css
```
