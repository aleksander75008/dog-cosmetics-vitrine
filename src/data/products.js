/**
 * @typedef {Object} Product
 * @property {number} id - Unique product identifier.
 * @property {string} name - Display name of the product.
 * @property {string} category - Product category (e.g. Shampoo, Conditioner, Perfume).
 * @property {string} price - Formatted price string including currency symbol.
 * @property {string} description - Short marketing description.
 * @property {string} image - Stable picsum.photos URL with explicit dimensions.
 */

/** @type {Product[]} */
export const products = [
  {
    id: 1,
    name: 'Fluffy Cloud Shampoo',
    category: 'Shampoo',
    price: '£12.99',
    description:
      'A gentle, tear-free formula that leaves your dog\'s coat brilliantly clean and irresistibly soft.',
    image: 'https://picsum.photos/seed/dogshampoo/800/600',
  },
  {
    id: 2,
    name: 'Silky Paws Conditioner',
    category: 'Conditioner',
    price: '£14.49',
    description:
      'Deep-moisturising conditioner that detangles and adds a healthy shine to every coat type.',
    image: 'https://picsum.photos/seed/dogconditioner/800/600',
  },
  {
    id: 3,
    name: 'Blossom & Bark Eau de Toilette',
    category: 'Perfume',
    price: '£18.99',
    description:
      'A light, long-lasting dog cologne with notes of jasmine and cedarwood — perfect for special occasions.',
    image: 'https://picsum.photos/seed/dogcologne/800/600',
  },
  {
    id: 4,
    name: 'Oat & Honey Shampoo Bar',
    category: 'Shampoo',
    price: '£9.99',
    description:
      'Eco-friendly solid shampoo bar enriched with oat extract to soothe sensitive skin.',
    image: 'https://picsum.photos/seed/dogshampoobar/800/600',
  },
  {
    id: 5,
    name: 'Arctic Breeze Leave-In Spray',
    category: 'Conditioner',
    price: '£11.49',
    description:
      'A refreshing leave-in conditioning spray that tames frizz and keeps coats manageable between baths.',
    image: 'https://picsum.photos/seed/dogleavein/800/600',
  },
];
