import React, { useState, useEffect, useRef } from 'react';
import { salonInfo, serviceCategories } from '../data/salonData';
import { IconX, IconPhone, IconWhatsApp, IconCheck } from './Icons';

export const BookingModal = ({ isOpen, onClose, initialService = "", initialCategory = "" }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceCategory: initialCategory || serviceCategories[0].name,
    serviceName: initialService || '',
    preferredDate: '',
    preferredTime: '11:00 AM - 1:00 PM',
    notes: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const nameInputRef = useRef(null);
  const phoneInputRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, name: value }));
    if (errors.name) {
      if (value.trim()) {
        setErrors(prev => ({ ...prev, name: '' }));
      } else {
        setErrors(prev => ({ ...prev, name: 'Please enter your name.' }));
      }
    }
  };

  const handlePhoneKeyDown = (e) => {
    // Allow navigation and editing control keys
    const allowedKeys = [
      'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
      'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
      'Home', 'End'
    ];

    // Allow keyboard shortcuts (Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X, Cmd+A, etc.)
    if (e.ctrlKey || e.metaKey) {
      return;
    }

    if (allowedKeys.includes(e.key)) {
      return;
    }

    // Only allow numeric digits 0-9
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handlePhoneChange = (e) => {
    // Enforce strictly numeric digits only and maximum 10 digits
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({ ...prev, phone: digitsOnly }));

    if (errors.phone) {
      if (!digitsOnly) {
        setErrors(prev => ({ ...prev, phone: 'Please enter your mobile number.' }));
      } else if (digitsOnly.length < 10) {
        setErrors(prev => ({ ...prev, phone: 'Mobile number must be exactly 10 digits.' }));
      } else {
        setErrors(prev => ({ ...prev, phone: '' }));
      }
    }
  };

  const handleWhatsAppSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    const newErrors = {};

    // 1. First validate Name
    if (!trimmedName) {
      newErrors.name = 'Please enter your name.';
    }

    // 2. Then validate Mobile Number
    if (!trimmedPhone) {
      newErrors.phone = 'Please enter your mobile number.';
    } else if (!/^\d{10}$/.test(trimmedPhone)) {
      newErrors.phone = 'Mobile number must be exactly 10 digits.';
    }

    setErrors(newErrors);

    // If either is invalid or empty, stop submission and do not open WhatsApp
    if (newErrors.name || newErrors.phone) {
      if (newErrors.name && nameInputRef.current) {
        nameInputRef.current.focus();
      } else if (newErrors.phone && phoneInputRef.current) {
        phoneInputRef.current.focus();
      }
      return;
    }

    // Only when both Name and Mobile Number are valid should WhatsApp open
    const message = `Hello, The Jawed Habib Salon!\n\nI would like to request an appointment:\n- Name: ${trimmedName}\n- Phone: ${trimmedPhone}\n- Service Category: ${formData.serviceCategory}\n- Service: ${formData.serviceName || 'Consultation'}\n- Preferred Date: ${formData.preferredDate || 'Earliest available'}\n- Preferred Time: ${formData.preferredTime}\n- Notes: ${formData.notes || 'None'}\n\nPlease let me know slot availability. Thank you!`;
    
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918697165838?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div 
      className="booking-modal-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div 
        className="booking-modal-card" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close booking modal"
        >
          <IconX size={22} />
        </button>

        {!submitted ? (
          <div>
            <div className="modal-header">
              <span className="modal-eyebrow">Appointment Request</span>
              <h3 id="booking-modal-title" className="modal-title">Book a Salon Visit</h3>
              <p className="modal-desc">
                {salonInfo.name} · Open daily 10:00 AM – 9:00 PM · 1 No Gate Jessore Rd
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} noValidate className="booking-form">
              {/* Name & Phone */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="booking-name" className="form-label">Full Name *</label>
                  <input
                    ref={nameInputRef}
                    id="booking-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleNameChange}
                    className={`form-input ${errors.name ? 'has-error' : ''}`}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <span id="name-error" className="form-error-msg" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="booking-phone" className="form-label">Phone Number *</label>
                  <input
                    ref={phoneInputRef}
                    id="booking-phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    onKeyDown={handlePhoneKeyDown}
                    className={`form-input ${errors.phone ? 'has-error' : ''}`}
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <span id="phone-error" className="form-error-msg" role="alert">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* Category & Specific Service */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="booking-category" className="form-label">Service Category</label>
                  <select
                    id="booking-category"
                    name="serviceCategory"
                    value={formData.serviceCategory}
                    onChange={handleChange}
                    className="form-select"
                  >
                    {serviceCategories.map((cat) => (
                      <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                    <option value="General Consultation">General Consultation / Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="booking-service" className="form-label">Specific Treatment (Optional)</label>
                  <input
                    id="booking-service"
                    name="serviceName"
                    type="text"
                    placeholder="e.g. Precision Cut, Hair Spa, Colour"
                    value={formData.serviceName}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Date & Preferred Time */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="booking-date" className="form-label">Preferred Date</label>
                  <input
                    id="booking-date"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="booking-time" className="form-label">Preferred Time Window</label>
                  <select
                    id="booking-time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                    <option value="Evening (5:00 PM – 9:00 PM)">Evening (5:00 PM – 9:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Optional Notes */}
              <div className="form-group">
                <label htmlFor="booking-notes" className="form-label">Special Request or Hair Concern</label>
                <textarea
                  id="booking-notes"
                  name="notes"
                  rows="2"
                  placeholder="Tell us about your hair type or any questions..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="form-textarea"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="modal-actions-stack">
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="btn btn-whatsapp full-width"
                >
                  <IconWhatsApp size={18} />
                  <span>Send Request via WhatsApp (Fastest)</span>
                </button>

                <div className="modal-or-divider">
                  <span>or directly call the desk</span>
                </div>

                <a 
                  href={`tel:${salonInfo.phoneRaw}`} 
                  className="btn btn-secondary full-width"
                >
                  <IconPhone size={18} />
                  <span>Call {salonInfo.phone}</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="modal-success-state">
            <div className="success-icon-box">
              <IconCheck size={36} />
            </div>
            <h3 className="success-title">Thank You, {formData.name || 'Guest'}!</h3>
            <p className="success-desc">
              Your appointment inquiry has been received. Our salon team will confirm slot availability shortly.
            </p>

            <div className="success-summary-box">
              <p><strong>Service:</strong> {formData.serviceName || formData.serviceCategory}</p>
              <p><strong>Preferred Time:</strong> {formData.preferredDate || 'Today'} ({formData.preferredTime})</p>
              <p><strong>Location:</strong> {salonInfo.landmark}</p>
            </div>

            <div className="success-actions">
              <a 
                href={`tel:${salonInfo.phoneRaw}`} 
                className="btn btn-primary"
              >
                <IconPhone size={16} />
                <span>Call Salon Desk</span>
              </a>
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={onClose}
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
