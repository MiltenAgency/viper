"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * The export ships these counters as `00` in the static HTML and animates them
 * on entry; the end values here were read off the running original.
 */
export default function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(reduced ? to : 0);

  useEffect(() => {
    if (!inView || reduced) return;
    const start = performance.now();
    const duration = 1600;
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out cubic, so the last digits settle rather than snap
      setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, to]);

  return (
    <div ref={ref} className="flex flex-wrap items-baseline gap-2">
      <span className="text-[52px] sm:text-[64px] lg:text-[74px] xl:text-[84px] font-semibold leading-none tracking-[-3px] lg:tracking-[-4px] text-charcoal">
        {value}
      </span>
      <span className="text-[20px] sm:text-[24px] lg:text-[28px] font-medium tracking-normal text-ash">
        {suffix.trim()}
      </span>
    </div>
  );
}
