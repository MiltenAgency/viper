import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroShell, Letters } from "@/components/PageHero";
import { Separator, SectionHead, Eyebrow } from "@/components/Section";
import { TextBlock, WideImage, ImagePair } from "@/components/EditorialBlock";
import { PostCard } from "@/components/Cards";
import Reveal from "@/components/motions/Reveal";
import Faq from "@/components/Faq";
import { blogPage, otherPosts, postBySlug, posts } from "@/lib/content/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = postBySlug(params.slug);
  if (!post) return {};
  return { title: `${post.title} - ATELIER PADEL PRIVÉ`, description: post.heroBlurb };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = postBySlug(params.slug);
  if (!post) notFound();
  const more = otherPosts(post.slug);

  return (
    <>
      <HeroShell src={post.cover.src} alt={post.cover.alt} height={640} className="items-center justify-end pb-[44px] text-center">
        <p className="t-badge text-accent">{post.date}</p>
        <h1 className="t-h2 mt-[29px] text-paper">
          <Letters text={post.title} className="justify-center" />
        </h1>
        <p className="t-body mt-[61px] max-w-[650px] text-ash">{post.heroBlurb}</p>
        <div className="mt-[49px] flex flex-wrap items-center justify-center gap-[10px]">
          {post.tags.map((tag) => (
            <span key={tag} className="t-tag rounded-full bg-paper/15 px-5 py-2 text-paper">
              {tag}
            </span>
          ))}
        </div>
      </HeroShell>

      <section className="relative z-10 w-full bg-white px-4 pt-[100px] md:px-10">
        <Separator />
        <div className="mx-auto mt-[70px] w-full max-w-[1200px]">
          <Eyebrow className="lg:pl-[25px]">{post.blocks[0].label}</Eyebrow>
          <Reveal className="mt-[30px]">
            <h2 className="t-h3 text-charcoal">{post.blocks[0].lead}</h2>
            <p className="t-body mt-[30px] text-ash">{post.blocks[0].body}</p>
          </Reveal>
        </div>

        <div className="mt-[150px]">
          <WideImage src={post.images.wide1.src} alt={post.images.wide1.alt} />
        </div>
        <div className="mt-[110px]">
          <TextBlock {...post.blocks[1]} variant="article" />
        </div>
        <div className="mt-[150px]">
          <ImagePair images={post.images.pair} />
        </div>
        <div className="mt-[110px]">
          <TextBlock {...post.blocks[2]} variant="article" />
        </div>
        <div className="mt-[150px]">
          <WideImage src={post.images.wide2.src} alt={post.images.wide2.alt} />
        </div>
      </section>

      <section className="relative z-10 w-full bg-white py-[120px]">
        <div className="px-4 md:px-10">
          <Separator />
          <SectionHead className="mt-[34px]" {...blogPage.moreUpdates} />
        </div>
        <div className="mt-[50px] grid grid-cols-1 gap-5 px-4 md:grid-cols-3 md:px-10">
          {more.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <div className="relative z-10 bg-white">
        <Faq />
      </div>
    </>
  );
}
