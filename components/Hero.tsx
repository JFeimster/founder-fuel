import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  realityTitle: string;
  realityPoints: string[];
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  realityTitle,
  realityPoints
}: Props) {
  return (
    <section className="border-b-[3px] border-ink bg-acid">
      <div className="grid-shell grid gap-8 py-14 md:grid-cols-[1.35fr_0.85fr] md:py-20">
        <div>
          <span className="kicker bg-white">{eyebrow}</span>
          <h1 className="display-title mt-5 text-[3rem] sm:text-[4.5rem] lg:text-[6rem]">
            {title}
          </h1>
          <p className="editorial-copy mt-5 max-w-2xl text-lg md:text-xl">{subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={primaryHref} className="brutal-btn bg-ink text-white">
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className="brutal-btn bg-white text-ink">
              {secondaryLabel}
            </Link>
          </div>
        </div>

        <aside className="brutal-card h-fit bg-white p-6">
          <p className="text-sm font-black uppercase tracking-[0.12em]">{realityTitle}</p>
          <ul className="mt-4 space-y-3 text-sm font-bold leading-6">
            {realityPoints.map((point) => (
              <li key={point} className="brutal-card-sm bg-paper p-3">
                {point}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}