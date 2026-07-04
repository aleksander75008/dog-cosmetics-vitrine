/**
 * @typedef {Object} ProductCardProps
 * @property {number} id
 * @property {string} name
 * @property {string} category
 * @property {string} description
 * @property {string} price
 * @property {string} image
 */

/**
 * ProductCard displays a single product with image, metadata, and an Enquire CTA.
 * The Enquire button smooth-scrolls to the #contact section.
 *
 * @param {ProductCardProps} props
 */
export default function ProductCard({ name, category, description, price, image }) {
  /**
   * Smooth-scroll to the #contact section when the Enquire button is activated.
   * Falls back gracefully if the element is not present (e.g. in unit tests).
   *
   * @param {React.MouseEvent<HTMLAnchorElement>} event
   */
  function handleEnquire(event) {
    const target = document.getElementById('contact');
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // If #contact is absent (e.g. isolated test render), let the href navigate normally.
  }

  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={image}
          alt={name}
          className="product-card__image"
          loading="lazy"
        />
      </div>

      <div className="product-card__body">
        <span className="product-card__badge">{category}</span>
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__description">{description}</p>

        <div className="product-card__footer">
          <span className="product-card__price">{price}</span>
          <a
            href="#contact"
            className="product-card__enquire"
            onClick={handleEnquire}
          >
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
