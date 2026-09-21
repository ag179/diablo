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

export type BusinessTier =
  | 'drywall_specialist'
  | 'drywall_secondary'
  | 'plaster_stucco'
  | 'general_contractor';

/** Raw shape, camelCased from the `drywall_leads` Supabase table. */
export interface BusinessRecord {
  name: string;
  tier: BusinessTier;
  category: string | null;
  /** Null for a handful of scraped rows — fall back to `displayType` on the derived Business. */
  type: string | null;
  subtypes: string[];
  phone: string;
  website: string;
  address: string;
  street: string | null;
  city: string;
  county: string | null;
  stateCode: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  rating: number | null;
  reviews: number | null;
  photosCount: number;
  verified: boolean;
  businessStatus: string;
  /** Raw `working_hours_csv_compatible` string, e.g. "Monday,8AM,5PM|Tuesday,...". */
  hoursRaw: string | null;
  /** Raw JSON string of Google Business Profile "about" attributes. */
  about: string | null;
  locationLink: string;
  reviewsLink: string | null;
  placeId: string;
  /** "gid_"-prefixed CID, straight from the DB — strip the prefix before building Maps URLs. */
  cid: string;
  ownerTitle: string;
  /** e.g. "shared_virtual_office_address" — flags data worth treating with suspicion. */
  dupNote: string | null;
}

export interface DayHours {
  day: string;
  open: string;
  close: string;
  /** True when Google reports the same open/close time at midnight (open all day). */
  open24h: boolean;
}

export type ReviewBucket = 'unrated' | 'emerging' | 'established' | 'well-reviewed' | 'highly-reviewed';

/** Derived, page-ready shape built from a BusinessRecord — see src/lib/business.ts. */
export interface Business extends BusinessRecord {
  slug: string;
  /** `type`, falling back to `category`, first subtype, then the tier label — always populated. */
  displayType: string;
  phoneHref: string;
  mapsUrl: string;
  /** Empty when hours data is missing or malformed — never guessed. */
  hours: DayHours[];
  /** Human-readable facts pulled from the `about` JSON — only true/populated attributes. */
  aboutAttributes: string[];
  reviewBucket: ReviewBucket;
  /** Slug of the matching src/data/cities.ts entry, when one exists. */
  citySlug: string | null;
  sharedAddress: boolean;
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
