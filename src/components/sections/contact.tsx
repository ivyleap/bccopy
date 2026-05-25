import { Reveal } from "@/components/reveal";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-48 bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(246,243,237,0.08),_transparent_55%)]" />
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 text-center">
        <Reveal>
          <p className="vline text-[11px] tracking-[0.4em] uppercase text-background/60">— Contact</p>
          <h2 className="font-serif text-balance text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
            まずは、<span className="italic font-light">話を聞かせてください。</span>
          </h2>
          <p className="mt-10 text-base md:text-lg text-background/75 max-w-[640px] mx-auto leading-[2]">
            営業の話、組織の話、業界の話。BC パートナーズはどんな課題にもまず耳を傾けます。
            お気軽にお問い合わせください。
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@bc-p.jp"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-background text-foreground text-[13px] tracking-[0.25em] uppercase hover:bg-background/90 transition-colors"
            >
              Email で問い合わせ <span>→</span>
            </a>
            <a
              href="tel:0662210150"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-background text-[13px] tracking-[0.25em] uppercase hover:bg-background hover:text-foreground transition-colors"
            >
              06-6221-0150
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
