/**
 * @typedef {Object} Product
 * @property {number} id - Unique product identifier (1–5).
 * @property {string} name - Display name of the product.
 * @property {'Shampoo'|'Perfume'|'Conditioner'|'Serum'|'Mask'} category - Product category.
 * @property {string} price - Formatted price string (e.g. '€24.00').
 * @property {string} description - Short 1–2 sentence product description.
 * @property {string} image - Stable Unsplash CDN URL (w=600&h=450&fit=crop).
 */

/** @type {Product[]} */
const products = [
  {
    id: 1,
    name: 'Silky Coat Shampoo',
    category: 'Shampoo',
    price: '€18.00',
    description:
      'A gentle, sulfate-free shampoo that leaves your dog\'s coat brilliantly clean and irresistibly soft. Enriched with oat extract and aloe vera for sensitive skin.',
    image:
      'https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=600&h=450&fit=crop&auto=format',
  },
  {
    id: 2,
    name: 'Velvet Paw Perfume',
    category: 'Perfume',
    price: '€32.00',
    description:
      'A light, alcohol-free fragrance crafted specifically for dogs, with notes of chamomile and vanilla. Long-lasting freshness that is safe for daily use.',
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&h=450&fit=crop&auto=format',
  },
  {
    id: 3,
    name: 'Deep Shine Conditioner',
    category: 'Conditioner',
    price: '€22.00',
    description:
      'An intensive conditioning treatment that detangles and adds luminous shine to all coat types. Formulated with argan oil and vitamin E.',
    image:
      'https://images.unsplash.com/photo-1608096299210-db7e38487075?w=600&h=450&fit=crop&auto=format',
  },
  {
    id: 4,
    name: 'Revive Skin Serum',
    category: 'Serum',
    price: '€45.00',
    description:
      'A concentrated serum that soothes dry, irritated skin and promotes a healthy coat from root to tip. Apply sparingly to problem areas for best results.',
    image:
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=450&fit=crop&auto=format',
  },
  {
    id: 5,
    name: 'Nourish & Glow Mask',
    category: 'Mask',
    price: '€28.00',
    description:
      'A weekly deep-treatment mask that restores moisture and elasticity to dull, over-groomed coats. Rinse after five minutes for a visibly healthier shine.',
    image:
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=450&fit=crop&auto=format',
  },
];

export default products;
