import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Gallery from './Gallery.jsx';
import { products } from '../data/products.js';

describe('Gallery', () => {
  it('renders the correct number of product cards (between 4 and 6)', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.gallery__card');
    expect(cards.length).toBeGreaterThanOrEqual(4);
    expect(cards.length).toBeLessThanOrEqual(6);
  });

  it('renders exactly as many cards as there are products in the data array', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.gallery__card');
    expect(cards.length).toBe(products.length);
  });

  it('each card contains a product image with a non-empty alt attribute', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.gallery__card');

    cards.forEach((card) => {
      const img = card.querySelector('img');
      expect(img).not.toBeNull();
      expect(img.getAttribute('alt')).toBeTruthy();
    });
  });

  it('each card contains a category badge', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.gallery__card');

    cards.forEach((card) => {
      const badge = card.querySelector('[data-testid="category-badge"]');
      expect(badge).not.toBeNull();
      expect(badge.textContent.trim().length).toBeGreaterThan(0);
    });
  });

  it('each card contains a product name rendered in an h3', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.gallery__card');

    cards.forEach((card) => {
      const heading = card.querySelector('h3');
      expect(heading).not.toBeNull();
      expect(heading.textContent.trim().length).toBeGreaterThan(0);
    });
  });

  it('each card displays a price inside a <strong> element', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.gallery__card');

    cards.forEach((card) => {
      const price = card.querySelector('strong');
      expect(price).not.toBeNull();
      expect(price.textContent.trim().length).toBeGreaterThan(0);
    });
  });

  it('each card contains an Enquire link pointing to #contact', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.gallery__card');

    cards.forEach((card) => {
      const link = card.querySelector('a[href="#contact"]');
      expect(link).not.toBeNull();
      expect(link.textContent.trim()).toBe('Enquire');
    });
  });

  it('renders the "Our Collection" section heading', () => {
    const { container } = render(<Gallery />);
    const heading = container.querySelector('.gallery__heading');
    expect(heading).not.toBeNull();
    expect(heading.textContent.trim()).toBe('Our Collection');
  });

  it('mounts under a <section> with id="gallery"', () => {
    const { container } = render(<Gallery />);
    const section = container.querySelector('section#gallery');
    expect(section).not.toBeNull();
  });
});
