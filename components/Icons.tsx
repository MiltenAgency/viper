import { useId } from "react";

/** Inline line icons matching the export's stroke weight and 24px grid. */

type P = { className?: string; size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export function ArrowRight({ className, size = 18 }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight({ className, size = 18 }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function Plus({ className, size = 18 }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Check({ className, size = 13 }: P) {
  return (
    <svg {...base(size)} className={className} strokeWidth={2.5}>
      <path d="M4 12.5 9 17.5 20 6.5" />
    </svg>
  );
}

export function Cross({ className, size = 13 }: P) {
  return (
    <svg {...base(size)} className={className} strokeWidth={2.5}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Star({ className, size = 24 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="m12 2.5 2.9 5.9 6.6.9-4.8 4.6 1.2 6.5L12 17.3 6.1 20.4l1.2-6.5L2.5 9.3l6.6-.9z" />
    </svg>
  );
}

export function Layers({ className, size = 20 }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5" />
    </svg>
  );
}

export function Camera({ className, size = 20 }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 8h3l1.5-2h7L17 8h3v11H4z" />
      <circle cx="12" cy="13" r="3.2" />
    </svg>
  );
}

export function Quotes({ className, size = 20 }: P) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 10.5h2v3h-2zM13.5 10.5h2v3h-2z" />
    </svg>
  );
}

export function FramerMark({ className, size = 20 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M6 3h12v6H6zM6 9h12l-6 6H6zM6 15h6v6z" />
    </svg>
  );
}

export function Dollar({ className, size = 20 }: P) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5A2.5 2.5 0 0 0 12 8h-.5a2 2 0 0 0 0 4h1a2 2 0 0 1 0 4H12a2.5 2.5 0 0 1-2.5-1.5M12 6.5v11" />
    </svg>
  );
}

export function Pen({ className, size = 20 }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 20h4L20 8l-4-4L4 16z" />
    </svg>
  );
}

export function Send({ className, size = 20 }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M21 3 3 10l7 3 3 7z" />
    </svg>
  );
}

export function Wand({ className, size = 18 }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M15 4 20 9 9 20 4 15zM17 2v4M15 4h4M5 3v3M3.5 4.5h3" />
    </svg>
  );
}

export function Globe({ className, size = 30 }: P) {
  return (
    <svg {...base(size)} className={className} strokeWidth={1.4}>
      <ellipse cx="12" cy="12" rx="10" ry="6.5" />
      <ellipse cx="12" cy="12" rx="4" ry="2.6" />
    </svg>
  );
}

export function Download({ className, size = 16 }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 4v10M8 11l4 4 4-4M5 19h14" />
    </svg>
  );
}

export function ArrowDown({ className, size = 30 }: P) {
  return (
    <svg {...base(size)} className={className} strokeWidth={1.5}>
      <path d="M12 4v15M6 13l6 6 6-6" />
    </svg>
  );
}

export function XLogo({ className, size = 16 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.5 3h3l-6.5 7.4L21.7 21h-6l-4.7-6.1L5.6 21h-3l7-8-6.9-10h6.2l4.2 5.6zm-1 16h1.6L7.6 4.7H5.9z" />
    </svg>
  );
}

export function TennisBall({ className, size = 180, strokeWidth = 4.5 }: P & { strokeWidth?: number }) {
  const clipId = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <clipPath id={clipId}>
          <circle cx="50" cy="50" r="44" />
        </clipPath>
      </defs>
      <circle cx="50" cy="50" r="44" />
      <g clipPath={`url(#${clipId})`}>
        <path d="M 24 14.5 A 44 44 0 0 1 24 85.5" />
        <path d="M 76 14.5 A 44 44 0 0 0 76 85.5" />
      </g>
    </svg>
  );
}
