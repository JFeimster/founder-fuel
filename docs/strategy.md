# Founder Fuel Current-State Strategy

## Purpose

This document is the execution strategy for the live Founder Fuel site. It reflects what is currently implemented in the repository and deployed through Vercel.

For original naming and early ideation context, see `docs/strategy.blueprint.md`.

## Live IA and Route System

Implemented route map:

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

Route intent:

- Pillar and conversion spine: `/startup-funding/`, `/funding-options/`, `/apply/`
- Editorial authority engine: `/insights/*`, `/issues/*`
- Search-intent expansion: `/solutions/*`

## Content Model (Build-Time JSON)

The site is static-first and content-driven. All page content is loaded from local JSON:

- `data/site.json`
- `data/funding-options.json`
- `data/posts.json`
- `data/issues.json`
- `data/faqs.json`
- `data/solutions.json`

Data access layer:

- `lib/data.ts` provides typed getters for each dataset and slug lookup helpers.

SEO metadata contract:

- `lib/seo.ts` builds per-page metadata and canonical URLs.
- Canonical base URL is currently `https://founder-fuel.vercel.app`.

## Apply Flow Policy (Intentionally Static)

`/apply/` is intentionally static in this version and serves as a qualified intake placeholder. The current form captures:

- founder identity (name/email)
- startup stage
- primary funding need
- monthly revenue
- free-text funding context

No submission backend is implemented in this pass. Next integration step is embedding or wiring an intake tool (for example Tally, Typeform, or HubSpot) without changing the surrounding qualification UX.

## Deployment and Source-of-Truth

Current operational truth:

- GitHub repo: `JFeimster/founder-fuel`
- Default branch: `main`
- Vercel project: `founder-fuel`
- Production domain: `https://founder-fuel.vercel.app`
- Deployment flow: push/merge to `main` -> Vercel production build

Do not treat local OneDrive copies as authoritative unless they are backed by a Git working tree and synchronized via branch/PR workflow.

## Operating Workflow

Preferred sync workflow:

1. Start from a clean clone of `main`.
2. Create a feature branch.
3. Make changes with scope discipline (content/docs/tooling/app separated where possible).
4. Run quality checks (`build`, `typecheck`, `lint`) before commit.
5. Open PR to `main`.
6. Confirm production deployment after merge.

## Guardrails

- Keep app behavior static-first (no runtime APIs unless explicitly planned).
- Keep `/apply/` static until intake integration is intentionally scoped.
- Keep docs aligned with implemented routes and data files.
- Update this document whenever route architecture, content model, or deployment policy changes.
