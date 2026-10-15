import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PalaceVisual } from './PalaceVisuals';

interface GalleryItem {
  id: string;
  category: 'ballroom' | 'pool' | 'lawns' | 'rooms';
  title: string;
  subtitle: string;
  visualType: 'pillarless-ballroom' | 'infinity-pool' | 'celebration-lawn' | 'deluxe-room' | 'hero-facade' | 'executive-suite';
}

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ballroom' | 'pool' | 'lawns' | 'rooms'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items: GalleryItem[] = [
    {
      id: 'g-1',
      category: 'ballroom',
      title: 'Pillar-less Grand Ballroom',
      subtitle: 'Unobstructed 7,500 sq.ft royal wedding stage and seating',
      visualType: 'pillarless-ballroom',
    },
    {
      id: 'g-2',
      category: 'pool',
      title: 'Sunset Infinity Pool & Lounge',
      subtitle: '4,000 sq.ft azure basin overlooking dusk horizon',
      visualType: 'infinity-pool',
    },
    {
      id: 'g-3',
      category: 'lawns',
      title: 'Royal Celebration Lawns',
      subtitle: 'Manicured dwarf grass turf with overhead fairy light grid',
      visualType: 'celebration-lawn',
    },
    {
      id: 'g-4',
      category: 'rooms',
      title: 'Executive Garden View Suite',
      subtitle: 'Floor-to-ceiling windows overlooking emerald lawns',
      visualType: 'executive-suite',
    },
    {
      id: 'g-5',
      category: 'rooms',
      title: 'Deluxe Suite Bedding',
      subtitle: 'Plush king-size mattress with gold embroidered accents',
      visualType: 'deluxe-room',
    },
    {
      id: 'g-6',
      category: 'ballroom',
      title: 'Palace Resort Night Facade',
      subtitle: 'Grand entrance driveway and neoclassical illuminated columns',
      visualType: 'hero-facade',
    },
  ];

  const filteredItems = items.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs uppercase font-sans tracking-[0.25em] font-semibold text-[#8B6508]">
              Visual Showcase
            </span>
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-light text-neutral-900 tracking-tight leading-tight mb-4">
            Palace <span className="italic font-normal text-[#996515]">Gallery</span>
          </h2>

          <p className="text-base font-sans text-neutral-600 font-light max-w-2xl mx-auto">
            Take a visual tour through our pillar-less hall, infinity pool deck, lush celebration lawns, and refined guest sanctuaries.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Views' },
              { id: 'ballroom', label: 'Grand Ballroom' },
              { id: 'pool', label: 'Infinity Pool' },
              { id: 'lawns', label: 'Celebration Lawns' },
              { id: 'rooms', label: 'Accommodations' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#B8860B] text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group cursor-pointer bg-neutral-900 border border-neutral-200 overflow-hidden relative"
            >
              <PalaceVisual
                type={item.visualType}
                alt={item.title}
                aspect="16:9"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="p-3 bg-white/90 rounded-full text-[#8B6508] shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                  <Eye className="w-5 h-5" />
                </span>
              </div>

              <div className="p-4 bg-white border-t border-neutral-100">
                <h4 className="font-serif text-base font-medium text-neutral-900 group-hover:text-[#996515] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-500 font-sans mt-0.5 font-light truncate">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && filteredItems[lightboxIndex] && (
            <div
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setLightboxIndex(null)}
            >
              <div
                className="relative max-w-4xl w-full bg-neutral-950 border border-[#D4AF37]/50 shadow-2xl p-4 sm:p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="absolute top-3 right-3 text-white/80 hover:text-white p-2 z-10"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="mb-4">
                  <PalaceVisual
                    type={filteredItems[lightboxIndex].visualType}
                    alt={filteredItems[lightboxIndex].title}
                    aspect="16:9"
                  />
                </div>

                <div className="flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-xl font-serif">
                      {filteredItems[lightboxIndex].title}
                    </h3>
                    <p className="text-xs text-[#E6CA65] font-sans mt-0.5">
                      {filteredItems[lightboxIndex].subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setLightboxIndex((prev) =>
                          prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
                        )
                      }
                      className="p-2 border border-white/20 hover:border-[#D4AF37] transition-colors text-white"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        setLightboxIndex((prev) =>
                          prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
                        )
                      }
                      className="p-2 border border-white/20 hover:border-[#D4AF37] transition-colors text-white"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
