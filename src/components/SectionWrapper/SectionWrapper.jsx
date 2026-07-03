import './SectionWrapper.css';

/**
 * Layout wrapper applied to every top-level page section.
 * Provides consistent token-based padding and a centred max-width container.
 *
 * @param {object}            props
 * @param {string}            [props.id]        - Section id used by Navbar anchor links.
 * @param {string}            [props.className] - Additional CSS classes.
 * @param {React.ReactNode}   props.children    - Section content.
 */
export default function SectionWrapper({ id, className = '', children }) {
  const combinedClass = ['section-wrapper', className].filter(Boolean).join(' ');

  return (
    <section id={id} className={combinedClass}>
      <div className="section-wrapper__inner">{children}</div>
    </section>
  );
}
