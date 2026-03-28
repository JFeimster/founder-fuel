# Founder Fuel

Founder Fuel is a static-first Next.js App Router site focused on realistic startup funding education and qualified lead capture.

## Live Properties

- Production site: `https://founder-fuel.vercel.app`
- GitHub repo: `https://github.com/JFeimster/founder-fuel.git`
- Vercel project: `founder-fuel` (team: `jason-feimsters-projects`)
- Canonical base URL in code: `https://founder-fuel.vercel.app` (set in `lib/seo.ts`)

## Stack

- Next.js App Router (static export)
- React 19
- Tailwind CSS
- Local JSON content (`data/*.json`)

## Route Map

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

## Content Model

All content is build-time safe and local:

- `data/site.json`
- `data/funding-options.json`
- `data/solutions.json`
- `data/posts.json`
- `data/issues.json`
- `data/faqs.json`

Data access helpers live in `lib/data.ts`.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start local development:

```bash
npm run dev
```

3. Build static output:

```bash
npm run build
```

Output is generated in `out/`.

## Quality Checks

Run before commits and PRs:

```bash
npm run build
npm run typecheck
npm run lint
```

Lint is configured via committed ESLint config and should run non-interactively.

## Apply Page Policy

`/apply/` is intentionally static in this version. It is designed as a qualification-friendly intake placeholder and does not submit to a backend yet.

To activate real intake later:

- connect a form provider (for example Tally, Typeform, HubSpot)
- keep stage/use-of-funds qualifiers intact
- avoid changing surrounding trust language and conversion flow without strategy review

## Deployment Workflow (GitHub -> Vercel)

1. Branch from `main`.
2. Make scoped changes.
3. Run quality checks.
4. Open PR to `main`.
5. Merge PR.
6. Confirm the matching Vercel production deployment is `READY`.

## Repo Sync Workflow

Use this when local copies drift from GitHub/Vercel:

1. Fresh clone from `main`.
2. Compare local working files to clone.
3. Migrate only intended deltas.
4. Commit and open PR.
5. Validate deployed output after merge.

This avoids silently treating non-git local folders as source-of-truth.

## Troubleshooting

### `next lint` prompts for setup

ESLint config or dependencies are missing. Ensure:

- `.eslintrc.json` exists
- `eslint` and `eslint-config-next` are installed in `devDependencies`

### Static export breaks

This project is static-first. Avoid adding runtime-only features unless explicitly planned:

- API routes
- server actions tied to runtime services
- middleware-dependent flows

### Metadata/canonical mismatch

Update `baseUrl` in `lib/seo.ts` only when a real production domain change is complete.

## Strategy Docs

- Current execution strategy: `docs/strategy.md`
- Historical ideation blueprint: `docs/strategy.blueprint.md`
