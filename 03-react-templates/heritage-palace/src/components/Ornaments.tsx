export function Crest({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 140" className={className} fill="none" aria-hidden>
      <path
        d="M60 8 L68 22 H52 L60 8Z"
        stroke="#C4A35A"
        strokeWidth="1.4"
        fill="#E8D5A3"
      />
      <path
        d="M40 24 H80 L84 32 H36 L40 24Z"
        stroke="#C4A35A"
        strokeWidth="1.4"
        fill="none"
      />
      <circle cx="60" cy="20" r="2.2" fill="#C4A35A" />
      <path
        d="M28 38 C28 38 60 28 92 38 L86 108 C86 108 60 124 34 108 L28 38Z"
        stroke="#C4A35A"
        strokeWidth="1.6"
      />
      <path
        d="M38 52 C48 46 72 46 82 52"
        stroke="#C4A35A"
        strokeWidth="1.2"
      />
      <path d="M44 70 V96" stroke="#C4A35A" strokeWidth="1.3" />
      <path d="M60 64 V100" stroke="#C4A35A" strokeWidth="1.5" />
      <path d="M76 70 V96" stroke="#C4A35A" strokeWidth="1.3" />
      <path d="M40 96 H48 L44 70 Z" stroke="#C4A35A" strokeWidth="1.1" />
      <path d="M56 100 H64 L60 64 Z" stroke="#C4A35A" strokeWidth="1.1" />
      <path d="M72 96 H80 L76 70 Z" stroke="#C4A35A" strokeWidth="1.1" />
      <circle cx="44" cy="66" r="1.6" fill="#C4A35A" />
      <circle cx="60" cy="60" r="1.8" fill="#C4A35A" />
      <circle cx="76" cy="66" r="1.6" fill="#C4A35A" />
      <path
        d="M22 118 C40 128 80 128 98 118"
        stroke="#C4A35A"
        strokeWidth="1.2"
      />
      <path d="M30 122 H90" stroke="#E8D5A3" strokeWidth="0.8" />
    </svg>
  );
}

export function Filigree({ className = "w-48" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 28" className={className} fill="none" aria-hidden>
      <path
        d="M4 14 H118"
        stroke="#C4A35A"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M202 14 H316"
        stroke="#C4A35A"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="160" cy="14" r="5" stroke="#C4A35A" strokeWidth="1.2" />
      <circle cx="160" cy="14" r="1.6" fill="#C4A35A" />
      <path
        d="M132 14 C140 6 152 6 160 14 C168 22 180 22 188 14"
        stroke="#C4A35A"
        strokeWidth="1"
      />
      <path
        d="M132 14 C140 22 152 22 160 14 C168 6 180 6 188 14"
        stroke="#C4A35A"
        strokeWidth="1"
      />
    </svg>
  );
}

export function CornerFlourish({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      aria-hidden
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path
        d="M8 8 H44"
        stroke="#C4A35A"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M8 8 V44"
        stroke="#C4A35A"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path d="M8 24 C24 24 24 8 40 8" stroke="#C4A35A" strokeWidth="1" />
      <circle cx="8" cy="8" r="2" fill="#C4A35A" />
    </svg>
  );
}

export function AureliaMark({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <circle cx="24" cy="18" r="8" stroke="#C4A35A" strokeWidth="1.4" />
      <circle cx="16.5" cy="30" r="8" stroke="#C4A35A" strokeWidth="1.4" />
      <circle cx="31.5" cy="30" r="8" stroke="#C4A35A" strokeWidth="1.4" />
    </svg>
  );
}
