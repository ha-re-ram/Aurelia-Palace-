import React from 'react';
import { RESORT_CONTACT } from '../data/resortData';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC<{
  onOpenBooking: () => void;
  onOpenEventInquiry: () => void;
}> = ({ onOpenBooking, onOpenEventInquiry }) => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 font-sans pt-16 pb-24 border-t-2 border-[#D4AF37]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold tracking-widest text-[#E6CA65] uppercase mb-3">
              AURELIA PALACE
            </h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
              Where Luxury Meets Legacy. Royal Heritage Valley’s statement destination featuring the district's only pillar-less grand ballroom, sunset infinity pool, and pristine celebration lawns.
            </p>
            <div className="text-xs text-[#E6CA65] font-serif italic">
              A Statement Landmark in Heritage Valley
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Explore Property
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400 font-light">
              <li>
                <a href="#accommodations" className="hover:text-[#E6CA65] transition-colors">
                  Deluxe & Executive Suites
                </a>
              </li>
              <li>
                <a href="#ballroom" className="hover:text-[#E6CA65] transition-colors">
                  Pillar-less Grand Ballroom (500+)
                </a>
              </li>
              <li>
                <a href="#weddings" className="hover:text-[#E6CA65] transition-colors">
                  Royal Celebration Lawns (1,000+)
                </a>
              </li>
              <li>
                <a href="#infinity-pool" className="hover:text-[#E6CA65] transition-colors">
                  Sunset Infinity Pool & Cabanas
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#E6CA65] transition-colors">
                  Banquet Catering & Valet
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Reservations */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Direct Desk & Hours
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400 font-light">
              <p>
                <strong className="text-neutral-200">Standard Check-In:</strong> 12:00 PM
              </p>
              <p>
                <strong className="text-neutral-200">Standard Check-Out:</strong> 10:00 AM
              </p>
              <p>
                <strong className="text-neutral-200">24/7 Front Desk:</strong>{' '}
                <a href={`tel:${RESORT_CONTACT.phone}`} className="text-[#E6CA65] hover:underline font-medium">
                  {RESORT_CONTACT.displayPhone}
                </a>
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-4 py-1.5 bg-[#B8860B] hover:bg-[#996515] text-white text-xs font-semibold uppercase tracking-wider transition-colors mr-2"
                >
                  Book Stay
                </button>
                <button
                  onClick={onOpenEventInquiry}
                  className="px-4 py-1.5 border border-[#D4AF37] text-[#E6CA65] hover:bg-neutral-800 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Plan Event
                </button>
              </div>
            </div>
          </div>

          {/* Location & Landmark */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Palace Address
            </h4>
            <div className="text-xs text-neutral-400 font-light space-y-1.5">
              <p className="text-neutral-300 font-medium">{RESORT_CONTACT.name}</p>
              <p>{RESORT_CONTACT.address}</p>
              <p>{RESORT_CONTACT.city}, {RESORT_CONTACT.state} - {RESORT_CONTACT.pincode}</p>
              <p className="text-[#E6CA65] text-[11px] pt-1">
                Landmark: {RESORT_CONTACT.landmark}
              </p>
              <p className="text-[11px] text-neutral-500 pt-2">
                Direct access via NH 32 · 10 min from Heritage Valley Station
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 text-center sm:flex sm:justify-between sm:items-center text-xs text-neutral-500 font-light">
          <p>© {new Date().getFullYear()} Aurelia Palace. All rights reserved.</p>
          <p className="italic mt-2 sm:mt-0 font-serif text-neutral-400">
            Plot No. 3589, NH 32, Narayanpur, Heritage District, Royal Heritage Valley, Grand Estate
          </p>
        </div>
      </div>
    </footer>
  );
};
