/** The three technical padel articles of ATELIER PADEL PRIVÉ. */

export type PostBlock = { label: string; lead: string; body: string };

export type Post = {
  slug: string;
  title: string;
  date: string;
  /** Single tag on the index cards; the article hero carries the full set. */
  category: string;
  tags: string[];
  cover: { src: string; alt: string };
  heroBlurb: string;
  blocks: [PostBlock, PostBlock, PostBlock];
  images: {
    wide1: { src: string; alt: string };
    pair: [{ src: string; alt: string }, { src: string; alt: string }];
    wide2: { src: string; alt: string };
  };
};

export const posts: Post[] = [
  {
    slug: "architectural-arenas",
    title: "The Architectural Evolution of High-Acoustic Padel Arenas",
    date: "Nov 12, 2025",
    category: "Architecture",
    tags: ["Architecture", "Acoustics", "Structural Glass"],
    cover: { src: "/assets/img/padel-monolithic-glass.jpg", alt: "Acoustic Glass Pavilion" },
    heroBlurb:
      "How 12mm monolithic structural glass and micro-perforated carbon ceiling baffles eliminate reverberation, isolating the gunshot crack of ball impact.",
    blocks: [
      {
        label: "Acoustic Physics",
        lead: "Padel produces instantaneous sound pressure levels exceeding 105 decibels on overhead smashes.",
        body: "In standard steel-frame municipal halls, high-velocity ball strikes reverberate for up to 3.2 seconds. This creates auditory fatigue that disrupts player reaction timing and masks the delicate spin hiss of slice overheads. At Atelier Padel, our acoustic engineers integrated parametric ceiling baffles tuned to absorb frequencies between 250Hz and 2,000Hz, reducing reverberation time to under 0.6 seconds.",
      },
      {
        label: "Monolithic Glass",
        lead: "Eliminating corner posts and structural clamps delivers a mathematically uniform ball rebound.",
        body: "Traditional padel enclosures incorporate steel vertical supports that cause unpredictable ball kicks on corner shots. Our courts feature 12mm thermally toughened monolithic glass panels supported by external subterranean anchor footings and slim carbon tension cables. Ball deflection off the corner glass remains true to geometric incident angles.",
      },
      {
        label: "Visual Geometry",
        lead: "Dark arena envelopes paired with 1,200-lux indirect vertical illumination eliminate visual noise.",
        body: "By enveloping the court in matte charcoal wall surfaces and black silica sand turf, the optic lime padel ball achieves supreme visual contrast. Players read ball spin rotation and seam orientation fractions of a second earlier than on traditional blue-court surfaces.",
      },
    ],
    images: {
      wide1: { src: "/assets/img/padel-night-arena.jpg", alt: "Acoustic Arena Night View" },
      pair: [
        { src: "/assets/img/padel-lighting.jpg", alt: "Linear Ceiling Array" },
        { src: "/assets/img/padel-glasshouse.jpg", alt: "Corner Glass Detail" },
      ],
      wide2: { src: "/assets/img/padel-hero.jpg", alt: "Pavilion Architecture" },
    },
  },
  {
    slug: "bandeja-and-vibora",
    title: "Tactical Masterclass: The Pure Geometry of the Bandeja & Vibora",
    date: "Oct 28, 2025",
    category: "Tactics",
    tags: ["Tactics", "Biomechanics", "Vibora"],
    cover: { src: "/assets/img/padel-overhead-action.jpg", alt: "High-Velocity Smash" },
    heroBlurb:
      "Deconstructing the rotational mechanics, slice angles, and corner glass rebound trajectories required for professional tour-level overheads.",
    blocks: [
      {
        label: "Kinematic Chain",
        lead: "The modern vibora relies on horizontal forearm pronation and aggressive side-spin rather than downward smash force.",
        body: "While amateur players frequently confuse the vibora with a tennis slice overhead, the padel vibora is struck beside the body at head height with the racquet face tilted at approximately 45 degrees. The racquet wraps around the outside of the ball, imparting 3,000+ RPM of clockwise side-spin that forces the ball to slide horizontally off the back glass.",
      },
      {
        label: "Glass Geometry",
        lead: "Directing the ball into the side-wall nick neutralizes your opponent's ability to counter-attack.",
        body: "The definitive objective of the defensive bandeja is to maintain net position by delivering a deep, low-bouncing trajectory into the opponent's corner. When struck with exact backspin, the ball dies against the rear glass and rolls flat along the turf, eliminating any counter-lob opportunities.",
      },
      {
        label: "Racquet Balance",
        lead: "Customizing your racquet swing weight alters sweet-spot stability during rapid overhead transitions.",
        body: "A balance point shifted two millimeters toward the head increases smash terminal velocity by up to 8%, while a lower balance point enhances maneuverability for rapid reflex volleys at the net. Our racquet concierge measures and tunes swing weight to each member's shoulder biomechanics.",
      },
    ],
    images: {
      wide1: { src: "/assets/img/padel-tactics.jpg", alt: "Court Geometry Lines" },
      pair: [
        { src: "/assets/img/padel-vibora.jpg", alt: "Ball Slice Impact" },
        { src: "/assets/img/padel-ball-service.jpg", alt: "Optic Lime Compression" },
      ],
      wide2: { src: "/assets/img/padel-racquet-craft.jpg", alt: "Racquet Tuning Bench" },
    },
  },
  {
    slug: "recovery-science",
    title: "Recovery Protocols: Infrared Therapy, Cold Plunge & Lactate Flush",
    date: "Oct 14, 2025",
    category: "Performance",
    tags: ["Recovery", "Cryotherapy", "Sports Science"],
    cover: { src: "/assets/img/padel-cryo.jpg", alt: "Cold Plunge Recovery Suite" },
    heroBlurb:
      "Optimizing rapid physiological return after three-set matches through cold-water immersion, active compression, and cellular infrared resonance.",
    blocks: [
      {
        label: "Vasoconstriction",
        lead: "Three minutes of immersion in calibrated 3°C water halves peripheral inflammation and accelerates central nervous system recovery.",
        body: "Padel involves intense eccentric deceleration—sudden lunges, directional changes, and high-impact overhead landings that cause microscopic muscle damage in the quadriceps and calves. Cold water immersion triggers severe vasoconstriction, shunting blood to vital organs and flushing metabolic waste products out of working muscle beds.",
      },
      {
        label: "Infrared Resonance",
        lead: "Full-spectrum infrared cedar cabins promote cellular ATP synthesis and micro-circulation.",
        body: "Following cold immersion, members transition into our 60°C infrared cabins. The far-infrared wavelengths penetrate up to 4 centimeters beneath the skin, dilating blood vessels and delivering oxygen-rich hemoglobin to connective tissues and joint capsules in the rotator cuff.",
      },
      {
        label: "Pneumatic Compression",
        lead: "Pneumatic dynamic compression boots mimic natural muscle pump action to reduce post-match soreness.",
        body: "Sequenced compression cycles starting at the feet and progressing toward the heart clear pooled venous blood and lymphatic fluid. Twenty minutes of post-match compression restores joint mobility, leaving players fully primed for back-to-back tournament days.",
      },
    ],
    images: {
      wide1: { src: "/assets/img/padel-recovery.jpg", alt: "Cold Plunge Suite" },
      pair: [
        { src: "/assets/img/padel-sauna.jpg", alt: "Infrared Cedar Cabin" },
        { src: "/assets/img/padel-locker-suite.jpg", alt: "Private Changing Suite" },
      ],
      wide2: { src: "/assets/img/padel-lounge.jpg", alt: "Recovery Lounge Pavilion" },
    },
  },
];

export function postBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function otherPosts(slug: string) {
  const i = posts.findIndex((p) => p.slug === slug);
  return [posts[(i + 1) % posts.length], posts[(i + 2) % posts.length]];
}

export const blogPage = {
  eyebrow: "©2025",
  title: "Padel Journal",
  blurb:
    "Explore our technical treatises, court architecture studies, and deep dives into the biomechanics and tactical geometry of modern padel.",
  heroImage: { src: "/assets/img/padel-tactics.jpg", alt: "Atelier Padel Journal" },
  section: { label: "Technical Papers", index: "(AP® — 01)", year: "©2025" },
  moreUpdates: { label: "Recent Dispatches", index: "(AP® — 02)", year: "©2024" },
} as const;
