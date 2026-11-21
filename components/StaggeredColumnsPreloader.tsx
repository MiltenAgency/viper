"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface StaggeredColumnsPreloaderProps {
  columnsCount?: number;
  onComplete?: () => void;
  duration?: number;
  className?: string;
  color?: "accent" | "ink";
}

export function StaggeredColumnsPreloader({
  columnsCount = 5,
  onComplete,
  duration = 1200,
  className = "",
  color = "accent",
}: StaggeredColumnsPreloaderProps) {
  const reduceMotion = useReducedMotion();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (reduceMotion) {
      setIsLoading(false);
      onComplete?.();
      return;
    }

    // Lock scroll during preloader
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
      if (onComplete) onComplete();
    }, duration);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [duration, onComplete, reduceMotion]);

  if (reduceMotion) return null;

  const middleIndex = Math.floor(columnsCount / 2);

  const isAccent = color === "accent";
  const columnBg = isAccent ? "bg-accent" : "bg-ink";
  const borderCol = isAccent ? "border-black/10" : "border-white/10";
  const textColor = isAccent ? "text-ink" : "text-accent";

  return (
    <AnimatePresence>
      {isLoading && (
        <div
          aria-hidden="true"
          className={`fixed inset-0 z-[99999] pointer-events-auto overflow-hidden ${className}`}
        >
          {/* Staggered Vertical Columns in Theme Color */}
          <div className="flex h-full w-full">
            {Array.from({ length: columnsCount }).map((_, i) => {
              const isMiddle = i === middleIndex;
              // Outer columns exit first, center column with logo exits LAST
              const distanceFromMiddle = Math.abs(i - middleIndex);
              const delay = (middleIndex - distanceFromMiddle) * 0.12;

              return (
                <motion.div
                  key={i}
                  initial={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{
                    duration: 0.7,
                    delay,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className={`relative h-full flex-1 ${columnBg} border-r ${borderCol} last:border-r-0 flex items-center justify-center px-2 ${textColor}`}
                >
                  {/* SVG Logo attached to the center column */}
                  {isMiddle && (
                    <div className="flex items-center justify-center w-full">
                      <svg
                        viewBox="0 0 352 176"
                        className="w-16 sm:w-20 md:w-28 h-auto max-w-[60%] object-contain"
                        fill="currentColor"
                        aria-label="Logo"
                      >
                        <path d="M255.279 68.4734C256.455 35.3148 0 10.5114 0 10.5114C0 10.5114 337.249 -18.3146 345.804 19.5055C354.359 57.3255 357.526 91.8249 331.924 123.937C306.322 156.049 251.785 185.841 193.119 172.905C134.453 159.969 183.463 50.4852 183.463 50.4852C183.463 50.4852 200.965 120.483 217.863 114.943C234.761 109.403 254.104 101.632 255.279 68.4734Z" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
