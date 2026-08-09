import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Share2, MessageCircle, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__grid">
          {/* Brand & About */}
          <div className="footer__brand-col">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-text">Explore</span>
              <span className="footer__logo-accent">Bihar</span>
            </Link>
            <p className="footer__description">
              A premium digital museum and heritage portal dedicated to preserving and showcasing the rich history, culture, and beauty of Bihar.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social-link" aria-label="Social">
                <Share2 size={20} />
              </a>
              <a href="#" className="footer__social-link" aria-label="Community">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="footer__social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__links-col">
            <h4 className="footer__heading">Explore</h4>
            <ul className="footer__links-list">
              <li><Link to="/districts">Districts of Bihar</Link></li>
              <li><Link to="/tourism">Tourism & Heritage</Link></li>
              <li><Link to="/history">Historical Timeline</Link></li>
              <li><Link to="/culture">Arts & Culture</Link></li>
              <li><Link to="/food">Traditional Cuisine</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer__links-col">
            <h4 className="footer__heading">Resources</h4>
            <ul className="footer__links-list">
              <li><Link to="/statistics">State Statistics</Link></li>
              <li><Link to="/culture/festivals">Festivals Calendar</Link></li>
              <li><Link to="/culture/gi-products">GI Tags of Bihar</Link></li>
              <li><Link to="/about">About This Project</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Explore Bihar. Built with <Heart size={14} className="footer__heart" /> for the cultural heritage of Bihar.
          </p>
          <div className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
