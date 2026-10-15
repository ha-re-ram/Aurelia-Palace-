import { useInView } from "../hooks/useInView";
import { Crest, Filigree } from "./Ornaments";
import Img from "./Img";

const pillars = [
  {
    t: "A Resort",
    d: "An infinity pool, landscaped grounds and 61 air-conditioned rooms — a weekend that behaves like a holiday, 7.6 km from Heritage Valley city centre.",
  },
  {
    t: "A Boutique Hotel",
    d: "Four room categories, Wi-Fi, room service, elevator and full power backup. Business trips and family stays, handled the same way: quickly.",
  },
  {
    t: "A Celebration Venue",
    d: "A 12,000 sq. ft. indoor banquet and a 30,000 sq. ft. lawn, with separate veg and non-veg kitchens and parking for 500+ vehicles.",
  },
];

export default function Heritage() {
  const { ref, visible } = useInView<HTMLElement>(0.15);

  return (
    <section ref={ref} className="relative bg-[#fffcf7] pb-4 pt-16 sm:pt-24">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Crest className="mx-auto h-14 w-14 sm:h-16 sm:w-16" />
        <p className="mt-5 font-display text-[10px] tracking-[0.42em] text-[#C4A35A] uppercase sm:tracking-[0.48em]">
          Narayanpur, Heritage District · Heritage Valley
        </p>
        <h2 className="mt-4 font-display text-2xl leading-tight tracking-[0.1em] uppercase text-[#1c1812] sm:text-4xl sm:tracking-[0.14em]">
          The house on Royal Highway
        </h2>
        <Filigree className="mx-auto mt-5 w-40 sm:mt-6 sm:w-48" />
        <p className="mx-auto mt-5 max-w-2xl font-body text-lg leading-relaxed text-[#4a4236] sm:text-xl">
          Aurelia Palace sits where the highway slows and the city gives way to open ground. Three
          roofs share one address — the guest who wants quiet, the guest who wants a desk, and the
          family who wants four hundred people under one sky.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-5 sm:mt-14 sm:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div
            className="gold-frame h-full overflow-hidden"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(20px)",
              transition: "all 0.9s ease",
            }}
          >
            <Img
              src="https://images.pexels.com/photos/33743364/pexels-photo-33743364.jpeg?auto=compress&cs=tinysrgb&w=1200"
              fallback="images/grand-hall.jpg"
              alt="Aurelia Palace courtyard"
              className="h-72 w-full object-cover sm:h-80"
            />
          </div>
          <div
            className="md:col-span-2"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(20px)",
              transition: "all 0.9s ease 0.12s",
            }}
          >
            <div className="grid gap-px bg-[#e8d5a3]/60 sm:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.t} className="bg-[#fffcf7] px-5 py-7">
                  <h3 className="font-display text-[11px] tracking-[0.2em] uppercase text-[#8e6f2e]">
                    {p.t}
                  </h3>
                  <p className="mt-3 font-body text-base leading-relaxed text-[#4a4236] sm:text-lg">
                    {p.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
