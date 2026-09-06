import React from 'react';
import { salonInfo } from '../data/salonData';
import { IconMapPin, IconPhone, IconClock, IconCalendar, IconWhatsApp, IconExternalLink } from './Icons';

export const LocationContactSection = ({ onOpenBooking }) => {
  return (
    <section id="location" className="section location-section" aria-labelledby="location-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Visit Us</span>
          <h2 id="location-heading" className="section-title">
            Location & Salon Hours
          </h2>
          <p className="section-desc">
            Conveniently located on Jessore Road near Airport 1 No Gate in Dum Dum. Step in for immediate service or schedule ahead.
          </p>
        </div>

        <div className="location-grid">
          {/* Left Column: Contact & Hours Details Card */}
          <div className="location-info-card">
            <h3 className="location-card-title">{salonInfo.name}</h3>
            <p className="location-card-category">{salonInfo.category}</p>

            <div className="location-details-list">
              {/* Address */}
              <div className="location-detail-item">
                <div className="detail-icon-box">
                  <IconMapPin size={20} className="detail-icon" />
                </div>
                <div className="detail-text-box">
                  <h4>Address</h4>
                  <p>{salonInfo.address}</p>
                  <span className="landmark-tag">Landmark: {salonInfo.landmark}</span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="location-detail-item">
                <div className="detail-icon-box">
                  <IconClock size={20} className="detail-icon" />
                </div>
                <div className="detail-text-box">
                  <h4>Operating Hours</h4>
                  <p className="hours-highlight">{salonInfo.hours}</p>
                  <span className="days-note">{salonInfo.daysOpen}</span>
                </div>
              </div>

              {/* Phone */}
              <div className="location-detail-item">
                <div className="detail-icon-box">
                  <IconPhone size={20} className="detail-icon" />
                </div>
                <div className="detail-text-box">
                  <h4>Telephone Inquiries & Bookings</h4>
                  <a href={`tel:${salonInfo.phoneRaw}`} className="phone-link-large">
                    {salonInfo.phone}
                  </a>
                  <span className="phone-hint">Tap to call our desk directly</span>
                </div>
              </div>
            </div>

            {/* Action Buttons Stack */}
            <div className="location-actions-group">
              <a 
                href={`tel:${salonInfo.phoneRaw}`} 
                className="btn btn-primary"
              >
                <IconPhone size={16} />
                <span>Call Desk</span>
              </a>

              <a 
                href={salonInfo.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <IconExternalLink size={16} />
                <span>Get Directions</span>
              </a>

              <a 
                href={salonInfo.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <IconWhatsApp size={16} />
                <span>Chat on WhatsApp</span>
              </a>

              <button 
                type="button" 
                className="btn btn-accent"
                onClick={onOpenBooking}
              >
                <IconCalendar size={16} />
                <span>Book Slot</span>
              </button>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Card */}
          <div className="location-map-card">
            <div className="map-frame-wrapper">
              <iframe
                title="The Jawed Habib airport location map"
                src="https://maps.google.com/maps?q=1+No+Gate,+24/47+Jessore+Rd,+Airport,+Dum+Dum,+West+Bengal+700028&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-iframe"
              ></iframe>

              <div className="map-overlay-badge">
                <div className="badge-pin-icon">
                  <IconMapPin size={16} />
                </div>
                <div>
                  <strong>{salonInfo.shortName}</strong>
                  <span>1 No Gate, Jessore Rd</span>
                </div>
              </div>
            </div>

            <div className="map-caption-bar">
              <span>Proximity: Located near Netaji Subhash Chandra Bose International Airport (Kolkata).</span>
              <a 
                href={salonInfo.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="map-open-link"
              >
                Open in Google Maps App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
