import Hero from './components/Hero.jsx';
import ProductHighlights from './components/ProductHighlights.jsx';

/**
 * Root application component.
 * Renders the Hero section followed by the ProductHighlights strip.
 * The #gallery anchor below gives the Hero CTA a smooth-scroll target.
 */
export default function App() {
  return (
    <>
      <Hero />
      <ProductHighlights />
      {/* Placeholder gallery section — smooth-scroll CTA target */}
      <section id="gallery" aria-label="Gallery coming soon">
        <p style={{ textAlign: 'center', padding: '4rem 1rem', color: '#555' }}>
          Gallery coming soon.
        </p>
      </section>
    </>
  );
}
