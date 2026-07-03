import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Gallery from './Gallery.jsx';
import { products } from '../data/products.js';

describe('Gallery', () => {
  // ── Card count ────────────────────────────────────────────────────────────

  it('renders between 4 and 6 product cards', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.gallery__card');
    expect(cards.length).toBeGreaterThanOrEqual(4);
    expect(cards.length).toBeLessThanOrEqual(6);
  });

  it('renders exactly one card per entry in the products data array', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.gallery__card');
    expect(cards.length).toBe(products.length);
  });

  // ── Section structure ─────────────────────────────────────────────────────

  it('mounts inside a <section> element with id="gallery"', () => {
    const { container } = render(<Gallery />);
    const section = container.querySelector('section#gallery');
    expect(section).not.toBeNull();
  });

  it('renders the "Our Collection" heading with class gallery__heading', () => {
    const { container } = render(<Gallery />);
    const heading = container.querySelector('.gallery__heading');
    expect(heading).not.toBeNull();
    expect(heading.textContent.trim()).toBe('Our Collection');
  });

  // ── Per-card assertions ───────────────────────────────────────────────────

  it('each card contains an <img> with a non-empty alt attribute', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.gallery__card');
    cards.forEach((card) => {
      const img = card.querySelector('img');
      expect(img).not.toBeNull();
      expect(img.getAttribute('alt')).toBeTruthy();
    });
  });

  it('each card image alt matches the corresponding product name', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.gallery__card');
    cards.forEach((card, i) => {
      const img = card.querySelector('img');
      expect(img.getAttribute('alt')).toBe(products[i].name);
    });
  });

  it('each card contains a category badge via data-testid="category-badge"', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.gallery__card');
    cards.forEach((card) => {
      const badge = card.querySelector('[data-testid="category-badge"]');
      expect(badge).not.toBeNull();
      expect(badge.textContent.trim().length).toBeGreaterThan(0);
    });
  });

  it('each card category badge text matches the corresponding product category', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.gallery__card');
    cards.forEach((card, i) => {
      const badge = card.querySelector('[data-testid="category-badge"]');
      expect(badge.textContent.trim()).toBe(products[i].category);
    });
  });

  it('each card renders the product name in an <h3>', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.gallery__card');
    cards.forEach((card, i) => {
      const h3 = card.querySelector('h3');
      expect(h3).not.toBeNull();
      expect(h3.textContent.trim()).toBe(products[i].name);
    });
  });

  it('each card renders the product price inside a <strong> element', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.gallery__card');
    cards.forEach((card, i) => {
      const strong = card.querySelector('strong');
      expect(strong).not.toBeNull();
      expect(strong.textContent.trim()).toBe(products[i].price);
    });
  });

  it('each card contains an Enquire link pointing to "#contact"', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.gallery__card');
    cards.forEach((card) => {
      const link = card.querySelector('a[href="#contact"]');
      expect(link).not.toBeNull();
      expect(link.textContent.trim()).toBe('Enquire');
    });
  });

  // ── Data integrity spot-checks ────────────────────────────────────────────

  it('first card renders "Lavender Coat Shampoo" with category "Shampoo" and price "$18.99"', () => {
    const { container } = render(<Gallery />);
    const firstCard = container.querySelector('.gallery__card');
    expect(firstCard.querySelector('h3').textContent.trim()).toBe('Lavender Coat Shampoo');
    expect(firstCard.querySelector('[data-testid="category-badge"]').textContent.trim()).toBe('Shampoo');
    expect(firstCard.querySelector('strong').textContent.trim()).toBe('$18.99');
  });

  it('each card image src is a non-empty string (Unsplash URL present)', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.gallery__card');
    cards.forEach((card) => {
      const img = card.querySelector('img');
      const src = img.getAttribute('src');
      expect(src).toBeTruthy();
      expect(src.startsWith('https://images.unsplash.com/')).toBe(true);
    });
  });
});
