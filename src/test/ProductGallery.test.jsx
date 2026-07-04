import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ProductGallery from '../components/ProductGallery.jsx';
import { products } from '../data/products.js';

describe('ProductGallery', () => {
  it('renders the correct number of product cards (4–6)', () => {
    const { container } = render(<ProductGallery />);
    const cards = container.querySelectorAll('.product-card');
    expect(cards.length).toBeGreaterThanOrEqual(4);
    expect(cards.length).toBeLessThanOrEqual(6);
    expect(cards.length).toBe(products.length);
  });

  it('renders the product name, category badge, price, and Enquire button for every card', () => {
    const { container } = render(<ProductGallery />);

    products.forEach((product) => {
      // Name
      const name = container.querySelector(
        `.product-card__name`
      );
      // We verify each product's name appears somewhere in the gallery
      const allNames = Array.from(
        container.querySelectorAll('.product-card__name')
      ).map((el) => el.textContent);
      expect(allNames).toContain(product.name);

      // Category badge
      const allBadges = Array.from(
        container.querySelectorAll('.product-card__badge')
      ).map((el) => el.textContent);
      expect(allBadges).toContain(product.category);

      // Price
      const allPrices = Array.from(
        container.querySelectorAll('.product-card__price')
      ).map((el) => el.textContent);
      expect(allPrices).toContain(product.price);

      // Suppress unused variable warning from the name query above
      void name;
    });
  });

  it('renders an Enquire link pointing to #contact for every card', () => {
    const { container } = render(<ProductGallery />);
    const enquireLinks = container.querySelectorAll('.product-card__enquire');

    expect(enquireLinks.length).toBe(products.length);

    enquireLinks.forEach((link) => {
      expect(link.getAttribute('href')).toBe('#contact');
      expect(link.textContent).toBe('Enquire');
    });
  });

  it('renders the gallery heading', () => {
    const { container } = render(<ProductGallery />);
    const heading = container.querySelector('.gallery-heading');
    expect(heading).not.toBeNull();
    expect(heading.textContent).toBe('Our Products');
  });
});
