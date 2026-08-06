import Image from "next/image";
import Link from "next/link";
import { footer, footerLinks, site } from "@/lib/content/site";
import PillButton, { Roll } from "./Buttons";
import { ArrowRight, FramerMark } from "./Icons";
import BackToTop from "./BackToTop";

export default function Footer() {
  return (
    <footer className="w-full px-4 pb-4">
      <div className="rounded-[10px] bg-sand p-4">
        <div className="relative h-[410px] w-full overflow-hidden rounded-[5px]">
          <Image
            src={footer.image.src}
            alt={footer.image.alt}
            width={1651}
            height={492}
            className="absolute left-1/2 top-1/2 h-auto w-[120%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
          />
          <Image
            src={site.logo}
            alt="Logo"
            width={156}
            height={31}
            className="absolute left-1/2 top-1/2 h-[31px] w-[156px] -translate-x-1/2 -translate-y-1/2 object-contain"
          />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 px-[44px] lg:grid-cols-[626px_450px_minmax(0,1fr)] lg:gap-0">
          <div>
            <h3 className="t-h3 text-ink-40">{footer.heading}</h3>
            <a href={`mailto:${site.email}`} className="t-h3 block w-fit text-charcoal underline decoration-1 underline-offset-4">
              {site.email}
            </a>
            <p className="t-meta mt-[33px] max-w-[420px] text-ink-60">{footer.blurb}</p>
            <PillButton label={footer.cta.label} href={footer.cta.href} tone="mist" className="mt-[41px]" />
          </div>

          <ul className="flex flex-col">
            {footerLinks.map((link) => (
              <li key={link.href} className="border-b border-mist/65">
                <Link href={link.href} className="group flex items-center gap-[19px] pb-[10px] pr-4 pt-[11px]">
                  <span className="t-pill w-[25px] shrink-0 text-ink">{link.index}</span>
                  <span className="t-lead flex-1 text-ink">
                    <Roll label={link.label} lineHeight={26} />
                  </span>
                  <ArrowRight className="shrink-0 text-ink transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="lg:pt-[8px] lg:text-right">
            <span className="inline-flex items-center gap-2 rounded-[10px] bg-white px-4 py-[9px]">
              <FramerMark size={14} className="text-ink" />
              <span className="t-tag text-ink-80">{footer.badge}</span>
            </span>
          </div>
        </div>

        <div className="mt-[110px] flex flex-col items-start gap-8 px-[34px] lg:flex-row lg:items-end lg:justify-between">
          <Image
            src={site.wordmark}
            alt=""
            width={838}
            height={224}
            className="h-auto w-full max-w-[838px] object-contain"
          />
          {/* The export points this <video> at a remote asset it never localised. */}
          <video
            src={footer.video}
            loop
            muted
            playsInline
            preload="none"
            className="h-[260px] w-[452px] max-w-full rounded-[15px] object-cover"
          />
        </div>

        <div className="mt-[33px] flex items-center justify-between border-t border-mist/65 px-[44px] pb-[10px] pt-[22px]">
          <p className="t-lead text-graphite">{site.copyright}</p>
          <BackToTop label={footer.backToTop} />
        </div>
      </div>
    </footer>
  );
}
