import React, { useState } from 'react';
import { serviceCategories } from '../data/salonData';
import { IconClock, IconScissors, IconCalendar } from './Icons';

export const ServicesSection = ({ onSelectService }) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const activeCategory = serviceCategories[activeCategoryIndex];

  return (
    <section id="services" className="section section-alt services-section" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Offerings</span>
          <h2 id="services-heading" className="section-title">
            Tailored Services & Treatments
          </h2>
          <p className="section-desc">
            Explore our core hair and beauty services. Detailed consultations are conducted prior to chemical services or styling to assess your hair length, texture, and health.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="services-tabs-wrapper" role="tablist" aria-label="Service Categories">
          {serviceCategories.map((cat, idx) => {
            const isActive = idx === activeCategoryIndex;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${cat.id}`}
                id={`tab-${cat.id}`}
                className={`services-tab-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveCategoryIndex(idx)}
              >
                <span className="tab-dot" aria-hidden="true"></span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Description Banner */}
        <div 
          id={`panel-${activeCategory.id}`} 
          role="tabpanel" 
          aria-labelledby={`tab-${activeCategory.id}`}
          className="services-panel"
        >
          <div className="category-meta-bar">
            <div>
              <h3 className="category-name">{activeCategory.name}</h3>
              <p className="category-tagline">{activeCategory.tagline}</p>
            </div>
            <div className="category-note">
              <span className="note-badge">Editable Menu</span>
              <span className="note-text">Prices determined upon consultation</span>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="services-grid">
            {activeCategory.items.map((service, sIdx) => (
              <div key={sIdx} className="service-card">
                <div className="service-card-top">
                  <div className="service-icon-bubble">
                    <IconScissors size={18} />
                  </div>
                  <div className="service-meta">
                    <span className="service-duration">
                      <IconClock size={13} />
                      <span>{service.duration}</span>
                    </span>
                  </div>
                </div>

                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>

                {service.suitableFor && (
                  <div className="service-suitable">
                    <span className="suitable-label">Best for: </span>
                    <span className="suitable-val">{service.suitableFor}</span>
                  </div>
                )}

                <div className="service-card-action">
                  <button
                    type="button"
                    className="btn-service-book"
                    onClick={() => onSelectService(service.title, activeCategory.name)}
                  >
                    <span>Inquire / Book Slot</span>
                    <IconCalendar size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Service Note Banner */}
        <div className="services-footer-banner">
          <div className="footer-banner-content">
            <h4>Looking for a specific service or customized package?</h4>
            <p>
              Feel free to visit our salon directly at 1 No Gate Jessore Rd or call us to speak with a stylist about specialized hair texture solutions, bridal styling, or routine maintenance.
            </p>
          </div>
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={() => onSelectService("General Service Consultation", "Custom")}
          >
            Request Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
