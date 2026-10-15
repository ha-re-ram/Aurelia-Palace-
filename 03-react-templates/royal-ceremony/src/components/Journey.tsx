import { useEffect, useRef, useState } from "react";
import { Filigree } from "./Ornaments";

const scenes = [
  {
    id: "01",
    title: "The Gates",
    script: "A first breath",
    copy: "Bronze and gold part like a secret kept too long. The world behind you grows quiet. Ahead, marble waits in warm light.",
    image: "/images/palace-gates.jpg",
  },
  {
    id: "02",
    title: "The Grand Hall",
    script: "Light, held still",
    copy: "Columns rise as if they were grown, not built. Chandeliers keep the afternoon in crystal. Your footsteps become part of the architecture.",
    image: "/images/grand-hall.jpg",
  },
  {
    id: "03",
    title: "The Ascent",
    script: "Higher, quieter",
    copy: "The staircase does not merely climb — it unfolds. Gold railings cool beneath the hand. Each landing offers a new silence.",
    image: "/images/staircase.jpg",
  },
  {
    id: "04",
    title: "The Heart",
    script: "Where evenings live",
    copy: "The ballroom holds a century of music in its gilded ceiling. Mirrors answer one another. You have arrived at the pulse of Aurelia.",
    image: "/images/ballroom.jpg",
  },
];

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
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const n = scenes.length;
  const scaled = progress * (n - 0.0001);
  const index = Math.min(n - 1, Math.floor(scaled));
  const blend = scaled - index;
  const scene = scenes[index];

  return (
    <section id="palace" ref={pin} className="relative h-[420vh] bg-[#0e0c08]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {scenes.map((s, i) => {
          const active = i === index;
          const next = i === index + 1;
          const opacity = active ? 1 - blend * 0.15 : next ? blend : 0;
          const scale = active ? 1 + blend * 0.12 : next ? 1.05 + blend * 0.05 : 1.1;
          return (
            <img
              key={s.id}
              src={s.image}
              alt={s.title}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
              style={{
                opacity,
                transform: `scale(${scale})`,
                zIndex: next ? 2 : active ? 1 : 0,
              }}
            />
          );
        })}

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/55 via-transparent to-black/30" />

        <div className="relative z-20 flex h-full max-w-7xl flex-col justify-end px-6 pb-16 sm:px-12 lg:justify-center lg:pb-0">
          <p className="font-display text-[10px] tracking-[0.5em] text-[#E8D5A3] uppercase">
            The Walk · {scene.id} / 04
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-[0.16em] text-[#FFFEF7] uppercase sm:text-6xl">
            {scene.title}
          </h2>
          <p className="font-script mt-3 text-3xl text-[#E8D5A3] sm:text-4xl">{scene.script}</p>
          <Filigree className="mt-5 w-44" />
          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-[#F6ECC8]/90 sm:text-xl">
            {scene.copy}
          </p>
        </div>

        <div className="absolute right-6 top-1/2 z-20 hidden h-56 w-px -translate-y-1/2 bg-white/15 sm:block">
          <div
            className="depth-progress w-px"
            style={{ height: `${progress * 100}%` }}
          />
          {scenes.map((s, i) => (
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

        <p className="absolute bottom-6 right-6 z-20 hidden font-display text-[9px] tracking-[0.35em] text-[#E8D5A3]/70 uppercase sm:block">
          Scroll to walk deeper
        </p>
      </div>
    </section>
  );
}
