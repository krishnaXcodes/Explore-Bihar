import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Tabs.css';

const Tabs = ({ tabs = [], defaultTab = 0, onChange, className = '' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef([]);

  useEffect(() => {
    // Update indicator position
    if (tabsRef.current[activeTab]) {
      const tabElement = tabsRef.current[activeTab];
      setIndicatorStyle({
        left: tabElement.offsetLeft,
        width: tabElement.offsetWidth,
      });
    }
  }, [activeTab]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onChange) onChange(index, tabs[index].id);
  };

  if (!tabs || tabs.length === 0) return null;

  return (
    <div className={`tabs-container ${className}`}>
      <div className="tabs-header-wrapper">
        <div className="tabs-header" role="tablist">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={el => tabsRef.current[index] = el}
              className={`tabs-tab ${activeTab === index ? 'tabs-tab--active' : ''}`}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.icon && <span className="tabs-tab-icon">{tab.icon}</span>}
              {tab.label}
            </button>
          ))}
          <motion.div 
            className="tabs-indicator"
            initial={false}
            animate={indicatorStyle}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </div>
      </div>

      <div className="tabs-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            role="tabpanel"
            id={`panel-${tabs[activeTab].id}`}
            aria-labelledby={`tab-${tabs[activeTab].id}`}
          >
            {tabs[activeTab].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;
