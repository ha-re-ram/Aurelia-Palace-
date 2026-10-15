export interface Room {
  id: string;
  name: string;
  subtitle: string;
  pricePerNight: number;
  sizeSqFt: number;
  bedType: string;
  maxGuests: number;
  view: string;
  description: string;
  features: string[];
  imagePlaceholder: {
    title: string;
    accent: string;
    type: 'deluxe' | 'executive' | 'garden' | 'twin';
  };
}

export interface VenueSpace {
  id: string;
  name: string;
  tagline: string;
  capacitySeated: number;
  capacityFloating: number;
  areaSqFt: number;
  highlight: string;
  description: string;
  features: string[];
  type: 'ballroom' | 'lawn' | 'combined';
}

export interface Amenity {
  id: string;
  name: string;
  category: string;
  description: string;
  highlight: string;
  iconName: 'pool' | 'car' | 'wifi' | 'utensils' | 'zap' | 'shield' | 'clock' | 'sparkles';
}

export interface Review {
  id: string;
  author: string;
  role: string;
  location: string;
  event: string;
  rating: number;
  date: string;
  comment: string;
}

export const RESORT_CONTACT = {
  name: 'Aurelia Palace',
  tagline: 'Where Luxury Meets Legacy',
  phone: '+1 (555) 789-2345',
  displayPhone: '+1 (555) 789-2345',
  whatsappNumber: '15557892345',
  email: 'reservations@aureliapalace.com',
  address: '100 Aurelia Boulevard, Royal Heritage Valley, HV 90210',
  city: 'Royal Heritage Valley',
  state: 'Heritage Valley',
  pincode: '827013',
  landmark: 'Near Mohan Timber, Heritage District Bypass',
  checkIn: '12:00 PM',
  checkOut: '10:00 AM',
  startingPrice: 3060,
};

export const ROOMS: Room[] = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    subtitle: 'Modern comfort with signature royal touches',
    pricePerNight: 3060,
    sizeSqFt: 340,
    bedType: 'King Size Plush Bed',
    maxGuests: 2,
    view: 'Courtyard & City View',
    description: 'Tailored for discerning travelers, the Deluxe Room blends contemporary ergonomic aesthetics with hand-stitched upholstery, warm ambient chandelier lighting, and a lavish ensuite marble bathroom.',
    features: ['High-speed Wi-Fi', 'Smart 50" LED TV', '24/7 Room Service', 'Premium Linens & Pillows', 'Complimentary Breakfast', 'Mini Bar & Electric Kettle'],
    imagePlaceholder: {
      title: 'Deluxe Room Interior',
      accent: 'warm-gold',
      type: 'deluxe',
    },
  },
  {
    id: 'executive-garden-view',
    name: 'Executive Garden View',
    subtitle: 'Wake up to sprawling manicured green lawns',
    pricePerNight: 3850,
    sizeSqFt: 420,
    bedType: 'Royal California King Bed',
    maxGuests: 3,
    view: 'Panoramic Celebration Lawns',
    description: 'Featuring floor-to-ceiling soundproof French windows overlooking the emerald celebration lawns, this room provides the ultimate peaceful sanctuary for wedding guests and executive travelers.',
    features: ['Private Balcony Nook', 'Direct Garden Panorama', 'Executive Work Desk', 'Express Laundry Service', 'Luxury Herbal Toiletries', 'Turn-down Evening Service'],
    imagePlaceholder: {
      title: 'Executive Garden View Suite',
      accent: 'emerald-gold',
      type: 'garden',
    },
  },
  {
    id: 'deluxe-garden-view',
    name: 'Deluxe Garden View',
    subtitle: 'Tranquil ambiance with garden terrace access',
    pricePerNight: 4200,
    sizeSqFt: 460,
    bedType: 'King Size Bed + Daybed',
    maxGuests: 3,
    view: 'Lush Lawns & Infinity Pool Horizon',
    description: 'An expansive retreat with extended living space, plush seating, and panoramic vistas of both our landscaped lawns and azure infinity pool.',
    features: ['Deep Soaking Tub & Rain Shower', 'Terrace Access', 'Coffee Bean Brewer', 'Complimentary High Tea', 'Bathrobes & Slippers', 'Digital Safe & Valet Access'],
    imagePlaceholder: {
      title: 'Deluxe Garden View Haven',
      accent: 'champagne-gold',
      type: 'executive',
    },
  },
  {
    id: 'executive-twin',
    name: 'Executive Twin Room',
    subtitle: 'Perfect for wedding entourages and visiting families',
    pricePerNight: 3450,
    sizeSqFt: 390,
    bedType: 'Twin Single Premium Beds',
    maxGuests: 2,
    view: 'Resort Courtyard View',
    description: 'Engineered specifically for corporate delegations, family wedding entourages, and multi-guest travel groups without compromising on royal comfort or privacy.',
    features: ['Dual Orthopedic Mattresses', 'Spacious Wardrobe Storage', 'Dual Vanity Mirror', 'High-speed Fiber Wi-Fi', 'Multi-device Charging Hub', 'In-room Dining Menu'],
    imagePlaceholder: {
      title: 'Executive Twin Sanctuary',
      accent: 'soft-gold',
      type: 'twin',
    },
  },
];

