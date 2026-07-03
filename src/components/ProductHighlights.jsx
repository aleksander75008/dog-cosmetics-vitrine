import React from 'react';
import './ProductHighlights.css';

/** @typedef {{ id: number, title: string, description: string }} HighlightCard */

/** @type {HighlightCard[]} */
const HIGHLIGHTS = [
  {
    id: 1,
    title: 'Nourishing Shampoo',
    description:
      'Gentle, sulphate-free formula enriched with oat extract and aloe vera for a silky, shiny coat.',
  },
  {
    id: 2,
    title: 'Paw Balm',
    description:
      'Protective balm with shea butter and beeswax that soothes cracked paws and shields against rough terrain.',
  },
  {
    id: 3,
    title: 'Detangling Spray',
    description:
      'Lightweight leave-in conditioner that eliminates knots and reduces brushing time — no rinsing needed.',
  },
];

/**
 * ProductHighlights section.
 *
 * Renders exactly 3 `.highlight-card` divs (className must match exactly
 * for the test assertion: querySelectorAll('.highlight-card').length === 3).
 *
 * The section carries id="gallery" so the Hero CTA href=#gallery
 * smooth-scrolls to a visible destination.
 */
export default function ProductHighlights() {
  return (
    <section id="gallery" className="product-highlights">
      <h2 className="highlights-heading">Our Bestsellers</h2>
      <div className="highlights-grid">
        {HIGHLIGHTS.map((card) => (
          <div key={card.id} className="highlight-card">
            <h3 className="highlight-card__title">{card.title}</h3>
            <p className="highlight-card__description">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
