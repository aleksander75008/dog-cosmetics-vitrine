import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import ContactSection from './ContactSection.jsx';

/**
 * Helper: fill every field with valid data and submit.
 * @param {ReturnType<typeof userEvent.setup>} user
 */
async function submitValidForm(user) {
  await user.type(screen.getByLabelText(/name/i), 'Jane Doe');
  await user.type(screen.getByLabelText(/email/i), 'jane@example.com');
  await user.selectOptions(screen.getByLabelText(/subject/i), 'General Inquiry');
  await user.type(screen.getByLabelText(/message/i), 'Hello, I have a question.');
  await user.click(screen.getByRole('button', { name: /send message/i }));
}

describe('ContactSection', () => {
  // (a) All 5 interactive fields render
  it('renders all form fields and the submit button', () => {
    render(<ContactSection />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  // (b) Inline errors appear when submitting with all fields empty
  it('shows inline required errors when submitting an empty form', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);

    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/please select a subject/i)).toBeInTheDocument();
    expect(screen.getByText(/message is required/i)).toBeInTheDocument();
  });

  // (c) Email format error when value is present but malformed
  it('shows an email format error for an invalid email address', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);

    await user.type(screen.getByLabelText(/email/i), 'not-an-email');
    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByText(/please enter a valid email address/i)).toBeInTheDocument();
  });

  // (d) Success message contains "Thank you" after a valid submission
  it('displays the success message after a valid form submission', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);

    await submitValidForm(user);

    expect(await screen.findByText(/thank you/i)).toBeInTheDocument();
  });

  // (e) The form element is removed from the DOM after successful submission
  it('removes the form from the DOM after successful submission', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);

    await submitValidForm(user);

    // Wait for success state
    await screen.findByText(/thank you/i);
    expect(screen.queryByRole('form')).not.toBeInTheDocument();
    // Also confirm no submit button remains
    expect(screen.queryByRole('button', { name: /send message/i })).not.toBeInTheDocument();
  });
});
