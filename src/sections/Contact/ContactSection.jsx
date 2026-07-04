import { useState } from 'react';

const SUBJECTS = [
  'General Inquiry',
  'Order Question',
  'Wholesale / Bulk Order',
  'Product Feedback',
  'Other',
];

/**
 * Pure validation function — no side-effects.
 * @param {{ name: string, email: string, subject: string, message: string }} fields
 * @returns {{ name?: string, email?: string, subject?: string, message?: string }}
 */
function validate(fields) {
  const errors = {};

  if (!fields.name.trim()) {
    errors.name = 'Name is required.';
  }

  if (!fields.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!fields.subject) {
    errors.subject = 'Please select a subject.';
  }

  if (!fields.message.trim()) {
    errors.message = 'Message is required.';
  }

  return errors;
}

/**
 * Contact & Order Inquiry section.
 * Two-column layout on md+, single column on mobile.
 * All state is local — zero network requests.
 */
export default function ContactSection() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  /** Update a single field value. */
  function handleChange(e) {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  /**
   * Mark a field as touched and run validation so inline errors appear
   * only after the user has interacted with that field.
   * @param {string} field
   */
  function handleBlur(field) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(values));
  }

  /**
   * Handle form submission.
   * Always prevents default. Marks all fields touched, validates, and either
   * shows errors or transitions to the success state.
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  function handleSubmit(e) {
    e.preventDefault();

    const allTouched = { name: true, email: true, subject: true, message: true };
    setTouched(allTouched);

    const currentErrors = validate(values);
    setErrors(currentErrors);

    if (Object.keys(currentErrors).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <section className="min-h-screen bg-amber-50 px-6 py-16">
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left column — brand copy */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-amber-800">Get in Touch 🐾</h2>
          <p className="text-lg text-amber-700 leading-relaxed">
            Have a question about our treats, want to place a bulk order, or just
            want to share a photo of your pup enjoying our goodies? We&apos;d love
            to hear from you! Fill in the form and we&apos;ll get back to you
            within one business day.
          </p>
          <p className="text-amber-600 font-medium">
            Every dog deserves the best — and so do you. 🐾
          </p>
        </div>

        {/* Right column — form or success */}
        <div>
          {submitted ? (
            <div
              role="status"
              className="rounded-2xl bg-green-50 border border-green-200 p-10 text-center space-y-3"
            >
              <p className="text-2xl font-semibold text-green-700">
                Thank you! We&apos;ll be in touch soon. 🐾
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5 rounded-2xl bg-white shadow-md p-8"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                {touched.name && errors.name && (
                  <p role="alert" className="mt-1 text-xs text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                {touched.email && errors.email && (
                  <p role="alert" className="mt-1 text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={() => handleBlur('subject')}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
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
                {touched.subject && errors.subject && (
                  <p role="alert" className="mt-1 text-xs text-red-600">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  placeholder="Tell us how we can help…"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                />
                {touched.message && errors.message && (
                  <p role="alert" className="mt-1 text-xs text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-amber-600 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
