import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "./ui";

const VENUES = [
  {
    name: "La Maison d'Or",
    tagline: "Fine Dining & Heritage Recipes",
    desc: "A symphony of age-old regional culinary traditions and contemporary global fare, prepared with farm-fresh organic spices and distinct vegetarian kitchens.",
    img: "images/palace-dining.jpg",
    timing: "Lunch 12:30 PM – 3:30 PM · Dinner 7:30 PM – 11:00 PM",
  },
  {
    name: "The Starlight Courtyard",
    tagline: "Open-Air Garden Dining",
    desc: "Bespoke candlelit dining set amidst illuminated sandstone fountains and fragrant jasmine gardens, accompanied by live instrumental classical acoustics.",
    img: "images/dining.jpg",
    timing: "Evenings 6:30 PM – Midnight",
  },
  {
    name: "Royal Banquet Catering",
    tagline: "Grand Wedding Feasts",
    desc: "Customizable multi-course banquet menus serving up to 2,000 wedding guests seamlessly with live counters, dessert stations, and dedicated beverage bars.",
    img: "images/ballroom.jpg",
    timing: "Available for Weddings & Private Galas",
  },
];

export default function Dining() {
  return (
    <section id="dining" className="relative overflow-hidden bg-ivory py-20 sm:py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Culinary Heritage"
          title="Flavours Worth Celebrating"
          subtitle="From grand wedding buffets to intimate candlelit courtyard dinners, our master chefs curate unforgettable feasts with separate dedicated vegetarian and multi-cuisine kitchens."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {VENUES.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.15}>
              <div className="group flex h-full flex-col overflow-hidden rounded-sm border border-gold-200/60 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-gold-400 hover:shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={v.img}
                    alt={v.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-gold-500/90 px-3 py-1 font-sans text-[10px] tracking-wider uppercase text-white backdrop-blur-sm">
                    {v.tagline}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <div>
                    <h3 className="font-serif text-2xl font-light text-ink group-hover:text-gold-700 transition-colors">
                      {v.name}
                    </h3>
                    <p className="mt-3 font-serif text-sm leading-relaxed text-ink/70">
                      {v.desc}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-gold-200/50 pt-4 font-sans text-[11px] tracking-wider text-gold-700">
                    ⏱ {v.timing}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
