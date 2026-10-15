import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { Crest } from "./Intro";
import { SITE } from "../data/site";

const links = [
  { label: "The Resort", href: "#resort" },
  { label: "Rooms", href: "#rooms" },
  { label: "Celebrations", href: "#celebrations" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ visible }: { visible: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 60));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* Utility bar */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={visible && !scrolled ? { y: 0, opacity: 1 } : { y: -40, opacity: 0 }}
        transition={{ duration: 0.6, delay: visible ? 0.4 : 0 }}
        className="fixed inset-x-0 top-0 z-50 hidden border-b border-gold-200/50 bg-white/70 backdrop-blur-sm lg:block"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-10">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-ink/50">
            {SITE.addressLine2} · {SITE.state}
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${SITE.phoneRaw[0]}`}
              className="font-sans text-[10px] uppercase tracking-[0.3em] text-ink/60 transition-colors hover:text-gold-600"
            >
              {SITE.phones[0]}
            </a>
            <span className="h-3 w-px bg-gold-300" />
            <a
              href={`mailto:${SITE.email}`}
              className="font-sans text-[10px] lowercase tracking-[0.2em] text-ink/60 transition-colors hover:text-gold-600"
            >
              {SITE.email}
            </a>
          </div>
        </div>
      </motion.div>

      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={visible ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
        className={`fixed inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "top-0 bg-white/92 py-3 shadow-[0_1px_0_rgba(201,162,58,0.3),0_10px_30px_-20px_rgba(0,0,0,0.3)] backdrop-blur-md"
            : "top-0 bg-transparent py-4 lg:top-[33px] lg:py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-10">
          <a href="#top" className="group flex items-center gap-2.5 sm:gap-3">
            <Crest className="h-8 w-8 shrink-0 text-gold-500 transition-transform duration-700 group-hover:rotate-180 sm:h-10 sm:w-10" />
            <div className="leading-none">
              <span className="block font-serif text-base tracking-[0.18em] text-ink sm:text-xl">AURELIA PALACE</span>
              <span className="mt-0.5 block font-sans text-[7px] uppercase tracking-[0.25em] text-gold-600 sm:text-[8px] sm:tracking-[0.3em]">
                Resort · Hotel · Celebrations
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 xl:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative font-sans text-[11px] uppercase tracking-[0.25em] text-ink/70 transition-colors hover:text-ink"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-500 transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE.phoneRaw[0]}`}
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-gold-300 text-gold-600 transition-colors hover:bg-gold-500 hover:text-white sm:flex xl:hidden"
              aria-label="Call"
            >
              <PhoneIcon className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="relative hidden overflow-hidden border border-gold-500 px-6 py-2.5 font-sans text-[10px] uppercase tracking-[0.3em] text-gold-700 transition-colors duration-500 hover:text-white before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-gold-500 before:transition-transform before:duration-500 hover:before:scale-x-100 xl:block"
            >
              Book Now
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] xl:hidden"
              aria-label="Toggle menu"
            >
              <motion.span animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="h-px w-6 bg-ink" />
              <motion.span animate={open ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }} className="h-px w-6 bg-gold-500" />
              <motion.span animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="h-px w-6 bg-ink" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 92% 4%)" }}
            animate={{ clipPath: "circle(145% at 92% 4%)" }}
            exit={{ clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-white px-7 pb-10 pt-24 xl:hidden"
          >
            <nav className="flex flex-1 flex-col justify-center">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.22 + i * 0.07 }}
                  className="group flex items-baseline gap-4 border-b border-gold-100 py-4"
                >
                  <span className="font-sans text-[9px] text-gold-500">0{i + 1}</span>
                  <span className="font-serif text-3xl font-light text-ink transition-colors group-active:text-gold-600 sm:text-4xl">
                    {l.label}
                  </span>
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 space-y-4"
            >
              <div className="gold-line h-px w-full" />
              <a href={`tel:${SITE.phoneRaw[0]}`} className="flex items-center gap-3 font-serif text-xl text-ink">
                <PhoneIcon className="h-4 w-4 text-gold-500" /> {SITE.phones[0]}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 font-sans text-sm text-ink/70">
                <MailIcon className="h-4 w-4 text-gold-500" /> {SITE.email}
              </a>
              <p className="font-sans text-[10px] uppercase leading-relaxed tracking-[0.25em] text-ink/40">
                {SITE.addressLine1}
                <br />
                {SITE.addressLine2} — 827013
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.2a2 2 0 012.1-.5c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z" />
    </svg>
  );
}

export function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 6 10-6" />
    </svg>
  );
}
