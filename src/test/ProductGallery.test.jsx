import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { ProductGallery } from '../components/ProductGallery/ProductGallery.jsx';
import { products } from '../data/products.js';

// ---------------------------------------------------------------------------
// products.js — data shape & integrity
// ---------------------------------------------------------------------------
describe('products data', () => {
  it('exports an array with between 4 and 6 items', () => {
    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThanOrEqual(4);
    expect(products.length).toBeLessThanOrEqual(6);
  });

  it('contains exactly 5 products', () => {
    expect(products).toHaveLength(5);
  });

  it('every product has all six required fields', () => {
    products.forEach((product) => {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('category');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('description');
      expect(product).toHaveProperty('image');
    });
  });

  it('every field is a non-empty string', () => {
    products.forEach((product) => {
      ['id', 'name', 'category', 'price', 'description', 'image'].forEach(
        (field) => {
          expect(typeof product[field]).toBe('string');
          expect(product[field].trim().length).toBeGreaterThan(0);
        }
      );
    });
  });

  it('all product ids are unique', () => {
    const ids = products.map((p) => p.id);
    expect(new Set(ids).size).toBe(products.length);
  });

  it('all image URLs are Unsplash CDN URLs with w=600&h=450&fit=crop params', () => {
    products.forEach((product) => {
      expect(product.image).toMatch(
        /^https:\/\/images\.unsplash\.com\/photo-[\w-]+\?w=600&h=450&fit=crop$/
      );
    });
  });

  it('known product ids are present', () => {
    const ids = products.map((p) => p.id);
    ['prod-001', 'prod-002', 'prod-003', 'prod-004', 'prod-005'].forEach(
      (id) => expect(ids).toContain(id)
    );
  });
});

// ---------------------------------------------------------------------------
// ProductGallery — section structure
// ---------------------------------------------------------------------------
describe('ProductGallery section structure', () => {
  it('renders a <section> with id="gallery"', () => {
    const { container } = render(<ProductGallery />);
    const section = container.querySelector('#gallery');
    expect(section).toBeInTheDocument();
    expect(section.tagName).toBe('SECTION');
  });

  it('section is labelled by the gallery-heading element', () => {
    const { container } = render(<ProductGallery />);
    const section = container.querySelector('#gallery');
    expect(section).toHaveAttribute('aria-labelledby', 'gallery-heading');
  });

  it('renders the eyebrow text "Our Collection"', () => {
    const { container } = render(<ProductGallery />);
    const eyebrow = container.querySelector('.gallery-eyebrow');
    expect(eyebrow).toBeInTheDocument();
    expect(eyebrow).toHaveTextContent('Our Collection');
  });

  it('renders the main heading "Premium Pet Beauty"', () => {
    render(<ProductGallery />);
    expect(
      screen.getByRole('heading', { name: /premium pet beauty/i })
    ).toBeInTheDocument();
  });

  it('main heading has id="gallery-heading"', () => {
    const { container } = render(<ProductGallery />);
    const heading = container.querySelector('#gallery-heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Premium Pet Beauty');
  });

  it('renders a <ul> with role="list" as the grid container', () => {
    const { container } = render(<ProductGallery />);
    const grid = container.querySelector('ul.gallery-grid');
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveAttribute('role', 'list');
  });

  it('renders exactly products.length list items inside the grid', () => {
    const { container } = render(<ProductGallery />);
    const grid = container.querySelector('ul.gallery-grid');
    const items = within(grid).getAllByRole('listitem');
    expect(items).toHaveLength(products.length);
  });
});

