import Image from "next/image";
import { photography } from "@/lib/content/home";
import { Separator, SectionHead } from "@/components/Section";
import CenterIntro from "@/components/CenterIntro";
import Reveal from "@/components/motions/Reveal";
import { Camera } from "@/components/Icons";

export default function Photography() {
  return (
    <section className="relative z-10 w-full bg-white px-4 pb-[160px] md:px-0">
      <div className="px-0 md:px-10">
        <Separator />
        <SectionHead className="mt-[34px]" {...photography.section} />
      </div>

      <div className="mt-[99px] px-0 md:px-10">
        <CenterIntro
          icon={<Camera size={20} />}
          badge={photography.badge}
          heading={photography.heading}
          blurb={photography.blurb}
          cta={photography.cta}
        />
      </div>

      <div className="mx-auto mt-[68px] grid max-w-[1360px] grid-cols-1 gap-5 px-4 sm:grid-cols-3 md:px-10">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-sand">
          <Image
            src="/assets/img/padel-racquet-craft.jpg"
            alt="Carbon Racquet Detail"
            fill
            sizes="(max-width: 768px) 100vw, 440px"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </Reveal>
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-sand">
          <Image
            src="/assets/img/padel-ball-service.jpg"
            alt="Optic Lime Ball Impact"
            fill
            sizes="(max-width: 768px) 100vw, 440px"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </Reveal>
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-sand">
          <Image
            src="/assets/img/padel-overhead-action.jpg"
            alt="High-Velocity Smash"
            fill
            sizes="(max-width: 768px) 100vw, 440px"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </Reveal>
      </div>
    </section>
  );
}
