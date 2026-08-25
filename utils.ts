/* ---------------------------------------------------------------------------
 * SITE CONSTANTS — edit these first.
 *
 * Everything marked PLACEHOLDER must be replaced with real, verifiable values
 * before this site goes live. Do not publish invented license numbers, review
 * counts, years-in-business, or job counts — that is what gets a lead-gen site
 * reported, delisted, and (in California) into trouble with the CSLB.
 * ------------------------------------------------------------------------- */

export const SITE_NAME = 'Diablo Valley Drywall';
export const SITE_SHORT = 'DV Drywall';
export const SITE_URL = 'https://diablovalleydrywall.com';
export const SITE_TAGLINE = 'Drywall & ceiling repair across the Diablo Valley';

/** PLACEHOLDER — swap for your call-tracking number (CallRail / Twilio). */
export const PHONE_DISPLAY = '(925) 555-0142';
export const PHONE_HREF = 'tel:+19255550142';

/** PLACEHOLDER — point at a real inbox you monitor. */
export const COMPANY_EMAIL = 'quotes@diablovalleydrywall.com';

/**
 * PLACEHOLDER — Formspree (or Basin / Zapier webhook) endpoint.
 * Sign up, create a form, paste the endpoint here. Until you do, the forms
 * fall back to a local "thanks" message and NOTHING IS DELIVERED.
 */
export const FORM_ENDPOINT = '';

/**
 * PLACEHOLDER — the licensed contractor actually performing the work.
 * California requires the CSLB license number on any advertising for work
 * over $500. Leave blank until you have a partner operator; the license
 * strip below hides itself when this is empty.
 */
export const CSLB_LICENSE = '';

export const HOURS = 'Mon–Sat, 7am–6pm';
export const RESPONSE_PROMISE = 'Most quote requests answered the same business day.';

/** Region label used in copy and schema. */
export const REGION_NAME = 'Diablo Valley';
export const REGION_LONG = 'Contra Costa County & the Tri-Valley';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services/', label: 'Services' },
  { href: '/locations/', label: 'Service Areas' },
  { href: '/blog/', label: 'Guides' },
  { href: '/contact/', label: 'Get a Quote' },
];

/** Turn "Walnut Creek" into "walnut-creek". */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function absoluteUrl(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1)).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
