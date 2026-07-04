import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ProductHighlights from './components/ProductHighlights/ProductHighlights';
import Contact from './components/Contact/Contact';

/**
 * Root application component.
 * Renders the full single-page layout: Navbar → Hero → ProductHighlights → Contact.
 */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductHighlights />
        <Contact />
      </main>
    </>
  );
}
