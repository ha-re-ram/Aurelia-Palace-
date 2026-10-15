import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroProps {
  onComplete: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
  const [phase, setPhase] = useState<"greet" | "open" | "done">("greet");
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setPhase("done");
      onComplete();
      return;
    }
    const t1 = setTimeout(() => setPhase("open"), 2900);
    const t2 = setTimeout(() => setPhase("done"), 4600);
    const t3 = setTimeout(onComplete, 4700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete, reduce]);

  const doorTransition = { duration: 1.7, ease: [0.76, 0, 0.24, 1] as const };

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          style={{ perspective: 1400 }}
        >
          <motion.div
            className="door-texture absolute inset-y-0 left-0 w-1/2 origin-left border-r border-gold-300/60 shadow-[inset_-30px_0_60px_rgba(0,0,0,0.05)]"
            initial={{ rotateY: 0 }}
            animate={phase === "open" ? { rotateY: -102 } : { rotateY: 0 }}
            transition={doorTransition}
          >
            <DoorPanel side="left" />
          </motion.div>

          <motion.div
            className="door-texture absolute inset-y-0 right-0 w-1/2 origin-right border-l border-gold-300/60 shadow-[inset_30px_0_60px_rgba(0,0,0,0.05)]"
            initial={{ rotateY: 0 }}
            animate={phase === "open" ? { rotateY: 102 } : { rotateY: 0 }}
            transition={doorTransition}
          >
            <DoorPanel side="right" />
          </motion.div>

          <motion.div
            className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
            animate={phase === "open" ? { opacity: 0, scale: 1.12, filter: "blur(8px)" } : { opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -120 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 sm:mb-7"
            >
              <Crest className="h-16 w-16 text-gold-500 sm:h-20 sm:w-20 md:h-24 md:w-24" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mb-3 font-sans text-[9px] uppercase tracking-[0.45em] text-gold-600 sm:text-[11px] sm:tracking-[0.55em]"
            >
              Welcome to
            </motion.p>

            <h1 className="font-serif text-[2.75rem] font-light leading-none tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
              {"Aurelia Palace".split("").map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.8 + i * 0.055, duration: 0.7, ease: "easeOut" }}
                  className={ch === " " ? "inline-block w-3 sm:w-5 md:w-7" : "inline-block"}
                >
                  {ch}
                </motion.span>
              ))}
            </h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.8, duration: 0.9 }}
              className="mt-6 flex items-center gap-3"
            >
              <span className="gold-line h-px w-12 sm:w-20" />
              <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
              <span className="gold-line h-px w-12 sm:w-20" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.8 }}
              className="mt-5 max-w-xs font-sans text-[9px] uppercase leading-relaxed tracking-[0.3em] text-ink/50 sm:max-w-none sm:text-[10px] sm:tracking-[0.4em]"
            >
              Narayanpur · Heritage District · Royal Heritage Valley
            </motion.p>
          </motion.div>

          <motion.button
            onClick={() => {
              setPhase("done");
              onComplete();
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "open" ? 0 : 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 font-sans text-[9px] uppercase tracking-[0.4em] text-ink/40 transition-colors hover:text-gold-600"
          >
            Skip
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DoorPanel({ side }: { side: "left" | "right" }) {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-4 border border-gold-300/70 sm:inset-6 md:inset-10" />
      <div className="absolute inset-6 border border-gold-200/60 sm:inset-9 md:inset-14" />
      <div
        className={`absolute top-1/2 h-16 w-1.5 -translate-y-1/2 rounded-full bg-gradient-to-b from-gold-200 via-gold-500 to-gold-700 shadow-[0_0_20px_rgba(201,162,58,0.5)] sm:h-24 ${
          side === "left" ? "right-4 sm:right-6 md:right-10" : "left-4 sm:left-6 md:left-10"
        }`}
      />
      {["top-4 left-4 sm:top-6 sm:left-6", "top-4 right-4 sm:top-6 sm:right-6", "bottom-4 left-4 sm:bottom-6 sm:left-6", "bottom-4 right-4 sm:bottom-6 sm:right-6"].map(
        (pos) => (
          <div key={pos} className={`absolute ${pos} h-3.5 w-3.5 rotate-45 border border-gold-400/70 sm:h-5 sm:w-5`} />
        ),
      )}
    </div>
  );
}

export function Crest({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="50" cy="50" r="46" />
      <circle cx="50" cy="50" r="40" strokeDasharray="2 4" />
      <path d="M50 18 L58 42 L42 42 Z" />
      <path d="M30 34 L37 54 L23 54 Z" />
      <path d="M70 34 L77 54 L63 54 Z" />
      <path d="M22 58 H78 M26 64 H74 M30 70 H70" />
      <path d="M38 70 V80 H62 V70" />
      <path d="M46 80 V74 H54 V80" />
    </svg>
  );
}
