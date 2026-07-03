import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Gallery } from './Gallery.jsx';
import { products } from '../data/products.js';

// NOTE: scroll-behavior: smooth is declared in src/index.css, which is only
// imported via src/main.jsx and is therefore absent from the jsdom test
// environment. Enquire-link tests assert only href='#contact' and deliberately
// make no scroll-behaviour assertions.

describe('Gallery — section structure', () => {
  it('renders a <section> with id="gallery"', () => {
    const { container } = render(<Gallery />);
    const section = container.querySelector('section#gallery');
    expect(section).toBeInTheDocument();
  });

  it('renders the heading with text "Our Collection"', () => {
    const { container } = render(<Gallery />);
    const heading = container.querySelector('.gallery__heading');
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe('Our Collection');
  });

  it('renders a grid container inside the section', () => {
    const { container } = render(<Gallery />);
    const grid = container.querySelector('.gallery__grid');
    expect(grid).toBeInTheDocument();
  });
});

describe('Gallery — product count', () => {
  it(`renders exactly ${products.length} product cards`, () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.gallery__card');
    expect(cards).toHaveLength(products.length);
  });

  it('renders between 4 and 6 product cards (acceptance-criteria range)', () => {
    expect(products.length).toBeGreaterThanOrEqual(4);
    expect(products.length).toBeLessThanOrEqual(6);
  });
});

describe('Gallery — products data shape', () => {
  it('every product has the required fields: id, name, category, price, description, image', () => {
    products.forEach((product) => {
      expect(typeof product.id).toBe('number');
      expect(typeof product.name).toBe('string');
      expect(product.name.length).toBeGreaterThan(0);
      expect(typeof product.category).toBe('string');
      expect(product.category.length).toBeGreaterThan(0);
      expect(typeof product.price).toBe('string');
      expect(product.price.length).toBeGreaterThan(0);
      expect(typeof product.description).toBe('string');
      expect(product.description.length).toBeGreaterThan(0);
      expect(typeof product.image).toBe('string');
      expect(product.image.length).toBeGreaterThan(0);
    });
  });

  it('all product ids are unique', () => {
    const ids = products.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(products.length);
  });

  it('includes at least one product with category "Perfume"', () => {
    const perfumes = products.filter((p) => p.category === 'Perfume');
    expect(perfumes.length).toBeGreaterThanOrEqual(1);
  });

  it('all image URLs are picsum.photos URLs (stable, no 404)', () => {
    products.forEach((product) => {
      expect(product.image).toMatch(/^https:\/\/picsum\.photos\//);
    });
  });
});

describe('Gallery — per-card rendered content (driven from products array)', () => {
  it('renders name, category badge, price, description, image and enquire link for every card', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.gallery__card');

    products.forEach((product, index) => {
      const card = cards[index];

      // Product name
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

      // Image — alt text and src driven from data
      const img = card.querySelector('.gallery__card-image');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('alt', product.name);
      expect(img).toHaveAttribute('src', product.image);

      // Enquire link — href only; scroll-behaviour not assertable in jsdom
      const enquireLink = card.querySelector('.gallery__card-enquire');
      expect(enquireLink).toBeInTheDocument();
      expect(enquireLink).toHaveAttribute('href', '#contact');
      expect(enquireLink.textContent).toBe('Enquire');
    });
  });
});

describe('Gallery — image wrapper', () => {
  it('every card has an image wrapper element', () => {
    const { container } = render(<Gallery />);
    const wrappers = container.querySelectorAll('.gallery__card-image-wrapper');
    expect(wrappers).toHaveLength(products.length);
  });

  it('every card image has width="800" and height="600" attributes', () => {
    const { container } = render(<Gallery />);
    const images = container.querySelectorAll('.gallery__card-image');
    images.forEach((img) => {
      expect(img).toHaveAttribute('width', '800');
      expect(img).toHaveAttribute('height', '600');
    });
  });
});
