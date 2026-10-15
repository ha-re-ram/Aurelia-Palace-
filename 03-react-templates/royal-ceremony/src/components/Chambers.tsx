import { useInView } from "../hooks/useInView";
import { Filigree } from "./Ornaments";

const suites = [
  {
    name: "The Aurelia Suite",
    tag: "East Wing",
    size: "186 m²",
    desc: "Morning gold across ivory silk. A private salon, a marble bath, and windows that drink the garden.",
    image: "/images/royal-suite.jpg",
  },
  {
    name: "The Celestine Chamber",
    tag: "North Gallery",
    size: "142 m²",
    desc: "Quieter than a prayer. Cream walls, a writing desk of walnut and gold, and a bed that forgets the century.",
    image: "https://images.pexels.com/photos/28247932/pexels-photo-28247932.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    name: "The Sovereign Quarters",
    tag: "The Crown Floor",
    size: "240 m²",
    desc: "The palace at its most private. Dual chambers, a terrace over the fountains, and a dressing room of mirrors.",
    image: "/images/throne-chamber.jpg",
  },
];

export default function Chambers() {
  const { ref, visible } = useInView<HTMLElement>(0.12);

  return (
    <section id="chambers" ref={ref} className="relative bg-[#fffcf7] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div
          className="text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(24px)",
            transition: "all 0.9s ease",
          }}
        >
          <p className="font-display text-[10px] tracking-[0.48em] text-[#C4A35A] uppercase">
            Rest as royalty
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-[0.14em] text-[#1c1812] uppercase sm:text-5xl">
            The Chambers
          </h2>
          <p className="font-script mt-3 text-3xl text-[#8e6f2e]">Three keys. Infinite quiet.</p>
          <Filigree className="mx-auto mt-6 w-56" />
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {suites.map((s, i) => (
            <article
              key={s.name}
              className="group hover-lift gold-border overflow-hidden bg-white"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(30px)",
                transition: `all 0.9s ease ${i * 0.15}s`,
              }}
            >
              <div className="relative h-80 overflow-hidden">
                <img src={s.image} alt={s.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                <span className="absolute left-4 top-4 font-display text-[9px] tracking-[0.3em] uppercase text-[#F6ECC8] border border-[#E8D5A3]/50 px-3 py-1">
                  {s.tag}
                </span>
              </div>
              <div className="p-7">
                <div className="flex items-end justify-between gap-3">
                  <h3 className="font-display text-lg tracking-[0.12em] uppercase text-[#1c1812]">
                    {s.name}
                  </h3>
                  <span className="font-display text-[10px] tracking-[0.2em] text-[#C4A35A]">
                    {s.size}
                  </span>
                </div>
                <p className="mt-4 font-body text-lg leading-relaxed text-[#4a4236]">{s.desc}</p>
                <a
                  href="#reserve"
                  className="mt-6 inline-block font-display text-[10px] tracking-[0.32em] uppercase text-[#8e6f2e] border-b border-[#C4A35A] pb-1"
                >
                  Request this chamber
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
