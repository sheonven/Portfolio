# AGENTS.md

## Project

Single-page Next.js 16 (App Router) portfolio site for Sheon Venrick Samaniego.
Not a monorepo, no backend, no CMS — all content is hardcoded client-side.

## Commands

- `npm run dev` — start dev server (Next dev)
- `npm run build` — production build
- `npm run start` — serve production build
- There are no lint / format / test scripts and no test files.
- `npx tsc --noEmit` — run manually for type checking.
- Note: `next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so `next build`
  does NOT typecheck. Do not assume a clean `next build` means the code typechecks.

## Toolchain quirks

- **Package manager:** npm. Both `package-lock.json` and a stale `pnpm-lock.yaml`
  exist; dependencies were installed via npm (`node_modules/.package-lock.json` present).
  Use `npm` — don't introduce pnpm commands.
- **Styling:** Tailwind CSS v4 via `@tailwindcss/postcss` and `@import 'tailwindcss'`
  (+ `tw-animate-css`) in `app/globals.css`. Dark mode uses a class-based custom variant
  (`@custom-variant dark (&:is(.dark *))`) — NOT Tailwind's default media strategy. The
  `dark` class is toggled on `<html>` in `app/page.tsx` and persisted via
  `localStorage['portfolio-theme']`.
- **UI components:** shadcn-style setup (`components.json`, style `base-nova`) but the
  primitives come from Base UI (`@base-ui/react`), not Radix. New shadcn components go in
  `components/ui/` using `cn` from `@/lib/utils`. The `components.json` alias for hooks
  (`@/hooks`) points to a directory that does not exist yet.
- **Path alias:** `@/*` → repo root (e.g. `@/components/ui/button`, `@/lib/utils`).
- **Next config:** `images.unoptimized: true`; `@vercel/analytics` rendered only when
  `NODE_ENV === 'production'`.

## Structure

- `app/` — App Router: `layout.tsx` (root layout + metadata + analytics), `page.tsx` (all
  sections: hero, about, skills, work, tools, contact, footer), `globals.css` (theme tokens).
- `components/ui/` — Base UI / shadcn-style primitives (e.g. `button.tsx`).
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge).
- `public/` — static assets.

## Gotchas

- All page content and styles are in the single `app/page.tsx` plus global CSS — there is
  no content layer, components are not split per section yet.
- No environment variables are required for dev/build; `.env*.local` is gitignored.
- No existing `AGENTS.md`, `CLAUDE.md`, CI workflows, or pre-commit config to reconcile with.
