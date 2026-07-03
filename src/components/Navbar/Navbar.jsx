import './Navbar.css';

/**
 * Site-wide sticky navigation bar.
 * Contains the brand name and anchor links to the three main sections.
 * Uses position:sticky so it remains visible while scrolling.
 */
export default function Navbar() {
  return (
    <header className="navbar" role="banner">
      <a href="#hero" className="navbar__brand" aria-label="Pawfume & Co — go to top">
        Pawfume &amp; Co
      </a>

      <nav aria-label="Main navigation">
        <ul className="navbar__links">
          <li>
            <a href="#hero" className="navbar__link">Home</a>
          </li>
          <li>
            <a href="#gallery" className="navbar__link">Collection</a>
          </li>
          <li>
            <a href="#contact" className="navbar__link">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
