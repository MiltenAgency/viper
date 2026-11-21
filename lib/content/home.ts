/**
 * Home page copy and assets for ATELIER PADEL PRIVÉ.
 */

export const hero = {
  year: "©2025",
  title: "ATELIER",
  blurbLines: [
    "ATELIER PADEL PRIVÉ® Independent",
    "architectural sanctuary of panoramic glass",
    "courts, black silica sand, and private salons.",
  ],
  image: { src: "/assets/img/padel-carbon.jpg", alt: "The Carbon Suite Padel Court" },
} as const;

export const intro = {
  label: "Architectural Sanctuary",
  heading:
    "An architectural sanctuary dedicated to the pure geometry of modern padel. From panoramic 360° structural glass courts to custom carbon-braided racquets.®",
  cta: { label: "Commission Allocation", href: "/contact" },
  columns: [
    {
      title: "Architectural Glass Arenas",
      body: "Engineered with 12mm monolithic acoustic glass and shock-absorbing black silica turf, illuminated by 1,200-lux glare-free broadcast lighting.",
    },
    {
      title: "Strict Private Allocations",
      body: "Access is limited to 120 member patron allocations. Each court reservation includes private locker suites, racket telemetry calibration, and recovery pavilion access.",
    },
  ],
  images: [
    { src: "/assets/img/padel-racket.jpg", alt: "Bespoke Carbon Racquet" },
    { src: "/assets/img/padel-acoustics.jpg", alt: "Acoustic Glass Wall" },
    { src: "/assets/img/padel-ball-service.jpg", alt: "Optic Lime Court Compression" },
  ],
} as const;

export const marqueeLogos = [
  "/assets/img/e32e8affbd5a3066.webp",
  "/assets/img/8ca3bb13c19b067e.webp",
  "/assets/img/89ef33b9586789fe.webp",
  "/assets/img/964dfe6f0ea6a1d2.webp",
  "/assets/img/42d4dc22c8be2ebb.webp",
  "https://framerusercontent.com/images/kWKTtT0sHaBtqXAjToYJt0DkM.png",
  "https://framerusercontent.com/images/rKFa1Bkgx8162McJrXxfeP8muc.png",
  "https://framerusercontent.com/images/gFzjC9xriL7Nmw52LjVDFnwqJKU.png",
  "https://framerusercontent.com/images/9Xrne4wsuizTaogvAppcUC0.png",
  "https://framerusercontent.com/images/dnfHacnCb11wzIO3c6voJEK1Sc.png",
];

export interface ApproachStep {
  number: string;
  title: string;
  tag?: string;
  body: string;
}

export const approach = {
  section: { label: "Court Engineering", index: "(AP® — 02)", year: "©2025" },
  steps: [
    {
      number: "01",
      title: "Kinematic Acoustic Architecture",
      tag: "HAUTE",
      body: "Custom-angled structural glass and micro-perforated carbon acoustic baffles eliminate harsh echoes, delivering a crisp auditory crack on every smash.",
    },
    {
      number: "02",
      title: "Black Silica Sand Turf",
      body: "High-density textured fibrillated turf infused with kiln-dried black silica micro-sand, ensuring 100% predictable ball bite and zero ankle drag.",
    },
    {
      number: "03",
      title: "240fps Telemetry Analysis",
      body: "Dual optical high-speed sensors integrated into the court framework capture ball velocity, spin RPM, and recovery angles in real time.",
    },
  ] as ApproachStep[],
  cta: { label: "Tour the sanctuary", href: "/contact" },
  meter: [
    { label: "Acoustics", value: "35%" },
    { label: "Surface Grip", value: "70%" },
    { label: "Ball Bite", value: "100%" },
  ],
  image: { src: "/assets/img/padel-tactics.jpg", alt: "Court Geometry & Tactical Layout" },
} as const;

export const featured = {
  section: { label: "Architectural Courts", index: "(AP® — 03)", year: "©2025" },
  badge: "Courts",
  heading: "Flagship Arenas®",
  blurb:
    "Explore our private sanctuary of 360° structural glass stadium courts, stealth telemetry chambers, and rooftop skyline pavilions.",
  cta: { label: "View all courts", href: "/work" },
  partnersLabel: "Technical court partners & certified equipment manufactures:",
  partners: [
    "/assets/img/ca3d81daff2fde45.webp",
    "/assets/img/8ca3bb13c19b067e.webp",
    "/assets/img/964dfe6f0ea6a1d2.webp",
    "/assets/img/42d4dc22c8be2ebb.webp",
    "https://framerusercontent.com/images/kWKTtT0sHaBtqXAjToYJt0DkM.png",
    "https://framerusercontent.com/images/rKFa1Bkgx8162McJrXxfeP8muc.png",
    "https://framerusercontent.com/images/9Xrne4wsuizTaogvAppcUC0.png",
    "https://framerusercontent.com/images/dnfHacnCb11wzIO3c6voJEK1Sc.png",
  ],
} as const;

