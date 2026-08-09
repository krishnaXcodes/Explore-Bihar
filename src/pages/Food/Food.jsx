import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Star, Info } from 'lucide-react';
import { foods, foodCategories, foodTypes } from '../../data/foods';
import './Food.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

const Food = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const filtered = useMemo(() => {
    return foods.filter(f => {
      const matchCat = selectedCategory === 'All' || f.category === selectedCategory;
      const matchType = selectedType === 'All' || f.type === selectedType;
      return matchCat && matchType;
    });
  }, [selectedCategory, selectedType]);

  return (
    <div className="food-page">
      <section className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="page-hero__tag">🍛 Authentic Flavors</span>
            <h1 className="page-hero__title">Bihari Cuisine</h1>
            <p className="page-hero__subtitle">
              Savor the rich, rustic, and mouth-watering culinary traditions of Bihar.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section--compact">
        <div className="container">
          <div className="food-filters">
            <div className="food-filter-group">
              <span className="food-filter-label">Category:</span>
              <div className="food-filter-btns">
                <button
                  className={`tourism-cat-btn ${selectedCategory === 'All' ? 'tourism-cat-btn--active' : ''}`}
                  onClick={() => setSelectedCategory('All')}
                >
                  All
                </button>
                {foodCategories.map(cat => (
                  <button
                    key={cat}
                    className={`tourism-cat-btn ${selectedCategory === cat ? 'tourism-cat-btn--active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="food-filter-group">
              <span className="food-filter-label">Type:</span>
              <div className="food-filter-btns">
                <button
                  className={`tourism-cat-btn ${selectedType === 'All' ? 'tourism-cat-btn--active' : ''}`}
                  onClick={() => setSelectedType('All')}
                >
                  All
                </button>
                {foodTypes.map(type => (
                  <button
                    key={type}
                    className={`tourism-cat-btn ${selectedType === type ? 'tourism-cat-btn--active' : ''}`}
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="food-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={`${selectedCategory}-${selectedType}`}
          >
            {filtered.map((food) => (
              <motion.div key={food.id} variants={itemVariants} className="food-card glass">
                <div className="food-card__header">
                  <div className="food-card__emoji">{food.emoji || '🍽️'}</div>
                  <div className="food-card__tags">
                    {food.isVegetarian && <span className="dd-tag dd-tag--veg">Veg</span>}
                    {food.isStreetFood && <span className="dd-tag dd-tag--street">Street Food</span>}
                  </div>
                </div>
                <h3 className="food-card__name">{food.name}</h3>
                <p className="food-card__desc">{food.description}</p>
                
                {food.ingredients && (
                  <div className="food-card__section">
                    <h4 className="food-card__section-title"><Utensils size={14} /> Key Ingredients</h4>
                    <p className="food-card__section-text">{food.ingredients.join(', ')}</p>
                  </div>
                )}
                
                {food.history && (
                  <div className="food-card__section">
                    <h4 className="food-card__section-title"><Info size={14} /> History / Note</h4>
                    <p className="food-card__section-text">{food.history}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
          
          {filtered.length === 0 && (
            <div className="districts-empty"><p>No dishes found for the selected filters.</p></div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Food;
