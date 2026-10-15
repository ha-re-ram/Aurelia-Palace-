import { useEffect, useState } from "react";
import { AureliaMark } from "./Ornaments";

const links = [
  { href: "#palace", label: "The Palace" },
  { href: "#chambers", label: "Chambers" },
  { href: "#table", label: "The Table" },
  { href: "#gardens", label: "Gardens" },
  { href: "#sanctuary", label: "Sanctuary" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
          scrolled ? "nav-scrolled py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3">
            <AureliaMark className="h-8 w-8" />
            <span
              className={`font-display text-[11px] tracking-[0.38em] uppercase ${
                scrolled ? "text-[#1c1812]" : "text-[#F6ECC8]"
              }`}
            >
              Aurelia Palace
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`font-display text-[10px] tracking-[0.28em] uppercase transition-colors ${
                  scrolled
                    ? "text-[#4a4236] hover:text-[#8e6f2e]"
                    : "text-[#F3E6C4]/80 hover:text-[#F6ECC8]"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#reserve"
              className="btn-gold hidden rounded-full px-5 py-2.5 font-display text-[10px] sm:inline-block"
            >
              Reserve
            </a>
            <button
              aria-label="Menu"
              onClick={() => setOpen(true)}
              className={`lg:hidden ${scrolled ? "text-[#1c1812]" : "text-[#F6ECC8]"}`}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M4 7h16M4 12h16M4 17h10" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[70] bg-[#fffcf7] flex flex-col">
          <div className="flex items-center justify-between px-6 py-6">
            <span className="font-display text-[11px] tracking-[0.38em] uppercase text-[#1c1812]">
              Aurelia Palace
            </span>
            <button aria-label="Close" onClick={() => setOpen(false)} className="text-[#1c1812]">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M7 7l14 14M21 7L7 21" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-8">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl tracking-[0.22em] uppercase text-[#1c1812] fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reserve"
              onClick={() => setOpen(false)}
              className="btn-gold mt-4 rounded-full px-8 py-3 font-display text-[11px]"
            >
              Reserve a Chamber
            </a>
          </div>
        </div>
      )}
    </>
  );
}
