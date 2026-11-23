import { featured } from "@/lib/content/home";
import { projects } from "@/lib/content/work";
import { SectionHead } from "@/components/Section";
import CenterIntro from "@/components/CenterIntro";
import Reveal from "@/components/motions/Reveal";
import { ProjectCard } from "@/components/Cards";
import { Layers } from "@/components/Icons";
import PartnerTicker from "@/components/PartnerTicker";

export default function Featured() {
  return (
    <section className="relative z-10 w-full bg-white px-4 pb-[160px] pt-[60px] md:px-10">
      <SectionHead className="mt-[34px]" {...featured.section} />

      <div className="mt-[90px]">
        <CenterIntro icon={<Layers size={20} />} badge={featured.badge} heading={featured.heading} blurb={featured.blurb} cta={featured.cta}>
          <Reveal className="mt-[25px] w-full">
            <p className="mx-auto w-full max-w-[600px] text-[13px] font-medium leading-[15px] text-ink-60">{featured.partnersLabel}</p>
          </Reveal>
          <Reveal className="mt-[10px] w-full">
            <PartnerTicker logos={featured.partners} />
          </Reveal>
        </CenterIntro>
      </div>

      <div className="mt-[60px] grid grid-cols-1 gap-x-5 gap-y-[30px] lg:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
