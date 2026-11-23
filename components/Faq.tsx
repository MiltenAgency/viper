"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { faq } from "@/lib/content/shared";
import { Separator, Eyebrow } from "./Section";
import { Plus } from "./Icons";

/**
 * The export ships this accordion collapsed and its answers never reach the
 * static HTML; they were read off the running original. Rows carry a bottom
 * hairline only, which is what sets the 71px closed pitch.
 */
export default function Faq() {
  const [open, setOpen] = useState<string | null>(null);
  const reduced = useReducedMotion();

  return (
    <section className="w-full px-4 pb-[140px] md:px-10">
      <Separator />
      <div className="mt-[50px] grid grid-cols-1 gap-8 lg:grid-cols-[462px_minmax(0,1fr)] lg:gap-0">
        <Eyebrow>FAQ</Eyebrow>
        <ul className="w-full">
          {faq.map((item) => {
            const isOpen = open === item.index;
            return (
              <li key={item.index} className="border-b border-mist/65 pt-[22px] first:pt-0">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : item.index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start gap-4 pb-[22px] text-left"
                >
                  <span className="t-lead w-[60px] shrink-0 text-graphite lg:w-[286px]">{item.index}</span>
                  <span className="t-lead flex-1 text-graphite">{item.question}</span>
                  <Plus
                    size={18}
                    className={`mt-1 shrink-0 text-graphite transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduced ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduced ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="t-body max-w-[600px] pb-[22px] pl-[76px] text-ash lg:pl-[302px]">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
