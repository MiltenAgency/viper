/** Site-wide chrome: nav, footer, contact details. Copy is verbatim from the export. */

export const site = {
  name: "Viper",
  logo: "/assets/img/c1388668458cae43.webp",
  wordmark: "/assets/img/eac37827956f1cdc.svg",
  email: "sayhi@clivelle.com",
  copyright: "Copyright © Mandro 2025",
} as const;

export type NavLink = { label: string; index: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", index: "01", href: "/" },
  { label: "About", index: "02", href: "/about" },
  { label: "Work", index: "03", href: "/work" },
  { label: "Blog", index: "04", href: "/blog" },
];

export const navCta = { label: "Get in touch", href: "/contact" };

/** The footer renumbers and renames the blog entry — kept as the export has it. */
export const footerLinks: NavLink[] = [
  { label: "Home", index: "01 /", href: "/" },
  { label: "About", index: "02 /", href: "/about" },
  { label: "Work", index: "03 /", href: "/work" },
  { label: "Insights", index: "04 /", href: "/blog" },
  { label: "Contact", index: "05 /", href: "/contact" },
];

export const footer = {
  heading: "Stay connected®",
  blurb: "Crafted with creativity and passion. Let’s stay connected reach out anytime!",
  cta: { label: "Contact Now", href: "/contact" },
  badge: "Framer Expert",
  image: {
    src: "/assets/img/4097b30ad07052c6.webp",
    alt: "Man Wearing Sunglasses",
  },
  /** Ships in the export as a remote asset; there is no local copy. */
  video: "https://framerusercontent.com/assets/ZxMUyWvzXfOYftOqklzEwzhxyQ.mp4",
  backToTop: "©Back to top",
} as const;
