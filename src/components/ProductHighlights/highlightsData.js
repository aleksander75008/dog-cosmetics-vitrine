/**
 * Product highlight data for Pawfume & Co.
 * Exactly 3 items — frozen to prevent accidental mutation.
 *
 * @type {ReadonlyArray<{id: string, title: string, description: string}>}
 */
const highlightsData = Object.freeze([
  {
    id: 'velvet-muzzle',
    title: 'Velvet Muzzle',
    description:
      'A warm, woody blend of sandalwood and vanilla — designed for the dog who commands every room with quiet confidence.',
  },
  {
    id: 'golden-fetch',
    title: 'Golden Fetch',
    description:
      'Bright citrus top notes of bergamot and lemon zest give way to a clean musk base. Energetic, playful, and utterly irresistible.',
  },
  {
    id: 'midnight-paw',
    title: 'Midnight Paw',
    description:
      'Deep oud and black rose for the mysterious, soulful companion. A statement scent for evenings when your pup deserves the spotlight.',
  },
]);

export default highlightsData;
