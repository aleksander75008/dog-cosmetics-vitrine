import React from 'react';
import './Gallery.css';
import products from '../data/products.js';

/**
 * Gallery component — renders the #gallery product section.
 * Displays a responsive CSS Grid of product cards, each containing
 * an image, category badge, name, description, price, and an
 * Enquire anchor styled as a ghost button.
 */
export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery__header">
        <h2 className="gallery__heading">Our Collection</h2>
        <span className="gallery__heading-accent" aria-hidden="true" />
      </div>

      <div className="gallery__grid">
        {products.map((product) => (
          <article
            key={product.id}
            className="gallery__card"
            data-testid="product-card"
          >
            <div className="gallery__image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="gallery__image"
                loading="lazy"
              />
            </div>

            <div className="gallery__card-body">
              <span className="gallery__badge">{product.category}</span>
              <h3 className="gallery__card-name">{product.name}</h3>
              <p className="gallery__card-description">{product.description}</p>
              <p className="gallery__card-price">{product.price}</p>
              <a
                href="#contact"
                className="gallery__enquire-btn"
                aria-label={`Enquire about ${product.name}`}
              >
                Enquire
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
