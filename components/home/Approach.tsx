import { approach } from "@/lib/content/home";
import { SectionHead } from "@/components/Section";
import PillButton from "@/components/Buttons";
import Reveal from "@/components/motions/Reveal";

export default function Approach() {
  return (
    <section className="relative z-10 w-full bg-white px-4 pb-[140px] pt-[60px] md:px-10">
      <SectionHead className="mt-[34px]" {...approach.section} />

      <div className="mt-[50px] grid grid-cols-1 gap-5 md:grid-cols-3">
        {approach.steps.map((step) => (
          <Reveal key={step.number} className="flex flex-col rounded-[20px] bg-sand px-6 pb-[34px] pt-6">
            <p className="t-h6-semi text-graphite">{step.number}</p>
            <div className="mt-[116px] flex items-center gap-4">
              <span className="block h-[13px] w-[13px] shrink-0 rounded-[3px] bg-accent" />
              <h3 className="t-h5 text-graphite">{step.title}</h3>
              {step.tag && (
                <span className="t-pill rounded-full bg-mist px-[10px] py-1 text-ink">{step.tag}</span>
              )}
            </div>
            <p className="t-body mt-5 text-stone">{step.body}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-[80px] grid grid-cols-1 items-start gap-10 lg:grid-cols-[680px_680px] lg:gap-0">
        <PillButton label={approach.cta.label} href={approach.cta.href} />
        <ul className="w-full">
          {approach.meter.map((row) => (
            <li key={row.label} className="flex items-center justify-between border-b border-mist/65 pb-[22px] pl-5 pt-[23px]">
              <span className="t-lead text-graphite">{row.label}</span>
              <span className="t-lead text-graphite">{row.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
