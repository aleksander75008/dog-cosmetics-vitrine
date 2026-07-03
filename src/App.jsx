import React from 'react';
import Hero from './components/Hero.jsx';
import ProductHighlights from './components/ProductHighlights.jsx';

/**
 * Root application component.
 * Renders the landing page sections in order:
 * 1. Hero — full-viewport introduction with CTA
 * 2. ProductHighlights — three featured product cards
 */
export default function App() {
  return (
    <main>
      <Hero />
      <ProductHighlights />
    </main>
  );
}
