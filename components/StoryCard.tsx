import Link from "next/link";
import type { Post } from "@/lib/data";

export function StoryCard({ post }: { post: Post }) {
  return (
    <article className="brutal-card bg-white p-5">
      <p className="text-xs font-black uppercase tracking-[0.12em] text-ink/70">
        {post.category} · {post.readTime}
      </p>
      <h3 className="mt-3 text-2xl font-black uppercase leading-tight">{post.title}</h3>
      <p className="mt-3 text-sm leading-6 text-ink/80">{post.excerpt}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="kicker bg-paper">
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/insights/${post.slug}/`} className="mt-5 inline-flex font-black underline">
        Read story →
      </Link>
    </article>
  );
}