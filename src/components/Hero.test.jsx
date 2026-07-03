import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero.jsx';
import ProductHighlights from './ProductHighlights.jsx';

/**
 * Integration smoke-tests for the Hero + ProductHighlights components.
 *
 * Both components are rendered together to mirror real usage in App.jsx
 * and to assert cross-component DOM expectations in a single render call.
 */
describe('Hero', () => {
  it('renders the CTA button with the correct label', () => {
    render(
      <>
        <Hero />
        <ProductHighlights />
      </>
    );

    const cta = screen.getByRole('link', { name: /explore collection/i });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute('href', '#gallery');
  });

  it('renders the hero headline', () => {
    render(<Hero />);

    expect(
      screen.getByText(/luxury grooming, tailored for your dog/i)
    ).toBeInTheDocument();
  });
});

describe('ProductHighlights', () => {
  it('renders exactly 3 highlight card titles', () => {
    render(<ProductHighlights />);

    // Each card title is rendered as an <h3> element
    const cardTitles = screen.getAllByRole('heading', { level: 3 });
    expect(cardTitles).toHaveLength(3);
  });

  it('renders the expected card titles', () => {
    render(<ProductHighlights />);

    expect(screen.getByText('Natural Ingredients')).toBeInTheDocument();
    expect(screen.getByText('Precision Grooming')).toBeInTheDocument();
    expect(screen.getByText('Paw & Skin Care')).toBeInTheDocument();
  });
});
