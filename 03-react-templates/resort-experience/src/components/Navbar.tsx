import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { RESORT_CONTACT } from '../data/resortData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenEventInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenEventInquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Stay', href: '#accommodations' },
    { label: 'Weddings', href: '#weddings' },
    { label: 'Ballroom', href: '#ballroom' },
    { label: 'Infinity Pool', href: '#infinity-pool' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100 py-3.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-neutral-100/70 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="text-xl sm:text-2xl font-serif font-bold tracking-[0.18em] text-[#B8860B] hover:text-[#996515] transition-colors uppercase whitespace-nowrap shrink-0"
            >
              AURELIA PALACE
            </a>

            {/* Zone 2: 4-6 clean text navigation links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-sans font-medium text-neutral-600">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative py-1 hover:text-[#B8860B] transition-colors whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenEventInquiry}
                className="px-4 py-2 text-xs font-sans font-semibold text-[#8B6508] border border-[#D4AF37]/60 hover:bg-[#FAF6EB] transition-colors whitespace-nowrap shrink-0"
              >
                Plan Event
              </button>
              <button
                onClick={onOpenBooking}
                className="px-4.5 py-2 text-xs font-sans font-semibold text-white bg-[#B8860B] hover:bg-[#996515] transition-colors whitespace-nowrap shrink-0 shadow-sm"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="px-3 py-1.5 text-xs font-sans font-semibold text-white bg-[#B8860B] hover:bg-[#996515] transition-colors whitespace-nowrap"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-700 hover:text-[#B8860B] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="fixed top-16 left-0 right-0 bg-white border-b border-neutral-200 px-6 py-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-4 text-base font-sans font-medium text-neutral-800">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 border-b border-neutral-100 hover:text-[#B8860B] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEventInquiry();
                  }}
                  className="w-full py-2.5 text-xs font-sans font-semibold text-[#8B6508] border border-[#D4AF37] text-center"
                >
                  Plan Wedding / Event
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-2.5 text-xs font-sans font-semibold text-white bg-[#B8860B] text-center"
                >
                  Book Stay (From ₹3,060/night)
                </button>
                <a
                  href={`tel:${RESORT_CONTACT.phone}`}
                  className="flex items-center justify-center gap-2 py-2 text-xs text-neutral-600 hover:text-[#B8860B]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B8860B]" />
                  <span>Direct Desk: {RESORT_CONTACT.displayPhone}</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
