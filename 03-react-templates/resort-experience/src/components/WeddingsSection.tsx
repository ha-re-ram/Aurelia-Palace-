import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Users, Ruler, Music, Shield, Check, Send, PhoneCall, Award, Flower2, Utensils } from 'lucide-react';
import { VENUE_SPACES, VenueSpace, RESORT_CONTACT } from '../data/resortData';
import { PalaceVisual } from './PalaceVisuals';

export const WeddingsSection: React.FC<{ onOpenInquiry: (initialData?: any) => void }> = ({
  onOpenInquiry,
}) => {
  const [selectedSpace, setSelectedSpace] = useState<string>(VENUE_SPACES[0].id);

  // Estimator State
  const [guestCount, setGuestCount] = useState<number>(450);
  const [venueChoice, setVenueChoice] = useState<'ballroom' | 'lawn' | 'combined'>('ballroom');
  const [cateringTier, setCateringTier] = useState<'royal-veg' | 'grand-feast' | 'platinum-live'>('grand-feast');
  const [decorTier, setDecorTier] = useState<'classic-elegance' | 'royal-palace' | 'custom-destination'>('royal-palace');
  const [needRoomsBlock, setNeedRoomsBlock] = useState<boolean>(true);

  // Estimator Calculations
  const cateringPerPlate = 
    cateringTier === 'royal-veg' ? 1200 :
    cateringTier === 'grand-feast' ? 1650 : 2100;

  const cateringTotal = guestCount * cateringPerPlate;

  const venueBaseFee = 
    venueChoice === 'ballroom' ? 220000 :
    venueChoice === 'lawn' ? 250000 : 420000;

  const decorBaseFee =
    decorTier === 'classic-elegance' ? 180000 :
    decorTier === 'royal-palace' ? 320000 : 550000;

  const roomsBlockFee = needRoomsBlock ? 25 * 3060 : 0; // 25 rooms block estimate

  const subtotalEstimate = cateringTotal + venueBaseFee + decorBaseFee + roomsBlockFee;
  const estimatedTax = Math.round(subtotalEstimate * 0.18);
  const grandTotal = subtotalEstimate + estimatedTax;

  const handleInquiryFromEstimator = () => {
    onOpenInquiry({
      guestCount,
      venueChoice,
      cateringTier,
      decorTier,
      needRoomsBlock,
      estimatedTotal: grandTotal,
    });
  };

  const currentSpace = VENUE_SPACES.find((s) => s.id === selectedSpace) || VENUE_SPACES[0];

  return (
    <section id="weddings" className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs uppercase font-sans tracking-[0.25em] font-semibold text-[#8B6508]">
              Destination Weddings & Grand Banquets
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
            Heritage Valley’s Premier <span className="italic font-normal text-[#996515]">Wedding Kingdom</span>
          </motion.h2>

          <p className="text-base font-sans text-neutral-600 font-light max-w-2xl mx-auto">
            From the district's only 500+ capacity pillar-less grand ballroom to lush dwarf grass celebration lawns hosting over 1,000+ elite guests—create timeless royal memories.
          </p>

          {/* Venue Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {VENUE_SPACES.map((space) => (
              <button
                key={space.id}
                onClick={() => setSelectedSpace(space.id)}
                className={`px-4 sm:px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                  selectedSpace === space.id
                    ? 'bg-[#B8860B] text-white shadow-xs'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:text-neutral-900'
                }`}
              >
                {space.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Venue Showcase */}
        <div className="bg-white border border-[#D4AF37]/35 shadow-xl p-6 sm:p-10 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Container */}
            <div className="lg:col-span-7">
              <PalaceVisual
                type={
                  currentSpace.type === 'ballroom'
                    ? 'pillarless-ballroom'
                    : currentSpace.type === 'lawn'
                    ? 'celebration-lawn'
                    : 'pillarless-ballroom'
                }
                alt={currentSpace.name}
                aspect="16:9"
                showOverlayBadge={true}
                badgeText={currentSpace.highlight}
              />
            </div>

            {/* Content & Specs */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8B6508] font-semibold">
                  {currentSpace.type === 'ballroom' ? 'Indoor Grandeur' : currentSpace.type === 'lawn' ? 'Outdoor Splendor' : 'Combined Landmark Experience'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-neutral-900 mt-1">
                  {currentSpace.name}
                </h3>
                <p className="text-xs text-neutral-500 font-sans mt-1 italic">
                  {currentSpace.tagline}
                </p>
              </div>

              {/* Capacity & Area Metrics */}
              <div className="grid grid-cols-3 gap-2 p-3.5 bg-[#FAF8F5] border border-neutral-200 text-center text-xs">
                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase font-sans">Seated</span>
                  <span className="font-serif text-base font-bold text-neutral-900 tabular-nums">
                    {currentSpace.capacitySeated}+
                  </span>
                  <span className="text-[10px] text-neutral-500 block">Guests</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase font-sans">Floating</span>
                  <span className="font-serif text-base font-bold text-neutral-900 tabular-nums">
                    {currentSpace.capacityFloating}+
                  </span>
                  <span className="text-[10px] text-neutral-500 block">Guests</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase font-sans">Spanned Area</span>
                  <span className="font-serif text-base font-bold text-[#996515] tabular-nums">
                    {currentSpace.areaSqFt.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-neutral-500 block">Sq. Feet</span>
                </div>
              </div>

              <p className="text-sm font-sans text-neutral-600 font-light leading-relaxed">
                {currentSpace.description}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-2 border-t border-neutral-100 pt-4">
                {currentSpace.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                    <Check className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenInquiry({ venueChoice: currentSpace.type })}
                  className="w-full py-3 bg-[#B8860B] hover:bg-[#996515] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm text-center"
                >
                  Inquire for {currentSpace.name}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Wedding Cost & Capacity Estimator */}
        <div className="bg-white border-2 border-[#D4AF37]/50 shadow-2xl p-6 sm:p-10">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF6EB] text-[#8B6508] text-xs font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
              Interactive Planning Calculator
            </div>
            <h3 className="text-2xl sm:text-4xl font-serif text-neutral-900 mb-3">
              Estimate Your Dream Celebration
            </h3>
            <p className="text-sm font-sans text-neutral-600 font-light">
              Customize guest count, venue arrangement, catering menu, and royal decor for an immediate transparent cost estimate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls (Col 7) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Guest Count Slider */}
              <div className="bg-[#FAF8F5] p-5 border border-neutral-200">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-sans font-semibold text-neutral-800 uppercase tracking-wider">
                    Expected Guest Count
                  </label>
                  <span className="font-serif text-xl font-bold text-[#996515] tabular-nums">
                    {guestCount} Guests
                  </span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={1200}
                  step={25}
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 accent-[#B8860B] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-neutral-400 mt-2">
                  <span>100 (Intimate)</span>
                  <span>500 (Grand)</span>
                  <span>1,200+ (Combined Palace Buyout)</span>
                </div>
              </div>

              {/* Venue Layout Selection */}
              <div>
                <label className="block text-xs font-sans font-semibold text-neutral-800 uppercase tracking-wider mb-2">
                  Venue Selection
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setVenueChoice('ballroom')}
                    className={`p-3 text-left border transition-all ${
                      venueChoice === 'ballroom'
                        ? 'border-[#B8860B] bg-[#FAF6EB]'
                        : 'border-neutral-200 bg-white hover:border-neutral-300'
                    }`}
                  >
                    <span className="font-serif font-medium text-xs text-neutral-900 block">Grand Ballroom</span>
                    <span className="text-[10px] text-neutral-500 font-sans block mt-0.5">Pillar-less (Up to 550)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setVenueChoice('lawn')}
                    className={`p-3 text-left border transition-all ${
                      venueChoice === 'lawn'
                        ? 'border-[#B8860B] bg-[#FAF6EB]'
                        : 'border-neutral-200 bg-white hover:border-neutral-300'
                    }`}
                  >
                    <span className="font-serif font-medium text-xs text-neutral-900 block">Celebration Lawn</span>
                    <span className="text-[10px] text-neutral-500 font-sans block mt-0.5">Dwarf Turf (Up to 700)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setVenueChoice('combined')}
                    className={`p-3 text-left border transition-all ${
                      venueChoice === 'combined'
                        ? 'border-[#B8860B] bg-[#FAF6EB]'
                        : 'border-neutral-200 bg-white hover:border-neutral-300'
                    }`}
                  >
                    <span className="font-serif font-medium text-xs text-neutral-900 block">Both Combined</span>
                    <span className="text-[10px] text-neutral-500 font-sans block mt-0.5">Palace (1,000+ Guests)</span>
                  </button>
                </div>
              </div>

              {/* Catering Menu Style */}
              <div>
                <label className="block text-xs font-sans font-semibold text-neutral-800 uppercase tracking-wider mb-2">
                  Catering & Banquet Menu Style
                </label>
                <div className="space-y-2">
                  {[
                    { id: 'royal-veg', name: 'Royal Vegetarian Banquet', price: '₹1,200 / plate', desc: '40+ Delicacies, Traditional Mithai, Chaat Bazaar, Awadhi & Rajasthani special counters' },
                    { id: 'grand-feast', name: 'Grand Multi-Cuisine Feast', price: '₹1,650 / plate', desc: '60+ Delicacies, Royal Non-Veg & Veg spreads, Live Barbecue, Oriental wok, Dessert boulevard' },
                    { id: 'platinum-live', name: 'Platinum Sovereign Gala', price: '₹2,100 / plate', desc: '80+ Delicacies, Artisanal international stations, Mocktail lounge, Live gourmet dessert chefs' },
                  ].map((cat) => (
                    <label
                      key={cat.id}
                      onClick={() => setCateringTier(cat.id as any)}
                      className={`flex items-start justify-between p-3 border cursor-pointer transition-all ${
                        cateringTier === cat.id
                          ? 'border-[#B8860B] bg-[#FAF6EB]'
                          : 'border-neutral-200 bg-white hover:border-neutral-300'
                      }`}
                    >
                      <div className="pr-4">
                        <div className="font-medium text-xs text-neutral-900">{cat.name}</div>
                        <div className="text-[11px] text-neutral-500 font-light mt-0.5">{cat.desc}</div>
                      </div>
                      <span className="text-xs font-serif font-bold text-[#996515] shrink-0 tabular-nums">
                        {cat.price}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Decor & Floral Setup */}
              <div>
                <label className="block text-xs font-sans font-semibold text-neutral-800 uppercase tracking-wider mb-2">
                  Mandap, Stage & Floral Concept
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'classic-elegance', name: 'Classic Elegance', cost: '₹1.80L' },
                    { id: 'royal-palace', name: 'Royal Palace Gold', cost: '₹3.20L' },
                    { id: 'custom-destination', name: 'Sovereign Theme', cost: '₹5.50L' },
                  ].map((dec) => (
                    <button
                      key={dec.id}
                      type="button"
                      onClick={() => setDecorTier(dec.id as any)}
                      className={`p-2.5 text-center border transition-all ${
                        decorTier === dec.id
                          ? 'border-[#B8860B] bg-[#FAF6EB]'
                          : 'border-neutral-200 bg-white hover:border-neutral-300'
                      }`}
                    >
                      <span className="text-xs font-medium text-neutral-900 block">{dec.name}</span>
                      <span className="text-[10px] text-[#996515] font-serif block mt-0.5">{dec.cost}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Rooms Block Toggle */}
              <div className="flex items-center justify-between p-3.5 bg-neutral-50 border border-neutral-200">
                <div>
                  <span className="text-xs font-semibold text-neutral-900 block">Include 25-Room Wedding Guest Block</span>
                  <span className="text-[11px] text-neutral-500 block">Exclusive tariff ₹3,060/night for attending family</span>
                </div>
                <input
                  type="checkbox"
                  checked={needRoomsBlock}
                  onChange={(e) => setNeedRoomsBlock(e.target.checked)}
                  className="w-4 h-4 accent-[#B8860B] cursor-pointer"
                />
              </div>
            </div>

            {/* Live Pricing Breakdown Card (Col 5) */}
            <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#D4AF37]/40 p-6 sticky top-24">
              <div className="border-b border-neutral-200 pb-4 mb-4">
                <span className="text-[11px] uppercase tracking-widest text-[#8B6508] font-semibold block">
                  Proposal Summary
                </span>
                <h4 className="font-serif text-xl text-neutral-900 mt-1">
                  Estimated Investment
                </h4>
                <p className="text-xs text-neutral-500 font-sans">
                  Based on {guestCount} guests at Aurelia Palace, Heritage Valley
                </p>
              </div>

              {/* Itemized lines */}
              <div className="space-y-3 text-xs text-neutral-700 font-sans mb-6">
                <div className="flex justify-between">
                  <span>Catering ({guestCount} × ₹{cateringPerPlate})</span>
                  <span className="font-medium text-neutral-900 tabular-nums">
                    ₹{cateringTotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Venue Booking ({venueChoice.toUpperCase()})</span>
                  <span className="font-medium text-neutral-900 tabular-nums">
                    ₹{venueBaseFee.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Mandap, Stage & Floral Decor</span>
                  <span className="font-medium text-neutral-900 tabular-nums">
                    ₹{decorBaseFee.toLocaleString()}
                  </span>
                </div>
                {needRoomsBlock && (
                  <div className="flex justify-between">
                    <span>Accommodations (25 Rooms Block)</span>
                    <span className="font-medium text-neutral-900 tabular-nums">
                      ₹{roomsBlockFee.toLocaleString()}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-neutral-500 border-t border-neutral-200 pt-2">
                  <span>Subtotal</span>
                  <span className="tabular-nums">₹{subtotalEstimate.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-neutral-500">
                  <span>Estimated Taxes & GST (18%)</span>
                  <span className="tabular-nums">₹{estimatedTax.toLocaleString()}</span>
                </div>
              </div>

              {/* Total Box */}
              <div className="p-4 bg-white border border-[#D4AF37]/50 mb-6 text-center">
                <span className="text-[11px] text-neutral-500 uppercase tracking-wider block font-sans">
                  Total Estimated Package
                </span>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#996515] mt-1 tabular-nums">
                  ₹{grandTotal.toLocaleString()}
                </div>
                <span className="text-[10px] text-neutral-400 block mt-0.5">
                  Approx. ₹{Math.round(grandTotal / guestCount).toLocaleString()} per guest
                </span>
              </div>

              {/* Actions */}
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={handleInquiryFromEstimator}
                  className="w-full py-3 bg-[#B8860B] hover:bg-[#996515] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Formal Wedding Quote</span>
                </button>
                <a
                  href={`https://wa.me/${RESORT_CONTACT.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Aurelia Palace Heritage Valley, I am planning a wedding/event for ${guestCount} guests with estimated budget ₹${grandTotal.toLocaleString()}. Please share venue availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors text-center block"
                >
                  Chat on WhatsApp Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
