import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Hero from '../Hero.jsx';

describe('Hero component', () => {
  it('renders a section with id="hero"', () => {
    const { container } = render(<Hero />);
    const section = container.querySelector('#hero');
    expect(section).toBeInTheDocument();
  });

  it('has min-height: 100vh applied via the hero class', () => {
    const { container } = render(<Hero />);
    const section = container.querySelector('#hero');
    // The .hero class sets min-height:100vh in Hero.css.
    // We assert the className is present; CSS-in-JS value assertions
    // are not meaningful in jsdom (no CSSOM parsing of external sheets).
    expect(section).toHaveClass('hero');
  });

  it('renders an h1 with the product headline', () => {
    const { container } = render(<Hero />);
    const h1 = container.querySelector('h1');
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent('Premium Grooming for Your Best Friend');
  });

  it('renders a descriptive paragraph', () => {
    const { container } = render(<Hero />);
    const p = container.querySelector('p');
    expect(p).toBeInTheDocument();
    expect(p.textContent.length).toBeGreaterThan(0);
  });

  it('renders a CTA link pointing to #gallery', () => {
    const { container } = render(<Hero />);
    const cta = container.querySelector('a.hero-cta');
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute('href', '#gallery');
  });

  it('CTA has role="button" for accessibility', () => {
    const { container } = render(<Hero />);
    const cta = container.querySelector('a.hero-cta');
    expect(cta).toHaveAttribute('role', 'button');
  });
});
