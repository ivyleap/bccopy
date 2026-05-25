import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { services, getService } from "@/lib/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.name} — BCパートナーズ株式会社`,
    description: s.short,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const index = services.findIndex((s) => s.slug === slug);
  const next = services[(index + 1) % services.length];

  return (
    <>
      <PageHero
        eyebrow={`— ${service.no} / ${service.en}`}
        title={service.name}
        titleEn={service.lead}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      <section className="py-20 md:py-28 border-b border-line">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4">
            <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/55">Overview</p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 md:col-start-6 space-y-6 text-base md:text-lg leading-[2.1] text-foreground/85">
            {service.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <Reveal>
            <p className="text-[11px] tracking-[0.35em] uppercase text-background/60 mb-12">Features</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {service.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div>
                  <p className="font-serif text-3xl md:text-4xl leading-tight mb-6">{f.title}</p>
                  <p className="text-sm md:text-base leading-[2] text-background/80">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-8 border-y border-line py-12 md:py-16">
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/55 mb-3">Next Service</p>
            <Link
              href={`/services/${next.slug}`}
              className="font-serif text-3xl md:text-5xl tracking-tight hover:text-foreground/70 transition-colors flex items-center gap-4"
            >
              {next.name} <span className="text-foreground/40">→</span>
            </Link>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-[12px] tracking-[0.25em] uppercase hover:bg-foreground/85"
          >
            この事業について相談する →
          </Link>
        </div>
      </section>
    </>
  );
}
