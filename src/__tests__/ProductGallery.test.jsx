import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductGallery } from '../components/ProductGallery';
import { products } from '../data/products';

describe('ProductGallery', () => {
  it('renders the #gallery section', () => {
    const { container } = render(<ProductGallery />);
    const section = container.querySelector('#gallery');
    expect(section).not.toBeNull();
  });

  it('renders exactly 5 product cards', () => {
    const { container } = render(<ProductGallery />);
    const cards = container.querySelectorAll('article.product-card');
    expect(cards).toHaveLength(5);
  });

  it('renders all product names', () => {
    const { container } = render(<ProductGallery />);
    const expectedNames = [
      'Oat & Lavender Shampoo',
      'Argan Silk Conditioner',
      'Floral Mist Perfume',
      'Beeswax Paw Balm',
      'Omega Coat Serum',
    ];
    for (const name of expectedNames) {
      expect(container.querySelector('.gallery-grid')).not.toBeNull();
      expect(screen.getByText(name)).toBeInTheDocument();
    }
  });

  it('renders all € prices', () => {
    render(<ProductGallery />);
    for (const product of products) {
      expect(screen.getByText(product.price)).toBeInTheDocument();
    }
  });

  it('renders .card-badge elements for every product', () => {
    const { container } = render(<ProductGallery />);
    const badges = container.querySelectorAll('.card-badge');
    expect(badges.length).toBe(products.length);
  });

  it('renders .card-name elements for every product', () => {
    const { container } = render(<ProductGallery />);
    const names = container.querySelectorAll('.card-name');
    expect(names.length).toBe(products.length);
  });

  it('all .card-enquire-btn links point to #contact', () => {
    const { container } = render(<ProductGallery />);
    const enquireBtns = container.querySelectorAll('.card-enquire-btn');
    expect(enquireBtns.length).toBe(products.length);
    enquireBtns.forEach((btn) => {
      expect(btn.getAttribute('href')).toBe('#contact');
    });
  });

  it('renders product images with alt text matching product names', () => {
    render(<ProductGallery />);
    for (const product of products) {
      expect(screen.getByAltText(product.name)).toBeInTheDocument();
    }
  });
});
