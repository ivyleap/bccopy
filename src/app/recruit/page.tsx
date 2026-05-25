import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "採用情報 — BCパートナーズ株式会社",
  description: "BCパートナーズの採用情報。未経験から始められるインサイドセールス・コンサルタント職を募集中。",
};

const values = [
  { title: "Authentic", body: "つくろわない。等身大で動き、等身大で伝える。" },
  { title: "Adaptive", body: "業界も役割も越境する。「自分はこれ」と決めつけない。" },
  { title: "Accountable", body: "結果に責任を持つ。プロセスに逃げない。" },
];

const jobs = [
  { role: "インサイドセールス（未経験歓迎）", type: "正社員", location: "大阪本社" },
  { role: "マーケティングコンサルタント", type: "正社員", location: "大阪本社" },
  { role: "ホスピタリティ業界コンサルタント", type: "正社員", location: "大阪本社" },
  { role: "ビジネスアライアンスマネージャー", type: "正社員", location: "大阪本社 / リモート併用" },
];

export default function RecruitPage() {
  return (
    <>
      <PageHero
        eyebrow="— Recruit"
        title="何色にだってなれる。"
        titleEn="Find your color, here."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Recruit" }]}
      />

      <section className="py-20 md:py-32 border-b border-line">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5">
            <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/55 mb-4">Message</p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">
              職歴は問わない。<br />
              <span className="italic font-light">これから何を始められるか、</span>
              <br />それが、すべて。
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-6 md:col-start-7 space-y-6 text-base md:text-lg leading-[2.1] text-foreground/85">
            <p>
              BC パートナーズには、新卒・第二新卒・異業種からの転職メンバーが多く在籍しています。
              共通しているのは「自分を変えたい」「もう一段成長したい」という意思だけです。
            </p>
            <p>
              入社後 3 か月の基礎研修、半年間のメンター制度、そして実商談に同席する OJT。
              未経験から一人前のセールス・コンサルタントへ育つための道筋が整っています。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 border-b border-line">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <Reveal>
            <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/55 mb-12">Values</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="border-t border-foreground pt-6">
                  <p className="font-serif italic text-3xl md:text-4xl mb-4">{v.title}</p>
                  <p className="text-base leading-[2] text-foreground/80">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <Reveal>
            <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/55 mb-4">Open Positions</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-12">募集職種</h2>
          </Reveal>
          <ul className="border-t border-line">
            {jobs.map((j, i) => (
              <Reveal key={j.role} delay={i * 0.05}>
                <li className="border-b border-line">
                  <Link
                    href="/contact"
                    className="grid md:grid-cols-12 gap-4 py-7 md:py-8 items-center hover:bg-foreground/[0.03] px-2 -mx-2 transition-colors"
                  >
                    <span className="md:col-span-7 font-serif text-2xl md:text-3xl tracking-tight">{j.role}</span>
                    <span className="md:col-span-2 text-sm text-foreground/70">{j.type}</span>
                    <span className="md:col-span-2 text-sm text-foreground/70">{j.location}</span>
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
