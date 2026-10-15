import { useInView } from "../hooks/useInView";
import { Filigree } from "./Ornaments";

const notes = [
  {
    q: "I did not check in. I was received. The difference is the entire palace.",
    a: "Comtesse de V. · Aurelia Suite",
  },
  {
    q: "At dusk the ballroom does not need music. The light is enough.",
    a: "J. Moreau · The Sovereign Quarters",
  },
  {
    q: "I still hear the fountain when I close my eyes in the city. That is Aurelia.",
    a: "A. Laurent · Celestine Chamber",
  },
];

export default function Guestbook() {
  const { ref, visible } = useInView<HTMLElement>(0.15);

  return (
    <section ref={ref} className="bg-[#fffcf7] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="text-center">
          <p className="font-display text-[10px] tracking-[0.48em] text-[#C4A35A] uppercase">
            From the guest book
          </p>
          <h2 className="mt-4 font-display text-3xl tracking-[0.14em] uppercase text-[#1c1812] sm:text-4xl">
            Voices in the halls
          </h2>
          <Filigree className="mx-auto mt-6 w-48" />
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {notes.map((n, i) => (
            <blockquote
              key={n.a}
              className="gold-border bg-white p-8"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(18px)",
                transition: `all 0.8s ease ${i * 0.12}s`,
              }}
            >
              <p className="font-script text-3xl leading-snug text-[#8e6f2e]">“</p>
              <p className="font-body text-xl italic leading-relaxed text-[#1c1812]">{n.q}</p>
              <p className="mt-6 font-display text-[10px] tracking-[0.25em] uppercase text-[#C4A35A]">
                {n.a}
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
