export const SITE = {
  name: "Aurelia Palace",
  tagline: "Luxury Resort · Boutique Hotel · Celebration Venue",
  city: "Royal Heritage Valley",
  state: "Heritage Valley",
  addressLine1: "100 Aurelia Boulevard, Royal Heritage Valley",
  addressLine2: "The Palace Estate, Heritage District 90210",
  pin: "Heritage Valley Estate, HV 90210",
  fullAddress:
    "100 Aurelia Boulevard, Royal Heritage Valley, The Palace Estate, Heritage District 90210, Grand Estate 90210",
  phones: ["+1 (555) 789-2345", "+1 (555) 789-2340", "+1 (555) 789-2341"],
  phoneRaw: ["+15557892345", "+15557892340", "+15557892341"],
  email: "reservations@aureliapalace.com",
  mapsQuery: "Aurelia+Palace+Royal Valley+Heritage District+Heritage Valley+Steel+City+Heritage Valley+90210",
  checkIn: "12:00 PM",
  checkOut: "10:00 AM",
  distances: [
    { label: "Grand Valley Airport", value: "6.4 km" },
    { label: "Heritage District City Centre", value: "7.6 km" },
    { label: "On Royal Highway", value: "Highway access" },
  ],
} as const;

export const ROOMS = [
  {
    name: "Deluxe Room",
    price: "₹3,137",
    size: "Queen / King bed",
    view: "Resort View",
    img: "images/suite.jpg",
    desc: "A calm, light-filled retreat with air-conditioning, high-speed Wi-Fi, LED television and 24-hour room service — our most-loved comfort.",
    tags: ["Air Conditioned", "Free Wi-Fi", "Room Service", "LED TV"],
  },
  {
    name: "Deluxe Garden View",
    price: "₹3,365",
    size: "King bed",
    view: "Garden View",
    img: "images/garden.jpg",
    desc: "Wake to green lawns and open skies. Warm wooden tones, soft linen and a window seat made for slow mornings.",
    tags: ["Garden Facing", "Air Conditioned", "Free Wi-Fi", "Daily Housekeeping"],
  },
  {
    name: "Executive Garden View",
    price: "₹3,565",
    size: "King bed · Lounge area",
    view: "Garden & Pool View",
    img: "images/lobby.jpg",
    desc: "Our most spacious category — an extended lounge corner, premium bath amenities and sweeping views over the lawn and infinity pool.",
    tags: ["Pool View", "Lounge Corner", "Premium Bath", "Mini Fridge"],
  },
  {
    name: "Executive Twin Bed",
    price: "₹3,365",
    size: "Two single beds",
    view: "Resort View",
    img: "images/pool.jpg",
    desc: "Designed for colleagues and travelling companions — two generous beds, a work desk and the same Aurelia warmth.",
    tags: ["Twin Beds", "Work Desk", "Air Conditioned", "Free Wi-Fi"],
  },
] as const;

export const VENUES = [
  {
    title: "The Grand Banquet",
    stat: "12,000",
    unit: "sq. ft. indoor",
    desc: "A fully air-conditioned pillar-supported banquet hall for weddings, receptions, sangeet nights and corporate conferences.",
    img: "images/ballroom.jpg",
  },
  {
    title: "The Celebration Lawn",
    stat: "30,000",
    unit: "sq. ft. open-air",
    desc: "An expansive open lawn under the Heritage Valley sky — baraat, mandap, haldi and sangeet, all with room to breathe.",
    img: "images/lawn.jpg",
  },
  {
    title: "Twin Kitchens",
    stat: "2",
    unit: "separate kitchens",
    desc: "Strictly separate vegetarian and non-vegetarian kitchens, so every tradition and preference is honoured with care.",
    img: "images/dining.jpg",
  },
  {
    title: "Guest Parking",
    stat: "500+",
    unit: "vehicle capacity",
    desc: "Secure, well-lit on-site parking for more than five hundred vehicles — arrivals without a single worry.",
    img: "images/hero.jpg",
  },
] as const;

export const FAQS = [
  {
    q: "What are the check-in and check-out timings?",
    a: "Check-in begins at 12:00 PM and check-out is at 10:00 AM. Early check-in and late check-out can be arranged subject to availability — please speak with our front desk.",
  },
  {
    q: "What documents are required at check-in?",
    a: "A valid government-issued photo ID is mandatory for the primary guest, who must be at least 18 years of age. Local IDs are accepted.",
  },
  {
    q: "Are pets allowed at Aurelia Palace?",
    a: "We regret that pets are not permitted anywhere on the property, including the lawn and banquet areas.",
  },
  {
    q: "How far is Aurelia Palace from the airport?",
    a: "We are approximately 6.4 km from Grand Valley Airport and 7.6 km from the Heritage District city centre, located directly on Royal Highway near Mohan Timber, Royal Valley.",
  },
  {
    q: "Do you offer both vegetarian and non-vegetarian catering?",
    a: "Yes. We maintain completely separate vegetarian and non-vegetarian kitchens. Indicative banquet pricing is ₹1,200 per veg plate and ₹1,500 per non-veg plate, customisable to your menu.",
  },
  {
    q: "Is there a swimming pool and power backup?",
    a: "Yes — an infinity swimming pool, full power backup, elevator access, daily housekeeping and 24-hour front desk are all available to resident guests.",
  },
] as const;
