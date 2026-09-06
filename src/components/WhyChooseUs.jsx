import React from 'react';
import { whyChooseUs, salonInfo } from '../data/salonData';
import { IconShieldCheck, IconMapPin, IconUserCheck, IconSparkles } from './Icons';

export const WhyChooseUs = () => {
  const getPillarIcon = (icon) => {
    switch (icon) {
      case 'award-experience':
        return <IconShieldCheck size={28} className="why-icon" />;
      case 'map-pin':
        return <IconMapPin size={28} className="why-icon" />;
      case 'user-check':
        return <IconUserCheck size={28} className="why-icon" />;
      case 'sparkles':
        return <IconSparkles size={28} className="why-icon" />;
      default:
        return <IconSparkles size={28} className="why-icon" />;
    }
  };

  return (
    <section id="why-us" className="section why-section" aria-labelledby="why-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Philosophy</span>
          <h2 id="why-heading" className="section-title">
            Thoughtful Care. Everyday Comfort.
          </h2>
          <p className="section-desc">
            We focus on honest, consistent salon service centered on what matters most: your personal comfort, hair wellness, and an unhurried consultation.
          </p>
        </div>

        <div className="why-grid">
          {whyChooseUs.map((pillar, idx) => (
            <div key={idx} className="why-card">
              <div className="why-icon-box">
                {getPillarIcon(pillar.icon)}
              </div>
              <div className="why-card-number">0{idx + 1}</div>
              <h3 className="why-card-title">{pillar.title}</h3>
              <p className="why-card-desc">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Airport Proximity Highlight Callout */}
        <div className="location-callout-card">
          <div className="callout-indicator">
            <IconMapPin size={20} />
            <span>Jessore Road Landmark</span>
          </div>
          <div className="callout-body">
            <h3>Easily reachable for Airport commuters & Dum Dum residents</h3>
            <p>
              Located prominently near 1 No Gate on Jessore Road, our salon is easily accessible for pre-flight grooming, quick post-work blowouts, or leisurely weekend hair care rituals.
            </p>
          </div>
          <div className="callout-action">
            <a 
              href={salonInfo.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
