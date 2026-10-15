import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Navigation, ChevronDown, ChevronUp, Compass, Car, Train, Plane } from 'lucide-react';
import { RESORT_CONTACT, FAQS } from '../data/resortData';

export const LocationSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="location" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs uppercase font-sans tracking-[0.25em] font-semibold text-[#8B6508]">
              Location & Access
            </span>
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-light text-neutral-900 tracking-tight leading-tight mb-4">
            Visiting <span className="italic font-normal text-[#996515]">Aurelia Palace</span>
          </h2>

          <p className="text-base font-sans text-neutral-600 font-light max-w-2xl mx-auto">
            Conveniently positioned on National Highway 32 with dedicated parking and rapid connectivity across Heritage Valley, Heritage District, Dhanbad, and Ranchi.
          </p>
        </div>

        {/* 2-Column Grid: Location & Contact Card + FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
          {/* Location & Contact Information (Col 5) */}
          <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#D4AF37]/40 p-8 shadow-md">
            <span className="text-xs uppercase tracking-widest text-[#8B6508] font-semibold block mb-2">
              Direct Contact & Timings
            </span>
            <h3 className="font-serif text-2xl text-neutral-900 mb-6">
              Palace Reception Desk
            </h3>

            <div className="space-y-4 text-sm font-sans text-neutral-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-900 block">Address</span>
                  <p className="text-neutral-600 font-light text-xs sm:text-sm mt-0.5">
                    {RESORT_CONTACT.address}, {RESORT_CONTACT.city}, {RESORT_CONTACT.state} - {RESORT_CONTACT.pincode}
                  </p>
                  <span className="inline-block mt-1 text-xs text-[#8B6508] font-medium bg-[#FAF0D7] px-2 py-0.5">
                    Landmark: {RESORT_CONTACT.landmark}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-neutral-200/60 pt-4">
                <Clock className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-900 block">Check-in / Check-out</span>
                  <p className="text-neutral-600 font-light text-xs sm:text-sm mt-0.5">
                    Check-in: <strong className="text-neutral-800">{RESORT_CONTACT.checkIn}</strong> · Check-out: <strong className="text-neutral-800">{RESORT_CONTACT.checkOut}</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-neutral-200/60 pt-4">
                <Phone className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-900 block">Direct Reservations & Events</span>
                  <a
                    href={`tel:${RESORT_CONTACT.phone}`}
                    className="text-[#996515] font-semibold text-base block hover:underline mt-0.5"
                  >
                    {RESORT_CONTACT.displayPhone}
                  </a>
                  <span className="text-[11px] text-neutral-500">24/7 Concierge Hotline</span>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-neutral-200/60 pt-4">
                <Mail className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-900 block">Email Inquiries</span>
                  <a
                    href={`mailto:${RESORT_CONTACT.email}`}
                    className="text-neutral-600 font-light text-xs hover:text-[#996515] block mt-0.5"
                  >
                    {RESORT_CONTACT.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Travel Transit Distances */}
            <div className="mt-6 pt-5 border-t border-neutral-200">
              <h4 className="text-xs uppercase font-semibold text-neutral-800 mb-3 tracking-wider">
                Transit Proximity
              </h4>
              <div className="space-y-2 text-xs text-neutral-600 font-sans">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Train className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>Royal Heritage Valley Station</span>
                  </span>
                  <span className="font-medium text-neutral-900">~10 Mins (6 km)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>Dhanbad Junction</span>
                  </span>
                  <span className="font-medium text-neutral-900">~35 Mins (32 km)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Plane className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>Ranchi Birsa Munda Airport</span>
                  </span>
                  <span className="font-medium text-neutral-900">~2 Hours (115 km)</span>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Navigation Button */}
            <div className="mt-6">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  'Aurelia Palace NH 32 Heritage District Heritage Valley Heritage Valley'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#B8860B] hover:bg-[#996515] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Frequently Asked Questions (Col 7) */}
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest text-[#8B6508] font-semibold block mb-2">
              Guest Inquiries
            </span>
            <h3 className="font-serif text-2xl text-neutral-900 mb-6">
              Frequently Asked Questions
            </h3>

            <div className="space-y-3.5">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-neutral-200 bg-white overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif text-base text-neutral-900 hover:text-[#996515] transition-colors"
                  >
                    <span className="font-medium">{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-4 h-4 text-[#B8860B] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                    )}
                  </button>

                  {openFaq === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="px-4 sm:px-5 pb-5 text-xs sm:text-sm font-sans text-neutral-600 font-light leading-relaxed border-t border-neutral-100 pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
