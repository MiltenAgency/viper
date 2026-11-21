import Image from "next/image";
import { framerExpert } from "@/lib/content/home";
import { Separator, SectionHead } from "@/components/Section";
import Badge from "@/components/Badge";
import PillButton from "@/components/Buttons";
import Reveal from "@/components/motions/Reveal";
import { Star } from "@/components/Icons";

export default function FramerExpert() {
  return (
    <section className="relative z-10 w-full bg-sand px-4 pb-[120px] md:px-10">
      <Separator />
      <SectionHead className="mt-[40px]" {...framerExpert.section} />

      <div className="mt-[80px] grid grid-cols-1 items-center gap-12 lg:grid-cols-[694px_minmax(0,1fr)] lg:gap-[151px]">
        <Reveal className="relative aspect-[694/660] w-full overflow-hidden rounded-[16px]">
          <Image
            src={framerExpert.image.src}
            alt={framerExpert.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 694px"
            className="object-cover"
          />
        </Reveal>

        <div className="flex flex-col items-start">
          <Badge icon={<Star size={20} />}>{framerExpert.badge}</Badge>
          <h2 className="t-h3 mt-[37px] max-w-[503px] text-charcoal">{framerExpert.heading}</h2>
          <h3 className="t-h5 mt-[40px] max-w-[380px] text-graphite">{framerExpert.subheading}</h3>
          <p className="t-body mt-[46px] max-w-[380px] text-ash">{framerExpert.body}</p>
          <div className="mt-[57px] flex flex-wrap items-center gap-[63px]">
            <PillButton label={framerExpert.cta.label} href={framerExpert.cta.href} tone="mist" />
            <div>
              <span className="flex text-accent" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={24} />
                ))}
              </span>
              <p className="t-fine mt-2 text-ink-60">{framerExpert.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
