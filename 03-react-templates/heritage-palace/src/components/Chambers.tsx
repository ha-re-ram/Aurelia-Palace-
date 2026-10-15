import { useInView } from "../hooks/useInView";
import { Filigree } from "./Ornaments";
import Img from "./Img";
import { ROOMS, SITE } from "../data/site";

export default function Chambers() {
  const { ref, visible } = useInView<HTMLElement>(0.1);

  return (
    <section id="chambers" ref={ref} className="relative bg-[#fffcf7] py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className="flex flex-col items-center text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(24px)",
            transition: "all 0.9s ease",
          }}
        >
          <p className="font-display text-[10px] tracking-[0.4em] text-[#C4A35A] uppercase sm:tracking-[0.48em]">
            61 rooms & suites
          </p>
          <h2 className="mt-4 font-display text-3xl tracking-[0.1em] text-[#1c1812] uppercase sm:text-5xl sm:tracking-[0.14em]">
            The Chambers
          </h2>
          <p className="font-script mt-2 text-3xl text-[#8e6f2e] sm:mt-3 sm:text-3xl">
            Four ways to stay
          </p>
          <Filigree className="mx-auto mt-5 w-44 sm:mt-6 sm:w-56" />
          <p className="mt-5 max-w-2xl font-body text-lg leading-relaxed text-[#4a4236] sm:text-xl">
            Every room is air-conditioned and served by room service. Rates begin at{" "}
            <span className="font-semibold text-[#8e6f2e]">₹3,137</span> per night and move to
            roughly ₹3,565 in peak season, depending on category and platform.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2">
          {ROOMS.map((s, i) => (
            <article
              key={s.name}
              className="group hover-lift gold-border overflow-hidden bg-white"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(30px)",
                transition: `all 0.9s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s`,
              }}
            >
              <div className="relative h-56 overflow-hidden sm:h-72">
                <Img
                  src={s.image}
                  fallback={s.fallback}
                  alt={s.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                <span className="absolute left-4 top-4 border border-[#E8D5A3]/60 bg-black/35 px-3 py-1 font-display text-[9px] tracking-[0.24em] uppercase text-[#F6ECC8] backdrop-blur-sm">
                  {s.tag}
                </span>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <h3 className="font-display text-base leading-tight tracking-[0.1em] uppercase text-[#FFFEF7] sm:text-lg">
                    {s.name}
                  </h3>
                  <span className="shrink-0 font-display text-[9px] tracking-[0.18em] text-[#E8D5A3] sm:text-[10px]">
                    {s.bed}
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-7">
                <p className="font-body text-base leading-relaxed text-[#4a4236] sm:text-lg">{s.desc}</p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#e8d5a3]/70 pt-4">
                  <span className="font-display text-[11px] tracking-[0.14em] text-[#8e6f2e]">
                    From ₹3,137 / night
                  </span>
                  <a
                    href={`tel:${SITE.phoneRaw[0]}`}
                    className="font-display text-[10px] tracking-[0.26em] uppercase text-[#8e6f2e] underline decoration-[#C4A35A] underline-offset-4 hover:text-[#1c1812]"
                  >
                    Call to hold it
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center font-body text-base text-[#8a8070] sm:text-lg">
          Check-in 12:00 PM · Check-out 10:00 AM · Photo ID required · No pets
        </p>
      </div>
    </section>
  );
}
