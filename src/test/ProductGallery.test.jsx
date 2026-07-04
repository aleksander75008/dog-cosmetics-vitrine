import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ProductGallery from '../components/ProductGallery.jsx';
import { products } from '../data/products.js';

describe('ProductGallery', () => {
  it('renders between 4 and 6 product cards matching the products data length', () => {
    const { container } = render(<ProductGallery />);
    const cards = container.querySelectorAll('.product-card');
    expect(cards.length).toBeGreaterThanOrEqual(4);
    expect(cards.length).toBeLessThanOrEqual(6);
    expect(cards.length).toBe(products.length);
  });

  it('renders the gallery heading "Our Products"', () => {
    const { container } = render(<ProductGallery />);
    const heading = container.querySelector('.gallery-heading');
    expect(heading).not.toBeNull();
    expect(heading.textContent).toBe('Our Products');
  });

  it('renders the gallery inside a section with aria-label "Product gallery"', () => {
    const { container } = render(<ProductGallery />);
    const section = container.querySelector('section[aria-label="Product gallery"]');
    expect(section).not.toBeNull();
  });

  it('renders the grid container', () => {
    const { container } = render(<ProductGallery />);
    const grid = container.querySelector('.gallery-grid');
    expect(grid).not.toBeNull();
  });

  it('renders every product name from the data source', () => {
    const { container } = render(<ProductGallery />);
    const renderedNames = Array.from(
      container.querySelectorAll('.product-card__name')
    ).map((el) => el.textContent);

    products.forEach((product) => {
      expect(renderedNames).toContain(product.name);
    });
  });

  it('renders every product category badge from the data source', () => {
    const { container } = render(<ProductGallery />);
    const renderedBadges = Array.from(
      container.querySelectorAll('.product-card__badge')
    ).map((el) => el.textContent);

    products.forEach((product) => {
      expect(renderedBadges).toContain(product.category);
    });
  });

  it('renders every product price from the data source', () => {
    const { container } = render(<ProductGallery />);
    const renderedPrices = Array.from(
      container.querySelectorAll('.product-card__price')
    ).map((el) => el.textContent);

    products.forEach((product) => {
      expect(renderedPrices).toContain(product.price);
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

  it('renders an image for every product card', () => {
    const { container } = render(<ProductGallery />);
    const images = container.querySelectorAll('.product-card__image');
    expect(images.length).toBe(products.length);
    images.forEach((img) => {
      expect(img.getAttribute('src')).not.toBe('');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });
});
