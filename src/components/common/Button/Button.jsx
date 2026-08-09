import React from 'react';
import './Button.css';
import { Loader2 } from 'lucide-react';

const Button = React.forwardRef(({
  children,
  variant = 'primary', // primary, secondary, ghost, icon
  size = 'md', // sm, md, lg
  className = '',
  isLoading = false,
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  ...props
}, ref) => {
  const baseClass = 'btn';
  const variantClass = `btn--${variant}`;
  const sizeClass = `btn--${size}`;
  const loadingClass = isLoading ? 'btn--loading' : '';
  const disabledClass = disabled || isLoading ? 'btn--disabled' : '';

  const finalClassName = [baseClass, variantClass, sizeClass, loadingClass, disabledClass, className].filter(Boolean).join(' ');

  return (
    <button
      ref={ref}
      className={finalClassName}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="btn__loading-icon animate-spin" />}
      {!isLoading && Icon && iconPosition === 'left' && <Icon className="btn__icon btn__icon--left" />}
      <span className="btn__content">{children}</span>
      {!isLoading && Icon && iconPosition === 'right' && <Icon className="btn__icon btn__icon--right" />}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
