/**
 * @typedef {Object} Product
 * @property {number} id - Unique product identifier.
 * @property {string} name - Display name of the product.
 * @property {string} category - Product category label.
 * @property {string} description - Short marketing description.
 * @property {string} price - Formatted price string including currency symbol.
 * @property {string} image - URL of the product image.
 */

/** @type {Product[]} */
export const products = [
  {
    id: 1,
    name: 'Lavender Paw Balm',
    category: 'Paw Care',
    description: 'Soothing lavender-infused balm that moisturises and protects delicate paw pads.',
    price: '£12.99',
    image: 'https://placehold.co/400x300/d8b4fe/4c1d95?text=Paw+Balm',
  },
  {
    id: 2,
    name: 'Oat & Honey Shampoo',
    category: 'Coat Care',
    description: 'Gentle, tear-free shampoo with colloidal oat and raw honey for a glossy coat.',
    price: '£18.50',
    image: 'https://placehold.co/400x300/fde68a/78350f?text=Shampoo',
  },
  {
    id: 3,
    name: 'Chamomile Detangling Spray',
    category: 'Coat Care',
    description: 'Lightweight leave-in spray that eliminates knots and adds a silky shine.',
    price: '£14.00',
    image: 'https://placehold.co/400x300/a7f3d0/065f46?text=Detangler',
  },
  {
    id: 4,
    name: 'Charcoal Dental Powder',
    category: 'Dental Care',
    description: 'Activated charcoal powder that whitens teeth and freshens breath naturally.',
    price: '£9.99',
    image: 'https://placehold.co/400x300/d1d5db/111827?text=Dental+Powder',
  },
  {
    id: 5,
    name: 'Rose Hip Ear Cleaner',
    category: 'Ear Care',
    description: 'Alcohol-free ear cleaning solution enriched with rose hip oil to reduce irritation.',
    price: '£11.25',
    image: 'https://placehold.co/400x300/fecdd3/9f1239?text=Ear+Cleaner',
  },
  {
    id: 6,
    name: 'Coconut Coat Conditioner',
    category: 'Coat Care',
    description: 'Deep-conditioning treatment with virgin coconut oil for soft, manageable fur.',
    price: '£16.75',
    image: 'https://placehold.co/400x300/fed7aa/7c2d12?text=Conditioner',
  },
];
