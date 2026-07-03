import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Gallery } from './Gallery.jsx';
import { products } from '../data/products.js';

describe('Gallery', () => {
  it('renders the section with id="gallery"', () => {
    const { container } = render(<Gallery />);
    const section = container.querySelector('section#gallery');
    expect(section).toBeInTheDocument();
  });

  it('renders the "Our Collection" heading', () => {
    const { container } = render(<Gallery />);
    const heading = container.querySelector('.gallery__heading');
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe('Our Collection');
  });

  it(`renders exactly ${products.length} product cards`, () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.gallery__card');
    expect(cards).toHaveLength(products.length);
  });

  it('renders between 4 and 6 products (AC range)', () => {
    expect(products.length).toBeGreaterThanOrEqual(4);
    expect(products.length).toBeLessThanOrEqual(6);
  });

  it('includes at least one product with category "Perfume"', () => {
    const perfumes = products.filter((p) => p.category === 'Perfume');
    expect(perfumes.length).toBeGreaterThanOrEqual(1);
  });

  it('renders correct data for every product card (driven from products array)', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.gallery__card');

    products.forEach((product, index) => {
      const card = cards[index];

      // Name
      const name = card.querySelector('.gallery__card-name');
      expect(name).toBeInTheDocument();
      expect(name.textContent).toBe(product.name);

      // Category badge
      const badge = card.querySelector('.gallery__card-badge');
      expect(badge).toBeInTheDocument();
      expect(badge.textContent).toBe(product.category);

      // Price
      const price = card.querySelector('.gallery__card-price');
      expect(price).toBeInTheDocument();
      expect(price.textContent).toBe(product.price);

      // Description
      const description = card.querySelector('.gallery__card-description');
      expect(description).toBeInTheDocument();
      expect(description.textContent).toBe(product.description);

      // Image alt text matches product name
      const img = card.querySelector('.gallery__card-image');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('alt', product.name);

      // Image src is the product image URL
      expect(img).toHaveAttribute('src', product.image);

      // Enquire link points to #contact only — scroll behaviour not asserted (absent in jsdom)
      const enquireLink = card.querySelector('.gallery__card-enquire');
      expect(enquireLink).toBeInTheDocument();
      expect(enquireLink).toHaveAttribute('href', '#contact');
    });
  });
});
