import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Clock, Ticket, Search } from 'lucide-react';
import { touristPlaces, getAllCategories } from '../../data/touristPlaces';
import './Tourism.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const Tourism = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = useMemo(() => ['All', ...getAllCategories()], []);

  const filtered = useMemo(() => {
    return touristPlaces.filter(p => {
      const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.district.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="tourism-page">
      <section className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="page-hero__tag">🏛️ Heritage & Tourism</span>
            <h1 className="page-hero__title">Tourist Destinations</h1>
            <p className="page-hero__subtitle">
              Discover Bihar's magnificent heritage — from UNESCO World Heritage sites to ancient ruins and sacred temples.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section--compact">
        <div className="container">
          <div className="tourism-controls">
            <div className="districts-search">
              <Search size={18} className="districts-search__icon" />
              <input type="text" placeholder="Search places..." value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} className="districts-search__input" />
            </div>
            <div className="tourism-cats">
              {categories.map(cat => (
                <button key={cat}
                  className={`tourism-cat-btn ${selectedCategory === cat ? 'tourism-cat-btn--active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div className="tourism-grid" variants={containerVariants} initial="hidden" animate="visible"
            key={`${selectedCategory}-${searchQuery}`}>
            {filtered.map((place) => (
              <motion.div key={place.id} variants={itemVariants} className="tourism-card glass">
                <div className="tourism-card__badge">{place.type}</div>
                <div className="tourism-card__body">
                  <span className="tourism-card__category">{place.category}</span>
                  <h3 className="tourism-card__name">{place.name}</h3>
                  <p className="tourism-card__desc">{place.description.substring(0, 150)}...</p>
                  <div className="tourism-card__meta">
                    <span><MapPin size={14} /> {place.district}</span>
                    {place.rating && <span><Star size={14} /> {place.rating}</span>}
                    {place.timings && <span><Clock size={14} /> {place.timings}</span>}
                    {place.entryFee && <span><Ticket size={14} /> {place.entryFee}</span>}
                  </div>
                  {place.highlights && (
                    <div className="tourism-card__highlights">
                      {place.highlights.slice(0, 3).map((h, i) => (
                        <span key={i} className="dd-tag">{h}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="districts-empty"><p>No places found.</p></div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Tourism;
