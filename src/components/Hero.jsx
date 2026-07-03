import React from 'react';
import './Hero.css';

/**
 * Hero section component.
 *
 * - id="hero" for direct anchor targeting.
 * - Full-viewport height (min-height: 100vh) set via Hero.css.
 * - Unsplash background image with a semi-transparent overlay for
 *   WCAG AA contrast (rgba(0,0,0,0.5) layered over the photo).
 * - CTA button links to #gallery (the ProductHighlights section).
 */
export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Premium Grooming for Your Best Friend</h1>
        <p>
          Discover our all-natural dog cosmetics — crafted with love,
          tested by tails.
        </p>
        <a href="#gallery" className="hero-cta" role="button">
          Explore Collection
        </a>
      </div>
    </section>
  );
}
