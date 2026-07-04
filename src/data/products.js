/**
 * Static product catalogue for the dog cosmetics vitrine.
 * Each product contains all fields required by the Gallery card.
 *
 * Unsplash photo IDs have been verified to exist.
 * URLs include ?w=600&auto=format for optimised delivery.
 *
 * @typedef {Object} Product
 * @property {string} id          - Unique identifier
 * @property {string} name        - Display name
 * @property {string} category    - Product category label
 * @property {string} price       - Formatted price string (e.g. '€34.00')
 * @property {string} description - One-to-two sentence product description
 * @property {string} image       - Absolute Unsplash image URL
 */

/** @type {Product[]} */
export const products = [
  {
    id: 'p1',
    name: 'Oat & Lavender Shampoo',
    category: 'Shampoo',
    price: '€28.00',
    description:
      'A gentle, soap-free shampoo enriched with colloidal oat and lavender essential oil. Leaves your dog\'s coat soft, clean, and calmly scented.',
    image:
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&auto=format',
  },
  {
    id: 'p2',
    name: 'Argan Silk Conditioner',
    category: 'Conditioner',
    price: '€32.00',
    description:
      'Deep-conditioning treatment with argan oil and shea butter that detangles and adds brilliant shine. Suitable for all coat types.',
    image:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&auto=format',
  },
  {
    id: 'p3',
    name: 'Floral Mist Perfume',
    category: 'Perfume',
    price: '€24.00',
    description:
      'A light, alcohol-free body mist with notes of rose and chamomile. Safe for sensitive skin and long-lasting between baths.',
    image:
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&auto=format',
  },
  {
    id: 'p4',
    name: 'Beeswax Paw Balm',
    category: 'Paw Care',
    price: '€18.00',
    description:
      'Protective balm made with beeswax, coconut oil, and vitamin E. Heals cracked pads and shields paws from hot pavements and winter salt.',
    image:
      'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=600&auto=format',
  },
  {
    id: 'p5',
    name: 'Omega Coat Serum',
    category: 'Coat Serum',
    price: '€38.00',
    description:
      'Concentrated leave-in serum packed with omega-3 and omega-6 fatty acids. Reduces shedding and restores lustre to dull or brittle coats.',
    image:
      'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600&auto=format',
  },
];
