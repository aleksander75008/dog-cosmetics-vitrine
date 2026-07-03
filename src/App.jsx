import { Gallery } from './components/Gallery.jsx';

/**
 * App is the root component. It renders the product gallery and a
 * contact section that serves as the smooth-scroll anchor target.
 */
export function App() {
  return (
    <>
      <header style={{ padding: '2rem 1rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#1a1a2e' }}>
          Our Collection
        </h1>
        <p style={{ color: '#555', marginTop: '0.5rem' }}>
          Discover our curated range of premium beauty products.
        </p>
      </header>

      <main>
        <Gallery />
      </main>

      <section
        id="contact"
        style={{
          padding: '4rem 1rem',
          textAlign: 'center',
          background: '#f9f5ff',
          marginTop: '2rem',
        }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a1a2e' }}>
          Get in Touch
        </h2>
        <p style={{ color: '#555', marginTop: '0.5rem' }}>
          Interested in a product? Send us an enquiry and we'll get back to you.
        </p>
        <a
          href="mailto:hello@example.com"
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            background: '#7c3aed',
            color: '#fff',
            padding: '0.6rem 1.5rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          hello@example.com
        </a>
      </section>
    </>
  );
}
