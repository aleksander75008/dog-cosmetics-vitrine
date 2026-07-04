import { products } from '../data/products.js';
import ProductCard from './ProductCard.jsx';
import './ProductGallery.css';

/**
 * ProductGallery renders the full grid of product cards.
 * Responsive layout: 3 columns ≥1024 px, 2 columns 600–1023 px, 1 column <600 px.
 */
export default function ProductGallery() {
  return (
    <section aria-label="Product gallery" className="gallery-section">
      <h2 className="gallery-heading">Our Products</h2>
      <div className="gallery-grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
