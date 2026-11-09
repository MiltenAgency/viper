/**
 * Blocks that repeat across routes for KRONOS Horology.
 */

export type FaqItem = { index: string; question: string; answer: string };

export const faq: FaqItem[] = [
  {
    index: "01",
    question: "What is the annual production volume of KRONOS?",
    answer:
      "To ensure uncompromising quality and hand finishing, KRONOS strictly limits production to 48 pieces per calendar year across all calibre references.",
  },
  {
    index: "02",
    question: "How does the allocation and commission process work?",
    answer:
      "Prospective patrons submit an inquiry to our private salon. Once an allocation is confirmed, collectors can customize movement finishes, guilloché dials, and case engravings.",
  },
  {
    index: "03",
    question: "What materials are used for the cases and calibres?",
    answer:
      "We engineer primarily in aerospace Grade 5 titanium, black diamond-like carbon (DLC), and lab-grown synthetic corundum (sapphire crystal), alongside German silver and platinum micro-rotors.",
  },
  {
    index: "04",
    question: "What chronometer certification does KRONOS achieve?",
    answer:
      "Every timepiece undergoes our 1,000-hour manufacture chronometer trial, regulated in six positions across three temperature gradients to within -1/+2 seconds per day.",
  },
  {
    index: "05",
    question: "What is the delivery timeline for a commissioned timepiece?",
    answer:
      "Due to the 120+ hours of manual hand finishing and bespoke component manufacturing required, lead times typically range from four to eight months from commission agreement.",
  },
  {
    index: "06",
    question: "What warranty and servicing are provided?",
    answer:
      "Each timepiece carries our comprehensive 10-year international manufacture warranty, including complimentary complete calibre overhauls and chronometer recalibration.",
  },
  {
    index: "07",
    question: "Can I visit the manufacture in Le Brassus?",
    answer:
      "Yes. We welcome clients and collectors for private atelier appointments and guided tours of our workshop in the Vallée de Joux by prior arrangement.",
  },
  {
    index: "08",
    question: "Are bespoke complications or unique pieces available?",
    answer:
      "Yes, our Master Watchmakers consider select commissions for unique piece (pièce unique) executions and bespoke complications depending on annual atelier capacity.",
  },
];

export const contactBlock = {
  badge: "Private Salon",
  heading: "Commission Allocation",
  blurb: "Connect with our horological advisors to discuss allocations, bespoke finishes, or schedule a visit to our manufacture in Le Brassus.",
  points: ["48 Allocations Annually", "10-Year Manufacture Warranty"],
  cta: { label: "Inquire now", href: "/contact" },
  fields: { name: "Name*", email: "Email*", message: "Inquiry or Reference*" },
  submit: "Submit Commission",
} as const;
