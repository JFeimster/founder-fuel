import Link from "next/link";

type Props = {
  title: string;
  copy: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title,
  copy,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref
}: Props) {
  return (
    <section className="section-space">
      <div className="grid-shell">
        <div className="brutal-card bg-acid p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-end">
            <div>
              <span className="kicker bg-white">Founder action</span>
              <h2 className="display-title mt-4 text-4xl sm:text-5xl">{title}</h2>
              <p className="editorial-copy mt-4 max-w-2xl">{copy}</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link href={primaryHref} className="brutal-btn bg-ink text-white">
                {primaryLabel}
              </Link>
              {secondaryLabel && secondaryHref ? (
                <Link href={secondaryHref} className="brutal-btn bg-white text-ink">
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}