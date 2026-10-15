import { Crest, Filigree, AureliaMark } from "./Ornaments";

export default function Footer() {
  return (
    <footer className="relative bg-[#1c1812] text-[#F6ECC8]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <Crest className="h-16 w-16" />
          <p className="mt-6 font-display text-xs tracking-[0.5em] uppercase text-[#E8D5A3]">
            Aurelia Palace
          </p>
          <Filigree className="mt-5 w-48" />
          <p className="font-script mt-5 text-3xl text-[#C4A35A]">Until the gates open again</p>
        </div>

        <div className="mt-14 grid gap-10 border-t border-[#C4A35A]/20 pt-10 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="font-display text-[10px] tracking-[0.3em] uppercase text-[#C4A35A]">Visit</p>
            <p className="mt-3 font-body text-lg leading-relaxed text-[#F3E6C4]/80">
              The Crown Estate
              <br />
              Loire Valley, France
            </p>
          </div>
          <div className="sm:text-center">
            <p className="font-display text-[10px] tracking-[0.3em] uppercase text-[#C4A35A]">
              Correspondence
            </p>
            <p className="mt-3 font-body text-lg text-[#F3E6C4]/80">
              stay@aureliapalace.com
              <br />
              +33 1 84 00 18 12
            </p>
          </div>
          <div className="sm:text-right">
            <p className="font-display text-[10px] tracking-[0.3em] uppercase text-[#C4A35A]">
              The House
            </p>
            <div className="mt-3 flex flex-col gap-1 font-body text-lg text-[#F3E6C4]/80">
              <a href="#palace" className="hover:text-[#E8D5A3]">The Palace</a>
              <a href="#chambers" className="hover:text-[#E8D5A3]">Chambers</a>
              <a href="#reserve" className="hover:text-[#E8D5A3]">Reserve</a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#C4A35A]/15 pt-8 sm:flex-row">
          <span className="flex items-center gap-2 font-display text-[9px] tracking-[0.28em] uppercase text-[#C4A35A]/80">
            <AureliaMark className="h-5 w-5" />
            Aurelia Palace · Private Estate
          </span>
          <p className="font-body text-sm text-[#F3E6C4]/50">© {new Date().getFullYear()} The House of Aurelia</p>
        </div>
      </div>
    </footer>
  );
}
