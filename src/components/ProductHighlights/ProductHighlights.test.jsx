import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import ProductHighlights from './ProductHighlights';
import highlightsData from './highlightsData';

describe('ProductHighlights', () => {
  it('renders the section heading', () => {
    const { container } = render(<ProductHighlights />);
    const heading = container.querySelector('h2');
    expect(heading).not.toBeNull();
    expect(heading.textContent).toBe('Our Signature Scents');
  });

  it('renders exactly 3 product cards', () => {
    const { container } = render(<ProductHighlights />);
    const cards = container.querySelectorAll('article');
    expect(cards).toHaveLength(3);
  });

  it('renders the correct title for each card', () => {
    render(<ProductHighlights />);
    highlightsData.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it('renders the correct description for each card', () => {
    render(<ProductHighlights />);
    highlightsData.forEach((item) => {
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });

  it('renders the section with id="gallery" as the scroll target', () => {
    const { container } = render(<ProductHighlights />);
    const section = container.querySelector('section#gallery');
    expect(section).not.toBeNull();
  });

  it('each card title is inside its own article element', () => {
    const { container } = render(<ProductHighlights />);
    const cards = container.querySelectorAll('article');
    const titlesInCards = Array.from(cards).map(
      (card) => within(card).getByRole('heading', { level: 3 }).textContent
    );
    expect(titlesInCards).toEqual(
      highlightsData.map((item) => item.title)
    );
  });
});
