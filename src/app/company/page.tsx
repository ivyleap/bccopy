import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "会社概要 — BCパートナーズ株式会社",
  description: "BCパートナーズ株式会社の会社概要・沿革・経営理念。",
};

const profile: [string, string][] = [
  ["商号", "BCパートナーズ株式会社"],
  ["代表取締役", "五十嵐 伸行"],
  ["設立", "2012 年 10 月 15 日"],
  ["資本金", "15,000,000 円"],
  ["従業員数", "179 名（正社員 43 名 / スタッフ 136 名）"],
  ["所在地", "〒541-0048 大阪府大阪市中央区瓦町 1-7-7 大阪堺筋 L タワー 7 階"],
  ["電話", "06-6221-0150"],
  ["事業内容", "マーケティング BPO / インサイドセールス研修 / ABM 支援 / 宿泊・飲食コンサル / 人材派遣 / ビジネスアライアンス"],
  ["関連 SNS", "Instagram / TikTok"],
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
            <p className="font-serif text-2xl md:text-3xl leading-[1.7] text-foreground">
              BCパートナーズに関わる多くの人たちと誠実に向き合い、すべてのステークホルダーに対し
              <span className="italic">「普遍的な幸せ」</span>を追求して参ります。
            </p>
            <p>
              私たちは、企業とお客様の間にある「距離」を埋めるために生まれた会社です。
              優れたサービスを持っているのに伝わらない。良い商品をつくっているのに届かない。
              そんな企業を、ひとつでも多く支えたい ── それが BC パートナーズの原点です。
            </p>
            <p>
              インサイドセールス、コンサルティング、研修、そしてアライアンス。
              一見ばらばらに見える事業群は、すべて「橋を架ける」という同じ思想から派生しています。
            </p>
            <p className="font-serif text-xl md:text-2xl pt-4">代表取締役 五十嵐 伸行</p>
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

    </>
  );
}
