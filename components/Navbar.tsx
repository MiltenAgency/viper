"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { navCta, navLinks, site } from "@/lib/content/site";
import PillButton, { Roll } from "./Buttons";
import { Plus } from "./Icons";

/**
 * Sits in the flow at the top of every page hero and scrolls away with it,
 * exactly as the export does — nothing here is fixed or sticky.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 flex w-full items-center justify-between px-[34px] pt-[34px] md:px-[34px]">
      <Link href="/" className="block shrink-0" aria-label={site.name}>
        <Image src={site.logo} alt="Logo" width={156} height={31} className="h-[31px] w-[156px] object-contain" priority />
      </Link>

      <nav className="ml-auto hidden items-center gap-[50px] lg:flex" aria-label="Primary">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="group flex items-start gap-[2px] text-paper">
            <span className="t-card-title">
              <Roll label={link.label} lineHeight={22} />
            </span>
            <span className="t-pill mt-[1px] text-[10px] leading-[12px]">{link.index}</span>
          </Link>
        ))}
      </nav>

      <div className="ml-auto flex items-center gap-4 lg:ml-[59px]">
        <PillButton label={navCta.label} href={navCta.href} tone="light" className="hidden bg-paper lg:inline-flex" />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
          className="text-paper lg:hidden"
        >
          <Plus size={28} className={clsx("transition-transform duration-300", open && "rotate-45")} />
        </button>
      </div>

      {open && (
        <div className="absolute left-[34px] right-[34px] top-[80px] rounded-[10px] bg-ink p-6 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)} className="t-card-title flex gap-1 text-paper">
                  {link.label}
                  <span className="t-pill text-[10px] leading-[12px]">{link.index}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link href={navCta.href} onClick={() => setOpen(false)} className="t-card-title text-accent">
                {navCta.label}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
