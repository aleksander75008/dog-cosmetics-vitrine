import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Gallery } from './Gallery.jsx';
import { products } from '../data/products.js';

describe('Gallery', () => {
  it('renders one product card per entry in the products array', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.product-card');
    expect(cards).toHaveLength(products.length);
  });

  it('product count is between 4 and 6 (data contract)', () => {
    expect(products.length).toBeGreaterThanOrEqual(4);
    expect(products.length).toBeLessThanOrEqual(6);
  });

  it('renders every product name', () => {
    const { container } = render(<Gallery />);
    const renderedNames = Array.from(
      container.querySelectorAll('.product-card__name')
    ).map((el) => el.textContent);
    products.forEach((product) => {
      expect(renderedNames).toContain(product.name);
    });
  });

  it('renders every product price', () => {
    const { container } = render(<Gallery />);
    const renderedPrices = Array.from(
      container.querySelectorAll('.product-card__price')
    ).map((el) => el.textContent);
    products.forEach((product) => {
      expect(renderedPrices).toContain(product.price);
    });
  });

  it('renders a category badge for every card', () => {
    const { container } = render(<Gallery />);
    const badges = container.querySelectorAll('.product-card__badge');
    expect(badges).toHaveLength(products.length);
  });

  it('includes at least one Perfume category badge', () => {
    const { container } = render(<Gallery />);
    const badgeTexts = Array.from(
      container.querySelectorAll('.product-card__badge')
    ).map((el) => el.textContent);
    expect(badgeTexts).toContain('Perfume');
  });

  it('renders an Enquire anchor pointing to #contact on every card', () => {
    const { container } = render(<Gallery />);
    const links = container.querySelectorAll('.product-card__enquire');
    expect(links).toHaveLength(products.length);
    links.forEach((link) => {
      expect(link.getAttribute('href')).toBe('#contact');
    });
  });

  it('renders an image with non-empty alt text for every card', () => {
    const { container } = render(<Gallery />);
    const images = container.querySelectorAll('.product-card__image');
    expect(images).toHaveLength(products.length);
    images.forEach((img) => {
      expect(img.getAttribute('alt')).toBeTruthy();
    });
  });

  it('image alt text matches the corresponding product name', () => {
    const { container } = render(<Gallery />);
    const images = container.querySelectorAll('.product-card__image');
    const renderedAlts = Array.from(images).map((img) => img.getAttribute('alt'));
    products.forEach((product) => {
      expect(renderedAlts).toContain(product.name);
    });
  });

  it('wraps the grid in a section with aria-label "Product gallery"', () => {
    const { container } = render(<Gallery />);
    const section = container.querySelector('section.gallery');
    expect(section).not.toBeNull();
    expect(section.getAttribute('aria-label')).toBe('Product gallery');
  });

  it('renders the gallery grid container', () => {
    const { container } = render(<Gallery />);
    const grid = container.querySelector('.gallery__grid');
    expect(grid).not.toBeNull();
  });
});

describe('products data', () => {
  it('every product has an id, name, category, price, description, and image', () => {
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

  it('at least one product has category Perfume', () => {
    const perfumes = products.filter((p) => p.category === 'Perfume');
    expect(perfumes.length).toBeGreaterThanOrEqual(1);
  });

  it('all product ids are unique', () => {
    const ids = products.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('all image URLs use the picsum.photos domain', () => {
    products.forEach((product) => {
      expect(product.image).toMatch(/^https:\/\/picsum\.photos\//)
    });
  });
});
