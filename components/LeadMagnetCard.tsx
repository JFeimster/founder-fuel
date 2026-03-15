import Link from "next/link";

export function LeadMagnetCard() {
  return (
    <aside className="brutal-card bg-lilac p-6">
      <p className="text-sm font-black uppercase tracking-[0.12em]">Lead magnet</p>
      <h3 className="mt-3 text-2xl font-black uppercase">The first 24 months funding map</h3>
      <p className="mt-3 text-sm leading-6">
        A plain-English playbook showing what founders can realistically use before they become
        bankable, what each path costs, and what to prepare next.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href="/apply/" className="brutal-btn bg-ink text-white">
          Get the playbook
        </Link>
        <Link href="/startup-funding/" className="brutal-btn bg-white">
          Read the guide
        </Link>
      </div>
    </aside>
  );
}