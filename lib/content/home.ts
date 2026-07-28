/**
 * Home page copy and assets, verbatim from the export.
 *
 * Two values here cannot be read from the static HTML and were taken off the
 * running original: the stat counters (they ship as `00`) and the annual price
 * row (only the annual variant survives hydration).
 */

export const hero = {
  year: "©2025",
  title: "Clivelle",
  /** The export breaks this paragraph itself; the line ends are its own. */
  blurbLines: [
    "Hi, I am Clive® I’m a digital",
    "designer and highly talented 3D",
    "renderer with over a decade of experience in the field.",
  ],
  image: { src: "/assets/img/0c441b19271b92e6.webp", alt: "Woman Zoom Pose" },
} as const;

export const intro = {
  label: "Hey, Just An Intro",
  heading:
    "A digital designer based in los angeles, passionate about creating immersive visual experiences. From crafting realistic renderings to dynamic animations and interactions.®",
  cta: { label: "Get in touch", href: "/contact" },
  columns: [
    {
      title: "Bringing Ideas to Life",
      body: "I specialize in transforming concepts into captivating 3D visuals. Whether it’s product renderings, or immersive environments, my portfolio is designed to tell a story.",
    },
    {
      title: "Collaborate with Me",
      body: "Let’s create something extraordinary together! Whether you’re looking to visualize a product, animate a concept, or build an interactive experience.",
    },
  ],
  images: [
    { src: "/assets/img/acd556c53995286b.webp", alt: "Fragrance Bottle" },
    { src: "/assets/img/ee841bcd3a66facb.webp", alt: "Shoes" },
    { src: "/assets/img/ddd2b87603f1be80.webp", alt: "Bag" },
  ],
} as const;

/** Five brand marks; the export localised the first five and left the rest on
 *  framerusercontent.com. Both sets are reproduced exactly as shipped. */
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

/** Only the first step carries a pill in the export, so `tag` is optional —
 *  without the annotation TypeScript infers a union and `step.tag` fails. */
export interface ApproachStep {
  number: string;
  title: string;
  tag?: string;
  body: string;
}

export const approach = {
  section: { label: "Approach Style", index: "(CQ® — 02)", year: "©2025" },
  steps: [
    {
      number: "01",
      title: "Strategy & Planning",
      tag: "FREE",
      body: "We start by understanding your vision and business goals. Through in-depth research and strategic planning, we define the core structure and key elements needed for your project.",
    },
    {
      number: "02",
      title: "Design & Development",
      body: "Our team crafts a visually stunning and functional design that aligns with your brand. We focus on responsive layouts, and high-performance development to ensure a smooth experience.",
    },
    {
      number: "03",
      title: "Launch & Growth",
      body: "Once everything is tested and refined, we launch your project with precision. Post-launch, we provide ongoing support, updates, and strategies to help you scale and maximize results.",
    },
  ] as ApproachStep[],
  cta: { label: "Contact now", href: "/contact" },
  meter: [
    { label: "Strategy", value: "25%" },
    { label: "Design", value: "60%" },
    { label: "Launch", value: "100%" },
  ],
  image: { src: "/assets/img/628c4e759c5a5e8d.webp", alt: "Man Side View" },
} as const;

export const featured = {
  section: { label: "Featured Works", index: "(CQ® — 03)", year: "©2025" },
  badge: "Portfolio",
  heading: "Feartured Portfolio®",
  blurb:
    "Explore a collection of high-quality, innovative designs crafted to elevate brands and captivate audiences. Each project reflects our commitment to creativity and excellence.",
  cta: { label: "View portfolio", href: "/work" },
  partnersLabel: "Also work with these international partners:",
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
  label: "Stats & Facts",
  heading:
    "I take pride in creating solutions that are not only visually stunning® but also highly functional. Every number tells a story, and I’m excited to bring that same dedication.",
  /** Counters render as `00` in the static HTML; these are the live end values. */
  items: [
    { value: 20, suffix: "+", title: "Years Experience", note: "In the web design industry field." },
    { value: 95, suffix: "+", title: "Projects Done", note: "Around worldwide in last five years." },
    { value: 200, suffix: "%", title: "Satisfied Clients", note: "With a great experience and results." },
  ],
} as const;

