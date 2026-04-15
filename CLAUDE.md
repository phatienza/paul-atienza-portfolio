# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

This is a Next.js 16 portfolio site with a file-based blog, using React 19, Tailwind CSS v4, and Framer Motion.

### Routing

- `/` — Single-page portfolio with stacked sections: Hero, Experience, Skills, Certifications, Services, Contact, Footer
- `/blog` — Blog index listing all posts
- `/blog/[slug]` — Dynamic blog post pages, statically generated via `generateStaticParams()`

### Blog Content

Blog posts live in `content/blog/` as Markdown files with YAML frontmatter (`title`, `date`, `description`, `image`). Parsing uses `gray-matter` and rendering uses `remark` + `remark-html`. All reading/processing logic is in `src/lib/posts.ts`.

### Component Patterns

- **Server components** are the default. Blog pages use async server components with `generateMetadata()` for SEO.
- **Client components** require the `"use client"` directive. Currently only `FadeIn.tsx` is a client component (uses Framer Motion's `whileInView`).
- Wrap sections in `<FadeIn>` for scroll-triggered fade animations.

### Styling

Uses Tailwind CSS v4 (no `tailwind.config.ts` — configured via PostCSS in `postcss.config.mjs`). The `@tailwindcss/typography` plugin is available for prose styling in blog posts. Path alias `@/*` resolves to `./src/*`.

### SEO & Analytics

- `src/app/sitemap.ts` and `src/app/robots.ts` generate dynamic sitemap and robots.txt
- Vercel Analytics is included in the root layout (`src/app/layout.tsx`)
- Each blog post generates dynamic Open Graph metadata via `generateMetadata()`

## Blog Writing Style

- Do not use em-dashes (—) anywhere in blog post copy. Use a comma, period, or rewrite the sentence instead.
- Write in a natural, human voice. Avoid patterns that sound AI-generated.
