import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Separator, SectionHead, Eyebrow } from "@/components/Section";
import PillButton from "@/components/Buttons";
import Reveal from "@/components/motions/Reveal";
import Badge from "@/components/Badge";
import StickyImage from "@/components/StickyImage";
import Faq from "@/components/Faq";
import ContactBlock from "@/components/ContactBlock";
import { Layers, Plus } from "@/components/Icons";
import { aboutPage } from "@/lib/content/about";
import { contactBlock } from "@/lib/content/shared";

export const metadata: Metadata = {
  title: "Atelier - KRONOS Horology",
  description: aboutPage.hero.blurb,
};

export default function AboutPage() {
  const { passion, awards, practice, stack } = aboutPage;

  return (
    <>
      <PageHero
        year={aboutPage.hero.year}
        title={aboutPage.hero.title}
        blurb={aboutPage.hero.blurb}
        image={aboutPage.hero.image}
      />

      <section className="relative z-10 w-full bg-white px-4 pb-[120px] pt-[100px] md:px-10">
        <Separator />
        <div className="mt-[50px] grid grid-cols-1 gap-8 lg:grid-cols-[381px_minmax(0,979px)] lg:gap-0">
          <Eyebrow className="lg:pl-[25px]">{passion.label}</Eyebrow>
          <div>
            <Reveal>
              <h2 className="t-h3 text-charcoal">{passion.heading}</h2>
            </Reveal>
            <Reveal className="mt-[69px]">
              <PillButton label={passion.cta.label} href={passion.cta.href} />
            </Reveal>
            <ul className="mt-[45px]">
              {passion.rows.map((row) => (
                <Reveal
                  as="li"
                  key={row.title}
                  className="grid grid-cols-1 gap-4 border-t border-mist/65 pb-10 pt-[41px] md:grid-cols-[379px_minmax(0,380px)_minmax(0,1fr)]"
                >
                  <h3 className="t-h5 text-graphite">{row.title}</h3>
                  <p className="t-body text-ash">{row.body}</p>
                  <p className="t-tag text-right text-ink-80">{row.price}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full bg-sand px-4 pb-[120px] md:px-10">
        <Separator />
        <SectionHead className="mt-[40px]" {...awards.section} />
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-[600px_minmax(0,760px)] lg:gap-0">
          <div className="flex flex-col items-start">
            <h2 className="t-h4 max-w-[410px] text-charcoal">{awards.heading}</h2>
            <p className="t-body mt-[30px] max-w-[410px] text-stone">{awards.blurb}</p>
            <ul className="mt-[63px] w-full max-w-[410px] border-t border-mist/65">
              {awards.points.map((point) => (
                <li key={point} className="flex items-center gap-4 border-b border-mist/65 py-[11px]">
                  <span className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-accent-10 text-accent">
                    <Plus size={13} />
                  </span>
                  <span className="t-note text-graphite">{point}</span>
                </li>
              ))}
            </ul>
            <PillButton label={awards.cta.label} href={awards.cta.href} tone="mist" className="mt-[58px]" />
          </div>

          <ul className="flex flex-col gap-[14px]">
            {awards.items.map((item) => (
              <Reveal as="li" key={item.title} className="flex items-center gap-[14px] rounded-[10px] bg-mist p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.icon} alt="" className="h-6 w-6 shrink-0 object-contain" />
                <span className="min-w-0 flex-1">
                  <span className="t-card-title block text-ink">{item.title}</span>
                  <span className="t-btn block text-ink-60">{item.note}</span>
                </span>
                <span className="t-tag shrink-0 text-ink-80">{item.count}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <StickyImage src={awards.image.src} alt={awards.image.alt} />

      <section className="relative z-10 w-full bg-white px-4 py-[120px] md:px-10">
        <Separator />
        <SectionHead className="mt-[34px]" {...practice.section} />
        <div className="mt-[80px] grid grid-cols-1 gap-12 lg:grid-cols-[544px_minmax(0,816px)] lg:gap-0">
          <div className="flex flex-col items-start">
            <h2 className="t-h4 text-charcoal">{practice.heading}</h2>
            <p className="t-body mt-[30px] max-w-[420px] text-stone">{practice.blurb}</p>
            <PillButton label={practice.cta.label} href={practice.cta.href} className="mt-[57px]" />
          </div>
          <ul className="w-full">
            {practice.roles.map((role) => (
              <Reveal as="li" key={role.company} className="border-t border-mist/65 pb-10 pt-[41px]">
                {/* The export puts the company on its own line and pairs the
                    period with the job title below it, not with the company. */}
                <p className="t-h6-semi text-ink">{role.company}</p>
                <div className="mt-[26px] flex flex-wrap items-start justify-between gap-4">
                  <p className="t-card-title text-ink">{role.title}</p>
                  <p className="t-tag text-ink-80">{role.period}</p>
                </div>
                <p className="t-btn mt-[14px] max-w-[480px] text-ink-60">{role.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative z-10 w-full bg-white px-4 pt-[10px] md:px-10">
        <Separator />
        <SectionHead className="mt-[34px]" {...stack.section} />
        <div className="mt-[50px] flex flex-col items-center text-center">
          <Badge icon={<Layers size={20} />}>{stack.badge}</Badge>
          <h2 className="t-h4 mt-[27px] max-w-[1000px] text-charcoal">{stack.heading}</h2>
          <p className="t-body mt-[30px] max-w-[800px] text-ash">{stack.blurb}</p>
          <PillButton label={stack.cta.label} href={stack.cta.href} className="mt-[35px]" />
        </div>

        <div className="mt-[50px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stack.items.map((item) => (
            <Reveal key={item.title} className="flex h-[370px] flex-col rounded-[20px] bg-sand px-6 pb-[34px] pt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.icon} alt="" className="h-6 w-6 object-contain" />
              <div className="mt-[133px] flex items-center gap-4">
                <span className="block h-[13px] w-[13px] shrink-0 rounded-[3px] bg-accent" />
                <h3 className="t-h5 text-graphite">{item.title}</h3>
                {"tag" in item && item.tag && (
                  <span className="t-pill rounded-full bg-mist px-[10px] py-1 text-ink">{item.tag}</span>
                )}
              </div>
              <p className="t-body mt-5 text-stone">{item.body}</p>
            </Reveal>
          ))}
          <Reveal className="relative h-[370px] overflow-hidden rounded-[20px] bg-sand p-2">
            <Image
              src={stack.feature.src}
              alt={stack.feature.alt}
              fill
              sizes="440px"
              className="rounded-[10px] object-cover p-2"
            />
          </Reveal>
        </div>
      </section>

      <div className="relative z-10 bg-white pt-[120px]">
        <Faq />
      </div>

      <StickyImage src={aboutPage.faqImage.src} alt={aboutPage.faqImage.alt} />

      <section className="relative z-10 w-full bg-white px-4 pb-[140px] pt-[120px] md:px-10">
        <Separator />
        <SectionHead className="mt-[34px]" {...aboutPage.contactSection} />
        <div className="mt-[100px]">
          <ContactBlock heading={contactBlock.heading} blurb={contactBlock.blurb} points={contactBlock.points} />
        </div>
      </section>
    </>
  );
}
