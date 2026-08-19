/** The four case studies. Copy and image order are verbatim from the export. */

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
    title: "Raven Claw",
    year: "2025",
    tags: ["Portfolio", "E-Commerce"],
    cover: { src: "/assets/img/af40ead459fe7772.webp", alt: "Soda Can" },
    cardIntro:
      "A dark, futuristic design inspired by mystery and innovation. Raven Claw combines sleek aesthetics with cutting-edge functionality.",
    heroBlurb:
      "A dark, futuristic design inspired by mystery and innovation. Raven Claw combines sleek aesthetics with cutting-edge functionality.",
    knowMore: {
      label: "Know More",
      heading:
        "Inspired by the enigmatic allure of ravens and the sharp precision of technology, this project explores the balance between dark, sleek visuals and user-centric design.®",
    },
    quote: {
      heading: "Best Rated Portfolio Around Everywhere",
      body: "Inspired by the colors and textures of distant galaxies, this project combines bold, fluid visuals with a futuristic user interface. The goal was to create an immersive experience that feels both expansive and intimate, blending 3D animations, interactive elements, and a rich color palette. From its glowing particle effects to its seamless navigation, Nebula is a celebration of creativity and innovation, designed to inspire and captivate.",
    },
    blocks: [
      {
        label: "Problem",
        lead: "Balancing bold, eye-catching visuals with practical functionality required innovative thinking and a deep understanding of both form and function. Our goal was to craft an experience that not only captivates.",
        body: "In today's competitive digital landscape, standing out with a compelling and high-performing portfolio is more challenging than ever. Many creatives, freelancers, and agencies struggle with outdated designs, slow load times, and poor user experiences that fail to captivate potential clients. A lack of visual hierarchy, inconsistent branding, and limited customization options often result in missed opportunities and lost conversions. That's where Raven Claw comes in. We understand the frustration of using generic templates that don’t reflect your unique style or skills. Our solution is built to provide a sleek, modern, and highly customizable portfolio experience that not only showcases your work in the best light but also enhances engagement and credibility. With seamless interactions, lightning-fast performance, and a bold design aesthetic, Raven Claw is designed to help you make a lasting impression and turn visitors into clients effortlessly.",
      },
      {
        label: "Solution",
        lead: "Raven Claw is designed to solve the challenges of outdated, uninspiring portfolios by offering a sleek, and fully customizable solution.",
        body: "Raven Claw is the ultimate answer to the challenges creatives face when building an impactful online presence. Beyond visuals, we prioritize speed and user experience, eliminating frustrating load times and clunky navigation. Our fully customizable framework allows you to tailor every detail to match your personal brand, ensuring your portfolio is a true reflection of your expertise. Whether you're a freelancer, designer, or agency, Raven Claw provides the perfect blend of style, interactivity, and performance, helping you turn visitors into clients effortlessly. Say goodbye to outdated templates and hello to a portfolio that commands attention and delivers results.",
      },
      {
        label: "Concept",
        lead: "Raven Claw is built for creatives who want a bold, high-performance portfolio that stands out. With sleek design and seamless interactions.",
        body: "Your portfolio is more than just a collection of projects—it’s your digital identity, your first impression, and your most powerful tool for attracting clients. Raven Claw is designed to help you make that impression unforgettable. With a bold, cutting-edge aesthetic, seamless animations, and a high-performance framework, this portfolio template ensures your work stands out in the most impactful way. We understand that creatives need flexibility, which is why Raven Claw is fully customizable, allowing you to shape it to match your unique brand and style. Beyond aesthetics, performance is at the core of Raven Claw. With lightning-fast load times, smooth navigation, and an intuitive user experience, your visitors stay engaged, leading to better conversions and higher client engagement.",
      },
    ],
    images: {
      wide1: { src: "/assets/img/30a196f5485c3943.webp", alt: "Billboard" },
      pair: [
        { src: "/assets/img/1df8e86e9892276e.webp", alt: "Can Tornado" },
        { src: "/assets/img/18219ef1a7631c04.webp", alt: "Soda Can And Orange" },
      ],
      wide2: { src: "/assets/img/d5da4fa895da2f4b.webp", alt: "Flowers In The Can" },
      wide3: { src: "/assets/img/d287344b3cd03c11.webp", alt: "Rock" },
    },
  },
  {
    slug: "willow-studio",
    title: "Willow Studio",
    year: "2024",
    tags: ["Photography", "Studio"],
    cover: { src: "/assets/img/f50d9c9756c8f409.webp", alt: "Car Rear Side" },
    cardIntro:
      "Willow Studio is a creative powerhouse blending art and innovation to craft stunning visual experiences. It brings ideas to life with elegance and precision.",
    heroBlurb:
      "Willow Studio is a creative powerhouse blending art and innovation to craft stunning visual experiences. It brings ideas to life with elegance and precision.",
    knowMore: {
      label: "Know More",
      heading:
        "Willow Studio is a creative hub dedicated to crafting visually striking and innovative designs. With a keen eye for detail, it blends ideas to create experiences.®",
    },
    quote: {
      heading: "Best Rated Portfolio in the Market",
      body: "Willow Studio has completely transformed the way we present our brand. Their team’s creativity, professionalism, and deep understanding of design made the entire process smooth and enjoyable. From the initial concept to the final execution, every detail was thoughtfully crafted to align with our vision. The end result was beyond our expectations—visually stunning, highly functional, and perfectly tailored to our needs.",
    },
    blocks: [
      {
        label: "Problem",
        lead: "By addressing these challenges head-on, we empower brands to elevate their presence, build stronger connections, and achieve their creative vision with confidence.",
        body: "In today’s fast-paced digital world, standing out as a creative studio is more challenging than ever. Many brands struggle with outdated designs, inconsistent branding, and a lack of compelling storytelling that truly connects with their audience. Without a strong visual identity and seamless user experience, potential clients lose interest, leading to missed opportunities and decreased engagement. Additionally, many creative studios face difficulties in balancing aesthetics with functionality, often resulting in visually appealing but impractical solutions. Willow Studio was conceived to bridge this gap by providing innovative, high-quality design solutions that not only look stunning but also drive real impact. We understand the importance of storytelling, strategic branding, and immersive experiences that leave a lasting impression.",
      },
      {
        label: "Solution",
        lead: "With a commitment to quality, innovation, and impact, Willow Studio transforms ideas into meaningful and powerful brand experiences.",
        body: "Willow Studio was created to redefine the way brands communicate through design. Our approach blends creativity, strategy, and functionality to deliver visually stunning and highly effective solutions. We focus on crafting seamless user experiences, ensuring that every design element serves a purpose and enhances brand storytelling. By combining cutting-edge aesthetics with thoughtful execution, we help businesses stand out in a crowded market. From branding and digital experiences to interactive design and storytelling, Willow Studio provides a tailored approach that aligns with each client’s unique vision. Our process prioritizes collaboration, ensuring that every project is a perfect fusion of creativity and business goals.",
      },
      {
        label: "Concept",
        lead: "This concept represents a new era of design—one where aesthetics and strategy work hand in hand to create something truly extraordinary.",
        body: "Willow Studio is built on the idea that design should be more than just visually appealing—it should tell a story, create an experience, and leave a lasting impact. This concept project embodies the perfect balance of creativity and functionality, ensuring that every element serves a purpose. With a strong emphasis on innovation, storytelling, and seamless execution, Willow Studio is designed to help brands craft a unique and compelling visual identity. Our goal is to push the boundaries of traditional design by blending art, technology, and strategy into a cohesive experience. Whether it's branding, web design, or digital experiences, Willow Studio focuses on delivering solutions that captivate, engage, and inspire.",
      },
    ],
    images: {
      wide1: { src: "/assets/img/a92c67265dda481b.webp", alt: "Car Side View" },
      pair: [
        { src: "/assets/img/f568aa91567fdec6.webp", alt: "Car Front View" },
        { src: "/assets/img/f24e832c9643ff2c.webp", alt: "Car Front Zoom View" },
      ],
      wide2: { src: "/assets/img/5b35a0a2cfe1f9f4.webp", alt: "Car Rear Zoom View" },
      wide3: { src: "/assets/img/83b3f5bc11c493dc.webp", alt: "Car Side View" },
    },
  },
  {
    slug: "maison-law",
    title: "Maison Law",
    year: "2024",
    tags: ["Branding", "Logo Design"],
    cover: { src: "/assets/img/f1162a212eb4a43e.webp", alt: "Man Running" },
    cardIntro:
      "Maison Law redefines modern legal spaces with elegance and innovation. It creates a professional environment that inspires trust and confidence.",
    heroBlurb:
      "Maison Law redefines modern legal spaces with elegance and innovation. It creates a professional environment that inspires trust and confidence.",
    knowMore: {
      label: "Know More",
      heading:
        "Our space is designed to blend timeless elegance with modern efficiency, offering a seamless experience for both clients and professionals.®",
    },
    quote: {
      heading: "A Perfect Blend of Elegance and Functionality",
      body: "Maison Law has completely transformed our practice! The design is not only stunning but also incredibly practical, making our workspace both inspiring and efficient. Our clients are consistently impressed by the professionalism and warmth of the environment. The team’s attention to detail and commitment to quality is unmatched. We couldn’t have asked for a better partner to bring our vision to life!",
    },
    blocks: [
      {
        label: "Problem",
        lead: "Many legal environments remain trapped in outdated designs that fail to meet the demands of today’s dynamic and client-focused practices. It’s time to leave behind the frustrations of the past and embrace a future where design and purpose go hand in hand.",
        body: "In today’s fast-evolving legal landscape, many law firms and practices are hindered by outdated, uninspiring workspaces that fail to reflect the professionalism and innovation they strive to embody. Traditional legal environments often feel cold, impersonal, and disconnected from the needs of modern clients and professionals. Cramped offices, inefficient layouts, and a lack of aesthetic appeal can create a stressful atmosphere, reducing productivity and diminishing client trust. These spaces not only fail to inspire confidence but also miss the opportunity to foster collaboration, creativity, and a sense of calm. Maison Law recognizes this disconnect and aims to redefine legal spaces, transforming them into environments that align with the sophistication and efficiency of today’s legal practices.",
      },
      {
        label: "Solution",
        lead: "We understand that a law firm’s space is more than just an office—it’s a reflection of its values and commitment to excellence.",
        body: "Maison Law is the answer to the outdated, inefficient legal spaces of the past. We specialize in creating environments that seamlessly blend elegance, functionality, and innovation to meet the needs of today’s legal professionals and their clients. Our designs prioritize open, collaborative layouts, state-of-the-art technology, and timeless aesthetics that exude professionalism and trust. From sleek, ergonomic workspaces to welcoming client areas, every detail is crafted to enhance productivity, inspire confidence, and foster a sense of calm.",
      },
      {
        label: "Concept",
        lead: "Maison Law is a concept project designed to bring a modern, client-focused approach to legal services.",
        body: "Maison Law is built on the idea that legal services should be approachable, transparent, and tailored to the needs of modern clients. This concept project blends a refined aesthetic with intuitive navigation, making it easier than ever to access legal expertise without the complexities often associated with traditional law firms. From clear case categorization to direct client communication tools, Maison Law focuses on providing a streamlined, stress-free experience. Whether you're an individual in need of legal assistance or a firm looking to modernize your online presence, this project represents the future of legal design—where professionalism meets simplicity.",
      },
    ],
    images: {
      wide1: { src: "/assets/img/93ec508d1d6ae079.webp", alt: "Man Walking" },
      pair: [
        { src: "/assets/img/c6b5b93d1af2c5a5.webp", alt: "Man Riding EV" },
        { src: "/assets/img/119f9ca70f9186d1.webp", alt: "Woman Running" },
      ],
      wide2: { src: "/assets/img/8b049d28ecf0cdd1.webp", alt: "Woman In The Garden" },
      wide3: { src: "/assets/img/d12e2583bb06dc43.webp", alt: "Woman Night View" },
    },
  },
  {
    slug: "mystic-meadows",
    title: "Mystic Meadows",
    year: "2023",
    tags: ["Agency", "Marketing"],
    cover: { src: "/assets/img/509d69628b943665.webp", alt: "Woman Lips" },
    cardIntro:
      "Step into the enchanting world of Mystic Meadows, where nature’s magic meets serene beauty. Explore a dreamlike landscape filled with wonder.",
    heroBlurb:
      "Step into the enchanting world of Mystic Meadows, where nature’s magic meets serene beauty. Explore a dreamlike landscape filled with wonder.",
    knowMore: {
      label: "Know More",
      heading:
        "A captivating project that blends the allure of nature with a touch of mystery. Immerse yourself in a harmonious space where lush landscapes come together.®",
    },
    quote: {
      heading: "A Truly Magical Experience!",
      body: "Mystic Meadows exceeded all our expectations! The attention to detail in blending nature with design is breathtaking. It’s not just a project; it’s an experience that feels both serene and inspiring. The team’s creativity and dedication shine through every element. We couldn’t be happier with the results—it’s pure magic!",
    },
    blocks: [
      {
        label: "Problem",
        lead: "The magic of untouched meadows, serene forests, and vibrant ecosystems is fading, replaced by concrete jungles and digital distractions. This disconnect not only impacts mental and physical well-being but also diminishes our appreciation for the environment.",
        body: "In today’s fast-paced, technology-driven world, the connection between humans and nature has been severely eroded. Urban sprawl, pollution, and the demands of modern life have left little room for the tranquility and inspiration that natural landscapes once provided. People are increasingly feeling disconnected from the outdoors, leading to stress, burnout, and a longing for spaces that offer peace and rejuvenation. The magic of untouched meadows, serene forests, and vibrant ecosystems is fading, replaced by concrete jungles and digital distractions. This disconnect not only impacts mental and physical well-being but also diminishes our appreciation for the environment. Mystic Meadows aims to bridge this gap, rekindling the lost bond between humanity and the natural world.",
      },
      {
        label: "Solution",
        lead: "Mystic Meadows is not just a place—it’s an experience, a retreat, and a reminder of the beauty and serenity that nature provides.",
        body: "Mystic Meadows is more than just a project—it’s a sanctuary designed to restore the harmony between people and nature. By creating immersive, thoughtfully crafted spaces that mirror the serenity of untouched landscapes, we bring the outdoors back into everyday life. From lush green meadows and tranquil water features to winding pathways and vibrant flora, every element is designed to inspire peace, creativity, and a deep connection with the natural world. Our approach combines sustainable design practices with innovative technology to ensure these spaces are not only beautiful but also environmentally responsible.",
      },
      {
        label: "Concept",
        lead: "This concept is more than just a space; it’s a movement to reconnect people with the tranquility, inspiration, and magic of the outdoors.",
        body: "Mystic Meadows is a visionary concept that redefines the relationship between humanity and nature. It’s a carefully crafted ecosystem designed to evoke the serenity and wonder of untouched landscapes, blending the organic beauty of meadows, forests, and water bodies with thoughtful, human-centric design. The concept revolves around creating immersive spaces that inspire peace, creativity, and connection—whether through tranquil walking paths, vibrant gardens, or quiet reflective zones.",
      },
    ],
    images: {
      wide1: { src: "/assets/img/0482770d700e0f48.webp", alt: "Woman" },
      pair: [
        { src: "/assets/img/3e078403f4daba6c.webp", alt: "Woman Side Pose" },
        { src: "/assets/img/eb9412368a88a8cc.webp", alt: "Woman Look Into The Camera" },
      ],
      wide2: { src: "/assets/img/0a34cc9ce1fb661a.webp", alt: "Man Ground Shot" },
      wide3: { src: "/assets/img/1938e40e3c1bd79d.webp", alt: "Man Back Pose" },
    },
  },
];

export function projectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Case studies close with the two projects that follow them in the list. */
/** The export does not rotate through the list — it always shows the first two
 *  projects that are not the current one, so Raven Claw and Willow Studio appear
 *  on most pages. Verified against all four detail pages on the running original. */
export function otherProjects(slug: string) {
  return projects.filter((p) => p.slug !== slug).slice(0, 2);
}

export const workPage = {
  eyebrow: "©2025",
  title: "Portfolio",
  blurb:
    "From immersive 3D designs and sleek websites to interactive prototypes, each piece reflects my passion for innovation.",
  heroImage: { src: "/assets/img/8333813d98953ae0.webp", alt: "Fragrance" },
  section: { label: "Featured Works", index: "(CQ® — 01)", year: "©2025" },
  previewLabel: "Preview Site",
  moreWorks: { label: "More Works", index: "(GQ® — 02)", year: "©2024" },
} as const;