export const stats = {
  label: "Court Precision",
  heading:
    "We obsess over every angle, acoustic decibel, and turf millimeter to achieve absolute athletic mastery. Every detail calibrated for high-velocity play.®",
  items: [
    { value: 120, suffix: " Patrons", title: "Member Allocations", note: "Strictly limited private club roster." },
    { value: 12, suffix: " mm", title: "Monolithic Glass", note: "Zero-distortion structural acoustic panels." },
    { value: 240, suffix: " fps", title: "Telemetry Rate", note: "High-speed multi-axis ball tracking." },
  ],
} as const;

export const services = {
  section: { label: "Sanctuary Disciplines", index: "(AP® — 05)", year: "©2025" },
  heading: "Member Services®",
  blurb: "From bespoke carbon racquet weight-calibration to private master coaching, we elevate every aspect of your padel performance.",
  points: ["Private Master Coaching", "Racquet Lead-Weight Tuning"],
  cta: { label: "Explore the club", href: "/about" },
  items: [
    {
      title: "Acoustic Glass Arenas",
      meta: "Court Architecture",
      dots: 1,
      image: { src: "/assets/img/padel-acoustics.jpg", alt: "Acoustic Baffles" },
    },
    {
      title: "Custom Racquet Vault",
      meta: "Equipment Atelier",
      dots: 2,
      image: { src: "/assets/img/padel-racquet-craft.jpg", alt: "Racquet Crafting & Stringing" },
    },
    {
      title: "Telemetry Biomechanics",
      meta: "Performance Lab",
      dots: 3,
      image: { src: "/assets/img/padel-biomechanics.jpg", alt: "Biomechanics Telemetry Lab" },
    },
    {
      title: "Cold Plunge Recovery",
      meta: "Sports Wellness",
      dots: 4,
      image: { src: "/assets/img/padel-cryo.jpg", alt: "Cold Plunge Suite" },
    },
  ],
  image: { src: "/assets/img/padel-clubhouse.jpg", alt: "Sanctuary Clubhouse Pavilion" },
} as const;

export const benefits = {
  section: { label: "Sanctuary Standards", index: "(AP® — 06)", year: "©2025" },
  speed: {
    caps: "STANDARDS • 01",
    title: "1,200 Lux Glare-Free Broadcast Illumination.",
    note: "Custom vertical indirect LED arrays eliminating shadow and overhead blinding during high smashes.",
    stat: "1,200",
    statUnit: "LUX",
    badge: "Flicker-Free Broadcast Spec",
    background: { src: "/assets/img/padel-lighting.jpg", alt: "1,200 Lux Stadium Lighting" },
  },
  platform: {
    caps: "STANDARDS • 02",
    title: "360° Monolithic Structural Glass.",
    body: "12mm acoustic tempered glass installed without corner vertical posts for mathematically pure ball rebounds across all quadrants.",
    badge: "Zero Corner Posts • True Rebound",
    image: { src: "/assets/img/padel-monolithic-glass.jpg", alt: "Monolithic Structural Court Glass" },
  },
  support: {
    caps: "STANDARDS • 03",
    title: "120",
    label: "Active Patron Allocation Cap",
    body: "Guaranteed prime-time court access, private salon suites, climate-controlled racquet lockers, and Monaco/Geneva reciprocity.",
    badge: "Strict Patron Cap",
    background: { src: "/assets/img/padel-patron-suite.jpg", alt: "VIP Patron Salon Suite" },
  },
} as const;

