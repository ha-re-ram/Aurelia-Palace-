import { useEffect, useState } from "react";
import OpeningCeremony from "./components/OpeningCeremony";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Heritage from "./components/Heritage";
import Chambers from "./components/Chambers";
import Dining from "./components/Dining";
import Gardens from "./components/Gardens";
import Spa from "./components/Spa";
import Guestbook from "./components/Guestbook";
import Reserve from "./components/Reserve";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

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
        <Journey />
        <Heritage />
        <Chambers />
        <Dining />
        <Gardens />
        <Spa />
        <Guestbook />
        <Reserve />
      </main>
      <Footer />
    </div>
  );
}
