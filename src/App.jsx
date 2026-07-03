import Gallery from './components/Gallery.jsx';

/**
 * Root application component.
 * Renders the Gallery section and a stub #contact section
 * so the Enquire anchor smooth-scroll has a valid target.
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
          background: '#f9f5f0',
        }}
      >
        <h2>Contact Us</h2>
        <p>Reach out to enquire about any of our products.</p>
      </section>
    </>
  );
}
