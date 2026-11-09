/** The four timepiece editions of KRONOS Horology. Slugs and image structure are strictly preserved. */

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
    slug: "raven-claw",
    title: "K-1 Tourbillon Black DLC",
    year: "2025",
    tags: ["Tourbillon", "Titanium DLC"],
    cover: { src: "/assets/img/af40ead459fe7772.webp", alt: "K-1 Tourbillon Timepiece" },
    cardIntro:
      "A 42mm flying tourbillon sculpture wire-eroded from Grade 5 titanium with diamond-like carbon coating and sapphire bridge work.",
    heroBlurb:
      "A 42mm flying tourbillon sculpture wire-eroded from Grade 5 titanium with diamond-like carbon coating and sapphire bridge work.",
    knowMore: {
      label: "Horological Brief",
      heading:
        "Engineered to defy gravity while maintaining extreme structural minimalism, the K-1 houses a 60-second flying tourbillon cage suspended beneath dual anti-reflective sapphire crystals.®",
    },
    quote: {
      heading: "Chronometer Certified by Observatoire de Genève",
      body: "The K-1 Tourbillon is an uncompromising synthesis of aerospace metallurgy and centuries of high horology traditions. Every titanium bridge is openworked by 5-axis wire erosion and hand-beveled with diamond paste to achieve mirror specular anglage. The flying tourbillon cage weighs a mere 0.28 grams, regulated to chronometer standards across six positions.",
    },
    blocks: [
      {
        label: "Architecture",
        lead: "Balancing ultra-lightweight structural titanium with the delicate inertia required by a high-frequency flying tourbillon demanded four years of micro-mechanical simulation.",
        body: "Traditional tourbillon carriages rely on brass or gold alloys, which introduce inertial drag and reduce amplitude over time. For the K-1, our horological engineers developed a bespoke cage crafted entirely from Grade 5 titanium with variable inertia weights. Running at 21,600 vibrations per hour, the escapement operates with an isochronal precision that delivers -1/+2 seconds per day across its full 72-hour power reserve. The black diamond-like carbon (DLC) treatment provides extreme surface hardness of 3,000 Vickers while eliminating glare across the movement.",
      },
      {
        label: "Finishing",
        lead: "Every single component receives over 140 hours of manual decoration by master finishers in our Le Brassus atelier.",
        body: "In haute horlogerie, true value lies in the invisible details. The K-1’s mainplate and bridges feature deep internal angles that cannot be achieved by CNC tooling alone—they require hand-carved chamfers executed with boxwood sticks and diamond pastes. The titanium bridges are brushed with traits-tirés straight graining, while the steel pinions and wheels feature concentric circular perlage. The contrast between deep velvet black DLC surfaces and radiant mirror-polished chamfers creates dramatic visual depth.",
      },
      {
        label: "Escapement",
        lead: "A silicon hairspring and titanium balance wheel ensure absolute immunity to magnetic fields up to 15,000 Gauss.",
        body: "Modern life surrounds timepieces with magnetic flux from laptops, electric vehicles, and smartphones. The K-1 solves this horological vulnerability through a proprietary paramagetic silicon balance spring with terminal curve optimization. Combined with an openworked twin-barrel system that distributes torque evenly across three days, the K-1 Tourbillon represents the pinnacle of modern Swiss chronometry.",
      },
    ],
    images: {
      wide1: { src: "/assets/img/30a196f5485c3943.webp", alt: "Titanium Case Profile" },
      pair: [
        { src: "/assets/img/1df8e86e9892276e.webp", alt: "Flying Tourbillon Cage" },
        { src: "/assets/img/18219ef1a7631c04.webp", alt: "Sapphire Dial Detail" },
      ],
      wide2: { src: "/assets/img/d5da4fa895da2f4b.webp", alt: "Micro-Mechanical Bridges" },
      wide3: { src: "/assets/img/d287344b3cd03c11.webp", alt: "DLC Coated Crown" },
    },
  },
  {
    slug: "willow-studio",
    title: "K-2 Monolith Titanium",
    year: "2024",
    tags: ["Chronometer", "Mono-Chassis"],
    cover: { src: "/assets/img/f50d9c9756c8f409.webp", alt: "K-2 Monolith Titanium Watch" },
    cardIntro:
      "An ultra-slim 39mm architectural chronometer featuring micro-rotor automatic winding and hand-beveled titanium plates.",
    heroBlurb:
      "An ultra-slim 39mm architectural chronometer featuring micro-rotor automatic winding and hand-beveled titanium plates.",
    knowMore: {
      label: "Horological Brief",
      heading:
        "The K-2 Monolith is carved from a single monobloc block of titanium, integrating the case, lugs, and bezel into a seamless ergonomic sculpture measuring just 7.8mm in total thickness.®",
    },
    quote: {
      heading: "Architectural Purity in Haute Horlogerie",
      body: "Stripped of all decorative superfluity, the K-2 Monolith lets raw materials speak for themselves. The dial is the movement itself: a multi-layered matrix of satin-brushed titanium bridges, ruthenium gear wheels, and blued steel screws. Powered by our in-house calibre KH-02 with a platinum micro-rotor.",
    },
    blocks: [
      {
        label: "Mono-Chassis",
        lead: "Eliminating the traditional multi-piece case construction allowed our engineers to achieve 100-meter water resistance in an ultra-thin profile.",
        body: "Conventional luxury watch cases rely on separate casebacks, bezels, and mid-cases held together with screws and rubber gaskets. The K-2 utilizes an advanced mono-chassis design milled from aerospace Grade 5 titanium. The entire calibre is loaded from the front of the case before the double-domed sapphire crystal is laser-sealed into place. This yields unprecedented structural rigidity, torsion resistance, and wrist ergonomic comfort.",
      },
      {
        label: "Micro-Rotor",
        lead: "A bi-directional winding micro-rotor in solid 950 platinum delivers 65 hours of autonomous power without adding movement height.",
        body: "Central automatic rotors obscure half the movement and increase overall thickness. By recessing a high-density 950 platinum micro-rotor directly flush with the top bridges, the calibre KH-02 maintains an ultra-flat 3.2mm height while offering effortless winding efficiency. Mounted on micro-ceramic ball bearings, the rotor winds silently with minimal friction.",
      },
      {
        label: "Ergonomics",
        lead: "Engineered to fit the curvature of the human wrist with integrated titanium bracelet links and micro-adjustment clasp.",
        body: "The K-2 Monolith weighs only 68 grams on the wrist, including the full titanium link bracelet. Every link is individually chamfered and satin-brushed by hand. The tapered geometry flows seamlessly from the 39mm case down to an 18mm hidden folding butterfly clasp, creating a bespoke tailored tactile sensation for the wearer.",
      },
    ],
    images: {
      wide1: { src: "/assets/img/a92c67265dda481b.webp", alt: "Monolith Titanium Case" },
      pair: [
        { src: "/assets/img/f568aa91567fdec6.webp", alt: "Micro-Rotor Mechanism" },
        { src: "/assets/img/f24e832c9643ff2c.webp", alt: "Integrated Bracelet Links" },
      ],
      wide2: { src: "/assets/img/5b35a0a2cfe1f9f4.webp", alt: "Sapphire Caseback View" },
      wide3: { src: "/assets/img/83b3f5bc11c493dc.webp", alt: "Dial Macro Detail" },
    },
  },
  {
    slug: "maison-law",
    title: "K-3 Chronograph Tachymeter",
    year: "2024",
    tags: ["Chronograph", "Column Wheel"],
    cover: { src: "/assets/img/f1162a212eb4a43e.webp", alt: "K-3 Chronograph Tachymeter" },
    cardIntro:
      "A high-frequency 5Hz mono-pusher split-seconds chronograph with vertical friction clutch and ceramic ball-bearing rotor.",
    heroBlurb:
      "A high-frequency 5Hz mono-pusher split-seconds chronograph with vertical friction clutch and ceramic ball-bearing rotor.",
    knowMore: {
      label: "Horological Brief",
      heading:
        "Operating at 36,000 vibrations per hour (5Hz), the K-3 Chronograph Tachymeter measures elapsed time down to one-tenth of a second with razor-sharp column wheel tactile engagement.®",
    },
    quote: {
      heading: "Mastering Split-Second Time Measurement",
      body: "The split-seconds rattrapante chronograph is widely recognized as one of the three most difficult complications to assemble and regulate in horology. The K-3 pairs this historic complication with a modern vertical clutch system that guarantees zero hand stutter upon chronograph actuation.",
    },
    blocks: [
      {
        label: "Kinematics",
        lead: "A high-frequency 5Hz balance wheel delivers ten discrete beats per second for ultra-precise split-second racing timing.",
        body: "At 36,000 vibrations per hour, the balance wheel oscillates with intense kinetic energy, requiring specialized synthetic lubrication and an optimized tooth profile on the escape wheel. The mono-pusher coaxially located in the crown commands start, stop, and reset functions through a single solid titanium column wheel with eight polished pillars. An additional pusher at 10 o'clock actuates the split-seconds rattrapante brake.",
      },
      {
        label: "Clutch Design",
        lead: "A vertical friction clutch eliminates the notorious jump of the chronograph seconds hand common in horizontal coupling.",
        body: "Traditional horizontal chronograph clutches cause an unsightly twitch when the gears mesh. The K-3 features micro-machined vertical clutch discs with diamond-like friction coating, ensuring immediate, smooth hand progression the instant the pusher is depressed. The minute counter snaps instantaneously at the exact 60-second mark via a jumping heart cam.",
      },
      {
        label: "Dial Architecture",
        lead: "Multi-layered smoked sapphire subdials reveal the intricate ballet of chrono levers and return hammers beneath.",
        body: "Rather than covering the mechanics with an opaque brass dial, the K-3 uses smoked sapphire discs with laser-etched tachymeter indices filled with Super-LumiNova Grade X1. Collectors can observe the column wheel turning and the rattrapante clamps gripping the split wheel in real time while tracking elapsed speed up to 400 km/h.",
      },
    ],
    images: {
      wide1: { src: "/assets/img/93ec508d1d6ae079.webp", alt: "Chronograph Profile" },
      pair: [
        { src: "/assets/img/c6b5b93d1af2c5a5.webp", alt: "Column Wheel Mechanism" },
        { src: "/assets/img/119f9ca70f9186d1.webp", alt: "Split Seconds Pusher" },
      ],
      wide2: { src: "/assets/img/8b049d28ecf0cdd1.webp", alt: "Smoked Sapphire Subdial" },
      wide3: { src: "/assets/img/d12e2583bb06dc43.webp", alt: "Chronograph Caseback" },
    },
  },
  {
    slug: "mystic-meadows",
    title: "K-4 Openworked Skeleton",
    year: "2023",
    tags: ["High Complication", "Sapphire Dial"],
    cover: { src: "/assets/img/509d69628b943665.webp", alt: "K-4 Openworked Skeleton" },
    cardIntro:
      "A fully transparent sapphire case housing a double-balance differential movement with deadbeat seconds and power reserve indicator.",
    heroBlurb:
      "A fully transparent sapphire case housing a double-balance differential movement with deadbeat seconds and power reserve indicator.",
    knowMore: {
      label: "Horological Brief",
      heading:
        "Cased entirely in laboratory-grown synthetic sapphire crystal, the K-4 offers 360-degree visibility into an openworked double-balance calibre with a spherical mechanical differential.®",
    },
    quote: {
      heading: "A Cathedral of Horological Transparency",
      body: "Synthetic sapphire has a Mohs hardness of 9, second only to diamond. Machining a 43mm multi-faceted case, bezel, and caseback from single sapphire boules requires over 400 hours of ultrasonic milling and diamond-wheel polishing. Inside, two independent balances average their rates through a spherical differential for extreme chronometric stability.",
    },
    blocks: [
      {
        label: "Differential",
        lead: "Two independent balances beating in opposition cancel out positional errors through a miniature planetary gear differential.",
        body: "By employing two balance wheels inclined at 30-degree angles and linking them via a central planetary gear differential, the K-4 averages out rate variations caused by wrist movement and gravitational bias. The differential continuously computes the mathematical mean between both regulating organs, producing an exceptionally stable rate of timekeeping across all six testing positions.",
      },
      {
        label: "Deadbeat",
        lead: "A true deadbeat seconds mechanism steps forward precisely once per second in rhythmic, hypnotic cadence.",
        body: "While mechanical movements usually sweep smoothly across the dial, the K-4 incorporates a high-complication 'seconde morte' (deadbeat seconds) system. Driven by a dedicated star wheel and tension spring, the central seconds hand leaps instantaneously at each full second mark, combining ancient astronomical precision with modern transparent case aesthetics.",
      },
      {
        label: "Sapphire Case",
        lead: "Optically pure corundum case ground with diamond tools to achieve zero distortion and complete scratch resistance.",
        body: "The sapphire crystal case allows light to flood the openworked calibre from every angle, highlighting the contrast between brushed titanium bridges, circular-grained wheels, and ruby jewel bearings. Assembled with custom titanium spline screws, the case delivers 50-meter water resistance while remaining impervious to scratches forever.",
      },
    ],
    images: {
      wide1: { src: "/assets/img/0482770d700e0f48.webp", alt: "Sapphire Case Assembly" },
      pair: [
        { src: "/assets/img/3e078403f4daba6c.webp", alt: "Double Balance Differential" },
        { src: "/assets/img/eb9412368a88a8cc.webp", alt: "Deadbeat Seconds Lever" },
      ],
      wide2: { src: "/assets/img/0a34cc9ce1fb661a.webp", alt: "Openworked Mainplate" },
      wide3: { src: "/assets/img/1938e40e3c1bd79d.webp", alt: "Titanium Spline Screws" },
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
  title: "Calibres",
  blurb:
    "From architectural Grade 5 titanium tourbillons to high-frequency split-second chronographs, each timepiece reflects our obsession with micro-mechanical art.",
  heroImage: { src: "/assets/img/8333813d98953ae0.webp", alt: "KRONOS Atelier Calibre" },
  section: { label: "Manufacture Calibres", index: "(KH® — 01)", year: "©2025" },
  previewLabel: "View Calibre",
  moreWorks: { label: "More Calibres", index: "(KH® — 02)", year: "©2024" },
} as const;
