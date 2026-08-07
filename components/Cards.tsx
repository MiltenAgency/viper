import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import type { Project } from "@/lib/content/work";
import type { Post } from "@/lib/content/blog";

function Dots({ active, total = 4, tone = "light" }: { active: number; total?: number; tone?: "light" | "dark" }) {
  return (
    <span className="flex shrink-0 items-center gap-2" aria-hidden>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={clsx(
            "block h-2 w-2 rounded-full",
            i < active ? "bg-accent" : tone === "dark" ? "bg-paper/25" : "bg-[#d9d9d9]",
          )}
        />
      ))}
    </span>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="t-tag inline-flex items-center rounded-full bg-mist px-5 py-2 text-ink-80">{children}</span>
  );
}

/** 670×526 project card: 650×428 photo, then a 48px meta row. */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex w-full flex-col gap-5 rounded-[20px] bg-sand p-[10px] pb-5"
    >
      <div className="relative aspect-[650/428] w-full overflow-hidden rounded-[10px]">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 650px"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-3 px-[14px]">
        <Dots active={index + 1} />
        <div className="min-w-0">
          <p className="t-card-title text-ink">{project.title}</p>
          <p className="t-meta text-ink-60">{project.year}</p>
        </div>
        <div className="ml-auto flex items-center gap-[10px]">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}

/** 440-wide article card: 440×312 photo, title + tag, date underneath. */
export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex w-full flex-col gap-5">
      <div className="relative aspect-[440/312] w-full overflow-hidden rounded-[10px]">
        <Image
          src={post.cover.src}
          alt={post.cover.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 440px"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex items-center gap-4 px-4">
        <div className="min-w-0">
          <p className="t-card-title text-ink">{post.title}</p>
          <p className="t-meta text-ink-60">{post.date}</p>
        </div>
        <span className="ml-auto">
          <Tag>{post.category}</Tag>
        </span>
      </div>
    </Link>
  );
}
