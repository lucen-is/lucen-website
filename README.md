# lucen.is

Marketing site for Lucen — a senior-led digital marketing consultancy in Dubai.
Built with Next.js (App Router) and Tailwind CSS, deployed on Vercel.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Homepage — positioning, services, how we work |
| `/about` | Mission, vision, operating standards |
| `/contact` | Contact methods and office details |
| `/get-found-on-google` | Lead-gen landing page (not linked in navigation) |

SEO infrastructure: per-page metadata, Open Graph tags, JSON-LD
(`ProfessionalService` schema), `sitemap.xml`, and `robots.txt` are all
generated automatically.

Site-wide constants (email, phone, address, social links) live in
[`src/lib/site.ts`](src/lib/site.ts) — edit once, updates everywhere.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo, and click
   **Deploy** (no configuration needed — Vercel auto-detects Next.js).
3. In the Vercel project settings, add the custom domain `lucen.is` and update
   your DNS as instructed (A record / CNAME at your registrar).

Every push to `main` deploys to production automatically; pull requests get
preview URLs.
