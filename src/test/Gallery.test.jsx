import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Gallery from '../components/Gallery.jsx';

describe('Gallery component', () => {
  it('renders between 4 and 6 product cards', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.product-card');
    expect(cards.length).toBeGreaterThanOrEqual(4);
    expect(cards.length).toBeLessThanOrEqual(6);
  });

  it('each card contains an image', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.product-card');
    cards.forEach((card) => {
      const img = card.querySelector('img');
      expect(img).not.toBeNull();
    });
  });

  it('each card contains a category badge', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.product-card');
    cards.forEach((card) => {
      const badge = card.querySelector('.category-badge');
      expect(badge).not.toBeNull();
    });
  });

  it('each card contains a product name', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.product-card');
    cards.forEach((card) => {
      const name = card.querySelector('.product-name');
      expect(name).not.toBeNull();
      expect(name.textContent.trim().length).toBeGreaterThan(0);
    });
  });

  it('each card contains an Enquire link pointing to #contact', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.product-card');
    cards.forEach((card) => {
      const link = card.querySelector('a[href="#contact"]');
      expect(link).not.toBeNull();
      expect(link.textContent.trim()).toBe('Enquire');
    });
  });

  it('renders the gallery section with id="gallery"', () => {
    const { container } = render(<Gallery />);
    const section = container.querySelector('#gallery');
    expect(section).not.toBeNull();
  });

  it('renders the section heading', () => {
    const { container } = render(<Gallery />);
    const heading = container.querySelector('.gallery-heading h2');
    expect(heading).not.toBeNull();
    expect(heading.textContent).toBe('Our Products');
  });
});
