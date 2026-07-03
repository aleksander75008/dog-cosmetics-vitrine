import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ProductHighlights from '../ProductHighlights.jsx';

describe('ProductHighlights component', () => {
  it('renders a <section> with id="gallery" (CTA anchor target)', () => {
    const { container } = render(<ProductHighlights />);
    const section = container.querySelector('#gallery');
    expect(section).toBeInTheDocument();
    expect(section.tagName).toBe('SECTION');
  });

  it('renders exactly 3 .highlight-card elements', () => {
    const { container } = render(<ProductHighlights />);
    const cards = container.querySelectorAll('.highlight-card');
    expect(cards).toHaveLength(3);
  });

  it('first card contains title "Nourishing Shampoo"', () => {
    const { container } = render(<ProductHighlights />);
    const cards = container.querySelectorAll('.highlight-card');
    expect(cards[0].querySelector('.highlight-card__title')).toHaveTextContent('Nourishing Shampoo');
  });

  it('second card contains title "Paw Balm"', () => {
    const { container } = render(<ProductHighlights />);
    const cards = container.querySelectorAll('.highlight-card');
    expect(cards[1].querySelector('.highlight-card__title')).toHaveTextContent('Paw Balm');
  });

  it('third card contains title "Detangling Spray"', () => {
    const { container } = render(<ProductHighlights />);
    const cards = container.querySelectorAll('.highlight-card');
    expect(cards[2].querySelector('.highlight-card__title')).toHaveTextContent('Detangling Spray');
  });

  it('every card has a non-empty .highlight-card__title', () => {
    const { container } = render(<ProductHighlights />);
    const cards = container.querySelectorAll('.highlight-card');
    cards.forEach((card) => {
      const title = card.querySelector('.highlight-card__title');
      expect(title).toBeInTheDocument();
      expect(title.textContent.trim().length).toBeGreaterThan(0);
    });
  });

  it('every card has a non-empty .highlight-card__description', () => {
    const { container } = render(<ProductHighlights />);
    const cards = container.querySelectorAll('.highlight-card');
    cards.forEach((card) => {
      const desc = card.querySelector('.highlight-card__description');
      expect(desc).toBeInTheDocument();
      expect(desc.textContent.trim().length).toBeGreaterThan(0);
    });
  });

  it('renders a visible section heading (h2) with non-empty text', () => {
    const { container } = render(<ProductHighlights />);
    const heading = container.querySelector('h2');
    expect(heading).toBeInTheDocument();
    expect(heading.textContent.trim().length).toBeGreaterThan(0);
  });

  it('cards are contained within .highlights-grid', () => {
    const { container } = render(<ProductHighlights />);
    const grid = container.querySelector('.highlights-grid');
    expect(grid).toBeInTheDocument();
    const cards = grid.querySelectorAll('.highlight-card');
    expect(cards).toHaveLength(3);
  });
});
