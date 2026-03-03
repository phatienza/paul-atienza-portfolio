# Copilot / AI Agent Instructions

Overview
- This is a Next.js 13+ app (app router) using TypeScript and Tailwind. Source lives under `src/`.
- `next` (16.1.6), `react` (19.x). Build and run via `npm run dev`, `npm run build`, `npm run start`.

Key files & structure
- `src/app/layout.tsx` — global layout and root providers; `Navbar` is mounted here.
- `src/app/page.tsx` — app entry page (renders `Hero`).
- `src/components/*` — presentational components (e.g. `Hero.tsx`, `Navbar.tsx`).
- `src/app/globals.css` — global styles; Tailwind configured in root files.
- `package.json` — scripts: `dev`, `build`, `start`, `lint`.
- `tsconfig.json` — `paths` maps `@/*` → `./src/*`. Use `@/components/...` imports.

Patterns & expectations
- App router (server components) is the default. Only add `"use client"` at the top of a file when the component needs hooks, local state, or browser-only APIs.
- Keep components small and functional. Prefer server components for layout and static rendering.
- Styling uses Tailwind utility classes directly in JSX (see `Hero.tsx`, `Navbar.tsx`).
- Static assets live in `public/` (e.g., `/cv.pdf` used by `Hero`).

Dev workflows
- Start local dev: `npm run dev` → http://localhost:3000.
- Production build + run: `npm run build` then `npm run start`.
- Lint: `npm run lint` (project uses `eslint` + `eslint-config-next`).

Common code examples
- Importing a component: `import Hero from "@/components/Hero";` (uses `@/` path alias).
- Convert a component to client: add `"use client"` as the first line, then migrate any hooks.

Integration notes
- No external backend shown in repo — treat the app as a static/SSR Next.js site. If adding APIs, prefer `src/app/api/*` or `src/pages/api/*` depending on router choices.
- Deployment target: Vercel is the simplest path (standard Next.js). No environment variable handling is present — add `.env.local` + update `next.config.ts` if needed.

What the agent should not do
- Don't assume a client runtime for components unless `"use client"` is present.
- Do not add global design systems or heavy runtime libs without owner approval (this is a lightweight personal portfolio).

If unsure / next steps
- For layout changes edit `src/app/layout.tsx`.
- For pages, edit files under `src/app/` (e.g., `page.tsx`).
- Ask for clarification before adding new build tooling or tests.

End of instructions — ask the repo owner for further conventions.
