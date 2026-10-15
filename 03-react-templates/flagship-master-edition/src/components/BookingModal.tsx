import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SITE } from "../data/site";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoom?: string;
}

export default function BookingModal({ isOpen, onClose, initialRoom = "Presidential Suite" }: BookingModalProps) {
  const [room, setRoom] = useState(initialRoom);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Adults");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Aurelia Palace, I would like to book a stay:\n• Room: ${room}\n• Check-in: ${checkIn || "Flexible"}\n• Check-out: ${checkOut || "Flexible"}\n• Guests: ${guests}\n• Name: ${name || "Guest"}\n• Phone: ${phone || "Provided on call"}`
    );
    window.open(`https://wa.me/${SITE.phoneRaw[0]}?text=${text}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-ink/75 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-xl overflow-hidden rounded-sm border border-gold-300 bg-white p-6 shadow-2xl sm:p-8"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-ink/50 hover:text-ink text-2xl transition-colors"
            aria-label="Close"
          >
            ✕
          </button>

          {!submitted ? (
            <div>
              <div className="border-b border-gold-200/60 pb-4">
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-600">
                  Direct Palace Reservation
                </span>
                <h3 className="mt-1 font-serif text-2xl font-light text-ink sm:text-3xl">
                  Reserve Your Suite
                </h3>
                <p className="mt-1 font-serif text-xs text-ink/60">
                  Best rate guaranteed directly with Aurelia Palace concierge.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4 font-serif">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-ink/70">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      required
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="mt-1 w-full rounded border border-gold-200 p-2 text-sm focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-ink/70">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      required
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="mt-1 w-full rounded border border-gold-200 p-2 text-sm focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-ink/70">
                      Suite Selection
                    </label>
                    <select
                      value={room}
                      onChange={(e) => setRoom(e.target.value)}
                      className="mt-1 w-full rounded border border-gold-200 p-2 text-sm focus:border-gold-500 focus:outline-none"
                    >
                      <option value="Executive Room">Executive Room (₹3,137/night)</option>
                      <option value="Deluxe Heritage Room">Deluxe Heritage Room (₹4,200/night)</option>
                      <option value="Royal Suite">Royal Suite (₹6,500/night)</option>
                      <option value="Presidential Suite">Presidential Suite (₹9,900/night)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-ink/70">
                      Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="mt-1 w-full rounded border border-gold-200 p-2 text-sm focus:border-gold-500 focus:outline-none"
                    >
                      <option value="1 Adult">1 Adult</option>
                      <option value="2 Adults">2 Adults</option>
                      <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                      <option value="3 Adults">3 Adults</option>
                      <option value="Family Suite (4+ Guests)">Family (4+ Guests)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-ink/70">
                      Guest Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Singh"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 w-full rounded border border-gold-200 p-2 text-sm focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-ink/70">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-1 w-full rounded border border-gold-200 p-2 text-sm focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 rounded bg-gold-600 py-3 font-sans text-xs tracking-widest uppercase text-white hover:bg-gold-700 transition-colors shadow-md"
                  >
                    Confirm Booking Request
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex-1 rounded border border-emerald-600 bg-emerald-50 py-3 font-sans text-xs tracking-widest uppercase text-emerald-800 hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>💬 Book via WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center font-serif">
              <span className="text-4xl text-emerald-600">✓</span>
              <h3 className="mt-3 font-serif text-2xl font-light text-ink">
                Reservation Request Received
              </h3>
              <p className="mt-2 text-sm text-ink/70 max-w-md mx-auto">
                Thank you, <strong>{name}</strong>. Our front desk manager will contact you at <strong>{phone}</strong> within 15 minutes to confirm your stay at Aurelia Palace.
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="rounded bg-emerald-600 px-6 py-2.5 font-sans text-xs tracking-wider uppercase text-white hover:bg-emerald-700 transition-colors"
                >
                  Message us on WhatsApp
                </button>
                <button
                  onClick={onClose}
                  className="rounded border border-gold-300 px-6 py-2.5 font-sans text-xs tracking-wider uppercase text-ink hover:bg-gold-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
