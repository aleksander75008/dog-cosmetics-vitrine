/**
 * Site-wide footer component.
 * Displays the brand name, a dynamic copyright year, and the brand tagline.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-amber-800 text-amber-100 py-8 px-6 text-center space-y-1">
      <p className="text-lg font-bold tracking-wide">Pawfect Treats</p>
      <p className="text-sm">
        &copy; {year} Pawfect Treats. All rights reserved.
      </p>
      <p className="text-sm italic">
        Handcrafted with love for your furry friends 🐾
      </p>
    </footer>
  );
}
