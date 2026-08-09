import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button/Button';
import './EmptyState.css';

const EmptyState = ({ 
  icon: Icon, 
  title, 
  description, 
  action, 
  className = '' 
}) => {
  return (
    <motion.div 
      className={`empty-state ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {Icon && (
        <div className="empty-state__icon-wrapper glass">
          <Icon className="empty-state__icon" size={32} />
        </div>
      )}
      <h3 className="empty-state__title">{title}</h3>
      {description && <p className="empty-state__description">{description}</p>}
      
      {action && (
        <div className="empty-state__action">
          <Button 
            variant={action.variant || 'primary'} 
            onClick={action.onClick}
            icon={action.icon}
          >
            {action.label}
          </Button>
        </div>
      )}
    </motion.div>
  );
};

export default EmptyState;
