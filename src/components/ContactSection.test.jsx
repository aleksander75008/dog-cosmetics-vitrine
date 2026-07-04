import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import ContactSection from './ContactSection.jsx';

// ─── helpers ────────────────────────────────────────────────────────────────

/** Renders the component and returns a pre-bound userEvent instance. */
function setup() {
  const user = userEvent.setup();
  render(<ContactSection />);
  return { user };
}

/** Fills every field with valid data. */
async function fillValidForm(user) {
  await user.type(screen.getByLabelText(/name/i), 'Jane Doe');
  await user.type(screen.getByLabelText(/email/i), 'jane@example.com');
  await user.selectOptions(screen.getByLabelText(/subject/i), 'Order');
  await user.type(screen.getByLabelText(/message/i), 'Hello there!');
}

// ─── AC: all five fields render ─────────────────────────────────────────────

describe('ContactSection — field presence', () => {
  it('renders Name, Email, Subject, Message fields and Submit button', () => {
    setup();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });
});

// ─── AC2: subject options ────────────────────────────────────────────────────

describe('ContactSection — subject options (AC2)', () => {
  it('renders exactly the three AC-mandated subject options', () => {
    setup();
    const select = screen.getByLabelText(/subject/i);

    // AC-mandated options MUST be present
    expect(within(select).getByRole('option', { name: 'Product Enquiry' })).toBeInTheDocument();
    expect(within(select).getByRole('option', { name: 'Order' })).toBeInTheDocument();
    expect(within(select).getByRole('option', { name: 'Other' })).toBeInTheDocument();

    // Old non-AC labels must NOT appear
    expect(within(select).queryByRole('option', { name: 'General Inquiry' })).toBeNull();
    expect(within(select).queryByRole('option', { name: 'Order Question' })).toBeNull();
    expect(within(select).queryByRole('option', { name: 'Wholesale / Bulk Order' })).toBeNull();
    expect(within(select).queryByRole('option', { name: 'Product Feedback' })).toBeNull();
  });

  it('has exactly four <option> elements (placeholder + 3 AC options)', () => {
    setup();
    const select = screen.getByLabelText(/subject/i);
    // HTMLSelectElement.options is a live HTMLOptionsCollection
    expect(select.options).toHaveLength(4);
  });
});

// ─── AC: inline errors on empty submit ──────────────────────────────────────

describe('ContactSection — validation on submit', () => {
  it('shows required-field errors for all fields when submitted empty', async () => {
    const { user } = setup();
    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/please select a subject/i)).toBeInTheDocument();
    expect(screen.getByText(/message is required/i)).toBeInTheDocument();
  });

  it('shows an invalid-email error when email has no @', async () => {
    const { user } = setup();
    await user.type(screen.getByLabelText(/email/i), 'notanemail');
    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(screen.getByText(/valid email/i)).toBeInTheDocument();
  });
});

// ─── AC: blur-time validation ────────────────────────────────────────────────

describe('ContactSection — blur validation', () => {
  it('does NOT show errors before any interaction', () => {
    setup();
    expect(screen.queryByRole('alert')).toBeNull();
  });

  it('shows a name error after blurring an empty Name field', async () => {
    const { user } = setup();
    await user.click(screen.getByLabelText(/name/i));
    await user.tab(); // moves focus away → triggers blur
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
  });

  it('shows an email error after blurring with invalid email', async () => {
    const { user } = setup();
    await user.type(screen.getByLabelText(/email/i), 'bad-email');
    await user.tab();
    expect(screen.getByText(/valid email/i)).toBeInTheDocument();
  });
});

// ─── AC: success state ───────────────────────────────────────────────────────

describe('ContactSection — success state', () => {
  it('replaces the form with a Thank You message on valid submit', async () => {
    const { user } = setup();
    await fillValidForm(user);
    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    // Form fields must be gone
    expect(screen.queryByLabelText(/name/i)).toBeNull();
    expect(screen.queryByLabelText(/email/i)).toBeNull();
    expect(screen.queryByLabelText(/subject/i)).toBeNull();
    expect(screen.queryByLabelText(/message/i)).toBeNull();
  });
});

// ─── AC: no network calls ────────────────────────────────────────────────────

describe('ContactSection — no network requests', () => {
  it('does not call fetch on valid submit', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response());
    const { user } = setup();
    await fillValidForm(user);
    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
