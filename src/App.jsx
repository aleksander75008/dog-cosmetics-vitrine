import { ProductGallery } from './components/ProductGallery/ProductGallery.jsx';

/**
 * Root application component.
 * Renders the product gallery and a stub #contact section
 * so the ghost-button smooth-scroll anchor resolves correctly.
 */
export function App() {
  return (
    <>
      <ProductGallery />

      {/* Stub target for the ghost "Enquire" button's href="#contact" */}
      <section id="contact" aria-label="Contact">
        <div className="contact-inner">
          <h2>Get in Touch</h2>
          <p>
            Interested in a product? Drop us a message and our team will get
            back to you within one business day.
          </p>
          <a href="mailto:hello@pawfume.example.com" className="contact-link">
            hello@pawfume.example.com
          </a>
        </div>
      </section>
    </>
  );
}
