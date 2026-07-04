import styles from './Navbar.module.css';

/**
 * Site-wide sticky navigation bar.
 * Contains the brand name and anchor links to page sections.
 */
export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.brand}>
          Pawfume &amp; Co
        </a>
        <nav aria-label="Main navigation">
          <ul className={styles.links}>
            <li><a href="#hero" className={styles.link}>Home</a></li>
            <li><a href="#gallery" className={styles.link}>Our Scents</a></li>
            <li><a href="#contact" className={styles.link}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
