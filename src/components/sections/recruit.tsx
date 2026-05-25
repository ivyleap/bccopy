import { Reveal } from "@/components/reveal";

export function Recruit() {
  return (
    <section id="recruit" className="relative py-32 md:py-48 border-t border-line overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_left,_rgba(184,165,116,0.18),_transparent_55%)]" />
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
        <Reveal className="md:col-span-7">
          <p className="text-[11px] tracking-[0.4em] uppercase text-foreground/60 mb-6">— Recruit</p>
          <h2 className="font-serif text-balance text-4xl md:text-6xl leading-[1.05] tracking-tight">
            未経験だから、<br />
            <span className="italic font-light">何色にだってなれる。</span>
          </h2>
          <p className="mt-10 text-base md:text-lg leading-[2.1] text-foreground/80 max-w-[640px]">
            BC パートナーズは、人を「色」にたとえます。
            まだ何者でもないあなたが、私たちの現場で自分の色を見つけていく。
            学歴も職歴も問いません。問うのは、今日から何を始められるか、ただ一つです。
          </p>
        </Reveal>
        <Reveal delay={0.15} className="md:col-span-4 md:col-start-9">
          <a
            href="#contact"
            className="group block border border-foreground p-8 md:p-10 hover:bg-foreground hover:text-background transition-colors"
          >
            <p className="text-[11px] tracking-[0.35em] uppercase mb-6">Open Positions</p>
            <p className="font-serif text-3xl md:text-4xl leading-tight">求人情報を見る</p>
            <p className="mt-8 text-[13px] tracking-[0.2em] uppercase flex items-center gap-3 group-hover:gap-5 transition-all">
              View All <span>→</span>
            </p>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
