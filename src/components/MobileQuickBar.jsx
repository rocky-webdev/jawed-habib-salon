import React from 'react';
import { salonInfo } from '../data/salonData';
import { IconPhone, IconCalendar, IconMapPin } from './Icons';

export const MobileQuickBar = ({ onOpenBooking }) => {
  return (
    <aside className="mobile-quick-bar" aria-label="Mobile Quick Actions">
      <a 
        href={`tel:${salonInfo.phoneRaw}`} 
        className="mobile-quick-btn quick-call"
        aria-label={`Call salon desk at ${salonInfo.phone}`}
      >
        <IconPhone size={18} />
        <span>Call Salon</span>
      </a>

      <button 
        type="button" 
        className="mobile-quick-btn quick-book"
        onClick={onOpenBooking}
        aria-label="Book an appointment"
      >
        <IconCalendar size={18} />
        <span>Book Slot</span>
      </button>

      <a 
        href={salonInfo.googleMapsUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mobile-quick-btn quick-directions"
        aria-label="Get directions to the salon on Google Maps"
      >
        <IconMapPin size={18} />
        <span>Directions</span>
      </a>
    </aside>
  );
};
