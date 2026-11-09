/**
 * Home page copy and assets for KRONOS Horology.
 */

export const hero = {
  year: "©2025",
  title: "KRONOS",
  blurbLines: [
    "KRONOS Horology® Independent",
    "manufacture of architectural Grade 5",
    "titanium mechanical tourbillon timepieces.",
  ],
  image: { src: "/assets/img/0c441b19271b92e6.webp", alt: "KRONOS Titanium Chronometer" },
} as const;

export const intro = {
  label: "Haute Horlogerie Suisse",
  heading:
    "An independent manufacture based in the Swiss Jura, passionate about micro-mechanical innovation. From flying tourbillon calibres to sculptural Grade 5 titanium cases.®",
  cta: { label: "Commission Allocation", href: "/contact" },
  columns: [
    {
      title: "Architectural Calibres",
      body: "We engineer proprietary mechanical movements openworked from solid aerospace titanium and black-DLC German silver, exposing every balance wheel oscillation and hand-beveled bridge.",
    },
    {
      title: "Limited Atelier Allocations",
      body: "Production is strictly limited to 48 pieces per calendar year. Each commission allows bespoke movement decoration, hand-guilloché subdials, and individual collector engravings.",
    },
  ],
  images: [
    { src: "/assets/img/acd556c53995286b.webp", alt: "Sapphire Crystal Dial" },
    { src: "/assets/img/ee841bcd3a66facb.webp", alt: "Titanium Case Flank" },
    { src: "/assets/img/ddd2b87603f1be80.webp", alt: "Escapement Assembly" },
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
  section: { label: "Manufacture Process", index: "(KH® — 02)", year: "©2025" },
  steps: [
    {
      number: "01",
      title: "Kinematic Architecture",
      tag: "HAUTE",
      body: "Finite-element mechanical simulation of gear trains, dual barrels, and free-sprung variable inertia balances optimized for superior isochronism and shock absorption.",
    },
    {
      number: "02",
      title: "5-Axis CNC & Hand Anglage",
      body: "Cases and bridges milled from solid Grade 5 titanium, followed by over 120 hours of manual interior angle anglage, perlage, and black mirror specular polishing.",
    },
    {
      number: "03",
      title: "Chronometer Regulation & Casing",
      body: "Every calibre is adjusted in six positions across three temperature gradients, passing our 1,000-hour manufacture chronometer certification.",
    },
  ] as ApproachStep[],
  cta: { label: "Atelier visit", href: "/contact" },
  meter: [
    { label: "Kinematics", value: "35%" },
    { label: "Hand Anglage", value: "70%" },
    { label: "Chronometry", value: "100%" },
  ],
  image: { src: "/assets/img/628c4e759c5a5e8d.webp", alt: "Master Watchmaker at Bench" },
} as const;

export const featured = {
  section: { label: "Manufacture Calibres", index: "(KH® — 03)", year: "©2025" },
  badge: "Chronometry",
  heading: "Flagship Editions®",
  blurb:
    "Explore our collection of architectural mechanical sculptures, flying tourbillons, and high-frequency chronometers crafted for discerning collectors.",
  cta: { label: "View all calibres", href: "/work" },
  partnersLabel: "Certified chronometric partners & horological academies:",
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
  label: "Chronometric Precision",
  heading:
    "We obsess over every micron and oscillation to achieve pure horological excellence. Every number represents years of uncompromising mechanical development.®",
  items: [
    { value: 48, suffix: " Cal", title: "Annual Allocations", note: "Handcrafted strictly per calendar year." },
    { value: 72, suffix: " Hrs", title: "Power Reserve", note: "Twin-barrel constant force escapement." },
    { value: 5, suffix: " Hz", title: "Frequency", note: "36,000 VpH high-beat chronometer precision." },
  ],
} as const;

export const services = {
  section: { label: "Manufacture Expertise", index: "(KH® — 05)", year: "©2025" },
  heading: "Atelier Disciplines®",
  blurb: "From high-complication escapements to aerospace case metallurgy, we bring horological visions to life with extreme precision.",
  points: ["In-House Calibre Design", "Six-Position Regulation"],
  cta: { label: "Explore atelier", href: "/about" },
  items: [
    {
      title: "Flying Tourbillon Escapements",
      meta: "Regulators",
      dots: 1,
      image: { src: "/assets/img/bd5fc314fa9d47a7.webp", alt: "Escapement Cage" },
    },
    {
      title: "Titanium DLC Casecraft",
      meta: "Micro-Metallurgy",
      dots: 2,
      image: { src: "/assets/img/234c6dbc26640298.webp", alt: "Grade 5 Titanium Case" },
    },
    {
      title: "Architectural Skeletonization",
      meta: "Hand Finishing",
      dots: 3,
      image: { src: "/assets/img/1bea2d21aa8fae64.webp", alt: "Openworked Bridges" },
    },
    {
      title: "Astronomical Complications",
      meta: "Celestial Mechanics",
      dots: 4,
      image: { src: "/assets/img/78d7d1602c4c24f5.webp", alt: "Perpetual Moonphase" },
    },
  ],
  image: { src: "/assets/img/0cfc64781beb1454.webp", alt: "Master Watchmaker Loupe" },
} as const;

export const benefits = {
  section: { label: "Manufacture Engineering", index: "(KH® — 06)", year: "©2025" },
  speed: {
    title: "72-Hour continuous isochronal reserve.",
    note: "Constant torque delivered through twin skeletonized spring barrels",
    background: { src: "/assets/img/5886694812f185a9.webp", alt: "Titanium Movement Track" },
    wordmark: "/assets/img/0b0b825779059f31.webp",
  },
  platform: {
    caps: "GRADE 5 TITANIUM & SAPPHIRE",
    title: "Mono-chassis architecture",
    image: { src: "/assets/img/776f32e02c61ff45.webp", alt: "Curved Sapphire Crystal" },
  },
  support: {
    caps: "LIFETIME MANUFACTURE WARRANTY",
    title: "10 Yrs",
    body: "Comprehensive international atelier warranty with complete movement overhaul and chronometer re-certification.",
    background: { src: "/assets/img/a620b8960750125f.webp", alt: "Workshop Glow" },
    image: { src: "/assets/img/80933b24c07fa482.webp", alt: "Precision Timegrapher" },
  },
} as const;

export const testimonials = {
  section: { label: "Collector Testimonials", index: "(KH® — 07)", year: "©2025" },
  badge: "Connoisseurs",
  heading: "Trusted By Collectors.",
  blurb:
    "Reflections from prominent horologists, private collectors, and museum curators who hold KRONOS manufacture editions in their permanent vaults.",
  cta: { label: "Request allocation", href: "/contact" },
  items: [
    {
      body: "The K-1 Tourbillon represents the peak of contemporary independent watchmaking. The depth of the hand-beveled titanium bridges is simply astonishing under a 10x loupe.",
      name: "Jean-Luc Mercier",
      role: "Horological Curator",
      company: "Société Horlogère Suisse",
      avatar: { src: "/assets/img/838e29199fb7e503.webp", alt: "Jean-Luc Mercier" },
    },
    {
      body: "Owning a KRONOS timepiece is unlike anything else. The architecture of the case and the silent rotation of the flying tourbillon make it a work of modern kinetic art.",
      name: "Marcus Sterling",
      role: "Private Collector",
      company: "Geneva Vault Collection",
      avatar: { src: "/assets/img/9f76a4d14cf53ff6.webp", alt: "Marcus Sterling" },
    },
    {
      body: "The team accommodated every detail of my bespoke dial commission. From the DLC finish to the hand-polished chamfers, the execution surpassed all expectations.",
      name: "Hélène De Vries",
      role: "Architect & Collector",
      company: "De Vries Studio Zurich",
      avatar: { src: "/assets/img/46900bc9f0919c91.webp", alt: "Hélène De Vries" },
    },
    {
      body: "KRONOS's dedication to high-frequency chronometry sets a new benchmark for independent manufactures. A remarkable blend of avant-garde aesthetic and precision.",
      name: "David Laurent",
      role: "Senior Consultant",
      company: "Alpine Chronometry",
      avatar: { src: "/assets/img/b97be510e61141af.webp", alt: "David Laurent" },
    },
    {
      body: "The finishing on the column-wheel chronograph movement rivals the greatest historical maisons, yet the modern titanium case design is entirely forward-looking.",
      name: "Thomas Lindqvist",
      role: "Watchmaker & Reviewer",
      company: "Nordic Horology Review",
      avatar: { src: "/assets/img/a71b72ffd2a494b7.webp", alt: "Thomas Lindqvist" },
    },
  ],
} as const;

export const photography = {
  section: { label: "Micro-Details", index: "(KH® — 08)", year: "©2025" },
  badge: "Macrophotography",
  heading: "Every Micron Revealed.",
  blurb:
    "Capturing the hand-beveled titanium flanks, mirror-polished screw heads, and silicon hairsprings with macro-optical clarity and uncompromising reverence.",
  cta: { label: "Book atelier consultation", href: "/contact" },
} as const;

export const framerExpert = {
  section: { label: "Master Watchmakers", index: "(KH® — 09)", year: "©2025" },
  image: { src: "/assets/img/79050be13b38326b.webp", alt: "Master Watchmaker" },
  badge: "Manufacture Expertise",
  heading: "Master Horological Craftsmanship.",
  subheading: "Transcending Mechanical Boundaries®",
  body: "As an independent Swiss manufacture, our watchmakers combine classical Vallée de Joux handcraft with modern aerospace engineering. Every timepiece is assembled and regulated by a single dedicated artisan.",
  cta: { label: "View all calibres", href: "/work" },
  rating: "100% Chronometer Certified",
} as const;

export const pricing = {
  section: { label: "Commission Tiers", year: "©2025" },
  toggle: { monthly: "Standard Allocation", annual: "Collector Bespoke" },
  badge: "Allocations",
  heading: "Timepiece Allocations.",
  blurb:
    "Transparent commission structures for our limited annual editions. Custom engraving and bespoke rotor finishes included with every timepiece.",
  cta: { label: "Inquire allocation", href: "/contact" },
  includedLabel: "Included in commission",
  featureLabels: [
    "Grade 5 Titanium Case",
    "In-House Calibre",
    "Hand Anglage Finishing",
    "Manufacture Certificate",
    "Bespoke Collector Box",
    "10-Year Service Warranty",
  ],
  plans: [
    {
      name: "Edition K-2 Monolith",
      tag: "FLAGSHIP",
      monthly: "$38,000",
      annual: "$42,000",
      body: "39mm architectural chronometer with micro-rotor automatic winding and openworked titanium plates.",
      dots: 1,
      included: [true, true, true, true, false, false],
      cta: "Request Allocation",
    },
    {
      name: "Edition K-3 Chronograph",
      monthly: "$58,000",
      annual: "$64,000",
      body: "5Hz mono-pusher split-seconds column wheel chronograph with vertical friction clutch.",
      dots: 2,
      included: [true, true, true, true, true, false],
      cta: "Request Allocation",
    },
    {
      name: "Edition K-1 Tourbillon",
      monthly: "$98,000",
      annual: "$115,000",
      body: "42mm flying tourbillon in Grade 5 titanium with black-DLC coating and 72-hour power reserve.",
      dots: 3,
      included: [true, true, true, true, true, true],
      cta: "Request Allocation",
      image: { src: "/assets/img/5e1b7da60643ff2f.webp", alt: "K-1 Tourbillon Case" },
    },
  ],
} as const;

export const insights = {
  section: { label: "Horological Essays", index: "(KH® — 12)", year: "©2025" },
  badge: "Journal",
  heading: "Latest Horological Insights.",
  blurb:
    "Explore technical treatises on silicon escapements, sapphire case metallurgy, and the philosophical nature of mechanical chronometry.",
  cta: { label: "View all articles", href: "/blog" },
  image: { src: "/assets/img/2e51c49c33051cf0.webp", alt: "Horology Treatise" },
} as const;

export const contactSection = { label: "Commission An Allocation", index: "(KH® — 13)", year: "©2025" } as const;
