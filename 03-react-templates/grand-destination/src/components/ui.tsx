import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  const offsets = { up: { y: 50 }, down: { y: -50 }, left: { x: 60 }, right: { x: -60 }, none: {} };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SplitWords({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <span ref={ref} className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.9, delay: delay + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col ${alignCls}`}>
      <Reveal>
        <div className="mb-4 flex items-center gap-2.5 sm:mb-5 sm:gap-3">
          <span className="gold-line h-px w-7 sm:w-10" />
          <span
            className={`font-sans text-[9px] uppercase tracking-[0.35em] sm:text-[10px] sm:tracking-[0.5em] ${
              light ? "text-gold-300" : "text-gold-600"
            }`}
          >
            {eyebrow}
          </span>
          <span className="gold-line h-px w-7 sm:w-10" />
        </div>
      </Reveal>
      <h2
        className={`font-serif text-[2rem] font-light leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        <SplitWords text={title} delay={0.1} />
      </h2>
      {subtitle && (
        <Reveal delay={0.3}>
          <p
            className={`mt-5 max-w-2xl font-serif text-base italic leading-relaxed sm:mt-6 sm:text-lg md:text-xl ${
              light ? "text-white/70" : "text-ink/60"
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 py-2">
      <span className="gold-line h-px w-24" />
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-gold-500" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" />
      </svg>
      <span className="gold-line h-px w-24" />
    </div>
  );
}
