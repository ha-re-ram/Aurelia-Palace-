import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import OpeningCeremony from "./components/OpeningCeremony";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FactStrip from "./components/FactStrip";
import Welcome from "./components/Welcome";
import Rooms from "./components/Rooms";
import Celebrations from "./components/Celebrations";
import Dining from "./components/Dining";
import Gallery from "./components/Gallery";
import Amenities from "./components/Amenities";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileBar from "./components/MobileBar";
import BookingModal from "./components/BookingModal";
import EventInquiryModal from "./components/EventInquiryModal";

export default function App() {
  const [entered, setEntered] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("Presidential Suite");

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

  const handleComplete = useCallback(() => {
    setEntered(true);
  }, []);

  const openBooking = (roomName?: string) => {
    if (roomName) setSelectedRoom(roomName);
    setBookingOpen(true);
  };

  const openInquiry = () => {
    setInquiryOpen(true);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-ink">
      <Cursor />

      {!entered && <OpeningCeremony onComplete={handleComplete} />}

      {/* Spring Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400"
      />

      {/* Ambient Mouse Glow */}
      <motion.div
        style={{ x: mx, y: my }}
        className="pointer-events-none fixed left-0 top-0 z-[55] hidden h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-300/15 blur-3xl lg:block"
      />

      <Navbar visible={entered} />

      <main>
        <Hero started={entered} />
        <FactStrip />
        <Welcome />
        <Rooms />
        <Celebrations />
        <Dining />
        <Gallery />
        <Amenities />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <MobileBar visible={entered} />

      {/* Booking and Event Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialRoom={selectedRoom}
      />
      <EventInquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />

      <div className="h-14 xl:hidden" />
    </div>
  );
}
