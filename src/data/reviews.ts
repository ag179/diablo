/* ---------------------------------------------------------------------------
 * REVIEWS — intentionally empty.
 *
 * Do not invent these. Fabricated testimonials attributed to made-up people
 * are the fastest way to get a lead-gen site reported, and in California
 * they are also straightforwardly unlawful advertising.
 *
 * Fill this array only with real, attributable reviews once you have an
 * operator partner — pulled from their Google Business Profile, Yelp or Angi
 * with permission. The homepage and location pages render the reviews section
 * only when this array has entries, so an empty file simply hides it.
 * ------------------------------------------------------------------------- */

export interface Review {
  /** First name + last initial is fine; must be a real person. */
  author: string;
  /** City the job was in. */
  city: string;
  /** 1–5. */
  rating: number;
  /** The review text, verbatim. */
  text: string;
  /** Where it came from — 'Google', 'Yelp', 'Angi'. Needed for attribution. */
  source: string;
}

export const reviews: Review[] = [];
