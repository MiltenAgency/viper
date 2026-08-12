"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Endless logo rail: two identical tracks translate left over 40s. Each cell is
 * 268px wide with a hairline divider, matching the export's rhythm.
 */
export default function Marquee({ logos }: { logos: string[] }) {
  const reduced = useReducedMotion();
  const track = logos.concat(logos);

  return (
    <div className="relative flex w-full overflow-hidden" aria-hidden>
      <div className={reduced ? "flex" : "flex animate-[viper-marquee_40s_linear_infinite]"}>
        {track.map((src, i) => (
          <span
            key={`${src}-${i}`}
            className="flex h-[182px] w-[268px] shrink-0 items-center justify-center border-r border-mist/65"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" className="h-[55px] w-[145px] object-contain" loading="lazy" />
          </span>
        ))}
      </div>
      <style>{`@keyframes viper-marquee{from{transform:translateX(0)}to{transform:translateX(-${logos.length * 268}px)}}`}</style>
    </div>
  );
}
