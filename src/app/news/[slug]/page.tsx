import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { news, getNews } from "@/lib/data/news";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const n = getNews(slug);
  if (!n) return {};
  return { title: `${n.title} — BCパートナーズ株式会社` };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) notFound();

  return (
    <>
      <PageHero
        eyebrow={`— ${item.date} / ${item.category}`}
        title={item.title}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: item.date },
        ]}
      />
      <article className="py-20 md:py-28 border-b border-line">
        <div className="mx-auto max-w-[760px] px-6 md:px-10">
          <Reveal>
            <div className="space-y-7 text-base md:text-lg leading-[2.1] text-foreground/85">
              {item.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </article>
      <div className="py-12">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <Link
            href="/news"
            className="text-[12px] tracking-[0.25em] uppercase border-b border-foreground pb-1 hover:opacity-70"
          >
            ← Back to News
          </Link>
        </div>
      </div>
    </>
  );
}
