import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SectionHead } from "@/components/Section";
import { ProjectCard } from "@/components/Cards";
import Faq from "@/components/Faq";
import { projects, workPage } from "@/lib/content/work";

export const metadata: Metadata = {
  title: "Architectural Courts - ATELIER PADEL PRIVÉ",
  description: workPage.blurb,
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        year={workPage.eyebrow}
        title={workPage.title}
        blurb={workPage.blurb}
        image={workPage.heroImage}
      />

      <section className="relative z-10 w-full bg-white px-4 pb-[160px] pt-[60px] md:px-10">
        <SectionHead className="mt-[34px]" {...workPage.section} />
        <div className="mt-[50px] grid grid-cols-1 gap-x-5 gap-y-[30px] lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      <div className="relative z-10 bg-white">
        <Faq />
      </div>
    </>
  );
}
