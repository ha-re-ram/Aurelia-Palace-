import React, { useState } from 'react';

interface VisualProps {
  type: 'hero-facade' | 'pillarless-ballroom' | 'infinity-pool' | 'celebration-lawn' | 'deluxe-room' | 'executive-suite' | 'twin-room';
  alt: string;
  className?: string;
  aspect?: '16:9' | '4:3' | '3:2' | '2:1';
  showOverlayBadge?: boolean;
  badgeText?: string;
}

export const PalaceVisual: React.FC<VisualProps> = ({
  type,
  alt,
  className = '',
  aspect = '16:9',
  showOverlayBadge = false,
  badgeText,
}) => {
  const [imageError, setImageError] = useState(false);

  // If we have a hero facade, test the real resort photo provided by the brief
  const photoUrl = type === 'hero-facade' 
    ? 'https://r1imghtlak.mmtcdn.com/af29daed-1d91-49f0-a3f6-bc3f763ce8d7.jpg' 
    : null;

  const aspectClass = 
    aspect === '16:9' ? 'aspect-[16/9]' :
    aspect === '4:3' ? 'aspect-[4/3]' :
    aspect === '3:2' ? 'aspect-[3/2]' : 'aspect-[2/1]';

  return (
    <div className={`relative w-full overflow-hidden bg-neutral-900 group select-none ${aspectClass} ${className}`}>
      {/* If photoUrl is available and hasn't errored, show it with overlay; else render vector scene */}
      {photoUrl && !imageError ? (
        <img
          src={photoUrl}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <LuxuryVectorScene type={type} />
      )}

      {/* Subtle luxury vignette & golden sheen */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />
      <div className="absolute inset-0 border border-white/10 group-hover:border-[#D4AF37]/40 transition-colors duration-500 pointer-events-none" />

      {/* Golden Corner Accents */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/70 pointer-events-none" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/70 pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/70 pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/70 pointer-events-none" />

      {/* Overlay Badge */}
      {showOverlayBadge && badgeText && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md border border-[#D4AF37]/40 text-[#E6CA65] text-xs uppercase tracking-widest font-sans font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            {badgeText}
          </span>
        </div>
      )}
    </div>
  );
};

// Rich Luxury Vector Illustrations for Resort Properties
const LuxuryVectorScene: React.FC<{ type: VisualProps['type'] }> = ({ type }) => {
  switch (type) {
    case 'pillarless-ballroom':
      return (
        <svg viewBox="0 0 800 450" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ballroomCeiling" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1C1813" />
              <stop offset="100%" stopColor="#2E2416" />
            </linearGradient>
            <linearGradient id="ballroomFloor" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2A2016" />
              <stop offset="100%" stopColor="#110E0A" />
            </linearGradient>
            <linearGradient id="goldGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F5E6A3" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="chandelierRadial" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF9E6" stopOpacity="1" />
              <stop offset="50%" stopColor="#E6CA65" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#B8860B" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Wall & Ceiling Backdrop */}
          <rect width="800" height="260" fill="url(#ballroomCeiling)" />
          {/* Polished Marble Floor with Mirror Reflection */}
          <rect y="260" width="800" height="190" fill="url(#ballroomFloor)" />

          {/* Wall Paneling & Royal Sconces (No Pillars!) */}
          <g stroke="#D4AF37" strokeWidth="1" opacity="0.35">
            <line x1="80" y1="50" x2="80" y2="260" />
            <line x1="160" y1="50" x2="160" y2="260" />
            <line x1="640" y1="50" x2="640" y2="260" />
            <line x1="720" y1="50" x2="720" y2="260" />
            <rect x="20" y="70" width="45" height="130" />
            <rect x="100" y="70" width="45" height="130" />
            <rect x="655" y="70" width="45" height="130" />
            <rect x="735" y="70" width="45" height="130" />
          </g>

          {/* Center Stage & Mandap Backdrop (Wide Unobstructed View) */}
          <g transform="translate(260, 100)">
            {/* Grand Arch Stage */}
            <path d="M 0 160 Q 140 20 280 160 Z" fill="#3B2F1D" stroke="#D4AF37" strokeWidth="2" opacity="0.8" />
            <rect x="20" y="140" width="240" height="25" fill="#D4AF37" opacity="0.4" />
            {/* Stage Floral Canopy */}
            <circle cx="140" cy="85" r="50" fill="url(#goldGlow)" />
            <text x="140" y="110" textAnchor="middle" fill="#E6CA65" fontSize="12" fontFamily="serif" letterSpacing="3">
              ROYAL MANDAP
            </text>
            <text x="140" y="130" textAnchor="middle" fill="#FFFFFF" fontSize="9" opacity="0.7">
              100% UNINTERRUPTED SIGHTLINE
            </text>
          </g>

          {/* Grand Central Crystal Chandeliers */}
          {[200, 400, 600].map((cx, i) => (
            <g key={i}>
              <circle cx={cx} cy="45" r="55" fill="url(#chandelierRadial)" />
              <line x1={cx} y1="0" x2={cx} y2="30" stroke="#D4AF37" strokeWidth="2" />
              {/* Chandelier tiers */}
              <ellipse cx={cx} cy="32" rx="35" ry="8" fill="#F5E6A3" opacity="0.9" />
              <ellipse cx={cx} cy="42" rx="26" ry="6" fill="#F5E6A3" opacity="0.8" />
              <ellipse cx={cx} cy="50" rx="14" ry="4" fill="#F5E6A3" opacity="0.9" />
              <polygon points={`${cx - 5},52 ${cx + 5},52 ${cx},65`} fill="#FFF9E6" />
            </g>
          ))}

          {/* Red Carpet Bridal Aisle */}
          <polygon points="350,260 450,260 520,450 280,450" fill="#7A162B" opacity="0.85" />
          <polygon points="360,260 440,260 505,450 295,450" fill="#901C34" opacity="0.95" />
          <line x1="400" y1="260" x2="400" y2="450" stroke="#D4AF37" strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />

          {/* Banquet Tables with Golden Chiavari Chairs on left & right */}
          {[
            { cx: 160, cy: 330, r: 28 },
            { cx: 220, cy: 400, r: 35 },
            { cx: 640, cy: 330, r: 28 },
            { cx: 580, cy: 400, r: 35 },
          ].map((table, idx) => (
            <g key={idx}>
              <ellipse cx={table.cx} cy={table.cy} rx={table.r} ry={table.r * 0.45} fill="#FFFFFF" stroke="#D4AF37" strokeWidth="1.5" />
              <circle cx={table.cx} cy={table.cy - 10} r="4" fill="#D4AF37" />
              {/* Golden Chairs */}
              {[-1, 1].map((dir, cidx) => (
                <ellipse key={cidx} cx={table.cx + dir * (table.r + 6)} cy={table.cy} rx="5" ry="9" fill="#B8860B" opacity="0.75" />
              ))}
            </g>
          ))}

          {/* Visual Badge Text */}
          <g transform="translate(400, 38)">
            <text textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" letterSpacing="4" opacity="0.9">
              PILLAR-LESS GRAND BALLROOM
            </text>
            <text y="16" textAnchor="middle" fill="#D4AF37" fontSize="9" fontFamily="sans-serif" letterSpacing="2">
              500+ SEATED CAPACITY · ZERO OBSTRUCTION
            </text>
          </g>
        </svg>
      );

    case 'infinity-pool':
      return (
        <svg viewBox="0 0 800 450" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sunsetSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2E1C2B" />
              <stop offset="35%" stopColor="#6C2E47" />
              <stop offset="60%" stopColor="#C45E45" />
              <stop offset="85%" stopColor="#E5A65D" />
              <stop offset="100%" stopColor="#F9DF92" />
            </linearGradient>
            <linearGradient id="poolWater" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1B4965" />
              <stop offset="40%" stopColor="#0B5269" />
              <stop offset="80%" stopColor="#042F3D" />
              <stop offset="100%" stopColor="#01161E" />
            </linearGradient>
            <linearGradient id="waterHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E5A65D" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#E5A65D" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Sunset Horizon Sky */}
          <rect width="800" height="230" fill="url(#sunsetSky)" />

          {/* Golden Setting Sun */}
          <circle cx="400" cy="190" r="45" fill="#FFEAA7" opacity="0.9" />
          <circle cx="400" cy="190" r="70" fill="#F39C12" opacity="0.25" />

          {/* Distant Hills & Horizon Line */}
          <path d="M 0 215 Q 150 200 300 212 T 600 208 T 800 215 L 800 230 L 0 230 Z" fill="#2E1C2B" opacity="0.6" />

          {/* Infinity Edge Pool Basin */}
          <polygon points="0,230 800,230 800,450 0,450" fill="url(#poolWater)" />

          {/* Vanishing Infinity Edge Horizon Sheen */}
          <line x1="0" y1="230" x2="800" y2="230" stroke="url(#waterHighlight)" strokeWidth="3" />

          {/* Water Sun Reflection Shimmer Lines */}
          {[245, 265, 290, 320, 355, 395].map((y, idx) => (
            <line
              key={idx}
              x1={400 - (y - 230) * 1.8}
              y1={y}
              x2={400 + (y - 230) * 1.8}
              y2={y}
              stroke="#FFEAA7"
              strokeWidth={idx < 2 ? 2 : 1.5}
              strokeDasharray={`${idx * 4 + 8} ${idx * 3 + 6}`}
              opacity={0.65 - idx * 0.08}
            />
          ))}

          {/* Teak Wood Pool Deck on Left */}
          <polygon points="0,320 180,270 240,450 0,450" fill="#3D2B1F" />
          <polygon points="0,320 180,270 240,450 0,450" fill="none" stroke="#261A13" strokeWidth="2" strokeDasharray="14 14" />

          {/* Teak Sunloungers with Golden Towels */}
          <g transform="translate(50, 330) rotate(-12)">
            <rect x="0" y="0" width="85" height="24" rx="3" fill="#694833" />
            <rect x="4" y="3" width="77" height="18" rx="2" fill="#FFFFFF" />
            <rect x="8" y="5" width="22" height="14" rx="2" fill="#D4AF37" />
          </g>

          {/* Silhouette Palm Fronds on Right */}
          <g fill="#1A1118">
            <path d="M 800 120 Q 720 150 670 190 Q 730 185 800 195 Z" />
            <path d="M 800 90 Q 700 120 630 150 Q 710 160 800 170 Z" />
            <path d="M 800 150 Q 730 180 690 230 Q 750 220 800 225 Z" />
          </g>

          {/* Visual Badge Text */}
          <g transform="translate(400, 35)">
            <text textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" letterSpacing="4" opacity="0.95">
              SUNSET INFINITY POOL
            </text>
            <text y="16" textAnchor="middle" fill="#F9DF92" fontSize="9" fontFamily="sans-serif" letterSpacing="2">
              4,000 SQ.FT AZURE HORIZON · EVENING MOOD LOUNGE
            </text>
          </g>
        </svg>
      );

    case 'celebration-lawn':
      return (
        <svg viewBox="0 0 800 450" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="twilightLawnSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0B132B" />
              <stop offset="60%" stopColor="#1C2541" />
              <stop offset="100%" stopColor="#3A506B" />
            </linearGradient>
            <linearGradient id="dwarfGrass" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2D5A27" />
              <stop offset="50%" stopColor="#1E441E" />
              <stop offset="100%" stopColor="#132E13" />
            </linearGradient>
            <radialGradient id="fairyBulb" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF2A3" />
              <stop offset="40%" stopColor="#E6CA65" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Sky */}
          <rect width="800" height="200" fill="url(#twilightLawnSky)" />

          {/* Illuminated Palace Resort Silhouette in Background */}
          <g fill="#141C2E" stroke="#D4AF37" strokeWidth="0.8" opacity="0.8">
            <rect x="250" y="110" width="300" height="90" />
            <polygon points="250,110 400,60 550,110" />
            <circle cx="400" cy="90" r="14" fill="#D4AF37" opacity="0.7" />
            {/* Windows */}
            {[280, 330, 380, 430, 480].map((wx, i) => (
              <rect key={i} x={wx} y="130" width="20" height="40" rx="3" fill="#FFEAA7" opacity="0.85" />
            ))}
          </g>

          {/* Manicured Dwarf Grass Lawn (Mini-golf Precision) */}
          <rect y="200" width="800" height="250" fill="url(#dwarfGrass)" />

          {/* Mowing Stripe Waves (Precision turf aesthetic) */}
          {[220, 260, 305, 355, 410].map((ly, i) => (
            <ellipse
              key={i}
              cx="400"
              cy={ly}
              rx="450"
              ry="25"
              fill={i % 2 === 0 ? '#386631' : '#275022'}
              opacity="0.35"
            />
          ))}

          {/* Fairy-Light Overhead Canopy Matrix */}
          <g stroke="#E6CA65" strokeWidth="1" opacity="0.6">
            <path d="M 0 90 Q 200 140 400 95 Q 600 140 800 90" fill="none" />
            <path d="M 0 130 Q 200 180 400 135 Q 600 180 800 130" fill="none" />
          </g>

          {/* Sparkling Fairy-light bulbs */}
          {[60, 140, 220, 300, 380, 460, 540, 620, 700, 760].map((bx, i) => (
            <g key={i}>
              <circle cx={bx} cy={110 + (i % 3) * 15} r="9" fill="url(#fairyBulb)" />
              <circle cx={bx} cy={110 + (i % 3) * 15} r="2" fill="#FFFFFF" />
            </g>
          ))}

          {/* Lawn Wedding Canopy & Red Carpet Pathway */}
          <polygon points="380,200 420,200 490,450 310,450" fill="#7A162B" opacity="0.9" />
          <line x1="400" y1="200" x2="400" y2="450" stroke="#D4AF37" strokeWidth="2" strokeDasharray="8 6" opacity="0.7" />

          {/* Luxury Outdoor Gazebo Marquee */}
          <g transform="translate(320, 160)">
            <polygon points="80,0 15,40 145,40" fill="#FFFFFF" stroke="#D4AF37" strokeWidth="1.5" />
            <line x1="20" y1="40" x2="20" y2="90" stroke="#D4AF37" strokeWidth="2" />
            <line x1="140" y1="40" x2="140" y2="90" stroke="#D4AF37" strokeWidth="2" />
            <circle cx="80" cy="30" r="12" fill="url(#fairyBulb)" />
          </g>

          {/* Visual Badge Text */}
          <g transform="translate(400, 35)">
            <text textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" letterSpacing="4" opacity="0.95">
              ROYAL CELEBRATION LAWNS
            </text>
            <text y="16" textAnchor="middle" fill="#E6CA65" fontSize="9" fontFamily="sans-serif" letterSpacing="2">
              MINI-GOLF STYLE DWARF TURF · 1,000+ GUEST CAPACITY
            </text>
          </g>
        </svg>
      );

    case 'deluxe-room':
    case 'executive-suite':
    case 'twin-room':
    default:
      return (
        <svg viewBox="0 0 800 500" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="roomWall" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2A241F" />
              <stop offset="100%" stopColor="#1C1814" />
            </linearGradient>
            <linearGradient id="floorWood" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3F2E22" />
              <stop offset="100%" stopColor="#201711" />
            </linearGradient>
            <linearGradient id="bedLinen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E5E5E5" />
            </linearGradient>
            <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF2A3" />
              <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2A241F" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Wall Backdrop */}
          <rect width="800" height="320" fill="url(#roomWall)" />
          {/* Polished Hardwood Flooring */}
          <rect y="320" width="800" height="180" fill="url(#floorWood)" />

          {/* Headboard Wall Acoustic Paneling */}
          <g stroke="#D4AF37" strokeWidth="1" opacity="0.35">
            <rect x="220" y="60" width="360" height="230" fill="#2E241B" />
            <line x1="280" y1="60" x2="280" y2="290" />
            <line x1="340" y1="60" x2="340" y2="290" />
            <line x1="400" y1="60" x2="400" y2="290" />
            <line x1="460" y1="60" x2="460" y2="290" />
            <line x1="520" y1="60" x2="520" y2="290" />
          </g>

          {/* King Plush Bed / Twin setup */}
          {type === 'twin-room' ? (
            <g>
              {/* Left Bed */}
              <rect x="240" y="220" width="130" height="180" rx="6" fill="url(#bedLinen)" stroke="#D4AF37" strokeWidth="1" />
              <rect x="240" y="320" width="130" height="40" fill="#B8860B" opacity="0.85" />
              <rect x="255" y="200" width="100" height="35" rx="4" fill="#FFFFFF" />
              {/* Right Bed */}
              <rect x="430" y="220" width="130" height="180" rx="6" fill="url(#bedLinen)" stroke="#D4AF37" strokeWidth="1" />
              <rect x="430" y="320" width="130" height="40" fill="#B8860B" opacity="0.85" />
              <rect x="445" y="200" width="100" height="35" rx="4" fill="#FFFFFF" />
            </g>
          ) : (
            <g>
              {/* Grand King Bed Base */}
              <rect x="250" y="200" width="300" height="200" rx="8" fill="url(#bedLinen)" stroke="#D4AF37" strokeWidth="1.5" />
              {/* Golden Embroidered Runner */}
              <rect x="250" y="310" width="300" height="45" fill="#D4AF37" opacity="0.85" />
              {/* Royal Pillows */}
              <rect x="270" y="180" width="115" height="40" rx="5" fill="#FFFFFF" />
              <rect x="415" y="180" width="115" height="40" rx="5" fill="#FFFFFF" />
              <rect x="300" y="200" width="60" height="30" rx="4" fill="#B8860B" />
              <rect x="440" y="200" width="60" height="30" rx="4" fill="#B8860B" />
            </g>
          )}

          {/* Bedside Sconces & Warm Glow */}
          <g>
            <circle cx="180" cy="170" r="45" fill="url(#lampGlow)" />
            <line x1="180" y1="130" x2="180" y2="165" stroke="#D4AF37" strokeWidth="3" />
            <rect x="165" y="165" width="30" height="25" rx="2" fill="#FFEAA7" />
          </g>
          <g>
            <circle cx="620" cy="170" r="45" fill="url(#lampGlow)" />
            <line x1="620" y1="130" x2="620" y2="165" stroke="#D4AF37" strokeWidth="3" />
            <rect x="605" y="165" width="30" height="25" rx="2" fill="#FFEAA7" />
          </g>

          {/* Left French Window with Garden View */}
          <g>
            <rect x="40" y="70" width="90" height="200" fill="#1C3829" opacity="0.6" stroke="#D4AF37" strokeWidth="1.5" />
            <line x1="85" y1="70" x2="85" y2="270" stroke="#D4AF37" strokeWidth="1" />
            <line x1="40" y1="170" x2="130" y2="170" stroke="#D4AF37" strokeWidth="1" />
          </g>

          {/* Visual Badge Text */}
          <g transform="translate(400, 35)">
            <text textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" letterSpacing="4" opacity="0.95">
              AURELIA PALACE SUITE
            </text>
            <text y="16" textAnchor="middle" fill="#E6CA65" fontSize="9" fontFamily="sans-serif" letterSpacing="2">
              STARTING FROM ₹3,060/NIGHT · MODERN ROYAL LUXURY
            </text>
          </g>
        </svg>
      );
  }
};
