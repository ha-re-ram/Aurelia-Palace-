import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AccommodationSection } from './components/AccommodationSection';
import { WeddingsSection } from './components/WeddingsSection';
import { InfinityPoolSection } from './components/InfinityPoolSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { EventInquiryModal } from './components/EventInquiryModal';
import { QuickInfoBar } from './components/QuickInfoBar';
import { Room } from './data/resortData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isEventInquiryOpen, setIsEventInquiryOpen] = useState(false);

  // State to pass from Hero or Room cards into Booking modal
  const [bookingPrefill, setBookingPrefill] = useState<{
    roomId?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: number;
  }>({});

  // State to pass into Event inquiry modal from Wedding estimator
  const [eventInquiryPrefill, setEventInquiryPrefill] = useState<any>(null);

  const handleOpenBooking = () => {
    setBookingPrefill({});
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithDetails = (details: {
    checkIn: string;
    checkOut: string;
    roomId: string;
    guests: number;
  }) => {
    setBookingPrefill(details);
    setIsBookingOpen(true);
  };

  const handleSelectRoomForBooking = (room: Room) => {
    setBookingPrefill({
      roomId: room.id,
      guests: room.maxGuests,
    });
    setIsBookingOpen(true);
  };

  const handleOpenEventInquiry = (initialData?: any) => {
    setEventInquiryPrefill(initialData || null);
    setIsEventInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#D4AF37]/20 selection:text-[#996515]">
      {/* Top 3-Zone Navigation */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenEventInquiry={() => handleOpenEventInquiry()}
      />

      <main>
        {/* Hero Section */}
        <HeroSection
          onOpenBookingWithDetails={handleOpenBookingWithDetails}
          onOpenEventInquiry={() => handleOpenEventInquiry()}
        />

        {/* The Experience & Pillar-less Ballroom Architecture */}
        <AboutSection
          onPlanEvent={() => handleOpenEventInquiry({ venueChoice: 'ballroom' })}
        />

        {/* Accommodations (Stay) */}
        <AccommodationSection
          onSelectRoomForBooking={handleSelectRoomForBooking}
        />

        {/* Grand Events & Weddings */}
        <WeddingsSection
          onOpenInquiry={handleOpenEventInquiry}
        />

        {/* Sunset Infinity Pool & Leisure */}
        <InfinityPoolSection
          onBookStay={handleOpenBooking}
        />

        {/* World-Class Amenities */}
        <AmenitiesSection />

        {/* Visual Gallery */}
        <GallerySection />

        {/* Client & Wedding Testimonials */}
        <TestimonialsSection />

        {/* Location, Transit & FAQs */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenEventInquiry={() => handleOpenEventInquiry()}
      />

      {/* Floating Quick Info & Action Bar */}
      <QuickInfoBar
        onOpenBooking={handleOpenBooking}
        onOpenEventInquiry={() => handleOpenEventInquiry()}
      />

      {/* Interactive Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialRoomId={bookingPrefill.roomId}
        initialCheckIn={bookingPrefill.checkIn}
        initialCheckOut={bookingPrefill.checkOut}
        initialGuests={bookingPrefill.guests}
      />

      {/* Interactive Wedding & Event Inquiry Modal */}
      <EventInquiryModal
        isOpen={isEventInquiryOpen}
        onClose={() => setIsEventInquiryOpen(false)}
        initialData={eventInquiryPrefill}
      />
    </div>
  );
}
