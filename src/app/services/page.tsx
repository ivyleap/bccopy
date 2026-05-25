import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "事業内容 — BCパートナーズ株式会社",
  description:
    "インサイドセールス・マーケティング BPO・コンサルティング・人材派遣・ビジネスアライアンス。BCパートナーズが提供する 6 つの事業。",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="— Services"
        title="6 つの架け橋。"
        titleEn="Our Services"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <ul className="grid md:grid-cols-2 gap-6 md:gap-8">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <li>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group block border border-line bg-background hover:bg-foreground hover:text-background transition-colors p-8 md:p-10 h-full"
                  >
                    <div className="flex items-baseline gap-4 mb-6">
                      <span className="font-serif text-3xl md:text-4xl text-foreground/40 group-hover:text-background/70 transition-colors">
                        {s.no}
                      </span>
                      <span className="text-[11px] tracking-[0.3em] uppercase text-foreground/55 group-hover:text-background/60">
                        {s.en}
                      </span>
                    </div>
                    <p className="font-serif text-3xl md:text-4xl leading-tight tracking-tight">{s.name}</p>
                    <p className="mt-6 text-sm md:text-base leading-[2] text-foreground/75 group-hover:text-background/80">
                      {s.short}
                    </p>
                    <p className="mt-8 text-[12px] tracking-[0.25em] uppercase flex items-center gap-3 group-hover:gap-5 transition-all">
                      Learn More <span>→</span>
                    </p>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
