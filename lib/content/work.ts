/** The four flagship architectural courts of ATELIER PADEL PRIVÉ. */

export type CaseBlock = { label: string; lead: string; body: string };

export type Project = {
  slug: string;
  title: string;
  year: string;
  tags: string[];
  /** Card image on the /work grid and the case study hero. */
  cover: { src: string; alt: string };
  cardIntro: string;
  heroBlurb: string;
  knowMore: { label: string; heading: string };
  quote: { heading: string; body: string };
  blocks: [CaseBlock, CaseBlock, CaseBlock];
  images: {
    wide1: { src: string; alt: string };
    pair: [{ src: string; alt: string }, { src: string; alt: string }];
    wide2: { src: string; alt: string };
    wide3: { src: string; alt: string };
  };
};

export const projects: Project[] = [
  {
    slug: "glasshouse-stadium",
    title: "Centre Court Glasshouse",
    year: "2025",
    tags: ["Panoramic Glass", "Stadium Arena"],
    cover: { src: "/assets/img/padel-glasshouse.jpg", alt: "Centre Court Glasshouse" },
    cardIntro:
      "A 360° panoramic structural glass stadium court with 12mm monolithic acoustic panels and kiln-dried black silica micro-sand turf.",
    heroBlurb:
      "A 360° panoramic structural glass stadium court with 12mm monolithic acoustic panels and kiln-dried black silica micro-sand turf.",
    knowMore: {
      label: "Architectural Brief",
      heading:
        "Engineered to eliminate visual distortion and acoustic clutter, Centre Court Glasshouse delivers an immersive stadium atmosphere beneath glare-free broadcast lighting.®",
    },
    quote: {
      heading: "Sanctioned for Premier Padel Exhibition Events",
      body: "Centre Court Glasshouse is an uncompromising synthesis of structural glass engineering and tour-level sports architecture. Every panoramic pane is wire-tensioned without corner posts to ensure an unobstructed ball rebound from any attack angle. The black silica turf provides high-velocity traction with true vertical bounce.",
    },
    blocks: [
      {
        label: "Acoustic Glass",
        lead: "Seamless 12mm monolithic structural glass panes eliminate corner vibration and reduce reverberation.",
        body: "Traditional padel enclosures rely on corner pillar supports that create blind spots and inconsistent ball bounces off the back glass. For Centre Court, our structural engineers designed an uninterrupted 360-degree glass perimeter supported by slim aerospace-grade titanium tension cables. Ball deflection off the back and side glass is mathematically uniform across all four quadrants.",
      },
      {
        label: "Black Silica Turf",
        lead: "Kiln-dried black silica micro-sand creates unprecedented friction consistency and aesthetic minimalism.",
        body: "Standard blue and green quartz courts suffer from sand clumping and uneven friction that alters ball slide. Our proprietary black silica micro-sand is kiln-dried and vibrated deep into high-density textured fibrillated polyethylene turf fibers. The result is zero sand drift, zero player glare, and instantaneous deceleration for explosive lunges.",
      },
      {
        label: "Broadcast Lighting",
        lead: "Vertical indirect LED arrays deliver 1,200 lux with zero upward player glare during high overhead smashes.",
        body: "Tracking high-trajectory lobs and smash rebounds requires uncompromised visibility. Our custom linear LED arrays run along the upper perimeter fascia, bouncing diffuse light downward without creating blinding hotspots when looking directly upward toward the ceiling.",
      },
    ],
    images: {
      wide1: { src: "/assets/img/padel-hero.jpg", alt: "Glasshouse Stadium Overview" },
      pair: [
        { src: "/assets/img/padel-lighting.jpg", alt: "1200 Lux Lighting Array" },
        { src: "/assets/img/padel-monolithic-glass.jpg", alt: "Monolithic Structural Glass" },
      ],
      wide2: { src: "/assets/img/padel-night-arena.jpg", alt: "Exhibition Night Court" },
      wide3: { src: "/assets/img/padel-tactics.jpg", alt: "Court Geometry Lines" },
    },
  },
  {
    slug: "carbon-suite",
    title: "The Carbon Suite",
    year: "2025",
    tags: ["Private Telemetry", "Carbon Fiber"],
    cover: { src: "/assets/img/padel-carbon.jpg", alt: "The Carbon Suite" },
    cardIntro:
      "A private stealth training chamber lined with matte carbon acoustic baffles and 240fps high-velocity optical telemetry cameras.",
    heroBlurb:
      "A private stealth training chamber lined with matte carbon acoustic baffles and 240fps high-velocity optical telemetry cameras.",
    knowMore: {
      label: "Performance Brief",
      heading:
        "Designed for closed-door tactical refinement, The Carbon Suite combines matte carbon sound-dampening panels with instant multi-axis video telemetry.®",
    },
    quote: {
      heading: "Optical Telemetry System Calibrated to 240fps",
      body: "The Carbon Suite strips away every distraction. Acoustic carbon baffles soak up noise, turning every smash into a sharp, isolated report. Integrated high-speed sensor arrays track racquet head speed, ball exit velocity, and strike-point precision to within two millimeters.",
    },
    blocks: [
      {
        label: "Telemetry",
        lead: "High-speed camera telemetry tracks ball trajectory, spin RPM, and strike point coordinates.",
        body: "Twelve high-speed synchronised optical sensors track the ball from racquet impact through glass rebound. Real-time telemetry is calculated and displayed on courtside touch monitors, allowing members to review their bandeja spin mechanics and smash angles frame by frame.",
      },
      {
        label: "Acoustics",
        lead: "Perforated carbon fiber wall paneling eliminates echo for laser-focused concentration.",
        body: "Sound reverberation in standard indoor sports halls causes sensory fatigue and masks crucial acoustic cues like ball spin frequency. The Carbon Suite features micro-perforated carbon acoustic baffles backed by recycled acoustic fleece, achieving a Noise Reduction Coefficient of 0.85.",
      },
      {
        label: "Private Salon",
        lead: "Dedicated changing suite, chilled towels, and temperature-controlled racquet lockers.",
        body: "Members enjoy direct private elevator access to The Carbon Suite, with dedicated personal locker rooms, custom racquet heating cabinets, and direct access to personal tour coaches without passing through public areas.",
      },
    ],
    images: {
      wide1: { src: "/assets/img/padel-acoustics.jpg", alt: "Carbon Acoustic Panels" },
      pair: [
        { src: "/assets/img/padel-racket.jpg", alt: "Bespoke Carbon Racquet" },
        { src: "/assets/img/padel-racquet-craft.jpg", alt: "Racquet Crafting & Tuning" },
      ],
      wide2: { src: "/assets/img/padel-biomechanics.jpg", alt: "Telemetry Analysis Screen" },
      wide3: { src: "/assets/img/padel-ball-service.jpg", alt: "High-Velocity Impact" },
    },
  },
  {
    slug: "sky-pavilion",
    title: "The Sky Pavilion",
    year: "2025",
    tags: ["Rooftop Arena", "Monaco Skyline"],
    cover: { src: "/assets/img/padel-sky.jpg", alt: "The Sky Pavilion" },
    cardIntro:
      "An open-air rooftop court suspended above the harbour, featuring micro-textured black turf and optic lime floodlighting.",
    heroBlurb:
      "An open-air rooftop court suspended above the harbour, featuring micro-textured black turf and optic lime floodlighting.",
    knowMore: {
      label: "Atmospheric Brief",
      heading:
        "Perched above the Mediterranean coastline, The Sky Pavilion merges panoramic sea vistas with wind-dampened glass engineering.®",
    },
    quote: {
      heading: "Elevated Court Architecture on the Riviera",
      body: "Playing at The Sky Pavilion during twilight is an unmatched sensory experience. Wind-deflecting perimeter glass shields the court from coastal gusts while preserving uninterrupted horizon views across the Monaco harbour.",
    },
    blocks: [
      {
        label: "Coastal Engineering",
        lead: "Laminated marine-grade glass baffles mitigate wind turbulence across the court envelope.",
        body: "Rooftop sports courts frequently suffer from unpredictable wind currents that disrupt delicate drop shots and chiquitas. The Sky Pavilion employs aerodynamic glass louvers that direct coastal winds upward over the arena, creating a calm micro-climate on court.",
      },
      {
        label: "Night Lighting",
        lead: "Slender architectural floodlight pylons produce minimal light pollution while illuminating the black turf.",
        body: "Engineered in collaboration with architectural lighting designers, the mast-mounted LED projectors deliver sharp optical cutoff angles, focusing all light strictly within the 20x10 meter playing boundary with zero spill into the night sky.",
      },
      {
        label: "Pavilion Terrace",
        lead: "Open-air spectator terrace with heated lounge seating overlooking the court.",
        body: "The adjacent terrace features sunken teak seating, an outdoor refreshment bar serving cold-pressed juices and signature cocktails, and ambient audio calibrated to match the rhythm of evening play.",
      },
    ],
    images: {
      wide1: { src: "/assets/img/padel-rooftop.jpg", alt: "Sky Pavilion Rooftop Panorama" },
      pair: [
        { src: "/assets/img/padel-overhead-action.jpg", alt: "Overhead Smash" },
        { src: "/assets/img/padel-vibora.jpg", alt: "Vibora Ball Flight" },
      ],
      wide2: { src: "/assets/img/padel-patron-suite.jpg", alt: "Patron Terrace Lounge" },
      wide3: { src: "/assets/img/padel-clubhouse.jpg", alt: "Rooftop Club Architecture" },
    },
  },
  {
    slug: "biomechanics-lab",
    title: "The Biomechanics Lab",
    year: "2025",
    tags: ["Athletic Recovery", "Cryotherapy"],
    cover: { src: "/assets/img/padel-recovery.jpg", alt: "The Biomechanics Lab" },
    cardIntro:
      "A private sports medicine sanctuary equipped with stainless steel cold plunges, infrared sauna suites, and lactate recovery telemetry.",
    heroBlurb:
      "A private sports medicine sanctuary equipped with stainless steel cold plunges, infrared sauna suites, and lactate recovery telemetry.",
    knowMore: {
      label: "Recovery Brief",
      heading:
        "Designed to accelerate muscular restoration and central nervous system recovery through contrast hydrotherapy and cellular infrared sauna pods.®",
    },
    quote: {
      heading: "Clinical Sports Recovery Protocol",
      body: "Peak athletic performance demands as much reverence for restoration as it does for training. The Biomechanics Lab combines medical-grade cold water immersion with infrared thermal cabins to flush metabolic waste and restore full rotational power in under 45 minutes.",
    },
    blocks: [
      {
        label: "Cold Water Immersion",
        lead: "Medical-grade 3°C cold plunge tubs with continuous ozone filtration.",
        body: "Rapid post-match immersion in calibrated 3°C water constricts peripheral blood vessels, mitigates micro-trauma inflammation in shoulder and knee joints, and triggers an invigorating dopamine surge that resets mental clarity.",
      },
      {
        label: "Infrared Resonance",
        lead: "Full-spectrum infrared cedar cabins that penetrate deep into joint tissue.",
        body: "Unlike traditional dry saunas that simply heat the ambient air, our full-spectrum infrared emitters resonate with deep muscular tissue, boosting cellular ATP production, increasing vasodilation, and releasing fascia tension accumulated over intense sets.",
      },
      {
        label: "Physiotherapy",
        lead: "Resident sports medicine practitioners specializing in rotator cuff and Achilles maintenance.",
        body: "Members can book pre-match mobility priming or post-match manual therapy with our certified physical therapists, ensuring longevity, explosive lateral mobility, and zero downtime across the competitive season.",
      },
    ],
    images: {
      wide1: { src: "/assets/img/padel-cryo.jpg", alt: "Hydrotherapy Cold Plunge" },
      pair: [
        { src: "/assets/img/padel-sauna.jpg", alt: "Infrared Cedar Cabin" },
        { src: "/assets/img/padel-locker-suite.jpg", alt: "Private Changing Suite" },
      ],
      wide2: { src: "/assets/img/padel-biomechanics.jpg", alt: "Force-Plate Biomechanics Screen" },
      wide3: { src: "/assets/img/padel-lounge.jpg", alt: "Recovery Lounge Pavilion" },
    },
  },
];

export function projectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Case studies close with the two projects that follow them in the list. */
export function otherProjects(slug: string) {
  return projects.filter((p) => p.slug !== slug).slice(0, 2);
}

export const workPage = {
  eyebrow: "©2025",
  title: "Courts",
  blurb:
    "From 360° panoramic structural glass stadium arenas to private telemetry chambers and rooftop skyline pavilions, explore our architectural sanctuary.",
  heroImage: { src: "/assets/img/padel-night-arena.jpg", alt: "Atelier Padel Court Pavilion" },
  section: { label: "Architectural Courts", index: "(AP® — 01)", year: "©2025" },
  previewLabel: "View Court",
  moreWorks: { label: "More Arenas", index: "(AP® — 02)", year: "©2024" },
} as const;
