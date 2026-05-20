# Portfolio Roadmap

Phased plan to take this portfolio from "primitive" to a polished, recruiter-ready site.
Each phase is independently shippable — you can stop after any phase and still come out ahead.

---

## Phase 1 — Embarrassing bugs ✅ SHIPPED

Things that were visibly broken or unprofessional. All fixed in the 2026-05-20 session.

- [x] **Footer placeholder** — `Footer.tsx` now renders `Julian Avellaneda` with a dynamic year (`new Date().getFullYear()`).
- [x] **Light-mode CSS override** — removed the `@media (prefers-color-scheme: light)` block from `index.css` and tightened `color-scheme` to `dark`.
- [x] **Vite starter leftovers** — `App.css` stripped down to just the `#root` rule. `.logo`, `.card`, `.read-the-docs`, and the `logo-spin` keyframes are gone.
- [x] **README** — replaced the Vite scaffold with a real README (stack, run instructions, env vars, deploy, project layout, link to this roadmap).
- [x] **EmailJS credentials** — moved to `import.meta.env.VITE_EMAILJS_*`; typed in `vite-env.d.ts`; `.env.example` added at repo root. **Still TODO for you**: create `.env.local` from the example, and enable the **domain allowlist** in the EmailJS dashboard so the public key can't be abused.
- [x] **Contact form UX** — `alert()` replaced with inline status messages (`idle`/`sending`/`success`/`error`), a disabled "Sending…" button while in flight, and proper `htmlFor`/`id` pairing on the form fields for a11y.
- [x] **Broken project links** — `ProjectCard.tsx` now only renders the Demo/GitHub link when the URL is real (not empty or `'#'`); link clicks `stopPropagation` so they don't also trigger the modal. `repoUrl` is now optional on the `Project` type and removed from the two existing projects.
- [x] **`.DS_Store` / `dist/`** — already gitignored (initial audit was wrong); stray local `.DS_Store` files deleted; `.env.*` / `!.env.example` added to `.gitignore` defensively.
- [x] **`sectionRefs` re-render** in `App.tsx` — refs object removed; effect now queries `getElementById` once and subscribes the IntersectionObserver a single time. Side benefit: simpler JSX.

Verified clean: `bun run build` ✅, `bun run lint` ✅.

---

## Phase 2 — SEO & shareability ✅ MOSTLY SHIPPED

Wired up in the 2026-05-20 session. Canonical host used throughout: `https://julianavellaneda.com`.
**Confirm this is your real production URL** — if not, find-replace it across
`index.html`, `public/robots.txt`, and `public/sitemap.xml`.

- [x] **Real `<title>`** and `<meta name="description">` in `index.html`.
- [x] **OpenGraph tags**: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, plus `og:image:width/height/alt` and `og:site_name`.
- [x] **Twitter card** (`summary_large_image` + title/description/image).
- [x] **`robots.txt`** and **`sitemap.xml`** in `public/`. Sitemap is just `/` now that legal pages have moved to a separate domain.
- [x] **JSON-LD `Person` schema** in `index.html` — name, jobTitle, url, image, email, sameAs (GitHub, LinkedIn). Add `alumniOf` when you decide how to phrase it.
- [x] **`theme-color`** meta + **`site.webmanifest`** (referencing the existing `/code-tag.svg`) + `apple-touch-icon` link.
- [x] **Canonical URL** meta on `index.html`.
- [ ] **OG image** — `index.html` and `sitemap.xml` reference `/og.png`. **Still TODO for you**: drop a 1200×630 PNG (name + tagline) at `public/og.png`. Until you do, social unfurls will 404 the image.
- [ ] **Proper favicon raster set** — currently the SVG favicon is reused for `apple-touch-icon` and the manifest. For full coverage drop in `favicon-16.png`, `favicon-32.png`, and `apple-touch-icon.png` (180×180) and update the `<link>`s.

---

## Phase 3 — Content & credibility ✅ SHIPPED (placeholders need your content)

Structural work landed in the 2026-05-20 session. Several items have placeholder
copy or assets that you need to fill in — search the codebase for `TODO:` to
find them.

- [x] **Replace skill percentages** — `Skills.tsx` now groups by category, uses
  Simple-Icons logos, and tiers as *Daily / Comfortable / Familiar*. No more
  fake percentage bars.
- [x] **Tighten the Hero subtitle** — now "Software engineer shipping AI-driven
  mobile apps. Teaching K–12 by day."
