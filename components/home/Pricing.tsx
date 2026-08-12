"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { pricing } from "@/lib/content/home";
import { Separator, Eyebrow } from "@/components/Section";
import CenterIntro from "@/components/CenterIntro";
import PillButton from "@/components/Buttons";
import Reveal from "@/components/motions/Reveal";
import { Check, Cross, Dollar } from "@/components/Icons";

/**
 * The export renders this toggle but never rewires the cards — only the annual
 * variant survives hydration, so the switch is inert there. Both price sets
 * exist in the export's HTML, so the toggle is made to work here.
 */
export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="relative z-10 w-full bg-white px-4 pb-[120px] pt-[100px] md:px-10">
      <Separator />
      <div className="mt-[34px] grid grid-cols-1 items-center gap-6 sm:grid-cols-3">
        <Eyebrow>{pricing.section.label}</Eyebrow>
        <div className="flex items-center justify-center gap-3">
          <span className="t-lead text-graphite">{pricing.toggle.monthly}</span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            aria-label={pricing.toggle.annual}
            onClick={() => setAnnual((v) => !v)}
            className="flex h-[30px] w-[58px] shrink-0 items-center rounded-full bg-accent p-[2px]"
          >
            <span
              className={clsx(
                "block h-[26px] w-[26px] rounded-full bg-white transition-transform duration-300",
                annual ? "translate-x-[28px]" : "translate-x-0",
              )}
            />
          </button>
          <span className="t-lead text-graphite">{pricing.toggle.annual}</span>
        </div>
        <p className="t-lead hidden text-right text-graphite sm:block">{pricing.section.year}</p>
      </div>

      <div className="mt-[101px]">
        <CenterIntro
          icon={<Dollar size={20} />}
          badge={pricing.badge}
          heading={pricing.heading}
          blurb={pricing.blurb}
          cta={pricing.cta}
        />
      </div>

      <div className="mt-[6px] grid grid-cols-1 gap-5 lg:grid-cols-3">
        {pricing.plans.map((plan, planIndex) => {
          const dark = planIndex === 2;
          return (
            <Reveal
              key={plan.name}
              className={clsx(
                "relative flex flex-col overflow-hidden rounded-[20px] p-[14px]",
                dark ? "bg-ink" : "bg-sand",
              )}
            >
              {"image" in plan && plan.image && (
                <Image
                  src={plan.image.src}
                  alt={plan.image.alt}
                  fill
                  sizes="440px"
                  className="object-cover opacity-30"
                />
              )}
              <div className="relative z-10 flex flex-1 flex-col">
                <div className="flex items-start justify-between px-[10px] pt-[8px]">
                  <p className="flex items-start gap-[6px]">
                    <span className={clsx("t-h6", dark ? "text-paper" : "text-graphite")}>
                      {annual ? plan.annual : plan.monthly}
                    </span>
                    <span className={clsx("t-fine mt-[60px]", dark ? "text-paper-80" : "text-ink-60")}>
                      {annual ? "/year" : "/month"}
                    </span>
                  </p>
                  <span className="flex items-center gap-[6px]" aria-hidden>
                    {Array.from({ length: 3 }).map((_, i) => (
                      <span
                        key={i}
                        className={clsx(
                          "block h-2 w-2 rounded-full",
                          i < plan.dots ? "bg-accent" : dark ? "bg-paper/25" : "bg-[#d9d9d9]",
                        )}
                      />
                    ))}
                  </span>
                </div>

                <div className="mt-[85px] flex items-center gap-4 px-[10px]">
                  <span className="block h-[13px] w-[13px] shrink-0 rounded-[3px] bg-accent" />
                  <h3 className={clsx("t-h5", dark ? "text-paper" : "text-graphite")}>{plan.name}</h3>
                  {"tag" in plan && plan.tag && (
                    <span className="t-pill rounded-full bg-mist px-[10px] py-1 text-ink">{plan.tag}</span>
                  )}
                </div>

                <p
                  className={clsx(
                    "t-body mt-[15px] border-t px-[10px] pt-[26px]",
                    dark ? "border-paper/15 text-paper-60" : "border-mist/65 text-stone",
                  )}
                >
                  {plan.body}
                </p>

                <PillButton
                  label={plan.cta}
                  href={pricing.cta.href}
                  tone={dark ? "dark" : "mist"}
                  className="ml-[10px] mt-[50px] self-start"
                />

                <div
                  className={clsx(
                    "mt-[28px] rounded-[10px] px-[26px] pb-8 pt-[26px]",
                    dark ? "bg-ink-80" : "bg-mist",
                  )}
                >
                  <p className={clsx("t-body", dark ? "text-paper" : "text-ink")}>{pricing.includedLabel}</p>
                  <ul className="mt-[21px] flex flex-col gap-[13px]">
                    {pricing.featureLabels.map((label, i) => {
                      const on = plan.included[i];
                      return (
                        <li key={label} className="flex items-center gap-[20px]">
                          <span
                            className={clsx(
                              "grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full",
                              on ? "bg-accent-10 text-accent" : "bg-accent-10 text-accent",
                            )}
                          >
                            {on ? <Check size={13} /> : <Cross size={13} />}
                          </span>
                          <span className={clsx("t-meta", dark ? "text-paper-60" : "text-ink-80")}>{label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
