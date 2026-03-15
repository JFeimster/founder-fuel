import Link from "next/link";
import { getSiteData } from "@/lib/data";

export function Header() {
  const site = getSiteData();

  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-paper/95 backdrop-blur">
      <div className="grid-shell flex items-center justify-between gap-4 py-4">
        <Link href="/" className="text-lg font-black uppercase tracking-tight">
          {site.brand.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-3 md:flex">
          {site.nav.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 font-bold hover:bg-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href={site.cta.primary.href} className="brutal-btn bg-ink text-white">
            {site.cta.primary.label}
          </Link>
        </div>

        <details className="md:hidden">
          <summary className="brutal-btn list-none bg-white">Menu</summary>
          <div className="brutal-card-sm absolute right-4 top-16 w-64 bg-white p-4">
            <nav aria-label="Mobile" className="flex flex-col gap-2">
              {site.nav.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 font-bold hover:bg-paper"
                >
                  {item.label}
                </Link>
              ))}
              <Link href={site.cta.primary.href} className="brutal-btn mt-2 bg-ink text-white">
                {site.cta.primary.label}
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}