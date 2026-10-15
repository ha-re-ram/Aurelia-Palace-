import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sun, Clock, Waves, Compass, Coffee } from 'lucide-react';
import { PalaceVisual } from './PalaceVisuals';

export const InfinityPoolSection: React.FC<{ onBookStay: () => void }> = ({ onBookStay }) => {
  return (
    <section id="infinity-pool" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Showcase (Col 7) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="relative border border-[#D4AF37]/40 shadow-2xl bg-neutral-950 overflow-hidden">
              <PalaceVisual
                type="infinity-pool"
                alt="Aurelia Palace Sunset Infinity Pool"
                aspect="16:9"
                showOverlayBadge={true}
                badgeText="Sunset View · 4,000 Sq.Ft Deck"
              />
              <div className="p-4 bg-white border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-600 font-sans">
                <span className="flex items-center gap-1.5">
                  <Sun className="w-4 h-4 text-[#B8860B]" />
                  <span>Golden Hour Sunset Panorama</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#B8860B]" />
                  <span>Pool Hours: 6:00 AM – 9:00 PM</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Copy and Details (Col 5) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[1px] bg-[#D4AF37]" />
                <span className="text-xs uppercase font-sans tracking-[0.25em] font-semibold text-[#8B6508]">
                  Oasis of Serenity
                </span>
                <span className="w-6 h-[1px] bg-[#D4AF37]" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-light text-neutral-900 tracking-tight leading-tight">
                The Sunset <br />
                <span className="italic font-normal text-[#996515]">Infinity Pool</span>
              </h2>

              <p className="text-sm sm:text-base font-sans text-neutral-600 font-light leading-relaxed mt-4">
                Perched overlooking manicured grounds with an edge that blends into the twilight sky. Whether you are swimming morning laps or sipping mocktails at dusk during a wedding weekend, our infinity pool offers a sanctuary of calm in Royal Heritage Valley.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FAF0D7] flex items-center justify-center shrink-0 mt-0.5 text-[#B8860B]">
                  <Waves className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">Temperature Moderated Azure Waters</h4>
                  <p className="text-xs text-neutral-600 font-light">Crystal filtration ensuring pristine, hygienic swimming conditions year-round.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FAF0D7] flex items-center justify-center shrink-0 mt-0.5 text-[#B8860B]">
                  <Coffee className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">Teakwood Sundeck & Private Cabanas</h4>
                  <p className="text-xs text-neutral-600 font-light">Dedicated poolside loungers with fresh towels, signature mocktails, and finger bites.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FAF0D7] flex items-center justify-center shrink-0 mt-0.5 text-[#B8860B]">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">Twilight Underwater Illumination</h4>
                  <p className="text-xs text-neutral-600 font-light">Subtle fiber-optic underwater lighting creating an ethereal golden ambiance for evening receptions.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookStay}
                className="px-6 py-3 bg-[#B8860B] hover:bg-[#996515] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                Experience the Pool · Book Your Stay
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
