import styles from './ProductHighlights.module.css';

/**
 * @typedef {Object} HighlightCard
 * @property {string} id      - Unique identifier for the card.
 * @property {string} icon    - Emoji icon (no external image dependency).
 * @property {string} title   - Short product category title.
 * @property {string} description - One-line description of the highlight.
 */

/** @type {HighlightCard[]} */
const HIGHLIGHTS = [
  {
    id: 'natural-ingredients',
    icon: '🌿',
    title: 'Natural Ingredients',
    description:
      'Botanically sourced formulas free from parabens, sulphates, and artificial dyes.',
  },
  {
    id: 'precision-grooming',
    icon: '✂️',
    title: 'Precision Grooming',
    description:
      'Professional-grade tools engineered for every coat type and breed size.',
  },
  {
    id: 'paw-care',
    icon: '🐾',
    title: 'Paw & Skin Care',
    description:
      'Vet-approved balms and serums that soothe, protect, and restore sensitive skin.',
  },
];

/**
 * ProductHighlights component.
 *
 * Renders a horizontal strip of exactly 3 highlight cards immediately below
 * the Hero section. Each card uses an emoji icon to avoid any external image
 * dependencies and the associated broken-src console errors.
 *
 * @returns {JSX.Element} The product highlights section element.
 */
export default function ProductHighlights() {
  return (
    <section
      id="product-highlights"
      className={styles.section}
      aria-label="Product highlights"
    >
      <h2 className={styles.sectionTitle}>Why Choose Us</h2>
      <ul className={styles.grid} role="list">
        {HIGHLIGHTS.map(({ id, icon, title, description }) => (
          <li key={id} className={styles.card}>
            <span className={styles.icon} aria-hidden="true">
              {icon}
            </span>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
