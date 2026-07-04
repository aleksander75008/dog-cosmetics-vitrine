import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Gallery from './Gallery.jsx';
import products from '../data/products.js';

describe('Gallery', () => {
  it('renders without crashing', () => {
    render(<Gallery />);
    expect(screen.getByRole('region', { hidden: true })).toBeDefined();
  });

  it('renders the section with id="gallery"', () => {
    const { container } = render(<Gallery />);
    const section = container.querySelector('#gallery');
    expect(section).not.toBeNull();
  });

  it('renders the "Our Collection" heading', () => {
    render(<Gallery />);
    expect(
      screen.getByRole('heading', { name: /our collection/i })
    ).toBeInTheDocument();
  });

  it('renders between 4 and 6 product cards', () => {
    render(<Gallery />);
    const cards = screen.getAllByTestId('product-card');
    expect(cards.length).toBeGreaterThanOrEqual(4);
    expect(cards.length).toBeLessThanOrEqual(6);
  });

  it('renders exactly as many cards as products in the data source', () => {
    render(<Gallery />);
    const cards = screen.getAllByTestId('product-card');
    expect(cards.length).toBe(products.length);
  });

  it('each card contains an img element with a non-empty alt attribute', () => {
    render(<Gallery />);
    const cards = screen.getAllByTestId('product-card');
    cards.forEach((card) => {
      const img = within(card).getByRole('img');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt').length).toBeGreaterThan(0);
    });
  });

  it('each card contains a category badge with a non-empty text', () => {
    render(<Gallery />);
    const cards = screen.getAllByTestId('product-card');
    const validCategories = ['Shampoo', 'Perfume', 'Conditioner', 'Serum', 'Mask'];
    cards.forEach((card) => {
      const badge = card.querySelector('.gallery__badge');
      expect(badge).not.toBeNull();
      expect(validCategories).toContain(badge.textContent.trim());
    });
  });

  it('each card contains the product name as a heading', () => {
    render(<Gallery />);
    const cards = screen.getAllByTestId('product-card');
    cards.forEach((card, index) => {
      const name = within(card).getByRole('heading');
      expect(name).toBeInTheDocument();
      expect(name.textContent.trim()).toBe(products[index].name);
    });
  });

  it('each card displays the product price', () => {
    render(<Gallery />);
    const cards = screen.getAllByTestId('product-card');
    cards.forEach((card, index) => {
      expect(card.textContent).toContain(products[index].price);
    });
  });

  it('each card has an Enquire link with href="#contact"', () => {
    render(<Gallery />);
    const cards = screen.getAllByTestId('product-card');
    cards.forEach((card) => {
      const enquireLink = within(card).getByRole('link', { name: /enquire/i });
      expect(enquireLink).toBeInTheDocument();
      expect(enquireLink).toHaveAttribute('href', '#contact');
    });
  });

  it('products data has unique ids', () => {
    const ids = products.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});
