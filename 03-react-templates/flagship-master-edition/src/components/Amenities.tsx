import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "./ui";

const items = [
  {
    title: "Infinity Swimming Pool",
    text: "An open-air infinity pool that catches the last of the Heritage Valley sun — loungers, towels and quiet.",
    icon: "M2 16c3 0 3-2 6-2s3 2 6 2 3-2 6-2M2 20c3 0 3-2 6-2s3 2 6 2 3-2 6-2M8 14V5a2 2 0 114 0M14 12V5a2 2 0 114 0",
  },
  {
    title: "Fine Dining",
    text: "Multi-cuisine dining with authentic Indian favourites, served indoors or on the outdoor terrace.",
    icon: "M6 3v8a3 3 0 006 0V3M9 11v10M17 3c-1.5 2-2 4-2 7h4v11",
  },
  {
    title: "Air-Conditioned Rooms",
    text: "Every one of our 62 rooms and suites is fully air-conditioned with modern climate control.",
    icon: "M12 2v20M4 6l16 12M20 6L4 18M12 2l-3 3M12 2l3 3M12 22l-3-3M12 22l3-3",
  },
  {
    title: "High-Speed Wi-Fi",
    text: "Complimentary high-speed wireless internet across rooms, lobby, banquet hall and the lawn.",
    icon: "M5 12a10 10 0 0114 0M8.5 15.5a5.5 5.5 0 017 0M12 19h.01",
  },
  {
    title: "24×7 Room Service",
    text: "A round-the-clock front desk, in-room dining and daily housekeeping, whenever you need it.",
    icon: "M4 19h16M6 19a6 6 0 0112 0M12 7V4M10 4h4M9 13h6",
  },
  {
    title: "Full Power Backup",
    text: "Uninterrupted power across the entire property — functions never pause here, not even for a second.",
    icon: "M13 2L4 14h7l-1 8 9-12h-7z",
  },
  {
    title: "Elevator Access",
    text: "Lift access to every floor, with ground-level entry for elders and guests with limited mobility.",
    icon: "M6 2h12v20H6zM12 2v20M9 7l-1.5 2h3zM15 17l1.5-2h-3z",
  },
  {
    title: "500+ Car Parking",
    text: "Secure, well-lit on-site parking for over five hundred vehicles, with attendants on event days.",
    icon: "M5 17h14M6 17l1.5-6a2 2 0 012-1.5h5a2 2 0 012 1.5L18 17M5 17v3h3v-3M16 17v3h3v-3M8 13h8",
  },
  {
    title: "Twin Kitchens",
    text: "Completely separate vegetarian and non-vegetarian kitchens — every preference respected.",
    icon: "M4 4h16v16H4zM4 10h16M9 4v6M14 14h3M7 14h3",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="relative bg-white py-20 sm:py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Facilities"
          title="Everything, thoughtfully provided"
          subtitle="The comforts you expect from a city hotel, with the space and ease of a resort."
        />

        <div className="mt-14 grid gap-px bg-gold-200/60 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.07} className="bg-white">
              <motion.div
                whileHover="hover"
                initial="rest"
                className="group relative h-full overflow-hidden bg-white p-7 sm:p-9"
              >
                <motion.div
                  variants={{ rest: { scale: 0, opacity: 0 }, hover: { scale: 1, opacity: 1 } }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold-100"
                />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-9 w-9 text-gold-500 transition-transform duration-700 group-hover:-rotate-6 group-hover:scale-110 sm:h-10 sm:w-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={it.icon} />
                    </svg>
                    <span className="font-serif text-sm text-gold-400">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-light text-ink sm:text-2xl">{it.title}</h3>
                  <p className="mt-2.5 font-sans text-[13px] font-light leading-relaxed text-ink/60 sm:text-sm">{it.text}</p>
                  <motion.div
                    variants={{ rest: { width: 28 }, hover: { width: "100%" } }}
                    transition={{ duration: 0.55 }}
                    className="mt-6 h-px bg-gold-500"
                  />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
