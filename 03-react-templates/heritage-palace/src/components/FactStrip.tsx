import { useInView } from "../hooks/useInView";
import { STATS } from "../data/site";

export default function FactStrip() {
  const { ref, visible } = useInView<HTMLElement>(0.2);

  return (
    <section id="numbers" ref={ref} className="relative bg-[#fffcf7] pt-14 sm:pt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-px bg-[#e8d5a3]/60 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="bg-[#fffcf7] px-4 py-8 text-center sm:px-6 sm:py-11"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(18px)",
                transition: `all 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.09}s`,
              }}
            >
              <p className="gold-shimmer font-display text-3xl leading-none tracking-[0.02em] sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-3 font-display text-[9px] tracking-[0.22em] uppercase text-[#1c1812] sm:text-[10px] sm:tracking-[0.28em]">
                {s.label}
              </p>
              <p className="mt-1.5 font-body text-sm leading-tight text-[#8a8070] sm:text-base">
                {s.note}
              </p>
            </div>
          ))}
        </div>

        <p className="py-6 text-center font-body text-base text-[#8a8070] sm:py-8 sm:text-lg">
          Rated <span className="font-display text-[#8e6f2e]">5.0</span> by guests · 6.4 km from
          Grand Valley Airport · 7.6 km from the city centre
        </p>
      </div>
    </section>
  );
}
