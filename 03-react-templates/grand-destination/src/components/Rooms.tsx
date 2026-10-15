import { motion } from "framer-motion";
import { useState } from "react";
import { Reveal, SectionHeading } from "./ui";
import { ROOMS, SITE } from "../data/site";

export default function Rooms() {
  const [active, setActive] = useState(0);

  return (
    <section id="rooms" className="relative overflow-hidden bg-ivory py-20 sm:py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Stay With Us"
          title="Rooms made for resting well"
          subtitle="Sixty-two air-conditioned rooms and suites with high-speed Wi-Fi, LED television, daily housekeeping and 24-hour room service. Tariffs from ₹3,137 per night."
        />

        {/* DESKTOP: interactive showcase */}
        <div className="mt-16 hidden gap-12 lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="relative h-[34rem] overflow-hidden lg:col-span-7">
            {ROOMS.map((r, i) => (
              <motion.img
                key={r.name}
                src={r.img}
                alt={r.name}
                initial={false}
                animate={{
                  opacity: active === i ? 1 : 0,
                  scale: active === i ? 1 : 1.08,
                  clipPath: active === i ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 0% 100%)",
                }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ))}
            <div className="pointer-events-none absolute inset-4 border border-white/60" />
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="absolute bottom-8 left-8 bg-white/92 px-6 py-4 backdrop-blur"
            >
              <p className="font-sans text-[9px] uppercase tracking-[0.35em] text-gold-600">{ROOMS[active].view}</p>
              <p className="mt-1 font-serif text-3xl text-ink">
                {ROOMS[active].price}
                <span className="ml-2 font-sans text-[10px] uppercase tracking-[0.2em] text-ink/40">/ night*</span>
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-5">
            {ROOMS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.07}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`group relative w-full border-b border-gold-200/70 py-6 text-left transition-all duration-500 ${
                    active === i ? "pl-6" : "pl-0 hover:pl-3"
                  }`}
                >
                  <motion.span
                    animate={{ scaleY: active === i ? 1 : 0 }}
                    className="absolute left-0 top-6 bottom-6 w-px origin-top bg-gold-500"
                  />
                  <div className="flex items-baseline justify-between gap-4">
                    <h3
                      className={`font-serif text-3xl font-light transition-colors duration-500 ${
                        active === i ? "text-gold-600" : "text-ink"
                      }`}
                    >
                      {r.name}
                    </h3>
                    <span className="shrink-0 font-sans text-[10px] uppercase tracking-[0.25em] text-ink/40">{r.size}</span>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ height: active === i ? "auto" : 0, opacity: active === i ? 1 : 0 }}
                    transition={{ duration: 0.45 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-3 font-sans text-sm font-light leading-relaxed text-ink/60">{r.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {r.tags.map((t) => (
                        <span key={t} className="border border-gold-200 px-2.5 py-1 font-sans text-[9px] uppercase tracking-[0.2em] text-gold-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </button>
              </Reveal>
            ))}
            <p className="mt-6 font-sans text-[10px] uppercase tracking-[0.2em] text-ink/35">
              *Indicative tariff. Taxes extra. Rates vary by season & platform.
            </p>
          </div>
        </div>

        {/* MOBILE: swipeable cards */}
        <div className="-mx-5 mt-12 lg:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ROOMS.map((r, i) => (
              <motion.article
                key={r.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.06 }}
                className="w-[78vw] max-w-xs shrink-0 snap-center bg-white shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={r.img} alt={r.name} className="h-full w-full object-cover" />
                  <div className="absolute inset-2.5 border border-white/50" />
                  <span className="absolute left-3 top-3 bg-white/90 px-2.5 py-1 font-sans text-[8px] uppercase tracking-[0.25em] text-gold-700">
                    {r.view}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-2xl font-light text-ink">{r.name}</h3>
                  <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.2em] text-ink/40">{r.size}</p>
                  <p className="mt-3 font-sans text-[13px] font-light leading-relaxed text-ink/60">{r.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {r.tags.map((t) => (
                      <span key={t} className="border border-gold-200 px-2 py-0.5 font-sans text-[8px] uppercase tracking-[0.15em] text-gold-700">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-end justify-between border-t border-gold-100 pt-4">
                    <p className="font-serif text-2xl text-gold-600">
                      {r.price}
                      <span className="ml-1 font-sans text-[9px] uppercase tracking-[0.15em] text-ink/40">/night</span>
                    </p>
                    <a
                      href={`tel:${SITE.phoneRaw[0]}`}
                      className="bg-ink px-4 py-2.5 font-sans text-[9px] uppercase tracking-[0.25em] text-white"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 px-5">
            <span className="h-px w-8 bg-gold-400" />
            <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-ink/40">Swipe for more</p>
            <span className="h-px w-8 bg-gold-400" />
          </div>
        </div>

        {/* Policy strip */}
        <Reveal delay={0.2}>
          <div className="mt-14 grid gap-px bg-gold-200/60 sm:grid-cols-3">
            {[
              { l: "Check-in", v: SITE.checkIn },
              { l: "Check-out", v: SITE.checkOut },
              { l: "Valid Photo ID", v: "Mandatory · 18+" },
            ].map((p) => (
              <div key={p.l} className="bg-white px-6 py-6 text-center">
                <p className="font-sans text-[9px] uppercase tracking-[0.35em] text-gold-600">{p.l}</p>
                <p className="mt-2 font-serif text-2xl text-ink">{p.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
