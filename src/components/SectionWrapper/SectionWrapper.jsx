import PropTypes from 'prop-types';
import styles from './SectionWrapper.module.css';

/**
 * Layout wrapper that constrains content width and applies horizontal padding.
 *
 * @param {object}          props
 * @param {string}          props.id       - Section id for anchor navigation.
 * @param {React.ReactNode} props.children - Section content.
 */
export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <section id={id} className={`${styles.wrapper} ${className}`}>
      <div className={styles.inner}>{children}</div>
    </section>
  );
}

SectionWrapper.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
