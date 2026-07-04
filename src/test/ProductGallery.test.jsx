import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductGallery } from '../components/ProductGallery/ProductGallery.jsx';
import { products } from '../data/products.js';

describe('ProductGallery', () => {
  it('renders the #gallery section', () => {
    render(<ProductGallery />);
    expect(document.querySelector('#gallery')).toBeInTheDocument();
  });

  it('renders the section heading', () => {
    render(<ProductGallery />);
    expect(
      screen.getByRole('heading', { name: /premium pet beauty/i })
    ).toBeInTheDocument();
  });

  it('renders a card for every product in the data array', () => {
    render(<ProductGallery />);
    products.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });

  it('renders the correct number of list items', () => {
    render(<ProductGallery />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(products.length);
  });
});

describe('ProductCard', () => {
  it('renders all 6 data fields for each product', () => {
    render(<ProductGallery />);

    products.forEach((product) => {
      // name
      expect(screen.getByText(product.name)).toBeInTheDocument();
      // category badge
      expect(screen.getAllByText(product.category).length).toBeGreaterThan(0);
      // price
      expect(screen.getByText(product.price)).toBeInTheDocument();
      // description
      expect(screen.getByText(product.description)).toBeInTheDocument();
      // image alt text
      expect(screen.getByAltText(product.name)).toBeInTheDocument();
    });
  });

  it('every Enquire button links to #contact', () => {
    render(<ProductGallery />);
    const enquireLinks = screen.getAllByRole('link', { name: /enquire/i });
    expect(enquireLinks).toHaveLength(products.length);
    enquireLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '#contact');
    });
  });

  it('renders product images with correct src URLs', () => {
    render(<ProductGallery />);
    products.forEach((product) => {
      const img = screen.getByAltText(product.name);
      expect(img).toHaveAttribute('src', product.image);
    });
  });
});

describe('products data', () => {
  it('contains exactly 5 products', () => {
    expect(products).toHaveLength(5);
  });

  it('every product has all required fields', () => {
    products.forEach((product) => {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('category');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('description');
      expect(product).toHaveProperty('image');
    });
  });

  it('all product ids are unique', () => {
    const ids = products.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(products.length);
  });

  it('all image URLs point to Unsplash CDN with correct params', () => {
    products.forEach((product) => {
      expect(product.image).toMatch(
        /^https:\/\/images\.unsplash\.com\/photo-[\w-]+\?w=600&h=450&fit=crop$/
      );
    });
  });
});
