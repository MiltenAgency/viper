import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Approach from "@/components/home/Approach";
import Featured from "@/components/home/Featured";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import Benefits from "@/components/home/Benefits";
import Testimonials from "@/components/home/Testimonials";
import Photography from "@/components/home/Photography";
import FramerExpert from "@/components/home/FramerExpert";
import Pricing from "@/components/home/Pricing";
import Insights from "@/components/home/Insights";
import StickyImage from "@/components/StickyImage";
import Faq from "@/components/Faq";
import ContactBlock from "@/components/ContactBlock";
import { Separator, SectionHead } from "@/components/Section";
import { approach, contactSection, insights, services } from "@/lib/content/home";
import { contactBlock } from "@/lib/content/shared";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Approach />
      <StickyImage src={approach.image.src} alt={approach.image.alt} />
      <Featured />
      <Stats />
      <Services />
      <StickyImage src={services.image.src} alt={services.image.alt} />
      <Benefits />
      <Testimonials />
      <Photography />
      <FramerExpert />
      <Pricing />
      <div className="relative z-10 bg-white">
        <Faq />
      </div>
      <StickyImage src={insights.image.src} alt={insights.image.alt} />
      <Insights />

      <section className="relative z-10 w-full bg-white px-4 pb-[140px] md:px-10">
        <Separator />
        <SectionHead className="mt-[34px]" {...contactSection} />
        <div className="mt-[100px]">
          <ContactBlock heading={contactBlock.heading} blurb={contactBlock.blurb} points={contactBlock.points} />
        </div>
      </section>
    </>
  );
}
