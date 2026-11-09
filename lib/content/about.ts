/** About and contact page copy for KRONOS Horology. */

export const aboutPage = {
  hero: {
    year: "©2025",
    title: "About KRONOS",
    blurb:
      "Founded in the Swiss Jura, KRONOS Horology is dedicated to redefining architectural mechanical watchmaking through extreme materials and ancestral handcraft.",
    image: { src: "/assets/img/d0d2a0c6f018468d.webp", alt: "KRONOS Manufacture Atelier" },
  },
  passion: {
    label: "Haute Horlogerie Heritage",
    heading:
      "Every mechanical calibre is an opportunity to defy gravity, sculpt light, and push chronometric limits. Welcome to the modern vanguard of Swiss watchmaking.®",
    cta: { label: "Commission Allocation", href: "/contact" },
    rows: [
      {
        title: "High-Frequency Regulators",
        body: "Proprietary 5Hz silicon escapements and variable-inertia titanium balance wheels delivering unprecedented rate stability in all six positions.",
        price: "36,000 VpH",
      },
      {
        title: "Grade 5 Titanium Metallurgy",
        body: "Mono-chassis cases wire-eroded from aerospace-grade titanium, coated in diamond-like carbon (DLC) for extreme 3,000 Vickers surface hardness.",
        price: "Grade 5 Ti",
      },
      {
        title: "Ancestral Hand Finishing",
        body: "Over 120 hours of manual interior angle anglage, black mirror polishing, and circular perlage executed under 10x binocular loupes.",
        price: "120+ Hours",
      },
    ],
  },
  awards: {
    section: { label: "Manufacture Accolades", index: "(KH® — 03)", year: "©2025" },
    heading: "Grand Prix Awards®",
    blurb: "KRONOS calibres have received prestigious recognitions celebrating innovation in contemporary mechanical chronometry.",
    points: ["Grand Prix d'Horlogerie de Genève", "Observatoire Chronometry Honors"],
    cta: { label: "Request atelier dossier", href: "/contact" },
    items: [
      { icon: "/assets/img/62eadcb39fe5737e.svg", title: "GPHG - Tourbillon Watch Prize", note: "K-1 Flying Tourbillon Edition", count: "01x" },
      { icon: "/assets/img/3310e530ab52f689.svg", title: "Concours International de Chronométrie", note: "First Prize 1st Class", count: "04x" },
      { icon: "/assets/img/40dcc75b811846c0.svg", title: "Red Dot Best of the Best - Case Design", note: "K-2 Monolith Titanium", count: "02x" },
      { icon: "/assets/img/64fce9881322601f.svg", title: "Poinçon d'Innovation Horlogère", note: "Spherical Differential Calibre", count: "01x" },
      { icon: "/assets/img/51facabf18c7d76b.svg", title: "Fondation de la Haute Horlogerie", note: "Independent Manufacture Label", count: "08x" },
    ],
    image: { src: "/assets/img/98de33cabc7134be.webp", alt: "Master Watchmaker with Loupe" },
  },
  practice: {
    section: { label: "Manufacture Guild", index: "(KH® — 04)", year: "©2025" },
    heading: "Atelier Masters",
    blurb: "Our team of master horologists, metallurgical engineers, and decorative artisans.",
    cta: { label: "Inquire allocation", href: "/contact" },
    roles: [
      {
        company: "Manufacture Le Brassus",
        title: "Master Movement Prototypeur",
        period: "2019 – Present",
        body: "Overseeing kinematic simulation, high-complication differential gear trains, and flying tourbillon assembly.",
      },
      {
        company: "Atelier Neuchâtel",
        title: "Head of Hand Finishing & Anglage",
        period: "2016 – 2019",
        body: "Specializing in inward-angle mirror bevelling, boxwood smoothing sticks, and black polish zinc plates.",
      },
      {
        company: "Société Horlogère",
        title: "Senior Chronometer Adjuster",
        period: "2012 – 2016",
        body: "Poising variable inertia balances, terminal hairspring forming, and six-position thermal chronometer regulation.",
      },
    ],
  },
  stack: {
    section: { label: "Manufacture Tooling", index: "(KH® — 05)", year: "©2025" },
    badge: "Atelier Tools",
    heading: "Precision Tooling",
    blurb:
      "Our atelier marries ultra-high-precision 5-axis Swiss CNC milling machines with ancestral boxwood sticks, Bergeon watchmaker benches, and optical comparators.",
    cta: { label: "Private Atelier Consultation", href: "/contact" },
    items: [
      {
        icon: "/assets/img/62eadcb39fe5737e.svg",
        title: "Schaublin - 5-Axis Milling",
        tag: "CNC",
        body: "Ultra-precision wire erosion and micron-tolerance CNC milling capable of carving Grade 5 titanium bridges with 0.001mm repeatability.",
      },
      {
        icon: "/assets/img/40dcc75b811846c0.svg",
        title: "Bergeon - Bench Ergonomics",
        body: "Ergonomic oak watchmaker benches equipped with shadowless anti-glare illumination and pressurized laminar-flow dust extraction.",
      },
      {
        icon: "/assets/img/51facabf18c7d76b.svg",
        title: "Witschi - Chronoscope Timing",
        body: "Acoustic and optical timegraphers capable of measuring balance amplitude, beat error, and rate stability across 6 testing positions in real time.",
      },
      {
        icon: "/assets/img/64fce9881322601f.svg",
        title: "Mitutoyo - Optical Comparators",
        body: "High-resolution optical profilometers and laser interferometers checking tooth profiles of escapement pinions down to sub-micron tolerances.",
      },
      {
        icon: "/assets/img/3310e530ab52f689.svg",
        title: "Leitz - Binocular Microscopes",
        body: "Stereoscopic 40x optical inspection stations utilized for manual bevel checking, jewel seating, and silicon escapement poising.",
      },
    ],
    feature: { src: "/assets/img/317b72c6b847ce2e.webp", alt: "Microscopic Escapement Inspection" },
  },
  faqImage: { src: "/assets/img/e18612ef26474ea1.webp", alt: "Precision Watchmaker Loupe" },
  contactSection: { label: "Commission An Allocation", index: "(KH® — 07)", year: "©2025" },
} as const;

export const contactPage = {
  hero: {
    year: "©2025",
    title: "Private Atelier",
    blurb:
      "We invite collectors, connoisseurs, and prospective patrons to contact our private salon in Le Brassus or arrange a personal consultation.",
    image: { src: "/assets/img/ed8c7a9b5fe31ece.webp", alt: "KRONOS Private Salon" },
  },
  section: { label: "Atelier Appointment", index: "(KH® — 01)", year: "©2025" },
  badge: "Private Salon",
  heading: "Commission Allocation",
  blurb: "Inquire about current allocation lists, bespoke movement finishing options, or schedule a private consultation at our manufacture.",
  addressTitle: "Manufacture Address",
  address: "Route des Horlogers 14, 1348 Le Brassus, Vallée de Joux, Switzerland",
} as const;
