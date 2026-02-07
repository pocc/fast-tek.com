# Tech Stack

Detailed breakdown of the target technology choices for the fast-tek.com migration and the rationale behind each.

---

## Core

| Technology        | Version | Purpose                                                                                    |
|-------------------|---------|--------------------------------------------------------------------------------------------|
| **Cloudflare Pages** | —    | Hosting platform — serves static assets from 300+ edge locations with automatic SSL and CI/CD via git integration. Zero cold starts for static content. |
| **Cloudflare Workers** | —  | Serverless compute for API routes — runs at the edge in V8 isolates, sub-millisecond startup. Used via Pages Functions. |
| **Vite**          | 5.x     | Frontend build tool — fast HMR in dev, optimized Rollup-based production builds. The standard for modern React projects. |
| **React**         | 18.x    | UI library — component-based architecture, large ecosystem, strong TypeScript support. Suitable for the 6 pages + interactive contact form. |
| **React Router**  | 6.x     | Client-side routing — file-path-like route definitions, nested layouts, loader patterns.    |
| **Hono**          | 4.x     | Lightweight web framework for Workers — Express-like API, built-in TypeScript support, ~14KB. Purpose-built for edge runtimes. |
| **TypeScript**    | 5.x     | Static typing — catches bugs at compile time, enables IDE autocompletion, self-documenting code. Strict mode enforced. |

## Data & Storage

| Technology        | Purpose                                                                                          |
|-------------------|--------------------------------------------------------------------------------------------------|
| **Cloudflare D1** | Edge SQL database (SQLite-compatible) — stores contact form submissions and any dynamic content. Zero-config, auto-replicated. |
| **Cloudflare R2** | Object storage (S3-compatible) — stores project photos, PDF documents, and large assets. Zero egress fees. |
| **Cloudflare KV** | Key-value store — optional caching layer for API responses or site configuration that changes infrequently. |
| **Drizzle ORM**   | TypeScript-first ORM for D1 — type-safe queries, schema declarations in TS, migration generation. Lightweight alternative to Prisma that works natively with D1. |

## Styling

| Technology        | Purpose                                                                                          |
|-------------------|--------------------------------------------------------------------------------------------------|
| **Tailwind CSS**  | Utility-first CSS framework — rapid prototyping, consistent design system, automatic purging of unused styles for tiny CSS bundles. |
| **tailwind-merge**| Utility for merging Tailwind classes without conflicts — useful for component prop overrides.     |
| **clsx**          | Conditional class name utility — clean syntax for dynamic class application in components.       |

<!-- TODO: Evaluate if a component library (shadcn/ui, Radix) is needed, or if hand-built components suffice for this site's complexity -->

## Linting & Formatting

| Technology        | Purpose                                                                                          |
|-------------------|--------------------------------------------------------------------------------------------------|
| **ESLint**        | Static analysis — catches common bugs, enforces consistent patterns. Uses `@typescript-eslint` and React-specific rules. |
| **Prettier**      | Code formatting — enforces consistent style (semicolons, quotes, indentation). Eliminates formatting debates. |

## Testing

| Technology        | Purpose                                                                                          |
|-------------------|--------------------------------------------------------------------------------------------------|
| **Vitest**        | Unit/integration testing — Vite-native test runner, fast execution, compatible with Jest API. Tests components and utility functions. |
| **@cloudflare/vitest-pool-workers** | Runs Vitest inside the Workers runtime — tests API handlers with real D1/KV/R2 bindings via Miniflare. |
| **Testing Library** | (`@testing-library/react`) — Tests React components by simulating user interactions, not implementation details. |
| **Playwright**    | End-to-end testing — browser automation for critical user flows (contact form submission, navigation). |

<!-- TODO: Determine minimum test coverage targets and which E2E flows are critical -->

## DevOps & Infrastructure

| Technology          | Purpose                                                                                        |
|---------------------|------------------------------------------------------------------------------------------------|
| **Wrangler CLI**    | Cloudflare's CLI — local dev server (`wrangler pages dev`), deployment, D1/R2/KV management.   |
| **GitHub Actions**  | CI/CD — run lint, typecheck, and tests on PR. Auto-deploy `main` to Cloudflare Pages.          |
| **Miniflare**       | Local simulation of Cloudflare bindings (D1, KV, R2) — used transparently by Wrangler during local dev. |

## Not Using (and Why)

| Technology    | Reason for Exclusion                                                                             |
|---------------|--------------------------------------------------------------------------------------------------|
| Next.js       | Overkill for a 6-page business site; Pages + Vite is simpler and fully edge-native.             |
| Prisma        | Does not natively support D1. Drizzle is lighter and built for edge runtimes.                    |
| Redux/Zustand | No complex client-side state to manage; React's built-in `useState`/`useContext` is sufficient. |
| Express       | Not compatible with Workers runtime. Hono is the edge-native equivalent.                        |
| MongoDB/PostgreSQL | Requires persistent connections not available in Workers. D1 is the native choice.          |
