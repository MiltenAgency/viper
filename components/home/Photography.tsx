import { photography } from "@/lib/content/home";
import { Separator, SectionHead } from "@/components/Section";
import CenterIntro from "@/components/CenterIntro";
import { Camera } from "@/components/Icons";

/**
 * The export's gallery component in this section was never wired up — it
 * renders Framer's purple "Set Up the Component" placeholder. The space it
 * occupied is kept so the page rhythm matches; nothing is drawn into it.
 */
export default function Photography() {
  return (
    <section className="relative z-10 w-full bg-white px-4 pb-[240px] md:px-0">
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

      <div className="mx-auto mt-[58px] h-[200px] w-[400px] max-w-full" aria-hidden />
    </section>
  );
}
