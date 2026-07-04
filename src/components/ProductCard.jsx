import React from 'react';
import './ProductCard.css';

/**
 * Renders a single product card with image, badge, name, price, and enquire button.
 *
 * @param {Object} props
 * @param {import('../data/products').Product} props.product - The product to display
 * @returns {JSX.Element}
 */
export function ProductCard({ product }) {
  const { name, category, price, description, image } = product;

  return (
    <article className="product-card">
      <div className="card-image-wrapper">
        <img
          src={image}
          alt={name}
          className="card-image"
          loading="lazy"
        />
      </div>
      <div className="card-body">
        <span className="card-badge">{category}</span>
        <h2 className="card-name">{name}</h2>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <span className="card-price">{price}</span>
          <a href="#contact" className="card-enquire-btn">
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
