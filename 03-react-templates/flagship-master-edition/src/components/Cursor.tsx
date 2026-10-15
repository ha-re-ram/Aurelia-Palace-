import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -40, y: -40 });
  const [hot, setHot] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement | null;
      setHot(Boolean(t?.closest("a, button, input, select, textarea")));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="cursor-ring hidden md:block"
      style={{
        left: pos.x,
        top: pos.y,
        transform: `translate(-50%, -50%) scale(${hot ? 1.45 : 1})`,
        background: hot ? "rgba(196,163,90,0.12)" : "transparent",
      }}
    />
  );
}
