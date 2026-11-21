import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Separator, SectionHead } from "@/components/Section";
import { PostCard } from "@/components/Cards";
import Faq from "@/components/Faq";
import { blogPage, posts } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "Padel Journal & Technical Papers - ATELIER PADEL PRIVÉ",
  description: blogPage.blurb,
};

export default function BlogPage() {
  return (
    <>
      <PageHero year={blogPage.eyebrow} title={blogPage.title} blurb={blogPage.blurb} image={blogPage.heroImage} />

      <section className="relative z-10 w-full bg-white pb-[140px] pt-[120px]">
        <div className="px-4 md:px-10">
          <Separator />
          <SectionHead className="mt-[34px]" {...blogPage.section} />
        </div>
        <div className="mt-[50px] grid grid-cols-1 gap-5 px-4 md:grid-cols-3 md:px-10">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <div className="relative z-10 bg-white">
        <Faq />
      </div>
    </>
  );
}
