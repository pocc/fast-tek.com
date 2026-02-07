# Architecture Overview

## Migration Context

**Legacy:** Static HTML site exported from GoDaddy Website Builder 8.0 via `monolith`. The original pages (Home, About, Books, Contact, Projects, Services) are preserved in the repo root as reference during migration.

**Target:** Modern JAMstack architecture on Cloudflare's edge network.

---

## System Boundaries

```
┌─────────────────────────────────────────────────────────┐
│                    Cloudflare Edge                       │
│                                                         │
│  ┌──────────────────────┐   ┌────────────────────────┐  │
│  │   Cloudflare Pages   │   │    Pages Functions      │  │
│  │   (Static Assets)    │   │    (Hono API)           │  │
│  │                      │   │                         │  │
│  │  - React SPA bundle  │   │  /functions/api/        │  │
│  │  - CSS / Tailwind    │   │    ├── contact.ts       │  │
│  │  - Images (or R2)    │   │    ├── projects.ts      │  │
│  │  - Fonts             │   │    └── ...              │  │
│  └──────────┬───────────┘   └─────┬──────────────────┘  │
│             │                     │                      │
│             │    fetch("/api/*")  │                      │
│             └─────────────────────┘                      │
│                       │                                  │
│          ┌────────────┼────────────┐                     │
│          ▼            ▼            ▼                     │
│    ┌──────────┐ ┌──────────┐ ┌──────────┐               │
│    │    D1    │ │    R2    │ │    KV    │               │
│    │ Database │ │  Bucket  │ │  Cache   │               │
│    └──────────┘ └──────────┘ └──────────┘               │
└─────────────────────────────────────────────────────────┘
```

## Frontend — Cloudflare Pages (Vite + React)

- **Build tool:** Vite 5 — bundles the React SPA for production
- **Routing:** React Router v6 — client-side navigation between pages
- **Pages:** Home (`/`), About (`/about`), Services (`/services`), Projects (`/projects`), Books (`/books`), Contact (`/contact`)
- **Deployment:** `npm run build` outputs to `dist/`, which Cloudflare Pages serves at the edge
- **Assets:** Static images and documents stored in R2, referenced via public URLs or a signed-URL worker

## Backend — Pages Functions (Hono)

Cloudflare Pages Functions live in the `functions/` directory at the project root. Each file maps to a route:

- `functions/api/contact.ts` — Handles contact form submissions (validate, store in D1, send email notification)
- `functions/api/projects.ts` — <!-- TODO: Define if projects are static or DB-driven -->
- `functions/[[path]].ts` — Catch-all for SPA client-side routing (returns `index.html`)

**Framework:** Hono provides lightweight routing, middleware, and typed context (`c.env`, `c.req`, `c.json()`).

## Data Flow

### Contact Form Submission
```
User fills form → React validates client-side
  → POST /api/contact (JSON body)
    → Hono handler validates server-side
      → Insert row into D1 `contact_submissions` table
      → Send email notification (via MailChannels or Resend)
      → Return 200 JSON response
    → React shows success/error message
```

### Static Page Load
```
Browser requests /services
  → Cloudflare Pages serves index.html (SPA)
  → React Router renders <ServicesPage />
  → Component renders static content (no API call needed)
```

## Cloudflare Bindings (wrangler.toml)

These bindings will be configured in `wrangler.toml`:

| Binding    | Type | Purpose                                      |
|------------|------|----------------------------------------------|
| `DB`       | D1   | Primary database — contact submissions, etc. |
| `BUCKET`   | R2   | Image/document storage (project photos, PDFs)|
| `CACHE`    | KV   | Optional: page-level or API response caching |

<!-- TODO: Add actual binding IDs once Cloudflare resources are provisioned -->

## Directory Structure (Target)

```
fast-tek.com/
├── CLAUDE.md
├── CONTRIBUTING.md
├── docs/
│   ├── ARCHITECTURE.md          ← You are here
│   └── TECH_STACK.md
├── functions/                   ← Cloudflare Pages Functions (API)
│   ├── api/
│   │   ├── contact.ts
│   │   └── ...
│   └── [[path]].ts             ← SPA catch-all
├── src/                         ← Frontend source
│   ├── components/              ← Reusable React components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── ui/                  ← Buttons, cards, form inputs
│   │   └── sections/            ← Page sections (Hero, ServicesList, etc.)
│   ├── pages/                   ← Route-level page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Books.tsx
│   │   └── Contact.tsx
│   ├── types/
│   │   └── env.d.ts             ← Cloudflare Env bindings type
│   ├── lib/                     ← Utilities, API client helpers
│   ├── App.tsx                  ← Root component + router
│   ├── main.tsx                 ← Entry point
│   └── index.css                ← Tailwind directives
├── drizzle/                     ← DB migrations
│   └── schema.ts
├── public/                      ← Static assets served as-is
├── package.json
├── wrangler.toml
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```
