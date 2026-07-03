import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SectionWrapper from './SectionWrapper.jsx';
import Navbar from '../Navbar/Navbar.jsx';

// ---------------------------------------------------------------------------
// SectionWrapper — id forwarding and className merging logic
// ---------------------------------------------------------------------------
describe('SectionWrapper — rendering', () => {
  it('renders children inside the section', () => {
    render(<SectionWrapper>Hello world</SectionWrapper>);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('renders a <section> element as the root node', () => {
    const { container } = render(<SectionWrapper>Content</SectionWrapper>);
    expect(container.firstChild?.nodeName).toBe('SECTION');
  });
});

describe('SectionWrapper — id prop forwarding (anchor link resolution)', () => {
  it('sets the id attribute on the <section> when id is provided', () => {
    const { container } = render(
      <SectionWrapper id="hero">Content</SectionWrapper>
    );
    expect(container.querySelector('section')).toHaveAttribute('id', 'hero');
  });

  it('sets id="gallery" correctly', () => {
    const { container } = render(
      <SectionWrapper id="gallery">Content</SectionWrapper>
    );
    expect(container.querySelector('section')).toHaveAttribute('id', 'gallery');
  });

  it('sets id="contact" correctly', () => {
    const { container } = render(
      <SectionWrapper id="contact">Content</SectionWrapper>
    );
    expect(container.querySelector('section')).toHaveAttribute('id', 'contact');
  });

  it('omits the id attribute entirely when the prop is not supplied', () => {
    const { container } = render(<SectionWrapper>Content</SectionWrapper>);
    expect(container.querySelector('section')).not.toHaveAttribute('id');
  });
});

describe('SectionWrapper — className merging logic', () => {
  it('always applies the section-wrapper base class', () => {
    const { container } = render(<SectionWrapper>Content</SectionWrapper>);
    expect(container.querySelector('section')).toHaveClass('section-wrapper');
  });

  it('merges an extra className alongside the base class', () => {
    const { container } = render(
      <SectionWrapper className="extra">Content</SectionWrapper>
    );
    const section = container.querySelector('section');
    expect(section).toHaveClass('section-wrapper');
    expect(section).toHaveClass('extra');
  });

  it('does not add a spurious empty class when className is omitted', () => {
    const { container } = render(<SectionWrapper>Content</SectionWrapper>);
    // className should be exactly 'section-wrapper' with no trailing space / empty token
    expect(container.querySelector('section')?.className.trim()).toBe('section-wrapper');
  });
});

// ---------------------------------------------------------------------------
// Navbar — brand identity and anchor link requirements
// ---------------------------------------------------------------------------
describe('Navbar — brand identity', () => {
  it('displays the brand name containing "Pawfume"', () => {
    render(<Navbar />);
    expect(screen.getByText(/pawfume/i)).toBeInTheDocument();
  });

  it('renders a <header> landmark with role="banner"', () => {
    render(<Navbar />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders a navigation landmark', () => {
    render(<Navbar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});

describe('Navbar — anchor links', () => {
  it('contains a link pointing to #hero', () => {
    render(<Navbar />);
    const hrefs = screen.getAllByRole('link').map((l) => l.getAttribute('href'));
    expect(hrefs).toContain('#hero');
  });

  it('contains a link pointing to #gallery', () => {
    render(<Navbar />);
    const hrefs = screen.getAllByRole('link').map((l) => l.getAttribute('href'));
    expect(hrefs).toContain('#gallery');
  });

  it('contains a link pointing to #contact', () => {
    render(<Navbar />);
    const hrefs = screen.getAllByRole('link').map((l) => l.getAttribute('href'));
    expect(hrefs).toContain('#contact');
  });

  it('renders at least 3 anchor links in total', () => {
    render(<Navbar />);
    // brand link (#hero) + 3 nav links = 4 minimum; guard against accidental removal
    expect(screen.getAllByRole('link').length).toBeGreaterThanOrEqual(3);
  });
});
