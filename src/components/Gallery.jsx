import { products } from '../data/products.js';
import ProductCard from './ProductCard.jsx';
import './Gallery.css';

/**
 * Gallery section component.
 *
 * Renders the full product grid under `#gallery`.
 * Maps over the static products array — no hardcoded cards.
 */
export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery__container">
        <h2 className="gallery__heading">Our Collection</h2>

        <div className="gallery__grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
