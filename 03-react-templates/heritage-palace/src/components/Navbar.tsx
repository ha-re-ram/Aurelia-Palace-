import { useEffect, useState } from "react";
import { AureliaMark } from "./Ornaments";
import { SITE } from "../data/site";

const links = [
  { href: "#palace", label: "The Walk" },
  { href: "#chambers", label: "Rooms" },
  { href: "#celebrations", label: "Celebrations" },
  { href: "#grounds", label: "Pool & Grounds" },
  { href: "#arrival", label: "Arrival" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-scrolled py-2.5 sm:py-3" : "bg-transparent py-3 sm:py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5 min-w-0">
            <AureliaMark className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" />
            <span
              className={`font-display text-[10px] tracking-[0.28em] uppercase sm:text-[11px] sm:tracking-[0.38em] ${
                scrolled ? "text-[#1c1812]" : "text-[#F6ECC8]"
              }`}
            >
              Aurelia Palace
            </span>
          </a>

          <nav className="hidden items-center gap-7 xl:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`font-display text-[10px] tracking-[0.24em] uppercase transition-colors ${
                  scrolled
                    ? "text-[#4a4236] hover:text-[#8e6f2e]"
                    : "text-[#F3E6C4]/85 hover:text-[#F6ECC8]"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${SITE.phoneRaw[0]}`}
              className={`rounded-full border px-3 py-2 font-display text-[9px] tracking-[0.16em] uppercase transition-colors sm:px-4 sm:text-[10px] sm:tracking-[0.2em] ${
                scrolled
                  ? "border-[#C4A35A]/60 text-[#8e6f2e]"
                  : "border-[#E8D5A3]/60 text-[#F3E6C4]"
              }`}
            >
              Call
            </a>
            <a
              href="#reserve"
              className="btn-gold hidden rounded-full px-5 py-2.5 font-display text-[10px] sm:inline-block"
            >
              Reserve
            </a>
            <button
              aria-label="Menu"
              onClick={() => setOpen(true)}
              className={`p-1.5 xl:hidden ${scrolled ? "text-[#1c1812]" : "text-[#F6ECC8]"}`}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M4 7h16M4 12h16M4 17h10" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[70] flex flex-col bg-[#fffcf7]">
          <div className="flex items-center justify-between px-5 py-5 sm:px-6">
            <span className="font-display text-[10px] tracking-[0.3em] uppercase text-[#1c1812]">
              Aurelia Palace
            </span>
            <button aria-label="Close" onClick={() => setOpen(false)} className="p-2 text-[#1c1812]">
              <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M7 7l12 12M19 7L7 19" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-6 overflow-y-auto px-6 pb-8">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="fade-up font-display text-lg tracking-[0.2em] uppercase text-[#1c1812]"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reserve"
              onClick={() => setOpen(false)}
              className="btn-gold mt-3 w-full max-w-xs rounded-full px-8 py-3.5 text-center font-display text-[11px]"
            >
              Reserve a room
            </a>
            <div className="mt-4 w-full max-w-xs border-t border-[#e8d5a3] pt-5 text-center">
              {SITE.phones.map((p, i) => (
                <a
                  key={p}
                  href={`tel:${SITE.phoneRaw[i]}`}
                  className="block font-body text-lg text-[#4a4236]"
                >
                  {p}
                </a>
              ))}
              <a href={`mailto:${SITE.email}`} className="mt-2 block font-body text-base text-[#8e6f2e]">
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
