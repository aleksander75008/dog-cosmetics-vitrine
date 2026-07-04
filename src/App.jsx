import ProductGallery from './components/ProductGallery.jsx';

/**
 * Root application component.
 * Renders the product gallery and a #contact anchor section
 * that the Enquire button smooth-scrolls to.
 */
export default function App() {
  return (
    <div>
      <header style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Dog Cosmetics Vitrine</h1>
        <p>Premium grooming products for your best friend.</p>
      </header>

      <main>
        <ProductGallery />
      </main>

      <section
        id="contact"
        style={{
          padding: '4rem 2rem',
          textAlign: 'center',
          background: '#f9f9f9',
          marginTop: '3rem',
        }}
      >
        <h2>Get in Touch</h2>
        <p>Interested in our products? Send us an enquiry and we will get back to you.</p>
        <p>
          <a href="mailto:hello@dogcosmetics.example">hello@dogcosmetics.example</a>
        </p>
      </section>
    </div>
  );
}
