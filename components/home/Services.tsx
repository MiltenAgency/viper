import Image from "next/image";
import { services } from "@/lib/content/home";
import { Separator, SectionHead } from "@/components/Section";
import PillButton from "@/components/Buttons";
import Reveal from "@/components/motions/Reveal";
import { Plus } from "@/components/Icons";

export default function Services() {
  return (
    <section className="relative z-10 w-full bg-sand px-4 pb-[120px] md:px-10">
      <Separator />
      <SectionHead className="mt-[40px]" {...services.section} />

      <div className="mt-[80px] grid grid-cols-1 gap-16 lg:grid-cols-[610px_minmax(0,750px)] lg:gap-0">
        <div className="flex flex-col items-start">
          <h2 className="t-h4 max-w-full text-charcoal md:max-w-[430px]">{services.heading}</h2>
          <p className="t-body mt-[30px] max-w-[420px] text-stone">{services.blurb}</p>
          <ul className="mt-[40px] w-full max-w-[420px] border-t border-mist/65 pt-[12px]">
            {services.points.map((point) => (
              <li key={point} className="flex items-center gap-4 border-b border-mist/65 pb-[12px] pt-[11px]">
                <span className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-accent-10 text-accent">
                  <Plus size={13} />
                </span>
                <span className="t-note text-graphite">{point}</span>
              </li>
            ))}
          </ul>
          <PillButton label={services.cta.label} href={services.cta.href} tone="mist" className="mt-[22px]" />
        </div>

        <ul className="flex flex-col gap-[14px]">
          {services.items.map((item) => (
            <Reveal as="li" key={item.title} className="flex items-center gap-[10px] rounded-[10px] bg-mist p-2 pr-6">
              <span className="relative block h-[82px] w-[124px] shrink-0 overflow-hidden rounded-[5px]">
                <Image src={item.image.src} alt={item.image.alt} fill sizes="124px" className="object-cover" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="t-card-title block text-ink">{item.title}</span>
                <span className="t-btn block text-ink-60">{item.meta}</span>
              </span>
              <span className="flex shrink-0 items-center gap-[6px]" aria-hidden>
                {Array.from({ length: 4 }).map((_, i) => (
                  <span
                    key={i}
                    className={`block h-2 w-2 rounded-full ${i < item.dots ? "bg-accent" : "bg-[#d9d9d9]"}`}
                  />
                ))}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
