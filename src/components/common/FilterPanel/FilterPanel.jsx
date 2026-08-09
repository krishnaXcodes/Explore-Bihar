import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../Button/Button';
import './FilterPanel.css';

const FilterSection = ({ title, options, selected, onChange, defaultExpanded = true }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="filter-section">
      <button 
        className="filter-section__header" 
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <span className="filter-section__title">{title}</span>
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className="filter-section__content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="filter-list">
              {options.map((option) => {
                const isSelected = selected.includes(option.value);
                return (
                  <li key={option.value} className="filter-list__item">
                    <label className="filter-checkbox">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={isSelected}
                        onChange={() => onChange(option.value)}
                      />
                      <div className={`filter-checkbox__box ${isSelected ? 'filter-checkbox__box--selected' : ''}`}>
                        {isSelected && <Check size={12} />}
                      </div>
                      <span className="filter-checkbox__label">{option.label}</span>
                      {option.count !== undefined && (
                        <span className="filter-checkbox__count">({option.count})</span>
                      )}
                    </label>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FilterPanel = ({ 
  filters, // Array of config: { id, title, options: [{label, value, count}] }
  activeFilters, // Object: { [filterId]: [selectedValues] }
  onFilterChange, // Function(filterId, value)
  onClearAll, // Function()
  className = ''
}) => {
  const activeFilterCount = Object.values(activeFilters).reduce((acc, curr) => acc + curr.length, 0);

  return (
    <div className={`filter-panel ${className}`}>
      <div className="filter-panel__header">
        <h3 className="filter-panel__title">Filters</h3>
        {activeFilterCount > 0 && (
          <button className="filter-panel__clear" onClick={onClearAll}>
            Clear all
          </button>
        )}
      </div>

      <div className="filter-panel__body">
        {filters.map((filter) => (
          <FilterSection
            key={filter.id}
            title={filter.title}
            options={filter.options}
            selected={activeFilters[filter.id] || []}
            onChange={(value) => onFilterChange(filter.id, value)}
            defaultExpanded={true}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
