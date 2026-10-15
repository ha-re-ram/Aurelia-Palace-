import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, CheckCircle2, Sparkles, Send, PhoneCall } from 'lucide-react';
import { RESORT_CONTACT, VENUE_SPACES } from '../data/resortData';

interface EventInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: any;
}

export const EventInquiryModal: React.FC<EventInquiryModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [eventType, setEventType] = useState('Destination Wedding (Multi-Day)');
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState(initialData?.guestCount || 450);
  const [venuePreference, setVenuePreference] = useState(initialData?.venueChoice || 'ballroom');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialData?.guestCount) setGuestCount(initialData.guestCount);
    if (initialData?.venueChoice) setVenuePreference(initialData.venueChoice);
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
              Aurelia Palace Weddings & Banquets
            </span>
            <h3 className="text-2xl font-serif text-neutral-900 mt-0.5">
              {isSubmitted ? 'Proposal Request Received' : 'Plan a Grand Celebration'}
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
                Namaste, {contactName || 'Valued Guest'}!
              </h4>
              <p className="text-xs text-neutral-600 font-sans mt-1 max-w-md mx-auto">
                Our Senior Wedding Director will contact you within 2 hours with dates, customized layouts for the pillar-less ballroom/lawns, and tasting menus.
              </p>
            </div>

            <div className="bg-[#FAF8F5] border border-[#D4AF37]/40 p-4 text-left max-w-md mx-auto text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-500">Occasion</span>
                <span className="font-medium text-neutral-900">{eventType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Venue Choice</span>
                <span className="font-medium text-neutral-900 uppercase">{venuePreference}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Guest Count</span>
                <span className="font-medium text-neutral-900">{guestCount} Guests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Target Date</span>
                <span className="font-medium text-neutral-900">{eventDate || 'To be finalized'}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${RESORT_CONTACT.whatsappNumber}?text=${encodeURIComponent(
                  `Namaste Aurelia Palace Heritage Valley, I submitted an event proposal request for "${eventType}" on date ${eventDate || 'upcoming'} for ~${guestCount} guests. Contact person: ${contactName} (${contactPhone}). Please connect with wedding package details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-block text-center"
              >
                Send Proposal to WhatsApp
              </a>
              <button
                onClick={handleResetAndClose}
                className="px-6 py-3 border border-neutral-300 hover:border-neutral-800 text-neutral-800 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-sans font-semibold text-neutral-600 uppercase tracking-wider mb-1">
                  Occasion Type *
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-neutral-300 p-2.5 text-xs text-neutral-800 font-medium focus:border-[#B8860B] focus:outline-none"
                >
                  <option value="Destination Wedding (Multi-Day)">Destination Wedding (Multi-Day)</option>
                  <option value="Sangeet & Mehendi Celebration">Sangeet & Mehendi Celebration</option>
                  <option value="Grand Wedding Reception">Grand Wedding Reception</option>
                  <option value="Corporate Conclave / Leadership Summit">Corporate Conclave / Summit</option>
                  <option value="Silver / Golden Anniversary Jubilee">Silver / Golden Jubilee</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans font-semibold text-neutral-600 uppercase tracking-wider mb-1">
                  Preferred Event Date
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-neutral-300 p-2.5 text-xs text-neutral-800 font-medium focus:border-[#B8860B] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-sans font-semibold text-neutral-600 uppercase tracking-wider mb-1">
                  Expected Guests *
                </label>
                <input
                  type="number"
                  required
                  min={50}
                  max={2000}
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full bg-[#FAF9F5] border border-neutral-300 p-2.5 text-xs text-neutral-800 font-medium focus:border-[#B8860B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans font-semibold text-neutral-600 uppercase tracking-wider mb-1">
                  Preferred Venue Space
                </label>
                <select
                  value={venuePreference}
                  onChange={(e) => setVenuePreference(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-neutral-300 p-2.5 text-xs text-neutral-800 font-medium focus:border-[#B8860B] focus:outline-none"
                >
                  <option value="ballroom">Grand Pillar-less Ballroom (500+ Capacity)</option>
                  <option value="lawn">Celebration Lawns (Dwarf Turf 700+ Capacity)</option>
                  <option value="combined">Combined Palace Experience (1,000+ Capacity)</option>
                </select>
              </div>
            </div>

            {/* Organizer Contact Details */}
            <div className="pt-2 border-t border-neutral-100">
              <span className="text-xs uppercase font-sans font-semibold text-[#8B6508] tracking-wider block mb-3">
                Host / Organizer Details
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-[11px] text-neutral-500 font-sans mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alok Verma"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-[#FAF9F5] border border-neutral-300 p-2.5 text-xs text-neutral-800 focus:border-[#B8860B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-neutral-500 font-sans mb-1">Phone Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +1 (555) 789-2345"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full bg-[#FAF9F5] border border-neutral-300 p-2.5 text-xs text-neutral-800 focus:border-[#B8860B] focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="block text-[11px] text-neutral-500 font-sans mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. alok.verma@example.com"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-neutral-300 p-2.5 text-xs text-neutral-800 focus:border-[#B8860B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] text-neutral-500 font-sans mb-1">Additional Requirements / Special Notes</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Need 40 guest rooms block, Marwari pure veg menu requirements, wedding decorator visit"
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-neutral-300 p-2.5 text-xs text-neutral-800 focus:border-[#B8860B] focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#B8860B] hover:bg-[#996515] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Event Inquiry & Get Quotation</span>
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};
