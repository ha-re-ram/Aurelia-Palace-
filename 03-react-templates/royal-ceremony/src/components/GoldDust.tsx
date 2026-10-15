const motes = Array.from({ length: 36 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 7) % 100}%`,
  delay: `${(i * 0.37) % 6}s`,
  duration: `${7 + (i % 6)}s`,
  size: 2 + (i % 4),
  opacity: 0.25 + (i % 5) * 0.12,
}));

export default function GoldDust({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {motes.map((m) => (
        <span
          key={m.id}
          className="absolute bottom-0 rounded-full bg-[#E8D5A3]"
          style={{
            left: m.left,
            width: m.size,
            height: m.size,
            opacity: m.opacity,
            animation: `dust ${m.duration} linear ${m.delay} infinite`,
            boxShadow: "0 0 8px 2px rgba(196,163,90,0.45)",
          }}
        />
      ))}
    </div>
  );
}
