import { useInView } from "../hooks/useInView";
import { Filigree } from "./Ornaments";
import { POLICIES, SITE } from "../data/site";

export default function Arrival() {
  const { ref, visible } = useInView<HTMLElement>(0.12);

  return (
    <section id="arrival" ref={ref} className="relative overflow-hidden bg-[#1c1812] py-16 text-[#F3E6C4] sm:py-24">
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#c4a35a]/15 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(20px)",
            transition: "all 0.9s ease",
          }}
        >
          <p className="font-display text-[10px] tracking-[0.42em] text-[#C4A35A] uppercase sm:tracking-[0.48em]">
            Before you arrive
          </p>
          <h2 className="mt-4 font-display text-3xl tracking-[0.1em] uppercase text-[#FFFEF7] sm:text-5xl">
            Arrival & House Rules
          </h2>
          <p className="font-script mt-2 text-3xl text-[#E8D5A3]">Nothing left to guess</p>
          <Filigree className="mt-5 w-40 sm:w-44" />
          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-[#F3E6C4]/85 sm:text-xl">
            The house keeps few rules and keeps them plainly. Bring your ID, arrive from noon, and
            leave the dog with a neighbour — the estate is entirely pet-free.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${SITE.phoneRaw[0]}`} className="btn-gold rounded-full px-7 py-3.5 text-center font-display text-[10px]">
              Call {SITE.phones[0]}
            </a>
            <a
              href={SITE.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost rounded-full px-7 py-3.5 text-center font-display text-[10px] text-[#E8D5A3] border-[#C4A35A]/70"
            >
              Open in Maps
            </a>
          </div>
        </div>

        <div className="divide-y divide-[#C4A35A]/25 border-y border-[#C4A35A]/25">
          {POLICIES.map((p, i) => (
            <div
              key={p.k}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateX(16px)",
                transition: `all 0.7s ease ${i * 0.08}s`,
              }}
            >
              <span className="w-32 shrink-0 font-display text-[10px] tracking-[0.24em] uppercase text-[#C4A35A]">
                {p.k}
              </span>
              <span className="font-body text-lg leading-snug text-[#F6ECC8] sm:text-xl">{p.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
