/**
 * Static product catalogue for the Dog Cosmetics Gallery.
 *
 * All Unsplash URLs use stable photo IDs verified to resolve correctly.
 * Format: https://images.unsplash.com/photo-<id>?w=600&q=80
 *
 * @typedef {Object} Product
 * @property {string} id         - Unique identifier used as React key.
 * @property {string} name       - Display name of the product.
 * @property {string} category   - Product category label.
 * @property {string} price      - Formatted price string (e.g. "$24.99").
 * @property {string} description - Short marketing description.
 * @property {string} image      - Stable Unsplash image URL.
 */

/** @type {Product[]} */
export const products = [
  {
    id: 'prod-001',
    name: 'Lavender Coat Shampoo',
    category: 'Shampoo',
    price: '$18.99',
    description:
      'A gentle, sulphate-free shampoo infused with lavender oil to leave your dog\'s coat silky and fragrant.',
    image:
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
  },
  {
    id: 'prod-002',
    name: 'Oat & Honey Conditioner',
    category: 'Conditioner',
    price: '$21.50',
    description:
      'Deep-moisturising conditioner with colloidal oatmeal and raw honey to soothe dry, itchy skin.',
    image:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80',
  },
  {
    id: 'prod-003',
    name: 'Paw Balm Butter',
    category: 'Paw Care',
    price: '$14.00',
    description:
      'Protective shea-butter balm that heals cracked paw pads and shields against hot pavements.',
    image:
      'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=600&q=80',
  },
  {
    id: 'prod-004',
    name: 'Brightening Coat Spray',
    category: 'Grooming Spray',
    price: '$16.75',
    description:
      'A leave-in detangling spray that adds shine and reduces static — perfect between bath days.',
    image:
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=600&q=80',
  },
  {
    id: 'prod-005',
    name: 'Charcoal Dental Foam',
    category: 'Dental Care',
    price: '$12.99',
    description:
      'Activated-charcoal foam that freshens breath and reduces plaque without brushing.',
    image:
      'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=600&q=80',
  },
];
