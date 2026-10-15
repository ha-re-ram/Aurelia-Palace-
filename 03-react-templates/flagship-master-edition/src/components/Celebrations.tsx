import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, SectionHeading } from "./ui";
import { VENUES, SITE } from "../data/site";

const occasions = [
  "Weddings",
  "Receptions",
  "Sangeet",
  "Haldi",
  "Engagement",
  "Baby Shower",
  "Birthdays",
  "Corporate Events",
  "Conferences",
  "Anniversaries",
];

export default function Celebrations() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const marqueeX = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <section id="celebrations" ref={ref} className="relative overflow-hidden bg-ink">
      {/* Banner */}
      <div className="relative flex min-h-[80svh] items-center overflow-hidden py-24">
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
          <img src="images/lawn.jpg" alt="Aurelia Palace celebration lawn" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent" />
        </motion.div>

        <motion.div
          style={{ x: marqueeX }}
          className="pointer-events-none absolute top-10 left-0 whitespace-nowrap font-serif text-[5rem] font-light leading-none text-white/[0.06] sm:text-[9rem] md:text-[14rem]"
        >
          Celebrate · Cherish · Crown · Celebrate · Cherish
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold-300 sm:w-12" />
              <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-gold-300 sm:text-[10px] sm:tracking-[0.5em]">
                Weddings & Celebrations
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="mt-5 max-w-3xl font-serif text-4xl font-light leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Where Heritage Valley gathers to say <span className="italic text-gold-200">forever</span>
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-white/80 sm:text-xl">
              A 12,000 sq. ft. air-conditioned banquet hall and a 30,000 sq. ft. open lawn, served by separate veg and
              non-veg kitchens — with parking for 500+ cars so no guest is left circling the highway.
            </p>
          </Reveal>
          <Reveal delay={0.38}>
            <div className="mt-8 flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:gap-4">
              <a
                href="#contact"
                className="bg-gold-500 px-8 py-4 text-center font-sans text-[10px] uppercase tracking-[0.3em] text-white transition-all duration-500 hover:bg-gold-400 sm:px-10 sm:text-[11px]"
              >
                Plan Your Event
              </a>
              <a
                href={`tel:${SITE.phoneRaw[1]}`}
                className="border border-white/50 px-8 py-4 text-center font-sans text-[10px] uppercase tracking-[0.3em] text-white transition-all duration-500 hover:border-gold-300 hover:text-gold-200 sm:px-10 sm:text-[11px]"
              >
                Talk to Banquet Team
              </a>
            </div>
          </Reveal>
        </div>

        <div className="pointer-events-none absolute inset-4 border border-gold-300/25 sm:inset-8" />
      </div>

      {/* Venue cards */}
      <div className="relative bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <SectionHeading eyebrow="The Venues" title="Space for every ritual" />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {VENUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <article className="group relative h-full overflow-hidden bg-ivory">
                  <div className="relative h-56 overflow-hidden sm:h-64">
                    <img
                      src={v.img}
                      alt={v.title}
                      className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                    <div className="absolute inset-3 border border-white/40 transition-all duration-700 group-hover:inset-5" />
                    <div className="absolute bottom-5 left-5">
                      <p className="font-serif text-4xl font-light leading-none text-white sm:text-5xl">{v.stat}</p>
                      <p className="mt-1 font-sans text-[9px] uppercase tracking-[0.3em] text-gold-200">{v.unit}</p>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="font-serif text-2xl font-light text-ink sm:text-3xl">{v.title}</h3>
                    <p className="mt-3 font-sans text-sm font-light leading-relaxed text-ink/60">{v.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Occasions marquee */}
          <Reveal delay={0.15}>
            <div className="relative mt-14 overflow-hidden border-y border-gold-200/70 py-5">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="flex w-max gap-8 whitespace-nowrap"
              >
                {[...occasions, ...occasions].map((o, i) => (
                  <span key={i} className="flex items-center gap-8 font-serif text-xl font-light text-ink/60 sm:text-2xl">
                    {o}
                    <span className="h-1.5 w-1.5 rotate-45 bg-gold-400" />
                  </span>
                ))}
              </motion.div>
            </div>
          </Reveal>

          {/* Catering pricing */}
          <Reveal delay={0.2}>
            <div className="mt-12 grid gap-px bg-gold-200/60 sm:grid-cols-3">
              {[
                { l: "Vegetarian Plate", v: "₹1,200", s: "indicative, per guest" },
                { l: "Non-Vegetarian Plate", v: "₹1,500", s: "indicative, per guest" },
                { l: "Seating Styles", v: "Theatre · Cluster", s: "& more, fully customisable" },
              ].map((c) => (
                <div key={c.l} className="bg-white px-6 py-7 text-center">
                  <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold-600">{c.l}</p>
                  <p className="mt-2 font-serif text-3xl text-ink">{c.v}</p>
                  <p className="mt-1 font-sans text-[10px] tracking-[0.1em] text-ink/40">{c.s}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
