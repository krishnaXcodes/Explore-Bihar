import React from 'react';
import { motion } from 'framer-motion';
import { Palette, MapPin } from 'lucide-react';
import { artsCrafts, giProducts } from '../../data/artsCrafts';
import Tabs from '../../components/common/Tabs/Tabs';
import './Culture.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const ArtsPanel = () => (
  <motion.div className="culture-grid" variants={containerVariants} initial="hidden" animate="visible">
    {artsCrafts.map((art) => (
      <motion.div key={art.id} variants={itemVariants} className="culture-card glass">
        <div className="culture-card__emoji">{art.emoji || '🎨'}</div>
        <h3 className="culture-card__name">{art.name}</h3>
        {art.origin && <span className="culture-card__origin"><MapPin size={12} /> {art.origin}</span>}
        <p className="culture-card__desc">{art.description.substring(0, 180)}...</p>
        {art.materials && (
          <div className="culture-card__tags">
            {art.materials.slice(0, 3).map((m, i) => (
              <span key={i} className="dd-tag">{m}</span>
            ))}
          </div>
        )}
      </motion.div>
    ))}
  </motion.div>
);

const GIPanel = () => (
  <motion.div className="culture-grid" variants={containerVariants} initial="hidden" animate="visible">
    {giProducts.map((product) => (
      <motion.div key={product.id} variants={itemVariants} className="culture-card glass">
        <div className="culture-card__emoji">{product.emoji || '🏷️'}</div>
        <span className="culture-card__gi-badge">GI Tagged</span>
        <h3 className="culture-card__name">{product.name}</h3>
        <span className="culture-card__category">{product.category}</span>
        <p className="culture-card__desc">{product.description.substring(0, 180)}...</p>
        {product.giYear && (
          <span className="culture-card__year">GI Tag: {product.giYear}</span>
        )}
      </motion.div>
    ))}
  </motion.div>
);

const Culture = () => {
  const tabs = [
    { id: 'arts', label: 'Arts & Crafts', icon: <Palette size={16} />, content: <ArtsPanel /> },
    { id: 'gi', label: 'GI Products', icon: <span>🏷️</span>, content: <GIPanel /> },
  ];

  return (
    <div className="culture-page">
      <section className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="page-hero__tag">🎨 Arts & Culture</span>
            <h1 className="page-hero__title">Culture of Bihar</h1>
            <p className="page-hero__subtitle">
              Discover the vibrant artistic traditions and GI-tagged products that define Bihar's cultural identity.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section--compact">
        <div className="container">
          <Tabs tabs={tabs} />
        </div>
      </section>
    </div>
  );
};

export default Culture;
