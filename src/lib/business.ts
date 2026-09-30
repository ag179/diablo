import type { Business, BusinessRecord, DayHours, ReviewBucket } from '../types';
import { slugify } from './utils';

/* ---------------------------------------------------------------------------
 * Pure transforms from the raw Supabase `drywall_leads` shape (BusinessRecord)
 * to the page-ready Business shape. Kept data-agnostic (no imports from
 * src/data) so it can be unit-tested and reused — see src/data/businesses.ts
 * for the city cross-referencing step, which does know about other data.
 * ------------------------------------------------------------------------- */

const TIME_RE = /^(\d{1,2})(?::(\d{2}))?\s?(AM|PM)$/i;

function to24h(token: string): string | null {
  const m = token.trim().match(TIME_RE);
  if (!m) return null;
  let hour = parseInt(m[1], 10);
  const minute = m[2] ? parseInt(m[2], 10) : 0;
  const meridiem = m[3].toUpperCase();
  if (meridiem === 'AM') {
    if (hour === 12) hour = 0;
  } else if (hour !== 12) {
    hour += 12;
  }
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}

/**
 * Parses "Monday,8AM,5PM|Tuesday,..." into day rows.
 * Returns [] rather than guessing whenever a token doesn't parse cleanly —
 * a handful of scraped rows have malformed segments, and a short page beats
 * an invented schedule.
 */
export function parseHours(hoursRaw: string | null): DayHours[] {
  if (!hoursRaw) return [];
  const segments = hoursRaw.split('|').filter(Boolean);
  const rows: DayHours[] = [];
  for (const segment of segments) {
    const parts = segment.split(',');
    if (parts.length !== 3) return [];
    const [day, openToken, closeToken] = parts;
    const open = to24h(openToken);
    const close = to24h(closeToken);
    if (!open || !close) return [];
    rows.push({ day, open, close, open24h: open === '00:00' && close === '00:00' });
  }
  return rows;
}

/** "08:00" -> "8am", "13:30" -> "1:30pm" — for reading, not for schema. */
export function formatClock(time24: string): string {
  const [h, m] = time24.split(':').map(Number);
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  const suffix = h < 12 ? 'am' : 'pm';
  return m === 0 ? `${hour12}${suffix}` : `${hour12}:${String(m).padStart(2, '0')}${suffix}`;
}

interface AboutSection {
  [attribute: string]: boolean | string;
}

/** Friendly labels for the Google Business Profile "about" attributes we surface. */
function readAboutAttributes(about: string | null): string[] {
  if (!about) return [];
  let parsed: Record<string, AboutSection>;
  try {
    parsed = JSON.parse(about);
  } catch {
    return [];
  }

  const labels: string[] = [];
  const push = (label: string) => {
    if (!labels.includes(label)) labels.push(label);
  };

  // Ordered by how distinctive the attribute is across this dataset, not by
  // Google's category order — accessibility flags are true for roughly half
  // these businesses, so pushing them first would make most directory cards
  // (which show aboutAttributes[0]) read identically.
  const fromTheBusiness = parsed['From the business'] ?? {};
  const ownershipLabels: Record<string, string> = {
    'Identifies as Latino-owned': 'Latino-owned business',
    'Identifies as Black-owned': 'Black-owned business',
    'Identifies as veteran-owned': 'Veteran-owned business',
    'Identifies as women-owned': 'Women-owned business',
  };
  for (const [key, label] of Object.entries(ownershipLabels)) {
    if (fromTheBusiness[key] === true) push(label);
  }

  const serviceOptions = parsed['Service options'] ?? {};
  const languages = serviceOptions['Language assistance'];
  if (typeof languages === 'string' && languages.split(',').length > 1) {
    push(`Speaks ${languages}`);
  }

  const crowd = parsed['Crowd'] ?? {};
  if (crowd['LGBTQ+ friendly'] === true) push('LGBTQ+ friendly');
  if (crowd['Transgender safespace'] === true) push('Transgender safe space');

  const amenities = parsed['Amenities'] ?? {};
  if (amenities['Gender-neutral restroom'] === true) push('Gender-neutral restroom');

  const payments = parsed['Payments'] ?? {};
  const acceptsCredit = payments['Credit cards'] === true;
  const acceptsDebit = payments['Debit cards'] === true;
  if (acceptsCredit && acceptsDebit) push('Accepts credit and debit cards');
  else if (acceptsCredit) push('Accepts credit cards');
  else if (acceptsDebit) push('Accepts debit cards');

  const parking = parsed['Parking'] ?? {};
  if (parking['Free parking lot'] === true) push('Free parking lot');
  else if (parking['On-site parking'] === true) push('On-site parking');
  if (parking['Free parking garage'] === true) push('Free parking garage');

  if (serviceOptions['Online estimates'] === true) push('Offers online estimates');

  const accessibility = parsed['Accessibility'] ?? {};
  const accessLabels: Record<string, string> = {
    'Wheelchair accessible entrance': 'Wheelchair-accessible entrance',
    'Wheelchair accessible parking lot': 'Wheelchair-accessible parking',
    'Wheelchair accessible restroom': 'Wheelchair-accessible restroom',
    'Wheelchair accessible seating': 'Wheelchair-accessible seating',
  };
  for (const [key, label] of Object.entries(accessLabels)) {
    if (accessibility[key] === true) push(label);
  }

  return labels;
}

