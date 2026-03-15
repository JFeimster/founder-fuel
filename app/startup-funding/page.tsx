import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LeadMagnetCard } from "@/components/LeadMagnetCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getFAQs, getFundingOptions } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Startup Funding Guide for the First 24 Months",
  description:
    "A stage-based guide to startup business funding, including no-revenue options, credit stacking, microloans, grants, business credit, and revenue-based financing.",
  path: "/startup-funding/"
});

export default function StartupFundingPage() {
  const options = getFundingOptions();
  const faqs = getFAQs();

  return (
    <>
      <section className="section-space border-b-[3px] border-ink bg-white">
        <div className="grid-shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="kicker bg-acid">Flagship pillar</span>
            <h1 className="display-title mt-4 text-[2.8rem] sm:text-[4rem]">
              Startup business funding without the investor fantasy.
            </h1>
            <p className="editorial-copy mt-5 max-w-3xl">
              This is the core Founder Fuel guide for founders asking the real question: what kind
              of startup funding is realistic when I am early, thin on history, and not obviously
              bankable yet?
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/funding-options/" className="brutal-btn bg-ink text-white">
                Browse funding options
              </Link>
              <Link href="/apply/" className="brutal-btn bg-white">
                Apply for a reality check
              </Link>
            </div>
          </div>
          <LeadMagnetCard />
        </div>
      </section>

      <section className="section-space">
        <div className="grid-shell grid gap-10 lg:grid-cols-[0.72fr_0.28fr]">
          <article className="prose-tight max-w-none">
            <SectionHeading
              eyebrow="What this page does"
              title="Explain the capital that is realistic before traditional financing becomes realistic."
            />

            <div className="brutal-card bg-white p-6 md:p-8">
              <h2 className="text-2xl font-black uppercase">The founder fuel thesis</h2>
              <p className="mt-4 editorial-copy">
                Most early-stage founders do not have a funding problem first. They have a profile
                mismatch. The business may be too young, too thin, too volatile, or too incomplete
                for traditional lenders. The answer is rarely “just apply harder.” The answer is
                sequencing.
              </p>
              <p className="editorial-copy">
                That means matching the funding tool to your stage, understanding the tradeoffs,
                and using today’s capital decision to improve tomorrow’s qualification.
              </p>
            </div>

            <div className="brutal-card mt-6 bg-cyan p-6 md:p-8">
              <h2 className="text-2xl font-black uppercase">What startup funding can mean</h2>
              <ul className="mt-4 space-y-3 text-sm font-bold leading-6">
                <li>Personal-credit-led runway creation</li>
                <li>Revenue-based funding for traction-heavy businesses</li>
                <li>Microloans and community-backed debt</li>
                <li>Grant and non-dilutive capital programs</li>
                <li>Business credit building and issuer sequencing</li>
                <li>Crowdfunding when story, audience, and offer align</li>
              </ul>
            </div>

            <div className="brutal-card mt-6 bg-white p-6 md:p-8">
              <h2 className="text-2xl font-black uppercase">Funding by stage</h2>
              <div className="mt-4 grid gap-4">
                <div className="brutal-card-sm bg-paper p-4">
                  <p className="font-black uppercase">0–3 months / idea to setup</p>
                  <p className="mt-2 text-sm leading-6">
                    Focus on entity setup, bank account hygiene, bookkeeping basics, audience proof,
                    grant discovery, crowdfunding viability, and careful personal-capital planning.
                  </p>
                </div>
                <div className="brutal-card-sm bg-paper p-4">
                  <p className="font-black uppercase">3–12 months / early traction</p>
                  <p className="mt-2 text-sm leading-6">
                    Small revenue can unlock selective cards, microloans, or secured paths. The
                    quality of documentation matters more than founder optimism.
                  </p>
                </div>
                <div className="brutal-card-sm bg-paper p-4">
                  <p className="font-black uppercase">12–24 months / operator proof</p>
                  <p className="mt-2 text-sm leading-6">
                    At this stage, lenders and non-bank products care about cash flow consistency,
                    deposit behavior, margins, repayment capacity, and business maturity.
                  </p>
                </div>
              </div>
            </div>

            <div className="brutal-card mt-6 bg-blush p-6 md:p-8">
              <h2 className="text-2xl font-black uppercase">What not to do</h2>
              <ul className="mt-4 space-y-3 text-sm font-bold leading-6">
                <li>Do not confuse a large approval with a healthy funding decision.</li>
                <li>Do not chase expensive capital to solve a margin problem.</li>
                <li>Do not apply blind before cleaning up setup, cash movement, and narrative.</li>
                <li>Do not trust “guaranteed funding” language aimed at desperate founders.</li>
              </ul>
            </div>
          </article>

          <aside className="space-y-5">
            <div className="brutal-card bg-acid p-5">
              <p className="text-sm font-black uppercase tracking-[0.12em]">Jump to options</p>
              <ul className="mt-4 space-y-2">
                {options.map((option) => (
                  <li key={option.slug}>
                    <Link
                      href={`/funding-options/${option.slug}/`}
                      className="font-bold underline decoration-[3px]"
                    >
                      {option.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="brutal-card bg-white p-5">
              <p className="text-sm font-black uppercase tracking-[0.12em]">Best next steps</p>
              <ul className="mt-4 space-y-3 text-sm font-bold leading-6">
                <li>Read the option pages that match your stage.</li>
                <li>Use Insights to understand timelines and traps.</li>
                <li>Apply once you can explain your use of funds clearly.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-space bg-white border-y-[3px] border-ink">
        <div className="grid-shell">
          <SectionHeading
            eyebrow="FAQ"
            title="Common startup funding questions"
            description="These are the questions the site is designed to answer across the pillar and spoke system."
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        title="Turn theory into a stage-based plan."
        copy="If you know the business needs capital but you do not know which path is realistic yet, use the apply page to start with a more honest filter."
        primaryLabel="Apply now"
        primaryHref="/apply/"
        secondaryLabel="See all options"
        secondaryHref="/funding-options/"
      />
    </>
  );
}