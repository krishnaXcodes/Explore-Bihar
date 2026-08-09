import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Modal from '../Modal/Modal';
import './ImageGallery.css';

const ImageGallery = ({ images = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  
  if (!images || images.length === 0) return null;

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className={`gallery-item ${index === 0 ? 'gallery-item--featured' : ''}`}
            onClick={() => openLightbox(index)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img src={img.url} alt={img.caption || `Image ${index + 1}`} loading="lazy" />
            {img.caption && (
              <div className="gallery-item__caption">
                <span>{img.caption}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <Modal 
            isOpen={true} 
            onClose={closeLightbox} 
            size="xl" 
            glass={true}
            className="gallery-lightbox"
          >
            <div className="lightbox-content">
              <img 
                src={images[selectedIndex].url} 
                alt={images[selectedIndex].caption || 'Enlarged image'} 
                className="lightbox-image"
              />
              
              {images.length > 1 && (
                <>
                  <button className="lightbox-nav lightbox-nav--prev" onClick={prevImage} aria-label="Previous image">
                    <ChevronLeft size={32} />
                  </button>
                  <button className="lightbox-nav lightbox-nav--next" onClick={nextImage} aria-label="Next image">
                    <ChevronRight size={32} />
                  </button>
                </>
              )}
              
              {images[selectedIndex].caption && (
                <div className="lightbox-caption">
                  {images[selectedIndex].caption}
                </div>
              )}
              
              <div className="lightbox-counter">
                {selectedIndex + 1} / {images.length}
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
