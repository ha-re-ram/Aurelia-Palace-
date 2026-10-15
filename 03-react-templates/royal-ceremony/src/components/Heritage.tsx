import { useInView } from "../hooks/useInView";
import { Crest, Filigree } from "./Ornaments";

const pillars = [
  {
    t: "Marble",
    d: "Quarried in Carrara, laid by hands that understood patience. The floors still cool in summer.",
  },
  {
    t: "Gold",
    d: "Leaf, not paint. It catches morning first and evening last — a second sun inside the walls.",
  },
  {
    t: "Silence",
    d: "The third material. Thick curtains, thick stone, and a staff trained to vanish before they are needed.",
  },
];

export default function Heritage() {
  const { ref, visible } = useInView<HTMLDivElement>(0.15);

  return (
    <section className="relative bg-[#fffcf7] py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
        <Crest className="mx-auto h-16 w-16" />
        <p className="mt-6 font-display text-[10px] tracking-[0.48em] text-[#C4A35A] uppercase">
          Three materials, one house
        </p>
        <h2 className="mt-4 font-display text-3xl tracking-[0.14em] uppercase text-[#1c1812] sm:text-4xl">
          Why Aurelia
        </h2>
        <Filigree className="mx-auto mt-6 w-48" />
        <p className="mx-auto mt-6 max-w-2xl font-body text-xl italic leading-relaxed text-[#4a4236]">
          Named for the three wings that meet at the dome — East, West, and the Crown — the palace
          has received only those who arrive expected.
        </p>
      </div>

      <div
        ref={ref}
        className="mx-auto mt-16 grid max-w-6xl gap-px bg-[#e8d5a3]/50 px-6 sm:px-8 md:grid-cols-3"
      >
        {pillars.map((p, i) => (
          <div
            key={p.t}
            className="bg-[#fffcf7] px-8 py-12 text-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(16px)",
              transition: `all 0.8s ease ${i * 0.12}s`,
            }}
          >
            <p className="font-display text-[10px] tracking-[0.4em] text-[#C4A35A]">0{i + 1}</p>
            <h3 className="mt-3 font-display text-xl tracking-[0.2em] uppercase text-[#1c1812]">
              {p.t}
            </h3>
            <p className="mt-4 font-body text-lg leading-relaxed text-[#4a4236]">{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
