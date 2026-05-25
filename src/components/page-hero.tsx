import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  titleEn,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  titleEn?: string;
  breadcrumb: { label: string; href?: string }[];
}) {
  return (
    <section className="pt-32 md:pt-44 pb-16 md:pb-24 border-b border-line">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <nav className="text-[11px] tracking-[0.3em] uppercase text-foreground/55 mb-10 flex gap-3 items-center">
          {breadcrumb.map((b, i) => (
            <span key={i} className="flex items-center gap-3">
              {b.href ? (
                <Link href={b.href} className="hover:text-foreground transition-colors">
                  {b.label}
                </Link>
              ) : (
                <span className="text-foreground">{b.label}</span>
              )}
              {i < breadcrumb.length - 1 && <span className="text-foreground/30">/</span>}
            </span>
          ))}
        </nav>
        <p className="text-[11px] tracking-[0.4em] uppercase text-foreground/60 mb-6">{eyebrow}</p>
        <h1 className="font-serif text-balance text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-[-0.03em]">
          {title}
        </h1>
        {titleEn && (
          <p className="mt-4 font-serif italic text-foreground/55 text-lg md:text-xl">{titleEn}</p>
        )}
      </div>
    </section>
  );
}
