import PropTypes from 'prop-types';
import styles from './Button.module.css';

/**
 * Reusable Button component.
 *
 * @param {object}  props
 * @param {'primary'|'ghost'} props.variant  - Visual style of the button.
 * @param {'button'|'a'}      props.as       - Underlying HTML element (default: 'button').
 * @param {React.ReactNode}   props.children - Button label / content.
 */
export default function Button({ variant = 'primary', as: Tag = 'button', children, ...rest }) {
  const variantClass = variant === 'ghost' ? styles.ghost : styles.primary;

  return (
    <Tag className={`${styles.btn} ${variantClass}`} {...rest}>
      {children}
    </Tag>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'ghost']),
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
};
