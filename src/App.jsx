import React from 'react';
import ContactSection from './components/ContactSection.jsx';

/**
 * Root application component.
 * Renders the contact section and a minimal footer.
 */
export default function App() {
  return (
    <>
      <main>
        <ContactSection />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Our Company. All rights reserved.</p>
      </footer>
    </>
  );
}
