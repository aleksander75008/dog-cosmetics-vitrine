/**
 * ProductHighlights component — focused unit tests.
 *
 * Explicit vitest imports: vite.config.js has globals: false.
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductHighlights from '../components/ProductHighlights.jsx';

describe('ProductHighlights', () => {
  // ── Structure ────────────────────────────────────────────────────────────

  it('renders a <section> with id="gallery" (scroll target for Hero CTA)', () => {
    const { container } = render(<ProductHighlights />);
    const section = container.querySelector('#gallery');
    expect(section).toBeInTheDocument();
    expect(section.tagName).toBe('SECTION');
  });

  it('renders a visible section heading', () => {
    render(<ProductHighlights />);
    expect(
      screen.getByRole('heading', { level: 2, name: /why choose us/i }),
    ).toBeInTheDocument();
  });

  // ── Card count ────────────────────────────────────────────────────────────

  it('renders EXACTLY 3 highlight cards — no more, no less', () => {
    // EDGE CASE: assert strict length so adding/removing a card is caught.
    const { container } = render(<ProductHighlights />);
    const cards = container.querySelectorAll('.highlight-card');
    expect(cards).toHaveLength(3);
  });

  // ── Card 1: Natural Ingredients ───────────────────────────────────────────

  it('renders the Natural Ingredients card title', () => {
    render(<ProductHighlights />);
    expect(screen.getByText('Natural Ingredients')).toBeInTheDocument();
  });

  it('renders the Natural Ingredients card description', () => {
    render(<ProductHighlights />);
    expect(
      screen.getByText(/plant-based, hypoallergenic ingredients/i),
    ).toBeInTheDocument();
  });

  // ── Card 2: Cruelty-Free ──────────────────────────────────────────────────

  it('renders the Cruelty-Free card title', () => {
    render(<ProductHighlights />);
    expect(screen.getByText('Cruelty-Free')).toBeInTheDocument();
  });

  it('renders the Cruelty-Free card description', () => {
    render(<ProductHighlights />);
    expect(
      screen.getByText(/never tested on animals/i),
    ).toBeInTheDocument();
  });

  // ── Card 3: Vet Approved ──────────────────────────────────────────────────

  it('renders the Vet Approved card title', () => {
    render(<ProductHighlights />);
    expect(screen.getByText('Vet Approved')).toBeInTheDocument();
  });

  it('renders the Vet Approved card description', () => {
    render(<ProductHighlights />);
    expect(
      screen.getByText(/veterinary dermatologists/i),
    ).toBeInTheDocument();
  });

  // ── Accessibility: card icons are aria-hidden ─────────────────────────────

  it('each card icon is aria-hidden (decorative emoji, not read by screen readers)', () => {
    const { container } = render(<ProductHighlights />);
    const icons = container.querySelectorAll('.highlight-card__icon');
    expect(icons).toHaveLength(3);
    icons.forEach((icon) => {
      expect(icon).toHaveAttribute('aria-hidden', 'true');
    });
  });

  // ── Card structure ────────────────────────────────────────────────────────

  it('each card contains an h3 title and a description paragraph', () => {
    const { container } = render(<ProductHighlights />);
    const cards = container.querySelectorAll('.highlight-card');
    cards.forEach((card) => {
      expect(card.querySelector('h3')).not.toBeNull();
      expect(card.querySelector('p')).not.toBeNull();
    });
  });
});
