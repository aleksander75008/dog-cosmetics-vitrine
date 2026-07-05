import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Gallery from './Gallery.jsx';
import products from '../data/products.js';

// ---------------------------------------------------------------------------
// products.js — data integrity
// ---------------------------------------------------------------------------
describe('products data', () => {
  it('exports an array', () => {
    expect(Array.isArray(products)).toBe(true);
  });

  it('contains between 4 and 6 products', () => {
    expect(products.length).toBeGreaterThanOrEqual(4);
    expect(products.length).toBeLessThanOrEqual(6);
  });

  it('every product has a unique id', () => {
    const ids = products.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every product has a non-empty name string', () => {
    products.forEach((p) => {
      expect(typeof p.name).toBe('string');
      expect(p.name.length).toBeGreaterThan(0);
    });
  });

  it('every product has a recognised category', () => {
    const valid = ['Shampoo', 'Perfume', 'Conditioner', 'Serum', 'Mask'];
    products.forEach((p) => {
      expect(valid).toContain(p.category);
    });
  });

  it('every product price starts with the euro sign', () => {
    products.forEach((p) => {
      expect(typeof p.price).toBe('string');
      expect(p.price.startsWith('\u20ac')).toBe(true);
    });
  });

  it('every product has a non-empty description string', () => {
    products.forEach((p) => {
      expect(typeof p.description).toBe('string');
      expect(p.description.length).toBeGreaterThan(0);
    });
  });

  it('every product image URL begins with https://images.unsplash.com', () => {
    products.forEach((p) => {
      expect(typeof p.image).toBe('string');
      expect(p.image.startsWith('https://images.unsplash.com')).toBe(true);
    });
  });

  // Spot-check the five concrete products present in the implementation
  it('contains Silky Coat Shampoo priced at \u20ac18.00', () => {
    const p = products.find((x) => x.id === 1);
    expect(p).toBeDefined();
    expect(p.name).toBe('Silky Coat Shampoo');
    expect(p.category).toBe('Shampoo');
    expect(p.price).toBe('\u20ac18.00');
  });

  it('contains Velvet Paw Perfume priced at \u20ac32.00', () => {
    const p = products.find((x) => x.id === 2);
    expect(p).toBeDefined();
    expect(p.name).toBe('Velvet Paw Perfume');
    expect(p.category).toBe('Perfume');
    expect(p.price).toBe('\u20ac32.00');
  });

  it('contains Deep Shine Conditioner priced at \u20ac22.00', () => {
    const p = products.find((x) => x.id === 3);
    expect(p).toBeDefined();
    expect(p.name).toBe('Deep Shine Conditioner');
    expect(p.category).toBe('Conditioner');
    expect(p.price).toBe('\u20ac22.00');
  });

  it('contains Revive Skin Serum priced at \u20ac45.00', () => {
    const p = products.find((x) => x.id === 4);
    expect(p).toBeDefined();
    expect(p.name).toBe('Revive Skin Serum');
    expect(p.category).toBe('Serum');
    expect(p.price).toBe('\u20ac45.00');
  });

  it('contains Nourish & Glow Mask priced at \u20ac28.00', () => {
    const p = products.find((x) => x.id === 5);
    expect(p).toBeDefined();
    expect(p.name).toBe('Nourish & Glow Mask');
    expect(p.category).toBe('Mask');
    expect(p.price).toBe('\u20ac28.00');
  });
});

