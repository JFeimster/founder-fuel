import Link from "next/link";
import type { FundingOption } from "@/lib/data";

export function FundingCard({ item }: { item: FundingOption }) {
  return (
    <article className="brutal-card bg-white p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="kicker bg-paper">{item.stage}</span>
        <span className="kicker bg-cyan">{item.keyword}</span>
      </div>
      <h3 className="mt-4 text-2xl font-black uppercase">{item.name}</h3>
      <p className="mt-3 text-sm leading-6 text-ink/80">{item.summary}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {item.fitSignals.slice(0, 3).map((signal) => (
          <li key={signal} className="brutal-card-sm bg-paper p-3 font-bold">
            {signal}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href={`/funding-options/${item.slug}/`} className="brutal-btn bg-ink text-white">
          Read the breakdown
        </Link>
      </div>
    </article>
  );
}