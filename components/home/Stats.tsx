import { stats } from "@/lib/content/home";
import { Eyebrow, Separator } from "@/components/Section";
import Counter from "@/components/Counter";
import Reveal from "@/components/motions/Reveal";

export default function Stats() {
  return (
    <section className="relative z-10 w-full bg-white px-4 pb-[160px] md:px-10">
      <Separator />
      <div className="mt-[50px] grid grid-cols-1 gap-8 lg:grid-cols-[381px_minmax(0,979px)] lg:gap-0">
        <Eyebrow className="lg:pl-[25px]">{stats.label}</Eyebrow>
        <Reveal>
          <h2 className="t-h3 text-charcoal">{stats.heading}</h2>
        </Reveal>
      </div>

      <div className="mt-[110px] grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-3 lg:gap-x-16 xl:gap-x-20">
        {stats.items.map((item) => (
          <Reveal key={item.title}>
            <Counter to={item.value} suffix={item.suffix} />
            <div className="mt-4 border-t border-mist/65 pt-[26px]">
              <p className="t-h6-semi text-charcoal">{item.title}</p>
              <p className="t-lead mt-[5px] text-ash">{item.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
