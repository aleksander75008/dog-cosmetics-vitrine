import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Gallery from '../components/Gallery.jsx';

describe('Gallery component', () => {
  // ── Card count ────────────────────────────────────────────────────────────

  it('renders between 4 and 6 product cards', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.product-card');
    expect(cards.length).toBeGreaterThanOrEqual(4);
    expect(cards.length).toBeLessThanOrEqual(6);
  });

  // ── Section structure ─────────────────────────────────────────────────────

  it('renders a section element with id="gallery"', () => {
    const { container } = render(<Gallery />);
    const section = container.querySelector('section#gallery');
    expect(section).not.toBeNull();
  });

  it('renders the heading text "Our Products"', () => {
    const { container } = render(<Gallery />);
    const heading = container.querySelector('.gallery-heading h2');
    expect(heading).not.toBeNull();
    expect(heading.textContent).toBe('Our Products');
  });

  it('renders the decorative heading-accent element', () => {
    const { container } = render(<Gallery />);
    const accent = container.querySelector('.gallery-heading .heading-accent');
    expect(accent).not.toBeNull();
  });

  it('renders the product grid container', () => {
    const { container } = render(<Gallery />);
    const grid = container.querySelector('.product-grid');
    expect(grid).not.toBeNull();
  });

  // ── Per-card required fields ───────────────────────────────────────────────

  it('each card contains an img element with a non-empty src', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.product-card');
    cards.forEach((card) => {
      const img = card.querySelector('img');
      expect(img).not.toBeNull();
      expect(img.getAttribute('src').length).toBeGreaterThan(0);
    });
  });

  it('each card image has a non-empty alt attribute', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.product-card');
    cards.forEach((card) => {
      const img = card.querySelector('img');
      expect(img).not.toBeNull();
      expect(img.getAttribute('alt').trim().length).toBeGreaterThan(0);
    });
  });

  it('each card contains a .category-badge with non-empty text', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.product-card');
    cards.forEach((card) => {
      const badge = card.querySelector('.category-badge');
      expect(badge).not.toBeNull();
      expect(badge.textContent.trim().length).toBeGreaterThan(0);
    });
  });

  it('each card contains a .product-name with non-empty text', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.product-card');
    cards.forEach((card) => {
      const name = card.querySelector('.product-name');
      expect(name).not.toBeNull();
      expect(name.textContent.trim().length).toBeGreaterThan(0);
    });
  });

  it('each card contains a .product-description with non-empty text', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.product-card');
    cards.forEach((card) => {
      const desc = card.querySelector('.product-description');
      expect(desc).not.toBeNull();
      expect(desc.textContent.trim().length).toBeGreaterThan(0);
    });
  });

  it('each card contains a .product-price with non-empty text', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.product-card');
    cards.forEach((card) => {
      const price = card.querySelector('.product-price');
      expect(price).not.toBeNull();
      expect(price.textContent.trim().length).toBeGreaterThan(0);
    });
  });

  it('each card contains an Enquire <a> linking to #contact', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.product-card');
    cards.forEach((card) => {
      const link = card.querySelector('a[href="#contact"]');
      expect(link).not.toBeNull();
      expect(link.textContent.trim()).toBe('Enquire');
    });
  });

  it('each Enquire button carries the .btn-enquire class', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.product-card');
    cards.forEach((card) => {
      const btn = card.querySelector('.btn-enquire');
      expect(btn).not.toBeNull();
    });
  });

  // ── Specific product data rendered correctly ───────────────────────────────

  it('renders "Oat & Lavender Shampoo" as a product name', () => {
    const { container } = render(<Gallery />);
    const names = Array.from(container.querySelectorAll('.product-name')).map(
      (el) => el.textContent
    );
    expect(names).toContain('Oat & Lavender Shampoo');
  });

  it('renders "Shampoo" as a category badge', () => {
    const { container } = render(<Gallery />);
    const badges = Array.from(
      container.querySelectorAll('.category-badge')
    ).map((el) => el.textContent);
    expect(badges).toContain('Shampoo');
  });

  it('renders "€28.00" as a product price', () => {
    const { container } = render(<Gallery />);
    const prices = Array.from(
      container.querySelectorAll('.product-price')
    ).map((el) => el.textContent);
    expect(prices).toContain('€28.00');
  });

  it('each card image src uses the Unsplash domain', () => {
    const { container } = render(<Gallery />);
    const imgs = container.querySelectorAll('.product-card img');
    imgs.forEach((img) => {
      expect(img.getAttribute('src')).toMatch(
        /^https:\/\/images\.unsplash\.com\/photo-/
      );
    });
  });

  // ── Card image wrapper aspect-ratio structure ──────────────────────────────

  it('each card image is wrapped in a .card-image-wrapper element', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.product-card');
    cards.forEach((card) => {
      const wrapper = card.querySelector('.card-image-wrapper');
      expect(wrapper).not.toBeNull();
      const img = wrapper.querySelector('img');
      expect(img).not.toBeNull();
    });
  });

  // ── Card footer structure ─────────────────────────────────────────────────

  it('each card contains a .card-footer with price and enquire link', () => {
    const { container } = render(<Gallery />);
    const cards = container.querySelectorAll('.product-card');
    cards.forEach((card) => {
      const footer = card.querySelector('.card-footer');
      expect(footer).not.toBeNull();
      expect(footer.querySelector('.product-price')).not.toBeNull();
      expect(footer.querySelector('.btn-enquire')).not.toBeNull();
    });
  });
});
