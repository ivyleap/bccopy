import { Reveal } from "@/components/reveal";

const numbers = [
  { value: "2012", label: "Founded", caption: "創業年" },
  { value: "06", label: "Service Lines", caption: "事業領域" },
  { value: "JP", label: "Headquarters", caption: "大阪・本社" },
];

export function Numbers() {
  return (
    <section id="about" className="py-28 md:py-40 border-t border-line">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <Reveal>
          <p className="text-[11px] tracking-[0.4em] uppercase text-foreground/60 mb-12 md:mb-16">— By the Numbers</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-line">
          {numbers.map((n, i) => (
            <Reveal key={n.label} delay={i * 0.1} className="md:px-12 first:md:pl-0 last:md:pr-0">
              <p className="font-serif text-[88px] md:text-[140px] leading-[0.9] tracking-[-0.04em]">{n.value}</p>
              <p className="mt-4 text-[11px] tracking-[0.35em] uppercase text-foreground/55">{n.label}</p>
              <p className="mt-1 text-sm text-foreground/70">{n.caption}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
