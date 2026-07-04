import Gallery from './components/Gallery.jsx';

/**
 * Root application component.
 * Renders the product gallery and a stub contact section
 * so that <a href="#contact"> links resolve without warnings.
 */
export default function App() {
  return (
    <>
      <Gallery />
      <section
        id="contact"
        style={{
          padding: '4rem 2rem',
          textAlign: 'center',
          background: '#fdf6f0',
        }}
      >
        <h2>Get in Touch</h2>
        <p>Contact us about any of our products.</p>
      </section>
    </>
  );
}
