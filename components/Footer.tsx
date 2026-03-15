import Link from "next/link";
import { getSiteData } from "@/lib/data";

export function Footer() {
  const site = getSiteData();

  return (
    <footer className="border-t-[3px] border-ink bg-white">
      <div className="grid-shell grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="mb-3 text-2xl font-black uppercase">{site.brand.name}</p>
          <p className="max-w-md text-sm leading-6 text-ink/75">{site.brand.positioning}</p>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-black uppercase tracking-[0.12em]">Explore</h2>
          <ul className="space-y-2">
            {site.nav.main.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-bold hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-black uppercase tracking-[0.12em]">Legal + Notes</h2>
          <ul className="space-y-2 text-sm text-ink/75">
            <li>No funding promises. No fake approvals. No bank cosplay.</li>
            <li>
              <Link href="/about/" className="font-bold text-ink hover:underline">
                About Founder Fuel
              </Link>
            </li>
            <li>Connect your intake tool on the apply page when ready.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}