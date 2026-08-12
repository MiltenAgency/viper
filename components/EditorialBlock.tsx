import Image from "next/image";
import clsx from "clsx";
import { Eyebrow } from "./Section";
import Reveal from "./motions/Reveal";

/** Label at the left margin, a 30px lead and an 18px body on the text column. */
export function TextBlock({
  label,
  lead,
  body,
  variant = "case",
}: {
  label: string;
  lead: string;
  body: string;
  variant?: "case" | "article";
}) {
  if (variant === "article") {
    return (
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-0">
        <Eyebrow className="lg:pl-[25px]">{label}</Eyebrow>
        <Reveal className="mt-[30px]">
          <p className="t-h6-semi text-graphite">{lead}</p>
          <p className="t-body mt-5 text-ash">{body}</p>
        </Reveal>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[381px_minmax(0,979px)] lg:gap-0">
      <Eyebrow className="lg:pl-[25px]">{label}</Eyebrow>
      <Reveal>
        <p className="t-h6-semi text-graphite">{lead}</p>
        <p className="t-body mt-5 text-ash">{body}</p>
      </Reveal>
    </div>
  );
}

/** Full-measure photograph, 1360 wide, with the export's 10px corner. */
export function WideImage({
  src,
  alt,
  height = 720,
  className,
}: {
  src: string;
  alt: string;
  height?: number;
  className?: string;
}) {
  return (
    <Reveal className={clsx("relative w-full overflow-hidden rounded-[10px]", className)} y={40}>
      <div className="relative w-full" style={{ aspectRatio: `1360 / ${height}` }}>
        <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 1360px" className="object-cover" />
      </div>
    </Reveal>
  );
}

export function ImagePair({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {images.map((img) => (
        <Reveal key={img.src} className="relative w-full overflow-hidden rounded-[10px]" y={40}>
          <div className="relative aspect-[670/600] w-full">
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 670px" className="object-cover" />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
