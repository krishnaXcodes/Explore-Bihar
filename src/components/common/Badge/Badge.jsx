import React from 'react';
import './Badge.css';

const Badge = ({
  children,
  variant = 'primary', // primary, secondary, success, warning, error, outline
  size = 'md', // sm, md, lg
  className = '',
  icon: Icon,
  ...props
}) => {
  const baseClass = 'badge';
  const variantClass = `badge--${variant}`;
  const sizeClass = `badge--${size}`;
  const finalClassName = [baseClass, variantClass, sizeClass, className].filter(Boolean).join(' ');

  return (
    <span className={finalClassName} {...props}>
      {Icon && <Icon className="badge__icon" />}
      {children}
    </span>
  );
};

export default Badge;
