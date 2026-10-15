import React from 'react';
import { motion } from 'motion/react';
import { Waves, Car, Wifi, UtensilsCrossed, Zap, Shield, Sparkles, Clock, Check } from 'lucide-react';
import { AMENITIES } from '../data/resortData';

export const AmenitiesSection: React.FC = () => {
  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'pool':
        return <Waves className="w-6 h-6 text-[#B8860B]" />;
      case 'car':
        return <Car className="w-6 h-6 text-[#B8860B]" />;
      case 'wifi':
        return <Wifi className="w-6 h-6 text-[#B8860B]" />;
      case 'utensils':
        return <UtensilsCrossed className="w-6 h-6 text-[#B8860B]" />;
      case 'zap':
        return <Zap className="w-6 h-6 text-[#B8860B]" />;
      case 'shield':
        return <Shield className="w-6 h-6 text-[#B8860B]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#B8860B]" />;
    }
  };

  return (
    <section id="amenities" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Signature Hospitality
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
            World-Class <span className="italic font-normal text-[#996515]">Amenities</span>
          </motion.h2>

          <p className="text-base font-sans text-neutral-600 font-light max-w-2xl mx-auto">
            Engineered with uncompromising precision to guarantee seamless weddings, royal banquets, and executive stays without disruption.
          </p>
        </div>

        {/* 6 Grid Amenity Cards with Golden Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {AMENITIES.map((amenity, idx) => (
            <motion.div
              key={amenity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white border border-neutral-200 p-7 hover:border-[#D4AF37] hover:shadow-[0_12px_32px_rgba(212,175,55,0.12)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Container with subtle golden glow */}
                <div className="w-13 h-13 rounded-none bg-[#FAF6EB] border border-[#D4AF37]/40 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-[#D4AF37] transition-all duration-300">
                  {getAmenityIcon(amenity.iconName)}
                </div>

                <div className="text-xs text-[#8B6508] font-sans font-medium uppercase tracking-wider mb-1.5">
                  {amenity.category}
                </div>

                <h3 className="font-serif text-xl font-medium text-neutral-900 group-hover:text-[#996515] transition-colors mb-2.5">
                  {amenity.name}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mb-4">
                  {amenity.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center gap-2 text-xs text-neutral-500 font-sans">
                <Check className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                <span className="font-medium text-neutral-700">{amenity.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Essential Hospitality Metrics */}
        <div className="mt-14 p-6 sm:p-8 bg-white border border-[#D4AF37]/30 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#996515] tabular-nums">100%</div>
            <div className="text-xs uppercase tracking-wider text-neutral-500 font-sans mt-1">Power Backup Guarantee</div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#996515] tabular-nums">200+</div>
            <div className="text-xs uppercase tracking-wider text-neutral-500 font-sans mt-1">Valet Parking Bays</div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#996515] tabular-nums">1,200+</div>
            <div className="text-xs uppercase tracking-wider text-neutral-500 font-sans mt-1">Combined Guest Capacity</div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#996515] tabular-nums">24 / 7</div>
            <div className="text-xs uppercase tracking-wider text-neutral-500 font-sans mt-1">Concierge & In-Room Dining</div>
          </div>
        </div>
      </div>
    </section>
  );
};
