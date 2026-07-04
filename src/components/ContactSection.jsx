import React, { useState } from 'react';
import './ContactSection.css';

/** AC2: exactly these three subject options — no others. */
const SUBJECTS = ['Product Enquiry', 'Order', 'Other'];

/** RFC-ish email regex — rejects strings without @ and a domain part. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates the form fields and returns an error map.
 * @param {{ name: string, email: string, subject: string, message: string }} fields
 * @returns {Record<string, string>} map of field name → error message (empty = valid)
 */
function validate({ name, email, subject, message }) {
  /** @type {Record<string, string>} */
  const errors = {};
  if (!name.trim()) errors.name = 'Name is required.';
  if (!email.trim()) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_RE.test(email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!subject) errors.subject = 'Please select a subject.';
  if (!message.trim()) errors.message = 'Message is required.';
  return errors;
}

/**
 * Contact & Order Inquiry section component.
 * Renders a two-column layout (brand copy + contact form).
 * Validates on blur and on submit; shows inline errors per field.
 * On valid submit replaces the form with a success message.
 * Makes no network requests.
 */
export default function ContactSection() {
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, subject: false, message: false });
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const errors = validate(fields);

  /**
   * Returns the error string for a field only when it should be visible.
   * @param {keyof typeof fields} field
   */
  const visibleError = (field) =>
    (submitted || touched[field]) ? (errors[field] ?? '') : '';

  /** @param {React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>} e */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  /** @param {React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>} e */
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  /** @param {React.FormEvent<HTMLFormElement>} e */
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (Object.keys(errors).length === 0) {
      setSuccess(true);
    }
  };

  if (success) {
    return (
      <section id="contact" className="contact-section" aria-label="Contact">
        <div className="contact-success" role="alert">
          <h2>Thank you for reaching out!</h2>
          <p>We have received your message and will get back to you shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact-section" aria-label="Contact">
      <div className="contact-inner">
        <div className="contact-copy">
          <h2>Get in Touch</h2>
          <p>
            Have a question about a product or an existing order? We&rsquo;re here
            to help. Fill in the form and our team will respond within one business day.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div className="form-group">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={fields.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-describedby={visibleError('name') ? 'error-name' : undefined}
              aria-invalid={!!visibleError('name')}
            />
            {visibleError('name') && (
              <span id="error-name" className="field-error" role="alert">
                {visibleError('name')}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={fields.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-describedby={visibleError('email') ? 'error-email' : undefined}
              aria-invalid={!!visibleError('email')}
            />
            {visibleError('email') && (
              <span id="error-email" className="field-error" role="alert">
                {visibleError('email')}
              </span>
            )}
          </div>

          {/* Subject */}
          <div className="form-group">
            <label htmlFor="contact-subject">Subject</label>
            <select
              id="contact-subject"
              name="subject"
              value={fields.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-describedby={visibleError('subject') ? 'error-subject' : undefined}
              aria-invalid={!!visibleError('subject')}
            >
              <option value="" disabled>
                Select a subject
              </option>
              {SUBJECTS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {visibleError('subject') && (
              <span id="error-subject" className="field-error" role="alert">
                {visibleError('subject')}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={fields.message}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-describedby={visibleError('message') ? 'error-message' : undefined}
              aria-invalid={!!visibleError('message')}
            />
            {visibleError('message') && (
              <span id="error-message" className="field-error" role="alert">
                {visibleError('message')}
              </span>
            )}
          </div>

          {/* Submit */}
          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
