import { Reveal } from "@/components/reveal";

export function Philosophy() {
  return (
    <section className="relative py-32 md:py-48 border-t border-line">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 grid md:grid-cols-12 gap-12">
        <Reveal className="md:col-span-4">
          <p className="text-[11px] tracking-[0.4em] uppercase text-foreground/60 mb-6">— Philosophy</p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight">
            橋を架ける、<br />という発想。
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="md:col-span-7 md:col-start-6">
          <div className="space-y-6 text-base md:text-[17px] leading-[2.1] text-foreground/85">
            <p>
              市場の変化はますます速く、お客様の期待は多様になっていく。
              企業はサービスを磨くことに専念したいのに、その間にある「届ける」「つなぐ」「育てる」工程に、いつしか時間を取られてしまう。
            </p>
            <p>
              BC パートナーズは、その溝に立つ会社です。
              インサイドセールス、マーケティング BPO、研修、そしてコンサルティング ──
              <span className="font-serif italic">「橋」</span>として機能するすべての方法を磨き続けています。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
