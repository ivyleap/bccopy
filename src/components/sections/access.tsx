import { Reveal } from "@/components/reveal";

export function Access() {
  return (
    <section id="access" className="py-28 md:py-40 border-t border-line">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 grid md:grid-cols-12 gap-12">
        <Reveal className="md:col-span-5">
          <p className="text-[11px] tracking-[0.4em] uppercase text-foreground/60 mb-6">— Access</p>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">大阪・本社</h2>
          <p className="mt-6 text-base md:text-lg leading-[2.1] text-foreground/80">
            堺筋本町駅すぐ、L タワー 7 階。
            <br />
            ご来訪の際は事前にご一報ください。
          </p>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
          <dl className="divide-y divide-line border-y border-line">
            <div className="grid grid-cols-3 gap-6 py-5">
              <dt className="text-[11px] tracking-[0.3em] uppercase text-foreground/55">Company</dt>
              <dd className="col-span-2 text-base">BC パートナーズ株式会社</dd>
            </div>
            <div className="grid grid-cols-3 gap-6 py-5">
              <dt className="text-[11px] tracking-[0.3em] uppercase text-foreground/55">Founded</dt>
              <dd className="col-span-2 text-base">2012 年</dd>
            </div>
            <div className="grid grid-cols-3 gap-6 py-5">
              <dt className="text-[11px] tracking-[0.3em] uppercase text-foreground/55">Address</dt>
              <dd className="col-span-2 text-base leading-relaxed">
                〒541-0048
                <br />
                大阪府大阪市中央区瓦町 1-7-7
                <br />
                大阪堺筋 L タワー 7 階
              </dd>
            </div>
            <div className="grid grid-cols-3 gap-6 py-5">
              <dt className="text-[11px] tracking-[0.3em] uppercase text-foreground/55">Tel</dt>
              <dd className="col-span-2 text-base font-serif tabular-nums">06-6221-0150</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
