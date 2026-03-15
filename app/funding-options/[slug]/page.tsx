import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { SectionHeading } from "@/components/SectionHeading";
import { getFundingOptionBySlug, getFundingOptions } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getFundingOptions().map((item) => ({
    slug: item.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getFundingOptionBySlug(slug);

  if (!item) {
    return buildMetadata({
      title: "Funding Option Not Found",
      description: "The requested funding option could not be found.",
      path: `/funding-options/${slug}/`
    });
  }

  return buildMetadata({
    title: `${item.name} for Startups`,
    description: item.summary,
    path: `/funding-options/${item.slug}/`
  });
}

export default async function FundingOptionPage({ params }: Props) {
  const { slug } = await params;
  const item = getFundingOptionBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <section className="section-space border-b-[3px] border-ink bg-white">
        <div className="grid-shell">
          <span className="kicker bg-acid">{item.keyword}</span>
          <h1 className="display-title mt-4 text-[2.8rem] sm:text-[4rem]">{item.name}</h1>
          <p className="editorial-copy mt-5 max-w-3xl">{item.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/apply/" className="brutal-btn bg-ink text-white">
              Apply for a reality check
            </Link>
            <Link href="/funding-options/" className="brutal-btn bg-white">
              Back to all options
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="grid-shell grid gap-8 lg:grid-cols-[0.68fr_0.32fr]">
          <article className="space-y-6">
            <div className="brutal-card bg-white p-6">
              <SectionHeading
                eyebrow="Who it fits"
                title={item.headline}
                description={item.explainer}
              />
              <ul className="space-y-3 text-sm font-bold leading-6">
                {item.fitSignals.map((signal) => (
                  <li key={signal} className="brutal-card-sm bg-paper p-3">
                    {signal}
                  </li>
                ))}
              </ul>
            </div>

            <div className="brutal-card bg-cyan p-6">
              <h2 className="text-2xl font-black uppercase">What founders like</h2>
              <ul className="mt-4 space-y-3 text-sm font-bold leading-6">
                {item.advantages.map((point) => (
                  <li key={point} className="brutal-card-sm bg-white p-3">
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="brutal-card bg-blush p-6">
              <h2 className="text-2xl font-black uppercase">What founders underestimate</h2>
              <ul className="mt-4 space-y-3 text-sm font-bold leading-6">
                {item.risks.map((point) => (
                  <li key={point} className="brutal-card-sm bg-white p-3">
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="brutal-card bg-white p-6">
              <h2 className="text-2xl font-black uppercase">Qualification signals</h2>
              <ComparisonTable
                rows={[
                  {
                    option: "Readiness",
                    bestFor: item.stage,
                    speed: item.speed,
                    tradeoff: item.tradeoff,
                    bankability: item.bankabilityNote
                  }
                ]}
              />
            </div>
          </article>

          <aside className="space-y-5">
            <div className="brutal-card bg-acid p-5">
              <p className="text-sm font-black uppercase tracking-[0.12em]">Use this path when</p>
              <ul className="mt-4 space-y-3 text-sm font-bold leading-6">
                {item.useCases.map((point) => (
                  <li key={point} className="brutal-card-sm bg-white p-3">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="brutal-card bg-white p-5">
              <p className="text-sm font-black uppercase tracking-[0.12em]">Internal links</p>
              <ul className="mt-4 space-y-2">
                {item.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-bold underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTASection
        title="Pressure-test this funding option before you chase it."
        copy="A funding tool only works if it matches your stage, economics, and tolerance for repayment risk."
        primaryLabel="Apply now"
        primaryHref="/apply/"
        secondaryLabel="Read more insights"
        secondaryHref="/insights/"
      />
    </>
  );
}