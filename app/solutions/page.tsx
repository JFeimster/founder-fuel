import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { getSolutions } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Startup Funding Solutions",
  description:
    "Browse Founder Fuel solution pages for startup funding by industry, founder type, and funding challenge.",
  path: "/solutions/"
});

export default function SolutionsHubPage() {
  const solutions = getSolutions();

  return (
    <>
      <section className="border-b-[3px] border-ink bg-acid">
        <div className="grid-shell py-14 md:py-20">
          <span className="kicker bg-white">Solutions hub</span>
          <h1 className="display-title mt-5 text-[3rem] sm:text-[4.5rem] lg:text-[5.5rem]">
            Startup funding pages built around real founder situations.
          </h1>
          <p className="editorial-copy mt-5 max-w-3xl">
            This hub organizes Founder Fuel solution pages by founder type, industry, and funding
            problem. The goal is simple: help founders find the most realistic capital path without
            falling for generic lender theater.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/apply/" className="brutal-btn bg-ink text-white">
              Apply for a funding reality check
            </Link>
            <Link href="/startup-funding/" className="brutal-btn bg-white text-ink">
              Read the flagship guide
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="grid-shell">
          <SectionHeading
            eyebrow="Browse by fit"
            title="Find the page that matches your stage, business model, or funding problem."
            description="These pages are designed to capture specific search intent while feeding founders back into the main funding guide, funding options, and application path."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution) => (
              <article key={solution.slug} className="brutal-card bg-white p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="kicker bg-paper">{solution.eyebrow}</span>
                  <span className="kicker bg-cyan">{solution.keyword}</span>
                </div>

                <h2 className="mt-4 text-2xl font-black uppercase leading-tight">
                  {solution.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-ink/80">
                  {solution.metaDescription}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`/solutions/${solution.slug}/`}
                    className="brutal-btn bg-ink text-white"
                  >
                    Read page
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white border-y-[3px] border-ink">
        <div className="grid-shell">
          <SectionHeading
            eyebrow="How this hub works"
            title="Use specific pages to get clear, then move into the main funding system."
            description="These solution pages are not meant to replace the flagship startup funding guide. They are meant to meet founders where they are and route them into stronger decisions."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <article className="brutal-card bg-lilac p-6">
              <h3 className="text-2xl font-black uppercase">1. Start specific</h3>
              <p className="mt-3 text-sm font-bold leading-6">
                Pick the page that matches your industry, founder profile, or funding pain point.
              </p>
            </article>

            <article className="brutal-card bg-mint p-6">
              <h3 className="text-2xl font-black uppercase">2. Expand context</h3>
              <p className="mt-3 text-sm font-bold leading-6">
                Move into the broader funding options and flagship guide once you understand the
                basics of your specific situation.
              </p>
            </article>

            <article className="brutal-card bg-blush p-6">
              <h3 className="text-2xl font-black uppercase">3. Take action</h3>
              <p className="mt-3 text-sm font-bold leading-6">
                Use the apply page when you want help narrowing the next move by stage, pressure,
                and actual fit.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
