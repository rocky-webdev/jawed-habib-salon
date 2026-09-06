import React, { useState } from 'react';
import './App.css';

// Components
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationContactSection } from './components/LocationContactSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileQuickBar } from './components/MobileQuickBar';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState('');
  const [bookingCategory, setBookingCategory] = useState('');

  const handleOpenBooking = (service = '', category = '') => {
    setBookingService(service);
    setBookingCategory(category);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingService('');
    setBookingCategory('');
  };

  return (
    <div className="salon-app-root">
      {/* 1. Announcement Ribbon */}
      <AnnouncementBar />

      {/* 2. Sticky Navbar with Mobile Menu */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Landmark */}
      <main id="main-content">
        {/* 3. Editorial Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Trust Highlights & Google Verification */}
        <TrustSection />

        {/* 5. Categorized Services with Instant Inquire Trigger */}
        <ServicesSection onSelectService={handleOpenBooking} />

        {/* 6. Why Choose Us (Genuine Non-Exaggerated Benefits) */}
        <WhyChooseUs />

        {/* 7. About Salon & Standards */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* 8. Responsive Gallery with Lightbox */}
        <GallerySection />

        {/* 9. Google Reviews Showcase */}
        <ReviewsSection />

        {/* 10. Location, Timings & Google Maps Embed */}
        <LocationContactSection onOpenBooking={() => handleOpenBooking()} />

        {/* 11. Frequently Asked Questions */}
        <FaqSection />

        {/* 12. Final Call to Action */}
        <CtaBanner onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 13. Comprehensive Site Footer */}
      <Footer />

      {/* 14. Mobile Persistent Quick Action Bar */}
      <MobileQuickBar onOpenBooking={() => handleOpenBooking()} />

      {/* 15. Interactive Appointment Booking Modal */}
      {isBookingOpen && (
        <BookingModal
          key={`${bookingService}-${bookingCategory}`}
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          initialService={bookingService}
          initialCategory={bookingCategory}
        />
      )}
    </div>
  );
}

export default App;
