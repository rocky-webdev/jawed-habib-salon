import React from 'react';
import { aboutSalon, salonInfo } from '../data/salonData';
import { IconCheck, IconPhone, IconCalendar } from './Icons';

export const AboutSection = ({ onOpenBooking }) => {
  return (
    <section id="about" className="section section-alt about-section" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Visual Showcase with Editorial Frame */}
          <div className="about-visual-column">
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80" 
                alt="Modern, clean salon interior at The Jawed Habib airport" 
                className="about-image-primary"
                loading="lazy"
                width="540"
                height="620"
              />
              <div className="about-badge-card">
                <span className="about-badge-title">{salonInfo.shortName}</span>
                <span className="about-badge-sub">Airport Dum Dum Branch</span>
                <div className="about-badge-divider"></div>
                <span className="about-badge-hours">Open Every Day · 10 AM – 9 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="about-content-column">
            <span className="section-label">About The Salon</span>
            <h2 id="about-heading" className="about-title">
              {aboutSalon.headline}
            </h2>
            <p className="about-subtitle-lead">
              {aboutSalon.subheadline}
            </p>

            <div className="about-paragraphs">
              {aboutSalon.paragraphs.map((p, i) => (
                <p key={i} className="about-p">
                  {p}
                </p>
              ))}
            </div>

            {/* Commitments List */}
            <div className="about-commitments">
              <h4 className="commitments-heading">Our Service Standards:</h4>
              <ul className="commitments-list">
                {aboutSalon.commitments.map((item, idx) => (
                  <li key={idx} className="commitment-item">
                    <span className="commitment-check">
                      <IconCheck size={14} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Bar */}
            <div className="about-actions">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={onOpenBooking}
              >
                <IconCalendar size={16} />
                <span>Schedule a Visit</span>
              </button>
              <a 
                href={`tel:${salonInfo.phoneRaw}`} 
                className="btn btn-secondary"
              >
                <IconPhone size={16} />
                <span>Call {salonInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
