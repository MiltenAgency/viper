"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { spring, viewport } from "@/lib/motion";

type Props = {
  children: ReactNode;
  /** Vertical travel in px; the export uses small offsets everywhere. */
  y?: number;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

export default function Reveal({ children, y = 24, delay = 0, className, as = "div" }: Props) {
  const reduced = useReducedMotion();
  const Tag = motion[as];

  if (reduced) return <Tag className={className}>{children}</Tag>;

  return (
    <Tag
      className={className}
      initial={{ opacity: 0.001, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ ...spring, delay }}
    >
      {children}
    </Tag>
  );
}
