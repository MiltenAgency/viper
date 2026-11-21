/** About and contact page copy for ATELIER PADEL PRIVÉ. */

export const aboutPage = {
  hero: {
    year: "©2025",
    title: "About Atelier",
    blurb:
      "Founded in Monaco and Geneva, ATELIER PADEL PRIVÉ is an architectural sanctuary dedicated to the pure geometry, acoustics, and high-velocity performance of modern padel.",
    image: { src: "/assets/img/padel-hero.jpg", alt: "Atelier Padel Court Pavilion" },
  },
  passion: {
    label: "Sanctuary Heritage",
    heading:
      "Every court is an architectural sculpture engineered for acoustic clarity, explosive lateral traction, and uncompromised player focus. Welcome to the private vanguard of padel.®",
    cta: { label: "Request Allocation", href: "/contact" },
    rows: [
      {
        title: "Monolithic Structural Glass",
        body: "12mm acoustic tempered glass panes installed without corner posts, ensuring mathematically pure ball rebounds across all quadrants.",
        price: "12mm Glass",
      },
      {
        title: "Kiln-Dried Black Silica Sand",
        body: "High-density fibrillated polyethylene turf infused with micro-textured black silica, eliminating sand drift and surface glare.",
        price: "Black Silica",
      },
      {
        title: "Optical Telemetry Cameras",
        body: "240fps high-velocity camera arrays tracking ball exit velocity, spin RPM, and recovery angles in real time.",
        price: "240fps AI",
      },
    ],
  },
  awards: {
    section: { label: "Sanctuary Accolades", index: "(AP® — 03)", year: "©2025" },
    heading: "Court Architecture Awards®",
    blurb: "Atelier Padel arenas have received international recognitions celebrating innovation in contemporary sports architecture.",
    points: ["Premier Padel Venue Sanction", "World Architecture Festival Sports Winner"],
    cta: { label: "Request sanctuary dossier", href: "/contact" },
    items: [
      { icon: "/assets/img/62eadcb39fe5737e.svg", title: "WAF - Best Private Sports Architecture", note: "Centre Court Glasshouse", count: "01x" },
      { icon: "/assets/img/3310e530ab52f689.svg", title: "European Padel Venue of the Year", note: "First Prize 1st Class", count: "03x" },
      { icon: "/assets/img/40dcc75b811846c0.svg", title: "Red Dot Best of the Best - Arena Lighting", note: "Anti-Glare LED Array", count: "02x" },
      { icon: "/assets/img/64fce9881322601f.svg", title: "Premier Padel Innovation Seal", note: "240fps Telemetry Framework", count: "01x" },
      { icon: "/assets/img/51facabf18c7d76b.svg", title: "Monaco Riviera Private Club Award", note: "Sanctuary Club of the Year", count: "05x" },
    ],
    image: { src: "/assets/img/padel-glasshouse.jpg", alt: "Glass Court Architecture" },
  },
  practice: {
    section: { label: "Sanctuary Masters", index: "(AP® — 04)", year: "©2025" },
    heading: "Resident Masters",
    blurb: "Our team of former tour professionals, biomechanics engineers, and racquet master stringers.",
    cta: { label: "Inquire coaching", href: "/contact" },
    roles: [
      {
        company: "Monaco Sanctuary",
        title: "Head of High-Performance Coaching",
        period: "2021 – Present",
        body: "Former top-20 Premier Padel tour athlete overseeing tactical biomechanics analysis and match play coaching.",
      },
      {
        company: "Geneva Sanctuary",
        title: "Racquet Concierge & Master Stringer",
        period: "2018 – Present",
        body: "Specializing in custom 24K carbon racquet weight-calibration, lead balancing, and climate-adjusted string tension.",
      },
      {
        company: "Sports Medicine Unit",
        title: "Director of Biomechanics & Recovery",
        period: "2020 – Present",
        body: "Supervising contrast hydrotherapy protocols, infrared sauna programs, and tournament physical therapy.",
      },
    ],
  },
  stack: {
    section: { label: "Sanctuary Technology", index: "(AP® — 05)", year: "©2025" },
    badge: "Court Hardware",
    heading: "Performance Tooling",
    blurb:
      "Our sanctuary marries ultra-high-speed 240fps multi-axis optical cameras with acoustic structural glass, diagnostic telemetry displays, and precision electronic stringing machines.",
    cta: { label: "Private Sanctuary Consultation", href: "/contact" },
    items: [
      {
        icon: "/assets/img/62eadcb39fe5737e.svg",
        title: "TrackMan - 240fps Optical Telemetry",
        tag: "CAMERAS",
        body: "Synchronized dual-angle 240fps high-velocity sensors tracking ball exit speed, spin RPM, and recovery angles to millimeter accuracy.",
      },
      {
        icon: "/assets/img/40dcc75b811846c0.svg",
        title: "Babolat - Sensor Dual Electronic Stringer",
        body: "Digital tension heads adjusting string friction down to 0.1kg tolerances matched to court temperature and atmospheric pressure.",
      },
      {
        icon: "/assets/img/51facabf18c7d76b.svg",
        title: "HydroTherapy - 3°C Rapid Cold Plunge",
        body: "Medical-grade stainless steel contrast water immersion tubs with ozone sanitization for instantaneous lactate flush.",
      },
      {
        icon: "/assets/img/64fce9881322601f.svg",
        title: "K-Laser - Cellular Infrared Recovery Pods",
        body: "Full-spectrum far-infrared ceramic emitters boosting cellular ATP synthesis and clearing shoulder rotator cuff fatigue.",
      },
      {
        icon: "/assets/img/3310e530ab52f689.svg",
        title: "ForceDecks - Dual Force Plate Biomechanics",
        body: "High-resolution ground reaction force sensors analyzing eccentric deceleration, lunge symmetry, and vertical jump power.",
      },
    ],
    feature: { src: "/assets/img/padel-acoustics.jpg", alt: "Court Architecture Detail" },
  },
  faqImage: { src: "/assets/img/padel-racket.jpg", alt: "Bespoke Carbon Racquet" },
  contactSection: { label: "Request A Membership Allocation", index: "(AP® — 07)", year: "©2025" },
} as const;

export const contactPage = {
  hero: {
    year: "©2025",
    title: "Private Salon",
    blurb:
      "We invite prospective patron members, touring professionals, and private guests to connect with our concierge in Monaco or Geneva.",
    image: { src: "/assets/img/padel-lounge.jpg", alt: "Atelier Padel Private Lounge" },
  },
  section: { label: "Sanctuary Allocation", index: "(AP® — 01)", year: "©2025" },
  badge: "Private Sanctuary",
  heading: "Membership Allocation",
  blurb: "Inquire about current patron allocation rosters, private glasshouse court reservations, or arrange a private consultation.",
  addressTitle: "Sanctuary Locations",
  address: "Quai Antoine 1er, Port Hercule, 98000 Monaco & Route de Suisse 42, 1290 Versoix, Geneva",
} as const;
