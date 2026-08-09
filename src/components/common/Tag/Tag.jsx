import React from 'react';
import { X } from 'lucide-react';
import './Tag.css';

const Tag = ({
  children,
  onRemove,
  isActive = false,
  onClick,
  className = '',
  ...props
}) => {
  const baseClass = 'tag';
  const activeClass = isActive ? 'tag--active' : '';
  const clickableClass = onClick ? 'tag--clickable' : '';
  const finalClassName = [baseClass, activeClass, clickableClass, className].filter(Boolean).join(' ');

  return (
    <span 
      className={finalClassName} 
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...props}
    >
      {children}
      {onRemove && (
        <button 
          className="tag__remove" 
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          aria-label="Remove tag"
        >
          <X size={14} />
        </button>
      )}
    </span>
  );
};

export default Tag;
