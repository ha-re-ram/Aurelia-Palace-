import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const shots = [
  { img: "images/hero.jpg", title: "The Arrival", cap: "The portico on Royal Highway, lit gold at dusk." },
  { img: "images/lobby.jpg", title: "The Lobby", cap: "Marble, light and an unhurried welcome." },
  { img: "images/pool.jpg", title: "The Infinity Pool", cap: "Evening swims with the sky for a ceiling." },
  { img: "images/lawn.jpg", title: "The Celebration Lawn", cap: "Thirty thousand square feet of possibility." },
  { img: "images/ballroom.jpg", title: "The Banquet Hall", cap: "Twelve thousand square feet, fully air-conditioned." },
  { img: "images/dining.jpg", title: "Fine Dining", cap: "Separate veg and non-veg kitchens, one standard." },
  { img: "images/suite.jpg", title: "The Rooms", cap: "Sixty-two quiet retreats across the estate." },
  { img: "images/garden.jpg", title: "The Gardens", cap: "Lanterns, lawns and long Heritage Valley evenings." },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-78%"]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
  }, [lightbox]);

  return (
    <>
      {/* DESKTOP: horizontal scroll walk-through */}
      <section id="gallery" ref={ref} className="relative hidden h-[420vh] bg-ivory lg:block">
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
          <div className="flex items-end justify-between px-10 pb-6 pt-28">
            <div>
              <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-gold-600">A walk through</p>
              <h2 className="mt-2 font-serif text-5xl font-light text-ink">Aurelia Palace in pictures</h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-ink/40">Scroll to wander</span>
              <div className="relative h-px w-44 bg-gold-200">
                <motion.div style={{ width: progress }} className="absolute left-0 top-0 h-px bg-gold-500" />
              </div>
            </div>
          </div>

          <motion.div style={{ x }} className="flex h-full items-center gap-8 pl-10">
            {shots.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setLightbox(i)}
                className="group relative h-[60vh] w-[46vw] shrink-0 overflow-hidden text-left"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
                <div className="absolute inset-4 border border-white/40 transition-all duration-700 group-hover:inset-7 group-hover:border-gold-300" />
                <span className="absolute right-6 top-6 font-serif text-5xl font-light text-white/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="font-serif text-4xl font-light text-white">{s.title}</h3>
                  <p className="mt-2 max-w-md font-serif text-lg italic text-white/75">{s.cap}</p>
                </div>
              </button>
            ))}
            <div className="flex h-[60vh] w-[32vw] shrink-0 flex-col items-center justify-center bg-white px-10 text-center shadow-[0_30px_80px_-30px_rgba(201,162,58,0.35)]">
              <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-gold-600">Seeing is believing</p>
              <p className="mt-6 font-serif text-3xl font-light leading-tight text-ink">
                But standing here is <span className="italic text-gold-600">something else entirely.</span>
              </p>
              <a
                href="#contact"
                className="mt-9 border border-gold-500 px-8 py-3 font-sans text-[11px] uppercase tracking-[0.3em] text-gold-700 transition-all duration-500 hover:bg-gold-500 hover:text-white"
              >
                Plan Your Visit
              </a>
            </div>
            <div className="w-10 shrink-0" />
          </motion.div>
        </div>
      </section>

      {/* MOBILE: masonry-ish grid */}
      <section className="bg-ivory px-5 py-20 sm:px-6 lg:hidden">
        <p className="text-center font-sans text-[9px] uppercase tracking-[0.4em] text-gold-600">A walk through</p>
        <h2 className="mt-2 text-center font-serif text-3xl font-light leading-tight text-ink sm:text-4xl">
          Aurelia Palace in pictures
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-3">
          {shots.map((s, i) => (
            <motion.button
              key={s.title}
              onClick={() => setLightbox(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
              className={`relative overflow-hidden ${i % 3 === 0 ? "col-span-2 h-52" : "h-40"}`}
            >
              <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              <div className="absolute inset-2 border border-white/35" />
              <p className="absolute bottom-3 left-3 right-3 text-left font-serif text-lg leading-tight text-white">
                {s.title}
              </p>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <motion.div
              key={lightbox}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl"
            >
              <img src={shots[lightbox].img} alt={shots[lightbox].title} className="max-h-[70vh] w-full object-contain" />
              <div className="mt-5 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-light text-white sm:text-3xl">{shots[lightbox].title}</h3>
                  <p className="mt-1 font-serif italic text-white/60">{shots[lightbox].cap}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLightbox((lightbox - 1 + shots.length) % shots.length)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
                    aria-label="Previous"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setLightbox((lightbox + 1) % shots.length)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
                    aria-label="Next"
                  >
                    ›
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
