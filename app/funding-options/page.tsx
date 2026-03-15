import type { Metadata } from "next";
import { FundingCard } from "@/components/FundingCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getFundingOptions } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Funding Options for Early-Stage Startups",
  description:
    "Compare startup funding options including credit stacking, revenue-based financing, microloans, grants, and business credit building.",
  path: "/funding-options/"
});

export default function FundingOptionsPage() {
  const options = getFundingOptions();

  return (
    <section className="section-space">
      <div className="grid-shell">
        <SectionHeading
          eyebrow="Funding options hub"
          title="Pick the path that matches your stage, not the one that flatters your ego."
          description="Each funding option page explains what it is, who it fits, what founders get wrong, and when to move forward or walk away."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {options.map((item) => (
            <FundingCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}