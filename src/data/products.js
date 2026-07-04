/**
 * @typedef {Object} Product
 * @property {string} id          - Unique identifier (used as React key)
 * @property {string} name        - Display name of the product
 * @property {string} category    - Category badge label
 * @property {string} price       - Formatted price string (e.g. "$24.99")
 * @property {string} description - Short marketing description (≤ 120 chars)
 * @property {string} image       - Unsplash CDN URL (600×450, fit=crop)
 */

/** @type {Product[]} */
export const products = [
  {
    id: 'prod-001',
    name: 'Silky Coat Shampoo',
    category: 'Shampoo',
    price: '$24.99',
    description:
      'A gentle, sulphate-free formula that deep-cleans and leaves your dog's coat brilliantly soft and shiny.',
    image:
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=450&fit=crop',
  },
  {
    id: 'prod-002',
    name: 'Moisture-Rich Conditioner',
    category: 'Conditioner',
    price: '$22.99',
    description:
      'Infused with argan oil and aloe vera to detangle, hydrate, and protect every strand from root to tip.',
    image:
      'https://images.unsplash.com/photo-1585232351009-aa87416fca55?w=600&h=450&fit=crop',
  },
  {
    id: 'prod-003',
    name: 'Pawfume Eau de Toilette',
    category: 'Fragrance',
    price: '$34.99',
    description:
      'A light, pet-safe scent with notes of vanilla and white musk — keep your pup smelling fresh all day.',
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&h=450&fit=crop',
  },
  {
    id: 'prod-004',
    name: 'Healing Paw Balm',
    category: 'Paw Care',
    price: '$18.99',
    description:
      'Shea butter and beeswax blend that soothes cracked pads and forms a protective barrier against rough terrain.',
    image:
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=450&fit=crop',
  },
  {
    id: 'prod-005',
    name: 'Gloss & Shine Coat Serum',
    category: 'Treatment',
    price: '$29.99',
    description:
      'A lightweight leave-in serum packed with omega-3 and vitamin E to restore lustre and reduce shedding.',
    image:
      'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=600&h=450&fit=crop',
  },
];
