import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "./ui";

const items = [
  {
    title: "Golden Hour Dining",
    text: "A seven-course tasting menu served as the sun gilds the dining hall.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M8 30h32M12 30a12 12 0 0124 0M24 14v-4M20 34h8l-1 6h-6z" />
      </svg>
    ),
  },
  {
    title: "Marble Spa Rituals",
    text: "Hammam, gold-infused facials, and silence beneath arched colonnades.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M24 6c6 8 10 14 10 20a10 10 0 01-20 0c0-6 4-12 10-20zM14 40h20" />
      </svg>
    ),
  },
  {
    title: "Private Butler",
    text: "Every suite attended around the clock by a dedicated palace butler.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M24 6a6 6 0 100 12 6 6 0 000-12zM10 42c0-8 6-14 14-14s14 6 14 14M18 34l6 8 6-8" />
      </svg>
    ),
  },
  {
    title: "Palace Afternoon Tea",
    text: "Fine porcelain, gold-leaf pastries, and harp music in the Winter Garden.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M10 18h24v8a10 10 0 01-20 0v-8zM34 20h4a4 4 0 010 8h-4M8 38h30M18 10c0 2 2 2 2 4M24 10c0 2 2 2 2 4" />
      </svg>
    ),
  },
  {
    title: "Heritage Tours",
    text: "Walk the secret passages and painted ceilings with our palace historian.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M8 40V20l8-6 8 6 8-6 8 6v20zM8 40h32M20 40v-10h8v10M24 6v8" />
      </svg>
    ),
  },
  {
    title: "Evening Serenades",
    text: "Chamber music drifts across the courtyard under lantern-lit skies.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M18 36a5 5 0 100-10 5 5 0 000 10zM34 32a5 5 0 100-10 5 5 0 000 10zM23 31V12l16-4v19" />
      </svg>
    ),
  },
];

export default function Experiences() {
  return (
    <section className="relative bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Palace Rituals"
          title="Moments composed for you"
          subtitle="Within these walls, every hour holds a small ceremony."
        />

        <div className="mt-20 grid gap-px bg-gold-200/60 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08} className="bg-ivory">
              <motion.div
                whileHover="hover"
                initial="rest"
                className="group relative h-full overflow-hidden bg-white p-10 transition-colors duration-700"
              >
                <motion.div
                  variants={{ rest: { scale: 0, opacity: 0 }, hover: { scale: 1, opacity: 1 } }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-100"
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 text-gold-500 transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-110">
                      {it.icon}
                    </div>
                    <span className="font-serif text-sm text-gold-400">0{i + 1}</span>
                  </div>
                  <h3 className="mt-8 font-serif text-2xl font-light text-ink">{it.title}</h3>
                  <p className="mt-3 font-sans text-sm font-light leading-relaxed text-ink/60">{it.text}</p>
                  <motion.div
                    variants={{ rest: { width: 32 }, hover: { width: "100%" } }}
                    transition={{ duration: 0.6 }}
                    className="mt-8 h-px bg-gold-500"
                  />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