- [x] **Real project case studies** — `Projects.tsx` schema extended with
  `problem`, `role`, `built`, `learned`, and optional `screenshots`. Modal
  renders the new fields when present. GlucoBake and EcoWise filled in;
  two placeholder projects added. **Still TODO for you**: replace the two
  placeholders with real projects from GitHub, drop screenshots into
  `public/projects/<slug>/`, and uncomment the `screenshots` arrays.
- [x] **Resume PDF download button** in Hero. **Still TODO for you**: drop
  your résumé at `public/resume.pdf` — the link is wired but will 404 until
  the file is there.
- [x] **"Now" mini-section** — new `Now.tsx` section between About and
  Education. **Still TODO for you**: edit the three items + the
  `lastUpdated` string when your focus changes.
- [x] **Testimonials section** — new `Testimonials.tsx` with three placeholder
  cards. **Still TODO for you**: replace the placeholder quotes with real
  ones from students, parents, or coworkers (and ask permission before
  publishing names).
- [x] **Better Footer** — nav links, social icons, "Built with React + Vite",
  and a last-updated date injected at build time via Vite `define`
  (`__BUILD_DATE__`).
- [x] **Real 404 page** — `App.tsx` checks `window.location.pathname` and
  renders `NotFound` for anything that isn't `/`. SPA fallback still routes
  unknown URLs to `index.html`; the app handles them from there.

---

## Phase 4 — Design polish

Move the look from "student project" to "I'd hire this person to design my UI."

- [ ] **Rethink the Starfield background** — 1500 magenta stars on black is heavy on mobile and dated visually. Options: drop count to ~300 and use subtle white/blue stars; replace with a soft gradient + grid; or remove entirely and rely on typography.
- [ ] **Scroll-in animations** for each section (`framer-motion` / `motion`, or just IntersectionObserver-driven classes).
- [ ] **Hero treatment** — typewriter, gradient text, or animated underline. Just *something* memorable.
- [ ] **Card hover states** — currently flat; add lift + glow.
- [ ] **Consistent spacing scale** — pick 4/8/16/24/32/48/64 and stick to it.
- [ ] **Light/dark toggle** that actually works (system preference + manual override + localStorage).
- [ ] **Keyboard focus styles** — visible outlines on every interactive element for a11y.

---

## Phase 5 — Tech / code quality

Internal improvements. Not visible to visitors but make future work much faster.

- [ ] **Pick a styling system**: Tailwind, CSS Modules, or vanilla-extract. Migrate the 10+ global `.css` files.
- [ ] **Extract shared types** (`types/Project.ts`, etc.) — `Projects.tsx` and `ProjectDetailModal` duplicate the shape.
- [ ] **Lazy-load heavy sections** — `react-vertical-timeline-component` ships a sizeable CSS bundle; lazy-load `Experience`.
- [ ] **Consider dropping `react-vertical-timeline-component`** — ~50 lines of CSS gives you the same thing.
- [ ] **`vite.config.ts` tuning** — set `build.target`, chunk splitting, image optimization plugin.
- [ ] **Analytics** — Plausible / Umami / Vercel Analytics (pick one, all are <1KB).
- [ ] **CI**: GitHub Actions running `tsc --noEmit`, `eslint`, and a Lighthouse budget on PR.
- [ ] **`CLAUDE.md`** at repo root describing the project so AI assistants are immediately useful.
- [ ] **Pick one runtime** — `bun.lock` is present but scripts call `vite` not `bun --bun`. Document which to use.

---

## Phase 6 — Stretch / nice-to-haves

Only after the rest. Each of these is a small project of its own.

- [ ] **Blog / writing section** — Astro Content Collections or MDX. Even 2 posts ("What I learned shipping GlucoBake") elevates you above 90% of student portfolios.
- [ ] **`/uses` page** — tools, editor, hardware. Dev-community favorite.
- [ ] **GitHub activity feed** embed.
- [ ] **Project filtering** by tech tag.
- [ ] **Command palette** (⌘K) for navigation. Overkill, but cool.

---

## Suggested order of attack

1. **Phase 1** (a single afternoon). Stop the bleeding.
2. **Phase 2** (a few hours). Unblock LinkedIn shares.
3. **Phase 3** (a weekend). Actually have content worth reading.
4. **Phases 4–6** in whatever order interests you most.
