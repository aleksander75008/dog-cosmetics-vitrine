import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Gallery } from './Gallery.jsx';
import { products } from '../data/products.js';

describe('Gallery', () => {
  it('renders the correct number of product cards', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.product-card');
    expect(cards).toHaveLength(products.length);
  });

  it('renders the product name for each card', () => {
    const { container } = render(<Gallery />);
    products.forEach((product) => {
      const names = Array.from(
        container.querySelectorAll('.product-card__name')
      ).map((el) => el.textContent);
      expect(names).toContain(product.name);
    });
  });

  it('renders the price for each card', () => {
    const { container } = render(<Gallery />);
    products.forEach((product) => {
      const prices = Array.from(
        container.querySelectorAll('.product-card__price')
      ).map((el) => el.textContent);
      expect(prices).toContain(product.price);
    });
  });

  it('renders a category badge for each card', () => {
    const { container } = render(<Gallery />);
    const badges = container.querySelectorAll('.product-card__badge');
    expect(badges).toHaveLength(products.length);
  });

  it('includes at least one Perfume category badge', () => {
    const { container } = render(<Gallery />);
    const badges = Array.from(
      container.querySelectorAll('.product-card__badge')
    ).map((el) => el.textContent);
    expect(badges).toContain('Perfume');
  });

  it('renders an Enquire link pointing to #contact on every card', () => {
    const { container } = render(<Gallery />);
    const links = container.querySelectorAll('.product-card__enquire');
    expect(links).toHaveLength(products.length);
    links.forEach((link) => {
      expect(link.getAttribute('href')).toBe('#contact');
    });
  });

  it('renders an image with alt text for each card', () => {
    const { container } = render(<Gallery />);
    const images = container.querySelectorAll('.product-card__image');
    expect(images).toHaveLength(products.length);
    images.forEach((img) => {
      expect(img.getAttribute('alt')).toBeTruthy();
    });
  });
});
