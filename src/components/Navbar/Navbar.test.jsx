import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />);
    expect(screen.getByText('Pawfume & Co')).toBeInTheDocument();
  });

  it('renders a link to #gallery', () => {
    render(<Navbar />);
    const galleryLink = screen.getByRole('link', { name: 'Our Scents' });
    expect(galleryLink).toBeInTheDocument();
    expect(galleryLink).toHaveAttribute('href', '#gallery');
  });

  it('renders a link to #contact', () => {
    render(<Navbar />);
    const contactLink = screen.getByRole('link', { name: 'Contact' });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '#contact');
  });
});
