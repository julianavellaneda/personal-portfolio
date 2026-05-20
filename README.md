# Personal Portfolio — Julian Avellaneda

Personal portfolio site built with React 19, TypeScript, and Vite.

## Stack

- **React 19** + **TypeScript** + **Vite 7**
- **React Router 7** (single route + SPA catch-all redirect)
- **EmailJS** for the contact form (no backend)
- **react-vertical-timeline-component** for the experience timeline
- **react-starfield** for the hero background
- **react-icons** for iconography

## Run locally

Uses Bun, but npm/pnpm/yarn also work.

```bash
bun install
bun run dev          # vite dev server
bun run build        # tsc -b && vite build
bun run preview      # serve the production build
bun run lint         # eslint
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in your EmailJS values:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

The EmailJS public key is safe to ship in client code, but enable the domain
allowlist in the EmailJS dashboard so the key can't be abused from other origins.

## Deploy

The repo includes a Netlify-style `public/_redirects` for SPA fallback routing.
Any host that supports SPA fallback (Netlify, Vercel, Cloudflare Pages) will work
— point it at `bun run build` and `dist/` as the publish directory.

## Project layout

```
src/
  App.tsx                 # main one-pager (hero, about, projects, …)
  Router.tsx              # top-level routes
  components/
    layout/               # Header, Footer
    sections/             # Hero, About, Projects, Skills, Experience, Contact, Education
```

## Roadmap

See [`PORTFOLIO_ROADMAP.md`](./PORTFOLIO_ROADMAP.md) for the phased plan of
improvements (bugs, SEO, content, design, tooling).
