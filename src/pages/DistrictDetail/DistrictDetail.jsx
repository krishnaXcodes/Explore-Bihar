import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Users, BookOpen, ArrowLeft, Utensils, Landmark, Star } from 'lucide-react';
import { getDistrictBySlug } from '../../data/districts';
import './DistrictDetail.css';

const DistrictDetail = () => {
  const { slug } = useParams();
  const district = getDistrictBySlug(slug);

  if (!district) {
    return (
      <div className="container" style={{ padding: 'var(--space-16) 0', textAlign: 'center' }}>
        <h2>District not found</h2>
        <Link to="/districts" className="btn btn--primary" style={{ marginTop: 'var(--space-4)' }}>
          Back to Districts
        </Link>
      </div>
    );
  }

  return (
    <div className="district-detail">
      {/* Hero */}
      <section className="dd-hero" style={{ borderBottom: `4px solid ${district.color}` }}>
        <div className="container">
          <Link to="/districts" className="dd-back">
            <ArrowLeft size={18} /> All Districts
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="dd-division">{district.division} Division</span>
            <h1 className="dd-title">{district.name}</h1>
            <p className="dd-desc">{district.description}</p>

            <div className="dd-quick-stats">
              <div className="dd-qstat">
                <Users size={18} />
                <div>
                  <strong>{(district.population / 100000).toFixed(1)} Lakh</strong>
                  <span>Population ({district.populationYear})</span>
                </div>
              </div>
              <div className="dd-qstat">
                <MapPin size={18} />
                <div>
                  <strong>{district.area} km²</strong>
                  <span>Area</span>
                </div>
              </div>
              <div className="dd-qstat">
                <BookOpen size={18} />
                <div>
                  <strong>{district.literacy}%</strong>
                  <span>Literacy Rate</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container dd-content">
        {/* History */}
        {district.history && (
          <motion.section
            className="dd-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="dd-section-title"><BookOpen size={22} /> History</h2>
            <p className="dd-section-text">{district.history}</p>
          </motion.section>
        )}

        {/* Culture */}
        {district.culture && (
          <motion.section
            className="dd-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="dd-section-title"><Star size={22} /> Culture</h2>
            <p className="dd-section-text">{district.culture}</p>
          </motion.section>
        )}

        {/* Tourist Attractions */}
        {district.touristAttractions && district.touristAttractions.length > 0 && (
          <motion.section
            className="dd-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="dd-section-title"><Landmark size={22} /> Tourist Attractions</h2>
            <div className="dd-attractions-grid">
              {district.touristAttractions.map((attr, i) => (
                <div key={i} className="dd-attraction glass">
                  <span className="dd-attraction-type">{attr.type}</span>
                  <h4>{attr.name}</h4>
                  <p>{attr.description}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Cuisine & Festivals */}
        <div className="dd-two-col">
          {district.cuisine && district.cuisine.length > 0 && (
            <motion.section
              className="dd-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="dd-section-title"><Utensils size={22} /> Local Cuisine</h2>
              <div className="dd-tags">
                {district.cuisine.map((item, i) => (
                  <span key={i} className="dd-tag">{item}</span>
                ))}
              </div>
            </motion.section>
          )}

          {district.festivals && district.festivals.length > 0 && (
            <motion.section
              className="dd-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="dd-section-title"><Star size={22} /> Festivals</h2>
              <div className="dd-tags">
                {district.festivals.map((item, i) => (
                  <span key={i} className="dd-tag dd-tag--festival">{item}</span>
                ))}
              </div>
            </motion.section>
          )}
        </div>

        {/* Famous Personalities */}
        {district.famousPersonalities && district.famousPersonalities.length > 0 && (
          <motion.section
            className="dd-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="dd-section-title"><Users size={22} /> Famous Personalities</h2>
            <div className="dd-personalities">
              {district.famousPersonalities.map((person, i) => (
                <div key={i} className="dd-person glass">
                  <h4>{person.name}</h4>
                  <p>{person.description}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default DistrictDetail;
