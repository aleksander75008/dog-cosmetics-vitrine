import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ProductCard } from '../components/ProductCard';

describe('ProductCard', () => {
  it('renders product name', () => {
    render(<ProductCard name="Test Product" price={9.99} imageUrl="/img.jpg" />);
    expect(screen.getByText('Test Product')).toBeTruthy();
  });

  it('scrolls into view when requested', () => {
    const scrollIntoView = vi.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoView;

    render(<ProductCard name="Scroll Product" price={4.99} imageUrl="/img.jpg" scrollOnMount />);

    expect(scrollIntoView).toHaveBeenCalled();
  });
});
