const linkGroups = [
  {
    title: "Services",
    items: ["キョリゼロ", "B-One training", "ABM 支援", "M コンサル", "人材派遣", "アライアンス"],
  },
  {
    title: "Company",
    items: ["会社概要", "企業理念", "採用情報", "お知らせ", "アクセス"],
  },
  {
    title: "Policy",
    items: ["プライバシーポリシー", "セキュリティポリシー", "サイトマップ"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-background">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="font-serif text-3xl tracking-tight">BC Partners</p>
          <p className="mt-4 text-sm text-foreground/65 leading-relaxed">
            BCパートナーズ株式会社
            <br />
            Bridge to BUSINESS — Osaka, since 2012
          </p>
          <div className="mt-6 flex gap-4 text-[12px] tracking-[0.25em] uppercase text-foreground/65">
            <a href="#" className="hover:text-foreground">Instagram</a>
            <span className="text-foreground/30">/</span>
            <a href="#" className="hover:text-foreground">TikTok</a>
          </div>
        </div>
        {linkGroups.map((g) => (
          <div key={g.title} className="md:col-span-2">
            <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/55 mb-5">{g.title}</p>
            <ul className="space-y-3">
              {g.items.map((i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-3 text-[11px] tracking-[0.2em] uppercase text-foreground/55">
          <p>© {new Date().getFullYear()} BC Partners Co., Ltd.</p>
          <p>Designed & built as a renewal proposal</p>
        </div>
      </div>
    </footer>
  );
}
