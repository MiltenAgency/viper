"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * The export ships these counters as `00` in the static HTML and animates them
 * on entry; the end values here were read off the running original.
 */
export default function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
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
    <p
      ref={ref}
      className="w-fit text-center text-[128px] font-semibold leading-[148px] tracking-[-10px] text-black"
    >
      {value}
      {suffix}
    </p>
  );
}
