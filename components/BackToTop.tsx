"use client";

import { Roll } from "./Buttons";

export default function BackToTop({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        })
      }
      className="group t-lead text-graphite"
    >
      <Roll label={label} lineHeight={26} />
    </button>
  );
}
