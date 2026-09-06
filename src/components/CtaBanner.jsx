import React from 'react';
import { salonInfo } from '../data/salonData';
import { IconCalendar, IconPhone, IconClock } from './Icons';

export const CtaBanner = ({ onOpenBooking }) => {
  return (
    <section className="cta-banner-section" aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta-banner-inner">
          <div className="cta-content">
            <span className="cta-eyebrow">Experience Professional Hair Care</span>
            <h2 id="cta-heading" className="cta-title">
              Ready to Refresh Your Style?
            </h2>
            <p className="cta-subtitle">
              Whether you need an essential cut, a soothing hair spa, or a seasonal color update, our stylists at 1 No Gate, Jessore Road are ready to welcome you.
            </p>

            <div className="cta-timings-note">
              <IconClock size={16} />
              <span>Open 7 days a week: 10:00 AM – 9:00 PM</span>
            </div>

            <div className="cta-buttons-row">
              <button 
                type="button" 
                className="btn btn-secondary-banner btn-lg"
                onClick={onOpenBooking}
              >
                <IconCalendar size={18} />
                <span>Book an Appointment</span>
              </button>

              <a 
                href={`tel:${salonInfo.phoneRaw}`} 
                className="btn btn-outline-white btn-lg"
                aria-label={`Call salon desk at ${salonInfo.phone}`}
              >
                <IconPhone size={18} />
                <span>Call {salonInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
