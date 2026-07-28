/**
 * Blocks that repeat across routes. The FAQ answers are absent from the static
 * export (the accordion ships collapsed) and were read off the running original
 * with Playwright — including its mixed apostrophes: entry 06 uses a straight
 * `We'll` while entry 08 uses a typographic `don’t`.
 */

export type FaqItem = { index: string; question: string; answer: string };

export const faq: FaqItem[] = [
  {
    index: "01",
    question: "What does a project look like?",
    answer:
      "It consists of key deliverables such as wireframes, prototypes, design mockups, and a fully functional final product. Each project is tailored to meet specific goals, ensuring a seamless blend of creativity, usability, and performance.",
  },
  {
    index: "02",
    question: "How is the pricing structure?",
    answer:
      "Our pricing structure is designed to be transparent and flexible, catering to different needs and budgets. We offer multiple pricing tiers based on features, customization options, and support levels.",
  },
  {
    index: "03",
    question: "Are all projects fixed scope?",
    answer:
      "Not necessarily. While some projects have a fixed scope with clear deliverables, others may evolve based on feedback and requirements. We offer flexibility to accommodate changes, ensuring the final outcome aligns with your vision and goals.",
  },
  {
    index: "04",
    question: "What is the ROI?",
    answer:
      "We focus on maximizing efficiency, ensuring that every dollar spent translates into tangible growth and long-term success for your business.",
  },
  {
    index: "05",
    question: "How do we measure success?",
    answer:
      "We track key performance indicators such as user experience, conversions, and client satisfaction while ensuring that every project aligns with the vision and objectives set from the start.",
  },
  {
    index: "06",
    question: "What do I need to get started?",
    answer:
      "To get started, simply share your project details and goals with us. We'll guide you through the process and provide the tools and support needed to bring your vision to life.",
  },
  {
    index: "07",
    question: "How easy is it to edit for beginners?",
    answer:
      "Our platform is designed with beginners in mind, offering an intuitive drag-and-drop interface that makes editing simple and straightforward. No coding skills required—just customize and go!",
  },
  {
    index: "08",
    question: "Do I need to know how to code?",
    answer:
      "No, you don’t need to know how to code. Our platform offers intuitive tools and templates that allow you to create and manage your website with ease.",
  },
];

export const contactBlock = {
  badge: "Contact Now",
  heading: "Contact Me!",
  blurb: "Let’s create something amazing together! Reach out I’d love to hear about your project and ideas.",
  points: ["24/7 Full Time Support", "Available Worldwide"],
  cta: { label: "Contact now", href: "/contact" },
  fields: { name: "Name*", email: "Email*", message: "Message*" },
  submit: "Submit Now",
} as const;

