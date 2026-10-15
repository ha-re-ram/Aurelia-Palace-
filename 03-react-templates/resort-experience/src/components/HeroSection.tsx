import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, BedDouble, ArrowRight, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { RESORT_CONTACT, ROOMS } from '../data/resortData';
import { PalaceVisual } from './PalaceVisuals';

interface HeroSectionProps {
  onOpenBookingWithDetails: (details: { checkIn: string; checkOut: string; roomId: string; guests: number }) => void;
  onOpenEventInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBookingWithDetails,
  onOpenEventInquiry,
}) => {
  // Quick booking state
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [selectedRoomId, setSelectedRoomId] = useState(ROOMS[0].id);
  const [guestCount, setGuestCount] = useState(2);

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingWithDetails({
      checkIn,
      checkOut,
      roomId: selectedRoomId,
      guests: guestCount,
    });
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white overflow-hidden">
      {/* Subtle luxury ambient pattern in background */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Text with Luxury 80:20 discipline */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold text-[#B8860B]">
              A Statement Landmark in Royal Heritage Valley
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-neutral-900 tracking-tight leading-[1.1] mb-6 text-balance"
          >
            Where Luxury Meets <span className="font-serif italic font-normal text-[#996515]">Legacy.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl font-sans text-neutral-600 font-light max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Heritage Valley’s premier wedding destination and luxury retreat. Home to Heritage Valley's iconic
            pillar-less grand ballroom, sunset infinity pool, and pristine celebration lawns.
          </motion.p>

          {/* Primary CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 text-sm font-sans font-semibold"
          >
            <button
              onClick={() => {
                onOpenBookingWithDetails({
                  checkIn,
                  checkOut,
                  roomId: selectedRoomId,
                  guests: guestCount,
                });
              }}
              className="px-7 py-3.5 bg-[#B8860B] hover:bg-[#996515] text-white shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 shrink-0"
            >
              <span>Book Your Stay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenEventInquiry}
              className="px-7 py-3.5 border-2 border-[#D4AF37] text-[#8B6508] hover:bg-[#FAF6EB] transition-all duration-200 shrink-0"
            >
              Plan an Event or Wedding
            </button>
          </motion.div>
        </div>

        {/* Featured Showcase Visual Container with Slow Zoom & Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative max-w-6xl mx-auto rounded-none overflow-hidden shadow-2xl border border-neutral-200 bg-neutral-950 mb-8"
        >
          <PalaceVisual
            type="hero-facade"
            alt="Aurelia Palace Luxury Resort Heritage Valley"
            aspect="16:9"
            showOverlayBadge={true}
            badgeText="NH 32 · Heritage District, Royal Heritage Valley"
          />

          {/* Golden Frame Border Inset */}
          <div className="absolute inset-4 md:inset-6 border border-[#D4AF37]/35 pointer-events-none" />

          {/* Floating Key Highlights Bar inside image bottom */}
          <div className="absolute bottom-6 left-6 right-6 hidden md:flex items-center justify-between text-xs text-white/90 bg-black/60 backdrop-blur-md px-6 py-3 border border-white/10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E6CA65]" />
              <span className="font-sans">District's Only Pillar-less Ballroom (500+ Capacity)</span>
            </div>
            <div className="h-4 w-[1px] bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-[#E6CA65]">🏊</span>
              <span className="font-sans">Sunset Infinity Pool</span>
            </div>
            <div className="h-4 w-[1px] bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-[#E6CA65]">⛳</span>
              <span className="font-sans">Lush Dwarf Grass Lawns (1,000+ Guests)</span>
            </div>
            <div className="h-4 w-[1px] bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="font-serif text-[#E6CA65]">From ₹3,060</span>
              <span className="text-white/60">/night</span>
            </div>
          </div>
        </motion.div>

        {/* Interactive Quick Booking & Reservation Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-5xl mx-auto bg-white border border-[#D4AF37]/40 shadow-xl p-5 md:p-6 relative -mt-6 sm:-mt-12 z-20"
        >
          <div className="text-xs uppercase tracking-wider font-semibold text-[#8B6508] mb-3 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#B8860B]" />
              Direct Palace Reservation Desk
            </span>
            <span className="text-neutral-500 font-normal lowercase tracking-normal">
              Check-in 12:00 PM · Check-out 10:00 AM
            </span>
          </div>

          <form onSubmit={handleQuickBook} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
            {/* Check-in */}
            <div>
              <label className="block text-[11px] font-sans font-medium text-neutral-500 uppercase tracking-wider mb-1">
                Check-In Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={checkIn}
                  min={today}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-neutral-300 px-3 py-2.5 text-xs text-neutral-800 font-medium focus:outline-none focus:border-[#B8860B]"
                />
              </div>
            </div>

            {/* Check-out */}
            <div>
              <label className="block text-[11px] font-sans font-medium text-neutral-500 uppercase tracking-wider mb-1">
                Check-Out Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn || today}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-neutral-300 px-3 py-2.5 text-xs text-neutral-800 font-medium focus:outline-none focus:border-[#B8860B]"
                />
              </div>
            </div>

            {/* Room Category */}
            <div>
              <label className="block text-[11px] font-sans font-medium text-neutral-500 uppercase tracking-wider mb-1">
                Room Category
              </label>
              <div className="relative">
                <select
                  value={selectedRoomId}
                  onChange={(e) => setSelectedRoomId(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-neutral-300 px-3 py-2.5 text-xs text-neutral-800 font-medium focus:outline-none focus:border-[#B8860B] appearance-none"
                >
                  {ROOMS.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} (₹{room.pricePerNight})
                    </option>
                  ))}
                </select>
                <BedDouble className="w-3.5 h-3.5 text-neutral-400 absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="block text-[11px] font-sans font-medium text-neutral-500 uppercase tracking-wider mb-1">
                Guests
              </label>
              <div className="relative">
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full bg-[#FAF9F5] border border-neutral-300 px-3 py-2.5 text-xs text-neutral-800 font-medium focus:outline-none focus:border-[#B8860B] appearance-none"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests (Family)</option>
                </select>
                <Users className="w-3.5 h-3.5 text-neutral-400 absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2.5 bg-[#B8860B] hover:bg-[#996515] text-white text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Reserve Room</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          {/* Quick trust strip */}
          <div className="mt-3.5 pt-3 border-t border-neutral-100 flex flex-wrap items-center justify-between text-[11px] text-neutral-500 gap-2">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B8860B]" />
              Guaranteed Best Tariff & No Booking Intermediary Surcharges
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
              {RESORT_CONTACT.landmark}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
