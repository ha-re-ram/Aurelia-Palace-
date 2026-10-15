import React from 'react';
import { Phone, MessageSquare, Calendar, Sparkles } from 'lucide-react';
import { RESORT_CONTACT } from '../data/resortData';

interface QuickInfoBarProps {
  onOpenBooking: () => void;
  onOpenEventInquiry: () => void;
}

export const QuickInfoBar: React.FC<QuickInfoBarProps> = ({
  onOpenBooking,
  onOpenEventInquiry,
}) => {
  return (
    <aside
      aria-label="Quick contact and reservation bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#D4AF37]/35 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] py-2 sm:py-2.5 px-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs">
        {/* Desktop Left: Timings & Landmark */}
        <div className="hidden lg:flex items-center gap-4 text-neutral-600 font-sans">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-pulse" />
            <strong className="text-neutral-900 font-medium">NH 32, Heritage District Heritage Valley</strong>
          </span>
          <span className="text-neutral-300">|</span>
          <span>Check-in: 12:00 PM · Check-out: 10:00 AM</span>
          <span className="text-neutral-300">|</span>
          <span className="text-[#8B6508] font-medium">Rooms from ₹3,060/night</span>
        </div>

        {/* Center/Phone Link */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${RESORT_CONTACT.phone}`}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF6EB] border border-[#D4AF37]/50 text-[#8B6508] hover:bg-[#FAF0D7] font-semibold text-xs transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="hidden sm:inline">Call:</span>
            <span>+1 (555) 789-2345</span>
          </a>

          <a
            href={`https://wa.me/${RESORT_CONTACT.whatsappNumber}?text=${encodeURIComponent(
              'Hello Aurelia Palace Heritage Valley, I would like to inquire about booking/wedding dates.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:px-2.5 sm:py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs transition-colors flex items-center gap-1 shrink-0"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden md:inline">WhatsApp</span>
          </a>
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenEventInquiry}
            className="hidden sm:inline-block px-3.5 py-1.5 text-xs font-semibold text-[#8B6508] border border-[#D4AF37] hover:bg-[#FAF6EB] transition-colors whitespace-nowrap"
          >
            Plan Wedding
          </button>
          <button
            onClick={onOpenBooking}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-[#B8860B] hover:bg-[#996515] transition-colors whitespace-nowrap shadow-xs"
          >
            Book Room
          </button>
        </div>
      </div>
    </aside>
  );
};
