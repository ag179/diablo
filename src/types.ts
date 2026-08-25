export interface ServiceDetail {
  /** Must match a `slug` in src/data/services.ts */
  slug: string;
  name: string;
  /** 1–2 sentences on why this service matters *in this city*. */
  intro: string;
  /** 4–5 concrete, city-flavoured bullets. */
  bullets: string[];
}

export interface City {
  slug: string;
  name: string;
  /** Full display name used in titles, e.g. "Walnut Creek, CA". */
  state: string;
  county: string;
  zips: string[];
  population: string;
  region: string;
  tier: 1 | 2 | 3;
  lat: number;
  lng: number;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  h1: string;
  intro: string;
  subIntro: string;
  /** Named neighbourhoods / landmarks — used for the "areas we cover" strip. */
  neighborhoods: string[];
  /** One paragraph of genuinely local, non-templated detail. */
  localDetail: string;
  /** What the housing stock is like — drives the repair angle. */
  housingNote: string;
  services: ServiceDetail[];
  /** City-specific FAQs (2–3). Merged with the global set on the page. */
  faqs: { q: string; a: string }[];
  /** Slugs of nearby cities for internal linking. */
  nearby: string[];
}

export interface Service {
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  longDescription: string;
  metaTitle: string;
  metaDescription: string;
  bullets: string[];
  /** Rough price band shown as a range with an explicit "varies" caveat. */
  priceNote: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  /** HTML body. */
  content: string;
  readMinutes: number;
  publishedDate: string;
}
