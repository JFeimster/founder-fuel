import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Apply for a Funding Reality Check",
  description:
    "Use the Founder Fuel apply page to qualify your startup stage, funding needs, and next realistic capital path.",
  path: "/apply/"
});

export default function ApplyPage() {
  return (
    <section className="section-space">
      <div className="grid-shell grid gap-8 lg:grid-cols-[1fr_0.92fr]">
        <div>
          <SectionHeading
            eyebrow="Apply"
            title="Tell us where the business really is."
            description="This page is designed for qualified lead capture. When you deploy, hook the form up to Tally, Typeform, HubSpot, or your preferred intake tool."
          />

          <form className="brutal-card bg-white p-6">
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="input-shell">
                  <span className="mb-2 block text-sm font-black uppercase">Name</span>
                  <input className="w-full bg-transparent outline-none" type="text" name="name" />
                </label>
                <label className="input-shell">
                  <span className="mb-2 block text-sm font-black uppercase">Email</span>
                  <input className="w-full bg-transparent outline-none" type="email" name="email" />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="input-shell">
                  <span className="mb-2 block text-sm font-black uppercase">Startup stage</span>
                  <select className="w-full bg-transparent outline-none" name="stage" defaultValue="">
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>Pre-revenue</option>
                    <option>Early revenue</option>
                    <option>12+ months operating</option>
                  </select>
                </label>
                <label className="input-shell">
                  <span className="mb-2 block text-sm font-black uppercase">Primary funding need</span>
                  <select className="w-full bg-transparent outline-none" name="need" defaultValue="">
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>Working capital</option>
                    <option>Inventory / ecommerce</option>
                    <option>Marketing / growth</option>
                    <option>Equipment / operations</option>
                  </select>
                </label>
              </div>

              <label className="input-shell block">
                <span className="mb-2 block text-sm font-black uppercase">Monthly revenue</span>
                <input className="w-full bg-transparent outline-none" type="text" name="revenue" />
              </label>

              <label className="input-shell block">
                <span className="mb-2 block text-sm font-black uppercase">
                  What are you trying to fund?
                </span>
                <textarea className="min-h-32 w-full bg-transparent outline-none" name="details" />
              </label>

              <div className="mt-2 flex flex-wrap gap-3">
                <button type="button" className="brutal-btn bg-ink text-white">
                  Connect intake tool or embed here
                </button>
                <Link href="/startup-funding/" className="brutal-btn bg-white">
                  Read the guide first
                </Link>
              </div>
            </div>
          </form>
        </div>

        <aside className="space-y-5">
          <div className="brutal-card bg-acid p-6">
            <h2 className="text-2xl font-black uppercase">Best-fit founders</h2>
            <ul className="mt-4 space-y-3 text-sm font-bold leading-6">
              <li className="brutal-card-sm bg-white p-3">Early-stage operators who want realistic options</li>
              <li className="brutal-card-sm bg-white p-3">Founders who know banks are probably not the first move</li>
              <li className="brutal-card-sm bg-white p-3">Businesses willing to qualify before they chase capital</li>
            </ul>
          </div>

          <div className="brutal-card bg-white p-6">
            <h2 className="text-2xl font-black uppercase">Conversion notes</h2>
            <p className="mt-3 text-sm leading-6">
              This page is intentionally simple. Keep friction low, filter with stage and use of
              funds, and connect your preferred lead capture form service after deployment.
            </p>
          </div>

          <div className="brutal-card bg-paper p-6">
            <h2 className="text-2xl font-black uppercase">What happens next</h2>
            <ol className="mt-3 space-y-2 text-sm leading-6">
              <li>1. The form sends your answers into your CRM or form provider.</li>
              <li>2. You or your team review stage, use of funds, and revenue fit.</li>
              <li>3. Qualified founders get a clear next step: content, call, or capital path.</li>
            </ol>
            <p className="mt-3 text-xs leading-5 text-ink/70">
              Founder Fuel is designed to build trust first. Do not promise approvals you cannot
              deliver, and keep the follow-up honest, specific, and free from predatory terms.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}