export const VENUE_SPACES: VenueSpace[] = [
  {
    id: 'grand-pillarless-ballroom',
    name: 'The Grand Pillar-less Ballroom',
    tagline: "Heritage Valley's District-First 500+ Capacity Pillar-Free Hall",
    capacitySeated: 550,
    capacityFloating: 800,
    areaSqFt: 7500,
    highlight: 'Zero Pillars · 100% Sightlines for Stage & Mandap',
    description: "Architected without a single internal column, our Grand Ballroom guarantees unobstructed view of the wedding stage, bride-groom entry aisle, and royal mandap from every seat. Crowned with grand crystal chandeliers and acoustic wall paneling.",
    features: [
      'Zero visual obstruction for all 500+ guests',
      '18-foot soaring royal ceiling with crystal chandeliers',
      'Dedicated elevated bridal mandap stage',
      'Built-in state-of-the-art concert acoustic sound system',
      'Centralized climate control with fresh air circulation',
      'Adjoining VIP holding suites for bride & groom families',
    ],
    type: 'ballroom',
  },
  {
    id: 'celebration-lawns',
    name: 'The Royal Celebration Lawns',
    tagline: 'Mini-Golf Style Lush Dwarf Grass for Elite Outdoor Receptions',
    capacitySeated: 700,
    capacityFloating: 1100,
    areaSqFt: 14000,
    highlight: 'Lush Dwarf Grass · Fairy-Light Canopy · Live Counter Avenues',
    description: 'Immaculately manicured emerald dwarf turf mimicking championship golf greens. Designed for grand starry-night receptions, sangeet ceremonies, and royal outdoor banquets with space for over 20 artisanal live food stalls.',
    features: [
      'Dense dwarf grass turf permitting high heels without sinking',
      'Integrated fairy-light overhead matrix & tree illumination',
      'Dual bridal entry boulevards with royal red carpet pathways',
      'Water feature fountain backdrop for grand photo opportunities',
      'Dedicated food court runway for multi-cuisine live counters',
      '100% insect-controlled and weatherproof outdoor drainage',
    ],
    type: 'lawn',
  },
  {
    id: 'combined-palace-experience',
    name: 'The Grand Palace Experience (Ballroom + Lawns)',
    tagline: 'Host Over 1,000+ Guests Seamlessly Across Indoor & Outdoor Pavilions',
    capacitySeated: 1200,
    capacityFloating: 1600,
    areaSqFt: 21500,
    highlight: 'Indoor Grandeur + Open Air Splendor',
    description: 'Unite the air-conditioned elegance of our pillar-less ballroom with the breezy majesty of the celebration lawns. The ultimate destination wedding package in Eastern India.',
    features: [
      'Fluid transitions between indoor air-conditioned hall & open lawns',
      'Can accommodate 1,200+ seated guests simultaneously',
      'Simultaneous ceremonies: indoor mandap + outdoor dining feast',
      'Exclusive resort buyout option with all luxury guest rooms',
      'Dedicated security fleet and multi-point valet stations',
      'Comprehensive backup power ensuring zero-moment disruptions',
    ],
    type: 'combined',
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: 'infinity-pool',
    name: 'Sunset Infinity Pool',
    category: 'Wellness & Leisure',
    description: 'Pristine azure waters with an infinity horizon overlooking dusk skies, accompanied by teak sunloungers and poolside service.',
    highlight: '4,000 sq.ft pool deck with evening mood lighting',
    iconName: 'pool',
  },
  {
    id: 'pillarless-architecture',
    name: 'Pillar-less Ballroom',
    category: 'Events & Weddings',
    description: 'The only ballroom in the district engineered without structural columns, delivering 100% uninterrupted sightlines.',
    highlight: '500+ guest seating with zero sight obstruction',
    iconName: 'sparkles',
  },
  {
    id: 'valet-parking',
    name: 'Grand Valet Parking',
    category: 'Guest Convenience',
    description: 'Paved, illuminated parking concourse with courteous valet chauffeurs catering to 200+ luxury cars and VIP coaches.',
    highlight: 'Secure monitored bays with instant key management',
    iconName: 'car',
  },
  {
    id: 'royal-catering',
    name: 'Multi-Cuisine Royal Catering',
    category: 'Dining & Banqueting',
    description: 'Master chefs curating authentic North Indian, Royal Awadhi, Rajasthani, Marwari vegetarian, Continental, and Oriental delicacies.',
    highlight: 'Dedicated hygienic banquet kitchens & live culinary counters',
    iconName: 'utensils',
  },
  {
    id: 'power-backup',
    name: '100% Silent Power Backup',
    category: 'Event Reliability',
    description: 'Heavy-duty dual automatic generators ensuring uninterrupted illumination and air conditioning for weddings and conferences.',
    highlight: 'Zero-downtime transition during storms or grid outages',
    iconName: 'zap',
  },
  {
    id: 'highspeed-wifi',
    name: 'High-Speed Enterprise Wi-Fi',
    category: 'Connectivity',
    description: 'Seamless mesh Wi-Fi 6 coverage across every guest room, ballroom corner, lawn perimeter, and poolside patio.',
    highlight: 'Reliable fiber bandwidth for live wedding broadcasts & meetings',
    iconName: 'wifi',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Priya & Rahul Agrawal',
    role: 'Destination Wedding Hosts',
    location: 'Ranchi & Heritage Valley',
    event: '3-Day Royal Wedding (850 Guests)',
    rating: 5,
    date: 'February 2026',
    comment: 'The pillar-less ballroom at Aurelia Palace made our wedding truly unforgettable! Every single guest could clearly witness the varmala and mandap rituals without cranes or neck-craning. The celebration lawn dwarf grass was like a green carpet. Heritage Valley finally has a world-class luxury palace!',
  },
  {
    id: 'rev-2',
    author: 'Vikramjit Singh',
    role: 'Corporate Regional Director',
    location: 'Dhanbad & Kolkata',
    event: 'Annual Steel Industry Leadership Conclave',
    rating: 5,
    date: 'January 2026',
    comment: 'We hosted 220 senior executives at Aurelia Palace. The rooms were spotless and regal, the conference hall acoustics were crisp, and the sunset infinity pool provided the perfect unwinding spot after sessions. Outstanding valet and catering management.',
  },
  {
    id: 'rev-3',
    author: 'Sunita & Deepak Sharma',
    role: '25th Wedding Anniversary Celebration',
    location: 'Royal Heritage Valley',
    event: 'Silver Jubilee Banquet (400 Guests)',
    rating: 5,
    date: 'March 2026',
    comment: 'Starting from the welcoming staff on Royal Highway to the live food counters under fairy lights on the lawn, everything had a royal golden touch. The price per room at ₹3,060+ offers exceptional value for this standard of luxury.',
  },
];

