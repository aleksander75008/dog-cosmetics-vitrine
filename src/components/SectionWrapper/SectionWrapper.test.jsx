import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SectionWrapper from './SectionWrapper.jsx';

describe('SectionWrapper', () => {
  it('renders children', () => {
    render(<SectionWrapper>Hello world</SectionWrapper>);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('forwards the id prop to the <section> element so anchor links resolve', () => {
    const { container } = render(
      <SectionWrapper id="hero">Content</SectionWrapper>
    );
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('id', 'hero');
  });

  it('applies the section-wrapper class', () => {
    const { container } = render(<SectionWrapper>Content</SectionWrapper>);
    expect(container.querySelector('section')).toHaveClass('section-wrapper');
  });

  it('merges an additional className when supplied', () => {
    const { container } = render(
      <SectionWrapper className="extra">Content</SectionWrapper>
    );
    const section = container.querySelector('section');
    expect(section).toHaveClass('section-wrapper', 'extra');
  });

  it('renders without an id when the prop is omitted', () => {
    const { container } = render(<SectionWrapper>Content</SectionWrapper>);
    const section = container.querySelector('section');
    expect(section).not.toHaveAttribute('id');
  });
});
