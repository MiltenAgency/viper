import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Separator, SectionHead } from "@/components/Section";
import ContactBlock from "@/components/ContactBlock";
import Faq from "@/components/Faq";
import { contactPage } from "@/lib/content/about";

export const metadata: Metadata = {
  title: "Contact - Viper - Portfolio",
  description: contactPage.hero.blurb,
};

export default function ContactRoute() {
  return (
    <>
      <PageHero
        year={contactPage.hero.year}
        title={contactPage.hero.title}
        blurb={contactPage.hero.blurb}
        image={contactPage.hero.image}
      />

      <section className="relative z-10 w-full bg-white px-4 pb-[130px] pt-[120px] md:px-10">
        <Separator />
        <SectionHead className="mt-[34px]" {...contactPage.section} />
        <div className="mt-[100px]">
          <ContactBlock
            heading={contactPage.heading}
            blurb={contactPage.blurb}
            address={{ title: contactPage.addressTitle, body: contactPage.address }}
            cta={null}
          />
        </div>
      </section>

      <div className="relative z-10 bg-white">
        <Faq />
      </div>
    </>
  );
}
