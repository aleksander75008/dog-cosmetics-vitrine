import Navbar from './components/Navbar/Navbar.jsx';
import SectionWrapper from './components/SectionWrapper/SectionWrapper.jsx';
import Button from './components/Button/Button.jsx';

/**
 * Root application component.
 * Renders the sticky Navbar followed by three anchor-linked sections
 * (hero, gallery, contact) so all components are visible on first load.
 */
export default function App() {
  return (
    <>
      <Navbar />

      <SectionWrapper id="hero">
        <h1>Luxury Grooming for Your Best Friend</h1>
        <p>
          Handcrafted, cruelty-free cosmetics made exclusively for dogs who
          deserve the finest.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', marginTop: 'var(--space-lg)' }}>
          <Button variant="primary">Shop Now</Button>
          <Button variant="ghost">Learn More</Button>
        </div>
      </SectionWrapper>

      <SectionWrapper id="gallery">
        <h2>Our Collection</h2>
        <p>
          From silky shampoos to paw-perfect balms — browse our curated range
          of premium dog-care products.
        </p>
        <div style={{ marginTop: 'var(--space-lg)' }}>
          <Button variant="primary">View All Products</Button>
        </div>
      </SectionWrapper>

      <SectionWrapper id="contact">
        <h2>Get in Touch</h2>
        <p>
          Questions about ingredients, wholesale enquiries, or just want to
          share a photo of your pup? We&apos;d love to hear from you.
        </p>
        <div style={{ marginTop: 'var(--space-lg)' }}>
          <Button variant="ghost">Send a Message</Button>
        </div>
      </SectionWrapper>
    </>
  );
}
