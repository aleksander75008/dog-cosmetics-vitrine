import styles from './Hero.module.css';

/**
 * Hero section component.
 *
 * Renders a full-viewport section with:
 * - A stable Unsplash background image applied via CSS (no <img> tag).
 * - A dark gradient overlay for WCAG-compliant text contrast.
 * - A centred headline, subheadline, and smooth-scroll CTA button.
 *
 * @returns {JSX.Element} The hero section element.
 */
export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Hero">
      {/* Gradient overlay — absolutely positioned, z-index 0 */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* Content sits above the overlay via z-index 1 */}
      <div className={styles.content}>
        <h1 className={styles.headline}>
          Luxury Grooming, Tailored for Your Dog
        </h1>
        <p className={styles.subheadline}>
          Premium, natural formulas crafted by veterinary dermatologists —
          because your companion deserves the finest care.
        </p>
        <a
          href="#gallery"
          className={styles.cta}
          aria-label="Explore our product collection"
        >
          Explore Collection
        </a>
      </div>
    </section>
  );
}
