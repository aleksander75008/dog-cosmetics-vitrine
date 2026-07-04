import highlightsData from './highlightsData';
import styles from './ProductHighlights.module.css';

/**
 * Product highlights section.
 * Renders exactly 3 fragrance cards in a responsive CSS grid.
 * Section id="gallery" is the scroll target for the Hero CTA.
 */
export default function ProductHighlights() {
  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Our Signature Scents</h2>
        <div className={styles.grid}>
          {highlightsData.map((item) => (
            <article key={item.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
