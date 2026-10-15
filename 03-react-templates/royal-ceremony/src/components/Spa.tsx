import { useInView } from "../hooks/useInView";
import { Filigree } from "./Ornaments";

const rituals = [
  { n: "I", title: "Marble Waters", copy: "A circular pool warmed to the skin, gold mosaic underfoot." },
  { n: "II", title: "The Gold Steam", copy: "Silent hammam. Citrus oil. Time measured in breaths." },
  { n: "III", title: "Ivory Rest", copy: "Linen, low light, and tea of white peony after the rite." },
];

export default function Spa() {
  const { ref, visible } = useInView<HTMLElement>(0.15);

  return (
    <section id="sanctuary" ref={ref} className="relative bg-[#fffcf7] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div
            className="lg:col-span-5"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(20px)",
              transition: "all 0.9s ease",
            }}
          >
            <p className="font-display text-[10px] tracking-[0.48em] text-[#C4A35A] uppercase">
              Body & silence
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-[0.12em] uppercase text-[#1c1812] sm:text-5xl">
              The Sanctuary
            </h2>
            <p className="font-script mt-3 text-3xl text-[#8e6f2e]">Water remembers</p>
            <Filigree className="mt-5 w-44" />
            <p className="mt-6 font-body text-xl leading-relaxed text-[#4a4236]">
              Beneath the west wing, steam lifts from Carrara. The spa is not an amenity — it is a
              chapel of heat and gold, where the palace teaches you how to be still.
            </p>
            <div className="mt-10 space-y-6">
              {rituals.map((r) => (
                <div key={r.n} className="flex gap-5 border-t border-[#e8d5a3]/60 pt-5">
                  <span className="font-display text-sm text-[#C4A35A]">{r.n}</span>
                  <div>
                    <h3 className="font-display text-sm tracking-[0.18em] uppercase text-[#1c1812]">
                      {r.title}
                    </h3>
                    <p className="mt-1 font-body text-lg text-[#4a4236]">{r.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative lg:col-span-7"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(24px)",
              transition: "all 1s ease 0.15s",
            }}
          >
            <div className="gold-frame">
              <img
                src="images/palace-spa.jpg"
                alt="The Sanctuary spa"
                className="h-[560px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-4 hidden max-w-xs bg-[#1c1812] p-6 text-[#F6ECC8] sm:block lg:-left-10">
              <p className="font-script text-3xl text-[#E8D5A3]">By appointment</p>
              <p className="mt-2 font-body text-lg leading-relaxed">
                Two guests. Ninety minutes. The palace closes the door behind you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
