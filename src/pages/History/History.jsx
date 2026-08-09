import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Crown } from 'lucide-react';
import { historicalTimeline, getAllEras, famousPersonalities } from '../../data/history';
import './History.css';

const History = () => {
  const [selectedEra, setSelectedEra] = useState('All');
  const eras = useMemo(() => ['All', ...getAllEras()], []);

  const filtered = useMemo(() => {
    if (selectedEra === 'All') return historicalTimeline;
    return historicalTimeline.filter(e => e.era === selectedEra);
  }, [selectedEra]);

  return (
    <div className="history-page">
      <section className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="page-hero__tag">📜 3000+ Years</span>
            <h1 className="page-hero__title">History of Bihar</h1>
            <p className="page-hero__subtitle">
              From the rise of the Magadha Empire to modern independence — walk through the ages of Bihar's extraordinary past.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section--compact">
        <div className="container">
          {/* Era Filters */}
          <div className="history-eras">
            {eras.map(era => (
              <button key={era}
                className={`tourism-cat-btn ${selectedEra === era ? 'tourism-cat-btn--active' : ''}`}
                onClick={() => setSelectedEra(era)}>
                {era}
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className="history-timeline">
            {filtered.map((event, index) => (
              <motion.div
                key={event.id || index}
                className={`timeline-item ${index % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
              >
                <div className="timeline-item__dot"></div>
                <div className="timeline-item__card glass">
                  <span className="timeline-item__era">{event.era}</span>
                  <span className="timeline-item__year">{event.year || event.period}</span>
                  <h3 className="timeline-item__title">{event.title}</h3>
                  <p className="timeline-item__desc">{event.description}</p>
                  {event.significance && (
                    <p className="timeline-item__significance">
                      <Crown size={14} /> {event.significance}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Famous Personalities */}
          <div className="history-personalities">
            <h2 className="section__title" style={{ textAlign: 'left', marginBottom: 'var(--space-8)' }}>
              <Users size={24} /> Famous Personalities
            </h2>
            <div className="personalities-grid">
              {famousPersonalities.map((person, i) => (
                <motion.div key={i} className="personality-card glass"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}>
                  <h4>{person.name}</h4>
                  <p className="personality-role">{person.role || person.title}</p>
                  <p className="personality-desc">{person.description}</p>
                  {person.era && <span className="personality-era">{person.era}</span>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
