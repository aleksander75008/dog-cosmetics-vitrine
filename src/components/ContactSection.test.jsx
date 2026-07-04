import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import ContactSection from './ContactSection.jsx';

// ─── helpers ─────────────────────────────────────────────────────────────────

/** Renders the component and returns a pre-bound userEvent instance. */
function setup() {
  const user = userEvent.setup();
  render(<ContactSection />);
  return { user };
}

/**
 * Fills every field with valid data so the form can be submitted successfully.
 * Uses 'Order' as the subject — one of the three AC-mandated options.
 */
async function fillValidForm(user) {
  await user.type(screen.getByLabelText(/name/i), 'Jane Doe');
  await user.type(screen.getByLabelText(/email/i), 'jane@example.com');
  await user.selectOptions(screen.getByLabelText(/subject/i), 'Order');
  await user.type(screen.getByLabelText(/message/i), 'Hello there!');
}

// ─── AC: all five fields render ──────────────────────────────────────────────

describe('ContactSection — field presence', () => {
  it('renders Name, Email, Subject, Message fields and Submit button', () => {
    setup();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /send message/i })
    ).toBeInTheDocument();
  });

  it('renders Name as a text input', () => {
    setup();
    expect(screen.getByLabelText(/name/i)).toHaveAttribute('type', 'text');
  });

  it('renders Email as an email input', () => {
    setup();
    expect(screen.getByLabelText(/email/i)).toHaveAttribute('type', 'email');
  });

  it('renders Subject as a select element', () => {
    setup();
    expect(screen.getByLabelText(/subject/i).tagName).toBe('SELECT');
  });

  it('renders Message as a textarea', () => {
    setup();
    expect(screen.getByLabelText(/message/i).tagName).toBe('TEXTAREA');
  });
});

// ─── AC2: subject options ─────────────────────────────────────────────────────

describe('ContactSection — subject options (AC2)', () => {
  it('renders the three AC-mandated subject options', () => {
    setup();
    const select = screen.getByLabelText(/subject/i);

    expect(
      within(select).getByRole('option', { name: 'Product Enquiry' })
    ).toBeInTheDocument();
    expect(
      within(select).getByRole('option', { name: 'Order' })
    ).toBeInTheDocument();
    expect(
      within(select).getByRole('option', { name: 'Other' })
    ).toBeInTheDocument();
  });

  it('does NOT render old non-AC subject labels', () => {
    setup();
    const select = screen.getByLabelText(/subject/i);

    expect(
      within(select).queryByRole('option', { name: 'General Inquiry' })
    ).toBeNull();
    expect(
      within(select).queryByRole('option', { name: 'Order Question' })
    ).toBeNull();
    expect(
      within(select).queryByRole('option', { name: 'Wholesale / Bulk Order' })
    ).toBeNull();
    expect(
      within(select).queryByRole('option', { name: 'Product Feedback' })
    ).toBeNull();
  });

  it('has exactly four <option> elements (disabled placeholder + 3 AC options)', () => {
    setup();
    const select = screen.getByLabelText(/subject/i);
    // HTMLSelectElement.options is a live HTMLOptionsCollection
    expect(select.options).toHaveLength(4);
  });

  it('placeholder option is disabled and selected by default', () => {
    setup();
    const select = screen.getByLabelText(/subject/i);
    const placeholder = within(select).getByRole('option', {
      name: 'Select a subject',
    });
    expect(placeholder).toBeDisabled();
    // select value starts empty — placeholder has value ""
    expect(select).toHaveValue('');
  });

  it('each AC option is selectable', async () => {
    const { user } = setup();
    const select = screen.getByLabelText(/subject/i);

    for (const label of ['Product Enquiry', 'Order', 'Other']) {
      await user.selectOptions(select, label);
      expect(select).toHaveValue(label);
    }
  });
});

// ─── AC: no errors shown before interaction ───────────────────────────────────

describe('ContactSection — initial state', () => {
  it('shows no error alerts before any interaction', () => {
    setup();
    expect(screen.queryByRole('alert')).toBeNull();
  });

  it('all fields start empty', () => {
    setup();
    expect(screen.getByLabelText(/name/i)).toHaveValue('');
    expect(screen.getByLabelText(/email/i)).toHaveValue('');
    expect(screen.getByLabelText(/subject/i)).toHaveValue('');
    expect(screen.getByLabelText(/message/i)).toHaveValue('');
  });
});

