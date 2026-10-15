import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal, SectionHeading } from "./ui";
import { FAQS } from "../data/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <SectionHeading eyebrow="Good to Know" title="Before you arrive" />

        <div className="mt-12 divide-y divide-gold-200/70 border-y border-gold-200/70">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="group flex w-full items-start gap-4 py-5 text-left sm:py-6"
              >
                <span className="mt-1 font-sans text-[10px] text-gold-500">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1">
                  <span
                    className={`block font-serif text-lg font-light leading-snug transition-colors duration-300 sm:text-2xl ${
                      open === i ? "text-gold-700" : "text-ink group-hover:text-gold-700"
                    }`}
                  >
                    {f.q}
                  </span>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.span
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="block overflow-hidden"
                      >
                        <span className="block pt-3 font-sans text-[13px] font-light leading-relaxed text-ink/60 sm:text-sm">
                          {f.a}
                        </span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 135 : 0 }}
                  transition={{ duration: 0.35 }}
                  className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center text-gold-500"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </motion.span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
