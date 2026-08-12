import Image from "next/image";
import { intro, marqueeLogos } from "@/lib/content/home";
import { Separator, Eyebrow } from "@/components/Section";
import PillButton from "@/components/Buttons";
import Reveal from "@/components/motions/Reveal";
import Marquee from "@/components/Marquee";

export default function Intro() {
  return (
    <>
      <section className="relative z-10 w-full bg-white px-4 pt-[100px] md:px-10">
        <Separator />
        <div className="mt-[50px] grid grid-cols-1 gap-8 lg:grid-cols-[381px_minmax(0,979px)] lg:gap-0">
          <Eyebrow className="lg:pl-[25px]">{intro.label}</Eyebrow>
          <div>
            <Reveal>
              <h2 className="t-h3 text-charcoal">{intro.heading}</h2>
            </Reveal>
            <Reveal className="mt-[81px]">
              <PillButton label={intro.cta.label} href={intro.cta.href} />
            </Reveal>
            <div className="mt-[32px] grid grid-cols-1 gap-x-[84px] gap-y-10 md:grid-cols-[392px_392px]">
              {intro.columns.map((col) => (
                <Reveal key={col.title} className="border-y border-mist/65 py-[41px]">
                  <h3 className="t-h5 text-graphite">{col.title}</h3>
                  <p className="t-body mt-5 text-ash">{col.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[121px] grid grid-cols-1 gap-5 pb-0 md:grid-cols-3">
          {intro.images.map((img) => (
            <Reveal key={img.src} className="relative aspect-[440/370] w-full overflow-hidden rounded-[6px]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                className="object-cover"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative z-10 w-full overflow-hidden bg-white py-[120px]">
        <Marquee logos={marqueeLogos} />
      </section>
    </>
  );
}
