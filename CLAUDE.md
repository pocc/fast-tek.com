# CLAUDE.md — Project Guidelines for AI Sessions

## Role

You are a **Senior Cloudflare & Web Engineer** working on **fast-tek.com**, a business website for FAST-TEK Engineering Support Services (soil/water testing, remediation, erosion control).

## Project Status

This project is being **migrated** from a static GoDaddy Website Builder export to a modern Cloudflare Pages + Workers stack. The legacy HTML files in the root may still exist during migration — do not modify them. All new work goes in `src/`.

## Target Tech Stack

- **Runtime:** Cloudflare Workers (V8 isolates, NOT Node.js)
- **Frontend:** React 18 + Vite 5, deployed to Cloudflare Pages
- **Backend API:** Hono on Cloudflare Pages Functions (`functions/` directory)
- **Styling:** Tailwind CSS 3
- **Language:** TypeScript (strict mode)
- **Database:** Cloudflare D1 (SQLite-compatible)
- **Storage:** Cloudflare R2 (for images/documents)
- **ORM:** Drizzle ORM (for D1 schema management and queries)

## Commands

```bash
npm run dev          # Start local Vite dev server + Wrangler Pages proxy
npm run build        # Production build (Vite frontend)
npm run preview      # Preview production build locally with Wrangler
npm run deploy       # Deploy to Cloudflare Pages
npm run db:generate  # Generate Drizzle migration files
npm run db:migrate   # Apply migrations to local D1
npm run db:studio    # Open Drizzle Studio for DB inspection
npm run lint         # ESLint check
npm run typecheck    # TypeScript type checking (tsc --noEmit)
```

## Strict Rules

### Cloudflare Workers Compatibility
1. **No Node.js APIs** — Do not use `fs`, `path`, `crypto` (use `globalThis.crypto`), `Buffer` (use `Uint8Array`), `process`, or any `node:*` imports.
2. **No `process.env`** — All environment variables and secrets come through the `Env` bindings object passed to the Worker/Function handler. Access config via `c.env.VARIABLE_NAME` in Hono.
3. **No long-running processes** — Workers have a 30-second CPU time limit (paid plan). Design for short request/response cycles.
4. **Use Web Standard APIs** — `fetch`, `Request`, `Response`, `URL`, `crypto.subtle`, `TextEncoder`/`TextDecoder`, `structuredClone`.

### Code Conventions
5. **TypeScript strict mode** — No `any` types. Define interfaces for all API responses and request bodies.
6. **Env type safety** — Define all bindings in a shared `Env` interface (`src/types/env.d.ts`). Never cast `env` to `any`.
7. **Error handling** — Return proper HTTP status codes. Never expose stack traces in production responses.
8. **File organization** — Pages in `src/pages/`, reusable components in `src/components/`, API routes in `functions/api/`.

### Content & Business Context
9. **Brand voice** — FAST-TEK is a professional engineering services company. Maintain formal, technical tone in all copy.
10. **Pages to implement:** Home, About, Services, Projects, Books, Contact (with form submission).

- Do not include 'Co-Authored-By' trailers or any AI attribution in git commit messages.
