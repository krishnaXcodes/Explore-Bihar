import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, MapPin, Users, ChevronRight, Filter } from 'lucide-react';
import { districts, getAllDivisions } from '../../data/districts';
import BiharMap3D from '../../components/3d/BiharMap3D/BiharMap3D';
import './Districts.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const Districts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('All');

  const divisions = useMemo(() => ['All', ...getAllDivisions()], []);

  const filteredDistricts = useMemo(() => {
    return districts.filter(d => {
      const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDivision = selectedDivision === 'All' || d.division === selectedDivision;
      return matchesSearch && matchesDivision;
    });
  }, [searchQuery, selectedDivision]);

  return (
    <div className="districts-page">
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="page-hero__tag">🗺️ All 38 Districts</span>
            <h1 className="page-hero__title">Districts of Bihar</h1>
            <p className="page-hero__subtitle">
              Explore every district — from bustling Patna to serene Kishanganj. Discover unique cultures, landmarks, and stories.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section--compact">
        <div className="container">
          <div className="districts-map-intro">
            <div>
              <span className="districts-map-intro__eyebrow">Interactive explorer</span>
              <h2>Explore Bihar in 3D</h2>
              <p>Rotate the map, hover over a marker, and click any district to open its profile.</p>
            </div>
          </div>
          <BiharMap3D />

          {/* Filters */}
          <div className="districts-filters">
            <div className="districts-search">
              <Search size={18} className="districts-search__icon" />
              <input
                type="text"
                placeholder="Search districts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="districts-search__input"
              />
            </div>
            <div className="districts-division-filter">
              <Filter size={16} />
              <select
                value={selectedDivision}
                onChange={(e) => setSelectedDivision(e.target.value)}
                className="districts-division-select"
              >
                {divisions.map(d => (
                  <option key={d} value={d}>{d === 'All' ? 'All Divisions' : `${d} Division`}</option>
                ))}
              </select>
            </div>
          </div>

          <p className="districts-count">
            Showing <strong>{filteredDistricts.length}</strong> of {districts.length} districts
          </p>

          {/* Grid */}
          <motion.div
            className="districts-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={`${searchQuery}-${selectedDivision}`}
          >
            {filteredDistricts.map((district) => (
              <motion.div key={district.id} variants={itemVariants}>
                <Link to={`/districts/${district.slug}`} className="district-card glass">
                  <div className="district-card__color-bar" style={{ background: district.color }}></div>
                  <div className="district-card__body">
                    <div className="district-card__header">
                      <h3 className="district-card__name">{district.name}</h3>
                      <span className="district-card__division">{district.division}</span>
                    </div>
                    <p className="district-card__desc">{district.description.substring(0, 120)}...</p>
                    <div className="district-card__stats">
                      <span className="district-card__stat">
                        <Users size={14} />
                        {(district.population / 100000).toFixed(1)}L
                      </span>
                      <span className="district-card__stat">
                        <MapPin size={14} />
                        {district.area} km²
                      </span>
                    </div>
                    <div className="district-card__footer">
                      <span className="district-card__cta">
                        Explore <ChevronRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredDistricts.length === 0 && (
            <div className="districts-empty">
              <p>No districts found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Districts;
