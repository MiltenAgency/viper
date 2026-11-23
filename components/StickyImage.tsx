"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

export interface StickyImageProps {
  src: string;
  alt: string;
  year?: string;
  title?: string;
  blurb?: string;
  icon?: ReactNode;
  height?: number;
  className?: string;
  children?: ReactNode;
}

/**
 * Full-bleed sticky image panel with parallax depth and rich banner typography.
 * Pins at 100vh while the next section scrolls over it, matching the hero banner style.
 */
export default function StickyImage({
  src,
  alt,
  year,
  title,
  blurb,
  icon,
  height: customHeight,
  className,
  children,
}: StickyImageProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const [sectionHeight, setSectionHeight] = useState(800);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (ref.current) {
        setSectionHeight(ref.current.offsetHeight);
        setTop(ref.current.getBoundingClientRect().top + window.scrollY);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const effectiveHeight = customHeight ?? sectionHeight;

  // Travel is capped at the panel's own height — past that it has scrolled away.
  const travelled = useTransform(scrollY, (v) => Math.min(Math.max(v - top, 0), effectiveHeight));
  const panelY = useTransform(travelled, (v) => v * -0.2);
  const imageY = useTransform(travelled, (v) => v * -0.1);

  const displayTitle = title ?? (blurb || year ? alt : undefined);

  return (
    <motion.section
      ref={ref}
      style={
        reduced
          ? customHeight
            ? { height: customHeight }
            : undefined
          : customHeight
            ? { height: customHeight, y: panelY }
            : { y: panelY }
      }
      className={clsx(
        "sticky top-0 flex h-screen min-h-[580px] max-h-[1000px] w-full flex-col justify-end overflow-hidden bg-ink",
        className
      )}
    >
      <motion.div
        className="absolute inset-0 -top-[10%] h-[120%] w-full"
        style={reduced ? undefined : { y: imageY }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Cinematic dark scrims for contrast and text legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/20" />
      <div className="pointer-events-none absolute inset-0 bg-ink/25" />

      {/* Hero-banner content layer */}
      {(displayTitle || year || blurb || icon || children) && (
        <div className="relative z-20 flex flex-1 flex-col justify-end px-6 pb-8 sm:px-10 sm:pb-10 lg:px-[34px] lg:pb-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0 flex-1">
              {year && (
                <p className="text-[22px] sm:text-[28px] lg:text-[34px] font-bold leading-tight tracking-[-1px] text-paper">
                  {year}
                </p>
              )}
              {displayTitle && (
                <h2 className="mt-2 sm:mt-3 flex items-start text-[38px] sm:text-[52px] md:text-[62px] lg:text-[72px] xl:text-[78px] font-bold leading-[0.95] tracking-[-2px] lg:tracking-[-3px] text-paper whitespace-nowrap">
                  <span className="block">{displayTitle}</span>
                  <span className="block text-accent">*</span>
                </h2>
              )}
            </div>

            {(blurb || icon) && (
              <div className="flex flex-col items-start gap-3 sm:gap-4 lg:max-w-[320px] shrink-0">
                {icon && <div className="text-paper">{icon}</div>}
                {blurb && (
                  <p className="text-[16px] sm:text-[18px] lg:text-[19px] font-semibold leading-6 tracking-[-0.1px] text-paper/90">
                    {blurb}
                  </p>
                )}
              </div>
            )}
          </div>
          {children}
        </div>
      )}
    </motion.section>
  );
}
