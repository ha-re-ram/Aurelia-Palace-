import { Crest } from "./Intro";
import { Reveal } from "./ui";
import { SITE } from "../data/site";

const nav = [
  { label: "The Resort", href: "#resort" },
  { label: "Rooms & Suites", href: "#rooms" },
  { label: "Celebrations", href: "#celebrations" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white pt-16 sm:pt-20">
      <div className="gold-line absolute left-0 top-0 h-px w-full" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Crest className="h-11 w-11 shrink-0 text-gold-500 sm:h-12 sm:w-12" />
              <div className="leading-none">
                <span className="block font-serif text-xl tracking-[0.16em] text-ink sm:text-2xl">AURELIA PALACE</span>
                <span className="mt-1 block font-sans text-[8px] uppercase tracking-[0.3em] text-gold-600 sm:text-[9px]">
                  {SITE.tagline}
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-sm font-serif text-base italic leading-relaxed text-ink/60 sm:text-lg">
              A luxury resort, boutique hotel and celebration venue on Royal Highway — bringing grand hospitality to Heritage Valley Steel
              City.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Infinity Pool", "62 Rooms", "Banquet & Lawn", "500+ Parking"].map((t) => (
                <span key={t} className="border border-gold-200 px-2.5 py-1 font-sans text-[9px] uppercase tracking-[0.2em] text-gold-700">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-3">
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold-600">Explore</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-1">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="group relative font-sans text-sm font-light text-ink/70 transition-colors hover:text-ink">
                    {l.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-500 transition-all duration-500 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-4">
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold-600">Reach Us</p>
            <address className="mt-5 space-y-3 not-italic">
              <p className="font-sans text-sm font-light leading-relaxed text-ink/70">
                {SITE.addressLine1}
                <br />
                {SITE.addressLine2}
                <br />
                {SITE.pin}
              </p>
              <div className="flex flex-col gap-1.5">
                {SITE.phones.map((p, i) => (
                  <a key={p} href={`tel:${SITE.phoneRaw[i]}`} className="font-serif text-lg text-ink transition-colors hover:text-gold-600">
                    {p}
                  </a>
                ))}
              </div>
              <a
                href={`mailto:${SITE.email}`}
                className="block break-all font-sans text-sm text-ink/70 transition-colors hover:text-gold-600"
              >
                {SITE.email}
              </a>
            </address>
            <div className="mt-5 flex gap-4">
              {["Instagram", "Facebook", "Justdial"].map((s) => (
                <a key={s} href="#" className="font-sans text-[10px] uppercase tracking-[0.25em] text-ink/50 transition-colors hover:text-gold-600">
                  {s}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gold-200/60 py-7 text-center md:flex-row md:text-left">
          <p className="font-sans text-[9px] uppercase tracking-[0.25em] text-ink/40 sm:text-[10px]">
            © {new Date().getFullYear()} Aurelia Palace, Narayanpur · All rights reserved
          </p>
          <p className="font-serif text-sm italic text-gold-600">Atithi Devo Bhava — our guest is divine.</p>
        </div>
      </div>

      <div className="pointer-events-none -mb-2 select-none overflow-hidden text-center font-serif text-[19vw] font-light leading-[0.72] text-gold-100/90">
        Aurelia
      </div>
    </footer>
  );
}
