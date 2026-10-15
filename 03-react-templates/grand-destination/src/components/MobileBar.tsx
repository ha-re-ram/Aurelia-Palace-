import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { SITE } from "../data/site";
import { PhoneIcon } from "./Navbar";

export default function MobileBar({ visible }: { visible: boolean }) {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 400));

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: visible && show ? 0 : 110 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-0 z-[45] grid grid-cols-3 border-t border-gold-300/70 bg-white/95 backdrop-blur-md xl:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a href={`tel:${SITE.phoneRaw[0]}`} className="flex flex-col items-center gap-1 py-3 text-ink active:bg-gold-50">
        <PhoneIcon className="h-4 w-4 text-gold-600" />
        <span className="font-sans text-[9px] uppercase tracking-[0.2em]">Call</span>
      </a>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${SITE.mapsQuery}`}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center gap-1 border-x border-gold-200 py-3 text-ink active:bg-gold-50"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-gold-600" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
        <span className="font-sans text-[9px] uppercase tracking-[0.2em]">Directions</span>
      </a>
      <a href="#contact" className="flex flex-col items-center gap-1 bg-gold-500 py-3 text-white active:bg-gold-600">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </svg>
        <span className="font-sans text-[9px] uppercase tracking-[0.2em]">Book</span>
      </a>
    </motion.div>
  );
}
