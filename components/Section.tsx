import clsx from "clsx";
import type { ReactNode } from "react";

/** Hairline that opens every section, with the export's 9px plus at its centre. */
export function Separator({ className }: { className?: string }) {
  return (
    <div className={clsx("relative h-px w-full bg-mist/65", className)}>
      <span className="absolute left-1/2 top-1/2 block h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2">
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-charcoal" />
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-charcoal" />
      </span>
    </div>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={clsx("flex h-[26px] items-center gap-3 self-start", className)}>
      <span className="block h-[13px] w-[13px] shrink-0 rounded-[3px] bg-accent" />
      <span className="t-lead whitespace-nowrap text-graphite">{children}</span>
    </span>
  );
}

/** Label / index / year row: three equal columns across the 1360px measure. */
export function SectionHead({
  label,
  index,
  year,
  center,
  className,
}: {
  label: string;
  index?: string;
  year?: string;
  center?: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("grid w-full grid-cols-1 gap-4 sm:grid-cols-3", className)}>
      <Eyebrow>{label}</Eyebrow>
      <p className="t-lead hidden text-center text-graphite sm:block">{center ?? index ?? ""}</p>
      <p className="t-lead hidden text-right text-graphite sm:block">{year ?? ""}</p>
    </div>
  );
}
