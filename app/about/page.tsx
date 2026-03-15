import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Founder Fuel",
  description:
    "Founder Fuel is an editorial startup funding brand built for early-stage founders who need realism, not hype.",
  path: "/about/"
});

export default function AboutPage() {
  return (
    <section className="section-space">
      <div className="grid-shell max-w-4xl">
        <SectionHeading
          eyebrow="About"
          title="What this site is, and what it is not."
          description="Founder Fuel exists to help founders understand realistic funding options in the first 24 months."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <article className="brutal-card bg-mint p-6">
            <h2 className="text-2xl font-black uppercase">What this site is</h2>
            <ul className="mt-4 space-y-3 text-sm font-bold leading-6">
              <li>Founder-native education about startup funding reality</li>
              <li>Stage-based breakdowns of practical capital options</li>
              <li>An editorial system designed to clarify tradeoffs</li>
              <li>A conversion path for founders who want tailored guidance</li>
            </ul>
          </article>

          <article className="brutal-card bg-blush p-6">
            <h2 className="text-2xl font-black uppercase">What this site is not</h2>
            <ul className="mt-4 space-y-3 text-sm font-bold leading-6">
              <li>Not a fake approval funnel</li>
              <li>Not a hype-heavy lender brochure</li>
              <li>Not investor cosplay for businesses too early for it</li>
              <li>Not a substitute for judgment, underwriting, or legal advice</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}