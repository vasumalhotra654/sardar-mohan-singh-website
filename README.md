# Sardar Mohan Singh — React Website

A React migration of the original Wix website at
`https://ramonasinghclothes.wixsite.com/sardar-mohan-singh-1`.

Built with **React 18 · Vite · TypeScript · CSS Modules · React Helmet Async**.

---

## Quick Start

```bash
npm install
npm run dev
```

Then open http://localhost:5173

---

## Project Structure

```
sardar-mohan-singh/
├── public/
│   ├── favicon.svg
│   ├── images/           ← Place downloaded site images here (see below)
│   │   └── README.md
│   └── references/       ← Place reference JPEG files here (see below)
│       └── README.md
│
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.tsx          # Sticky header + mobile hamburger menu
│   │   │   ├── Header.module.css
│   │   │   └── index.ts
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   ├── Footer.module.css
│   │   │   └── index.ts
│   │   ├── ImageSection/
│   │   │   ├── ImageSection.tsx    # Lazy-loaded figure with centred caption
│   │   │   ├── ImageSection.module.css
│   │   │   └── index.ts
│   │   └── ReferenceSection/
│   │       ├── ReferenceSection.tsx  # Numbered list; links to JPEG or URL
│   │       ├── ReferenceSection.module.css
│   │       └── index.ts
│   │
│   ├── data/
│   │   ├── references.ts   # All 54 references with filenames / external URLs
│   │   └── images.ts       # Image map: Wix CDN URLs + intended local paths
│   │
│   ├── pages/
│   │   └── Home/
│   │       ├── HomePage.tsx        # Full page (hero → refs)
│   │       └── HomePage.module.css
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   ├── index.css           # Global variables, resets, typography
│   └── vite-env.d.ts
│
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Adding the Reference JPEGs

The client will supply JPEG scans of source documents via WeTransfer.

1. Download the ZIP from WeTransfer.
2. Place every `.jpg` file into `public/references/`.
3. Ensure each filename **exactly matches** the `imageFile` field in
   `src/data/references.ts` (e.g. `ref-01-indian-express-kirya-1968.jpg`).
4. Run `npm run dev` and verify the "(Click here.)" links open the correct image.

To add or update a reference, edit `src/data/references.ts` — the component
reads that file directly; no other changes are needed.

---

## Using Local Images Instead of Wix CDN

The site currently loads photographs from the Wix static CDN, which is fine for
production. To serve images locally:

1. Download each image from the Wix URL listed in `src/data/images.ts`.
2. Place the file in `public/images/` using the `filename` value in that record.
3. In `src/data/images.ts`, change each `src` to point to its `localPath`:

```ts
// Before (Wix CDN):
src: `https://static.wixstatic.com/media/...~mv2.jpg/...`,

// After (local):
src: '/images/sardar-mohan-singh-portrait.jpg',
```

---

## SEO

All meta tags are managed via **React Helmet Async** in `HomePage.tsx`:

| Tag | Value |
|-----|-------|
| `<title>` | Sardar Mohan Singh — Banker, Educationist, Philanthropist |
| `meta description` | 150-char biography summary |
| `meta keywords` | All 30 requested keywords |
| `og:title / og:description` | Open Graph for social sharing |
| `twitter:card` | `summary_large_image` |
| `canonical` | `https://sardarmohansigh.com` |

Update the canonical URL and og:url in `HomePage.tsx` once the production domain is confirmed.

---

## Performance Features

- `loading="lazy"` and `decoding="async"` on all `<img>` tags
- Vite code-splitting: React bundle separate from app bundle
- Sticky header does not re-render page content
- CSS variables — single source of truth for all colours
- Google Fonts loaded via `@import` at CSS parse time (preconnect hint in `index.html`)
- No JavaScript required for any visual feature (progressive enhancement)

---

## Colour Palette (matches original Wix site)

| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-primary` | `#3E432F` | Header bg, section headings |
| `--color-primary-dark` | `#232C08` | Mobile nav bg |
| `--color-primary-mid` | `#6C7054` | Muted text, ref numbers |
| `--color-primary-light` | `#999D79` | Header subtitle text |
| `--color-accent` | `#8B0000` | Links, reference links |
| `--color-highlight` | `#D3DB75` | Header text, heading underlines |
| `--color-bg-quote` | `#F4F6C3` | Quote banner background |

---

## Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at http://localhost:5173 |
| `npm run build` | TypeScript check + Vite production build → `dist/` |
| `npm run preview` | Preview the `dist/` build locally |

---

## Deployment

The `dist/` folder produced by `npm run build` is a fully static site.
Deploy to any static host: Netlify, Vercel, GitHub Pages, AWS S3 + CloudFront, etc.

For React Router's client-side routing, configure the host to serve `index.html`
for all 404 routes (already handled by the catch-all `<Route path="*">` in `App.tsx`).
