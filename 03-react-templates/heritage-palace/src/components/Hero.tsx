import { Filigree, Crest } from "./Ornaments";
import GoldDust from "./GoldDust";
import Img from "./Img";
import { SITE } from "../data/site";

export default function Hero({ reveal }: { reveal: boolean }) {
  return (
    <section id="top" className="relative h-[100svh] min-h-[600px] overflow-hidden grain">
      <Img
        src="https://images.pexels.com/photos/33689321/pexels-photo-33689321.jpeg?auto=compress&cs=tinysrgb&w=2000"
        fallback="images/palace-hero.jpg"
        alt="Aurelia Palace, Narayanpur, Heritage District, Royal Heritage Valley"
        loading="eager"
        className={`absolute inset-0 h-full w-full object-cover ${reveal ? "kenburns" : "scale-110"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-[#fffcf7]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/25" />
      <GoldDust className="opacity-70" />

      <div
        className={`relative z-10 flex h-full flex-col items-center justify-center px-5 pb-16 text-center ${
          reveal ? "reveal-zoom" : "opacity-0"
        }`}
      >
        <Crest className="mb-5 h-14 w-14 drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] sm:h-20 sm:w-20" />
        <p className="font-display text-[9px] tracking-[0.4em] text-[#E8D5A3] uppercase sm:text-[11px] sm:tracking-[0.5em]">
          Narayanpur, Heritage District · Royal Heritage Valley · Heritage Valley
        </p>
        <h1 className="mt-4 font-display text-[13vw] leading-[0.95] tracking-[0.12em] text-[#FFFEF7] sm:mt-5 sm:text-6xl sm:tracking-[0.18em] md:text-7xl lg:text-8xl">
          Aurelia
          <span className="mt-1 block font-script tracking-normal text-[#E8D5A3] normal-case text-[17vw] sm:text-7xl md:text-8xl">
            Palace
          </span>
        </h1>
        <Filigree className="mx-auto mt-5 w-44 sm:mt-6 sm:w-80" />
        <p className="mt-5 max-w-md font-body text-lg italic leading-snug text-[#F6ECC8]/90 sm:mt-6 sm:max-w-xl sm:text-2xl">
          61 rooms. A 12,000 sq. ft. banquet. A 30,000 sq. ft. lawn. Welcome to the house where
          Heritage Valley celebrates.
        </p>
        <div className="mt-7 flex w-full max-w-sm flex-col gap-3 sm:mt-9 sm:w-auto sm:max-w-none sm:flex-row">
          <a href="#reserve" className="btn-gold pulse-glow rounded-full px-7 py-3.5 font-display text-[10px] sm:px-9 sm:text-[11px]">
            Reserve a room
          </a>
          <a
            href={`tel:${SITE.phoneRaw[0]}`}
            className="btn-ghost rounded-full px-7 py-3.5 font-display text-[10px] text-[#F3E6C4] border-[#E8D5A3]/70 sm:px-9 sm:text-[11px]"
          >
            Call {SITE.phones[0]}
          </a>
        </div>
        <p className="mt-5 font-display text-[9px] tracking-[0.3em] text-[#E8D5A3]/80 uppercase sm:text-[10px]">
          From ₹3,137 per night · Check-in 12:00 PM
        </p>
      </div>

      <a
        href="#numbers"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 text-[#F3E6C4] sm:bottom-8"
      >
        <span className="font-display text-[8px] tracking-[0.4em] uppercase sm:text-[9px]">Descend</span>
        <span className="scroll-chevron text-base">↓</span>
      </a>
    </section>
  );
}
