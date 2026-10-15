import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SITE } from "../data/site";

interface EventInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EventInquiryModal({ isOpen, onClose }: EventInquiryModalProps) {
  const [eventType, setEventType] = useState("Royal Wedding");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("500 - 1,000 Guests");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Aurelia Palace Events Team, I would like to inquire about hosting an event:\n• Type: ${eventType}\n• Tentative Date: ${date || "Flexible"}\n• Expected Guests: ${guests}\n• Name: ${name || "Guest"}\n• Phone: ${phone || "Provided on call"}`
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
                  Weddings & Banqueting Team
                </span>
                <h3 className="mt-1 font-serif text-2xl font-light text-ink sm:text-3xl">
                  Plan Your Royal Celebration
                </h3>
                <p className="mt-1 font-serif text-xs text-ink/60">
                  30,000 sq. ft. manicured celebration lawns & 12,000 sq. ft. air-conditioned pillarless hall.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4 font-serif">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-ink/70">
                      Celebration Type
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="mt-1 w-full rounded border border-gold-200 p-2 text-sm focus:border-gold-500 focus:outline-none"
                    >
                      <option value="Royal Wedding (Multi-Day)">Royal Wedding (Multi-Day)</option>
                      <option value="Wedding Reception">Wedding Reception</option>
                      <option value="Sangeet & Mehendi">Sangeet & Mehendi</option>
                      <option value="Engagement Ceremony">Engagement Ceremony</option>
                      <option value="Corporate Gala / Conference">Corporate Gala / Conference</option>
                      <option value="Anniversary / Birthday Banquet">Anniversary / Birthday Banquet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-ink/70">
                      Tentative Date
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="mt-1 w-full rounded border border-gold-200 p-2 text-sm focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-ink/70">
                    Estimated Guest Attendance
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="mt-1 w-full rounded border border-gold-200 p-2 text-sm focus:border-gold-500 focus:outline-none"
                  >
                    <option value="100 - 300 Guests">100 - 300 Guests</option>
                    <option value="300 - 600 Guests">300 - 600 Guests</option>
                    <option value="600 - 1,200 Guests">600 - 1,200 Guests (Grand Lawn & Ballroom)</option>
                    <option value="1,200 - 2,500+ Guests">1,200 - 2,500+ Guests (Full Palace Grounds)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-ink/70">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 w-full rounded border border-gold-200 p-2 text-sm focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-ink/70">
                      Mobile Number
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
                    Submit Event Inquiry
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex-1 rounded border border-emerald-600 bg-emerald-50 py-3 font-sans text-xs tracking-widest uppercase text-emerald-800 hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>💬 Inquire via WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center font-serif">
              <span className="text-4xl text-emerald-600">✓</span>
              <h3 className="mt-3 font-serif text-2xl font-light text-ink">
                Celebration Inquiry Registered
              </h3>
              <p className="mt-2 text-sm text-ink/70 max-w-md mx-auto">
                Thank you, <strong>{name}</strong>. Our senior event director will connect with you at <strong>{phone}</strong> to discuss venue layouts, catering menus, and royal dates.
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="rounded bg-emerald-600 px-6 py-2.5 font-sans text-xs tracking-wider uppercase text-white hover:bg-emerald-700 transition-colors"
                >
                  Direct WhatsApp Chat
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
