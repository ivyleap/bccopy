import { Reveal } from "@/components/reveal";

const news = [
  { date: "2026.04.18", category: "Press", title: "コーポレートサイトをリニューアルしました。" },
  { date: "2026.03.02", category: "Service", title: "B-One training に上級カリキュラムを追加。" },
  { date: "2026.01.20", category: "Recruit", title: "2027 年度新卒採用エントリーを開始しました。" },
];

export function News() {
  return (
    <section id="news" className="py-28 md:py-40 border-t border-line">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] uppercase text-foreground/60 mb-4">— News</p>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight">最新情報</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a href="#" className="text-[13px] tracking-[0.25em] uppercase border-b border-foreground pb-2 hover:opacity-70">
              All News →
            </a>
          </Reveal>
        </div>
        <ul className="border-t border-line">
          {news.map((n, i) => (
            <Reveal key={n.date} delay={i * 0.06}>
              <li className="border-b border-line">
                <a href="#" className="grid md:grid-cols-12 gap-4 py-6 md:py-7 items-baseline hover:bg-foreground/[0.03] px-2 -mx-2 transition-colors">
                  <span className="md:col-span-2 font-serif text-foreground/70 tabular-nums">{n.date}</span>
                  <span className="md:col-span-2 text-[11px] tracking-[0.3em] uppercase text-foreground/55">{n.category}</span>
                  <span className="md:col-span-7 text-base md:text-lg">{n.title}</span>
                  <span className="md:col-span-1 md:text-right text-foreground/50">→</span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
