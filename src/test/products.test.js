import { describe, it, expect } from 'vitest';
import { products } from '../data/products.js';

describe('products data', () => {
  // ── Array shape ───────────────────────────────────────────────────────────

  it('exports an array', () => {
    expect(Array.isArray(products)).toBe(true);
  });

  it('contains between 4 and 6 products', () => {
    expect(products.length).toBeGreaterThanOrEqual(4);
    expect(products.length).toBeLessThanOrEqual(6);
  });

  // ── Required fields present on every product ──────────────────────────────

  it('every product has a non-empty string id', () => {
    products.forEach((p) => {
      expect(typeof p.id).toBe('string');
      expect(p.id.trim().length).toBeGreaterThan(0);
    });
  });

  it('every product has a non-empty string name', () => {
    products.forEach((p) => {
      expect(typeof p.name).toBe('string');
      expect(p.name.trim().length).toBeGreaterThan(0);
    });
  });

  it('every product has a non-empty string category', () => {
    products.forEach((p) => {
      expect(typeof p.category).toBe('string');
      expect(p.category.trim().length).toBeGreaterThan(0);
    });
  });

  it('every product has a price string starting with €', () => {
    products.forEach((p) => {
      expect(typeof p.price).toBe('string');
      expect(p.price.startsWith('€')).toBe(true);
    });
  });

  it('every product has a non-empty description string', () => {
    products.forEach((p) => {
      expect(typeof p.description).toBe('string');
      expect(p.description.trim().length).toBeGreaterThan(0);
    });
  });

  it('every product image URL starts with the Unsplash photo base URL', () => {
    products.forEach((p) => {
      expect(typeof p.image).toBe('string');
      expect(p.image).toMatch(/^https:\/\/images\.unsplash\.com\/photo-/);
    });
  });

  it('every product image URL includes the w=600 query parameter', () => {
    products.forEach((p) => {
      expect(p.image).toContain('w=600');
    });
  });

  // ── Unique ids ────────────────────────────────────────────────────────────

  it('all product ids are unique', () => {
    const ids = products.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  // ── Exact known products from the implementation ──────────────────────────

  it('includes a product with id "p1" named "Oat & Lavender Shampoo"', () => {
    const p1 = products.find((p) => p.id === 'p1');
    expect(p1).toBeDefined();
    expect(p1.name).toBe('Oat & Lavender Shampoo');
    expect(p1.category).toBe('Shampoo');
    expect(p1.price).toBe('€28.00');
  });

  it('includes a product with id "p2" named "Argan Silk Conditioner"', () => {
    const p2 = products.find((p) => p.id === 'p2');
    expect(p2).toBeDefined();
    expect(p2.name).toBe('Argan Silk Conditioner');
    expect(p2.category).toBe('Conditioner');
    expect(p2.price).toBe('€32.00');
  });

  it('includes a product with id "p3" named "Floral Mist Perfume"', () => {
    const p3 = products.find((p) => p.id === 'p3');
    expect(p3).toBeDefined();
    expect(p3.name).toBe('Floral Mist Perfume');
    expect(p3.category).toBe('Perfume');
    expect(p3.price).toBe('€24.00');
  });

  it('includes a product with id "p4" named "Beeswax Paw Balm"', () => {
    const p4 = products.find((p) => p.id === 'p4');
    expect(p4).toBeDefined();
    expect(p4.name).toBe('Beeswax Paw Balm');
    expect(p4.category).toBe('Paw Care');
    expect(p4.price).toBe('€18.00');
  });

  it('includes a product with id "p5" named "Omega Coat Serum"', () => {
    const p5 = products.find((p) => p.id === 'p5');
    expect(p5).toBeDefined();
    expect(p5.name).toBe('Omega Coat Serum');
    expect(p5.category).toBe('Coat Serum');
    expect(p5.price).toBe('€38.00');
  });
});
