"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Full-bleed image panel that pins while the next white section scrolls over it.
 *
 * The export does not pin it flat: measured against the original, the panel
 * itself drifts up at 0.2x the scroll distance and the image drifts a further
 * 0.1x inside it, so the picture tracks at 0.3x overall. Driving this off
 * `useScroll({ target })` does not work — while the section is stuck its
 * viewport rect never changes, so the progress value stays at 0. It has to come
 * from the window scroll measured against the section's document offset.
 */
export default function StickyImage({
  src,
  alt,
  height = 1000,
}: {
  src: string;
  alt: string;
  height?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const [top, setTop] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (ref.current) setTop(ref.current.getBoundingClientRect().top + window.scrollY);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Travel is capped at the panel's own height — past that it has scrolled away.
  const travelled = useTransform(scrollY, (v) => Math.min(Math.max(v - top, 0), height));
  const panelY = useTransform(travelled, (v) => v * -0.2);
  const imageY = useTransform(travelled, (v) => v * -0.1);

  return (
    <motion.section
      ref={ref}
      style={reduced ? { height } : { height, y: panelY }}
      className="sticky top-0 w-full overflow-hidden bg-ink"
    >
      <motion.img
        src={src}
        alt={alt}
        style={reduced ? undefined : { y: imageY }}
        className="absolute left-1/2 top-1/2 h-[120%] w-[120%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
      />
    </motion.section>
  );
}
