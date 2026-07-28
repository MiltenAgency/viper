/** About page copy, verbatim from the export. */

export const aboutPage = {
  hero: {
    year: "©2025",
    title: "About Clive",
    blurb:
      "Whether it’s through stunning designs seamless user experiences, I’m dedicated to delivering work that resonates.",
    image: { src: "/assets/img/d0d2a0c6f018468d.webp", alt: "Woman In The Garden" },
  },
  passion: {
    label: "Building with Passion",
    heading:
      "Every project is an opportunity to push boundaries, tell a story, and create something truly memorable. Let’s build the extraordinary together again.®",
    cta: { label: "Get in touch", href: "/contact" },
    rows: [
      {
        title: "Brand Design",
        body: "Strategic and visually compelling brand design that tells your story, builds trust, and sets you apart. From logos to full identity systems, we craft brands that leave a lasting impact.",
        price: "$2,999",
      },
      {
        title: "Web Design",
        body: "We craft stunning, high-performance websites that blend creativity with functionality. From sleek portfolios to powerful business sites, our designs ensure a seamless user experience.",
        price: "$3,599",
      },
      {
        title: "Product Design",
        body: "Blending creativity with functionality, we craft intuitive and visually stunning product designs that enhance user experience and drive engagement.",
        price: "$5,999",
      },
    ],
  },
  awards: {
    section: { label: "Recognition Awards", index: "(CQ® — 03)", year: "©2025" },
    heading: "Blast Awards®",
    blurb: "My work has earned accolades that showcase our commitment to quality and creativity.",
    points: ["Award-Winning Designs", "Recognized Excellence"],
    cta: { label: "Get in touch", href: "/contact" },
    items: [
      { icon: "/assets/img/62eadcb39fe5737e.svg", title: "Awwwards - Porto Agency", note: "Site of the day", count: "21x" },
      { icon: "/assets/img/3310e530ab52f689.svg", title: "CSS Design Awards - Bronx Portfolio", note: "Honourable mention", count: "18x" },
      { icon: "/assets/img/40dcc75b811846c0.svg", title: "Red Dot Design Awards - Landin", note: "Site of the month", count: "08x" },
      { icon: "/assets/img/64fce9881322601f.svg", title: "Framer Awards - Dune Cyberpunk", note: "Site of the year", count: "01x" },
      { icon: "/assets/img/51facabf18c7d76b.svg", title: "Mason Awards - Viper Portfolio", note: "Site of the month", count: "13x" },
    ],
    image: { src: "/assets/img/98de33cabc7134be.webp", alt: "Man Wearing Hoodie" },
  },
  practice: {
    section: { label: "Field Work", index: "(CQ® — 04)", year: "©2025" },
    heading: "Practice",
    blurb: "My expertise ensures every project is executed with precision and creativity.",
    cta: { label: "Contact now", href: "/contact" },
    roles: [
      {
        company: "Clavmen",
        title: "Senior UX Designer",
        period: "2021 – Present",
        body: "Clavmen inspires creativity and makes learning piano fun. The lightweight body fits easily into gig bags for portability.",
      },
      {
        company: "Losify & Co",
        title: "Lead Product Designer",
        period: "2019 – 2021",
        body: "Fitness and well-being with personalized coaching and innovative wellness solutions.",
      },
      {
        company: "Freelance",
        title: "Product Designer",
        period: "2015 – 2019",
        body: "Bringing creativity, technical expertise, and a passion for design to every project.",
      },
    ],
  },
  stack: {
    section: { label: "Featured Stack", index: "(CQ® — 05)", year: "©2025" },
    badge: "Daily Stack",
    heading: "Favourite Tools",
    blurb:
      "My favorite stack includes Framer, Figma, and other cutting-edge technologies to ensure seamless and dynamic designs.",
    cta: { label: "Become one of us", href: "/contact" },
    items: [
      {
        icon: "/assets/img/62eadcb39fe5737e.svg",
        title: "Framer - Development",
        tag: "PRO",
        body: "Combining design, prototyping, and development in one platform, it empowers creators to build visually stunning, high-performance websites.",
      },
      {
        icon: "/assets/img/40dcc75b811846c0.svg",
        title: "Figma - Web Designing",
        body: "Figma is a powerful, collaborative design tool that enables real-time collaboration and seamless workflow. With its top intuitive interface and versatile features.",
      },
      {
        icon: "/assets/img/51facabf18c7d76b.svg",
        title: "Notion - Productivity",
        body: "Notion is an all-in-one workspace that combines note-taking, task management, databases, and collaboration features. With its flexible and customizable interface.",
      },
      {
        icon: "/assets/img/64fce9881322601f.svg",
        title: "Apple - Monitor",
        body: "Apple is a global technology leader known for its innovative products, sleek design, and seamless user experience. From the iconic iPhone to the powerful Mac.",
      },
      {
        icon: "/assets/img/3310e530ab52f689.svg",
        title: "Nikon - Photography",
        body: "Renowned for precision, innovation, and reliability, Nikon empowers photographers and videographers to capture stunning visuals with exceptional clarity and detail.",
      },
    ],
    /** The sixth cell of the grid is a link card carrying a single image. */
    feature: { src: "/assets/img/317b72c6b847ce2e.webp", alt: "Woman" },
  },
  faqImage: { src: "/assets/img/e18612ef26474ea1.webp", alt: "Woman Wearing Sunglasses" },
  contactSection: { label: "Let's Work Together", index: "(CQ® — 07)", year: "©2025" },
} as const;

export const contactPage = {
  hero: {
    year: "©2024",
    title: "Contact Me",
    blurb:
      "I’d love to hear from you! Whether you’re looking to collaborate, discuss an idea, or simply connect, feel free to reach out.",
    image: { src: "/assets/img/ed8c7a9b5fe31ece.webp", alt: "Woman" },
  },
  section: { label: "Fill The Form Out", index: "(CQ® — 01)", year: "©2025" },
  badge: "Contact Now",
  heading: "Let's Connect",
  blurb: "Let’s create something amazing together! Reach out I’d love to hear about your project and ideas.",
  addressTitle: "Address",
  address: "49th St. Los Angeles, California(CA), 90011",
} as const;