export const testimonials = {
  section: { label: "Patron Testimonials", index: "(AP® — 07)", year: "©2025" },
  badge: "Patrons",
  heading: "Trusted By Champions.",
  blurb:
    "Reflections from international tour competitors, architectural curators, and private patron members who play exclusively on our courts.",
  cta: { label: "Request allocation", href: "/contact" },
  items: [
    {
      body: "Centre Court Glasshouse is the finest padel court on earth. The black silica turf gives true, uncompromised ball bite, and the acoustic clarity of the glass is unmatched.",
      name: "Alejandro Ruiz",
      role: "Premier Padel Competitor",
      company: "Monaco Tour Team",
      avatar: { src: "/assets/img/838e29199fb7e503.webp", alt: "Alejandro Ruiz" },
    },
    {
      body: "Playing at Atelier Padel Privé feels like stepping into a private cathedral of high-velocity sport. The telemetry insights in The Carbon Suite revolutionized my defensive glass game.",
      name: "Marcus Sterling",
      role: "Founding Patron",
      company: "Geneva Racquet Syndicate",
      avatar: { src: "/assets/img/9f76a4d14cf53ff6.webp", alt: "Marcus Sterling" },
    },
    {
      body: "The team tuned my 24K carbon racquets to perfection. From customized handle balance to temperature-matched stringing, the level of bespoke service is exceptional.",
      name: "Hélène De Vries",
      role: "Architect & Member",
      company: "De Vries Padel Zurich",
      avatar: { src: "/assets/img/46900bc9f0919c91.webp", alt: "Hélène De Vries" },
    },
    {
      body: "Having private court access paired with the cold plunge and infrared recovery suite makes this club an irreplaceable part of my athletic routine.",
      name: "David Laurent",
      role: "Senior Consultant",
      company: "Alpine Athletic Guild",
      avatar: { src: "/assets/img/b97be510e61141af.webp", alt: "David Laurent" },
    },
    {
      body: "The rooftop Sky Pavilion during sunset in Monaco is breathtaking. World-class padel with a skyline backdrop that cannot be replicated anywhere in Europe.",
      name: "Thomas Lindqvist",
      role: "Sports Journalist & Member",
      company: "Nordic Padel Review",
      avatar: { src: "/assets/img/a71b72ffd2a494b7.webp", alt: "Thomas Lindqvist" },
    },
  ],
} as const;

export const photography = {
  section: { label: "Court Details", index: "(AP® — 08)", year: "©2025" },
  badge: "Macrophotography",
  heading: "Every Millimeter Calibrated.",
  blurb:
    "Capturing the structural glass bevels, carbon weave racquets, and optic lime ball compressions with high-speed macro optics.",
  cta: { label: "Book private tour", href: "/contact" },
} as const;

export const framerExpert = {
  section: { label: "Resident Masters", index: "(AP® — 09)", year: "©2025" },
  image: { src: "/assets/img/padel-coach.jpg", alt: "Master Coach" },
  badge: "Tour Pedigree",
  heading: "Tour-Level Coaching Pedigree.",
  subheading: "Mastering Modern Padel Geometry®",
  body: "Our resident coaching staff combines former Premier Padel world tour experience with advanced high-speed video biomechanics. Every session is tailored to refine court positioning, defensive wall-reads, and explosive overheads.",
  cta: { label: "View all courts", href: "/work" },
  rating: "100% Tour-Certified Staff",
} as const;

export const pricing = {
  section: { label: "Membership Tiers", year: "©2025" },
  toggle: { monthly: "Resident Patron", annual: "Founding Patron" },
  badge: "Allocations",
  heading: "Membership Allocations.",
  blurb:
    "Transparent patron tier structures for our private Monaco and Geneva sanctuaries. Dedicated locker suites and bespoke racquet tuning included.",
  cta: { label: "Inquire allocation", href: "/contact" },
  includedLabel: "Included with patron allocation",
  featureLabels: [
    "Unlimited Court Bookings",
    "Guest Pass Invitations",
    "Telemetry Analysis Access",
    "Racquet Vault Concierge",
    "Recovery Lab & Cold Plunge",
    "Monaco & Geneva Reciprocity",
  ],
  plans: [
    {
      name: "Atelier Resident",
      tag: "SANCTUARY",
      monthly: "€450/mo",
      annual: "€4,800/yr",
      body: "Complete access to indoor glasshouse arenas, recovery pavilion, and private clubhouse salon.",
      dots: 1,
      included: [true, true, true, false, false, false],
      cta: "Request Allocation",
    },
    {
      name: "Founding Patron",
      monthly: "€750/mo",
      annual: "€7,800/yr",
      body: "Priority peak court allocations, guest privileges, telemetry camera storage, and custom carbon racquets.",
      dots: 2,
      included: [true, true, true, true, true, false],
      cta: "Request Allocation",
    },
    {
      name: "Monaco Private Suite",
      monthly: "€1,250/mo",
      annual: "€13,500/yr",
      body: "Full VIP private salon reservation, dedicated tour coach, 24/7 concierge, and international tournament access.",
      dots: 3,
      included: [true, true, true, true, true, true],
      cta: "Request Allocation",
      image: { src: "/assets/img/padel-locker-suite.jpg", alt: "Private VIP Salon Suite" },
    },
  ],
} as const;

export const insights = {
  section: { label: "Padel Journal", index: "(AP® — 12)", year: "©2025" },
  badge: "Journal",
  heading: "Latest Padel Insights.",
  blurb:
    "Explore technical treatises on court acoustics, structural glass innovation, and the biomechanics of modern high-velocity padel.",
  cta: { label: "View all dispatches", href: "/blog" },
  image: { src: "/assets/img/padel-night-arena.jpg", alt: "Monaco Night Arena" },
} as const;

export const contactSection = { label: "Request A Membership Allocation", index: "(AP® — 13)", year: "©2025" } as const;
