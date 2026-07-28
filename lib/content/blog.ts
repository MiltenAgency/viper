/** The three articles. Copy and image order are verbatim from the export. */

export type PostBlock = { label: string; lead: string; body: string };

export type Post = {
  slug: string;
  title: string;
  date: string;
  /** Single tag on the index cards; the article hero carries the full set. */
  category: string;
  tags: string[];
  cover: { src: string; alt: string };
  heroBlurb: string;
  blocks: [PostBlock, PostBlock, PostBlock];
  images: {
    wide1: { src: string; alt: string };
    pair: [{ src: string; alt: string }, { src: string; alt: string }];
    wide2: { src: string; alt: string };
  };
};

export const posts: Post[] = [
  {
    slug: "polestar-new-ev",
    title: "Polestar New EV",
    date: "Mar 12, 3025",
    category: "Launch Event",
    tags: ["Launch Event", "Hub", "Recent"],
    cover: { src: "/assets/img/f6615db6dc0ad58e.webp", alt: "Woman In White Background" },
    heroBlurb:
      "Polestar EV explores the future of electric mobility, blending cutting-edge design with innovation. Dive into the performance insights shaping the next area.",
    blocks: [
      {
        label: "Innovation",
        lead: "As the world shifts towards a more sustainable future, Polestar EV serves as a beacon of progress in the automotive industry.®",
        body: "Polestar EV represents a bold step forward in the evolution of electric vehicles, pushing the boundaries of performance, design, and sustainability. As the automotive industry transitions to a cleaner future, Polestar leads the way with groundbreaking technology and a commitment to environmental responsibility. With a focus on aerodynamics, efficiency, and cutting-edge materials, every aspect of Polestar EV is designed to enhance both driving experience and sustainability. Beyond performance, Polestar EV embodies the perfect blend of luxury and functionality. The interior is crafted with premium, eco-friendly materials that offer a sophisticated yet sustainable driving environment. Advanced driver assistance systems, intuitive infotainment, and seamless connectivity ensure that every journey is as enjoyable as it is responsible. The vehicle’s smart energy management system optimizes battery life and charging efficiency, making it a practical choice for both urban commuting and long-distance travel.",
      },
      {
        label: "Revolution",
        lead: "Polestar EV isn’t just shaping the future—it is the future. With its bold approach to electric mobility, it challenges traditional automakers to rethink what’s possible.®",
        body: "Polestar EV isn’t just another electric car; it’s a revolution in mobility. Designed with a vision to create a cleaner, smarter, and more efficient future, this EV embodies cutting-edge technology, breathtaking design, and a commitment to sustainability. With every detail meticulously crafted, Polestar EV sets a new benchmark for the automotive industry, proving that electric vehicles can be both thrilling and responsible. From the sleek, aerodynamic silhouette to the meticulously designed interior, Polestar EV is engineered for excellence. The high-performance electric drivetrain delivers instant acceleration, seamless handling, and an unparalleled driving experience. But it's not just about speed—Polestar EV is built to be as efficient as it is powerful, integrating innovative battery technology to extend range and reduce charging time. Every component is thoughtfully designed to optimize energy usage, making this vehicle a true game-changer.",
      },
      {
        label: "Evolution",
        lead: "Polestar EV is not just a car; it’s a glimpse into the future of mobility. With innovation driving every decision, it redefines what it means to drive electric.",
        body: "Polestar EV marks a pivotal moment in the evolution of electric vehicles, offering a perfect harmony between high performance, sustainability, and intelligent design. As the demand for eco-friendly transportation grows, Polestar is at the forefront of this transformation, proving that electric cars can be both exhilarating and environmentally responsible. With a design that merges aesthetics with functionality, Polestar EV sets new standards for the modern driver. The technology behind Polestar EV is nothing short of groundbreaking. With an advanced battery system, regenerative braking, and an aerodynamic chassis, it optimizes every aspect of efficiency and performance. Inside, the vehicle offers a luxurious, driver-centric experience, featuring high-tech displays, intuitive controls, and smart connectivity that seamlessly integrates with daily life. Sustainability is at the core, with ethically sourced materials and a commitment to reducing carbon footprints.",
      },
    ],
    images: {
      wide1: { src: "/assets/img/8b049d28ecf0cdd1.webp", alt: "Women In Garden" },
      pair: [
        { src: "/assets/img/b0b2ac83cf4d96c9.webp", alt: "Woman Side Pose" },
        { src: "/assets/img/09cf1c42bfadc79b.webp", alt: "Woman Front Pose" },
      ],
      wide2: { src: "/assets/img/333d33ec6d347e4f.webp", alt: "Woman Front Zoom Pose" },
    },
  },
  {
    slug: "audemars-piguet",
    title: "Audemars Piguet",
    date: "Apr 1, 2024",
    category: "Classic",
    tags: ["Classic", "Vintage", "Retro"],
    cover: { src: "/assets/img/296095649a24a9a4.webp", alt: "Watch Back Side" },
    heroBlurb:
      "Audemars Piguet explores the legacy of Swiss watchmaking, blending timeless craftsmanship with modern innovation.",
    blocks: [
      {
        label: "Legacy",
        lead: "As the brand continues to innovate while respecting its roots, Audemars remains a symbol of timeless elegance proving that true artistry never goes out of style.®",
        body: "Audemars Piguet stands as a testament to the enduring legacy of Swiss watchmaking, a brand that has seamlessly merged tradition with innovation for nearly 150 years. From the Vallée de Joux, the birthplace of some of the finest timepieces in history, Audemars Piguet has crafted horological masterpieces that transcend mere functionality. Each watch is a blend of meticulous craftsmanship, avant-garde design, and mechanical excellence, a reflection of the brand’s commitment to pushing the boundaries of watchmaking. What sets Audemars Piguet apart is its dedication to precision and artistry. Unlike mass-produced luxury watches, each AP timepiece is meticulously hand-assembled by master watchmakers who uphold the traditions passed down through generations. The intricate movements, often visible through sapphire crystal casebacks, showcase the complexity and beauty of mechanical engineering at its finest. Whether it's the groundbreaking Royal Oak or the exquisite Millenary collection, every watch tells a story of heritage and ingenuity.",
      },
      {
        label: "Innovation",
        lead: "At its core, Audemars Piguet is about more than just telling time—it’s about telling a story of creativity, engineering, and bold vision.®",
        body: "Audemars Piguet has long been at the forefront of horological innovation, redefining what it means to craft a luxury timepiece. With a legacy of pushing boundaries, the brand has introduced some of the most groundbreaking designs and complications in watchmaking history. From the revolutionary Royal Oak, the first luxury sports watch in stainless steel, to ultra-complicated movements that challenge the limits of mechanical engineering, AP has consistently led the industry with its pioneering spirit. What makes Audemars Piguet unique is its relentless pursuit of excellence. Unlike many watch brands that adhere strictly to tradition, AP dares to experiment, blending modern aesthetics with classic craftsmanship. Its high-complication models, featuring tourbillons, minute repeaters, and perpetual calendars, showcase the brand’s technical prowess, while contemporary materials like ceramic and forged carbon push the boundaries of design. Each timepiece is a fusion of art and science, demonstrating the perfect balance between innovation and heritage.",
      },
      {
        label: "Exclusivity",
        lead: "Each timepiece carries with it a legacy of innovation, precision, and exclusivity, making it more than just a watch but a work of art that transcends time.®",
        body: "Audemars Piguet is synonymous with exclusivity, a brand that has remained independent and family-owned since its inception in 1875. Unlike mass-produced luxury watches, AP timepieces are meticulously handcrafted in limited quantities, making each one a rare and coveted masterpiece. The brand’s exclusivity isn’t just about scarcity—it’s about the level of craftsmanship, precision, and artistry that goes into every single watch, ensuring that each owner possesses something truly extraordinary. The appeal of an Audemars Piguet watch goes beyond its stunning design or intricate movement; it represents membership in an elite circle of watch connoisseurs. From world-renowned athletes and celebrities to collectors with a deep appreciation for horology, those who wear AP understand the value of owning something rare. The Royal Oak, perhaps the most iconic of all AP models, revolutionized the luxury watch industry and remains a symbol of status, craftsmanship, and sophistication.",
      },
    ],
    images: {
      wide1: { src: "/assets/img/6ac324c6a70dced9.webp", alt: "Bottle On The Rock" },
      pair: [
        { src: "/assets/img/c327b6a7eeb961b5.webp", alt: "Staircase" },
        { src: "/assets/img/973b47bad456a188.webp", alt: "Women On The Stage" },
      ],
      wide2: { src: "/assets/img/78b70384419bd42a.webp", alt: "Glass And Bottle" },
    },
  },
  {
    slug: "global-nikon-meetup",
    title: "Global Nikon Meetup",
    date: "Sep 14, 2024",
    category: "Photography",
    tags: ["Photography", "Nikon", "Camera"],
    cover: { src: "/assets/img/cdafa7eb4ef9633f.webp", alt: "Man Sitting" },
    heroBlurb:
      "Global Nikon Meetup brings photography enthusiasts together to connect, share insights, and celebrate the art of capturing moments.",
    blocks: [
      {
        label: "Community",
        lead: "Beyond the technical aspects, the Global Nikon Meetup is about building lasting relationships and inspiring each other. Photography is not just about the equipment.®",
        body: "The Global Nikon Meetup is more than just an event; it’s a thriving community where photographers from around the world come together to share their passion, knowledge, and experiences. Whether you're a seasoned professional or an aspiring enthusiast, this meetup provides a unique opportunity to connect with like-minded individuals who share a deep appreciation for the art of photography. From casual discussions about camera settings to in-depth conversations about composition and lighting, this gathering is designed to foster creativity and collaboration. One of the most exciting aspects of the Global Nikon Meetup is the hands-on experience it offers. Attendees get exclusive access to workshops, live demonstrations, and interactive sessions led by Nikon experts and renowned photographers. Whether you're learning about the latest advancements in Nikon technology or refining your shooting techniques, the event provides an immersive environment where knowledge flows freely. Participants can test out the newest Nikon gear, exchange tips on post-processing, and even take part in photo walks that explore stunning locations.",
      },
      {
        label: "Inspiration",
        lead: "But inspiration doesn’t just come from the speakers and sessions—it comes from the connections you make with fellow photographers.®",
        body: "The Global Nikon Meetup is a celebration of creativity, where photographers from across the world gather to inspire and be inspired. Whether you shoot landscapes, portraits, wildlife, or street photography, this event is designed to fuel your artistic vision and take your skills to new heights. Through engaging discussions, hands-on workshops, and live demonstrations, attendees gain invaluable insights into the techniques and philosophies of some of the best photographers in the industry. At the core of the Global Nikon Meetup is the belief that photography is more than just a technical skill—it’s a way to tell stories, capture emotions, and see the world from unique perspectives. Nikon experts and seasoned professionals share their experiences, offering tips on everything from mastering manual settings to composing visually striking images. The event also features portfolio reviews, where attendees can receive constructive feedback and refine their work with the guidance of industry veterans.",
      },
      {
        label: "Experience",
        lead: "The Global Nikon Meetup ensures that every attendee walks away with an enriched photography experience that will shape their creative journey for years to come.®",
        body: "The Global Nikon Meetup isn’t just an event—it’s an unforgettable experience that brings photographers together to learn, explore, and grow. Whether you’re a hobbyist, an aspiring professional, or a seasoned expert, this meetup provides an exciting platform to engage with fellow photography enthusiasts and discover new techniques. With hands-on workshops, live demonstrations, and interactive discussions, attendees gain first-hand experience with cutting-edge Nikon gear while learning from some of the best minds in photography. One of the standout features of the Global Nikon Meetup is the opportunity to immerse yourself in real-world shooting scenarios. Whether it’s a guided photo walk through a scenic landscape, a portrait lighting session with professional models, or an exclusive behind-the-scenes look at wildlife photography, this event offers practical experiences that go beyond theory. Nikon experts are on hand to share their expertise, helping attendees refine their camera skills and experiment with creative approaches to photography.",
      },
    ],
    images: {
      wide1: { src: "/assets/img/d9c94ac854f6da15.webp", alt: "Woman Leaning" },
      pair: [
        { src: "/assets/img/3a510b93cc7aa10e.webp", alt: "Woman In The Grass" },
        { src: "/assets/img/daed11ee27c6a319.webp", alt: "Woman In The Beach" },
      ],
      wide2: { src: "/assets/img/4089502a0421ef20.webp", alt: "Container" },
    },
  },
];

export function postBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function otherPosts(slug: string) {
  const i = posts.findIndex((p) => p.slug === slug);
  return [posts[(i + 1) % posts.length], posts[(i + 2) % posts.length]];
}

export const blogPage = {
  eyebrow: "©2025",
  title: "Articles",
  blurb:
    "Whether you're looking for inspiration, tutorials, or fresh perspectives, there’s something here for everyone.",
  heroImage: { src: "/assets/img/a92c67265dda481b.webp", alt: "Car Side View" },
  section: { label: "Latest Updates", index: "(CQ® — 01)", year: "©2025" },
  moreUpdates: { label: "Latest Updates", index: "(GQ® — 02)", year: "©2024" },
} as const;
