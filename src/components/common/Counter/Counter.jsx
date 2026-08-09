import React, { useEffect, useState, useRef } from 'react';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import './Counter.css';

const Counter = ({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '', 
  decimals = 0,
  label
}) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.5, triggerOnce: true });
  const countRef = useRef(0);
  const startTimeRef = useRef(null);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      
      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - Math.min(progress / duration, 1), 4);
      
      const currentCount = easeProgress * end;
      setCount(currentCount);
      
      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, isVisible]);

  const formattedCount = Number(count).toLocaleString('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });

  return (
    <div className="counter" ref={ref}>
      <div className="counter__value">
        {prefix}
        {formattedCount}
        {suffix}
      </div>
      {label && <div className="counter__label">{label}</div>}
    </div>
  );
};

export default Counter;
