import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import ContactSection from './ContactSection.jsx';

/**
 * Fills every field with valid data and clicks Submit.
 * Uses exact option text from the SUBJECTS array in ContactSection.jsx.
 */
async function submitValidForm(user) {
  await user.type(screen.getByLabelText(/^name$/i), 'Jane Doe');
  await user.type(screen.getByLabelText(/^email$/i), 'jane@example.com');
  await user.selectOptions(screen.getByLabelText(/^subject$/i), 'General Inquiry');
  await user.type(screen.getByLabelText(/^message$/i), 'Hello, I have a question.');
  await user.click(screen.getByRole('button', { name: /send message/i }));
}

describe('ContactSection', () => {
  // ── (a) All 5 fields + submit button render ──────────────────────────────
  it('renders all 5 form fields and the submit button', () => {
    const { container } = render(<ContactSection />);

    // Labels are "Name", "Email", "Subject", "Message" — matched via htmlFor/id pairs
    expect(screen.getByLabelText(/^name$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^email$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^subject$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^message$/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();

    // Verify input types
    expect(container.querySelector('input[name="name"]')).toHaveAttribute('type', 'text');
    expect(container.querySelector('input[name="email"]')).toHaveAttribute('type', 'email');
    expect(container.querySelector('select[name="subject"]')).toBeInTheDocument();
    expect(container.querySelector('textarea[name="message"]')).toBeInTheDocument();
  });

  // ── Subject select options ───────────────────────────────────────────────
  it('renders the subject select with the expected options', () => {
    render(<ContactSection />);
    const select = screen.getByLabelText(/^subject$/i);

    // Default disabled placeholder
    expect(select.querySelector('option[value=""]')).toBeInTheDocument();

    // All options from the SUBJECTS array in ContactSection.jsx
    ['General Inquiry', 'Order Question', 'Wholesale / Bulk Order', 'Product Feedback', 'Other'].forEach(
      (label) => {
        expect(screen.getByRole('option', { name: label })).toBeInTheDocument();
      }
    );
  });

  // ── (b) Required-field errors on empty submit ────────────────────────────
  it('shows required inline errors for every empty field on submit', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);

    await user.click(screen.getByRole('button', { name: /send message/i }));

    // Exact error strings from validate() in ContactSection.jsx
    expect(await screen.findByText('Name is required.')).toBeInTheDocument();
    expect(screen.getByText('Email is required.')).toBeInTheDocument();
    expect(screen.getByText('Please select a subject.')).toBeInTheDocument();
    expect(screen.getByText('Message is required.')).toBeInTheDocument();
  });

  it('does NOT transition to success state when the form is submitted empty', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);

    await user.click(screen.getByRole('button', { name: /send message/i }));

    // Error must appear, success must not
    expect(await screen.findByText('Name is required.')).toBeInTheDocument();
    expect(screen.queryByText(/thank you/i)).not.toBeInTheDocument();
  });

  // ── (c) Email format error ───────────────────────────────────────────────
  it('shows an email format error when the email is non-empty but invalid', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);

    await user.type(screen.getByLabelText(/^email$/i), 'not-an-email');
    await user.click(screen.getByRole('button', { name: /send message/i }));

    // Exact string from validate() — format branch, not the empty branch
    expect(
      await screen.findByText('Please enter a valid email address.')
    ).toBeInTheDocument();
    // The "required" variant must NOT appear
    expect(screen.queryByText('Email is required.')).not.toBeInTheDocument();
  });

  it('does NOT transition to success state when the email format is invalid', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);

    await user.type(screen.getByLabelText(/^email$/i), 'bad-email');
    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByText('Please enter a valid email address.')).toBeInTheDocument();
    expect(screen.queryByText(/thank you/i)).not.toBeInTheDocument();
  });

  // ── Blur-triggered inline errors ─────────────────────────────────────────
  it('shows a required error for Name on blur when the field is empty', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);

    await user.click(screen.getByLabelText(/^name$/i));
    await user.tab(); // moves focus away → triggers onBlur

    expect(await screen.findByText('Name is required.')).toBeInTheDocument();
  });

  it('shows an email format error on blur when the email is non-empty but invalid', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);

    await user.type(screen.getByLabelText(/^email$/i), 'oops');
    await user.tab();

    expect(await screen.findByText('Please enter a valid email address.')).toBeInTheDocument();
  });

  it('shows an email required error on blur when the email field is left empty', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);

    await user.click(screen.getByLabelText(/^email$/i));
    await user.tab();

    expect(await screen.findByText('Email is required.')).toBeInTheDocument();
  });

  // ── (d) Success message after valid submission ───────────────────────────
  it('displays the success message after a fully valid form submission', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);

    await submitValidForm(user);

    // Exact copy from ContactSection.jsx success state (apostrophe is &apos; → ')
    expect(await screen.findByText(/thank you/i)).toBeInTheDocument();
    expect(
      screen.getByText("Thank you! We'll be in touch soon. 🐾")
    ).toBeInTheDocument();
  });

  // ── (e) Form element removed after successful submission ─────────────────
  it('removes the form from the DOM after successful submission', async () => {
    const user = userEvent.setup();
    const { container } = render(<ContactSection />);

    await submitValidForm(user);
    await screen.findByText(/thank you/i); // wait for success state

    // The <form> element itself must be gone
    expect(container.querySelector('form')).not.toBeInTheDocument();
    // The submit button must also be gone
    expect(
      screen.queryByRole('button', { name: /send message/i })
    ).not.toBeInTheDocument();
  });

  // ── Success state renders the status role ────────────────────────────────
  it('renders a status region (role=status) in the success state', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);

    await submitValidForm(user);
    await screen.findByText(/thank you/i);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  // ── Left-column brand copy renders ──────────────────────────────────────
  it('renders the left-column heading "Get in Touch 🐾"', () => {
    render(<ContactSection />);
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument();
  });
});
