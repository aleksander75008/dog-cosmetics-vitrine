import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button.jsx';

describe('Button — class name construction', () => {
  it('always applies the base btn class regardless of variant', () => {
    render(<Button variant="primary">Base</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn');
  });

  it('applies btn--primary when variant="primary"', () => {
    render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn--primary');
  });

  it('applies btn--ghost when variant="ghost"', () => {
    render(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn--ghost');
  });

  it('defaults to btn--primary when variant prop is omitted', () => {
    render(<Button>No variant</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('btn--primary');
    expect(btn).not.toHaveClass('btn--ghost');
  });

  it('falls back to btn--primary for an unrecognised variant string', () => {
    // @ts-expect-error — intentionally invalid variant
    render(<Button variant="danger">Bad variant</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('btn--primary');
    expect(btn).not.toHaveClass('btn--danger');
  });

  it('does NOT apply both variant classes simultaneously', () => {
    render(<Button variant="ghost">Ghost only</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('btn--ghost');
    expect(btn).not.toHaveClass('btn--primary');
  });
});

describe('Button — HTML attributes', () => {
  it('renders a <button> element', () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('has type="button" by default to prevent accidental form submission', () => {
    render(<Button>Submit</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('accepts a custom type attribute (e.g. "submit")', () => {
    render(<Button type="submit">Send</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('renders children as the button label', () => {
    render(<Button>Shop Now</Button>);
    expect(screen.getByRole('button', { name: /shop now/i })).toBeInTheDocument();
  });

  it('forwards arbitrary rest props (e.g. aria-label) to the <button>', () => {
    render(<Button aria-label="Open menu">☰</Button>);
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument();
  });
});

describe('Button — interaction', () => {
  it('calls the onClick handler exactly once when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not throw when clicked with no onClick handler provided', () => {
    render(<Button>No handler</Button>);
    expect(() => fireEvent.click(screen.getByRole('button'))).not.toThrow();
  });
});