// ---------------------------------------------------------------------------
// ProductCard — all six fields rendered per card
// ---------------------------------------------------------------------------
describe('ProductCard renders all six data fields', () => {
  it('renders each product name', () => {
    render(<ProductGallery />);
    products.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });

  it('renders each product category badge', () => {
    render(<ProductGallery />);
    products.forEach((product) => {
      // getAllByText because two products could share a category
      const badges = screen.getAllByText(product.category);
      expect(badges.length).toBeGreaterThan(0);
    });
  });

  it('renders each product price', () => {
    render(<ProductGallery />);
    products.forEach((product) => {
      expect(screen.getByText(product.price)).toBeInTheDocument();
    });
  });

  it('renders each product description', () => {
    render(<ProductGallery />);
    products.forEach((product) => {
      expect(screen.getByText(product.description)).toBeInTheDocument();
    });
  });

  it('renders each product image with alt equal to product name', () => {
    render(<ProductGallery />);
    products.forEach((product) => {
      expect(screen.getByAltText(product.name)).toBeInTheDocument();
    });
  });

  it('renders each product image with src equal to product.image URL', () => {
    render(<ProductGallery />);
    products.forEach((product) => {
      const img = screen.getByAltText(product.name);
      expect(img).toHaveAttribute('src', product.image);
    });
  });
});

// ---------------------------------------------------------------------------
// ProductCard — image attributes
// ---------------------------------------------------------------------------
describe('ProductCard image element', () => {
  it('every image has loading="lazy"', () => {
    render(<ProductGallery />);
    products.forEach((product) => {
      const img = screen.getByAltText(product.name);
      expect(img).toHaveAttribute('loading', 'lazy');
    });
  });

  it('every image has explicit width=600 and height=450', () => {
    render(<ProductGallery />);
    products.forEach((product) => {
      const img = screen.getByAltText(product.name);
      expect(img).toHaveAttribute('width', '600');
      expect(img).toHaveAttribute('height', '450');
    });
  });

  it('every image is wrapped in a .card-image-wrapper element', () => {
    const { container } = render(<ProductGallery />);
    const wrappers = container.querySelectorAll('.card-image-wrapper');
    expect(wrappers).toHaveLength(products.length);
  });
});

// ---------------------------------------------------------------------------
// ProductCard — Enquire ghost button
// ---------------------------------------------------------------------------
describe('ProductCard Enquire button', () => {
  it('renders exactly products.length Enquire links', () => {
    render(<ProductGallery />);
    const links = screen.getAllByRole('link', { name: /enquire/i });
    expect(links).toHaveLength(products.length);
  });

  it('every Enquire link points to href="#contact"', () => {
    render(<ProductGallery />);
    const links = screen.getAllByRole('link', { name: /enquire/i });
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '#contact');
    });
  });

  it('every Enquire link has the card-enquire-btn class', () => {
    const { container } = render(<ProductGallery />);
    const btns = container.querySelectorAll('.card-enquire-btn');
    expect(btns).toHaveLength(products.length);
    btns.forEach((btn) => {
      expect(btn).toHaveAttribute('href', '#contact');
    });
  });
});

// ---------------------------------------------------------------------------
// ProductCard — card DOM structure
// ---------------------------------------------------------------------------
describe('ProductCard DOM structure', () => {
  it('each card is a <li> with class product-card', () => {
    const { container } = render(<ProductGallery />);
    const cards = container.querySelectorAll('li.product-card');
    expect(cards).toHaveLength(products.length);
  });

  it('each card contains a .card-badge element', () => {
    const { container } = render(<ProductGallery />);
    const badges = container.querySelectorAll('.card-badge');
    expect(badges).toHaveLength(products.length);
  });

  it('each card contains a .card-name heading', () => {
    const { container } = render(<ProductGallery />);
    const names = container.querySelectorAll('.card-name');
    expect(names).toHaveLength(products.length);
  });

  it('each card contains a .card-description paragraph', () => {
    const { container } = render(<ProductGallery />);
    const descs = container.querySelectorAll('.card-description');
    expect(descs).toHaveLength(products.length);
  });

  it('each card contains a .card-price element', () => {
    const { container } = render(<ProductGallery />);
    const prices = container.querySelectorAll('.card-price');
    expect(prices).toHaveLength(products.length);
  });

  it('each card contains a .card-footer element', () => {
    const { container } = render(<ProductGallery />);
    const footers = container.querySelectorAll('.card-footer');
    expect(footers).toHaveLength(products.length);
  });
});
