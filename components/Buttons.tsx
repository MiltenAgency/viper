"use client";

import Link from "next/link";
import clsx from "clsx";
import { ArrowRight } from "./Icons";

/**
 * The export's one button: a 54px pill holding a 44px accent disc. Hovering
 * slides the arrow out of the disc while a second arrow slides in behind it,
 * and rolls the label up to an identical copy. Both copies are real text so
 * the pill never changes width.
 */
type Props = {
  label: string;
  href: string;
  tone?: "light" | "mist" | "dark";
  className?: string;
};

const tones = {
  light: "bg-sand text-ink",
  mist: "bg-mist text-ink",
  dark: "bg-ink-80 text-paper",
} as const;

export default function PillButton({ label, href, tone = "light", className }: Props) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex h-[54px] shrink-0 items-center gap-[14px] rounded-full py-[5px] pl-[5px] pr-6",
        tones[tone],
        className,
      )}
    >
      <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-accent text-paper">
        <span className="flex transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-x-[22px]">
          <ArrowRight className="shrink-0 translate-x-[2px]" />
          <ArrowRight className="shrink-0 translate-x-[26px]" />
        </span>
      </span>
      <span className="relative block h-5 overflow-hidden">
        <span className="block transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-5">
          <span className="t-btn block whitespace-nowrap">{label}</span>
          <span className="t-btn block whitespace-nowrap" aria-hidden>
            {label}
          </span>
        </span>
      </span>
    </Link>
  );
}

/** The same roll without the disc — the nav and footer links use it directly. */
export function Roll({ label, lineHeight = 22 }: { label: string; lineHeight?: number }) {
  return (
    <span className="block overflow-hidden" style={{ height: lineHeight }}>
      <span
        className="block transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-[var(--roll)]"
        style={{ ["--roll" as string]: `${lineHeight}px` }}
      >
        <span className="block whitespace-nowrap">{label}</span>
        <span className="block whitespace-nowrap" aria-hidden>
          {label}
        </span>
      </span>
    </span>
  );
}
