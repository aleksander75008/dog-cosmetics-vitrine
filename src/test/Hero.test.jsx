/**
 * Hero component unit tests.
 *
 * Explicit vitest imports — globals: false in vite.config.js.
 * Never mix implicit globals with explicit imports (finding #5).
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero.jsx';

describe('Hero', () => {
  it('renders the #hero section', () => {
    render(<Hero />);
    const section = document.getElementById('hero');
    expect(section).toBeInTheDocument();
  });

  it('renders the main headline', () => {
    render(<Hero />);
    expect(
      screen.getByRole('heading', { level: 1 }),
    ).toBeInTheDocument();
  });

  it('renders the subheadline paragraph', () => {
    render(<Hero />);
    expect(
      screen.getByText(/gentle, cruelty-free grooming products/i),
    ).toBeInTheDocument();
  });

  it('renders the CTA link with correct aria-label and visible text', () => {
    render(<Hero />);
    const cta = screen.getByRole('link', {
      name: /explore collection/i,
    });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute(
      'aria-label',
      'Explore Collection — scroll to gallery',
    );
    // BUG FIX (#4): assert visible text content, not only aria-label
    expect(cta).toHaveTextContent('Explore Collection');
    expect(cta).toHaveAttribute('href', '#gallery');
  });

  it('contains exactly one aria-hidden overlay within the Hero container', () => {
    // BUG FIX (#3): scope query to `container` from render(), not `document`,
    // so Hero's overlay div does not bleed into other test suites sharing JSDOM.
    const { container } = render(<Hero />);
    const hiddenEls = container.querySelectorAll('[aria-hidden="true"]');
    expect(hiddenEls).toHaveLength(1);
  });
});