// ---------------------------------------------------------------------------
// Gallery component
// ---------------------------------------------------------------------------
describe('Gallery', () => {
  it('renders without crashing', () => {
    const { container } = render(<Gallery />);
    expect(container.firstChild).not.toBeNull();
  });

  it('renders a section element with id="gallery"', () => {
    const { container } = render(<Gallery />);
    const section = container.querySelector('section#gallery');
    expect(section).not.toBeNull();
  });

  it('renders the "Our Collection" heading', () => {
    render(<Gallery />);
    expect(
      screen.getByRole('heading', { name: 'Our Collection' })
    ).toBeInTheDocument();
  });

  it('renders the decorative accent element inside the header', () => {
    const { container } = render(<Gallery />);
    const accent = container.querySelector('.gallery__heading-accent');
    expect(accent).not.toBeNull();
  });

  it('renders between 4 and 6 product cards', () => {
    render(<Gallery />);
    const cards = screen.getAllByTestId('product-card');
    expect(cards.length).toBeGreaterThanOrEqual(4);
    expect(cards.length).toBeLessThanOrEqual(6);
  });

  it('renders exactly as many cards as entries in products.js', () => {
    render(<Gallery />);
    const cards = screen.getAllByTestId('product-card');
    expect(cards.length).toBe(products.length);
  });

  it('each card contains an img with a non-empty alt attribute', () => {
    render(<Gallery />);
    screen.getAllByTestId('product-card').forEach((card) => {
      const img = within(card).getByRole('img');
      expect(img).toBeInTheDocument();
      const alt = img.getAttribute('alt');
      expect(typeof alt).toBe('string');
      expect(alt.length).toBeGreaterThan(0);
    });
  });

  it('each card img src starts with https://images.unsplash.com', () => {
    render(<Gallery />);
    screen.getAllByTestId('product-card').forEach((card) => {
      const img = within(card).getByRole('img');
      expect(img.getAttribute('src')).toMatch(/^https:\/\/images\.unsplash\.com/);
    });
  });

  it('each card contains a .gallery__badge with a valid category text', () => {
    render(<Gallery />);
    const valid = ['Shampoo', 'Perfume', 'Conditioner', 'Serum', 'Mask'];
    screen.getAllByTestId('product-card').forEach((card) => {
      const badge = card.querySelector('.gallery__badge');
      expect(badge).not.toBeNull();
      expect(valid).toContain(badge.textContent.trim());
    });
  });

  it('each card contains a heading matching the product name', () => {
    render(<Gallery />);
    screen.getAllByTestId('product-card').forEach((card, i) => {
      const heading = within(card).getByRole('heading');
      expect(heading.textContent.trim()).toBe(products[i].name);
    });
  });

  it('each card displays the product price', () => {
    render(<Gallery />);
    screen.getAllByTestId('product-card').forEach((card, i) => {
      expect(card.textContent).toContain(products[i].price);
    });
  });

  it('each card has an Enquire link with href="#contact"', () => {
    render(<Gallery />);
    screen.getAllByTestId('product-card').forEach((card) => {
      const link = within(card).getByRole('link', { name: /enquire/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '#contact');
    });
  });

  it('the Enquire element is an anchor tag (not a button)', () => {
    render(<Gallery />);
    screen.getAllByTestId('product-card').forEach((card) => {
      const link = within(card).getByRole('link', { name: /enquire/i });
      expect(link.tagName.toLowerCase()).toBe('a');
    });
  });

  it('each card img has the gallery__image class', () => {
    render(<Gallery />);
    screen.getAllByTestId('product-card').forEach((card) => {
      const img = within(card).getByRole('img');
      expect(img.classList.contains('gallery__image')).toBe(true);
    });
  });

  it('each card has an image wrapper with class gallery__image-wrapper', () => {
    render(<Gallery />);
    screen.getAllByTestId('product-card').forEach((card) => {
      const wrapper = card.querySelector('.gallery__image-wrapper');
      expect(wrapper).not.toBeNull();
    });
  });

  it('each card has a card body with class gallery__card-body', () => {
    render(<Gallery />);
    screen.getAllByTestId('product-card').forEach((card) => {
      const body = card.querySelector('.gallery__card-body');
      expect(body).not.toBeNull();
    });
  });

  it('card elements appear in the correct order: image-wrapper, badge, name, description, price, enquire', () => {
    const { container } = render(<Gallery />);
    const card = container.querySelector('[data-testid="product-card"]');

    const imageWrapper = card.querySelector('.gallery__image-wrapper');
    const badge = card.querySelector('.gallery__badge');
    const name = card.querySelector('.gallery__card-name');
    const description = card.querySelector('.gallery__card-description');
    const price = card.querySelector('.gallery__card-price');
    const enquire = card.querySelector('.gallery__enquire-btn');

    // All six elements must exist
    expect(imageWrapper).not.toBeNull();
    expect(badge).not.toBeNull();
    expect(name).not.toBeNull();
    expect(description).not.toBeNull();
    expect(price).not.toBeNull();
    expect(enquire).not.toBeNull();

    // Verify DOM order using Node.compareDocumentPosition
    const BEFORE = Node.DOCUMENT_POSITION_FOLLOWING; // target comes after reference
    expect(imageWrapper.compareDocumentPosition(badge) & BEFORE).toBeTruthy();
    expect(badge.compareDocumentPosition(name) & BEFORE).toBeTruthy();
    expect(name.compareDocumentPosition(description) & BEFORE).toBeTruthy();
    expect(description.compareDocumentPosition(price) & BEFORE).toBeTruthy();
    expect(price.compareDocumentPosition(enquire) & BEFORE).toBeTruthy();
  });

  it('the gallery grid container is present', () => {
    const { container } = render(<Gallery />);
    expect(container.querySelector('.gallery__grid')).not.toBeNull();
  });
});
