# Classic Car Memories

A vintage car restoration and Route 66 road-trip journal for retired enthusiasts.

This is a **statically pre-rendered React site**. Every route is rendered to real
HTML at build time using [`vite-react-ssg`](https://github.com/Daydreamer-riri/vite-react-ssg),
so all content — headings, articles, FAQs, testimonials, legal pages, contact
details, and blog previews — is present in the page source and fully readable
**with JavaScript disabled**. React then hydrates for interactivity (mobile menu,
accordions, cookie banner, forms).

## Tech stack

- **React 18** + **React Router DOM 6**
- **Vite 5** with **vite-react-ssg** for static pre-rendering (SSG)
- **Tailwind CSS 3** for styling
- **Express** + **compression** for production serving
- **Google Analytics (GA4)** with **Consent Mode v2** and a cookie banner

## Project structure

```
.
├── index.html                # HTML shell: fonts, GA tag, Consent Mode v2 defaults
├── server.js                 # Express server: compression, static serving, SPA/404 fallback
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/                   # robots.txt, sitemap.xml, favicon.svg, og-image.jpg
├── scripts/                  # image helper script
└── src/
    ├── main.jsx              # ViteReactSSG entry + includedRoutes
    ├── routes.jsx            # Route table + list of routes to pre-render
    ├── Layout.jsx            # Navbar + Outlet + Footer + ScrollToTop + CookieBanner
    ├── index.css             # Tailwind layers + design system
    ├── assets/
    │   ├── images.js         # ES-module imports + alt text for all local images
    │   └── images/           # local image files (hero, restorations, roadtrips, ...)
    ├── components/           # Navbar, Footer, Seo, Accordion, CookieBanner, UI, etc.
    ├── data/                 # site.js, blog.js, content.js (all editorial content)
    ├── pages/                # one component per route
    └── utils/analytics.js    # trackEvent, trackPageView, consent helpers
```

## Installation

Requires **Node 20.x**.

```bash
npm install
```

## npm scripts

| Script           | Description                                              |
| ---------------- | -------------------------------------------------------- |
| `npm run dev`    | Start the Vite dev server with hot reload.               |
| `npm run build`  | Build and **pre-render every route** to static HTML.     |
| `npm run preview`| Preview the built `dist/` with Vite's static server.     |
| `npm run serve`  | Serve `dist/` with the Express production server.        |
| `npm start`      | Alias of `npm run serve` (used by Heroku).               |

## Development

```bash
npm run dev
# open http://localhost:5173
```

## Production build

```bash
npm run build      # outputs static HTML for every route into dist/
npm run serve      # serve dist/ via Express on PORT (default 8080)
```

### Verifying JS-off rendering

After `npm run build`, open any file under `dist/` (for example
`dist/blog.html`) in a text editor, or load the site and disable JavaScript in
your browser. All content should remain visible. You can also run:

```bash
grep -c "Golden Era" dist/index.html        # content is in the homepage source
ls dist                                       # each route is pre-rendered to its own .html
```

## Deployment

The build output in `dist/` is plain static HTML/CSS/JS and can be hosted on any
static host or behind the included Express server.

### Heroku

Uses `Procfile` (`web: node server.js`) and `app.json`. `devDependencies` are
installed so the static build can run.

```bash
heroku create classic-car-memories
git push heroku main
```

The build runs via Heroku's Node buildpack; `npm start` then serves `dist/`.

### Vercel

`vercel.json` sets the build command and output directory with clean URLs.

```bash
vercel --prod
```

(No Express server needed — Vercel serves the pre-rendered static files directly.)

### Netlify

`netlify.toml` sets the build command, publish directory, Node version, and a
last-resort 404 fallback.

```bash
netlify deploy --prod
```

### AWS Amplify

`amplify.yml` defines the build (`npm ci` → `npm run build`) and publishes
`dist/`. Connect the repository in the Amplify console and it will pick up the
config automatically.

## Images

All imagery is stored locally under `src/assets/images/` and imported as ES
modules through `src/assets/images.js` (no hotlinking, no external CDN). Below-
the-fold images use native `loading="lazy"`. Every image has descriptive alt
text defined alongside it.

## Analytics & consent

- The GA4 tag and **Consent Mode v2** defaults (`analytics_storage` and
  `ad_storage` set to `denied`) are placed in `index.html` **before** GA loads.
- The cookie banner (`src/components/CookieBanner.jsx`) persists the visitor's
  choice in `localStorage` and calls `gtag('consent', 'update', …)` to grant
  consent on accept.
- `src/utils/analytics.js` exposes `trackPageView()` (fired on every route
  change) and `trackEvent()`.

## License

© Classic Car Memories. All rights reserved. Content and images are proprietary.
