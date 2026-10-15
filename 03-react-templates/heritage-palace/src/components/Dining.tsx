import { useInView } from "../hooks/useInView";
import { Filigree } from "./Ornaments";
import Img from "./Img";
import { SITE } from "../data/site";

const figures = [
  { v: "12,000", u: "sq. ft.", t: "Indoor banquet hall", d: "Air-conditioned, theatre or cluster seating, chandelier-lit." },
  { v: "30,000", u: "sq. ft.", t: "Celebration lawn", d: "Weddings, sangeet, receptions and corporate days under open sky." },
  { v: "500+", u: "vehicles", t: "On-site parking", d: "Everyone arrives together and still finds a place to leave the car." },
];

export default function Dining() {
  const { ref, visible } = useInView<HTMLElement>(0.12);

  return (
    <section id="celebrations" ref={ref} className="relative overflow-hidden bg-[#f7f1e6] py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className="max-w-2xl"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateX(-24px)",
            transition: "all 1s ease",
          }}
        >
          <p className="font-display text-[10px] tracking-[0.4em] text-[#C4A35A] uppercase sm:tracking-[0.48em]">
            Weddings · Receptions · Conferences
          </p>
          <h2 className="mt-4 font-display text-3xl tracking-[0.1em] uppercase text-[#1c1812] sm:text-5xl sm:tracking-[0.12em]">
            The Celebrations
          </h2>
          <p className="font-script mt-2 text-3xl text-[#8e6f2e]">Where Heritage Valley gathers</p>
          <Filigree className="mt-5 w-40 sm:mt-6 sm:w-44" />
          <p className="mt-5 font-body text-lg leading-relaxed text-[#4a4236] sm:text-xl">
            One address holds the whole calendar — baraat, haldi, reception, naming ceremony, silver
            jubilee, annual day. The kitchens are separate by design: vegetarian and
            non-vegetarian never cross, so every guest is served without a second thought.
          </p>
        </div>

        <div className="mt-9 grid gap-6 sm:mt-14 lg:grid-cols-12">
          <div
            className="gold-frame relative overflow-hidden lg:col-span-7"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(24px)",
              transition: "all 1s ease 0.1s",
            }}
          >
            <Img
              src="https://images.pexels.com/photos/9080098/pexels-photo-9080098.jpeg?auto=compress&cs=tinysrgb&w=1600"
              fallback="images/ballroom.jpg"
              alt="The indoor banquet hall at Aurelia Palace"
              className="h-72 w-full object-cover sm:h-[420px] lg:h-full"
            />
            <div className="absolute inset-x-4 bottom-4 bg-[#fffcf7]/92 p-4 backdrop-blur-sm sm:inset-x-6 sm:bottom-6 sm:p-5">
              <p className="font-display text-[9px] tracking-[0.28em] text-[#C4A35A] uppercase">
                Indoor banquet
              </p>
              <p className="mt-1 font-body text-lg leading-snug text-[#1c1812] sm:text-xl">
                12,000 sq. ft. of air-conditioned hall, ready for 600 guests at theatre seating.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:col-span-5">
            <div
              className="overflow-hidden bg-white gold-border"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(24px)",
                transition: "all 1s ease 0.2s",
              }}
            >
              <Img
                src="https://images.pexels.com/photos/26975888/pexels-photo-26975888.jpeg?auto=compress&cs=tinysrgb&w=1400"
                fallback="images/palace-garden.jpg"
                alt="Celebration lawn at Aurelia Palace"
                className="h-44 w-full object-cover sm:h-52"
              />
              <div className="p-5">
                <p className="font-display text-[10px] tracking-[0.2em] uppercase text-[#1c1812]">
                  The celebration lawn
                </p>
                <p className="mt-2 font-body text-base text-[#4a4236] sm:text-lg">
                  30,000 sq. ft. of open ground for the pheras, the dance floor and the last car
                  leaving at 2 AM.
                </p>
              </div>
            </div>

            <div
              className="bg-[#1c1812] p-6 text-[#F6ECC8] sm:p-7"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(24px)",
                transition: "all 1s ease 0.3s",
              }}
            >
              <div className="grid grid-cols-3 gap-3">
                {figures.map((f) => (
                  <div key={f.t}>
                    <p className="gold-shimmer font-display text-xl leading-none sm:text-3xl">{f.v}</p>
                    <p className="mt-1 font-display text-[8px] tracking-[0.2em] uppercase text-[#C4A35A]">
                      {f.u}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5 space-y-2 border-t border-[#C4A35A]/30 pt-4">
                {figures.map((f) => (
                  <p key={f.t} className="font-body text-base leading-snug text-[#F3E6C4]/85">
                    <span className="font-display text-[10px] tracking-[0.16em] uppercase text-[#E8D5A3]">
                      {f.t}
                    </span>{" "}
                    — {f.d}
                  </p>
                ))}
              </div>
              <a
                href={`mailto:${SITE.email}?subject=Event%20enquiry%20—%20Aurelia%20Palace`}
                className="btn-gold mt-6 inline-block w-full rounded-full py-3 text-center font-display text-[10px]"
              >
                Enquire for your date
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
