/** Site-wide chrome: nav, footer, contact details for ATELIER PADEL PRIVÉ. */

export const site = {
  name: "ATELIER PADEL PRIVÉ",
  logo: "/assets/Vector 3.svg",
  wordmark: "/assets/img/atelier-wordmark.svg",
  email: "concierge@atelier-padel.com",
  copyright: "Copyright © ATELIER PADEL PRIVÉ 2025",
} as const;

export type NavLink = { label: string; index: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", index: "01", href: "/" },
  { label: "The Club", index: "02", href: "/about" },
  { label: "Courts", index: "03", href: "/work" },
  { label: "Journal", index: "04", href: "/blog" },
];

export const navCta = { label: "Private Allocation", href: "/contact" };

/** The footer links retain the exact page routes. */
export const footerLinks: NavLink[] = [
  { label: "Home", index: "01 /", href: "/" },
  { label: "The Club", index: "02 /", href: "/about" },
  { label: "Courts", index: "03 /", href: "/work" },
  { label: "Journal", index: "04 /", href: "/blog" },
  { label: "Membership", index: "05 /", href: "/contact" },
];

export const footer = {
  heading: "Atelier Privé®",
  blurb: "Panoramic structural glass arenas, black silica micro-sand turf, bespoke carbon racquets, and private court allocations in Monaco and Geneva.",
  cta: { label: "Request Membership Allocation", href: "/contact" },
  badge: "Premier Padel Certified",
  image: {
    src: "/assets/img/padel-clubhouse.jpg",
    alt: "Atelier Padel Court Pavilion",
  },
  video: "https://framerusercontent.com/assets/ZxMUyWvzXfOYftOqklzEwzhxyQ.mp4",
  backToTop: "©Back to top",
} as const;