// ─── AC: blur-time validation ─────────────────────────────────────────────────

describe('ContactSection — blur validation', () => {
  it('shows name error after blurring an empty Name field', async () => {
    const { user } = setup();
    await user.click(screen.getByLabelText(/name/i));
    await user.tab(); // moves focus away → triggers blur
    expect(screen.getByText('Name is required.')).toBeInTheDocument();
  });

  it('shows email-required error after blurring an empty Email field', async () => {
    const { user } = setup();
    await user.click(screen.getByLabelText(/email/i));
    await user.tab();
    expect(screen.getByText('Email is required.')).toBeInTheDocument();
  });

  it('shows invalid-email error after blurring with a bad email', async () => {
    const { user } = setup();
    await user.type(screen.getByLabelText(/email/i), 'bad-email');
    await user.tab();
    expect(
      screen.getByText('Please enter a valid email address.')
    ).toBeInTheDocument();
  });

  it('shows message error after blurring an empty Message field', async () => {
    const { user } = setup();
    await user.click(screen.getByLabelText(/message/i));
    await user.tab();
    expect(screen.getByText('Message is required.')).toBeInTheDocument();
  });

  it('does NOT show errors for untouched fields while another field is blurred', async () => {
    const { user } = setup();
    // Only blur Name
    await user.click(screen.getByLabelText(/name/i));
    await user.tab();
    // Email error must not appear yet
    expect(screen.queryByText('Email is required.')).toBeNull();
  });
});

// ─── AC: inline errors on empty submit ───────────────────────────────────────

describe('ContactSection — validation on submit', () => {
  it('shows required-field errors for all fields when submitted empty', async () => {
    const { user } = setup();
    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(screen.getByText('Name is required.')).toBeInTheDocument();
    expect(screen.getByText('Email is required.')).toBeInTheDocument();
    expect(screen.getByText('Please select a subject.')).toBeInTheDocument();
    expect(screen.getByText('Message is required.')).toBeInTheDocument();
  });

  it('shows invalid-email error when email has no @ on submit', async () => {
    const { user } = setup();
    await user.type(screen.getByLabelText(/email/i), 'notanemail');
    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(
      screen.getByText('Please enter a valid email address.')
    ).toBeInTheDocument();
  });

  it('does NOT transition to success state when the form is submitted empty', async () => {
    const { user } = setup();
    await user.click(screen.getByRole('button', { name: /send message/i }));

    // Form fields must still be present
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.queryByText(/thank you/i)).toBeNull();
  });

  it('does NOT transition to success state when only some fields are filled', async () => {
    const { user } = setup();
    await user.type(screen.getByLabelText(/name/i), 'Jane Doe');
    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(screen.queryByText(/thank you/i)).toBeNull();
    expect(screen.getByText('Email is required.')).toBeInTheDocument();
  });
});

// ─── AC: success state ────────────────────────────────────────────────────────

describe('ContactSection — success state', () => {
  it('replaces the form with a Thank You message on valid submit', async () => {
    const { user } = setup();
    await fillValidForm(user);
    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(screen.getByText(/thank you/i)).toBeInTheDocument();
  });

  it('removes all form fields after a valid submit', async () => {
    const { user } = setup();
    await fillValidForm(user);
    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(screen.queryByLabelText(/name/i)).toBeNull();
    expect(screen.queryByLabelText(/email/i)).toBeNull();
    expect(screen.queryByLabelText(/subject/i)).toBeNull();
    expect(screen.queryByLabelText(/message/i)).toBeNull();
    expect(
      screen.queryByRole('button', { name: /send message/i })
    ).toBeNull();
  });

  it('success message is rendered inside the #contact section', async () => {
    const { user } = setup();
    await fillValidForm(user);
    await user.click(screen.getByRole('button', { name: /send message/i }));

    const section = document.querySelector('#contact');
    expect(section).not.toBeNull();
    expect(section).toHaveTextContent(/thank you/i);
  });
});

// ─── AC: no network requests ──────────────────────────────────────────────────

describe('ContactSection — no network requests', () => {
  it('does not call fetch on a valid submit', async () => {
    const fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(new Response());

    const { user } = setup();
    await fillValidForm(user);
    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });

  it('does not call fetch on an invalid (empty) submit', async () => {
    const fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(new Response());

    const { user } = setup();
    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
