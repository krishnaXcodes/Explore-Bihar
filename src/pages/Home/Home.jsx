import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Landmark, UtensilsCrossed, BookOpen, Palette, ArrowRight, Star, Users, Mountain } from 'lucide-react';
import { stateInfo } from '../../data/stateInfo';
import Counter from '../../components/common/Counter/Counter';
import './Home.css';

const features = [
  { icon: MapPin, title: '38 Districts', description: 'Explore every corner of Bihar with detailed district profiles', link: '/districts', color: 'var(--color-primary-500)' },
  { icon: Landmark, title: 'Heritage Sites', description: 'UNESCO World Heritage sites and ancient monuments', link: '/tourism', color: 'var(--color-secondary-500)' },
  { icon: BookOpen, title: 'Rich History', description: 'From the Maurya Empire to modern Bihar', link: '/history', color: 'var(--color-emerald-500)' },
  { icon: Palette, title: 'Arts & Culture', description: 'Madhubani paintings, Tikuli art, and more', link: '/culture', color: 'var(--color-accent-500)' },
  { icon: UtensilsCrossed, title: 'Traditional Cuisine', description: 'Litti Chokha, Sattu, and authentic flavors', link: '/food', color: 'var(--color-primary-700)' },
];

const stats = [
  { label: 'Districts', value: 38, suffix: '' },
  { label: 'Population', value: 104, suffix: 'M+' },
  { label: 'UNESCO Sites', value: 2, suffix: '' },
  { label: 'Years of History', value: 3000, suffix: '+' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__gradient-orb hero__gradient-orb--1"></div>
          <div className="hero__gradient-orb hero__gradient-orb--2"></div>
          <div className="hero__gradient-orb hero__gradient-orb--3"></div>
          <div className="hero__grid-pattern"></div>
        </div>

        <div className="hero__content container">
          <motion.div
            className="hero__text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="hero__badge">
              <Star size={14} /> Premium Digital Museum
            </span>
            <h1 className="hero__title">
              Discover the <span className="hero__title-accent">Soul of Bihar</span>
            </h1>
            <p className="hero__subtitle">
              Journey through 3,000 years of history, art, and culture. From the ancient grandeur of Pataliputra to the living traditions of Madhubani — experience Bihar like never before.
            </p>
            <div className="hero__actions">
              <Link to="/districts" className="btn btn--primary btn--lg">
                Start Exploring <ArrowRight size={18} />
              </Link>
              <Link to="/history" className="btn btn--outline btn--lg">
                View Timeline
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="hero__stat glass">
                <span className="hero__stat-value">
                  <Counter end={stat.value} duration={2000} />{stat.suffix}
                </span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bihar Overview */}
      <section className="section bihar-overview-section">
        <div className="container">
          <div className="bihar-overview glass">
            <div className="bihar-overview__intro">
              <span className="about-tag">Bihar at a glance</span>
              <h2>Eastern India’s Living Heritage</h2>
              <p>
                Bihar is a state in eastern India, with Patna as its capital. It is bordered by Nepal to the north, Uttar Pradesh to the west, Jharkhand to the south, and West Bengal to the east.
              </p>
              <p>
                Famous for its rich ancient history, culture, and holy sites, Bihar is home to more than 100 million people and remains one of India’s most important cultural regions.
              </p>
              <p>
                <strong>The Name origin:</strong> Bihar is derived from the Sanskrit and Pali word <em>Vihara</em>, meaning a Buddhist monastery, reflecting the high density of ancient monasteries once found across the region.
              </p>
            </div>
            <div className="bihar-overview__facts">
              <div className="bihar-overview__fact"><MapPin size={20} /><div><strong>Geography</strong><span>Eastern India, crossed by the Ganges River</span></div></div>
              <div className="bihar-overview__fact"><Landmark size={20} /><div><strong>Capital</strong><span>Patna, historically known as Pataliputra</span></div></div>
              <div className="bihar-overview__fact"><Users size={20} /><div><strong>Districts</strong><span>38 districts in total</span></div></div>
              <div className="bihar-overview__fact"><Mountain size={20} /><div><strong>Climate</strong><span>Hot summers, heavy monsoon rains, and cool winters</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Explore Bihar's Heritage</h2>
            <p className="section__subtitle">
              Dive deep into the cultural tapestry that makes Bihar one of India's most historically significant states
            </p>
          </div>

          <motion.div
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <Link to={feature.link} className="feature-card glass">
                  <div className="feature-card__icon" style={{ color: feature.color }}>
                    <feature.icon size={28} />
                  </div>
                  <h3 className="feature-card__title">{feature.title}</h3>
                  <p className="feature-card__desc">{feature.description}</p>
                  <span className="feature-card__cta">
                    Explore <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Bihar Section */}
      <section className="section about-section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="about-tag">About Bihar</span>
              <h2 className="about-title">The Cradle of Indian Civilization</h2>
              <p className="about-text">
                Bihar, located in eastern India, is the land where Buddhism was born, where the world's first university (Nalanda) stood, and where the great Maurya Empire ruled over most of the Indian subcontinent. With a legacy spanning over three millennia, Bihar is a living museum of Indian history and culture.
              </p>
              <p className="about-text">
                From the sacred Bodhi Tree in Bodh Gaya to the intricate brushstrokes of Madhubani paintings, from the grand ruins of Nalanda to the flavors of Litti Chokha — Bihar offers an unparalleled journey into the heart of India's heritage.
              </p>
              <div className="about-highlights">
                <div className="about-highlight">
                  <Mountain size={20} />
                  <div>
                    <strong>Geography</strong>
                    <span>Ganges plains, Rajgir hills, Kaimur range</span>
                  </div>
                </div>
                <div className="about-highlight">
                  <Users size={20} />
                  <div>
                    <strong>Languages</strong>
                    <span>Hindi, Magahi, Bhojpuri, Maithili, Angika</span>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn btn--secondary">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              className="about-visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="about-visual__card glass">
                <div className="about-visual__emoji">🏛️</div>
                <h4>Nalanda University</h4>
                <p>World's first residential university, established in 5th century CE</p>
              </div>
              <div className="about-visual__card glass">
                <div className="about-visual__emoji">🌳</div>
                <h4>Bodh Gaya</h4>
                <p>Where Siddhartha Gautama attained enlightenment under the Bodhi Tree</p>
              </div>
              <div className="about-visual__card glass">
                <div className="about-visual__emoji">🎨</div>
                <h4>Madhubani Art</h4>
                <p>UNESCO-recognized art form with over 2,500 years of tradition</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
