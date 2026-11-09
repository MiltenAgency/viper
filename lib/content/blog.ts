/** The three horological articles of KRONOS Horology. Slugs and image structure are strictly preserved. */

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
    slug: "polestar-new-ev",
    title: "The Physics of 5Hz Silicon Escapements",
    date: "Oct 18, 2025",
    category: "Chronometry",
    tags: ["Chronometry", "Silicon", "Escapements"],
    cover: { src: "/assets/img/f6615db6dc0ad58e.webp", alt: "Silicon Balance Spring" },
    heroBlurb:
      "Exploring the micro-mechanical dynamics of 36,000 VpH high-frequency regulating organs etched from monocrystalline silicon oxide.",
    blocks: [
      {
        label: "Innovation",
        lead: "By operating at 5Hz (36,000 vibrations per hour), modern escapements achieve unprecedented stability against shocks and gravity.®",
        body: "Monocrystalline silicon represents one of the most profound leaps forward in the history of horological materials. Unlike traditional Nivarox and Elinvar alloys, silicon is entirely non-ferromagnetic, impervious to thermal fluctuations within standard atmospheric bands, and naturally friction-free when micro-machined via Deep Reactive Ion Etching (DRIE). When driven at 5Hz, each oscillation slices time into tenth-of-a-second increments, recovering from external physical shocks in half the time of standard 2.5Hz or 3Hz balances.",
      },
      {
        label: "Aerodynamics",
        lead: "Minimizing air resistance on the balance wheel rim allows longer continuous amplitude across the power reserve.®",
        body: "At 36,000 vibrations per hour, aerodynamic turbulence along the balance rim creates measurable kinetic energy loss. KRONOS engineers sculpted a recessed aerodynamic profile for the variable-inertia titanium balance wheel, positioning the regulation masselottes internally within hollowed spokes. This reduces parasitic drag by 28%, enabling a constant 300-degree amplitude across the entire 72-hour power curve.",
      },
      {
        label: "Isochronism",
        lead: "Silicon hairsprings with integrated terminal curves eliminate the need for pins and regulator arms.",
        body: "Traditional regulator index pins restrict the breathing of the hairspring and introduce friction points. By etching an optimized terminal curve directly into the monocrystalline silicon structure, the hairspring breathes with perfect concentricity in all six physical orientations. Combined with our rigid free-sprung stud holder, the calibre maintains certified chronometer deviations within -1/+2 seconds per day.",
      },
    ],
    images: {
      wide1: { src: "/assets/img/8b049d28ecf0cdd1.webp", alt: "Silicon Escapement Inspection" },
      pair: [
        { src: "/assets/img/b0b2ac83cf4d96c9.webp", alt: "Optical Measurement Rig" },
        { src: "/assets/img/09cf1c42bfadc79b.webp", alt: "Balance Wheel Oscillation" },
      ],
      wide2: { src: "/assets/img/333d33ec6d347e4f.webp", alt: "Regulated Escapement Assembly" },
    },
  },
  {
    slug: "audemars-piguet",
    title: "Machining Curved Synthetic Sapphire Cases",
    date: "Aug 12, 2025",
    category: "Casecraft",
    tags: ["Sapphire", "Engineering", "Materials"],
    cover: { src: "/assets/img/296095649a24a9a4.webp", alt: "Curved Sapphire Crystal Case" },
    heroBlurb:
      "How diamond-tipped ultrasonic milling transforms ultra-hard synthetic corundum boules into seamless, optically flawless watch cases.",
    blocks: [
      {
        label: "Hardness",
        lead: "Possessing a Mohs hardness of 9, synthetic sapphire crystal resists every abrasive element except diamond itself.®",
        body: "Synthetic corundum is grown through the Verneuil or Kyropoulos method by melting pure aluminum oxide at 2,050 degrees Celsius. The resulting crystal cylindrical boules are completely transparent, inert, and nearly impervious to scratching. However, this extreme hardness makes traditional cutting methods completely obsolete: shaping a complex 3D ergonomic case profile demands diamond-impregnated ultrasonic tooling and weeks of continuous milling.",
      },
      {
        label: "Ultrasonics",
        lead: "Vibrating at 20,000 Hz, ultrasonic diamond tools micro-fracture sapphire without inducing internal stress cracks.®",
        body: "Direct mechanical shear stress shatters brittle corundum crystals. To carve the complex curvature of the KRONOS case and its integrated lug geometries, our CNC machines employ ultrasonic cavitation. High-frequency acoustic vibrations combined with an aqueous diamond slurry erode the material microscopic layer by microscopic layer, taking over 180 machine hours per case mid-section.",
      },
      {
        label: "Polishing",
        lead: "Over 200 hours of manual diamond paste polishing are required to restore optical clarity from milky frosted surfaces.®",
        body: "Directly after CNC shaping, the sapphire case appears milky white and translucent due to micro-fractured surface roughness. Master polishers slowly buff every external facet, inner cavity, and screw bore with progressively finer diamond pastes ranging from 30 microns down to 0.25 microns. The result is pure crystal transparency that allows ambient light to illuminate the openworked movement within.",
      },
    ],
    images: {
      wide1: { src: "/assets/img/6ac324c6a70dced9.webp", alt: "Corundum Boule Inspection" },
      pair: [
        { src: "/assets/img/c327b6a7eeb961b5.webp", alt: "5-Axis Ultrasonic CNC Chamber" },
        { src: "/assets/img/973b47bad456a188.webp", alt: "Diamond Polishing Station" },
      ],
      wide2: { src: "/assets/img/78b70384419bd42a.webp", alt: "Finished Sapphire Case" },
    },
  },
  {
    slug: "global-nikon-meetup",
    title: "Architectural Hand-Finishing & Anglage",
    date: "Jun 04, 2025",
    category: "Finishing",
    tags: ["Metiers d'Art", "Anglage", "Atelier"],
    cover: { src: "/assets/img/cdafa7eb4ef9633f.webp", alt: "Master Watchmaker Hand Finisher" },
    heroBlurb:
      "A deep dive into the ancestral art of inward angle chamfering, black mirror polishing, and traits-tirés on titanium bridges.",
    blocks: [
      {
        label: "Anglage",
        lead: "No computer or CNC tool in the world can replicate the razor-sharp definition of a hand-carved inward angle.®",
        body: "Anglage, or bevelling, involves paring down the sharp edges of movement bridges to a smooth 45-degree angle. While modern machines can produce rounded radii, a crisp, sharp interior corner where two bevels meet can only be executed by an artisan wielding a manual steel file and boxwood smoothing stick. A single misstep can ruin a titanium bridge that required forty hours of prior preparation.",
      },
      {
        label: "Black Polish",
        lead: "Known as poli miroir or black polish, this technique reflects light so uniformly that the metal appears pitch black from certain angles.®",
        body: "Black polishing is reserved for steel balance bridges, column wheels, and screw heads. The artisan rubs the component in figure-eight patterns across a zinc plate treated with fine diamond micron paste. The resulting flatness is measured in fractions of a light wavelength. Viewed straight on, the surface reflects all ambient light like a spotless mirror; tilted slightly, it becomes an infinite void.",
      },
      {
        label: "Dedication",
        lead: "In an era of mass industrialization, hand finishing preserves the soul and individual handwriting of the watchmaker.",
        body: "Every KRONOS timepiece takes between 150 and 300 hours of manual decorative work before assembly even begins. Under a 10x microscope or loupe, the collector discovers the subtle nuances of the finisher's hand: the rhythm of the satin strokes, the brilliance of the chamfers, and the warm glow of flame-blued screws. It is this human touch that transforms mechanical kinematics into timeless works of art.",
      },
    ],
    images: {
      wide1: { src: "/assets/img/d9c94ac854f6da15.webp", alt: "Hand Beveling Bench" },
      pair: [
        { src: "/assets/img/3a510b93cc7aa10e.webp", alt: "Boxwood Polishing Stick" },
        { src: "/assets/img/daed11ee27c6a319.webp", alt: "Black Polished Column Wheel" },
      ],
      wide2: { src: "/assets/img/4089502a0421ef20.webp", alt: "Finished Movement Bridge" },
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
  title: "Horological Essays",
  blurb:
    "Explore our technical treatises, metallurgical studies, and deep dives into the science and philosophy of modern haute horlogerie.",
  heroImage: { src: "/assets/img/a92c67265dda481b.webp", alt: "Haute Horlogerie Journal" },
  section: { label: "Technical Papers", index: "(KH® — 01)", year: "©2025" },
  moreUpdates: { label: "Recent Treatises", index: "(KH® — 02)", year: "©2024" },
} as const;
