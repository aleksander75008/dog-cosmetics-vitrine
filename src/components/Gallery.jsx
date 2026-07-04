import './Gallery.css';
import { products } from '../data/products.js';

/**
 * Gallery section component.
 * Renders a responsive CSS grid of product cards sourced from static data.
 * The Enquire button uses a plain <a href="#contact"> — smooth scrolling
 * is handled declaratively via `scroll-behavior: smooth` on the html element.
 *
 * @returns {JSX.Element}
 */
export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-heading">
        <h2>Our Products</h2>
        <span className="heading-accent" aria-hidden="true" />
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <div className="card-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                width={600}
                height={450}
              />
            </div>

            <div className="card-body">
              <span className="category-badge">{product.category}</span>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>

              <div className="card-footer">
                <span className="product-price">{product.price}</span>
                <a href="#contact" className="btn-enquire">
                  Enquire
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
