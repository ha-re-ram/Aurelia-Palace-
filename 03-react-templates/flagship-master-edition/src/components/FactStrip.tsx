import { motion } from "framer-motion";
import { Reveal } from "./ui";

const STATS = [
  { value: "62+", label: "Air-Conditioned Suites", note: "Handcrafted comfort & luxury" },
  { value: "30,000", label: "Sq. Ft. Celebration Lawn", note: "Grand outdoor wedding paradise" },
  { value: "12,000", label: "Sq. Ft. Grand Ballroom", note: "Acoustically tuned & column-free" },
  { value: "50+", label: "Years of Royal Hospitality", note: "Heritage Valley's landmark destination" },
];

export default function FactStrip() {
  return (
    <section id="numbers" className="relative border-y border-gold-200/60 bg-ivory py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-6 divide-gold-200/40 sm:gap-8 md:grid-cols-4 md:divide-x">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="text-center md:px-4">
                <p className="font-serif text-3xl font-light tracking-tight text-gold-700 sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 font-sans text-[10px] tracking-[0.25em] uppercase text-ink/80 sm:text-xs">
                  {s.label}
                </p>
                <p className="mt-1 font-serif text-xs italic text-ink/60 sm:text-sm">
                  {s.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <p className="font-serif text-sm text-ink/70 sm:text-base">
            Rated <span className="font-semibold text-gold-700">★ 5.0</span> by 2,000+ happy couples and guests · 6.4 km from Grand Valley Airport · On Aurelia Grand Boulevard
          </p>
        </div>
      </div>
    </section>
  );
}
