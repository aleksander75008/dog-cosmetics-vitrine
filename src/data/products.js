/**
 * @fileoverview Single source of truth for product catalogue data.
 * All prices use the € symbol. IDs are p1–p5.
 */

/**
 * @typedef {Object} Product
 * @property {string} id - Unique product identifier (p1–p5)
 * @property {string} name - Display name
 * @property {string} category - Product category label
 * @property {string} price - Formatted price string with € symbol
 * @property {string} description - Short product description
 * @property {string} image - Stable Unsplash image URL
 */

/** @type {Product[]} */
export const products = [
  {
    id: 'p1',
    name: 'Oat & Lavender Shampoo',
    category: 'Hair Care',
    price: '€28.00',
    description: 'A gentle, sulfate-free shampoo blending colloidal oat and calming lavender essential oil for a soothing cleanse.',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&auto=format&fit=crop',
  },
  {
    id: 'p2',
    name: 'Argan Silk Conditioner',
    category: 'Hair Care',
    price: '€32.00',
    description: 'Rich Moroccan argan oil conditioner that detangles and adds mirror-like shine without weighing hair down.',
    image: 'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=600&auto=format&fit=crop',
  },
  {
    id: 'p3',
    name: 'Floral Mist Perfume',
    category: 'Fragrance',
    price: '€45.00',
    description: 'A light eau de toilette with top notes of rose and jasmine, settling into a warm sandalwood base.',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&auto=format&fit=crop',
  },
  {
    id: 'p4',
    name: 'Beeswax Paw Balm',
    category: 'Pet Care',
    price: '€18.00',
    description: 'Natural beeswax and shea butter balm that moisturises and protects sensitive paw pads in all seasons.',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&auto=format&fit=crop',
  },
  {
    id: 'p5',
    name: 'Omega Coat Serum',
    category: 'Pet Care',
    price: '€38.00',
    description: 'Omega-3 and omega-6 enriched serum that promotes a glossy, healthy coat and reduces shedding.',
    image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=600&auto=format&fit=crop',
  },
];
