import Image from "next/image";
import { testimonials } from "@/lib/content/home";
import { SectionHead } from "@/components/Section";
import CenterIntro from "@/components/CenterIntro";
import Reveal from "@/components/motions/Reveal";
import { Quotes, Star, XLogo } from "@/components/Icons";

export default function Testimonials() {
  return (
    <section className="relative z-10 w-full bg-white px-4 pb-[110px] pt-[10px] md:px-10">
      <SectionHead className="mt-[34px]" {...testimonials.section} />

      <div className="mt-[90px]">
        <CenterIntro
          icon={<Quotes size={20} />}
          badge={testimonials.badge}
          heading={testimonials.heading}
          blurb={testimonials.blurb}
          cta={testimonials.cta}
          headingClass="t-h4"
        />
      </div>

      <ul className="mt-[60px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.items.map((item) => (
          <Reveal as="li" key={item.name} className="flex flex-col rounded-[10px] bg-sand px-6 pb-[30px] pt-6">
            <div className="flex items-start justify-between">
              <Image
                src={item.avatar.src}
                alt={item.avatar.alt}
                width={50}
                height={50}
                className="h-[50px] w-[50px] rounded-full object-cover"
              />
              <span className="grid h-8 w-8 place-items-center rounded-full bg-mist text-ink">
                <XLogo size={14} />
              </span>
            </div>
            <span className="mt-6 flex text-accent" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={24} />
              ))}
            </span>
            <blockquote className="t-body mt-6 flex-1 text-stone">{item.body}</blockquote>
            <div className="mt-[25px] border-t border-mist/65 pt-[24px]">
              <p className="t-card-title text-ink">
                {item.name} <span className="px-2 text-ink-40">·</span> {item.role}
              </p>
              <p className="t-fine mt-1 text-ink-60">{item.company}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
