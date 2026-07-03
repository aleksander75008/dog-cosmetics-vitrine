import './Gallery.css';
import { products } from '../data/products.js';

/**
 * ProductCard renders a single product tile within the gallery grid.
 *
 * @param {{ product: import('../data/products.js').Product }} props
 */
function ProductCard({ product }) {
  return (
    <article className="gallery__card">
      <div className="gallery__card-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="gallery__card-image"
          width="800"
          height="600"
          loading="lazy"
        />
      </div>
      <div className="gallery__card-body">
        <span className="gallery__card-badge">{product.category}</span>
        <h3 className="gallery__card-name">{product.name}</h3>
        <p className="gallery__card-description">{product.description}</p>
        <div className="gallery__card-footer">
          <span className="gallery__card-price">{product.price}</span>
          <a href="#contact" className="gallery__card-enquire">
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}

/**
 * Gallery renders the full product gallery section.
 * Products are sourced from the static `products` array in src/data/products.js.
 */
export function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery__inner">
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
