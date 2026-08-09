import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Timeline.css';

const TimelineItem = ({ item, index, isAlternate = false }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  
  const isEven = index % 2 === 0;
  const alignmentClass = isAlternate ? (isEven ? 'timeline-item--left' : 'timeline-item--right') : 'timeline-item--left';

  return (
    <div className={`timeline-item ${alignmentClass}`} ref={ref}>
      <motion.div 
        className="timeline-item__content glass"
        initial={{ opacity: 0, y: 50, x: isAlternate ? (isEven ? -50 : 50) : 0 }}
        animate={isVisible ? { opacity: 1, y: 0, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="timeline-item__header">
          {item.emoji && <span className="timeline-item__emoji">{item.emoji}</span>}
          <span className="timeline-item__date">{item.year}</span>
          <span className="timeline-item__category">{item.era}</span>
        </div>
        <h3 className="timeline-item__title">{item.title}</h3>
        <p className="timeline-item__description">{item.description}</p>
        {item.significance && (
          <div className="timeline-item__significance">
            <strong>Significance:</strong> {item.significance}
          </div>
        )}
      </motion.div>
      <div className="timeline-item__dot-wrapper">
        <motion.div 
          className="timeline-item__dot"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ duration: 0.3, type: "spring" }}
        />
      </div>
    </div>
  );
};

const Timeline = ({ items, isAlternate = true }) => {
  return (
    <div className={`timeline ${isAlternate ? 'timeline--alternate' : ''}`}>
      <div className="timeline__line" />
      {items.map((item, index) => (
        <TimelineItem 
          key={item.id || index} 
          item={item} 
          index={index} 
          isAlternate={isAlternate}
        />
      ))}
    </div>
  );
};

export default Timeline;
