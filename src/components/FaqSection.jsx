import React, { useState } from 'react';
import { faqs } from '../data/salonData';
import { IconChevronDown } from './Icons';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section section-alt faq-section" aria-labelledby="faq-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Questions & Answers</span>
          <h2 id="faq-heading" className="section-title">
            Frequently Asked Questions
          </h2>
          <p className="section-desc">
            Helpful details regarding appointments, visiting guidelines, consultations, and salon policies.
          </p>
        </div>

        <div className="faq-accordion-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon-wrapper">
                    <IconChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotate-180' : ''}`} />
                  </span>
                </button>

                {isOpen && (
                  <div 
                    id={`faq-answer-${index}`} 
                    role="region" 
                    aria-labelledby={`faq-question-${index}`}
                    className="faq-answer-panel"
                  >
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
