import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button.jsx';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('applies btn--primary class by default when no variant is supplied', () => {
    render(<Button>Default</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('btn', 'btn--primary');
  });

  it('applies btn--primary class when variant="primary"', () => {
    render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn--primary');
  });

  it('applies btn--ghost class when variant="ghost"', () => {
    render(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn--ghost');
  });

  it('falls back to btn--primary for an unrecognised variant', () => {
    // @ts-expect-error — intentionally passing invalid variant
    render(<Button variant="danger">Fallback</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn--primary');
    expect(screen.getByRole('button')).not.toHaveClass('btn--danger');
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('has type="button" by default to prevent accidental form submission', () => {
    render(<Button>Submit</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });
});
