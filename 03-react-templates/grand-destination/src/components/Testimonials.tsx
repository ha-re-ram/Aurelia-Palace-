import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "./ui";

const quotes = [
  {
    text: "Located right on the highway, with premium rooms, spotless washrooms and a genuine five-star feel. The room design is beautiful.",
    name: "Verified Guest",
    role: "Stayed at Aurelia Palace",
  },
  {
    text: "Everything was perfect — a beautiful resort with all the facilities. Easily the best choice for weddings in Heritage Valley.",
    name: "Wedding Host",
    role: "Celebration Lawn",
  },
  {
    text: "Elegant decor, a lovely outdoor seating option and an authentic, delicious spread. Clean spaces and easy card and UPI payments made it effortless.",
    name: "Event Guest",
    role: "Banquet Hall",
  },
  {
    text: "Centrally accessible, beautifully decorated and spotlessly maintained. Aurelia Palace makes any gathering feel hassle-free.",
    name: "Corporate Client",
    role: "Conference Booking",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % quotes.length), 5500);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section
      className="relative overflow-hidden bg-ivory py-20 sm:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-gold-100/70 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
        <Reveal>
          <div className="flex items-center justify-center gap-1.5">
            {Array.from({ length: 5 }).map((_, k) => (
              <motion.svg
                key={k}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: k * 0.08, type: "spring" }}
                viewBox="0 0 24 24"
                className="h-5 w-5 text-gold-500"
                fill="currentColor"
              >
                <path d="M12 2l3 6.5 7 .9-5 4.8 1.3 7L12 17.8 5.7 21.2 7 14.2 2 9.4l7-.9z" />
              </motion.svg>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 font-sans text-[9px] uppercase tracking-[0.4em] text-gold-600 sm:text-[10px]">
            Rated 5.0 on Justdial · 4.6 on MakeMyTrip
          </p>
        </Reveal>

        <div className="relative mt-9 min-h-[15rem] sm:min-h-[13rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 26, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -26, filter: "blur(6px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-serif text-xl font-light italic leading-snug text-ink sm:text-3xl md:text-4xl">
                “{quotes[i].text}”
              </p>
              <p className="mt-7 font-sans text-[10px] uppercase tracking-[0.35em] text-gold-600 sm:text-[11px]">
                {quotes[i].name}
              </p>
              <p className="mt-1 font-sans text-[9px] uppercase tracking-[0.25em] text-ink/40 sm:text-[10px]">
                {quotes[i].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2.5">
          {quotes.map((_, k) => (
            <button key={k} onClick={() => setI(k)} className="group relative h-6 w-8 sm:w-10" aria-label={`Review ${k + 1}`}>
              <span className="absolute left-0 top-1/2 h-px w-full bg-gold-200" />
              <motion.span
                animate={{ scaleX: i === k ? 1 : 0 }}
                transition={{ duration: 0.6 }}
                className="absolute left-0 top-1/2 h-px w-full origin-left bg-gold-500"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
