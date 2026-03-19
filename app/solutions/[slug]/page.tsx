import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SectionHeading } from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { getSolutionBySlug, getSolutions } from "@/lib/data";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getSolutions().map((item) => ({
    slug: item.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return buildMetadata({
      title: "Solution Not Found",
      description: "The requested solution page could not be found.",
      path: `/solutions/${slug}/`
    });
  }

  return buildMetadata({
    title: solution.title,
    description: solution.metaDescription,
    path: `/solutions/${solution.slug}/`
  });
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return (
    <>
      <section className="border-b-[3px] border-ink bg-acid">
        <div className="grid-shell grid gap-8 py-14 md:grid-cols-[1.2fr_0.8fr] md:py-20">
          <div>
            <span className="kicker bg-white">{solution.eyebrow}</span>
            <h1 className="display-title mt-5 text-[3rem] sm:text-[4.5rem] lg:text-[5.5rem]">
              {solution.heroTitle}
            </h1>
            <p className="editorial-copy mt-5 max-w-3xl">{solution.heroDescription}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/apply/" className="brutal-btn bg-ink text-white">
                Apply for a funding reality check
              </Link>
              <Link href="/funding-options/" className="brutal-btn bg-white text-ink">
                Explore funding options
              </Link>
            </div>
          </div>

          <aside className="brutal-card h-fit bg-white p-6">
            <p className="text-sm font-black uppercase tracking-[0.12em]">Reality check</p>
            <ul className="mt-4 space-y-3 text-sm font-bold leading-6">
              {solution.realityChecks.map((point) => (
                <li key={point} className="brutal-card-sm bg-paper p-3">
                  {point}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section-space">
        <div className="grid-shell grid gap-8 lg:grid-cols-[0.68fr_0.32fr]">
          <article className="space-y-6">
            <div className="brutal-card bg-white p-6 md:p-8">
              <SectionHeading
                eyebrow={solution.keyword}
                title={solution.title}
                description={solution.intro}
              />
            </div>

            {solution.sections.map((section) => (
              <section key={section.heading} className="brutal-card bg-white p-6 md:p-8">
                <h2 className="text-2xl font-black uppercase">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="editorial-copy">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </article>

          <aside className="space-y-5">
            <div className="brutal-card bg-white p-5">
              <p className="text-sm font-black uppercase tracking-[0.12em]">Related routes</p>
              <ul className="mt-4 space-y-3">
                {solution.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-bold underline decoration-[3px]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="brutal-card bg-cyan p-5">
              <p className="text-sm font-black uppercase tracking-[0.12em]">How to use this page</p>
              <ul className="mt-4 space-y-3 text-sm font-bold leading-6">
                <li className="brutal-card-sm bg-white p-3">
                  Use this page to pressure-test fit before chasing capital.
                </li>
                <li className="brutal-card-sm bg-white p-3">
                  Move from problem-specific reading into broader funding options.
                </li>
                <li className="brutal-card-sm bg-white p-3">
                  Use the apply page once you can explain stage, use of funds, and constraints clearly.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-space bg-white border-y-[3px] border-ink">
        <div className="grid-shell">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            description="These answers are written for early-stage founders who need realism, not approval fantasy."
          />
          <FAQAccordion items={solution.faq} />
        </div>
      </section>

      <CTASection
        title={solution.cta.title}
        copy={solution.cta.copy}
        primaryLabel={solution.cta.primaryLabel}
        primaryHref={solution.cta.primaryHref}
        secondaryLabel={solution.cta.secondaryLabel}
        secondaryHref={solution.cta.secondaryHref}
      />
    </>
  );
}
