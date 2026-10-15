import { Crest, Filigree, AureliaMark } from "./Ornaments";
import { SITE } from "../data/site";

export default function Footer() {
  return (
    <footer className="relative bg-[#1c1812] text-[#F6ECC8]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="flex flex-col items-center text-center">
          <Crest className="h-14 w-14 sm:h-16 sm:w-16" />
          <p className="mt-5 font-display text-[11px] tracking-[0.42em] uppercase text-[#E8D5A3] sm:text-xs sm:tracking-[0.5em]">
            Aurelia Palace
          </p>
          <Filigree className="mt-5 w-40 sm:w-48" />
          <p className="font-script mt-4 text-2xl text-[#C4A35A] sm:text-3xl">
            See you at the gate on Royal Highway
          </p>
        </div>

        <div className="mt-12 grid gap-8 border-t border-[#C4A35A]/20 pt-9 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-[10px] tracking-[0.26em] uppercase text-[#C4A35A]">Address</p>
            <p className="mt-3 font-body text-base leading-relaxed text-[#F3E6C4]/80 sm:text-lg">
              {SITE.addressLine1}
              <br />
              {SITE.addressLine2}
            </p>
            <a
              href={SITE.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block font-display text-[10px] tracking-[0.2em] uppercase text-[#E8D5A3] underline underline-offset-4"
            >
              Directions
            </a>
          </div>

          <div>
            <p className="font-display text-[10px] tracking-[0.26em] uppercase text-[#C4A35A]">Call</p>
            <div className="mt-3 flex flex-col gap-1.5 font-body text-base sm:text-lg">
              {SITE.phones.map((p, i) => (
                <a key={p} href={`tel:${SITE.phoneRaw[i]}`} className="transition-colors hover:text-[#E8D5A3]">
                  {p}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-[10px] tracking-[0.26em] uppercase text-[#C4A35A]">
              Write
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-3 block break-all font-body text-base transition-colors hover:text-[#E8D5A3] sm:text-lg"
            >
              {SITE.email}
            </a>
            <p className="mt-3 font-body text-sm text-[#F3E6C4]/60 sm:text-base">
              GSTIN {SITE.gst}
            </p>
          </div>

          <div>
            <p className="font-display text-[10px] tracking-[0.26em] uppercase text-[#C4A35A]">
              The House
            </p>
            <div className="mt-3 flex flex-col gap-1.5 font-body text-base sm:text-lg">
              <a href="#chambers" className="hover:text-[#E8D5A3]">Rooms & rates</a>
              <a href="#celebrations" className="hover:text-[#E8D5A3]">Banquet & lawn</a>
              <a href="#arrival" className="hover:text-[#E8D5A3]">Check-in & rules</a>
              <a href="#reserve" className="hover:text-[#E8D5A3]">Reserve</a>
            </div>
          </div>
        </div>

        <div className="mt-11 flex flex-col items-center justify-between gap-3 border-t border-[#C4A35A]/15 pt-7 text-center sm:flex-row sm:text-left">
          <span className="flex items-center gap-2 font-display text-[9px] tracking-[0.24em] uppercase text-[#C4A35A]/80">
            <AureliaMark className="h-5 w-5" />
            {SITE.kind}
          </span>
          <p className="font-body text-sm text-[#F3E6C4]/50">
            © {new Date().getFullYear()} Aurelia Palace · {SITE.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
