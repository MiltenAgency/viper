"use client";

import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import Navbar from "./Navbar";
import { spring } from "@/lib/motion";
import { } from "./Icons";

/** Splits on characters so the export's per-letter entry can be reproduced. */
function Letters({ text, className }: { text: string; className?: string }) {
  const reduced = useReducedMotion();
  // tsconfig targets ES5, so no spread over a string here.
  const chars = Array.from(text);
  return (
    <span className={clsx("inline-flex flex-wrap", className)} aria-label={text}>
      {chars.map((c, i) => (
        <motion.span
          key={`${c}-${i}`}
          aria-hidden
          className="inline-block whitespace-pre"
          initial={reduced ? undefined : { opacity: 0.001, y: 40 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.2 + i * 0.03 }}
        >
          {c}
        </motion.span>
      ))}
      <motion.span
        aria-hidden
        className="inline-block text-accent"
        initial={reduced ? undefined : { opacity: 0.001, y: 40 }}
        animate={reduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.2 + chars.length * 0.03 }}
      >
        *
      </motion.span>
    </span>
  );
}

/** Shared dark hero shell: parallax photo, gradient scrim, nav, then children. */
export function HeroShell({
  src,
  alt,
  height,
  children,
  className,
}: {
  src: string;
  alt: string;
  height: number;
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <section
      className="relative z-10 flex w-full flex-col overflow-hidden bg-ink"
      style={{ minHeight: height }}
    >
      <motion.img
        src={src}
        alt={alt}
        initial={reduced ? undefined : { opacity: 0.2, scale: 1.15 }}
        animate={reduced ? undefined : { opacity: 1, scale: 1 }}
        transition={{ type: "spring", bounce: 0, duration: 3, delay: 0.7 }}
        className="absolute left-1/2 top-1/2 h-[130%] w-full max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/25 to-ink/90" />
      <Navbar />
      <div className={clsx("relative z-20 flex flex-1 flex-col px-[34px] pb-[34px]", className)}>{children}</div>
    </section>
  );
}

/** Index-page hero: 550px, year above a per-letter title, blurb at the right. */
export default function PageHero({
  year,
  title,
  blurb,
  image,
}: {
  year: string;
  title: string;
  blurb: string;
  image: { src: string; alt: string };
}) {
  return (
    <HeroShell src={image.src} alt={image.alt} height={550} className="justify-end">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0">
          <p className="t-h6 text-paper">{year}</p>
          <h1 className="t-display mt-5 text-paper">
            <Letters text={title} />
          </h1>
        </div>
        <p className="t-body w-full max-w-[403px] text-ash lg:mb-[4px]">{blurb}</p>
      </div>
    </HeroShell>
  );
}

export { Letters };
