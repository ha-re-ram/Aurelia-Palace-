import { useInView } from "../hooks/useInView";
import { Filigree } from "./Ornaments";

export default function Dining() {
  const { ref, visible } = useInView<HTMLElement>(0.15);

  return (
    <section id="table" ref={ref} className="relative overflow-hidden bg-[#f7f1e6] py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2">
        <div
          className="gold-frame relative"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateX(-24px)",
            transition: "all 1s ease",
          }}
        >
          <img
            src="images/palace-dining.jpg"
            alt="The Table of Aurelia"
            className="h-[520px] w-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-[#fffcf7]/90 p-5 backdrop-blur-sm gold-border">
            <p className="font-display text-[10px] tracking-[0.3em] text-[#C4A35A] uppercase">
              Seating from dusk
            </p>
            <p className="mt-1 font-body text-xl italic text-[#1c1812]">
              Twelve courses. One evening. Eternal.
            </p>
          </div>
        </div>

        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateX(24px)",
            transition: "all 1s ease 0.15s",
          }}
        >
          <p className="font-display text-[10px] tracking-[0.48em] text-[#C4A35A] uppercase">
            Culinary court
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-[0.12em] uppercase text-[#1c1812] sm:text-5xl">
            The Table
          </h2>
          <p className="font-script mt-3 text-3xl text-[#8e6f2e]">Aurelia</p>
          <Filigree className="mt-5 w-44" />
          <p className="mt-6 font-body text-xl leading-relaxed text-[#4a4236]">
            Candlelight finds gold first. Then porcelain. Then you. The dining hall is a theatre of
            restraint — white linen, a single garden rose, and a kitchen that treats the season as
            scripture.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "The Sovereign Tasting — 12 movements",
              "The Garden Lunch — light, green, gilded",
              "Midnight Champagne in the Hall of Mirrors",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 font-body text-lg text-[#1c1812]">
                <span className="h-px w-8 bg-[#C4A35A]" />
                {item}
              </li>
            ))}
          </ul>
          <a href="#reserve" className="btn-gold mt-10 inline-block rounded-full px-8 py-3.5 font-display text-[10px]">
            Dine with us
          </a>
        </div>
      </div>
    </section>
  );
}
