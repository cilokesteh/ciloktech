# CilokTech Operations

## Classification

- Type: marketing site + lead generation
- Maturity: L1 with edge utilities
- Runtime: Next.js App Router on Vercel
- Database/auth/payments: not applicable
- Primary conversion: Telegram consultation

## Service objectives

| SLI | SLO | Window |
|---|---:|---:|
| Homepage availability | >= 99.9% | rolling 28 days |
| `/health` success | >= 99.95% | rolling 28 days |
| LCP p75 | <= 2.5 s | rolling 28 days |
| INP p75 | <= 200 ms | rolling 28 days |
| CLS p75 | <= 0.1 | rolling 28 days |
| Server 5xx rate | < 0.1% | rolling 28 days |

## Monitoring

- `/health`: process liveness; no external dependency calls.
- `/ready`: readiness; currently has no external dependencies.
- Core Web Vitals are sent client-side through the existing GA4 dataLayer. There is no public ingestion endpoint and no application-side metric logging.
- GA4: conversion and traffic analytics only.

Alert on user-visible symptoms, not resource usage alone:

1. Homepage or `/health` fails twice consecutively from an external probe.
2. 5xx error rate exceeds 1% for 5 minutes.
3. Fast SLO burn: >14.4x budget for 1 hour.
4. Slow SLO burn: >2x budget for 6 hours.
5. LCP/INP/CLS p75 is rated `poor` for 30 minutes.

## Deploy and rollback

1. CI runs frozen install, lint, typecheck, test, build, audit, and smoke checks.
2. Vercel creates an immutable deployment.
3. Verify `/`, `/blog`, `/harga`, `/health`, `/ready`, `robots.txt`, and `sitemap.xml`.
4. Roll back by promoting the previous known-good Vercel deployment.
5. Database rollback is not applicable because this project has no database.

## Backup and recovery

- Source of truth: GitHub repository.
- Generated deployment artifacts: reproducible from `pnpm-lock.yaml`.
- Content: versioned TypeScript data in the repository.
- Recovery test: clone at a clean path, run `pnpm install --frozen-lockfile && pnpm build`, then smoke-test the local server.

## Data and privacy

- No accounts, database, payment details, or form submissions are stored.
- Core Web Vitals use the existing GA4 integration; no duplicate application logs are written.
- GA4 is the only third-party analytics integration.
