import './ProductGallery.css';

/**
 * @typedef {import('../../data/products.js').Product} Product
 */

/**
 * ProductCard renders a single product as a list item card.
 * Displays the product image (locked to 4:3 aspect ratio), category badge,
 * name, description, price, and a ghost "Enquire" button linking to #contact.
 *
 * @param {{ product: Product }} props
 */
export function ProductCard({ product }) {
  const { name, category, price, description, image } = product;

  return (
    <li className="product-card">
      <div className="card-image-wrapper">
        <img
          src={image}
          alt={name}
          className="card-image"
          loading="lazy"
          width={600}
          height={450}
        />
      </div>

      <div className="card-body">
        <span className="card-badge">{category}</span>
        <h2 className="card-name">{name}</h2>
        <p className="card-description">{description}</p>

        <footer className="card-footer">
          <span className="card-price">{price}</span>
          <a href="#contact" className="card-enquire-btn">
            Enquire
          </a>
        </footer>
      </div>
    </li>
  );
}
