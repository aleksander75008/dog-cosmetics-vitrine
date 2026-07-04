import { describe, it, expect } from 'vitest';
import { products } from '../data/products';

describe('products data', () => {
  it('exports an array with 4–6 items', () => {
    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThanOrEqual(4);
    expect(products.length).toBeLessThanOrEqual(6);
  });

  it('every product has all required fields', () => {
    for (const product of products) {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('category');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('description');
      expect(product).toHaveProperty('image');
    }
  });

  it('every price starts with the € symbol', () => {
    for (const product of products) {
      expect(product.price).toMatch(/^€/);
    }
  });

  it('contains products with IDs p1–p5', () => {
    const ids = products.map((p) => p.id);
    ['p1', 'p2', 'p3', 'p4', 'p5'].forEach((id) => {
      expect(ids).toContain(id);
    });
  });

  it('p1 is Oat & Lavender Shampoo', () => {
    const p1 = products.find((p) => p.id === 'p1');
    expect(p1).toBeDefined();
    expect(p1.name).toBe('Oat & Lavender Shampoo');
  });

  it('p2 is Argan Silk Conditioner', () => {
    const p2 = products.find((p) => p.id === 'p2');
    expect(p2).toBeDefined();
    expect(p2.name).toBe('Argan Silk Conditioner');
  });

  it('p3 is Floral Mist Perfume', () => {
    const p3 = products.find((p) => p.id === 'p3');
    expect(p3).toBeDefined();
    expect(p3.name).toBe('Floral Mist Perfume');
  });

  it('p4 is Beeswax Paw Balm', () => {
    const p4 = products.find((p) => p.id === 'p4');
    expect(p4).toBeDefined();
    expect(p4.name).toBe('Beeswax Paw Balm');
  });

  it('p5 is Omega Coat Serum', () => {
    const p5 = products.find((p) => p.id === 'p5');
    expect(p5).toBeDefined();
    expect(p5.name).toBe('Omega Coat Serum');
  });
});
