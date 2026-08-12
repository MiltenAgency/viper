"use client";

import { useReducedMotion } from "framer-motion";

const PITCH = 120; // 80px logo + 40px gap, measured off the original

/**
 * The partner logos are a ticker, not a static row: the export clips them to a
 * 600px window and slides the track left at 51px/s. Two copies of the list run
 * back to back so the loop is seamless.
 */
export default function PartnerTicker({ logos }: { logos: readonly string[] }) {
  const reduced = useReducedMotion();
  const cycle = logos.length * PITCH;
  const seconds = cycle / 51;

  return (
    <div className="relative mx-auto w-full max-w-[600px] overflow-hidden" aria-hidden>
      <div
        className={reduced ? "flex" : "flex animate-[viper-partners_linear_infinite]"}
        style={reduced ? undefined : { animationDuration: `${seconds}s` }}
      >
        {logos.concat(logos).map((src, i) => (
          <span
            key={`${src}-${i}`}
            className="flex shrink-0 items-center justify-center"
            style={{ width: PITCH, height: 80 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" className="h-20 w-20 object-contain" loading="lazy" />
          </span>
        ))}
      </div>
      <style>{`@keyframes viper-partners{from{transform:translateX(0)}to{transform:translateX(-${cycle}px)}}`}</style>
    </div>
  );
}
