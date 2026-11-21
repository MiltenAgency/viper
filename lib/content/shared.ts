/**
 * Blocks that repeat across routes for ATELIER PADEL PRIVÉ.
 */

export type FaqItem = { index: string; question: string; answer: string };

export const faq: FaqItem[] = [
  {
    index: "01",
    question: "What is the membership allocation policy of ATELIER PADEL?",
    answer:
      "To preserve absolute court availability, acoustics, and privacy, ATELIER PADEL strictly caps membership at 120 active patron allocations across our Monaco and Geneva sanctuaries.",
  },
  {
    index: "02",
    question: "How are private court reservations structured?",
    answer:
      "Members book dedicated 90-minute or 120-minute sessions via the private concierge application. Each booking grants exclusive access to the selected court and its private lounge pavilion.",
  },
  {
    index: "03",
    question: "What specifications are used for the court turf and glass?",
    answer:
      "Our courts feature 12mm monolithic acoustic glass engineered for zero vibration distortion, combined with kiln-dried black silica sand turf delivering true vertical bounce.",
  },
  {
    index: "04",
    question: "How does the optical telemetry tracking system work?",
    answer:
      "Each court integrates high-speed 240fps cameras calibrated along the structural beams. The system records ball exit speed, spin RPM, and heat maps accessible instantly on court-side monitors.",
  },
  {
    index: "05",
    question: "What racquet concierge services are included?",
    answer:
      "Members enjoy access to our custom carbon racquet vault, bespoke weight and balance lead-tuning, and on-demand precision stringing adjusted for court temperature and humidity.",
  },
  {
    index: "06",
    question: "What facilities are in the Biomechanics Recovery Lab?",
    answer:
      "The recovery suite includes medical-grade 3°C cold plunge tubs, infrared cellular sauna cabins, pneumatic compression boots, and private sports physiotherapy consultations.",
  },
  {
    index: "07",
    question: "Can members invite non-member guests?",
    answer:
      "Yes. Each patron allocation includes guest invitations for doubles play. Guests enjoy complete access to private changing suites and club hospitality during reserved sessions.",
  },
  {
    index: "08",
    question: "Are private master coaching sessions available?",
    answer:
      "Yes. Our resident coaching staff consists of former Premier Padel tour professionals offering tactical biomechanics analysis, match-play strategy, and vibora refinement.",
  },
];

export const contactBlock = {
  badge: "Private Sanctuary",
  heading: "Membership Allocation",
  blurb:
    "Inquiries for private patron membership allocations, court reservations, and corporate championship retreats in Monaco and Geneva.",
  points: [
    "Strict 120 Patron Membership Cap",
    "Monaco & Geneva Sanctuary Reciprocity",
    "24/7 Dedicated Concierge & Racket Vault",
  ],
  cta: { label: "Commission Allocation", href: "/contact" },
  fields: {
    name: "Full Name*",
    email: "Email Address*",
    message: "Handicap / Preferred Location / Allocation Inquiries*...",
  },
  submit: "Submit Allocation Request",
  details: [
    { label: "Monaco Sanctuary", value: "Quai Antoine 1er, Port Hercule" },
    { label: "Geneva Sanctuary", value: "Route de Suisse 42, 1290 Versoix" },
    { label: "Direct Concierge", value: "concierge@atelier-padel.com" },
    { label: "Member Hours", value: "06:00 – 23:00 Daily" },
  ],
} as const;
