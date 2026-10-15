import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Calendar, Users, BedDouble, ShieldCheck, Phone, ArrowRight } from 'lucide-react';
import { ROOMS, Room, RESORT_CONTACT } from '../data/resortData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoomId,
  initialCheckIn,
  initialCheckOut,
  initialGuests,
}) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [roomId, setRoomId] = useState(initialRoomId || ROOMS[0].id);
  const [checkIn, setCheckIn] = useState(initialCheckIn || today);
  const [checkOut, setCheckOut] = useState(initialCheckOut || tomorrow);
  const [guestCount, setGuestCount] = useState(initialGuests || 2);
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (initialRoomId) setRoomId(initialRoomId);
    if (initialCheckIn) setCheckIn(initialCheckIn);
    if (initialCheckOut) setCheckOut(initialCheckOut);
    if (initialGuests) setGuestCount(initialGuests);
  }, [initialRoomId, initialCheckIn, initialCheckOut, initialGuests]);

  if (!isOpen) return null;

  const selectedRoom = ROOMS.find((r) => r.id === roomId) || ROOMS[0];

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.max(1, Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24)));
  const nights = isNaN(diffTime) || diffTime <= 0 ? 1 : diffTime;

  const roomSubtotal = selectedRoom.pricePerNight * nights;
  const taxes = Math.round(roomSubtotal * 0.12); // 12% hotel tax
  const totalAmount = roomSubtotal + taxes;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `TP-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    setBookingRef(refCode);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={handleResetAndClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white max-w-2xl w-full border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
      >
        <div className="flex justify-between items-start mb-5 border-b border-neutral-100 pb-3">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#8B6508] font-semibold block">
              Aurelia Palace Heritage Valley
            </span>
            <h3 className="text-2xl font-serif text-neutral-900 mt-0.5">
              {isSubmitted ? 'Reservation Confirmed' : 'Reserve Your Stay'}
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="text-neutral-400 hover:text-neutral-800 p-1"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-[#FAF0D7] rounded-full flex items-center justify-center mx-auto text-[#B8860B]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h4 className="font-serif text-2xl text-neutral-900">
                Thank You, {guestName || 'Guest'}!
              </h4>
              <p className="text-xs text-neutral-500 font-sans mt-1">
                Your luxury reservation request has been dispatched to our 24/7 reception desk.
              </p>
            </div>

            {/* Confirmation Box */}
            <div className="bg-[#FAF8F5] border border-[#D4AF37]/40 p-4 text-left max-w-md mx-auto text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-500">Booking Reference</span>
                <span className="font-serif font-bold text-[#996515]">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Suite</span>
                <span className="font-medium text-neutral-900">{selectedRoom.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Dates</span>
                <span className="font-medium text-neutral-900">{checkIn} to {checkOut} ({nights} {nights === 1 ? 'Night' : 'Nights'})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Guests</span>
                <span className="font-medium text-neutral-900">{guestCount} Guests</span>
              </div>
              <div className="flex justify-between border-t border-neutral-200 pt-2 font-medium">
                <span>Estimated Total (incl. GST)</span>
                <span className="font-serif text-[#996515]">₹{totalAmount.toLocaleString()}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${RESORT_CONTACT.whatsappNumber}?text=${encodeURIComponent(
                  `Namaste Aurelia Palace, I have created reservation reference ${bookingRef} for ${selectedRoom.name} (${checkIn} to ${checkOut}) for ${guestName} (${guestPhone}). Kindly confirm room availability.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-block text-center"
              >
                Send Confirmation via WhatsApp
              </a>
              <button
                onClick={handleResetAndClose}
                className="px-6 py-3 border border-neutral-300 hover:border-neutral-800 text-neutral-800 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Room selection & Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-sans font-semibold text-neutral-600 uppercase tracking-wider mb-1">
                  Selected Accommodation
                </label>
                <select
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-neutral-300 p-2.5 text-xs text-neutral-800 font-medium focus:border-[#B8860B] focus:outline-none"
                >
                  {ROOMS.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name} — ₹{r.pricePerNight}/night
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans font-semibold text-neutral-600 uppercase tracking-wider mb-1">
                  Guests
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full bg-[#FAF9F5] border border-neutral-300 p-2.5 text-xs text-neutral-800 font-medium focus:border-[#B8860B] focus:outline-none"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests (Family Room)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-sans font-semibold text-neutral-600 uppercase tracking-wider mb-1">
                  Check-In (12:00 PM)
                </label>
                <input
                  type="date"
                  required
                  min={today}
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-neutral-300 p-2.5 text-xs text-neutral-800 font-medium focus:border-[#B8860B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans font-semibold text-neutral-600 uppercase tracking-wider mb-1">
                  Check-Out (10:00 AM)
                </label>
                <input
                  type="date"
                  required
                  min={checkIn || today}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-neutral-300 p-2.5 text-xs text-neutral-800 font-medium focus:border-[#B8860B] focus:outline-none"
                />
              </div>
            </div>

            {/* Guest Contact Details */}
            <div className="pt-2 border-t border-neutral-100">
              <span className="text-xs uppercase font-sans font-semibold text-[#8B6508] tracking-wider block mb-3">
                Guest Information
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-[11px] text-neutral-500 font-sans mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Chandra"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-[#FAF9F5] border border-neutral-300 p-2.5 text-xs text-neutral-800 focus:border-[#B8860B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-neutral-500 font-sans mb-1">Mobile Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98351 XXXXX"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full bg-[#FAF9F5] border border-neutral-300 p-2.5 text-xs text-neutral-800 focus:border-[#B8860B] focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="block text-[11px] text-neutral-500 font-sans mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. ramesh@example.com"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-neutral-300 p-2.5 text-xs text-neutral-800 focus:border-[#B8860B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] text-neutral-500 font-sans mb-1">Special Preferences / Requests</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Wedding entourage guest, early check-in request, extra pillows"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-neutral-300 p-2.5 text-xs text-neutral-800 focus:border-[#B8860B] focus:outline-none"
                />
              </div>
            </div>

            {/* Price Calculation Box */}
            <div className="p-3.5 bg-[#FAF8F5] border border-[#D4AF37]/35 text-xs space-y-1.5 font-sans">
              <div className="flex justify-between text-neutral-600">
                <span>{selectedRoom.name} (₹{selectedRoom.pricePerNight} × {nights} {nights === 1 ? 'night' : 'nights'})</span>
                <span className="font-medium text-neutral-900 tabular-nums">₹{roomSubtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Taxes & Service (12% GST)</span>
                <span className="font-medium text-neutral-900 tabular-nums">₹{taxes.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-neutral-900 font-semibold border-t border-neutral-200 pt-1.5 text-sm">
                <span>Total Payable at Desk</span>
                <span className="font-serif text-[#996515] tabular-nums">₹{totalAmount.toLocaleString()}</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#B8860B] hover:bg-[#996515] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <span>Confirm Direct Reservation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <p className="text-[11px] text-neutral-400 text-center font-sans">
              Zero cancellation charges up to 24 hours prior to check-in. Payment can be settled on arrival.
            </p>
          </form>
        )}
      </motion.div>
    </div>
  );
};
