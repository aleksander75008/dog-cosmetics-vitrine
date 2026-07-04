import Button from '../Button/Button';
import styles from './Hero.module.css';

/**
 * Full-viewport hero section.
 * Background image from picsum.photos (seed-stable URL).
 * Dark overlay ensures WCAG AA contrast for cream text.
 * CTA smooth-scrolls to #gallery via CSS scroll-behavior.
 */
export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.headline}>
          Scents That Tell Your Pet&apos;s Story
        </h1>
        <p className={styles.subheadline}>
          Luxury fragrances crafted for dogs who deserve the finest — because
          every pup has a personality worth celebrating.
        </p>
        <Button as="a" href="#gallery" variant="primary">
          Explore Our Scents
        </Button>
      </div>
    </section>
  );
}
