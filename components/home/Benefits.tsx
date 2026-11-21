import Image from "next/image";
import { benefits } from "@/lib/content/home";
import { Separator, SectionHead } from "@/components/Section";
import Reveal from "@/components/motions/Reveal";
import { Star } from "@/components/Icons";

export default function Benefits() {
  const { speed, platform, support } = benefits;

  return (
    <section className="relative z-10 w-full bg-white px-4 py-[120px] md:px-10">
      <Separator />
      <SectionHead className="mt-[34px]" {...benefits.section} />

      <div className="mt-[50px] grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Card 1: 1,200 Lux Lighting */}
        <Reveal className="group relative flex h-[620px] flex-col justify-between overflow-hidden rounded-[16px] bg-ink p-7 text-paper transition-transform duration-500 hover:-translate-y-1 sm:p-8">
          <Image
            src={speed.background.src}
            alt={speed.background.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 440px"
            className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />

          <div className="relative z-10 flex flex-col items-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-paper backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {speed.caps}
            </span>
            <h3 className="t-h5 mt-6 text-paper">{speed.title}</h3>
            <p className="t-body mt-3 max-w-[340px] text-paper-60">{speed.note}</p>
          </div>

          <div className="relative z-10 mt-auto border-t border-white/10 pt-6">
            <div className="flex items-baseline gap-2">
              <span className="text-[52px] font-bold leading-none tracking-tight text-accent">
                {speed.stat}
              </span>
              <span className="font-mono text-sm uppercase tracking-wider text-paper-80">
                {speed.statUnit}
              </span>
            </div>
            <p className="t-fine mt-2 text-paper-60">{speed.badge}</p>
          </div>
        </Reveal>

        {/* Card 2: 360° Monolithic Glass */}
        <Reveal className="group relative flex h-[620px] flex-col justify-between overflow-hidden rounded-[16px] border border-mist/80 bg-sand p-7 text-ink transition-transform duration-500 hover:-translate-y-1 sm:p-8">
          <div className="flex flex-col items-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-mist px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-ink-80">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {platform.caps}
            </span>
            <h3 className="t-h5 mt-6 text-charcoal">{platform.title}</h3>
            <p className="t-body mt-3 text-stone">{platform.body}</p>
          </div>

          <div className="relative mt-6 h-[260px] w-full overflow-hidden rounded-[12px] bg-fog">
            <Image
              src={platform.image.src}
              alt={platform.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 right-3 rounded-[8px] border border-white/20 bg-ink/75 px-3 py-1.5 backdrop-blur-md">
              <p className="t-fine text-center text-paper">{platform.badge}</p>
            </div>
          </div>
        </Reveal>

        {/* Card 3: 120 Patron Cap */}
        <Reveal className="group relative flex h-[620px] flex-col justify-between overflow-hidden rounded-[16px] bg-ink p-7 text-paper transition-transform duration-500 hover:-translate-y-1 sm:p-8">
          <Image
            src={support.background.src}
            alt={support.background.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 440px"
            className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40" />

          <div className="relative z-10 flex flex-col items-start">
            <div className="flex w-full items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-paper backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {support.caps}
              </span>
              <span className="flex text-accent" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} />
                ))}
              </span>
            </div>

            <div className="mt-8 flex items-baseline gap-2">
              <span className="text-[64px] font-bold leading-none tracking-tight text-accent">
                {support.title}
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-paper-80">
                Patrons Max
              </span>
            </div>
            <p className="t-lead mt-2 font-semibold text-paper">{support.label}</p>
            <p className="t-body mt-3 text-paper-60">{support.body}</p>
          </div>

          <div className="relative z-10 mt-auto border-t border-white/10 pt-5">
            <div className="flex items-center justify-between">
              <span className="t-fine text-paper-60">Monaco & Geneva Reciprocity</span>
              <span className="t-pill rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-ink">
                {support.badge}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
