import React from 'react';
import { trustHighlights, salonInfo } from '../data/salonData';
import { IconClock, IconMapPin, IconUserCheck, IconShieldCheck, IconStar } from './Icons';

export const TrustSection = () => {
  const getIcon = (id) => {
    switch (id) {
      case 'hours':
        return <IconClock size={22} className="trust-icon" />;
      case 'location':
        return <IconMapPin size={22} className="trust-icon" />;
      case 'care':
        return <IconUserCheck size={22} className="trust-icon" />;
      case 'hygiene':
        return <IconShieldCheck size={22} className="trust-icon" />;
      default:
        return <IconStar size={22} className="trust-icon" />;
    }
  };

  return (
    <section className="trust-strip" aria-label="Salon Key Highlights">
      <div className="container">
        <div className="trust-grid">
          {trustHighlights.map((item) => (
            <div key={item.id} className="trust-card">
              <div className="trust-icon-box">
                {getIcon(item.id)}
              </div>
              <div className="trust-info">
                <span className="trust-badge">{item.badge}</span>
                <h3 className="trust-title">{item.title}</h3>
                <p className="trust-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Quick Verification Bar */}
        <div className="trust-google-bar">
          <div className="google-bar-left">
            <span className="google-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
            </span>
            <div className="google-bar-text">
              <strong>Google Business Location</strong>
              <span>1 No Gate, 24/47 Jessore Rd, Airport, Dum Dum</span>
            </div>
          </div>
          <a 
            href={salonInfo.googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="google-bar-link"
          >
            <span>View on Google Maps</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
