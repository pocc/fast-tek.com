# Contributing to fast-tek.com

Developer onboarding guide for the FAST-TEK website migration.

## Prerequisites

| Tool              | Version  | Install                                      |
|-------------------|----------|----------------------------------------------|
| **Node.js**       | 20 LTS+  | [nodejs.org](https://nodejs.org) or `nvm install 20` |
| **npm**           | 10+      | Bundled with Node.js                         |
| **Wrangler CLI**  | 3.x      | `npm install -g wrangler` then `wrangler login` |
| **Git**           | 2.x      | [git-scm.com](https://git-scm.com)          |

> **Note:** `wrangler login` authenticates your local machine with Cloudflare. Required for D1, R2, and KV operations and for deployment.

## Initial Setup

```bash
# 1. Clone the repository
git clone <repo-url>
cd fast-tek.com

# 2. Install dependencies
npm install

# 3. Set up local D1 database
npm run db:migrate

# 4. Start the development server
npm run dev
```

The dev server starts Vite (frontend) with Wrangler's Pages proxy (backend), giving you:
- Hot Module Replacement for React components
- Local D1/KV/R2 bindings via Miniflare (no cloud resources needed for local dev)
- API routes at `http://localhost:5173/api/*`

## Project Structure

```
src/            → React frontend source code
functions/      → Cloudflare Pages Functions (API layer)
drizzle/        → Database schema and migrations
public/         → Static assets served as-is
docs/        → Architecture and tech stack documentation
```

See [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) for the full directory layout.

## Development Workflow

### Running Locally

```bash
npm run dev         # Start dev server (Vite + Wrangler)
npm run build       # Production build
npm run preview     # Preview production build locally
```

### Database

```bash
npm run db:generate  # Generate migration from schema changes
npm run db:migrate   # Apply migrations to local D1
npm run db:studio    # Open Drizzle Studio (visual DB browser)
```

### Quality Checks

```bash
npm run lint         # ESLint
npm run typecheck    # TypeScript compiler check
npm test             # Vitest test suite
```

All three checks must pass before merging. CI runs them automatically on pull requests.

## Git Conventions

### Branching: Trunk-Based Development

- **`main`** is the production branch — always deployable.
- Create short-lived feature branches off `main`:
  ```
  git checkout -b feat/contact-form
  ```
- Keep branches small and focused. Merge back to `main` quickly (ideally < 1 day).

### Branch Naming

| Prefix      | Use for                        | Example                    |
|-------------|--------------------------------|----------------------------|
| `feat/`     | New features or pages          | `feat/contact-form`        |
| `fix/`      | Bug fixes                      | `fix/nav-mobile-overflow`  |
| `chore/`    | Tooling, deps, config changes  | `chore/update-tailwind`    |
| `content/`  | Text/copy/image updates        | `content/update-services`  |

### Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add contact form with D1 storage
fix: correct mobile nav z-index issue
chore: update Wrangler to v3.x
content: update services page copy
```

### Pull Requests

- Keep PRs focused on a single change.
- Include a brief description of **what** and **why**.
- Ensure all CI checks pass before requesting review.

## Code Style

### Enforced by Tooling

- **Prettier** handles all formatting — do not manually adjust whitespace, quotes, or semicolons.
- **ESLint** enforces code quality rules — fix all warnings before committing.
- Consider setting up editor integration (VS Code: Prettier + ESLint extensions with format-on-save).

### Conventions

- **Components:** PascalCase files (`Header.tsx`, `ContactForm.tsx`)
- **Utilities/hooks:** camelCase files (`useContactForm.ts`, `formatDate.ts`)
- **Types:** Defined near usage, or in `src/types/` if shared across multiple files
- **Imports:** Prefer absolute paths from `src/` (configure via `tsconfig.json` paths)

## Deployment

Deployment happens automatically via Cloudflare Pages git integration:

| Branch  | Environment | URL                        |
|---------|-------------|----------------------------|
| `main`  | Production  | https://fast-tek.com       |
| Other   | Preview     | Auto-generated preview URL |

Manual deployment (if needed):
```bash
npm run deploy
```

## Environment Variables

Environment-specific values are configured in the Cloudflare Dashboard (or `wrangler.toml` for non-secret values). **Never commit secrets to the repository.**

<!-- TODO: Document required environment variables once they are defined -->

## Getting Help

- **Architecture questions:** See [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md)
- **Tech decisions:** See [`docs/TECH_STACK.md`](./docs/TECH_STACK.md)
- **AI session guidelines:** See [`CLAUDE.md`](./CLAUDE.md)