export const services = {
  section: { label: "Premium Services", index: "(CQ® — 05)", year: "©2025" },
  heading: "Pro Services®",
  blurb: "From web design to branding, i bring your vision to life with precision and creativity",
  points: ["Convert More, Grow Faster", "Future-Proof & Scalable"],
  cta: { label: "View about", href: "/about" },
  items: [
    {
      title: "Professional Videography",
      meta: "Photography",
      dots: 1,
      image: { src: "/assets/img/bd5fc314fa9d47a7.webp", alt: "Man Wearing Glasses" },
    },
    {
      title: "Product Designing",
      meta: "Marketing",
      dots: 2,
      image: { src: "/assets/img/234c6dbc26640298.webp", alt: "Coffee Pack" },
    },
    {
      title: "Framer Development",
      meta: "Development",
      dots: 3,
      image: { src: "/assets/img/1bea2d21aa8fae64.webp", alt: "Cream" },
    },
    {
      title: "3D Rendering",
      meta: "Modeling",
      dots: 4,
      image: { src: "/assets/img/78d7d1602c4c24f5.webp", alt: "Bottle" },
    },
  ],
  image: { src: "/assets/img/0cfc64781beb1454.webp", alt: "Woman Side Pose" },
} as const;

export const benefits = {
  section: { label: "Benefits of Hiring Me", index: "(CQ® — 06)", year: "©2025" },
  speed: {
    title: "It takes 5.1 Minutes to launch your site.",
    note: "Lightning-fast delivery without compromising quality",
    background: { src: "/assets/img/5886694812f185a9.webp", alt: "Car Blur" },
    wordmark: "/assets/img/0b0b825779059f31.webp",
  },
  platform: {
    caps: "FROM 0 TO 100 IN ONE SMALL STEP",
    title: "All in one platform",
    image: { src: "/assets/img/776f32e02c61ff45.webp", alt: "Man" },
  },
  support: {
    caps: "FULL TIME SUPPORT",
    title: "24/6",
    body: "I have a custom application for 24/6 support and you will get update anytime.",
    /** The export's 4000w variant ships as a 0-byte file; this is its 2730w twin. */
    background: { src: "/assets/img/a620b8960750125f.webp", alt: "Woman Blur" },
    image: { src: "/assets/img/80933b24c07fa482.webp", alt: "Mobile" },
  },
} as const;

export const testimonials = {
  section: { label: "Voices About Me", index: "(CQ® — 07)", year: "©2025" },
  badge: "Testimonial",
  heading: "Trusted By Experts.",
  blurb:
    "Real stories from real clients. See how our designs have transformed international and elevated businesses, and created lasting impressions.",
  cta: { label: "Become a partner", href: "/contact" },
  items: [
    {
      body: "With clive user-friendly CRM, our sales team can now work smarter, not harder. Deal tracking, reports, traffic - it's all automated and accessible in one place and faster.",
      name: "Eddie Brock",
      role: "CEO",
      company: "Royal Kingdope",
      avatar: { src: "/assets/img/838e29199fb7e503.webp", alt: "Man" },
    },
    {
      body: "I was amazed by how intuitive and user-friendly everything felt. It's clear their designers obsess over every pixel, every transition, to create experiences that delight.",
      name: "John Fitzgerald",
      role: "Manager",
      company: "Microsoft Solutions",
      avatar: { src: "/assets/img/9f76a4d14cf53ff6.webp", alt: "Man" },
    },
    {
      body: "I hired clive to redesign my company's website. The process was smooth and easy. They listened to all my needs and delivered a site that exceeded my ideas and works.",
      name: "Ellie sattler",
      role: "Designer",
      company: "Nvidia Graphics",
      avatar: { src: "/assets/img/46900bc9f0919c91.webp", alt: "" },
    },
    {
      body: "We've seen increase in site traffic, lead generation, and sales. I can't recommend clive enough. he truly transformed our website and design into a masterpice of class!",
      name: "Kate Mccalilster",
      role: "Home Advisor",
      company: "Apple Inc.",
      avatar: { src: "/assets/img/b97be510e61141af.webp", alt: "Woman" },
    },
    {
      body: "Clive expert developer took my Photoshop files and turned them into pixel-perfect, responsive websites. The clean, made my designs really shine and best look.",
      name: "Tina Rossell",
      role: "Founder",
      company: "Reindeer Hub",
      avatar: { src: "/assets/img/a71b72ffd2a494b7.webp", alt: "Woman" },
    },
  ],
} as const;

