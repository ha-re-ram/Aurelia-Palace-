import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Rooms from "./components/Rooms";
import Celebrations from "./components/Celebrations";
import Gallery from "./components/Gallery";
import Amenities from "./components/Amenities";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileBar from "./components/MobileBar";

export default function App() {
  const [entered, setEntered] = useState(false);
  const [started, setStarted] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  useEffect(() => {
    document.body.style.overflow = entered ? "" : "hidden";
    if (!entered) window.scrollTo(0, 0);
  }, [entered]);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 3100);
    return () => clearTimeout(t);
  }, []);

  const handleComplete = useCallback(() => {
    setEntered(true);
    setStarted(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-ink">
      <Intro onComplete={handleComplete} />

      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300"
      />

      <motion.div
        style={{ x: mx, y: my }}
        className="pointer-events-none fixed left-0 top-0 z-[55] hidden h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-300/20 blur-3xl lg:block"
      />

      <Navbar visible={started} />

      <main>
        <Hero started={started} />
        <Welcome />
        <Rooms />
        <Celebrations />
        <Gallery />
        <Amenities />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <MobileBar visible={entered} />
      <div className="h-14 xl:hidden" />
    </div>
  );
}
