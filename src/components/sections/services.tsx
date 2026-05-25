import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/data/services";

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40 border-t border-line bg-foreground text-background">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16 md:mb-24">
          <Reveal className="md:col-span-5">
            <p className="text-[11px] tracking-[0.4em] uppercase text-background/60 mb-6">— Services</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              6 つの架け橋。
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-6 md:col-start-7 self-end">
            <p className="text-base md:text-lg leading-[2.1] text-background/80">
              インサイドセールスから業界特化コンサルまで。
              フェーズと業態に合わせ、最適な手法を組み合わせてご提供します。
            </p>
          </Reveal>
        </div>

        <ul className="border-t border-background/15">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <li className="group border-b border-background/15">
                <Link
                  href={`/services/${s.slug}`}
                  className="grid md:grid-cols-12 gap-6 py-8 md:py-10 items-center transition-colors hover:bg-background/5 px-2 md:px-4 -mx-2 md:-mx-4"
                >
                  <span className="md:col-span-1 font-serif text-2xl md:text-3xl text-background/50 group-hover:text-background transition-colors">
                    {s.no}
                  </span>
                  <div className="md:col-span-3">
                    <p className="font-serif text-2xl md:text-3xl tracking-tight">{s.name}</p>
                    <p className="text-[11px] tracking-[0.3em] uppercase text-background/50 mt-1">{s.en}</p>
                  </div>
                  <p className="md:col-span-7 text-sm md:text-base leading-[2] text-background/75">
                    {s.short}
                  </p>
                  <span className="md:col-span-1 md:text-right text-2xl text-background/50 group-hover:text-background group-hover:translate-x-1 transition-all">→</span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
