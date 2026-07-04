import React from 'react';
import { ProductGallery } from './components/ProductGallery';
import './App.css';

/**
 * Root application component.
 * Renders the product gallery and a contact section that serves as the
 * scroll target for all "Enquire" anchor links (href="#contact").
 *
 * @returns {JSX.Element}
 */
export function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-inner">
          <span className="app-logo">🌿 Dog Cosmetics</span>
          <nav>
            <a href="#gallery">Products</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <ProductGallery />
      </main>

      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <h2>Get in Touch</h2>
          <p>
            Interested in one of our products? Send us a message and we'll get
            back to you within 24 hours.
          </p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" type="text" placeholder="Your name" />

            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" type="email" placeholder="your@email.com" />

            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" rows={4} placeholder="Tell us which product you're interested in…" />

            <button type="submit" className="contact-submit">Send Enquiry</button>
          </form>
        </div>
      </section>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Dog Cosmetics Vitrine. All rights reserved.</p>
      </footer>
    </div>
  );
}
