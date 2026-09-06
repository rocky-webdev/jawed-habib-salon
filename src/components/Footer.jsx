import React from 'react';
import { salonInfo, navLinks, serviceCategories } from '../data/salonData';
import { IconPhone, IconMapPin, IconClock, IconExternalLink } from './Icons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-top">
        <div className="footer-grid">
          {/* Column 1: Brand & Philosophy */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-header">
              <img 
                src="/logo.png" 
                alt="The Jawed Habib Salon" 
                className="footer-logo-img" 
                width="36" 
                height="41" 
              />
              <div className="footer-brand-text">
                <span className="footer-brand-title">{salonInfo.shortName}</span>
                <span className="footer-brand-sub">AIRPORT, DUM DUM</span>
              </div>
            </div>
            <p className="footer-tagline">{salonInfo.subheading}</p>

            <div className="footer-contact-stack">
              <a href={`tel:${salonInfo.phoneRaw}`} className="footer-contact-link">
                <IconPhone size={16} />
                <span>{salonInfo.phone}</span>
              </a>
              <div className="footer-contact-link">
                <IconClock size={16} />
                <span>{salonInfo.hours}</span>
              </div>
              <div className="footer-contact-link">
                <IconMapPin size={16} />
                <span>1 No Gate, 24/47 Jessore Rd, Airport, Dum Dum</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Categories */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              {serviceCategories.map((cat) => (
                <li key={cat.id}>
                  <a href="#services" className="footer-nav-link">
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Salon Hours & Location Note */}
          <div className="footer-col">
            <h4 className="footer-col-title">Visit Us</h4>
            <div className="footer-hours-card">
              <p className="footer-hours-heading">Salon Timings:</p>
              <p className="footer-hours-body">{salonInfo.daysOpen}</p>
              <p className="footer-hours-time">{salonInfo.timings}</p>
            </div>

            <div className="footer-social-block">
              <span className="footer-social-label">Connect & Review:</span>
              <div className="footer-social-links">
                <a 
                  href={salonInfo.googleReviewUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-pill"
                >
                  <span>Google Listing</span>
                  <IconExternalLink size={12} />
                </a>
                <a 
                  href={salonInfo.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-pill"
                >
                  <span>WhatsApp</span>
                  <IconExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            © {currentYear} {salonInfo.name}. All rights reserved.
          </p>
          <div className="footer-bottom-meta">
            <span>{salonInfo.category} · Dum Dum, West Bengal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
