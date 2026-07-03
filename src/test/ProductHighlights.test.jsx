/**
 * ProductHighlights component unit tests.
 *
 * Explicit vitest imports — globals: false in vite.config.js.
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductHighlights from '../components/ProductHighlights.jsx';

describe('ProductHighlights', () => {
  it('renders the #gallery section', () => {
    render(<ProductHighlights />);
    const section = document.getElementById('gallery');
    expect(section).toBeInTheDocument();
  });

  it('renders exactly 3 highlight cards', () => {
    const { container } = render(<ProductHighlights />);
    const cards = container.querySelectorAll('.highlight-card');
    expect(cards).toHaveLength(3);
  });

  it('renders the Natural Ingredients card', () => {
    render(<ProductHighlights />);
    expect(screen.getByText('Natural Ingredients')).toBeInTheDocument();
    expect(
      screen.getByText(/plant-based, hypoallergenic ingredients/i),
    ).toBeInTheDocument();
  });

  it('renders the Cruelty-Free card', () => {
    render(<ProductHighlights />);
    expect(screen.getByText('Cruelty-Free')).toBeInTheDocument();
    expect(
      screen.getByText(/never tested on animals/i),
    ).toBeInTheDocument();
  });

  it('renders the Vet Approved card', () => {
    render(<ProductHighlights />);
    expect(screen.getByText('Vet Approved')).toBeInTheDocument();
    expect(
      screen.getByText(/veterinary dermatologists/i),
    ).toBeInTheDocument();
  });
});
