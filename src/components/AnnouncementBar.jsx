import React from 'react';
import { salonInfo } from '../data/salonData';
import { IconClock, IconMapPin, IconPhone } from './Icons';

export const AnnouncementBar = () => {
  return (
    <aside aria-label="Announcement" className="announcement-bar">
      <div className="container announcement-content">
        <div className="announcement-item announcement-hours">
          <IconClock size={14} />
          <span>{salonInfo.hours}</span>
        </div>
        <div className="announcement-divider" aria-hidden="true">•</div>
        <div className="announcement-item announcement-location">
          <IconMapPin size={14} />
          <span>{salonInfo.landmark}</span>
        </div>
        <div className="announcement-divider" aria-hidden="true">•</div>
        <a 
          href={`tel:${salonInfo.phoneRaw}`} 
          className="announcement-item announcement-phone"
          aria-label={`Call ${salonInfo.phone}`}
        >
          <IconPhone size={14} />
          <span>Call: {salonInfo.phone}</span>
        </a>
      </div>
    </aside>
  );
};
