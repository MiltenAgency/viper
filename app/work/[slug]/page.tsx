import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroShell, Letters } from "@/components/PageHero";
import { Separator, SectionHead, Eyebrow } from "@/components/Section";
import { TextBlock, WideImage, ImagePair } from "@/components/EditorialBlock";
import { ProjectCard, Tag } from "@/components/Cards";
import Reveal from "@/components/motions/Reveal";
import PillButton from "@/components/Buttons";
import Faq from "@/components/Faq";
import { otherProjects, projectBySlug, projects, workPage } from "@/lib/content/work";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projectBySlug(params.slug);
  if (!project) return {};
  return { title: `${project.title} - Viper - Portfolio`, description: project.heroBlurb };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectBySlug(params.slug);
  if (!project) notFound();
  const more = otherProjects(project.slug);

  return (
    <>
      <HeroShell src={project.cover.src} alt={project.cover.alt} height={620} className="justify-end">
        <p className="t-badge text-accent">{project.year}</p>
        <h1 className="t-h2 mt-[39px] text-paper">
          <Letters text={project.title} />
        </h1>
        <p className="t-body mt-[61px] max-w-[650px] text-ash">{project.heroBlurb}</p>
        <div className="mt-[55px] flex flex-wrap items-center gap-[10px]">
          <PillButton label={workPage.previewLabel} href={`/work/${project.slug}`} className="bg-paper" />
          {project.tags.map((tag) => (
            <span key={tag} className="t-tag rounded-full bg-paper/15 px-5 py-2 text-paper">
              {tag}
            </span>
          ))}
        </div>
      </HeroShell>

      <section className="relative z-10 w-full bg-white px-4 pt-[100px] md:px-10">
        <Separator />
        <div className="mt-[50px] grid grid-cols-1 gap-6 lg:grid-cols-[381px_minmax(0,979px)] lg:gap-0">
          <Eyebrow className="lg:pl-[25px]">{project.knowMore.label}</Eyebrow>
          <div>
            <Reveal>
              <h2 className="t-h3 text-charcoal">{project.knowMore.heading}</h2>
            </Reveal>
            <Reveal className="mt-[50px] border-t border-mist/65 pt-[85px]">
              <h3 className="t-h5 max-w-[500px] text-graphite">{project.quote.heading}</h3>
              <blockquote className="t-body mt-5 max-w-[880px] text-ash">{project.quote.body}</blockquote>
            </Reveal>
          </div>
        </div>

        <div className="mt-[80px]">
          <WideImage src={project.images.wide1.src} alt={project.images.wide1.alt} />
        </div>

        <div className="mt-[110px]">
          <TextBlock {...project.blocks[0]} />
        </div>
        <div className="mt-[150px]">
          <ImagePair images={project.images.pair} />
        </div>
        <div className="mt-[110px]">
          <TextBlock {...project.blocks[1]} />
        </div>
        <div className="mt-[150px]">
          <WideImage src={project.images.wide2.src} alt={project.images.wide2.alt} />
        </div>
        <div className="mt-[110px]">
          <TextBlock {...project.blocks[2]} />
        </div>
        <div className="mt-[150px]">
          <WideImage src={project.images.wide3.src} alt={project.images.wide3.alt} />
        </div>
      </section>

      <section className="relative z-10 w-full bg-white px-4 py-[120px] md:px-10">
        <Separator />
        <SectionHead className="mt-[34px]" {...workPage.moreWorks} />
        <div className="mt-[50px] grid grid-cols-1 gap-x-5 gap-y-[30px] lg:grid-cols-2">
          {more.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i + 1} />
          ))}
        </div>
      </section>

      <div className="relative z-10 bg-white">
        <Faq />
      </div>
    </>
  );
}
