import { useInView } from "../hooks/useInView";
import { Filigree } from "./Ornaments";
import Img from "./Img";
import { FACILITIES } from "../data/site";

export default function Gardens() {
  const { ref, visible } = useInView<HTMLElement>(0.1);

  return (
    <section id="grounds" ref={ref} className="relative overflow-hidden">
      <div className="relative h-[78svh] min-h-[460px]">
        <Img
          src="https://images.pexels.com/photos/24807133/pexels-photo-24807133.jpeg?auto=compress&cs=tinysrgb&w=1900"
          fallback="images/palace-spa.jpg"
          alt="The infinity pool at Aurelia Palace"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            transform: visible ? "scale(1.04)" : "scale(1.14)",
            transition: "transform 9s ease-out",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fffcf7]/25 via-black/25 to-[#0e0c08]/85" />

        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-end px-5 pb-12 text-center sm:pb-16">
          <p
            className="font-display text-[9px] tracking-[0.4em] text-[#E8D5A3] uppercase sm:text-[10px] sm:tracking-[0.48em]"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 1s" }}
          >
            Water, light, and a long evening
          </p>
          <h2 className="mt-3 font-display text-[10vw] leading-none tracking-[0.12em] text-[#FFFEF7] uppercase sm:mt-4 sm:text-5xl sm:tracking-[0.16em]">
            The Infinity Pool
          </h2>
          <p className="font-script mt-2 text-3xl text-[#E8D5A3] sm:text-4xl">The day softens</p>
          <Filigree className="mt-4 w-40 sm:mt-5 sm:w-56" />
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-[#F6ECC8]/90 sm:text-xl">
            After the banquet empties, the pool stays lit. Towels, loungers and a full power backup
            so the water never goes dark.
          </p>
        </div>
      </div>

      <div className="bg-[#fffcf7] py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="font-display text-[10px] tracking-[0.4em] text-[#C4A35A] uppercase sm:tracking-[0.48em]">
              Everything that is simply here
            </p>
            <h3 className="mt-3 font-display text-2xl tracking-[0.1em] uppercase text-[#1c1812] sm:text-3xl">
              Facilities
            </h3>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3">
            {FACILITIES.map((f, i) => (
              <span
                key={f}
                className="gold-border rounded-full bg-white px-4 py-2 font-display text-[10px] tracking-[0.16em] uppercase text-[#4a4236] transition-all duration-300 hover:border-[#8e6f2e] hover:text-[#8e6f2e] sm:px-5 sm:py-2.5 sm:text-[11px]"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(10px)",
                  transition: `all 0.6s ease ${0.05 * i}s`,
                }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
