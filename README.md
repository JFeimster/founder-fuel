# Founder Fuel

Founder Fuel is a static-first Next.js App Router site for realistic startup funding education and qualified lead capture.

## Stack

- Next.js App Router
- Static generation only
- Tailwind CSS
- Repo-local JSON content
- GitHub → Vercel friendly

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start development:

```bash
npm run dev
```

3. Build the static site:

```bash
npm run build
```

The exported site will be generated in `out/`.

## Route map

- `/`
- `/startup-funding/`
- `/funding-options/`
- `/funding-options/[slug]/`
- `/insights/`
- `/insights/[slug]/`
- `/issues/`
- `/issues/[slug]/`
- `/solutions/`
- `/solutions/[slug]/`
- `/about/`
- `/apply/`

## Content model

All content is local and build-time safe:

- `data/site.json`
- `data/funding-options.json`
- `data/solutions.json`
- `data/posts.json`
- `data/issues.json`
- `data/faqs.json`

## Lead capture setup

The `/apply/` page is intentionally static. To turn it into production lead capture:

- Replace the placeholder button with your form provider embed or action.
- Recommended options:
  - Tally
  - Typeform
  - HubSpot form embed
  - Beehiiv / ConvertKit form
- Keep the fields stage-based so qualification stays useful.

## GitHub → Vercel deployment

1. Push this repo to GitHub.
2. Create a new Vercel project.
3. Import the GitHub repository.
4. Framework preset: **Next.js**
5. Build command: `next build`
6. Output directory: leave default
7. Deploy

Because `next.config.mjs` uses `output: "export"`, the site stays static and Vercel-compatible.

## Environment variables

No environment variables are required for the static version.

If you later add analytics or form embeds, document new variables here.

## SEO checklist

- [x] Per-page metadata
- [x] Canonical URLs
- [x] Open Graph metadata
- [x] Strong internal linking between pillar, spokes, hub, and conversion page
- [x] Keyword-aligned route structure
- [x] Readable headings and scannable copy
- [ ] Replace `https://founderfuel.example` in `lib/seo.ts` with your real production domain
- [ ] Add OG image files in `/public/img` if desired
- [ ] Submit sitemap through your preferred workflow if added later

## Performance checklist

- [x] Static generation
- [x] No database calls
- [x] No runtime API dependencies
- [x] Minimal dependencies
- [x] CSS-first interaction patterns
- [ ] Compress any future images added to `/public`
- [ ] Add font hosting only if you truly need custom fonts

## Accessibility checklist

- [x] Skip link
- [x] Semantic sections and navigation
- [x] Keyboard-visible focus states
- [x] Sufficient color contrast
- [x] Reduced-motion fallback

## Troubleshooting

### Build fails on JSON imports
Make sure `resolveJsonModule` stays enabled in `tsconfig.json`.

### Static export breaks after adding new features
Avoid server actions, API routes, middleware, and runtime-only features. This project is static-first by design.

### Metadata canonical domain is wrong
- Update the base URL in `lib/seo.ts`. The placeholder `https://founderfuel.example` must be replaced with your real production domain before launch.

### Apply form does not submit
- That is expected in the starter version. Connect a form provider or embed on `/apply/`, and wire the button or form action to your real endpoint before going live.

## Strategy file

See `docs/strategy.md` for the full brand naming, IA, content strategy, design system, page blueprints, and build plan.
