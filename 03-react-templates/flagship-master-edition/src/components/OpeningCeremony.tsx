import { useEffect, useState } from "react";
import GoldDust from "./GoldDust";
import { Crest, Filigree } from "./Ornaments";

const TITLE = "AURELIA PALACE";

export default function OpeningCeremony({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const finish = () => {
    setLeaving(true);
    window.setTimeout(onComplete, 1200);
  };

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStage(1), 350),
      window.setTimeout(() => setStage(2), 1600),
      window.setTimeout(() => setStage(3), 3000),
      window.setTimeout(() => setStage(4), 4600),
      window.setTimeout(() => setStage(5), 7600),
      window.setTimeout(finish, 8800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[80] overflow-hidden ${leaving ? "veil-lift" : ""}`}
      style={{ background: "#0e0c08", perspective: "1800px" }}
    >
      <img
        src="/images/palace-hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

      {stage >= 5 && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(232,213,163,0.75), transparent 55%)",
            animation: "bloom 1.6s ease-out forwards",
          }}
        />
      )}

      <div
        className={`gate-left absolute inset-y-0 left-0 w-1/2 origin-left ${stage >= 4 ? "open" : ""}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <GateFace side="left" />
      </div>
      <div
        className={`gate-right absolute inset-y-0 right-0 w-1/2 origin-right ${stage >= 4 ? "open" : ""}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <GateFace side="right" />
      </div>

      <GoldDust />

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <div
          className="transition-all duration-1000"
          style={{
            opacity: stage >= 1 && stage < 5 ? 1 : 0,
            transform: stage >= 1 ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <Crest className="mx-auto h-24 w-24 drop-shadow-[0_0_18px_rgba(196,163,90,0.45)] sm:h-28 sm:w-28" />
        </div>

        <div className="mt-8 font-display text-[10px] tracking-[0.55em] text-[#E8D5A3] sm:text-xs">
          {TITLE.split("").map((ch, i) => (
            <span
              key={i}
              className={stage >= 2 ? "letter-in gold-shimmer" : "opacity-0"}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </div>

        <div
          className="mt-6 transition-all duration-1000"
          style={{
            opacity: stage >= 2 && stage < 5 ? 1 : 0,
            transform: stage >= 2 ? "scaleX(1)" : "scaleX(0.4)",
          }}
        >
          <Filigree className="mx-auto w-56 sm:w-72" />
        </div>

        <p
          className="font-script mt-6 text-3xl text-[#F3E6C4] sm:text-4xl transition-all duration-1000"
          style={{
            opacity: stage >= 3 && stage < 5 ? 1 : 0,
            transform: stage >= 3 ? "translateY(0)" : "translateY(12px)",
          }}
        >
          The gates open for you
        </p>

        <p
          className="mt-4 font-display text-[10px] tracking-[0.42em] text-[#C4A35A] uppercase transition-opacity duration-1000"
          style={{ opacity: stage >= 3 && stage < 5 ? 0.85 : 0 }}
        >
          Welcome to the palace
        </p>
      </div>

      <button
        onClick={finish}
        className="absolute bottom-8 right-8 z-30 font-display text-[10px] tracking-[0.35em] text-[#E8D5A3]/80 uppercase hover:text-[#F6ECC8] transition-colors"
      >
        Skip intro
      </button>
    </div>
  );
}

function GateFace({ side }: { side: "left" | "right" }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #2a2418 0%, #1a160f 40%, #0f0d0a 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: "url(/images/palace-gates.jpg)",
          backgroundSize: "cover",
          backgroundPosition: side === "left" ? "left center" : "right center",
          filter: "saturate(0.85) brightness(0.72)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            side === "left"
              ? "linear-gradient(90deg, rgba(14,12,8,0.25), rgba(196,163,90,0.12))"
              : "linear-gradient(270deg, rgba(14,12,8,0.25), rgba(196,163,90,0.12))",
        }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-80" viewBox="0 0 400 900" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`g-${side}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E8D5A3" />
            <stop offset="50%" stopColor="#C4A35A" />
            <stop offset="100%" stopColor="#8E6F2E" />
          </linearGradient>
        </defs>
        {side === "left" ? (
          <>
            <rect x="18" y="20" width="12" height="860" fill={`url(#g-${side})`} opacity="0.85" />
            <rect x="360" y="20" width="8" height="860" fill={`url(#g-${side})`} opacity="0.7" />
          </>
        ) : (
          <>
            <rect x="370" y="20" width="12" height="860" fill={`url(#g-${side})`} opacity="0.85" />
            <rect x="32" y="20" width="8" height="860" fill={`url(#g-${side})`} opacity="0.7" />
          </>
        )}
        {[80, 220, 360, 500, 640, 780].map((y) => (
          <rect
            key={y}
            x="40"
            y={y}
            width="320"
            height="2"
            fill={`url(#g-${side})`}
            opacity="0.55"
          />
        ))}
        <circle
          cx={side === "left" ? 372 : 28}
          cy="450"
          r="14"
          stroke="#E8D5A3"
          strokeWidth="2"
          fill="#8E6F2E"
        />
        <circle cx={side === "left" ? 372 : 28} cy="450" r="5" fill="#F3E6C4" />
      </svg>
      <div
        className="absolute inset-y-0 w-px"
        style={{
          [side === "left" ? "right" : "left"]: 0,
          background: "linear-gradient(180deg, transparent, #E8D5A3, transparent)",
        }}
      />
    </div>
  );
}
