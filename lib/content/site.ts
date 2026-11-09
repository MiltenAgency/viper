/** Site-wide chrome: nav, footer, contact details for KRONOS Horology. */

export const site = {
  name: "KRONOS Horology",
  logo: "/assets/img/kronos-logo.svg",
  wordmark: "/assets/img/kronos-wordmark.svg",
  email: "atelier@kronos-horology.ch",
  copyright: "Copyright © KRONOS Horology SA 2025",
} as const;

export type NavLink = { label: string; index: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", index: "01", href: "/" },
  { label: "Atelier", index: "02", href: "/about" },
  { label: "Calibres", index: "03", href: "/work" },
  { label: "Horology", index: "04", href: "/blog" },
];

export const navCta = { label: "Private Atelier", href: "/contact" };

/** The footer links retain the exact page routes. */
export const footerLinks: NavLink[] = [
  { label: "Home", index: "01 /", href: "/" },
  { label: "Atelier", index: "02 /", href: "/about" },
  { label: "Calibres", index: "03 /", href: "/work" },
  { label: "Horology", index: "04 /", href: "/blog" },
  { label: "Commissions", index: "05 /", href: "/contact" },
];

export const footer = {
  heading: "Haute Horlogerie®",
  blurb: "Handcrafted in the Swiss Jura. Inquiries for private atelier appointments, bespoke movement allocations, and manufacture tours.",
  cta: { label: "Commission Allocation", href: "/contact" },
  badge: "Chronometer Certifié",
  image: {
    src: "/assets/img/4097b30ad07052c6.webp",
    alt: "Master Watchmaker at Bench",
  },
  /** Ships in the export as a remote asset; there is no local copy. */
  video: "https://framerusercontent.com/assets/ZxMUyWvzXfOYftOqklzEwzhxyQ.mp4",
  backToTop: "©Back to top",
} as const;
