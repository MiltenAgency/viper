import Image from "next/image";
import { benefits } from "@/lib/content/home";
import { Separator, SectionHead } from "@/components/Section";
import Reveal from "@/components/motions/Reveal";
import { Star, Wand } from "@/components/Icons";

export default function Benefits() {
  const { speed, platform, support } = benefits;

  return (
    <section className="relative z-10 w-full bg-white px-4 py-[120px] md:px-10">
      <Separator />
      <SectionHead className="mt-[34px]" {...benefits.section} />

      <div className="mt-[50px] grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Reveal className="relative flex h-[600px] flex-col overflow-hidden rounded-[10px] bg-fog">
          <Image
            src={speed.background.src}
            alt={speed.background.alt}
            width={440}
            height={600}
            className="pointer-events-none absolute -left-[249px] bottom-0 h-[600px] w-[440px] max-w-none object-cover opacity-90"
          />
          <div className="relative z-10 flex flex-1 flex-col items-center px-10 pt-[75px] text-center">
            <p className="t-card-title text-ink">{speed.title}</p>
            <p className="t-fine mt-[5px] text-ink-60">{speed.note}</p>
            <span className="mt-[195px] grid h-[74px] w-[74px] place-items-center rounded-full bg-accent text-ink">
              <Wand size={30} />
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={speed.wordmark} alt="" className="mt-[172px] h-6 w-[122px] object-contain" />
          </div>
        </Reveal>

        <Reveal className="relative flex h-[600px] flex-col items-center overflow-hidden rounded-[10px] bg-white">
          <span className="absolute inset-x-[-3px] top-0 h-full bg-accent" />
          <span className="absolute inset-x-[22px] top-[22px] bottom-0 rounded-[5px] bg-paper" />
          <div className="relative z-10 flex w-full flex-col items-center px-10 pt-[46px] text-center">
            <p className="t-caps text-ink-60">{platform.caps}</p>
            <p className="mt-[12px] text-[58px] font-semibold leading-[50px] tracking-[-1.5px] text-ink">
              {platform.title}
            </p>
          </div>
          <Image
            src={platform.image.src}
            alt={platform.image.alt}
            width={339}
            height={514}
            className="absolute bottom-0 left-1/2 h-[514px] w-[339px] -translate-x-1/2 rounded-t-[57px] object-cover"
          />
        </Reveal>

        <Reveal className="relative flex h-[600px] flex-col overflow-hidden rounded-[10px] bg-ink">
          <Image
            src={support.background.src}
            alt={support.background.alt}
            fill
            sizes="440px"
            className="object-cover opacity-70"
          />
          <div className="relative z-10 flex w-full flex-col px-6 pt-6">
            <p className="t-caps text-paper-60">{support.caps}</p>
            <p className="t-h3 mt-[10px] text-paper">{support.title}</p>
            <span className="mt-[10px] flex gap-0 text-accent" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={22} />
              ))}
            </span>
            <p className="t-meta mt-[10px] text-paper-60">{support.body}</p>
          </div>
          <Image
            src={support.image.src}
            alt={support.image.alt}
            width={329}
            height={408}
            className="absolute bottom-[-8px] left-1/2 h-[408px] w-[329px] -translate-x-1/2 rounded-t-[57px] object-fill"
          />
        </Reveal>
      </div>
    </section>
  );
}
