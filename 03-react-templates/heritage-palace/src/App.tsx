import { useEffect, useState } from "react";
import OpeningCeremony from "./components/OpeningCeremony";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FactStrip from "./components/FactStrip";
import Journey from "./components/Journey";
import Heritage from "./components/Heritage";
import Chambers from "./components/Chambers";
import Celebrations from "./components/Dining";
import Grounds from "./components/Gardens";
import Arrival from "./components/Spa";
import Reserve from "./components/Reserve";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import { SITE } from "./data/site";

export default function App() {
  const [ceremony, setCeremony] = useState(true);

  useEffect(() => {
    document.body.style.overflow = ceremony ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ceremony]);

  return (
    <div className="bg-[#fffcf7] text-[#1c1812]">
      <Cursor />
      {ceremony && <OpeningCeremony onComplete={() => setCeremony(false)} />}
      <Navbar />
      <main>
        <Hero reveal />
        <FactStrip />
        <Journey />
        <Heritage />
        <Chambers />
        <Celebrations />
        <Grounds />
        <Arrival />
        <Reserve />
      </main>
      <Footer />

      {!ceremony && (
        <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-[#e8d5a3] bg-[#fffcf7]/95 px-3 py-2.5 backdrop-blur-md md:hidden">
          <a
            href={`tel:${SITE.phoneRaw[0]}`}
            className="flex-1 rounded-full border border-[#C4A35A]/60 py-3 text-center font-display text-[10px] tracking-[0.2em] uppercase text-[#8e6f2e]"
          >
            Call
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="flex-1 rounded-full border border-[#C4A35A]/60 py-3 text-center font-display text-[10px] tracking-[0.2em] uppercase text-[#8e6f2e]"
          >
            Email
          </a>
          <a href="#reserve" className="btn-gold flex-[1.2] rounded-full py-3 text-center font-display text-[10px]">
            Reserve
          </a>
        </div>
      )}
      <style>{`@media (max-width: 767px) { body { padding-bottom: 60px; } }`}</style>
    </div>
  );
}
