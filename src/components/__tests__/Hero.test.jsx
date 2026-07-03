import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Hero from '../Hero.jsx';

describe('Hero component', () => {
  it('renders a <section> with id="hero"', () => {
    const { container } = render(<Hero />);
    const section = container.querySelector('#hero');
    expect(section).toBeInTheDocument();
    expect(section.tagName).toBe('SECTION');
  });

  it('section carries the "hero" class (which applies min-height: 100vh in CSS)', () => {
    const { container } = render(<Hero />);
    const section = container.querySelector('#hero');
    expect(section).toHaveClass('hero');
  });

  it('renders an h1 headline inside .hero-content', () => {
    const { container } = render(<Hero />);
    const heroContent = container.querySelector('.hero-content');
    expect(heroContent).toBeInTheDocument();
    const h1 = heroContent.querySelector('h1');
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent('Premium Grooming for Your Best Friend');
  });

  it('renders a non-empty subheadline paragraph inside .hero-content', () => {
    const { container } = render(<Hero />);
    const heroContent = container.querySelector('.hero-content');
    const p = heroContent.querySelector('p');
    expect(p).toBeInTheDocument();
    expect(p.textContent.trim().length).toBeGreaterThan(0);
  });

  it('renders the CTA anchor with href="#gallery" inside .hero-content', () => {
    const { container } = render(<Hero />);
    const heroContent = container.querySelector('.hero-content');
    const cta = heroContent.querySelector('a.hero-cta');
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute('href', '#gallery');
  });

  it('CTA anchor has role="button" for accessibility', () => {
    const { container } = render(<Hero />);
    const cta = container.querySelector('a.hero-cta');
    expect(cta).toHaveAttribute('role', 'button');
  });

  it('CTA label is non-empty', () => {
    const { container } = render(<Hero />);
    const cta = container.querySelector('a.hero-cta');
    expect(cta.textContent.trim().length).toBeGreaterThan(0);
  });

  it('h1, p, and CTA are all present together inside .hero-content', () => {
    const { container } = render(<Hero />);
    const heroContent = container.querySelector('.hero-content');
    expect(heroContent.querySelector('h1')).toBeInTheDocument();
    expect(heroContent.querySelector('p')).toBeInTheDocument();
    expect(heroContent.querySelector('a.hero-cta')).toBeInTheDocument();
  });
});
