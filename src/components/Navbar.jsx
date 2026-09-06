import React, { useState, useEffect } from 'react';
import { salonInfo, navLinks } from '../data/salonData';
import { IconPhone, IconMenu, IconX, IconCalendar } from './Icons';

export const Navbar = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container-wide navbar-inner">
        {/* Brand Wordmark with Official Logo */}
        <a href="#" className="brand-logo" onClick={closeMenu} aria-label="The Jawed Habib Salon Homepage">
          <img 
            src="/logo.png" 
            alt="The Jawed Habib Salon" 
            className="brand-logo-img" 
            width="44" 
            height="50" 
          />
          <div className="brand-text-wrap">
            <span className="brand-title">The Jawed Habib</span>
            <span className="brand-subtitle">SALON</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Right Actions */}
        <div className="header-actions">
          <a 
            href={`tel:${salonInfo.phoneRaw}`} 
            className="btn-phone-quick" 
            title="Call Salon"
            aria-label={`Call salon at ${salonInfo.phone}`}
          >
            <IconPhone size={17} />
            <span className="phone-text">{salonInfo.phone}</span>
          </a>

          <button 
            type="button" 
            className="btn btn-primary btn-sm"
            onClick={onOpenBooking}
          >
            <IconCalendar size={15} />
            <span>Book Appointment</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer" role="dialog" aria-modal="true">
          <div className="container mobile-menu-content">
            <nav className="mobile-nav" aria-label="Mobile Navigation">
              <ul className="mobile-nav-list">
                {navLinks.map((link) => (
                  <li key={link.href} className="mobile-nav-item">
                    <a 
                      href={link.href} 
                      className="mobile-nav-link"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mobile-menu-footer">
              <div className="mobile-info-card">
                <p className="mobile-info-hours"><strong>Hours:</strong> {salonInfo.hours}</p>
                <p className="mobile-info-address">{salonInfo.address}</p>
              </div>

              <div className="mobile-actions-stack">
                <button 
                  type="button" 
                  className="btn btn-primary btn-lg full-width"
                  onClick={() => {
                    closeMenu();
                    onOpenBooking();
                  }}
                >
                  <IconCalendar size={18} />
                  <span>Book an Appointment</span>
                </button>
                <a 
                  href={`tel:${salonInfo.phoneRaw}`} 
                  className="btn btn-secondary btn-lg full-width"
                >
                  <IconPhone size={18} />
                  <span>Call {salonInfo.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
