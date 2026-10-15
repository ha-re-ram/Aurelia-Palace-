import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BedDouble, Users, Maximize, ArrowRight, Check, Sparkles, Coffee, Wifi, Tv } from 'lucide-react';
import { ROOMS, Room, RESORT_CONTACT } from '../data/resortData';
import { PalaceVisual } from './PalaceVisuals';

interface AccommodationSectionProps {
  onSelectRoomForBooking: (room: Room) => void;
}

export const AccommodationSection: React.FC<AccommodationSectionProps> = ({
  onSelectRoomForBooking,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'garden' | 'executive'>('all');
  const [activeModalRoom, setActiveModalRoom] = useState<Room | null>(null);

  const filteredRooms = ROOMS.filter((room) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'garden') return room.id.includes('garden');
    if (selectedFilter === 'executive') return room.id.includes('executive');
    return true;
  });

  return (
    <section id="accommodations" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs uppercase font-sans tracking-[0.25em] font-semibold text-[#8B6508]">
              Sanctuary of Comfort
            </span>
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-serif font-light text-neutral-900 tracking-tight leading-tight mb-4"
          >
            Luxury Stays in <span className="italic font-normal text-[#996515]">Heritage Valley</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block py-1.5 px-4 bg-[#FAF6EB] border border-[#D4AF37]/40 mb-6"
          >
            <p className="text-sm font-sans font-medium text-[#8B6508]">
              Royal Accommodations starting from{' '}
              <span className="font-serif font-bold text-base text-[#996515] tabular-nums">
                ₹{RESORT_CONTACT.startingPrice.toLocaleString()}
              </span>
              <span className="text-xs text-neutral-500 font-normal"> / night</span>
            </p>
          </motion.div>

          <p className="text-base font-sans text-neutral-600 font-light max-w-2xl mx-auto">
            Thoughtfully tailored for wedding entourages, corporate dignitaries, and vacationing families with 24/7 in-room dining, plush bedding, and garden terraces.
          </p>

          {/* Interactive Category Filter Buttons */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all ${
                selectedFilter === 'all'
                  ? 'bg-[#B8860B] text-white shadow-xs'
                  : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900'
              }`}
            >
              All Rooms ({ROOMS.length})
            </button>
            <button
              onClick={() => setSelectedFilter('garden')}
              className={`px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all ${
                selectedFilter === 'garden'
                  ? 'bg-[#B8860B] text-white shadow-xs'
                  : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Garden Views
            </button>
            <button
              onClick={() => setSelectedFilter('executive')}
              className={`px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all ${
                selectedFilter === 'executive'
                  ? 'bg-[#B8860B] text-white shadow-xs'
                  : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Executive Suites
            </button>
          </div>
        </div>

        {/* Room Cards Grid with "Hover-Glow" Golden Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {filteredRooms.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-white border border-neutral-200 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(212,175,55,0.18)] flex flex-col overflow-hidden"
            >
              {/* Card Visual with Vector Scene */}
              <div className="relative overflow-hidden bg-neutral-900">
                <PalaceVisual
                  type={room.id.includes('twin') ? 'twin-room' : 'deluxe-room'}
                  alt={room.name}
                  aspect="4:3"
                />

                {/* Price Tag in Card */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs px-3 py-1 border border-[#D4AF37]/50 shadow-xs">
                  <span className="text-[11px] text-neutral-500 font-sans">From </span>
                  <span className="font-serif font-bold text-sm text-[#996515] tabular-nums">
                    ₹{room.pricePerNight.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-neutral-500 font-sans"> / night</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 font-sans mb-1.5">
                    <span>{room.sizeSqFt} sq.ft</span>
                    <span aria-hidden="true">·</span>
                    <span>{room.view}</span>
                  </div>

                  <h3 className="font-serif text-lg font-medium text-neutral-900 group-hover:text-[#996515] transition-colors mb-2">
                    {room.name}
                  </h3>

                  <p className="text-xs text-neutral-600 font-light leading-relaxed mb-4 line-clamp-2">
                    {room.subtitle}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 text-xs text-neutral-600 border-t border-neutral-100 pt-3 mb-4">
                    <div className="flex items-center gap-1.5">
                      <BedDouble className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                      <span className="truncate">{room.bedType}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                      <span>Up to {room.maxGuests} Guests</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-100">
                  <button
                    onClick={() => setActiveModalRoom(room)}
                    className="py-2 text-xs font-semibold text-neutral-700 hover:text-[#8B6508] border border-neutral-200 hover:border-[#D4AF37] transition-colors text-center"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onSelectRoomForBooking(room)}
                    className="py-2 text-xs font-semibold text-white bg-[#B8860B] hover:bg-[#996515] transition-colors text-center flex items-center justify-center gap-1 shadow-xs"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Room Detail Modal */}
        <AnimatePresence>
          {activeModalRoom && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
              onClick={() => setActiveModalRoom(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white max-w-2xl w-full border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#8B6508] font-semibold">
                      Aurelia Palace Accommodations
                    </span>
                    <h3 className="text-2xl font-serif text-neutral-900 mt-1">
                      {activeModalRoom.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveModalRoom(null)}
                    className="text-neutral-400 hover:text-neutral-800 text-xl font-light p-1"
                  >
                    ✕
                  </button>
                </div>

                <div className="border border-neutral-200 mb-5 overflow-hidden">
                  <PalaceVisual
                    type={activeModalRoom.id.includes('twin') ? 'twin-room' : 'deluxe-room'}
                    alt={activeModalRoom.name}
                    aspect="16:9"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3 p-3 bg-[#FAF8F5] border border-neutral-200 text-center mb-5 text-xs">
                  <div>
                    <span className="text-neutral-400 block uppercase text-[10px]">Room Size</span>
                    <span className="font-semibold text-neutral-800">{activeModalRoom.sizeSqFt} sq.ft</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block uppercase text-[10px]">Bed Type</span>
                    <span className="font-semibold text-neutral-800">{activeModalRoom.bedType}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block uppercase text-[10px]">Tariff</span>
                    <span className="font-semibold text-[#996515] font-serif text-sm">
                      ₹{activeModalRoom.pricePerNight.toLocaleString()} / night
                    </span>
                  </div>
                </div>

                <p className="text-sm font-sans text-neutral-600 font-light leading-relaxed mb-5">
                  {activeModalRoom.description}
                </p>

                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-2">
                  Complimentary Amenities & Inclusions
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-neutral-700 mb-6">
                  {activeModalRoom.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                  <div className="text-xs text-neutral-500">
                    Check-in: 12:00 PM · Check-out: 10:00 AM
                  </div>
                  <button
                    onClick={() => {
                      const r = activeModalRoom;
                      setActiveModalRoom(null);
                      onSelectRoomForBooking(r);
                    }}
                    className="px-6 py-2.5 bg-[#B8860B] hover:bg-[#996515] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Reserve This Suite
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
