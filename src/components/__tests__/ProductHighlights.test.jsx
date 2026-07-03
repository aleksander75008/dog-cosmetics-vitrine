import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ProductHighlights from '../ProductHighlights.jsx';

describe('ProductHighlights component', () => {
  it('renders exactly 3 .highlight-card elements', () => {
    const { container } = render(<ProductHighlights />);
    const cards = container.querySelectorAll('.highlight-card');
    expect(cards).toHaveLength(3);
  });

  it('renders the Nourishing Shampoo card', () => {
    const { container } = render(<ProductHighlights />);
    const cards = container.querySelectorAll('.highlight-card');
    expect(cards[0]).toHaveTextContent('Nourishing Shampoo');
  });

  it('renders the Paw Balm card', () => {
    const { container } = render(<ProductHighlights />);
    const cards = container.querySelectorAll('.highlight-card');
    expect(cards[1]).toHaveTextContent('Paw Balm');
  });

  it('renders the Detangling Spray card', () => {
    const { container } = render(<ProductHighlights />);
    const cards = container.querySelectorAll('.highlight-card');
    expect(cards[2]).toHaveTextContent('Detangling Spray');
  });

  it('renders the section with id="gallery" for CTA anchor target', () => {
    const { container } = render(<ProductHighlights />);
    const section = container.querySelector('#gallery');
    expect(section).toBeInTheDocument();
  });

  it('renders a section heading', () => {
    const { container } = render(<ProductHighlights />);
    const heading = container.querySelector('h2');
    expect(heading).toBeInTheDocument();
    expect(heading.textContent.length).toBeGreaterThan(0);
  });

  it('each card contains a title and a description', () => {
    const { container } = render(<ProductHighlights />);
    const cards = container.querySelectorAll('.highlight-card');
    cards.forEach((card) => {
      expect(card.querySelector('.highlight-card__title')).toBeInTheDocument();
      expect(card.querySelector('.highlight-card__description')).toBeInTheDocument();
    });
  });
});
