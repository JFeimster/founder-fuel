import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { StoryCard } from "@/components/StoryCard";
import { getIssueBySlug, getPosts, getIssues } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getIssues().map((issue) => ({
    slug: issue.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);

  if (!issue) {
    return buildMetadata({
      title: "Issue Not Found",
      description: "The requested issue could not be found.",
      path: `/issues/${slug}/`
    });
  }

  return buildMetadata({
    title: issue.title,
    description: issue.description,
    path: `/issues/${issue.slug}/`
  });
}

export default async function IssuePage({ params }: Props) {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);

  if (!issue) {
    notFound();
  }

  const posts = getPosts().filter((post) => issue.storySlugs.includes(post.slug));

  return (
    <section className="section-space">
      <div className="grid-shell">
        <SectionHeading
          eyebrow={issue.issueLabel}
          title={issue.title}
          description={issue.description}
        />
        <div className="mb-6 flex flex-wrap gap-3">
          <Link href="/issues/" className="brutal-btn bg-white">
            Back to archive
          </Link>
          <Link href="/apply/" className="brutal-btn bg-ink text-white">
            Apply now
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <StoryCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

