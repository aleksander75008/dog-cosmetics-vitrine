import styles from './Contact.module.css';

/**
 * Minimal contact section.
 * Provides the #contact anchor target for Navbar navigation.
 */
export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Get in Touch</h2>
        <p className={styles.copy}>
          We&apos;d love to hear from you — whether you&apos;re looking for the
          perfect scent for your pup or want to stock Pawfume &amp; Co in your
          boutique.
        </p>
        <a href="mailto:hello@pawfumeandco.com" className={styles.email}>
          hello@pawfumeandco.com
        </a>
      </div>
    </section>
  );
}
