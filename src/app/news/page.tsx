import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { news } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "お知らせ — BCパートナーズ株式会社",
  description: "BCパートナーズからのお知らせ・プレスリリース・サービス更新情報。",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="— News"
        title="最新情報"
        titleEn="News & Updates"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "News" }]}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <ul className="border-t border-line">
            {news.map((n, i) => (
              <Reveal key={n.slug} delay={i * 0.05}>
                <li className="border-b border-line">
                  <Link
                    href={`/news/${n.slug}`}
                    className="grid md:grid-cols-12 gap-4 py-7 md:py-8 items-baseline hover:bg-foreground/[0.03] px-2 -mx-2 transition-colors"
                  >
                    <span className="md:col-span-2 font-serif text-foreground/70 tabular-nums">{n.date}</span>
                    <span className="md:col-span-2 text-[11px] tracking-[0.3em] uppercase text-foreground/55">{n.category}</span>
                    <span className="md:col-span-7 text-base md:text-lg">{n.title}</span>
                    <span className="md:col-span-1 md:text-right text-foreground/50">→</span>
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