const DAY_ORDER = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

/** One-line "weekdays, 8am–5pm" style summary — null when hours vary by day (detail table handles that). */
export function summarizeHours(hours: DayHours[]): string | null {
  if (hours.length === 0) return null;
  const sorted = [...hours].sort((a, b) => DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day));
  const first = sorted[0];
  const uniform = sorted.every((h) => h.open === first.open && h.close === first.close);
  if (!uniform) return null;

  const days = sorted.map((h) => h.day);
  const indices = days.map((d) => DAY_ORDER.indexOf(d));
  const isContiguous = indices.every((idx, i) => i === 0 || idx === indices[i - 1] + 1);

  let daysPhrase: string;
  if (days.length === 5 && days.join() === DAY_ORDER.slice(0, 5).join()) {
    daysPhrase = 'weekdays';
  } else if (days.length === 7) {
    daysPhrase = 'every day';
  } else if (isContiguous && days.length > 1) {
    daysPhrase = `${days[0]}–${days[days.length - 1]}`;
  } else {
    daysPhrase = days.join(', ');
  }

  const timePhrase = first.open24h ? '24 hours' : `${formatClock(first.open)}–${formatClock(first.close)}`;
  return `${daysPhrase}, ${timePhrase}`;
}

export function reviewBucket(rating: number | null, reviews: number | null): ReviewBucket {
  if (rating === null || reviews === null) return 'unrated';
  if (reviews < 10) return 'emerging';
  if (reviews < 50) return 'established';
  if (reviews < 150) return 'well-reviewed';
  return 'highly-reviewed';
}

/** Google Maps CID deep link — `cid` in the DB is "gid_"-prefixed so Postgres reads it as text. */
export function mapsUrlFromCid(cid: string): string {
  return `https://www.google.com/maps?cid=${cid.replace(/^gid_/, '')}`;
}

export function toBusinessBase(record: BusinessRecord): Omit<Business, 'citySlug'> {
  const displayType =
    record.type ?? record.category ?? record.subtypes[0] ?? TIER_META[record.tier].label;
  return {
    ...record,
    slug: slugify(record.name),
    displayType,
    phoneHref: `tel:${record.phone.replace(/[^\d+]/g, '')}`,
    mapsUrl: mapsUrlFromCid(record.cid),
    hours: parseHours(record.hoursRaw),
    aboutAttributes: readAboutAttributes(record.about),
    reviewBucket: reviewBucket(record.rating, record.reviews),
    sharedAddress:
      record.dupNote === 'shared_virtual_office_address' || record.dupNote === 'shared_address',
  };
}

export const TIER_META: Record<
  BusinessRecord['tier'],
  { label: string; pluralLabel: string; shortLabel: string; blurb: string }
> = {
  drywall_specialist: {
    label: 'Drywall specialist',
    pluralLabel: 'Drywall specialists',
    shortLabel: 'Specialist',
    blurb:
      'Businesses whose Google Business Profile lists drywall contracting as a primary trade.',
  },
  drywall_secondary: {
    label: 'Painter or handyman listing drywall',
    pluralLabel: 'Painters & handymen listing drywall',
    shortLabel: 'Painter / handyman',
    blurb:
      "Painters and handyman services whose Google listing also includes drywall repair — usually not their main specialty.",
  },
  plaster_stucco: {
    label: 'Plaster & stucco specialist',
    pluralLabel: 'Plaster & stucco specialists',
    shortLabel: 'Plaster / stucco',
    blurb: 'An adjacent trade to drywall, with overlapping tools and techniques.',
  },
  general_contractor: {
    label: 'General contractor',
    pluralLabel: 'General contractors',
    shortLabel: 'General contractor',
    blurb:
      'General contractors and remodelers surfaced by a broader search. Drywall repair may be one of many services offered rather than a specialty — worth confirming before you book.',
  },
};
