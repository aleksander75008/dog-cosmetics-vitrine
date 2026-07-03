import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar.jsx';

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />);
    expect(screen.getByText(/pawfume/i)).toBeInTheDocument();
  });

  it('renders anchor links to #hero, #gallery, and #contact', () => {
    render(<Navbar />);
    const links = screen.getAllByRole('link');
    const hrefs = links.map((l) => l.getAttribute('href'));
    expect(hrefs).toContain('#hero');
    expect(hrefs).toContain('#gallery');
    expect(hrefs).toContain('#contact');
  });

  it('renders a <header> element with role banner', () => {
    render(<Navbar />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
