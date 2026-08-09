import React from 'react';
import './Skeleton.css';

export const Skeleton = ({ className = '', style = {} }) => {
  return (
    <div className={`skeleton ${className}`} style={style} />
  );
};

export const SkeletonText = ({ lines = 3, className = '' }) => {
  return (
    <div className="skeleton-text-wrapper">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton 
          key={i} 
          className={`skeleton-text ${className}`} 
          style={{ width: i === lines - 1 ? '70%' : '100%' }}
        />
      ))}
    </div>
  );
};

export const SkeletonCard = ({ className = '' }) => {
  return (
    <div className={`skeleton-card ${className}`}>
      <Skeleton className="skeleton-card__image" />
      <div className="skeleton-card__content">
        <Skeleton className="skeleton-card__title" />
        <SkeletonText lines={2} />
      </div>
    </div>
  );
};

export default Skeleton;
