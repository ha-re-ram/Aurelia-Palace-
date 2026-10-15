import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SITE } from "../data/site";

export default function Hero({ started }: { started: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 36 },
    animate: started ? { opacity: 1, y: 0 } : {},
    transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden bg-white">
      <motion.div style={{ y: imgY }} className="absolute inset-0">
        <motion.img
          src="/images/hero.jpg"
          alt="Aurelia Palace resort exterior in Narayanpur, Heritage District, Heritage Valley"
          initial={{ scale: 1.22, filter: "brightness(1.35) blur(12px)" }}
          animate={started ? { scale: 1.02, filter: "brightness(1) blur(0px)" } : {}}
          transition={{ duration: 2.3, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/25 to-white" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </motion.div>

      {/* Golden motes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold-400"
            style={{ left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%` }}
            animate={{ y: [0, -40, 0], opacity: [0.15, 0.8, 0.15], scale: [1, 1.7, 1] }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: i * 0.45, ease: "easeInOut" }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-5 pb-32 pt-28 text-center sm:px-6 sm:pb-36"
      >
        <motion.div {...reveal(0.25)} className="mb-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          <span className="rounded-full border border-gold-300 bg-white/70 px-3 py-1 font-sans text-[9px] uppercase tracking-[0.25em] text-gold-700 backdrop-blur-sm sm:text-[10px]">
            ★ 4.8 · Guest Rated
          </span>
          <span className="rounded-full border border-gold-300 bg-white/70 px-3 py-1 font-sans text-[9px] uppercase tracking-[0.25em] text-gold-700 backdrop-blur-sm sm:text-[10px]">
            Heritage Valley · Heritage Valley
          </span>
        </motion.div>

        <motion.p
          {...reveal(0.35)}
          className="mb-4 font-sans text-[9px] uppercase leading-relaxed tracking-[0.4em] text-ink/60 sm:text-[11px] sm:tracking-[0.5em]"
        >
          Luxury Resort · Boutique Hotel · Celebrations
        </motion.p>

        <motion.h1
          {...reveal(0.45)}
          className="font-serif text-[3.25rem] font-light leading-[0.92] tracking-tight text-ink sm:text-7xl lg:text-8xl xl:text-[8.5rem]"
        >
          Aurelia
          <span className="text-gold-gradient block italic">Palace</span>
        </motion.h1>

        <motion.div {...reveal(0.7)} className="my-6 flex items-center gap-3 sm:my-8 sm:gap-4">
          <span className="gold-line h-px w-12 sm:w-24" />
          <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
          <span className="gold-line h-px w-12 sm:w-24" />
        </motion.div>

        <motion.p
          {...reveal(0.85)}
          className="max-w-md font-serif text-lg font-light italic leading-relaxed text-ink/70 sm:max-w-2xl sm:text-2xl"
        >
          Sixty-two rooms, an infinity pool and thirty thousand square feet of celebration lawn — on Royal Highway, minutes from
          Grand Valley Airport.
        </motion.p>

        <motion.div {...reveal(1)} className="mt-9 flex w-full max-w-xs flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
          <a
            href="#contact"
            className="group relative overflow-hidden bg-gold-500 px-8 py-4 text-center font-sans text-[10px] uppercase tracking-[0.3em] text-white shadow-[0_12px_40px_-12px_rgba(201,162,58,0.8)] transition-all duration-500 hover:bg-gold-400 sm:px-10 sm:text-[11px] sm:tracking-[0.35em]"
          >
            <span className="relative z-10">Check Availability</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href={`tel:${SITE.phoneRaw[0]}`}
            className="border border-ink/20 bg-white/70 px-8 py-4 text-center font-sans text-[10px] uppercase tracking-[0.3em] text-ink backdrop-blur transition-all duration-500 hover:border-gold-500 hover:text-gold-700 sm:px-10 sm:text-[11px] sm:tracking-[0.35em]"
          >
            Call {SITE.phones[0]}
          </a>
        </motion.div>
      </motion.div>

      {/* Quick facts strip */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={started ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute inset-x-0 bottom-0 z-10 border-t border-gold-200/70 bg-white/85 backdrop-blur-md"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gold-200/70 px-2 md:grid-cols-4">
          {[
            { v: "62", l: "Rooms & Suites" },
            { v: "30,000", l: "Sq.Ft. Lawn" },
            { v: "12,000", l: "Sq.Ft. Banquet" },
            { v: "500+", l: "Car Parking" },
          ].map((f, i) => (
            <motion.div
              key={f.l}
              initial={{ opacity: 0 }}
              animate={started ? { opacity: 1 } : {}}
              transition={{ delay: 1.7 + i * 0.1 }}
              className="px-3 py-4 text-center sm:py-5"
            >
              <p className="font-serif text-xl text-gold-600 sm:text-3xl">{f.v}</p>
              <p className="mt-0.5 font-sans text-[8px] uppercase tracking-[0.25em] text-ink/50 sm:text-[9px] sm:tracking-[0.3em]">
                {f.l}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
