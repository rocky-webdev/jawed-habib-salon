import React, { useState } from 'react';
import { galleryImages } from '../data/salonData';
import { IconX, IconSparkles } from './Icons';

export const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', 'Styling', 'Hair Care', "Men's Grooming", 'Ambience'];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="section gallery-section" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Visual Inspiration</span>
          <h2 id="gallery-heading" className="section-title">
            The Salon Gallery
          </h2>
          <p className="section-desc">
            A glimpse into our salon atmosphere and styling finishes. Images below are editable royalty-free previews demonstrating our work and welcoming space.
          </p>
        </div>

        {/* Gallery Filters */}
        <div className="gallery-filter-bar" role="group" aria-label="Gallery Category Filters">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`gallery-filter-btn ${activeFilter === cat ? 'is-active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => setLightboxImage(image)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxImage(image);
                }
              }}
              aria-label={`View enlarged photo: ${image.title}`}
            >
              <div className="gallery-image-box">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="gallery-img"
                  loading="lazy"
                  width="450"
                  height="340"
                />
                <div className="gallery-overlay">
                  <span className="gallery-tag">{image.category}</span>
                  <h4 className="gallery-title">{image.title}</h4>
                  <span className="gallery-zoom-hint">Click to enlarge</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Image Customization */}
        <div className="gallery-footer-note">
          <IconSparkles size={16} />
          <span>Photos can be easily updated in <code>src/data/salonData.js</code> to feature real salon portfolio work.</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="lightbox-backdrop" 
          onClick={() => setLightboxImage(null)}
          role="dialog" 
          aria-modal="true"
          aria-label="Enlarged gallery photo"
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="lightbox-close" 
              onClick={() => setLightboxImage(null)}
              aria-label="Close image preview"
            >
              <IconX size={24} />
            </button>
            <img 
              src={lightboxImage.src} 
              alt={lightboxImage.alt} 
              className="lightbox-img" 
            />
            <div className="lightbox-caption">
              <h4>{lightboxImage.title}</h4>
              <span className="lightbox-category">{lightboxImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
