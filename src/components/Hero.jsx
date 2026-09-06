import React from 'react';
import { salonInfo } from '../data/salonData';
import { IconCalendar, IconPhone, IconMapPin, IconClock, IconStar } from './Icons';

export const Hero = ({ onOpenBooking }) => {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="container-wide">
        <div className="hero-grid">
          {/* Left Column: Editorial Copy & CTAs */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" aria-hidden="true"></span>
              <span>1 No Gate, Jessore Road • Dum Dum Airport Area</span>
            </div>

            <h1 id="hero-heading" className="hero-title">
              Your Style, <span className="text-secondary-gradient">Refined.</span>
            </h1>

            <p className="hero-subtitle">
              Welcome to <strong className="text-dark">{salonInfo.name}</strong> on Jessore Road, Dum Dum. We offer professional haircutting, custom styling, dimensional hair colouring, restorative hair spa, and grooming in a clean, welcoming salon setting right near Kolkata Airport.
            </p>

            {/* Quick Feature Badges */}
            <div className="hero-features-list">
              <div className="hero-feature-item">
                <IconClock size={16} className="text-accent" />
                <span>Open Every Day (10 AM – 9 PM)</span>
              </div>
              <div className="hero-feature-item">
                <IconMapPin size={16} className="text-accent" />
                <span>1 No Gate, Jessore Rd, Dum Dum</span>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="hero-cta-group">
              <button 
                type="button" 
                className="btn btn-primary btn-lg"
                onClick={onOpenBooking}
              >
                <IconCalendar size={18} />
                <span>Book an Appointment</span>
              </button>

              <a 
                href={`tel:${salonInfo.phoneRaw}`} 
                className="btn btn-secondary btn-lg"
                aria-label={`Call salon directly at ${salonInfo.phone}`}
              >
                <IconPhone size={18} />
                <span>Call the Salon</span>
              </a>
            </div>

            {/* Direct Phone Assistance Note */}
            <div className="hero-phone-note">
              <span>Direct Bookings & Consultations: </span>
              <a href={`tel:${salonInfo.phoneRaw}`} className="hero-phone-link">
                {salonInfo.phone}
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Visual Showcase */}
          <div className="hero-visual-wrapper">
            <div className="hero-card-featured">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1100&q=80" 
                alt="Styling in progress at The Jawed Habib Salon" 
                className="hero-main-image"
                loading="eager"
                fetchPriority="high"
                width="640"
                height="720"
              />
              <div className="hero-image-overlay"></div>

              {/* Floating Floating Consultation Card */}
              <div className="hero-float-card hero-float-bottom">
                <div className="float-card-header">
                  <div className="float-stars">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <IconStar key={s} size={15} />
                    ))}
                  </div>
                  <span className="float-tag">Verified Location</span>
                </div>
                <p className="float-card-text">
                  Haircuts · Hair Colour · Hair Spa · Keratin & Grooming
                </p>
                <span className="float-card-sub">Jessore Rd · 1 No Gate · Airport Dum Dum · Open Daily</span>
              </div>

              {/* Top Corner Pill */}
              <div className="hero-float-pill">
                <span className="pill-dot"></span>
                <span>Walk-ins & Appointments Welcome</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
