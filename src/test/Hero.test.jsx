/**
 * Hero component — focused unit tests.
 *
 * Explicit vitest imports: vite.config.js has globals: false.
 * Never mix implicit globals with explicit imports.
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero.jsx';

describe('Hero', () => {
  // ── Structure ────────────────────────────────────────────────────────────

  it('renders a <section> with id="hero"', () => {
    const { container } = render(<Hero />);
    const section = container.querySelector('#hero');
    expect(section).toBeInTheDocument();
    expect(section.tagName).toBe('SECTION');
  });

  // ── Headline ─────────────────────────────────────────────────────────────

  it('renders an h1 headline visible to screen readers', () => {
    render(<Hero />);
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(/premium cosmetics for your beloved dog/i);
  });

  // ── Subheadline ───────────────────────────────────────────────────────────

  it('renders the subheadline paragraph with key copy', () => {
    render(<Hero />);
    expect(
      screen.getByText(/gentle, cruelty-free grooming products/i),
    ).toBeInTheDocument();
  });

  // ── CTA link ─────────────────────────────────────────────────────────────

  it('renders the CTA as an <a> pointing to #gallery', () => {
    render(<Hero />);
    const cta = screen.getByRole('link', { name: /explore collection/i });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute('href', '#gallery');
  });

  it('CTA has the exact visible text "Explore Collection" (toHaveTextContent)', () => {
    // AC: visible label text must be asserted independently of aria-label.
    render(<Hero />);
    const cta = screen.getByRole('link', { name: /explore collection/i });
    expect(cta).toHaveTextContent('Explore Collection');
  });

  it('CTA aria-label extends the accessible name for screen readers', () => {
    render(<Hero />);
    const cta = screen.getByRole('link', { name: /explore collection/i });
    expect(cta).toHaveAttribute(
      'aria-label',
      'Explore Collection — scroll to gallery',
    );
  });

  // ── Overlay / aria-hidden ─────────────────────────────────────────────────

  it('contains exactly one aria-hidden element (the gradient overlay) within the Hero container', () => {
    // EDGE CASE: scope to `container` returned by render(), NOT document.
    // Using document.querySelectorAll would count aria-hidden elements from
    // other tests sharing the same JSDOM document, producing a false count.
    const { container } = render(<Hero />);
    const hiddenEls = container.querySelectorAll('[aria-hidden="true"]');
    expect(hiddenEls).toHaveLength(1);
  });

  it('the aria-hidden overlay carries the hero-overlay class (gradient for WCAG AA contrast)', () => {
    const { container } = render(<Hero />);
    const overlay = container.querySelector('[aria-hidden="true"]');
    expect(overlay).toHaveClass('hero-overlay');
  });

  // ── No <img> element (background is CSS-only) ─────────────────────────────

  it('renders no <img> element — background image is CSS-only to avoid jsdom network requests', () => {
    const { container } = render(<Hero />);
    expect(container.querySelectorAll('img')).toHaveLength(0);
  });
});
