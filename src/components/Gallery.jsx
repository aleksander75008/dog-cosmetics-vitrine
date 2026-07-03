import './Gallery.css';
import { products } from '../data/products.js';

/**
 * ProductCard renders a single product's details.
 *
 * @param {{ product: import('../data/products.js').Product }} props
 */
function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
        />
      </div>
      <div className="product-card__body">
        <span className="product-card__badge">{product.category}</span>
        <h2 className="product-card__name">{product.name}</h2>
        <p className="product-card__description">{product.description}</p>
        <div className="product-card__footer">
          <span className="product-card__price">{product.price}</span>
          <a href="#contact" className="product-card__enquire">
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}

/**
 * Gallery renders the full product grid from the static products array.
 */
export function Gallery() {
  return (
    <section className="gallery" aria-label="Product gallery">
      <div className="gallery__grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
