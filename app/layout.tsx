import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getSiteData } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

const site = getSiteData();

export const metadata: Metadata = buildMetadata({
  title: `${site.brand.name} — ${site.brand.tagline}`,
  description: site.brand.positioning,
  path: "/"
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="marquee-note">
          <div className="grid-shell flex flex-wrap gap-x-6 gap-y-2">
            <span>Startup funding without the hype</span>
            <span>No fake approvals</span>
            <span>No bank cosplay</span>
            <span>Just realistic paths for the first 24 months</span>
          </div>
        </div>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}