import type { Metadata } from "next";
import { LeadMagnetCard } from "@/components/LeadMagnetCard";
import { SectionHeading } from "@/components/SectionHeading";
import { StoryCard } from "@/components/StoryCard";
import { getPosts } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Insights for Startup Funding, Credit, and Founder Readiness",
  description:
    "Founder-native articles about startup funding with no revenue, business credit, revenue-based financing, funding mistakes, and qualification readiness.",
  path: "/insights/"
});

export default function InsightsPage() {
  const posts = getPosts();

  return (
    <section className="section-space">
      <div className="grid-shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <SectionHeading
            eyebrow="Insights"
            title="The editorial engine behind smarter founder decisions."
            description="This section is built for SEO depth, internal linking strength, and conversion-aware education."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <StoryCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
        <LeadMagnetCard />
      </div>
    </section>
  );
}