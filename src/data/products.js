/**
 * @typedef {Object} Product
 * @property {number} id - Unique product identifier
 * @property {string} name - Display name of the product
 * @property {string} category - Product category (e.g. 'Perfume', 'Skincare')
 * @property {string} price - Formatted price string (e.g. '€45.00')
 * @property {string} description - Short 1–2 sentence description
 * @property {string} image - Stable image URL (picsum.photos)
 */

/** @type {Product[]} */
export const products = [
  {
    id: 1,
    name: 'Midnight Bloom',
    category: 'Perfume',
    price: '€89.00',
    description:
      'A rich floral bouquet with notes of jasmine and dark rose. Perfect for evening occasions.',
    image: 'https://picsum.photos/seed/1/400/300',
  },
  {
    id: 2,
    name: 'Velvet Oud',
    category: 'Perfume',
    price: '€120.00',
    description:
      'Deep, smoky oud blended with warm amber and sandalwood. A statement fragrance for the bold.',
    image: 'https://picsum.photos/seed/2/400/300',
  },
  {
    id: 3,
    name: 'Citrus Revive Serum',
    category: 'Skincare',
    price: '€54.00',
    description:
      'Brightening vitamin C serum with hyaluronic acid for a radiant, hydrated complexion.',
    image: 'https://picsum.photos/seed/3/400/300',
  },
  {
    id: 4,
    name: 'Rose Petal Mist',
    category: 'Skincare',
    price: '€38.00',
    description:
      'Lightweight facial mist infused with Bulgarian rose water and aloe vera. Refreshes on the go.',
    image: 'https://picsum.photos/seed/4/400/300',
  },
  {
    id: 5,
    name: 'Golden Hour Elixir',
    category: 'Haircare',
    price: '€67.00',
    description:
      'Luxurious hair oil with argan and marula extracts. Adds shine and tames frizz effortlessly.',
    image: 'https://picsum.photos/seed/5/400/300',
  },
];
