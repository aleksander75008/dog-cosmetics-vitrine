import React from 'react';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import './ProductGallery.css';

/**
 * Renders the full product gallery section.
 * Maps over the products data source and renders a ProductCard for each entry.
 *
 * @returns {JSX.Element}
 */
export function ProductGallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header">
        <h1 className="gallery-title">Our Products</h1>
        <p className="gallery-subtitle">
          Handcrafted cosmetics for you and your pets — made with natural ingredients.
        </p>
      </div>
      <div className="gallery-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
