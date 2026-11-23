import { insights } from "@/lib/content/home";
import { posts } from "@/lib/content/blog";
import { SectionHead } from "@/components/Section";
import CenterIntro from "@/components/CenterIntro";
import { PostCard } from "@/components/Cards";
import { Pen } from "@/components/Icons";

export default function Insights() {
  return (
    <section className="relative z-10 w-full bg-white pb-[140px] pt-[60px]">
      <div className="px-4 md:px-10">
        <SectionHead className="mt-[34px]" {...insights.section} />
      </div>

      <div className="mt-[59px] px-4 md:px-10">
        <CenterIntro
          icon={<Pen size={20} />}
          badge={insights.badge}
          heading={insights.heading}
          blurb={insights.blurb}
          cta={insights.cta}
        />
      </div>

      <div className="mt-[45px] grid grid-cols-1 gap-5 px-4 md:grid-cols-3 md:px-10">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
