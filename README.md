# Diablo Valley Drywall — rank & rent site

Astro static site. 39 pages: homepage, 6 service pages, 20 location pages, 8 guides,
contact, plus auto-generated `sitemap.xml` and `robots.txt`.

```bash
npm install
npm run dev      # local preview at localhost:4321
npm run build    # static HTML into dist/
```

`dist/` is pure static HTML — drop it on Bolt.new, Netlify, Vercel, Cloudflare Pages
or any bucket.

---

## Before you launch — required

These are not optional polish items. Two of them are legal.

- [ ] **`src/lib/utils.ts` → `PHONE_DISPLAY` / `PHONE_HREF`.** Currently a 555
      placeholder. Use a call-tracking number (CallRail, Twilio) so you can prove
      lead volume to an operator later.
- [ ] **`src/lib/utils.ts` → `FORM_ENDPOINT`.** Empty. **Every form on the site is
      inert until you set this.** Create a Formspree/Basin form and paste the
      endpoint. The forms show a visible "not configured" warning until you do.
- [ ] **`src/lib/utils.ts` → `COMPANY_EMAIL`.** Point at an inbox you monitor.
- [ ] **`src/lib/utils.ts` → `CSLB_LICENSE`.** Blank, and the license strip hides
      itself while it is. California requires the contractor's CSLB number on
      advertising for work over $500 — fill this in with your operator partner's
      real number before you advertise, and do not invent one.
- [ ] **`astro.config.mjs` → `site`.** Set to the real domain once registered.
- [ ] **`src/data/reviews.ts`.** Deliberately empty, so the reviews section does not
      render. Populate only with real, attributable reviews from a real operator's
      Google/Yelp/Angi profile. Do not write fake ones.

## Before you launch — recommended

- [ ] Register the domain and confirm `diablovalleydrywall.com` is actually free
      (availability was checked by DNS, not whois).
- [ ] Google Search Console: verify the domain, submit `/sitemap.xml`.
- [ ] Google Analytics or Plausible in `src/layouts/Layout.astro` `<head>`.
- [ ] Run the homepage and one city page through Google's Rich Results Test.
- [ ] Line up the operator **before** the site ranks. A rank-and-rent site with
      leads and no one to service them burns the phone number's reputation fast.

---

## Structure

```
src/
├── data/
│   ├── cities.ts     ← 20 location pages. The most important file here.
│   ├── services.ts   ← 6 services
│   ├── blogs.ts      ← 8 guides
│   ├── faqs.ts       ← site-wide FAQs (merged into city pages)
│   └── reviews.ts    ← empty by design
├── lib/
│   ├── utils.ts      ← all constants live here
│   └── schema.ts     ← schema.org builders
├── components/       ← QuoteForm, Faq, CtaBand
├── layouts/Layout.astro
└── pages/
    ├── index.astro
    ├── contact.astro
    ├── services/[service].astro + index.astro
    ├── locations/[city].astro + index.astro
    ├── blog/[slug].astro + index.astro
    ├── sitemap.xml.ts
    └── robots.txt.ts
```

## Adding a city

Append an object to `cities.ts` following the `City` interface in `src/types`.
Everything else — nav, footer, sitemap, service-page cross-links, the contact
form's city dropdown — picks it up automatically.

**Write genuinely different copy.** The current 20 pages average ~1,000 words each
with a maximum pairwise 6-gram similarity of about 35%, most of which is shared
header/footer chrome. Templated location pages that differ only by city name are
the single most common reason these builds stall at "Discovered – currently not
indexed" in Search Console.

## Phase 2

Once the 20 city pages are indexed, add Walnut Creek *neighbourhood* pages —
Northgate, Ygnacio Valley, Walnut Heights, Parkmead, Rudgear Estates, Shadelands,
Larkey Park, Downtown. Near-zero competition, cheap long-tail impressions, and they
feed internal link equity into the flagship city page. Do not build them at launch;
28 pages on a brand-new domain is a quality-signal problem.

## Content notes

Nothing on this site claims years in business, job counts, certifications, awards
or customer reviews, because none of that is verifiable yet. The trust strip makes
process promises instead ("free written quotes", "texture matched", "tested before
scraped"). Keep it that way until you have an operator whose real credentials you
can put up.
