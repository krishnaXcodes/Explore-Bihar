import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Command } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearch } from '../../../hooks/useSearch';
import searchIndex, { searchOptions } from '../../../data/searchIndex';
import './SearchBar.css';

const SearchBar = ({ 
  placeholder = "Search districts, places, foods, history...",
  isGlobal = false,
  onClose
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  
  const { query, setQuery, results } = useSearch(searchIndex, searchOptions);

  // Group results by category
  const groupedResults = results.slice(0, 10).reduce((acc, result) => {
    if (!acc[result.type]) {
      acc[result.type] = [];
    }
    acc[result.type].push(result);
    return acc;
  }, {});

  const flattenedResults = Object.values(groupedResults).flat();

  useEffect(() => {
    if (isGlobal) {
      const handleGlobalShortcut = (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault();
          setIsOpen(true);
          setTimeout(() => inputRef.current?.focus(), 50);
        }
      };
      document.addEventListener('keydown', handleGlobalShortcut);
      return () => document.removeEventListener('keydown', handleGlobalShortcut);
    }
  }, [isGlobal]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
        if (onClose) onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < flattenedResults.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter' && flattenedResults[selectedIndex]) {
      e.preventDefault();
      handleSelect(flattenedResults[selectedIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      if (onClose) onClose();
    }
  };

  const handleSelect = (item) => {
    navigate(item.link);
    setIsOpen(false);
    setQuery('');
    if (onClose) onClose();
  };

  return (
    <div className={`search-container ${isGlobal ? 'search-container--global' : ''}`} ref={containerRef}>
      {isGlobal && !isOpen ? (
        <button className="search-trigger" onClick={() => setIsOpen(true)}>
          <Search size={18} />
          <span>Search Explore Bihar...</span>
          <kbd className="search-shortcut">
            <Command size={12} /> K
          </kbd>
        </button>
      ) : (
        <div className="search-wrapper">
          <div className="search-input-box glass">
            <Search size={20} className="search-icon" />
            <input
              ref={inputRef}
              type="text"
              className="search-input"
              placeholder={placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsOpen(true)}
              onKeyDown={handleKeyDown}
              autoFocus={isGlobal}
            />
            {query && (
              <button className="search-clear" onClick={() => setQuery('')}>
                <X size={16} />
              </button>
            )}
            {isGlobal && (
              <button className="search-close" onClick={() => { setIsOpen(false); if(onClose) onClose(); }}>
                <X size={20} />
              </button>
            )}
          </div>

          <AnimatePresence>
            {isOpen && query && (
              <motion.div 
                className="search-dropdown glass"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                {flattenedResults.length > 0 ? (
                  <div className="search-results">
                    {Object.entries(groupedResults).map(([type, items], typeIndex) => (
                      <div key={type} className="search-group">
                        <h4 className="search-group-title">{type.toUpperCase()}</h4>
                        <ul className="search-list">
                          {items.map(item => {
                            const index = flattenedResults.findIndex(r => r.id === item.id);
                            return (
                              <li 
                                key={item.id}
                                className={`search-item ${index === selectedIndex ? 'search-item--selected' : ''}`}
                                onClick={() => handleSelect(item)}
                                onMouseEnter={() => setSelectedIndex(index)}
                              >
                                <div className="search-item-content">
                                  <span className="search-item-title">{item.title}</span>
                                  <span className="search-item-category">{item.category}</span>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="search-empty">
                    <p>No results found for "{query}"</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
