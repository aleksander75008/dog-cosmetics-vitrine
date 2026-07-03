import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero.jsx';
import ProductHighlights from './ProductHighlights.jsx';

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

describe('Hero', () => {
  it('renders the #hero section landmark', () => {
    render(<Hero />);
    // The section carries id="hero" — query by its accessible label
    expect(screen.getByRole('region', { name: /hero/i })).toBeInTheDocument();
  });

  it('renders the headline with the expected copy', () => {
    render(<Hero />);
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /luxury grooming, tailored for your dog/i,
      })
    ).toBeInTheDocument();
  });

  it('renders the subheadline paragraph', () => {
    render(<Hero />);
    expect(
      screen.getByText(/premium, natural formulas/i)
    ).toBeInTheDocument();
  });

  it('renders the CTA as a link with the exact label text', () => {
    render(<Hero />);
    // Acceptance criterion: button label must be "Explore Collection"
    const cta = screen.getByRole('link', { name: /explore collection/i });
    expect(cta).toBeInTheDocument();
  });

  it('CTA link points to the #gallery anchor for smooth-scroll', () => {
    render(<Hero />);
    const cta = screen.getByRole('link', { name: /explore collection/i });
    // href="#gallery" is the contract between Hero and the scroll target
    expect(cta).toHaveAttribute('href', '#gallery');
  });

  it('CTA link carries an accessible aria-label', () => {
    render(<Hero />);
    const cta = screen.getByRole('link', { name: /explore our product collection/i });
    expect(cta).toBeInTheDocument();
  });

  it('gradient overlay div is present and hidden from assistive tech', () => {
    render(<Hero />);
    // The overlay must be aria-hidden so screen readers skip the decorative div
    const overlay = document.querySelector('[aria-hidden="true"]');
    expect(overlay).not.toBeNull();
  });
});

// ---------------------------------------------------------------------------
// ProductHighlights
// ---------------------------------------------------------------------------

describe('ProductHighlights', () => {
  it('renders the section with an accessible label', () => {
    render(<ProductHighlights />);
    expect(
      screen.getByRole('region', { name: /product highlights/i })
    ).toBeInTheDocument();
  });

  it('renders exactly 3 highlight cards (h3 headings)', () => {
    render(<ProductHighlights />);
    // Acceptance criterion: exactly 3 card titles in the DOM
    const cardTitles = screen.getAllByRole('heading', { level: 3 });
    expect(cardTitles).toHaveLength(3);
  });

  it('renders the "Natural Ingredients" card with its description', () => {
    render(<ProductHighlights />);
    expect(screen.getByText('Natural Ingredients')).toBeInTheDocument();
    expect(
      screen.getByText(/botanically sourced formulas/i)
    ).toBeInTheDocument();
  });

  it('renders the "Precision Grooming" card with its description', () => {
    render(<ProductHighlights />);
    expect(screen.getByText('Precision Grooming')).toBeInTheDocument();
    expect(
      screen.getByText(/professional-grade tools/i)
    ).toBeInTheDocument();
  });

  it('renders the "Paw & Skin Care" card with its description', () => {
    render(<ProductHighlights />);
    expect(screen.getByText('Paw & Skin Care')).toBeInTheDocument();
    expect(
      screen.getByText(/vet-approved balms and serums/i)
    ).toBeInTheDocument();
  });

  it('renders cards inside a list so the grid is semantically correct', () => {
    render(<ProductHighlights />);
    // Cards are <li> elements inside a <ul role="list">
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
  });

  it('renders emoji icons that are hidden from assistive tech', () => {
    render(<ProductHighlights />);
    // Each icon span carries aria-hidden="true" — decorative, not content
    const hiddenSpans = document
      .querySelectorAll('[aria-hidden="true"]');
    // There are exactly 3 icon spans (one per card)
    expect(hiddenSpans).toHaveLength(3);
  });
});

// ---------------------------------------------------------------------------
// Hero + ProductHighlights — integrated render (mirrors App.jsx usage)
// ---------------------------------------------------------------------------

describe('Hero + ProductHighlights integrated', () => {
  it('renders both components together without throwing', () => {
    // Mirrors the composition in App.jsx; ensures no cross-component conflicts
    render(
      <>
        <Hero />
        <ProductHighlights />
      </>
    );

    // Hero CTA present
    expect(
      screen.getByRole('link', { name: /explore collection/i })
    ).toBeInTheDocument();

    // All 3 card titles present
    expect(screen.getByText('Natural Ingredients')).toBeInTheDocument();
    expect(screen.getByText('Precision Grooming')).toBeInTheDocument();
    expect(screen.getByText('Paw & Skin Care')).toBeInTheDocument();
  });
});
