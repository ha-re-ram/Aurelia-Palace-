import { Filigree, Crest } from "./Ornaments";
import GoldDust from "./GoldDust";

export default function Hero({ reveal }: { reveal: boolean }) {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] overflow-hidden grain">
      <img
        src="/images/palace-hero.jpg"
        alt="Aurelia Palace at golden hour"
        className={`absolute inset-0 h-full w-full object-cover ${reveal ? "kenburns" : "scale-110"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-[#fffcf7]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/20" />
      <GoldDust className="opacity-70" />

      <div
        className={`relative z-10 flex h-full flex-col items-center justify-center px-6 text-center ${
          reveal ? "reveal-zoom" : "opacity-0"
        }`}
      >
        <Crest className="mb-6 h-16 w-16 drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] sm:h-20 sm:w-20" />
        <p className="font-display text-[10px] tracking-[0.55em] text-[#E8D5A3] uppercase sm:text-xs">
          Est. MDCCCXII · The Private Estate
        </p>
        <h1 className="mt-5 font-display text-4xl leading-tight tracking-[0.18em] text-[#FFFEF7] sm:text-6xl md:text-7xl lg:text-8xl">
          Aurelia
          <span className="block font-script tracking-normal text-[#E8D5A3] normal-case mt-1 text-5xl sm:text-7xl md:text-8xl">
            Palace
          </span>
        </h1>
        <Filigree className="mx-auto mt-6 w-56 sm:w-80" />
        <p className="mt-6 max-w-xl font-body text-lg italic text-[#F6ECC8]/90 sm:text-2xl">
          Where time bows to beauty, and every corridor remembers your name.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a href="#palace" className="btn-gold rounded-full px-8 py-3.5 font-display text-[11px] pulse-glow">
            Enter the Palace
          </a>
          <a
            href="#reserve"
            className="btn-ghost rounded-full px-8 py-3.5 font-display text-[11px] text-[#F3E6C4] border-[#E8D5A3]/70"
          >
            Request a Stay
          </a>
        </div>
      </div>

      <a
        href="#palace"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[#F3E6C4]"
      >
        <span className="font-display text-[9px] tracking-[0.4em] uppercase">Descend</span>
        <span className="scroll-chevron text-lg">↓</span>
      </a>
    </section>
  );
}
