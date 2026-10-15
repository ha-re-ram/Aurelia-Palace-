import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Award } from 'lucide-react';
import { REVIEWS } from '../data/resortData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] relative border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs uppercase font-sans tracking-[0.25em] font-semibold text-[#8B6508]">
              Royal Accolades
            </span>
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-light text-neutral-900 tracking-tight leading-tight mb-4">
            Cherished by <span className="italic font-normal text-[#996515]">Distinguished Families</span>
          </h2>

          <p className="text-base font-sans text-neutral-600 font-light max-w-2xl mx-auto">
            Real experiences from families and corporate leadership who celebrated their momentous milestones at Aurelia Palace.
          </p>
        </div>

        {/* Reviews 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-neutral-200 p-8 hover:border-[#D4AF37] hover:shadow-[0_12px_32px_rgba(212,175,55,0.12)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-[#B8860B]">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B8860B]" />
                  ))}
                </div>

                <p className="text-sm font-sans text-neutral-700 font-light leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100">
                <h4 className="font-serif font-medium text-base text-neutral-900">
                  {rev.author}
                </h4>
                <div className="text-xs text-[#8B6508] font-sans font-medium mt-0.5">
                  {rev.role} · {rev.location}
                </div>
                <div className="text-[11px] text-neutral-400 font-sans mt-0.5">
                  {rev.event} ({rev.date})
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
