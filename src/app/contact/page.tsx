import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "お問い合わせ — BCパートナーズ株式会社",
  description: "BCパートナーズへのお問い合わせ。サービスのご相談・採用エントリーなど。",
};

const purposes = ["サービスについて", "採用について", "取材・メディア", "アライアンス相談", "その他"];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="— Contact"
        title="お問い合わせ"
        titleEn="Get in touch."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-20 md:py-28 grid md:grid-cols-12 gap-12 mx-auto max-w-[1320px] px-6 md:px-10">
        <Reveal className="md:col-span-4 space-y-10">
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/55 mb-3">Phone</p>
            <p className="font-serif text-3xl md:text-4xl tabular-nums">06-6221-0150</p>
            <p className="text-sm text-foreground/70 mt-2">平日 10:00 – 19:00</p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/55 mb-3">Email</p>
            <a href="mailto:info@bc-p.jp" className="font-serif text-2xl md:text-3xl underline underline-offset-4 hover:opacity-70">
              info@bc-p.jp
            </a>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/55 mb-3">Address</p>
            <p className="text-base leading-relaxed text-foreground/85">
              〒541-0048
              <br />
              大阪府大阪市中央区瓦町 1-7-7
              <br />
              大阪堺筋 L タワー 7 階
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
          <form className="space-y-8" action="mailto:info@bc-p.jp" method="post" encType="text/plain">
            <Field label="お名前" name="name" required />
            <Field label="会社名" name="company" />
            <Field label="メールアドレス" name="email" type="email" required />
            <Field label="電話番号" name="phone" type="tel" />
            <div>
              <label className="block text-[11px] tracking-[0.3em] uppercase text-foreground/55 mb-3">
                お問い合わせ内容 <span className="text-foreground">*</span>
              </label>
              <select
                name="purpose"
                required
                className="w-full bg-transparent border-b border-foreground/40 focus:border-foreground py-3 text-base focus:outline-none"
              >
                {purposes.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[11px] tracking-[0.3em] uppercase text-foreground/55 mb-3">
                ご相談内容 <span className="text-foreground">*</span>
              </label>
              <textarea
                name="message"
                rows={6}
                required
                className="w-full bg-transparent border-b border-foreground/40 focus:border-foreground py-3 text-base focus:outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background text-[13px] tracking-[0.25em] uppercase hover:bg-foreground/85 transition-colors"
            >
              送信する →
            </button>
            <p className="text-xs text-foreground/55 leading-relaxed">
              ※ 本フォームはデモのため mailto: 送信です。本番運用ではサーバーサイド処理に差し替えます。
            </p>
          </form>
        </Reveal>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.3em] uppercase text-foreground/55 mb-3">
        {label} {required && <span className="text-foreground">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-foreground/40 focus:border-foreground py-3 text-base focus:outline-none"
      />
    </div>
  );
}
