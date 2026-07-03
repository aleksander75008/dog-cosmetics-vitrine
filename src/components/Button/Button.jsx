import './Button.css';

/**
 * Reusable button component.
 *
 * @param {object}  props
 * @param {'primary'|'ghost'} [props.variant='primary'] - Visual style variant.
 * @param {React.ReactNode}   props.children            - Button label / content.
 * @param {string}            [props.type='button']     - HTML button type attribute.
 * @param {function}          [props.onClick]           - Click handler.
 */
export default function Button({
  variant = 'primary',
  children,
  type = 'button',
  onClick,
  ...rest
}) {
  // Defensively fall back to 'primary' if an unexpected variant is supplied
  // so the component never renders with a broken or missing CSS class.
  const safeVariant = variant === 'ghost' ? 'ghost' : 'primary';

  return (
    <button
      type={type}
      className={`btn btn--${safeVariant}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