export const FAQS = [
  {
    q: 'Why is the pillar-less ballroom significant for weddings?',
    a: 'Traditional banquet halls have large concrete pillars every 15-20 feet that block views of the stage, mandap, and couple entrance for up to 35% of guests. Aurelia Palace’s pillar-less design uses an advanced wide-span architectural truss, ensuring completely uninterrupted views and 360-degree photography angles from every corner of the 7,500 sq.ft hall.',
  },
  {
    q: 'What are the check-in and check-out timings?',
    a: 'Standard check-in is at 12:00 PM and check-out is at 10:00 AM. Early check-in and late check-out can be facilitated based on availability upon prior request with our 24/7 concierge desk (+1 (555) 789-2345).',
  },
  {
    q: 'How many guests can Aurelia Palace accommodate for weddings and events?',
    a: 'Our Grand Pillar-less Ballroom hosts up to 550 seated and 800 floating guests. The Celebration Lawns host up to 700 seated and 1,100 floating guests. By combining both venues, we comfortably accommodate over 1,200 to 1,600 guests seamlessly with indoor dining and open-air celebrations.',
  },
  {
    q: 'What is special about the Celebration Lawn grass?',
    a: 'Our celebration lawn is curated with imported dwarf grass trimmed with golf-green precision. Unlike regular garden turf that becomes squishy or stains wedding lehengas and tuxedos, our turf is dense, firm, heels-friendly, and fitted with underground storm drains.',
  },
  {
    q: 'Can we book rooms in bulk for wedding guests?',
    a: 'Yes, we offer custom residential wedding room blocks with tiered tariffs starting from ₹3,060/night, including complimentary luggage assistance, breakfast banquets, and dedicated floor coordinators.',
  },
  {
    q: 'How far is Aurelia Palace from major transit hubs in Heritage Valley?',
    a: 'Aurelia Palace is prominently situated on Royal Highway at Royal Valley, Heritage District (near Mohan Timber). We are only 10 minutes from Royal Heritage Valley Railway Station, 35 minutes from Dhanbad, and 2 hours from Ranchi Birsa Munda Airport.',
  },
];
