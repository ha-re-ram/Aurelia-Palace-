import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Reveal, SectionHeading } from "./ui";
import { SITE } from "../data/site";

function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / 1700, 1);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {prefix}
      {v}
      {suffix}
    </span>
  );
}

export default function Welcome() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-25, 40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section id="resort" ref={ref} className="relative overflow-hidden bg-white py-20 sm:py-28 md:py-36">
      <motion.div
        style={{ rotate }}
        className="pointer-events-none absolute -right-40 top-20 hidden h-[30rem] w-[30rem] rounded-full border border-gold-200/60 lg:block"
      >
        <div className="absolute inset-8 rounded-full border border-dashed border-gold-200/60" />
        <div className="absolute inset-20 rounded-full border border-gold-100" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Welcome to Aurelia Palace"
          title="Heritage Valley's address for grand living"
          subtitle="Set on Royal Highway at Narayanpur, Heritage District, Aurelia Palace brings resort-scale comfort and genuine Indian hospitality to Royal Heritage Valley — for the traveller, the family and the celebration of a lifetime."
        />

        <div className="mt-14 grid items-center gap-12 sm:mt-20 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-7">
            <Reveal direction="right">
              <div className="group relative overflow-hidden">
                <motion.img
                  src="/images/pool.jpg"
                  alt="Infinity swimming pool at Aurelia Palace"
                  style={{ y: y1 }}
                  className="h-[20rem] w-full scale-110 object-cover transition-transform duration-[2000ms] group-hover:scale-[1.18] sm:h-[26rem] lg:h-[34rem]"
                />
                <div className="absolute inset-3 border border-white/60 transition-all duration-700 group-hover:inset-5 sm:inset-4" />
                <div className="absolute bottom-0 left-0 bg-white/90 px-5 py-3 backdrop-blur sm:px-6 sm:py-4">
                  <p className="font-sans text-[9px] uppercase tracking-[0.35em] text-gold-600">The Infinity Pool</p>
                </div>
              </div>
            </Reveal>

            <motion.div
              style={{ y: y2 }}
              className="absolute -bottom-8 -right-2 hidden w-48 overflow-hidden bg-white shadow-2xl shadow-gold-200/60 md:block lg:-right-10 lg:w-64"
            >
              <Reveal delay={0.25} direction="left">
                <img src="/images/lawn.jpg" alt="Celebration lawn" className="h-36 w-full object-cover lg:h-44" />
                <div className="p-4">
                  <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold-600">The Lawn</p>
                  <p className="mt-1 font-serif text-base leading-snug text-ink lg:text-lg">30,000 sq. ft. under the open sky</p>
                </div>
              </Reveal>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="font-serif text-2xl font-light leading-snug text-ink sm:text-3xl md:text-4xl">
                A resort, a boutique hotel and a celebration venue —{" "}
                <span className="italic text-gold-600">all within one gracious estate.</span>
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 font-sans text-sm font-light leading-relaxed text-ink/65 sm:mt-8 sm:text-base">
                Aurelia Palace was built for the way Heritage Valley truly celebrates — with room for every relative, every ritual
                and every guest who arrives unannounced. Sixty-two air-conditioned rooms and suites, an infinity pool
                that catches the evening sun, separate vegetarian and non-vegetarian kitchens, full power backup, lift
                access and parking for over five hundred vehicles. It is luxury built around real life.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 grid grid-cols-3 gap-4 border-y border-gold-200/70 py-6 sm:mt-10 sm:gap-6 sm:py-8">
                {[
                  { n: 62, s: "", l: "Rooms & Suites" },
                  { n: 500, s: "+", l: "Parking Bays" },
                  { n: 24, s: "/7", l: "Front Desk" },
                ].map((st) => (
                  <div key={st.l}>
                    <p className="font-serif text-3xl text-gold-600 sm:text-4xl">
                      <Counter to={st.n} suffix={st.s} />
                    </p>
                    <p className="mt-1 font-sans text-[8px] uppercase tracking-[0.25em] text-ink/50 sm:text-[10px] sm:tracking-[0.3em]">
                      {st.l}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 space-y-3">
                {SITE.distances.map((d) => (
                  <div key={d.label} className="flex items-center justify-between border-b border-dashed border-gold-200 pb-2">
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-ink/50">{d.label}</span>
                    <span className="font-serif text-base text-gold-700">{d.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <a
                href="#rooms"
                className="group mt-9 inline-flex items-center gap-4 font-sans text-[10px] uppercase tracking-[0.3em] text-ink sm:text-[11px] sm:tracking-[0.35em]"
              >
                <span className="relative">
                  Explore our rooms
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left bg-gold-500 transition-transform duration-500 group-hover:scale-x-0" />
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400 transition-all duration-500 group-hover:bg-gold-500 group-hover:text-white sm:h-10 sm:w-10">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
