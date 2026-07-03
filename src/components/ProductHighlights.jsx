import React from 'react';

/**
 * @typedef {Object} HighlightCard
 * @property {string} id       - Unique key for React reconciliation.
 * @property {string} icon     - Emoji icon representing the product benefit.
 * @property {string} title    - Short card heading.
 * @property {string} description - One-line benefit description.
 */

/** @type {HighlightCard[]} Exactly 3 cards — tests assert .length === 3 */
const CARDS = [
  {
    id: 'natural',
    icon: '🌿',
    title: 'Natural Ingredients',
    description:
      'Every formula is built from plant-based, hypoallergenic ingredients safe for sensitive skin.',
  },
  {
    id: 'cruelty-free',
    icon: '🐾',
    title: 'Cruelty-Free',
    description:
      'Never tested on animals. Certified cruelty-free and vegan across our entire product range.',
  },
  {
    id: 'vet-approved',
    icon: '🏅',
    title: 'Vet Approved',
    description:
      'Developed in partnership with veterinary dermatologists for safe, effective grooming.',
  },
];

/**
 * ProductHighlights section.
 *
 * Renders exactly 3 feature cards in a responsive CSS grid.
 * id="gallery" is the scroll target for the Hero CTA anchor.
 */
export default function ProductHighlights() {
  return (
    <section id="gallery" className="product-highlights">
      <h2 className="product-highlights__heading">Why Choose Us</h2>

      <div className="product-highlights__grid">
        {CARDS.map((card) => (
          <article key={card.id} className="highlight-card">
            <span className="highlight-card__icon" aria-hidden="true">
              {card.icon}
            </span>
            <h3 className="highlight-card__title">{card.title}</h3>
            <p className="highlight-card__description">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
