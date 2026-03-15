import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { getPostBySlug, getPosts } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getPosts().map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "Insight Not Found",
      description: "The requested article could not be found.",
      path: `/insights/${slug}/`
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/insights/${post.slug}/`
  });
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="section-space">
        <div className="grid-shell max-w-4xl">
          <div className="brutal-card bg-white p-6 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.12em]">
              {post.category} · {post.readTime}
            </p>
            <h1 className="display-title mt-4 text-[2.3rem] sm:text-[3.6rem]">{post.title}</h1>
            <p className="editorial-copy mt-5">{post.excerpt}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="kicker bg-paper">
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose-tight mt-8 text-base leading-8 text-ink/85">
              {post.sections.map((section) => (
                <section key={section.heading} className="mt-7">
                  <h2 className="text-2xl font-black uppercase">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-3">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            <div className="mt-8 brutal-card-sm bg-paper p-5">
              <p className="text-sm font-black uppercase tracking-[0.12em]">Related routes</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {post.relatedLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="brutal-btn bg-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <CTASection
        title="Use content to get clearer, then use apply to get practical."
        copy="The best conversion path here is education first, decision second. Founder Fuel is built to support both."
        primaryLabel="Apply now"
        primaryHref="/apply/"
        secondaryLabel="Back to insights"
        secondaryHref="/insights/"
      />
    </>
  );
}