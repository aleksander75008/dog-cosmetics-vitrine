import './Gallery.css';

/**
 * Purely presentational product card component.
 *
 * @param {{ product: import('../data/products.js').Product }} props
 */
export default function ProductCard({ product }) {
  const { name, category, price, description, image } = product;

  return (
    <article className="gallery__card">
      <div className="gallery__img-wrapper">
        <img
          src={image}
          alt={name}
          className="gallery__img"
          loading="lazy"
        />
      </div>

      <div className="gallery__card-body">
        <span className="gallery__badge" data-testid="category-badge">
          {category}
        </span>

        <h3 className="gallery__name">{name}</h3>

        <p className="gallery__description">{description}</p>

        <div className="gallery__footer">
          <strong className="gallery__price">{price}</strong>
          <a href="#contact" className="gallery__enquire">
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
