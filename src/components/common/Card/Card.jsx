import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './Card.css';

const Card = ({
  children,
  className = '',
  interactive = false,
  glass = false,
  onClick,
  ...props
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (!interactive) return;
    x.set(0);
    y.set(0);
  };

  const baseClass = 'card';
  const glassClass = glass ? 'glass' : '';
  const interactiveClass = interactive ? 'card--interactive' : '';
  const finalClassName = [baseClass, glassClass, interactiveClass, className].filter(Boolean).join(' ');

  if (interactive) {
    return (
      <motion.div
        className={finalClassName}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        <div style={{ transform: 'translateZ(20px)' }}>
          {children}
        </div>
      </motion.div>
    );
  }

  return (
    <div className={finalClassName} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

export default Card;
