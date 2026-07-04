import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders a primary button with the correct text', () => {
    render(<Button variant="primary">Shop Now</Button>);
    expect(screen.getByText('Shop Now')).toBeInTheDocument();
  });

  it('renders a ghost button with the correct text', () => {
    render(<Button variant="ghost">Learn More</Button>);
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('renders as an anchor tag when as="a" is passed', () => {
    render(
      <Button as="a" href="#gallery" variant="primary">
        Explore
      </Button>
    );
    const link = screen.getByRole('link', { name: 'Explore' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#gallery');
  });
});
