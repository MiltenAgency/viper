import type { ReactNode } from "react";
import clsx from "clsx";
import Badge from "./Badge";
import PillButton from "./Buttons";
import Reveal from "./motions/Reveal";

/** Badge → oversized headline → 800px blurb → pill button, all centred. */
export default function CenterIntro({
  icon,
  badge,
  heading,
  blurb,
  cta,
  as = "h2",
  headingClass = "t-h2",
  children,
}: {
  icon: ReactNode;
  badge: string;
  heading: string;
  blurb: string;
  cta: { label: string; href: string };
  as?: "h2" | "h3";
  headingClass?: string;
  children?: ReactNode;
}) {
  const Heading = as;
  return (
    <div className="flex flex-col items-center text-center">
      <Reveal>
        <Badge icon={icon}>{badge}</Badge>
      </Reveal>
      <Reveal className="mt-9 w-full">
        <Heading className={clsx(headingClass, "mx-auto max-w-[1000px] text-charcoal")}>{heading}</Heading>
      </Reveal>
      <Reveal className="mt-[30px] w-full">
        <p className="t-body mx-auto max-w-[800px] text-ash">{blurb}</p>
      </Reveal>
      <Reveal className="mt-[35px]">
        <PillButton label={cta.label} href={cta.href} />
      </Reveal>
      {children}
    </div>
  );
}
