import { useInView } from "../hooks/useInView";
import { Filigree } from "./Ornaments";

export default function Gardens() {
  const { ref, visible } = useInView<HTMLElement>(0.12);

  return (
    <section id="gardens" ref={ref} className="relative min-h-[90vh] overflow-hidden">
      <img
        src="/images/palace-garden.jpg"
        alt="Aurelia Palace gardens"
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          transform: visible ? "scale(1.05)" : "scale(1.15)",
          transition: "transform 8s ease-out",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffcf7]/20 via-black/25 to-[#0e0c08]/80" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-4xl flex-col items-center justify-end px-6 pb-24 text-center">
        <p
          className="font-display text-[10px] tracking-[0.48em] text-[#E8D5A3] uppercase"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 1s" }}
        >
          Forty acres of hush
        </p>
        <h2 className="mt-4 font-display text-4xl tracking-[0.16em] text-[#FFFEF7] uppercase sm:text-6xl">
          The Gardens
        </h2>
        <p className="font-script mt-3 text-3xl text-[#E8D5A3] sm:text-4xl">The grounds breathe in gold</p>
        <Filigree className="mt-6 w-56" />
        <p className="mt-6 max-w-2xl font-body text-xl leading-relaxed text-[#F6ECC8]/90">
          Fountains speak in low voices. Hedgerows keep geometry. At golden hour the palace leans
          into the water and the whole estate becomes a single, trembling reflection.
        </p>
      </div>
    </section>
  );
}