export const photography = {
  section: { label: "Shots By Me", index: "(CQ® — 08)", year: "©2025" },
  badge: "Photography",
  heading: "Every Pixel Clicked.",
  blurb:
    "Capturing moments, creating memories. Through my lens, i capture stunning visuals that bring your brand to life with clarity, emotion, and impact.",
  cta: { label: "Book an appointment", href: "/contact" },
} as const;

export const framerExpert = {
  section: { label: "Framer Developer", index: "(CQ® — 09)", year: "©2025" },
  image: { src: "/assets/img/79050be13b38326b.webp", alt: "Man Side Pose" },
  badge: "Website Expert",
  heading: "Expertise in Framer Templates.",
  subheading: "Bringing Your Ideas to Life®",
  body: "As expert in Framer, we specialize in turning your ideas into functional websites. Whether it's a custom template, i ensure every project meets your vision and exceeds expectations.",
  cta: { label: "View portfolio", href: "/work" },
  rating: "299+ People Rated",
} as const;

export const pricing = {
  section: { label: "Pricing Structure", year: "©2025" },
  toggle: { monthly: "Monthly", annual: "Annual" },
  badge: "Premium Plans",
  heading: "Feasible Plans.",
  blurb:
    "Transparent pricing tailored to your needs. Let’s discuss your project and find a plan that works for you.",
  cta: { label: "Contact now", href: "/contact" },
  includedLabel: "What’s included",
  featureLabels: [
    "All templates unlocked",
    "Unlimited requests",
    "Unlimited revisions",
    "Project management",
    "Access to all services",
    "Pause or cancel anytime",
  ],
  plans: [
    {
      name: "Starter Plan",
      tag: "MOST PICK",
      monthly: "$2,999",
      annual: "$4,999",
      body: "Our basic pricing plan is designed to offer extra-ordinary value and features.",
      dots: 1,
      included: [true, true, true, false, false, false],
      cta: "Subscribe Now",
    },
    {
      name: "Growth Plan",
      monthly: "$3,999",
      annual: "$6,999",
      body: "Our pro pricing plan is designed for a businesses with advanced features.",
      dots: 2,
      included: [true, true, true, true, false, false],
      cta: "Subscribe Now",
    },
    {
      name: "Premium Plan",
      monthly: "$4,999",
      annual: "$8,999",
      body: "Our plus pricing plan is designed for a corporate with premium support.",
      dots: 3,
      included: [true, true, true, true, true, true],
      cta: "Subscribe Now",
      image: { src: "/assets/img/5e1b7da60643ff2f.webp", alt: "Man" },
    },
  ],
} as const;

export const insights = {
  section: { label: "Latest Updates", index: "(CQ® — 12)", year: "©2025" },
  badge: "Latest Blogs",
  heading: "Latest Insights.",
  blurb:
    "Explore my blog for design tips, industry insights, and creative inspiration. From tutorials to thought pieces, there’s something for every curious mind.",
  cta: { label: "View articles", href: "/blog" },
  image: { src: "/assets/img/2e51c49c33051cf0.webp", alt: "Woman" },
} as const;

export const contactSection = { label: "Let's Work Together", index: "(CQ® — 13)", year: "©2025" } as const;
