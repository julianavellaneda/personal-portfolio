# CLAUDE.md — Project guide for Claude Code

This file is the authoritative project guide for AI assistants working in this repo.
Reflects the **current** state (post legal-page removal, 2026-05-20).
For the older agent guide see `GEMINI.md` (kept for reference, but partially stale).

---

## 1. Project overview

**Owner:** Julian Avellaneda (`javellaneda0213@gmail.com`).

**Purpose:** Personal portfolio at `/`. Nothing else — legal pages for my
published mobile apps used to live here too, but those now live on a separate
domain.

**Status:** Phase 1 of `PORTFOLIO_ROADMAP.md` is complete. Phases 2–6 (SEO,
content, design polish, tech upgrades, blog) are open. Always read the roadmap
before suggesting work — many "improvements" you might think of are already
queued there.

---

## 2. Stack

- **Runtime / package manager:** Bun (`bun.lock` is the lockfile; npm/yarn/pnpm
  also work since `package.json` is standard).
- **Framework:** React 19 + TypeScript (`tsc -b` runs before `vite build`).
- **Build tool:** Vite 7 with `@vitejs/plugin-react-swc`.
- **Router:** `react-router-dom` v7.
- **Styling:** Plain CSS files per component (`Component.tsx` ↔ `Component.css`),
  global theme variables in `src/index.css`. **Not** CSS Modules despite what
  `GEMINI.md` claims — class names are global. Migrating to Tailwind or CSS
  Modules is queued in Phase 5 of the roadmap.
- **Font:** Space Grotesk, loaded from Google Fonts in `index.html`.
- **Key libraries:**
  - `@emailjs/browser` — client-only contact form.
  - `react-vertical-timeline-component` — experience timeline.
  - `react-starfield` — animated star background on the hero.
  - `react-icons` — iconography (mostly `react-icons/fa`).

---

## 3. Directory layout

```
.
├── PORTFOLIO_ROADMAP.md      # phased plan — READ FIRST
├── CLAUDE.md                 # this file
├── GEMINI.md                 # older agent guide, partially stale
├── README.md                 # human-facing readme
├── .env.example              # template for EmailJS env vars
├── index.html                # Vite entry, font preconnects, favicon
├── public/
│   ├── _redirects            # Netlify-style SPA fallback
│   └── code-tag.svg          # favicon
└── src/
    ├── main.tsx              # ReactDOM root + BrowserRouter
    ├── Router.tsx            # all routes
    ├── App.tsx               # one-pager that composes the sections
    ├── App.css               # just #root layout
    ├── index.css             # global theme tokens (CSS variables)
    ├── vite-env.d.ts         # typed VITE_EMAILJS_* env vars
    ├── assets/               # self.png (hero photo), react.svg (unused)
    └── components/
        ├── layout/           # Header, Footer
        └── sections/         # Hero, About, Education, Projects, Skills,
                              #   Experience, Contact, ProjectCard,
                              #   ProjectDetailModal
```

---

## 4. How the app is wired

### 4.1 Routing (`src/Router.tsx`)

- `/` → `App` (the portfolio one-pager)
- `*` → `<Navigate to="/" replace />` (silent redirect — a proper 404 is queued
  in Phase 3 of the roadmap).

That's it. `react-router-dom` is kept only for the catch-all redirect and the
future 404 page; if those go away, the dependency can go too.

### 4.2 Main page (`src/App.tsx`)

Renders `Header`, `Hero`, `About`, `Education`, `Projects`, `Skills`,
`Experience`, `Contact`, `Footer` in order.

Tracks the active nav highlight with a single `IntersectionObserver`:

```ts
const SECTION_IDS = ['about', 'education', 'projects', 'skills', 'experience', 'contact'] as const;
// effect runs once on mount, queries getElementById per id, observes each.
```

> Don't reintroduce per-section `useRef`s here — the prior implementation
> rebuilt the refs object every render and was queued as a bug in Phase 1.

### 4.3 Data

All content is **hardcoded in component files**:

- Projects → `projects` array in `src/components/sections/Projects.tsx`.
- Experience → `experiences` array in `src/components/sections/Experience.tsx`.
- Skills → `skills` object in `src/components/sections/Skills.tsx`.
- Education → `education` array in `src/components/sections/Education.tsx`.

