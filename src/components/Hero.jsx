import React from 'react';

/**
 * Hero section component.
 *
 * Layout decisions:
 * - id="hero" anchors internal navigation.
 * - min-height: 100vh applied via .hero CSS class.
 * - Background image is CSS-only (set in index.css on .hero).
 *   No <img> element is used — avoids jsdom network errors in tests
 *   and keeps the Unsplash image as a purely decorative background.
 * - .hero-overlay <div aria-hidden="true"> provides a gradient for
 *   WCAG AA contrast without adding semantic content.
 * - CTA <a> carries both visible text AND an aria-label for screen readers.
 */
export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/*
       * Decorative gradient overlay — aria-hidden so screen readers skip it.
       * Scoped inside #hero; tests query aria-hidden within the container
       * returned by render() to avoid bleeding into other test suites.
       */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* .hero-content has max-width + margin: 0 auto for wide-viewport centering */}
      <div className="hero-content">
        <h1 className="hero-headline">
          Premium Cosmetics for Your Beloved Dog
        </h1>

        <p className="hero-subheadline">
          Gentle, cruelty-free grooming products crafted with natural
          ingredients — because your dog deserves the very best.
        </p>

        {/*
         * Visible text: "Explore Collection" (required by toHaveTextContent assertion).
         * aria-label extends the accessible name for screen readers.
         * href="#gallery" triggers smooth scroll to ProductHighlights (html { scroll-behavior: smooth }).
         */}
        <a
          href="#gallery"
          className="hero-cta"
          aria-label="Explore Collection — scroll to gallery"
        >
          Explore Collection
        </a>
      </div>
    </section>
  );
}
