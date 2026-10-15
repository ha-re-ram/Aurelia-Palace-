import { useEffect, useRef, useState } from "react";
import { Filigree } from "./Ornaments";
import Img from "./Img";
import { JOURNEY } from "../data/site";

export default function Journey() {
  const pin = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = pin.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / Math.max(total, 1)));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const n = JOURNEY.length;
  const scaled = progress * (n - 0.0001);
  const index = Math.min(n - 1, Math.floor(scaled));
  const blend = scaled - index;
  const scene = JOURNEY[index];

  return (
    <section id="palace" ref={pin} className="relative h-[340vh] bg-[#0e0c08] sm:h-[420vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {JOURNEY.map((s, i) => {
          const active = i === index;
          const next = i === index + 1;
          const opacity = active ? 1 - blend * 0.25 : next ? blend : 0;
          const scale = active ? 1 + blend * 0.12 : next ? 1.06 : 1.1;
          return (
            <Img
              key={s.id}
              src={s.image}
              fallback={s.fallback}
              alt={s.title}
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                opacity,
                transform: `scale(${scale})`,
                zIndex: next ? 2 : active ? 1 : 0,
                transition: "opacity 220ms linear",
              }}
            />
          );
        })}

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-transparent to-black/35" />

        <div className="relative z-20 flex h-full max-w-7xl flex-col justify-end px-5 pb-24 sm:px-10 sm:pb-20 lg:justify-center lg:pb-0">
          <div key={scene.id} className="max-w-xl fade-up">
            <p className="font-display text-[9px] tracking-[0.4em] text-[#E8D5A3] uppercase sm:text-[10px] sm:tracking-[0.5em]">
              The Walk · {scene.id} / 0{n}
            </p>
            <h2 className="mt-3 font-display text-[9vw] leading-none tracking-[0.1em] text-[#FFFEF7] uppercase sm:mt-4 sm:text-5xl sm:tracking-[0.16em] lg:text-6xl">
              {scene.title}
            </h2>
            <p className="font-script mt-2 text-3xl text-[#E8D5A3] sm:mt-3 sm:text-4xl">{scene.script}</p>
            <Filigree className="mt-4 w-36 sm:mt-5 sm:w-44" />
            <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-[#F6ECC8]/90 sm:mt-6 sm:text-xl">
              {scene.copy}
            </p>
          </div>
        </div>

        <div className="absolute right-5 top-1/2 z-20 hidden h-52 w-px -translate-y-1/2 bg-white/15 md:block">
          <div className="depth-progress w-px" style={{ height: `${progress * 100}%` }} />
          {JOURNEY.map((s, i) => (
            <span
              key={s.id}
              className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full border border-[#C4A35A]"
              style={{
                top: `${(i / (n - 1)) * 100}%`,
                background: i <= index ? "#C4A35A" : "transparent",
              }}
            />
          ))}
        </div>

        <div className="absolute bottom-5 right-5 z-20 flex gap-2 sm:hidden">
          {JOURNEY.map((s, i) => (
            <span
              key={s.id}
              className="h-1 rounded-full transition-all duration-500"
              style={{
                width: i === index ? 22 : 8,
                background: i === index ? "#C4A35A" : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>

        <p className="absolute bottom-6 right-6 z-20 hidden font-display text-[9px] tracking-[0.35em] text-[#E8D5A3]/70 uppercase lg:block">
          Scroll to walk deeper
        </p>
      </div>
    </section>
  );
}
