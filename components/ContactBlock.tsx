"use client";

import { useState } from "react";
import { contactBlock } from "@/lib/content/shared";
import PillButton from "./Buttons";
import Badge from "./Badge";
import { Plus, Send } from "./Icons";

type Props = {
  heading: string;
  blurb: string;
  /** Contact page swaps the bullet list for a postal address. */
  address?: { title: string; body: string };
  points?: readonly string[];
  cta?: { label: string; href: string } | null;
};

/**
 * Shared "Contact Me!" block. The export's form has no action — it is left
 * client-side here and simply resets, which is the closest honest behaviour.
 */
export default function ContactBlock({ heading, blurb, address, points, cta }: Props) {
  const [sent, setSent] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-10">
      <div className="flex flex-col items-start">
        <Badge icon={<Send size={20} />}>{contactBlock.badge}</Badge>
        <h2 className="t-h4 mt-[30px] text-charcoal">{heading}</h2>
        <p className="t-body mt-[30px] max-w-[420px] text-ash">{blurb}</p>

        {address && (
          <div className="mt-[57px] w-full max-w-[420px]">
            <p className="t-h6-semi text-ink">{address.title}</p>
            <p className="t-fine mt-[10px] text-ink-60">{address.body}</p>
          </div>
        )}

        {points && (
          <ul className="mt-[40px] w-full max-w-[420px] border-t border-mist/65">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-4 border-b border-mist/65 pb-[10px] pt-[11px]">
                <span className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-accent-10 text-accent">
                  <Plus size={13} />
                </span>
                <span className="t-meta text-graphite">{point}</span>
              </li>
            ))}
          </ul>
        )}

        {cta !== null && (
          <PillButton
            label={(cta ?? contactBlock.cta).label}
            href={(cta ?? contactBlock.cta).href}
            className="mt-[46px]"
          />
        )}
      </div>

      <form
        className="flex w-full flex-col lg:pt-[44px]"
        onSubmit={(e) => {
          e.preventDefault();
          e.currentTarget.reset();
          setSent(true);
        }}
      >
        <label className="sr-only" htmlFor="contact-name">
          {contactBlock.fields.name}
        </label>
        <input
          id="contact-name"
          name="name"
          required
          placeholder={contactBlock.fields.name}
          className="t-lead h-[68px] w-full rounded-[8px] bg-sand px-6 text-ink placeholder:text-ink-60 focus:outline-2 focus:outline-offset-2 focus:outline-accent"
        />
        <label className="sr-only" htmlFor="contact-email">
          {contactBlock.fields.email}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder={contactBlock.fields.email}
          className="t-lead mt-4 h-[68px] w-full rounded-[8px] bg-sand px-6 text-ink placeholder:text-ink-60 focus:outline-2 focus:outline-offset-2 focus:outline-accent"
        />
        <label className="sr-only" htmlFor="contact-message">
          {contactBlock.fields.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder={contactBlock.fields.message}
          className="t-lead mt-4 h-[150px] w-full resize-none rounded-[8px] bg-sand px-6 py-5 text-ink placeholder:text-ink-60 focus:outline-2 focus:outline-offset-2 focus:outline-accent"
        />
        <button
          type="submit"
          className="t-lead mt-4 h-[72px] w-full rounded-[10px] bg-charcoal text-paper transition-colors duration-300 hover:bg-ink"
        >
          {contactBlock.submit}
        </button>
        <p aria-live="polite" className="t-fine mt-3 text-ink-60">
          {sent ? "Thanks — your message has been noted." : ""}
        </p>
      </form>
    </div>
  );
}
