"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import { hero } from "@/lib/content/home";
import { spring } from "@/lib/motion";
import { ArrowDown, Globe } from "@/components/Icons";

/**
 * 1000px pinned hero. Entry timings are the export's own appear payload:
 * the photo eases in over 3s from scale 1.15, the type follows on springs.
 */
export default function Hero() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const [height, setHeight] = useState(1000);

  useEffect(() => {
    const measure = () => setHeight(ref.current?.offsetHeight ?? 1000);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /* The export does not pin the hero flat. Measured against the original, the
     panel drifts up at 0.2x the scroll distance and the photo a further 0.1x
     inside it, so the picture tracks at 0.3x overall before the next section
     covers it. The hero sits at the top of the document, so scrollY is the
     travel distance directly. */
  const travelled = useTransform(scrollY, (v) => Math.min(Math.max(v, 0), height));
  const panelY = useTransform(travelled, (v) => v * -0.2);
  const imageY = useTransform(travelled, (v) => v * -0.1);
  const enter = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0.001, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { ...spring, delay },
        };

  return (
    <motion.section
      ref={ref}
      style={reduced ? undefined : { y: panelY }}
      className="sticky top-0 flex h-[1000px] w-full flex-col overflow-hidden bg-ink"
    >
      <motion.div
        className="absolute inset-0"
        style={reduced ? undefined : { y: imageY }}
        initial={reduced ? undefined : { opacity: 0.2, scale: 1.15 }}
        animate={reduced ? undefined : { opacity: 1, scale: 1 }}
        transition={{ type: "spring", bounce: 0, duration: 3, delay: 0.7 }}
      >
        <Image src={hero.image.src} alt={hero.image.alt} fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-ink/45" />

      <Navbar />

      <div className="relative z-20 flex flex-1 flex-col justify-end px-[34px] pb-[34px]">
        <motion.span {...enter(1.2)} className="pointer-events-none absolute right-[64px] top-[496px] hidden text-paper lg:block">
          <Globe size={38} />
        </motion.span>
        <motion.p
          {...enter(1.4)}
          className="pointer-events-none absolute right-[34px] top-[564px] hidden w-[340px] text-[20px] font-semibold leading-6 tracking-[-0.1px] text-paper lg:block"
        >
          {hero.blurbLines.join(" ")}
        </motion.p>

        <motion.p {...enter(1)} className="text-[40px] font-bold leading-[34px] tracking-[-1px] text-paper">
          {hero.year}
        </motion.p>
        <h1 className="t-hero mt-[30px] flex items-start text-paper">
          <motion.span {...enter(1.2)} className="block">
            {hero.title}
          </motion.span>
          <motion.span {...enter(1.35)} className="block text-accent">
            *
          </motion.span>
        </h1>

        <motion.span
          {...enter(2.8)}
          className="pointer-events-none absolute bottom-[30px] right-[34px] hidden text-paper md:block"
        >
          <ArrowDown size={31} />
        </motion.span>
      </div>

    </motion.section>
  );
}