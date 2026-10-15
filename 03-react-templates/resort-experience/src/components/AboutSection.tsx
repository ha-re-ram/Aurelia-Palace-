import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Eye, Award, Sparkles, Building2, Flame } from 'lucide-react';
import { PalaceVisual } from './PalaceVisuals';

export const AboutSection: React.FC<{ onPlanEvent: () => void }> = ({ onPlanEvent }) => {
  const [comparisonMode, setComparisonMode] = useState<'Aurelia' | 'traditional'>('Aurelia');

  return (
    <section id="ballroom" className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background soft gold accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

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
              The Aurelia Experience
            </span>
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-serif font-light text-neutral-900 tracking-tight leading-tight mb-5"
          >
            A Statement Landmark of <br />
            <span className="italic font-normal text-[#996515]">Metropolitan Hospitality</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg font-sans text-neutral-600 leading-relaxed font-light"
          >
            Experience the pinnacle of hospitality at Aurelia Palace, home to the district's only
            pillar-less grand ballroom. Conceived to bring global metropolitan opulence and bespoke
            wedding craftsmanship to Heritage Valley.
          </motion.p>
        </div>

        {/* Feature Spotlight: 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
          {/* Visual Carrier */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="relative border border-[#D4AF37]/40 shadow-xl bg-neutral-900 overflow-hidden">
              <PalaceVisual
                type="pillarless-ballroom"
                alt="Aurelia Palace Grand Pillar-less Ballroom"
                aspect="16:9"
                showOverlayBadge={true}
                badgeText="Zero Structural Pillars · 7,500 Sq.Ft"
              />
              <div className="p-5 bg-white border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg font-medium text-neutral-900">
                    The Grand Pillar-less Ballroom
                  </h4>
                  <p className="text-xs text-neutral-500 font-sans mt-0.5">
                    Unobstructed stage, mandap, and couple entry vistas for 500+ guests
                  </p>
                </div>
                <button
                  onClick={onPlanEvent}
                  className="px-4 py-2 text-xs font-semibold bg-[#B8860B] hover:bg-[#996515] text-white transition-colors uppercase tracking-wider shrink-0"
                >
                  Reserve Date
                </button>
              </div>
            </div>
          </motion.div>

          {/* Editorial Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="border-l-2 border-[#D4AF37] pl-4">
              <h3 className="text-2xl font-serif text-neutral-900 font-medium mb-2">
                Why Pillar-less Architecture Matters
              </h3>
              <p className="text-sm font-sans text-neutral-600 leading-relaxed font-light">
                In traditional banquet halls across eastern India, concrete pillars block stage and mandap sightlines for over 35% of attending relatives and guests. Aurelia Palace engineered a custom cantilever steel roof truss—eliminating every internal pillar across 7,500 square feet.
              </p>
            </div>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FAF0D7] flex items-center justify-center shrink-0 mt-0.5 text-[#B8860B]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-neutral-900">100% Uninterrupted Stage Visibility</h5>
                  <p className="text-xs text-neutral-600 font-light">Every guest chair, table, and camera angle enjoys a clear direct line to the wedding stage.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FAF0D7] flex items-center justify-center shrink-0 mt-0.5 text-[#B8860B]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-neutral-900">18-Foot Royal Ceilings & Crystal Chandeliers</h5>
                  <p className="text-xs text-neutral-600 font-light">Grand vertical clearance allows multi-tiered floral installations and royal mandap heights.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FAF0D7] flex items-center justify-center shrink-0 mt-0.5 text-[#B8860B]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-neutral-900">Concert-Grade Acoustic Insulation</h5>
                  <p className="text-xs text-neutral-600 font-light">Engineered sound-dampening walls eliminate harsh echo for crystal-clear wedding mantras and live music.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs font-sans text-neutral-500">
              <span className="flex items-center gap-1 text-[#8B6508] font-semibold">
                <Award className="w-4 h-4 text-[#B8860B]" />
                District Benchmark
              </span>
              <span>·</span>
              <span>Capacity: 500+ Seated · 800 Floating</span>
            </div>
          </motion.div>
        </div>

        {/* Interactive Architectural Comparison Widget */}
        <div className="max-w-4xl mx-auto bg-white border border-[#D4AF37]/30 shadow-md p-6 sm:p-8">
          <div className="text-center mb-6">
            <h4 className="text-xl font-serif text-neutral-900 mb-2">
              Compare Your Event Experience
            </h4>
            <p className="text-xs sm:text-sm text-neutral-500 font-sans">
              Toggle between Aurelia Palace's pillar-less design and conventional banquet halls:
            </p>

            {/* Interactive Toggle Buttons */}
            <div className="inline-flex p-1 bg-neutral-100 rounded-none border border-neutral-200 mt-4">
              <button
                onClick={() => setComparisonMode('Aurelia')}
                className={`px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                  comparisonMode === 'Aurelia'
                    ? 'bg-[#B8860B] text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Aurelia Palace (Pillar-less)
              </button>
              <button
                onClick={() => setComparisonMode('traditional')}
                className={`px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                  comparisonMode === 'traditional'
                    ? 'bg-neutral-800 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Traditional Hall (Standard)
              </button>
            </div>
          </div>

          {/* Visual Floor Simulation */}
          <div className="relative h-48 bg-[#1A1815] border border-neutral-700 flex items-center justify-center overflow-hidden">
            {/* Stage */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-[#D4AF37] text-black text-[11px] font-bold tracking-widest uppercase">
              WEDDING STAGE & MANDAP
            </div>

            {/* Red Carpet Center Aisle */}
            <div className="absolute top-10 bottom-0 left-1/2 -translate-x-1/2 w-14 bg-[#7A162B] opacity-80 border-x border-[#D4AF37]/30" />

            {/* Seating Dots */}
            <div className="grid grid-cols-8 gap-4 px-8 pt-12 w-full max-w-lg z-10">
              {Array.from({ length: 32 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-3.5 h-3.5 rounded-full mx-auto transition-all duration-300 ${
                    comparisonMode === 'Aurelia'
                      ? 'bg-[#E6CA65] shadow-[0_0_8px_rgba(230,202,101,0.6)]'
                      : i % 5 === 2 || i % 7 === 1
                      ? 'bg-red-500/70'
                      : 'bg-[#E6CA65]/60'
                  }`}
                  title={
                    comparisonMode === 'Aurelia'
                      ? '100% Unobstructed Stage View'
                      : i % 5 === 2 || i % 7 === 1
                      ? 'Obstructed by Structural Column'
                      : 'Partial Stage View'
                  }
                />
              ))}
            </div>

            {/* Pillars in Traditional Mode */}
            {comparisonMode === 'traditional' && (
              <>
                <div className="absolute top-18 left-1/4 w-8 h-8 rounded-full bg-neutral-500 border-2 border-red-500 flex items-center justify-center text-[10px] text-white font-bold animate-pulse z-20">
                  PILLAR
                </div>
                <div className="absolute top-18 right-1/4 w-8 h-8 rounded-full bg-neutral-500 border-2 border-red-500 flex items-center justify-center text-[10px] text-white font-bold animate-pulse z-20">
                  PILLAR
                </div>
                <div className="absolute bottom-8 left-1/3 w-8 h-8 rounded-full bg-neutral-500 border-2 border-red-500 flex items-center justify-center text-[10px] text-white font-bold animate-pulse z-20">
                  PILLAR
                </div>
                <div className="absolute bottom-8 right-1/3 w-8 h-8 rounded-full bg-neutral-500 border-2 border-red-500 flex items-center justify-center text-[10px] text-white font-bold animate-pulse z-20">
                  PILLAR
                </div>
              </>
            )}
          </div>

          {/* Outcome Metric */}
          <div className="mt-4 flex flex-wrap items-center justify-between text-xs font-sans text-neutral-600 pt-3 border-t border-neutral-100">
            <div>
              <span className="font-semibold text-neutral-900">
                {comparisonMode === 'Aurelia' ? 'Stage Visibility: 100% (Zero Blind Spots)' : 'Stage Visibility: ~65% (Blocked by Columns)'}
              </span>
            </div>
            <div className="text-[#8B6508]">
              {comparisonMode === 'Aurelia' ? '✓ Ideal for Varmala, Drone Shots & Photography' : '✗ Obstructed Guest Viewing & Photographer Angles'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
