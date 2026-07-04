import ContactSection from './sections/Contact/ContactSection.jsx';
import Footer from './components/Footer/Footer.jsx';

/**
 * Root application component.
 * Renders the contact section anchored at #contact and the site footer.
 */
export default function App() {
  return (
    <>
      <main id="contact">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
