import { products } from '../../data/products.js';
import { ProductCard } from './ProductCard.jsx';
import './ProductGallery.css';

/**
 * ProductGallery renders the full #gallery section.
 * It displays a heading with a decorative underline accent and maps
 * the static products array into individual ProductCard components.
 */
export function ProductGallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading">
      <div className="gallery-container">
        <header className="gallery-header">
          <p className="gallery-eyebrow">Our Collection</p>
          <h1 id="gallery-heading" className="gallery-heading">
            Premium Pet Beauty
          </h1>
          <p className="gallery-subheading">
            Crafted with natural ingredients for the pet who deserves the very
            best.
          </p>
        </header>

        <ul className="gallery-grid" role="list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </section>
  );
}
