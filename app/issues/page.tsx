import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { getIssues } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Issue Archive",
  description: "Browse Founder Fuel issues and editorial collections.",
  path: "/issues/"
});

export default function IssuesPage() {
  const issues = getIssues();

  return (
    <section className="section-space">
      <div className="grid-shell">
        <SectionHeading
          eyebrow="Issue archive"
          title="Editorial bundles for founders who want the big picture."
          description="Issues organize stories by founder stage, funding reality, and practical decision-making."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {issues.map((issue) => (
            <article key={issue.slug} className="brutal-card bg-white p-6">
              <p className="text-sm font-black uppercase tracking-[0.12em]">{issue.issueLabel}</p>
              <h2 className="mt-3 text-3xl font-black uppercase">{issue.title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/80">{issue.description}</p>
              <Link href={`/issues/${issue.slug}/`} className="mt-5 inline-flex font-black underline">
                Open issue →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}