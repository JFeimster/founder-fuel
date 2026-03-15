import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FundingCard } from "@/components/FundingCard";
import { Hero } from "@/components/Hero";
import { LeadMagnetCard } from "@/components/LeadMagnetCard";
import { QualificationCard } from "@/components/QualificationCard";
import { RealityCheck } from "@/components/RealityCheck";
import { SectionHeading } from "@/components/SectionHeading";
import { StoryCard } from "@/components/StoryCard";
import { getFAQs, getFeaturedPosts, getFundingOptions } from "@/lib/data";

export default function HomePage() {
  const options = getFundingOptions();
  const featuredPosts = getFeaturedPosts();
  const faqs = getFAQs().slice(0, 5);

  return (
    <>
      <Hero
        eyebrow="Founder insurgency fintech"
        title="Real startup funding for the first 24 months."
        subtitle="Banks reject most early-stage founders because the profile is still immature. Founder Fuel shows what is actually realistic, what each path costs, and when to stop chasing capital that does not fit your stage."
        primaryLabel="Apply for a funding reality check"
        primaryHref="/apply/"
        secondaryLabel="Read the startup funding guide"
        secondaryHref="/startup-funding/"
        realityTitle="Reality check"
        realityPoints={[
          "No revenue usually means no traditional bank love.",
          "Fast money often comes with hidden drag.",
          "Your funding path should match your stage, not your ego.",
          "Preparation today changes access later."
        ]}
      />

      <section className="section-space">
        <div className="grid-shell">
          <SectionHeading
            eyebrow="Why this site exists"
            title="Most founders are not bankable yet. That is a stage issue, not a personal failure."
            description="This site is built for founders in the messy middle between a real company idea and a profile that lenders, cards, or alternative capital providers can actually underwrite."
          />
          <RealityCheck
            items={[
              {
                title: "Pre-revenue",
                copy: "Your real options are usually personal leverage, grants, crowdfunding, or slow credit-building moves.",
                tone: "blush"
              },
              {
                title: "Light revenue",
                copy: "Small revenue opens doors, but only if margins, bank history, and cash movement make sense.",
                tone: "cyan"
              },
              {
                title: "Asset-backed",
                copy: "Secured paths can work sooner, but they come with collateral and discipline requirements.",
                tone: "mint"
              },
              {
                title: "Operator mindset",
                copy: "The best funding play is often sequencing capital instead of forcing one big approval.",
                tone: "lilac"
              }
            ]}
          />
        </div>
      </section>

      <section className="section-space bg-white border-y-[3px] border-ink">
        <div className="grid-shell">
          <SectionHeading
            eyebrow="Stage-based paths"
            title="Start with funding paths that fit your stage."
            description="Founder Fuel prioritizes practical sequencing over funding fantasy."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {options.slice(0, 3).map((item) => (
              <FundingCard key={item.slug} item={item} />
            ))}
          </div>
          <div className="mt-6">
            <Link href="/funding-options/" className="brutal-btn bg-ink text-white">
              Explore all funding options
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="grid-shell">
          <SectionHeading
            eyebrow="Comparison"
            title="What fits early-stage founders better than a cold bank application?"
            description="These are not promises. They are better starting points for founders who need realistic capital paths."
          />
          <ComparisonTable
            rows={[
              {
                option: "Credit stacking",
                bestFor: "Founders with strong personal credit and disciplined cash control",
                speed: "Fast when profile is qualified",
                tradeoff: "Personal exposure and balance management",
                bankability: "Can create runway and buying power, not instant business credit maturity"
              },
              {
                option: "Revenue-based financing",
                bestFor: "Businesses with consistent sales and clean receivables or processor data",
                speed: "Medium",
                tradeoff: "Repayment pressure tied to revenue flow",
                bankability: "Can bridge growth but does not replace core financial discipline"
              },
              {
                option: "Microloans + grants",
                bestFor: "Very early founders, community-based businesses, pilot-stage ventures",
                speed: "Slow to medium",
                tradeoff: "Smaller check sizes and more paperwork",
                bankability: "Builds history, documentation, and lender readiness"
              }
            ]}
          />
        </div>
      </section>

      <section className="section-space bg-ink text-white">
        <div className="grid-shell">
          <SectionHeading
            eyebrow="Qualification pathways"
            title="Different founders need different next moves."
            description="Use stage, traction, and credit reality to pick the right play."
          />
          <div className="grid gap-6 md:grid-cols-3">
            <QualificationCard
              title="No revenue yet"
              tone="lilac"
              points={[
                "Focus on grants, crowdfunding, and personal-credit-aware runway plans.",
                "Build clean business setup before chasing lenders.",
                "Use the flagship guide to avoid fake fast-capital traps."
              ]}
            />
            <QualificationCard
              title="Revenue but thin history"
              tone="mint"
              points={[
                "Explore microloans, secured paths, and selective revenue-based options.",
                "Tighten bookkeeping and business bank flows first.",
                "Strengthen qualification before asking for more expensive capital."
              ]}
            />
            <QualificationCard
              title="Traction + urgency"
              tone="blush"
              points={[
                "Map out what capital solves and what it could break.",
                "Look at repayment structure before headline amount.",
                "Apply only after pressure-testing the tradeoffs."
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="grid-shell grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow="Editorial system"
              title="Funding education, written like an operator."
              description="The Insights section turns the site into a search-friendly editorial engine with strong internal linking back to funding paths and application intent."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {featuredPosts.slice(0, 4).map((post) => (
                <StoryCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
          <LeadMagnetCard />
        </div>
      </section>

      <section className="section-space bg-white border-y-[3px] border-ink">
        <div className="grid-shell">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions founders ask when the bank door stays shut."
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        title="Stop guessing. Map the next funding move."
        copy="Apply for a funding reality check if you want help sorting realistic options by stage, traction, and qualification profile."
        primaryLabel="Go to apply"
        primaryHref="/apply/"
        secondaryLabel="Read the flagship guide"
        secondaryHref="/startup-funding/"
      />
    </>
  );
}