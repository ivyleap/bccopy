import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "会社概要 — BCパートナーズ株式会社",
  description: "BCパートナーズ株式会社の会社概要・沿革・経営理念。",
};

const profile: [string, string][] = [
  ["商号", "BCパートナーズ株式会社"],
  ["設立", "2012 年"],
  ["所在地", "〒541-0048 大阪府大阪市中央区瓦町 1-7-7 大阪堺筋 L タワー 7 階"],
  ["電話", "06-6221-0150"],
  ["事業内容", "マーケティング BPO / インサイドセールス研修 / ABM 支援 / 宿泊・飲食コンサル / 人材派遣 / ビジネスアライアンス"],
  ["関連 SNS", "Instagram / TikTok"],
];

const history: [string, string][] = [
  ["2012", "大阪・本町にて BCパートナーズ株式会社 設立"],
  ["2015", "インサイドセールス事業を本格始動"],
  ["2018", "マーケティング BPO「キョリゼロ」サービス開始"],
  ["2020", "宿泊・飲食業特化コンサル「M コンサル事業部」開設"],
  ["2023", "ABM 支援事業を新設、ターゲットリスト製作サービスを展開"],
  ["2026", "コーポレートサイト全面リニューアル"],
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="— Company"
        title="会社概要"
        titleEn="About BC Partners"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Company" }]}
      />

      <section className="py-20 md:py-28 border-b border-line">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4">
            <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/55 mb-4">Message</p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">代表メッセージ</h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 md:col-start-6 space-y-6 text-base md:text-lg leading-[2.1] text-foreground/85">
            <p>
              私たちは、企業とお客様の間にある「距離」を埋めるために生まれた会社です。
              優れたサービスを持っているのに伝わらない。良い商品をつくっているのに届かない。
              そんな企業を、ひとつでも多く支えたい ── それが BC パートナーズの原点です。
            </p>
            <p>
              インサイドセールス、コンサルティング、研修、そしてアライアンス。
              一見ばらばらに見える事業群は、すべて<span className="font-serif italic">「橋を架ける」</span>という同じ思想から派生しています。
            </p>
            <p>
              これからも私たちは、お客様にとって最良の架け橋であり続けます。
            </p>
            <p className="font-serif text-xl md:text-2xl pt-4">代表取締役</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 border-b border-line">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4">
            <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/55 mb-4">Profile</p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">会社情報</h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
            <dl className="divide-y divide-line border-y border-line">
              {profile.map(([k, v]) => (
                <div key={k} className="grid grid-cols-3 gap-6 py-5">
                  <dt className="text-[11px] tracking-[0.3em] uppercase text-foreground/55">{k}</dt>
                  <dd className="col-span-2 text-base leading-relaxed">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4">
            <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/55 mb-4">History</p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">沿革</h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
            <ol className="space-y-0">
              {history.map(([y, t], i) => (
                <li key={y} className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 py-6 border-b border-line first:border-t">
                  <span className="font-serif text-2xl md:text-3xl text-foreground/70 tabular-nums">{y}</span>
                  <span className="text-base md:text-lg leading-relaxed">{t}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
    </>
  );
}