There is no CMS, no JSON, no backend. The `Project` type lives inline in
`Projects.tsx` and is duplicated by `ProjectDetailModal.tsx` — extracting a
shared `types/Project.ts` is queued in Phase 5.

### 4.4 Contact form (`src/components/sections/Contact.tsx`)

- Uses `@emailjs/browser` — no backend.
- Reads credentials from `import.meta.env.VITE_EMAILJS_*` (typed in
  `vite-env.d.ts`). They were hardcoded before Phase 1; do not put them back.
- Status state machine: `'idle' | 'sending' | 'success' | 'error'`. Button is
  disabled while `'sending'`; status renders inline below the form.
- Falls into `'error'` if any of the three env vars is missing, so a misconfigured
  deploy shows the helpful "email me directly" message instead of crashing.

### 4.5 Theming

Global tokens live at the top of `src/index.css`:

```
--primary-background    #1a1a2e
--secondary-background  #2a2a4e
--accent-color-1        #00ffc3   (teal/cyan, primary accent)
--accent-color-2        #471396   (deep purple)
--text-color-light      #e0e1dd
--text-color-medium     #a9a9a9
--text-color-dark       #1a1a2e
--border-color          #4a4e69
```

Site is **dark only** (`color-scheme: dark`). The light-mode media query that
broke the theme was removed in Phase 1; don't add it back without also wiring a
proper theme system (queued in Phase 4 of the roadmap).

---

## 5. Workflow

```bash
bun install
bun run dev       # vite dev server (HMR)
bun run build     # tsc -b && vite build → dist/
bun run lint      # eslint
bun run preview   # serve the production build
```

Deploy target is any SPA-fallback host (Netlify, Vercel, Cloudflare Pages).
`public/_redirects` handles client-side routing for hosts that honor it.

**Env file**: copy `.env.example` to `.env.local` and fill in the three
EmailJS values. `.env.local` is gitignored.

---

## 6. Conventions

- **No new top-level docs without being asked.** This repo already has
  `README.md`, `CLAUDE.md`, `GEMINI.md`, and `PORTFOLIO_ROADMAP.md`. Don't add more.
- **Don't add comments that just describe what the code does.** Only comment
  the non-obvious *why*.
- **Don't reintroduce `alert()`** for user-facing feedback. Use inline status.
- **Don't hardcode secrets / IDs.** EmailJS goes through env vars; any new
  integration should follow the same pattern.
- **Don't put `repoUrl: '#'` placeholders** on projects. `ProjectCard` already
  hides the link when the URL is missing or `'#'`; just omit the field.
- **Skill percentages are an anti-pattern** (queued for removal in Phase 3).
  If asked to add skills, don't perpetuate the `percentage` field — flag the
  roadmap entry instead.

---

## 7. Common tasks

**Add a project**
1. Edit `src/components/sections/Projects.tsx`.
2. Add an object to the `projects` array. Required: `title`, `description`,
   `imageUrl`, `technologies`, `fullDescription`, `challenges`, `solutions`.
   Optional: `demoUrl`, `repoUrl`. Omit URLs you don't have (don't use `'#'`).

**Add an experience entry**
1. Edit `src/components/sections/Experience.tsx`.
2. Prepend to the `experiences` array. `type` is `'work'` for jobs (uses the
   briefcase icon) or `'education'` (graduation cap).

**Add a skill**
1. Edit `src/components/sections/Skills.tsx`.
2. Add to the relevant category in the `skills` object. **Heads-up**: the
   `percentage` field is queued for removal — don't invest effort tuning it.
   Only `languages`, `frameworks`, and `tools` are currently rendered;
   `concepts` and `softSkills` exist in data but are commented out in the JSX.

**Change colors / spacing**
1. Edit the CSS variables in the `:root` block of `src/index.css`.

---

## 8. Where to go next

- `PORTFOLIO_ROADMAP.md` — full phased plan. Phase 2 (SEO & shareability) is
  the next likely target: meta tags, OpenGraph image, sitemap, JSON-LD Person
  schema. The roadmap lists every item; pick from there before improvising.
