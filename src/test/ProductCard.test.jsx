import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ProductCard from '../components/ProductCard.jsx';

// Representative product fixture — values taken verbatim from src/data/products.js
const baseProps = {
  id: 1,
  name: 'Lavender Paw Balm',
  category: 'Paw Care',
  description: 'Soothing lavender-infused balm that moisturises and protects delicate paw pads.',
  price: '£12.99',
  image: 'https://placehold.co/400x300/d8b4fe/4c1d95?text=Paw+Balm',
};

describe('ProductCard', () => {
  it('renders the product name in the name element', () => {
    const { container } = render(<ProductCard {...baseProps} />);
    const nameEl = container.querySelector('.product-card__name');
    expect(nameEl).not.toBeNull();
    expect(nameEl.textContent).toBe('Lavender Paw Balm');
  });

  it('renders the category badge with correct text', () => {
    const { container } = render(<ProductCard {...baseProps} />);
    const badge = container.querySelector('.product-card__badge');
    expect(badge).not.toBeNull();
    expect(badge.textContent).toBe('Paw Care');
  });

  it('renders the description text', () => {
    const { container } = render(<ProductCard {...baseProps} />);
    const desc = container.querySelector('.product-card__description');
    expect(desc).not.toBeNull();
    expect(desc.textContent).toBe(
      'Soothing lavender-infused balm that moisturises and protects delicate paw pads.'
    );
  });

  it('renders the price', () => {
    const { container } = render(<ProductCard {...baseProps} />);
    const price = container.querySelector('.product-card__price');
    expect(price).not.toBeNull();
    expect(price.textContent).toBe('£12.99');
  });

  it('renders the Enquire link with href="#contact" and correct label', () => {
    const { container } = render(<ProductCard {...baseProps} />);
    const link = container.querySelector('.product-card__enquire');
    expect(link).not.toBeNull();
    expect(link.getAttribute('href')).toBe('#contact');
    expect(link.textContent).toBe('Enquire');
  });

  it('renders the product image with correct src and alt', () => {
    const { container } = render(<ProductCard {...baseProps} />);
    const img = container.querySelector('.product-card__image');
    expect(img).not.toBeNull();
    expect(img.getAttribute('src')).toBe(
      'https://placehold.co/400x300/d8b4fe/4c1d95?text=Paw+Balm'
    );
    expect(img.getAttribute('alt')).toBe('Lavender Paw Balm');
  });

  it('renders the image wrapper with aspect-ratio class', () => {
    const { container } = render(<ProductCard {...baseProps} />);
    const wrapper = container.querySelector('.product-card__image-wrapper');
    expect(wrapper).not.toBeNull();
  });

  it('wraps everything in an <article> with class product-card', () => {
    const { container } = render(<ProductCard {...baseProps} />);
    const article = container.querySelector('article.product-card');
    expect(article).not.toBeNull();
  });

  it('handleEnquire: calls scrollIntoView when #contact exists in the document', () => {
    // Insert a #contact element so handleEnquire finds it
    const contactSection = document.createElement('section');
    contactSection.id = 'contact';
    const scrollMock = vi.fn();
    contactSection.scrollIntoView = scrollMock;
    document.body.appendChild(contactSection);

    const { container } = render(<ProductCard {...baseProps} />);
    const link = container.querySelector('.product-card__enquire');

    // Simulate click — jsdom won't navigate, but handleEnquire should fire
    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
    link.dispatchEvent(clickEvent);

    expect(scrollMock).toHaveBeenCalledWith({ behavior: 'smooth' });

    document.body.removeChild(contactSection);
  });

  it('handleEnquire: does NOT call scrollIntoView when #contact is absent', () => {
    // Ensure no #contact in DOM
    const existing = document.getElementById('contact');
    if (existing) document.body.removeChild(existing);

    const { container } = render(<ProductCard {...baseProps} />);
    const link = container.querySelector('.product-card__enquire');

    // Should not throw even without #contact
    expect(() => {
      const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
      link.dispatchEvent(clickEvent);
    }).not.toThrow();
  });
});
