import type { City } from '../types';

/* ---------------------------------------------------------------------------
 * 20 location pages, tiered by build priority.
 *   Tier 1 — core Diablo Valley cluster, build and index these first
 *   Tier 2 — high-value satellites and hyperlocal wins
 *   Tier 3 — volume and reach, thinner margins
 *
 * Every city has genuinely different copy. Do not templatise these — near
 * duplicate location pages are the single most common reason a rank-and-rent
 * build stalls out at "discovered, currently not indexed".
 * ------------------------------------------------------------------------- */

export const cities: City[] = [
  {
    slug: 'walnut-creek',
    name: 'Walnut Creek',
    state: 'CA',
    county: 'Contra Costa County',
    zips: ['94595', '94596', '94597', '94598'],
    population: '70,000',
    region: 'Diablo Valley',
    tier: 1,
    lat: 37.9101,
    lng: -122.0652,
    metaTitle: 'Drywall Repair in Walnut Creek, CA | Ceilings, Patches & Texture',
    metaDescription:
      'Drywall and ceiling repair in Walnut Creek, CA. Holes, cracks, water stains and failed seams patched and texture-matched. Free quotes, same-day callbacks.',
    primaryKeyword: 'drywall repair Walnut Creek',
    secondaryKeywords: [
      'drywall contractor Walnut Creek',
      'ceiling repair Walnut Creek CA',
      'drywall patch Walnut Creek',
      'texture matching Walnut Creek',
    ],
    h1: 'Drywall & Ceiling Repair in Walnut Creek, CA',
    intro:
      'Walnut Creek runs heavily to homes built between the mid-1950s and the late 1970s, and that vintage has a predictable set of drywall problems: hairline cracks marching out from door headers, nail pops down hallway walls, and the wall-to-ceiling joint opening up a little more every summer as the frame moves.',
    subIntro:
      'We repair, texture-match and finish so the patch stops being visible — which matters more here than most places, because so much of the local housing stock has smooth or lightly textured walls where a sloppy blend shows from across the room.',
    neighborhoods: [
      'Downtown Walnut Creek',
      'Rossmoor',
      'Northgate',
      'Ygnacio Valley',
      'Walnut Heights',
      'Parkmead',
      'Rudgear Estates',
      'Saranap',
      'Shadelands',
      'Larkey Park',
    ],
    localDetail:
      'The split across town is real. West of Ygnacio Valley Road, around Parkmead and Walnut Heights, you get 1950s ranch homes with original board and hand-applied texture. Out toward Northgate and the Ygnacio Valley corridor the houses are newer, mostly orange peel and knockdown, and the common failure is seam cracking rather than damage. Downtown condos near Broadway Plaza are a third category again — shared walls, HOA rules, and repairs that have to be quiet and clean.',
    housingNote:
      'Roughly two-thirds of Walnut Creek housing predates 1980, so asbestos testing before any popcorn ceiling work is standard rather than optional.',
    services: [
      {
        slug: 'drywall-repair',
        name: 'Drywall Repair',
        intro:
          'The bread-and-butter job in Walnut Creek: patch, blend, texture, prime, gone. Most single-room repairs are a one-day visit.',
        bullets: [
          'Stress cracks radiating from door and window corners in 1950s–70s ranch homes',
          'Nail and screw pops along hallways where the framing has dried out',
          'Doorknob holes and moved-furniture damage',
          'Cut-outs left open after plumbing or electrical work',
          'Texture and sheen matched before priming, not after',
        ],
      },
      {
        slug: 'ceiling-repair',
        name: 'Ceiling Repair',
        intro:
          'Ceilings show every flaw under Walnut Creek’s flat afternoon light. We float wide and match texture rather than dropping in an obvious square.',
        bullets: [
          'Wall-to-ceiling joint cracks taped properly instead of re-caulked',
          'Sagging board re-screwed to framing before finishing',
          'Second-floor bathroom leaks coming through the ceiling below',
          'Can-light and fixture cut-outs closed cleanly',
          'Knockdown and orange peel patterns matched overhead',
        ],
      },
      {
        slug: 'texture-matching',
        name: 'Texture Matching',
        intro:
          'A structurally sound patch that does not match the texture still looks like a repair. This is the part most handymen skip.',
        bullets: [
          'Hand-troweled finishes on older west-side homes',
          'Orange peel and knockdown on Northgate-era construction',
          'Level 5 smooth in remodeled downtown condos',
          'Sample panels before large re-textures',
          'Whole-wall re-texture when a blend genuinely will not work',
        ],
      },
    ],
    faqs: [
      {
        q: 'How quickly can you look at a drywall repair in Walnut Creek?',
        a: 'Most Walnut Creek quote requests get a callback the same business day, and small repairs are usually scheduled within the week. Active leaks and open ceilings get moved up.',
      },
      {
        q: 'Do you work in Rossmoor and downtown condo buildings?',
        a: 'Yes. Both come with rules — Rossmoor mutuals and downtown HOAs typically want notice, insurance on file, and work confined to set hours. We plan around that rather than showing up and finding out.',
      },
      {
        q: 'My Walnut Creek home is from 1965 and has a popcorn ceiling. Can you just scrape it?',
        a: 'Not before it is tested. Acoustic ceilings applied before the early 1980s can contain asbestos, and a 1965 ceiling is squarely in that window. Testing is quick and cheap relative to the alternative.',
      },
    ],
    nearby: ['pleasant-hill', 'lafayette', 'alamo', 'rossmoor', 'saranap', 'concord'],
  },

  {
    slug: 'concord',
    name: 'Concord',
    state: 'CA',
    county: 'Contra Costa County',
    zips: ['94518', '94519', '94520', '94521'],
    population: '125,000',
    region: 'Diablo Valley',
    tier: 1,
    lat: 37.978,
    lng: -122.0311,
    metaTitle: 'Drywall Repair in Concord, CA | Holes, Ceilings & Water Damage',
    metaDescription:
      'Drywall repair in Concord, CA. Patches, ceiling repair, water damage and texture matching across Clayton Valley, Dana Estates and the Monument corridor.',
    primaryKeyword: 'drywall repair Concord CA',
    secondaryKeywords: [
      'drywall contractor Concord CA',
      'ceiling repair Concord',
      'water damage drywall Concord',
      'drywall patch Concord California',
    ],
    h1: 'Drywall & Ceiling Repair in Concord, CA',
    intro:
      'Concord is the largest city in Contra Costa County and the biggest single source of drywall work in the valley — largely because so much of it was built at once. The post-war tract boom of the 1950s and 60s put up tens of thousands of homes on similar plans, and forty to seventy years on they are failing in similar ways.',
    subIntro:
      'That is good news for repair pricing: we have seen your wall before. Same framing, same board thickness, same tape seams pulling apart in the same places.',
    neighborhoods: [
      'Clayton Valley',
      'Dana Estates',
      'Todos Santos / Downtown',
      'Monument Corridor',
      'Ygnacio Valley',
      'Sun Terrace',
      'Concord Hills',
      'Crossings',
      'Colony Park',
    ],
    localDetail:
      'Concord splits cleanly by era. The flatland tracts around Monument and Sun Terrace are 1950s–60s single-storey homes with thin board and a lot of settling cracks. Clayton Valley and Concord Hills are later and larger, mostly orange peel over standard board, with two-storey homes where upstairs bathroom leaks show up as a ceiling stain downstairs. Downtown near Todos Santos there is a pocket of genuinely old housing where you still find lath and plaster behind the drywall.',
    housingNote:
      'A large share of Concord homes were built 1950–1975, which puts almost every original acoustic ceiling in the asbestos-testing window.',
    services: [
      {
        slug: 'drywall-repair',
        name: 'Drywall Repair',
        intro:
          'High-volume, well-understood work. Concord tract homes crack in predictable places and we patch them the same way every time — properly.',
        bullets: [
          'Settling cracks above doorways in post-war single-storey tracts',
          'Failed tape seams along long hallway walls',
          'Garage-wall damage and vehicle dings',
          'Rental turnover patching between tenants',
          'Repairs finished to take paint immediately',
        ],
      },
      {
        slug: 'water-damage-drywall-repair',
        name: 'Water Damage Repair',
        intro:
          'Two-storey Clayton Valley and Crossings homes generate a steady stream of upstairs-bathroom-into-downstairs-ceiling calls.',
        bullets: [
          'Overflowed tubs and failed toilet supply lines',
          'Washing machine and water heater failures in interior laundry rooms',
          'Wet board and saturated insulation removed, not boxed back in',
          'Cavity dried before anything is closed up',
          'Stains sealed with blocking primer so they do not bleed back through paint',
        ],
      },
      {
        slug: 'ceiling-repair',
        name: 'Ceiling Repair',
        intro:
          'Concord’s low 8-foot ceilings are easier to work on than most — which keeps ceiling repair here cheaper than in the hillside towns.',
        bullets: [
          'Water-stained ceilings cut back and rebuilt',
          'Sagging acoustic ceilings assessed before scraping',
          'Cracks at the wall-to-ceiling joint properly taped',
          'Attic access and fixture cut-outs closed',
          'Texture matched to the original spray pattern',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you handle rental turnover drywall in Concord?',
        a: 'Yes, and it is a good fit — Concord has a lot of rental stock and turnover patching is fast, repeatable work. Multi-unit jobs get quoted as a batch rather than unit by unit.',
      },
      {
        q: 'My downstairs ceiling has a brown ring under the upstairs bathroom. What happens next?',
        a: 'The leak gets found and stopped first — usually a wax ring, a supply line or a shower pan. Then the wet board comes out, the cavity dries, and only then does it get closed and textured. Painting over the ring without doing that just buys a few months.',
      },
    ],
    nearby: ['pleasant-hill', 'clayton', 'walnut-creek', 'martinez', 'pacheco'],
  },

  {
    slug: 'pleasant-hill',
    name: 'Pleasant Hill',
    state: 'CA',
    county: 'Contra Costa County',
    zips: ['94523'],
    population: '34,000',
    region: 'Diablo Valley',
    tier: 1,
    lat: 37.948,
    lng: -122.0608,
    metaTitle: 'Drywall Repair in Pleasant Hill, CA | Patches, Ceilings & Texture',
    metaDescription:
      'Drywall and ceiling repair in Pleasant Hill, CA. Cracks, holes, water damage and texture matching in Gregory Gardens, Poets Corner and across town.',
    primaryKeyword: 'drywall repair Pleasant Hill CA',
    secondaryKeywords: [
      'drywall contractor Pleasant Hill',
      'ceiling repair Pleasant Hill CA',
      'drywall patching Pleasant Hill',
    ],
    h1: 'Drywall & Ceiling Repair in Pleasant Hill, CA',
    intro:
      'Pleasant Hill is one of the most repair-heavy towns in the valley for a simple reason: almost the entire city went up in a fifteen-year window after the war, and very little of it has been re-drywalled since.',
    subIntro:
      'Gregory Gardens, Poets Corner and the streets around the old Sherman Acres tracts are full of original 1950s board — thinner than modern stock, hung on framing that has been drying out for seventy years.',
    neighborhoods: [
      'Gregory Gardens',
      'Poets Corner',
      'Sherman Acres',
      'Downtown / Crescent Plaza',
      'Pleasant Hill Estates',
      'Rodgers Ranch',
      'DVC area',
    ],
    localDetail:
      'The Gregory Gardens and Poets Corner tracts are the classic Pleasant Hill drywall job — small single-storey homes, 8-foot ceilings, hand-textured walls, and seams that have opened along the same lines on every street. Around the Diablo Valley College area there is a heavy rental component with its own rhythm of turnover patching. Newer infill east toward Taylor Boulevard is standard modern board and mostly needs damage repair rather than age repair.',
    housingNote:
      'Pleasant Hill’s median home was built in the 1950s — expect original texture, thin board, and pre-1980 ceilings that need testing before removal.',
    services: [
      {
        slug: 'drywall-repair',
        name: 'Drywall Repair',
        intro:
          'Age-related cracking is the default job here, and it needs taping rather than caulk-and-paint if you want it to stay closed.',
        bullets: [
          'Seam cracks running the length of hallway and living room walls',
          'Nail pops across whole rooms in original 1950s board',
          'Corner bead damage at outside corners',
          'Holes and dents from furniture, doors and moving day',
          'Hand texture matched on original-finish walls',
        ],
      },
      {
        slug: 'texture-matching',
        name: 'Texture Matching',
        intro:
          'A lot of Pleasant Hill walls carry a hand-applied 1950s texture that no spray gun reproduces. It gets troweled.',
        bullets: [
          'Hand-troweled and skip-trowel matching on original walls',
          'Light orange peel on later remodels',
          'Sample panels before committing on large areas',
          'Smooth Level 5 where a room has been modernised',
          'Whole-wall re-texture when a patch cannot blend',
        ],
      },
      {
        slug: 'popcorn-ceiling-removal',
        name: 'Popcorn Ceiling Removal',
        intro:
          'Very common request in Pleasant Hill, and very often a pre-1980 ceiling. Testing comes first, every time.',
        bullets: [
          'Asbestos sampling before any scraping on original ceilings',
          'Full room containment and floor protection',
          'Skim-coat to smooth or re-texture to your chosen finish',
          'Painted-over acoustic ceilings assessed separately',
          'Ceiling left primed and ready for paint',
        ],
      },
    ],
    faqs: [
      {
        q: 'The cracks keep coming back after painting. Why?',
        a: 'Because paint is not a structural repair. A seam crack has to be cut out, re-taped and floated. If it has simply been filled and painted three times, the fourth time will fail too.',
      },
      {
        q: 'Is popcorn ceiling removal worth it in a 1950s Pleasant Hill house?',
        a: 'Usually yes for resale, but budget for the asbestos test first and for the fact that scraping often reveals a ceiling that needs skim-coating rather than just texture. Get both quoted together.',
      },
    ],
    nearby: ['walnut-creek', 'concord', 'martinez', 'pacheco', 'lafayette'],
  },

  {
    slug: 'lafayette',
    name: 'Lafayette',
    state: 'CA',
    county: 'Contra Costa County',
    zips: ['94549'],
    population: '25,000',
    region: 'Lamorinda',
    tier: 1,
    lat: 37.8858,
    lng: -122.118,
    metaTitle: 'Drywall Repair in Lafayette, CA | Hillside Homes, Ceilings & Texture',
    metaDescription:
      'Drywall and ceiling repair in Lafayette, CA. Hillside settling cracks, water damage and hand-troweled texture matching in Happy Valley, Burton Valley and Reliez Valley.',
    primaryKeyword: 'drywall repair Lafayette CA',
    secondaryKeywords: [
      'drywall contractor Lafayette CA',
      'ceiling repair Lafayette California',
      'texture matching Lafayette CA',
    ],
    h1: 'Drywall & Ceiling Repair in Lafayette, CA',
    intro:
      'Lafayette homes sit on hillsides, under oaks, on lots that move. That combination produces a distinctive drywall pattern: diagonal cracking at openings, cracks that reopen seasonally, and a lot of repairs on walls with custom hand-applied finishes that a standard patch will never match.',
    subIntro:
      'Work here has to be finish-quality. Lafayette houses tend to have big windows, raking natural light and wall finishes chosen deliberately — none of which forgives an average blend.',
    neighborhoods: [
      'Happy Valley',
      'Burton Valley',
      'Reliez Valley',
      'Upper Happy Valley',
      'Lafayette Downtown',
      'Trail neighborhoods',
      'Springhill',
    ],
    localDetail:
      'Happy Valley and Upper Happy Valley run to larger custom homes, many mid-century, with troweled plaster-look finishes and high or vaulted ceilings that make ceiling repair a scaffolding job rather than a stepladder one. Burton Valley is more consistent 1960s subdivision stock. Reliez Valley and the Springhill side see the most seasonal movement — cracks that open in the dry months and close in the wet ones, which is a framing story rather than a drywall story and worth diagnosing before repairing.',
    housingNote:
      'Hillside lots plus expansive clay soils mean recurring cracks are common — a repair that ignores the cause will reopen.',
    services: [
      {
        slug: 'texture-matching',
        name: 'Texture Matching',
        intro:
          'The service Lafayette actually needs. Custom troweled finishes are the norm here and they are matched by hand, not by spray.',
        bullets: [
          'Hand-troweled and Venetian-look finishes matched on custom homes',
          'Skip trowel and California knockdown on 1960s–80s stock',
          'Level 5 smooth for modern remodels with flat lighting',
          'Sample panels approved before the real wall is touched',
          'Full-wall re-texture where blending is not honest',
        ],
      },
      {
        slug: 'drywall-repair',
        name: 'Drywall Repair',
        intro:
          'Hillside settling cracks get taped and reinforced, not filled — and we will tell you when the crack is telling you something structural.',
        bullets: [
          'Diagonal cracks from window and door corners on sloped lots',
          'Recurring seasonal cracks reinforced with mesh and proper floating',
          'Damage in high-ceiling and vaulted rooms',
          'Repairs around beams, skylights and clerestory windows',
          'Honest referral out when the movement is a foundation issue',
        ],
      },
      {
        slug: 'ceiling-repair',
        name: 'Ceiling Repair',
        intro:
          'Vaulted and beamed ceilings are the norm in Lafayette. They cost more to repair because access is genuinely harder.',
        bullets: [
          'Vaulted and cathedral ceiling repairs with proper staging',
          'Cracks along beam and ridge lines',
          'Skylight surround water damage after winter storms',
          'Recessed lighting retrofits patched and blended',
          'Overhead texture matched under raking natural light',
        ],
      },
    ],
    faqs: [
      {
        q: 'The same crack in my Lafayette house comes back every summer. Can drywall repair fix it?',
        a: 'It can be made much better — cut out, meshed, taped and floated wide, it will resist reopening far longer than filler. But if the movement is seasonal and significant, the honest answer is that the drywall is reporting a soil or foundation issue, and you should have that looked at too.',
      },
      {
        q: 'Can you match a hand-troweled finish?',
        a: 'Yes, and on custom Lafayette finishes we will usually do a sample panel first and get your sign-off before touching the actual wall.',
      },
    ],
    nearby: ['orinda', 'moraga', 'walnut-creek', 'saranap', 'pleasant-hill'],
  },

  {
    slug: 'alamo',
    name: 'Alamo',
    state: 'CA',
    county: 'Contra Costa County',
    zips: ['94507'],
    population: '14,000',
    region: 'San Ramon Valley',
    tier: 1,
    lat: 37.8502,
    lng: -122.0322,
    metaTitle: 'Drywall Repair in Alamo, CA | Custom Homes, Ceilings & Smooth Finish',
    metaDescription:
      'Drywall and ceiling repair in Alamo, CA. High ceilings, custom finishes and Level 5 smooth work in Round Hill, Westside Alamo and Stone Valley.',
    primaryKeyword: 'drywall repair Alamo CA',
    secondaryKeywords: [
      'drywall contractor Alamo California',
      'ceiling repair Alamo CA',
      'Level 5 smooth finish Alamo',
    ],
    h1: 'Drywall & Ceiling Repair in Alamo, CA',
    intro:
      'Alamo is large-lot, large-house country — and the drywall work reflects it. Two-storey entries, vaulted great rooms, long uninterrupted walls and a lot of smooth or lightly textured finishes where there is nowhere for a bad patch to hide.',
    subIntro:
      'Repairs here are less about volume and more about finish quality and access. A 20-foot entry wall is a staging job before it is a drywall job.',
    neighborhoods: [
      'Round Hill',
      'Westside Alamo',
      'Stone Valley',
      'Alamo Oaks',
      'Bryan Ranch',
      'Danville Boulevard corridor',
    ],
    localDetail:
      'Round Hill and Bryan Ranch homes tend toward 1970s–90s construction with knockdown or orange peel and the tall entry walls that make even a small ceiling repair a two-person job. Westside Alamo and Alamo Oaks have older, more idiosyncratic custom homes — some with genuine plaster, some with troweled finishes that need matching by hand. Across all of it, expect high ceilings: the difference between an 8-foot and an 18-foot repair is most of the price.',
    housingNote:
      'Large custom homes with tall entries and vaulted rooms — access and staging drive cost more than square footage does.',
    services: [
      {
        slug: 'ceiling-repair',
        name: 'Ceiling Repair',
        intro:
          'Vaulted great rooms and two-storey entries. Done with proper staging so the finish is right and nothing gets dragged across your floors.',
        bullets: [
          'Two-storey entry and stairwell wall repairs',
          'Vaulted and coffered ceiling patching',
          'Skylight and clerestory water damage',
          'Chandelier and fixture relocations patched out',
          'Full floor and furniture protection as standard',
        ],
      },
      {
        slug: 'texture-matching',
        name: 'Texture Matching',
        intro:
          'On long, flat, well-lit Alamo walls the texture match is the whole job. Anything less than exact reads as a scar.',
        bullets: [
          'Level 5 smooth on modern remodels',
          'Knockdown and orange peel on 1980s–90s custom homes',
          'Hand-troweled matching on older Westside properties',
          'Sample panels signed off before work begins',
          'Whole-wall re-texture rather than a visible blend',
        ],
      },
      {
        slug: 'drywall-installation',
        name: 'Drywall Installation',
        intro:
          'Alamo generates a lot of remodel and addition work — wine rooms, home offices, ADUs, primary suite expansions.',
        bullets: [
          'Additions and primary suite expansions',
          'Garage conversions and detached ADUs',
          'Finish level agreed in writing up front',
          'Moisture-resistant board in bathrooms and wet areas',
          'Coordination with your GC, designer or architect',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why is a ceiling repair in my Alamo home quoted higher than the same repair elsewhere?',
        a: 'Height and access. A patch at 18 feet needs staging, two people and more setup and protection time than the identical patch at 8 feet. The drywall is the cheap part.',
      },
      {
        q: 'Can you work alongside our contractor or designer?',
        a: 'Yes — a lot of Alamo work is one trade inside a larger remodel. Scheduling around other trades is normal here.',
      },
    ],
    nearby: ['danville', 'walnut-creek', 'blackhawk', 'diablo', 'san-ramon'],
  },

  {
    slug: 'danville',
    name: 'Danville',
    state: 'CA',
    county: 'Contra Costa County',
    zips: ['94506', '94526'],
    population: '43,000',
    region: 'San Ramon Valley',
    tier: 1,
    lat: 37.8216,
    lng: -121.9999,
    metaTitle: 'Drywall Repair in Danville, CA | Ceilings, Remodels & Texture Matching',
    metaDescription:
      'Drywall and ceiling repair in Danville, CA. Patches, water damage, texture matching and remodel drywall in Sycamore Valley, Greenbrook and Old Town.',
    primaryKeyword: 'drywall repair Danville CA',
    secondaryKeywords: [
      'drywall contractor Danville California',
      'ceiling repair Danville CA',
      'drywall remodel Danville',
    ],
    h1: 'Drywall & Ceiling Repair in Danville, CA',
    intro:
      'Danville covers an unusually wide range of housing in a small footprint — 1910s cottages in Old Town, 1970s Greenbrook tracts, and 1990s Sycamore Valley homes with two-storey entries. Each one fails differently and each one needs a different repair approach.',
    subIntro:
      'The common thread is that Danville homeowners tend to be mid-remodel. A lot of our work here is the drywall stage of a larger project rather than an isolated repair.',
    neighborhoods: [
      'Old Town Danville',
      'Sycamore Valley',
      'Greenbrook',
      'Westside Danville',
      'Magee Ranch',
      'Diablo Road corridor',
      'Tassajara',
    ],
    localDetail:
      'Old Town is the outlier — small older homes where you occasionally open a wall and find lath and plaster under a later drywall skin, which changes the repair entirely. Greenbrook is consistent 1970s subdivision stock with orange peel and predictable seam cracking. Sycamore Valley and Magee Ranch are newer and larger, with the tall entries and vaulted family rooms that push ceiling work into staging territory. The Iron Horse Trail corridor roughly divides the older west side from the newer east.',
    housingNote:
      'Danville spans 1910s to 2000s construction — always worth confirming what is actually behind the wall before quoting a patch.',
    services: [
      {
        slug: 'drywall-repair',
        name: 'Drywall Repair',
        intro:
          'From Old Town cottage patching to two-storey Sycamore Valley walls. Different houses, same standard of finish.',
        bullets: [
          'Seam and corner cracking in 1970s Greenbrook homes',
          'Plaster-over-lath repairs in Old Town properties',
          'Damage repair in high-traffic hallways and stairwells',
          'Cut-outs from electrical, AV and smart-home installs',
          'Every patch textured and primed, not left raw',
        ],
      },
      {
        slug: 'drywall-installation',
        name: 'Drywall Installation',
        intro:
          'Danville remodels are constant. We handle the hang-tape-texture stage and hand off a wall that is ready for paint.',
        bullets: [
          'Kitchen and primary bath remodels',
          'Garage conversions, ADUs and home offices',
          'Additions and bonus rooms',
          'Level 5 smooth where the design calls for it',
          'Scheduled around your other trades',
        ],
      },
      {
        slug: 'water-damage-drywall-repair',
        name: 'Water Damage Repair',
        intro:
          'Two-storey Danville homes put bathrooms directly above living space, which is exactly where the expensive failures happen.',
        bullets: [
          'Upstairs bathroom leaks into downstairs ceilings',
          'Shower pan and wax ring failures',
          'Roof and skylight leaks after winter storms',
          'Wet insulation removed and the cavity dried first',
          'Stains sealed so they do not ghost back through paint',
        ],
      },
    ],
    faqs: [
      {
        q: 'We are mid-remodel in Danville. Can you come in for just the drywall stage?',
        a: 'Yes — that is a large share of what we do here. Give us the framing inspection date and the finish level you want and we will slot in.',
      },
      {
        q: 'Our Old Town house has plaster, not drywall. Can you still help?',
        a: 'In most cases yes. Plaster repair and drywall patching into plaster are both doable; we will tell you honestly if a wall is better off skim-coated or re-boarded than patched.',
      },
    ],
    nearby: ['alamo', 'blackhawk', 'diablo', 'san-ramon', 'walnut-creek'],
  },

  {
    slug: 'orinda',
    name: 'Orinda',
    state: 'CA',
    county: 'Contra Costa County',
    zips: ['94563'],
    population: '19,000',
    region: 'Lamorinda',
    tier: 1,
    lat: 37.8771,
    lng: -122.1797,
    metaTitle: 'Drywall Repair in Orinda, CA | Hillside Homes, Ceilings & Plaster',
    metaDescription:
      'Drywall and ceiling repair in Orinda, CA. Hillside settling cracks, older plaster walls and custom texture matching in Glorietta, Sleepy Hollow and Orinda Village.',
    primaryKeyword: 'drywall repair Orinda CA',
    secondaryKeywords: [
      'drywall contractor Orinda California',
      'ceiling repair Orinda CA',
      'plaster and drywall repair Orinda',
    ],
    h1: 'Drywall & Ceiling Repair in Orinda, CA',
    intro:
      'Orinda has some of the oldest and most architecturally distinctive housing in the valley — 1930s and 40s Tudors and Spanish revivals in the village core, mid-century moderns tucked into the hills, and a lot of walls that are not actually drywall at all.',
    subIntro:
      'That matters. Opening a wall in Orinda and finding plaster over wood lath is routine, and patching it like drywall produces a repair that cracks out within a year.',
    neighborhoods: [
      'Orinda Village',
      'Glorietta',
      'Sleepy Hollow',
      'Orinda Downs',
      'Ivy Drive',
      'Moraga Way corridor',
      'Charles Hill',
    ],
    localDetail:
      'Sleepy Hollow and Glorietta carry a lot of pre-war housing where plaster, not drywall, is the base — and where the right repair is a keyed plaster patch or a full skim, not a drywall square. The hillside mid-century homes off Ivy Drive and Charles Hill bring the other Orinda problem: steep lots, seasonal soil movement and cracks that reopen. Newer Orinda Downs construction behaves like standard modern drywall.',
    housingNote:
      'Expect plaster over lath in the older village neighbourhoods, and expect hillside movement everywhere else.',
    services: [
      {
        slug: 'drywall-repair',
        name: 'Drywall & Plaster Repair',
        intro:
          'We check what is behind the paint before quoting. Plaster and drywall are different repairs and pretending otherwise wastes your money.',
        bullets: [
          'Plaster-over-lath patching in pre-war homes',
          'Hillside settling cracks meshed, taped and floated wide',
          'Full skim-coating where a wall is past patching',
          'Damage repair around original trim and built-ins',
          'Honest assessment when movement is structural',
        ],
      },
      {
        slug: 'ceiling-repair',
        name: 'Ceiling Repair',
        intro:
          'Orinda ceilings run from low plaster in older homes to open-beam mid-century. Both need care and neither is a fast job.',
        bullets: [
          'Plaster ceiling cracks and sagging sections',
          'Open-beam and tongue-and-groove ceiling surrounds',
          'Storm and skylight water damage under the tree canopy',
          'Wall-to-ceiling joint cracking on hillside homes',
          'Overhead texture matched to original work',
        ],
      },
      {
        slug: 'texture-matching',
        name: 'Texture Matching',
        intro:
          'Period Orinda finishes were applied by hand decades ago. Matching them is a craft job and we treat it as one.',
        bullets: [
          'Period hand-troweled and sand-float finishes',
          'Mid-century smooth and light-texture walls',
          'Sample panels before touching a visible wall',
          'Level 5 smooth in modern renovations',
          'Full-wall re-texture where blending would show',
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I know whether my Orinda walls are plaster or drywall?',
        a: 'A push-pin tells you a lot — plaster is hard and will resist, drywall gives. If you are unsure, we check during the quote. It changes both the method and the price.',
      },
      {
        q: 'Do you cover Sleepy Hollow and the hill roads?',
        a: 'Yes, including the narrow ones. Access is worth mentioning when you request a quote so we bring the right vehicle and staging.',
      },
    ],
    nearby: ['moraga', 'lafayette', 'walnut-creek', 'saranap'],
  },

  {
    slug: 'moraga',
    name: 'Moraga',
    state: 'CA',
    county: 'Contra Costa County',
    zips: ['94556'],
    population: '17,000',
    region: 'Lamorinda',
    tier: 1,
    lat: 37.8349,
    lng: -122.1297,
    metaTitle: 'Drywall Repair in Moraga, CA | Ceilings, Cracks & Texture Matching',
    metaDescription:
      'Drywall and ceiling repair in Moraga, CA. Settling cracks, water damage and texture matching in Rheem Valley, Campolindo and Moraga Country Club.',
    primaryKeyword: 'drywall repair Moraga CA',
    secondaryKeywords: [
      'drywall contractor Moraga California',
      'ceiling repair Moraga CA',
      'drywall patching Moraga',
    ],
    h1: 'Drywall & Ceiling Repair in Moraga, CA',
    intro:
      'Moraga is dominated by 1960s and 70s subdivision building — Campolindo, Rheem Valley, the Country Club area — laid out across rolling hillside lots. Consistent construction, consistent failure modes, and a town small enough that we usually know the tract before we arrive.',
    subIntro:
      'The recurring job is settling cracks and seam failure on homes that have been through sixty years of wet winters and dry summers on expansive soil.',
    neighborhoods: [
      'Rheem Valley',
      'Campolindo',
      'Moraga Country Club',
      'Sanders Ranch',
      'Moraga Road corridor',
      'St. Mary’s area',
      'Bollinger Canyon',
    ],
    localDetail:
      'Campolindo and the Country Club tracts are the archetype: 1960s–70s single and two-storey homes with light texture, standard 8-foot ceilings, and cracking concentrated at door headers and along ceiling joints. Sanders Ranch is later and larger. The St. Mary’s College area adds a rental component with faster turnover work. Hillside siting throughout means seasonal movement is a real factor in whether a repair holds.',
    housingNote:
      'Predominantly 1960s–70s hillside subdivision stock — original texture, original board, and soil that moves with the seasons.',
    services: [
      {
        slug: 'drywall-repair',
        name: 'Drywall Repair',
        intro:
          'Settling and seam cracks, done properly — cut back, meshed where needed, taped, floated wide and textured.',
        bullets: [
          'Header cracks above doors and windows',
          'Long seam failures in hallways and living areas',
          'Nail pops across whole ceilings and walls',
          'Impact damage and doorknob holes',
          'Texture matched before priming',
        ],
      },
      {
        slug: 'ceiling-repair',
        name: 'Ceiling Repair',
        intro:
          'Standard-height Moraga ceilings keep this affordable — the constraint is matching the original spray texture, not access.',
        bullets: [
          'Wall-to-ceiling joint cracking properly taped',
          'Sagging board re-secured to framing',
          'Water stains sealed and blended',
          'Recessed lighting retrofit patching',
          'Original knockdown and orange peel matched',
        ],
      },
      {
        slug: 'water-damage-drywall-repair',
        name: 'Water Damage Repair',
        intro:
          'Wet Lamorinda winters plus mature tree cover means roof and gutter leaks are a bigger share of Moraga water damage than plumbing is.',
        bullets: [
          'Storm-season roof and gutter leaks along exterior walls',
          'Skylight surround damage',
          'Upstairs bathroom leaks in two-storey homes',
          'Wet insulation removed, cavity dried before closing',
          'Stain-blocking primer so rings do not return',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you charge extra to come out to Moraga?',
        a: 'No. Moraga is inside our core service area alongside Orinda and Lafayette — there is no travel surcharge.',
      },
      {
        q: 'Half my Campolindo ceiling has nail pops. Patch or re-texture?',
        a: 'If they are scattered, patch and blend. If the whole ceiling is popping, re-screwing the field and re-texturing the entire ceiling usually costs less than thirty individual patches and looks far better.',
      },
    ],
    nearby: ['orinda', 'lafayette', 'walnut-creek', 'danville'],
  },

  {
    slug: 'clayton',
    name: 'Clayton',
    state: 'CA',
    county: 'Contra Costa County',
    zips: ['94517'],
    population: '11,000',
    region: 'Diablo Valley',
    tier: 1,
    lat: 37.941,
    lng: -121.9358,
    metaTitle: 'Drywall Repair in Clayton, CA | Ceilings, Patches & Texture Matching',
    metaDescription:
      'Drywall and ceiling repair in Clayton, CA. Holes, cracks, water damage and texture matching in Oakhurst, Regency Woods and downtown Clayton.',
    primaryKeyword: 'drywall repair Clayton CA',
    secondaryKeywords: [
      'drywall contractor Clayton California',
      'ceiling repair Clayton CA',
      'drywall patch Clayton',
    ],
    h1: 'Drywall & Ceiling Repair in Clayton, CA',
    intro:
      'Clayton sits right at the foot of Mount Diablo, which gives it two things: a small-town core with genuinely old buildings, and a ring of newer hillside subdivisions built from the 1980s onward.',
    subIntro:
      'Newer construction means less age-related cracking than Concord next door — most Clayton calls are damage repair, remodel work, or ceilings after a leak.',
    neighborhoods: [
      'Downtown Clayton',
      'Oakhurst',
      'Regency Woods',
      'Peacock Creek',
      'Dana Hills',
      'Marsh Creek Road corridor',
    ],
    localDetail:
      'Oakhurst and Peacock Creek are the bulk of the housing — 1980s–90s homes around the golf course with orange peel and knockdown textures, two-storey layouts, and vaulted family rooms. Downtown Clayton has a small pocket of much older buildings. The Marsh Creek and Morgan Territory side is rural and spread out, so scheduling there works better as a half-day block than a quick stop.',
    housingNote:
      'Mostly 1980s–2000s construction, so asbestos is rarely a factor but texture matching on sprayed knockdown is the everyday challenge.',
    services: [
      {
        slug: 'drywall-repair',
        name: 'Drywall Repair',
        intro:
          'Straightforward patch-and-blend work on relatively modern board. Fast, and it should be invisible when we leave.',
        bullets: [
          'Doorknob holes, impact damage and stairwell scuffs',
          'Corner bead damage on outside corners',
          'Cut-outs from AV, alarm and electrical work',
          'Seam cracking in two-storey homes',
          'Knockdown and orange peel matched on repair',
        ],
      },
      {
        slug: 'ceiling-repair',
        name: 'Ceiling Repair',
        intro:
          'Vaulted family rooms are common in Clayton’s subdivision stock, so ceiling access is often the deciding cost factor.',
        bullets: [
          'Vaulted and two-storey ceiling repair with staging',
          'Water stains from roof and HVAC condensate leaks',
          'Sagging sections re-secured before finishing',
          'Fixture and can-light cut-outs closed',
          'Spray texture matched overhead',
        ],
      },
      {
        slug: 'texture-matching',
        name: 'Texture Matching',
        intro:
          'Almost every Clayton wall is sprayed knockdown or orange peel. Matching the knock timing and knife pressure is what makes it disappear.',
        bullets: [
          'Knockdown and orange peel matched by spray',
          'Splatter and light-lace patterns on older subdivisions',
          'Level 5 smooth for modern remodels',
          'Sample panels for large areas',
          'Whole-wall re-texture where needed',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you serve the rural Marsh Creek and Morgan Territory addresses?',
        a: 'Yes, though we usually schedule those as a dedicated block rather than a same-day squeeze-in, given the drive.',
      },
      {
        q: 'My Clayton home is from 1994. Do I need an asbestos test before ceiling work?',
        a: 'No. Asbestos in acoustic ceilings is a pre-1980 concern. A 1994 ceiling can be worked on directly.',
      },
    ],
    nearby: ['concord', 'walnut-creek', 'pleasant-hill', 'antioch'],
  },

  {
    slug: 'martinez',
    name: 'Martinez',
    state: 'CA',
    county: 'Contra Costa County',
    zips: ['94553'],
    population: '37,000',
    region: 'Diablo Valley',
    tier: 1,
    lat: 38.0194,
    lng: -122.1341,
    metaTitle: 'Drywall Repair in Martinez, CA | Old Homes, Plaster, Ceilings & Patches',
    metaDescription:
      'Drywall and plaster repair in Martinez, CA. Historic downtown homes, Alhambra Valley and post-war tracts — cracks, water damage and texture matching.',
    primaryKeyword: 'drywall repair Martinez CA',
    secondaryKeywords: [
      'drywall contractor Martinez California',
      'plaster repair Martinez CA',
      'ceiling repair Martinez CA',
    ],
    h1: 'Drywall & Plaster Repair in Martinez, CA',
    intro:
      'Martinez has the oldest housing stock of any city in this service area. The downtown and Alhambra Valley neighbourhoods include Victorians and early-1900s homes where the walls are plaster over lath, sometimes with a later drywall skin over the top.',
    subIntro:
      'That makes Martinez the town where diagnosing the wall matters most. A drywall patch dropped into a plaster wall will crack out along its edges within a season.',
    neighborhoods: [
      'Downtown Martinez',
      'Alhambra Valley',
      'Vine Hill',
      'Muir Station',
      'Virginia Hills',
      'Franklin Hills',
      'Morello Heights',
    ],
    localDetail:
      'Downtown Martinez and the streets around the old John Muir property are genuinely historic — plaster walls, picture rails, and repairs that need to respect original trim. Vine Hill and Muir Station are post-war tract housing that behaves like Concord. Virginia Hills and Franklin Hills are hillside and newer. Three different repair approaches inside one small city, which is why we ask about the build year before quoting.',
    housingNote:
      'Martinez spans 1890s Victorians to 1990s hillside homes — always confirm plaster versus drywall before the first cut.',
    services: [
      {
        slug: 'drywall-repair',
        name: 'Drywall & Plaster Repair',
        intro:
          'Historic-home repair done right: keyed plaster patching where the wall is plaster, drywall where it is drywall.',
        bullets: [
          'Plaster over wood lath patched and keyed properly',
          'Full skim-coating for walls past patching',
          'Post-war tract cracking in Vine Hill and Muir Station',
          'Repairs worked around original moldings and picture rails',
          'Careful, low-dust work in occupied older homes',
        ],
      },
      {
        slug: 'water-damage-drywall-repair',
        name: 'Water Damage Repair',
        intro:
          'Older Martinez roofs and original plumbing generate a steady share of the water damage calls in this area.',
        bullets: [
          'Roof leaks along exterior walls after winter storms',
          'Failing galvanised supply lines in pre-war homes',
          'Ceiling stains under upstairs bathrooms',
          'Wet lath and plaster removed back to sound material',
          'Blocking primer so old stains do not resurface',
        ],
      },
      {
        slug: 'ceiling-repair',
        name: 'Ceiling Repair',
        intro:
          'Plaster ceilings sag before they fail. Catching one early is far cheaper than replacing the whole plane.',
        bullets: [
          'Sagging plaster ceilings assessed and re-secured',
          'Cracks along ceiling joints and cornices',
          'Water-stained ceilings cut back and rebuilt',
          'Modern drywall overlay where plaster is beyond repair',
          'Texture matched or left smooth as the original',
        ],
      },
    ],
    faqs: [
      {
        q: 'My Martinez house is from 1912. Do you work on plaster?',
        a: 'Yes. Plaster over lath is normal here and we repair it as plaster — patched and keyed, or skim-coated — rather than cutting in a drywall square that will crack out.',
      },
      {
        q: 'Is it worth replacing plaster with drywall?',
        a: 'Sometimes, but not automatically. Plaster is harder, quieter and often better than what would replace it. If it is largely sound, repairing is usually cheaper and better; if it is failing across whole rooms, re-boarding may win. We will give you the honest comparison.',
      },
    ],
    nearby: ['pacheco', 'pleasant-hill', 'concord', 'walnut-creek'],
  },

  /* ------------------------------ TIER 2 ------------------------------ */

  {
    slug: 'rossmoor',
    name: 'Rossmoor',
    state: 'CA',
    county: 'Contra Costa County',
    zips: ['94595'],
    population: '9,500',
    region: 'Walnut Creek',
    tier: 2,
    lat: 37.883,
    lng: -122.085,
    metaTitle: 'Drywall & Ceiling Repair in Rossmoor, Walnut Creek CA',
    metaDescription:
      'Drywall and ceiling repair for Rossmoor manors and co-ops in Walnut Creek, CA. Water damage between units, ceiling stains and texture matching, worked around mutual rules.',
    primaryKeyword: 'drywall repair Rossmoor Walnut Creek',
    secondaryKeywords: [
      'Rossmoor ceiling repair',
      'drywall contractor Rossmoor CA',
      'Rossmoor water damage ceiling',
    ],
    h1: 'Drywall & Ceiling Repair in Rossmoor, Walnut Creek',
    intro:
      'Rossmoor is a 55+ community of roughly 6,700 units in Tice Valley, most of them built between the mid-1960s and the 1990s. Stacked manors, shared walls, original ceilings, and a very specific set of drywall problems that come with all three.',
    subIntro:
      'The one we see most: water from an upstairs unit appearing as a ceiling stain downstairs. It is rarely the downstairs owner’s plumbing and it is never solved by paint.',
    neighborhoods: [
      'Tice Valley',
      'Golden Rain Road',
      'Rossmoor Parkway',
      'Terra Granada',
      'Skycrest',
      'Ptarmigan',
      'Waterford area',
      'Creekside',
    ],
    localDetail:
      'Work inside Rossmoor runs on the mutuals’ rules, not ours. Most alterations need approval through Mutual Operations before a tool comes out, contractors need current insurance on file, and work hours are restricted so your neighbours are not living inside a renovation. We plan for that up front — it is the difference between a job that starts on schedule and one that gets stopped at the gate. Many original ceilings here also predate 1980, which means acoustic ceiling work starts with a test, not a scraper.',
    housingNote:
      'Stacked manors and co-op ownership: the leak, the damage and the responsibility are often in three different places. Get the source confirmed before repairs are scheduled.',
    services: [
      {
        slug: 'water-damage-drywall-repair',
        name: 'Water Damage Repair',
        intro:
          'The single most common Rossmoor call. Handled in the right order: find the source, stop it, dry it, then close it.',
        bullets: [
          'Ceiling stains from an upstairs manor’s bathroom or kitchen',
          'Water heater and supply line failures in closets',
          'Wet insulation and board removed rather than painted over',
          'Cavity dried before anything is closed up',
          'Stain-blocking primer so the ring does not come back',
        ],
      },
      {
        slug: 'ceiling-repair',
        name: 'Ceiling Repair',
        intro:
          'Low, flat, original ceilings — easy access, but the texture is decades old and matching it is the real work.',
        bullets: [
          'Water-damaged ceiling sections cut back and rebuilt',
          'Original spray texture matched, not approximated',
          'Sagging board re-secured to framing',
          'Light fixture and fan cut-outs closed cleanly',
          'Quiet, contained work that respects neighbours',
        ],
      },
      {
        slug: 'popcorn-ceiling-removal',
        name: 'Popcorn Ceiling Removal',
        intro:
          'Popular during Rossmoor remodels — and in original units it is a pre-1980 ceiling until a lab says otherwise.',
        bullets: [
          'Asbestos sampling before any scraping in original manors',
          'Full containment and floor protection in occupied units',
          'Skim-coat to smooth or re-texture to your preference',
          'Coordinated with your mutual’s alteration approval',
          'Ceiling left primed and ready for paint',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you know how the Rossmoor alteration and approval process works?',
        a: 'Yes. Most work needs sign-off through Mutual Operations before it starts, and contractors need current insurance on file. We will tell you which approvals your job needs during the quote rather than discovering it on day one.',
      },
      {
        q: 'Water is coming through my ceiling from the manor above. Who pays?',
        a: 'That depends on your mutual’s rules and where the failure was, and it is worth getting the source formally identified before repairs begin. We can document the damage and the cause for that conversation, but we cannot decide it for you.',
      },
      {
        q: 'Can you work within Rossmoor’s hours?',
        a: 'Yes — and we plan the job around them from the start, including staging and clean-up, so it does not run long into the evening.',
      },
    ],
    nearby: ['walnut-creek', 'saranap', 'alamo', 'lafayette'],
  },

  {
    slug: 'saranap',
    name: 'Saranap',
    state: 'CA',
    county: 'Contra Costa County',
    zips: ['94595'],
    population: '5,300',
    region: 'Walnut Creek',
    tier: 2,
    lat: 37.888,
    lng: -122.079,
    metaTitle: 'Drywall Repair in Saranap, CA | Walnut Creek & Lafayette Border',
    metaDescription:
      'Drywall and ceiling repair in Saranap, CA — the unincorporated area between Walnut Creek and Lafayette. Older homes, plaster, cracks and texture matching.',
    primaryKeyword: 'drywall repair Saranap CA',
    secondaryKeywords: [
      'Saranap drywall contractor',
      'ceiling repair Saranap',
      'drywall repair Boulevard Way Walnut Creek',
    ],
    h1: 'Drywall & Ceiling Repair in Saranap, CA',
    intro:
      'Saranap is the unincorporated pocket between Walnut Creek and Lafayette, along Boulevard Way and Saranap Avenue. It is older than either of its neighbours in places, with homes going back to the 1920s and 30s alongside post-war infill.',
    subIntro:
      'That age range means the first question is always what the wall is actually made of — Saranap has genuine plaster in it, not just drywall.',
    neighborhoods: [
      'Boulevard Way',
      'Saranap Avenue',
      'Warren Road',
      'Flora Avenue',
      'Olympic Boulevard corridor',
      'Tice Valley edge',
    ],
    localDetail:
      'Because Saranap is unincorporated county rather than city, permitting and inspections run through Contra Costa County rather than Walnut Creek — worth knowing if your drywall work is part of a larger permitted project. The housing is a genuine mix: small older cottages along Boulevard Way with plaster walls and low ceilings, mid-century infill on the Tice Valley side, and a scattering of newer rebuilds. Lot sizes are tight and access is often narrow.',
    housingNote:
      'Mixed 1920s–1960s stock, plaster in the oldest homes, tight lots and narrow access in much of the area.',
    services: [
      {
        slug: 'drywall-repair',
        name: 'Drywall & Plaster Repair',
        intro:
          'We identify plaster versus drywall before quoting, because in Saranap it genuinely could be either.',
        bullets: [
          'Plaster over lath patched and keyed in pre-war cottages',
          'Standard drywall patching in post-war and rebuilt homes',
          'Settling cracks at door and window headers',
          'Repairs worked around original trim',
          'Texture matched to whatever is already on the wall',
        ],
      },
      {
        slug: 'ceiling-repair',
        name: 'Ceiling Repair',
        intro:
          'Low older ceilings mean easy access — the challenge is matching decades-old finishes and dealing with what is above them.',
        bullets: [
          'Plaster ceiling cracks and sagging sections',
          'Water stains from roof and gutter leaks',
          'Wall-to-ceiling joint cracking',
          'Fixture cut-outs closed cleanly',
          'Original texture matched or left smooth',
        ],
      },
      {
        slug: 'texture-matching',
        name: 'Texture Matching',
        intro:
          'Saranap walls carry everything from 1930s sand float to 1990s knockdown. Each gets matched on its own terms.',
        bullets: [
          'Period sand-float and hand-troweled finishes',
          'Mid-century light textures',
          'Knockdown and orange peel on newer rebuilds',
          'Sample panels before large areas',
          'Full-wall re-texture where a blend would show',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is Saranap part of Walnut Creek?',
        a: 'It has a Walnut Creek mailing address and a 94595 ZIP but it is unincorporated Contra Costa County, so permits and inspections run through the county rather than the city. That matters if the drywall is part of a permitted remodel.',
      },
      {
        q: 'Access to my street is tight. Is that a problem?',
        a: 'Not if you mention it. Narrow access is normal in Saranap — we just bring the right vehicle and plan material handling around it.',
      },
    ],
    nearby: ['walnut-creek', 'lafayette', 'rossmoor', 'pleasant-hill'],
  },

  {
    slug: 'blackhawk',
    name: 'Blackhawk',
    state: 'CA',
    county: 'Contra Costa County',
    zips: ['94506'],
    population: '10,000',
    region: 'San Ramon Valley',
    tier: 2,
    lat: 37.8188,
    lng: -121.908,
    metaTitle: 'Drywall Repair in Blackhawk, CA | Custom Homes, High Ceilings & Smooth Finish',
    metaDescription:
      'Drywall and ceiling repair in Blackhawk, CA. Two-storey entries, vaulted rooms, Level 5 smooth finish and texture matching in the Blackhawk community.',
    primaryKeyword: 'drywall repair Blackhawk CA',
    secondaryKeywords: [
      'Blackhawk drywall contractor',
      'ceiling repair Blackhawk California',
      'Level 5 smooth finish Blackhawk',
    ],
    h1: 'Drywall & Ceiling Repair in Blackhawk, CA',
    intro:
      'Blackhawk is a gated community of large custom homes built largely between the late 1970s and the 2000s, wrapped around two golf courses at the foot of Mount Diablo. The drywall work here is defined by scale: tall entries, vaulted great rooms, long uninterrupted walls and finishes that were chosen, not defaulted to.',
    subIntro:
      'Access is the other defining factor. Gate registration, HOA notice and job-site standards are part of the quote, not an afterthought.',
    neighborhoods: [
      'Blackhawk Country Club',
      'Silver Maple',
      'Hidden Oaks',
      'Saddleback',
      'Falcon Ridge',
      'Blackhawk Plaza area',
    ],
    localDetail:
      'Blackhawk homes push almost every drywall job up a cost tier for the same reason: height. A crack in a 20-foot entry wall needs staging, two people and a full day of protection and setup before the compound comes out. Finishes run to smooth or very light texture in the more recent remodels and knockdown in the original 1980s builds, and on walls that big a mismatch is visible from the street-facing windows. Gate access needs arranging in advance for every visit, including material deliveries.',
    housingNote:
      'Large custom homes, 1978–2005, with tall entries and vaulted rooms. Staging and protection drive cost as much as the repair does.',
    services: [
      {
        slug: 'ceiling-repair',
        name: 'Ceiling & High-Wall Repair',
        intro:
          'The signature Blackhawk job. Proper scaffolding, full protection, and a finish that holds up under all that natural light.',
        bullets: [
          'Two-storey entry and stairwell wall repairs',
          'Vaulted, coffered and tray ceiling patching',
          'Skylight and clerestory water damage',
          'Chandelier and fixture relocations closed out',
          'Complete floor, stair and furniture protection',
        ],
      },
      {
        slug: 'texture-matching',
        name: 'Texture Matching & Level 5',
        intro:
          'On walls this large and this well lit, the match has to be exact. Often the honest answer is to re-finish the whole plane.',
        bullets: [
          'Level 5 smooth for contemporary remodels',
          'Original 1980s knockdown matched on untouched rooms',
          'Hand-troweled and specialty finishes',
          'Sample panels approved before work starts',
          'Full-wall or full-ceiling re-finish over a visible blend',
        ],
      },
      {
        slug: 'drywall-installation',
        name: 'Drywall Installation',
        intro:
          'Blackhawk remodels are substantial — wine rooms, home theatres, gyms, primary suite rebuilds, casitas.',
        bullets: [
          'Home theatre and media rooms, including sound-rated assemblies',
          'Wine rooms, gyms and home offices',
          'Primary suite and bathroom rebuilds',
          'Casitas, pool houses and ADUs',
          'Scheduled around your GC and other trades',
        ],
      },
    ],
    faqs: [
      {
        q: 'How does gate access work?',
        a: 'You register us with the gate ahead of each visit, or arrange standing access for a multi-day job. Give us the requirements when you book and we will work to them — including for material deliveries.',
      },
      {
        q: 'Why does a small patch in a Blackhawk entry cost so much more than the same patch in a bedroom?',
        a: 'Almost entirely staging and protection. Getting safely to 20 feet, covering the stairs and floors properly, and finishing overhead to a standard that survives that light takes far longer than the patch itself.',
      },
    ],
    nearby: ['danville', 'diablo', 'alamo', 'san-ramon'],
  },

  {
    slug: 'diablo',
    name: 'Diablo',
    state: 'CA',
    county: 'Contra Costa County',
    zips: ['94528'],
    population: '600',
    region: 'San Ramon Valley',
    tier: 2,
    lat: 37.8388,
    lng: -121.9569,
    metaTitle: 'Drywall & Plaster Repair in Diablo, CA | Historic Homes & Custom Finishes',
    metaDescription:
      'Drywall and plaster repair in Diablo, CA. Historic country club village homes, custom finishes and careful repair work on narrow-access properties.',
    primaryKeyword: 'drywall repair Diablo CA',
    secondaryKeywords: [
      'Diablo CA drywall contractor',
      'plaster repair Diablo California',
      'ceiling repair Diablo CA',
    ],
    h1: 'Drywall & Plaster Repair in Diablo, CA',
    intro:
      'Diablo is a tiny unincorporated village of a few hundred homes at the base of Mount Diablo, built around the country club that started as a resort in the 1910s. Some of the housing is genuinely a century old, and it is treated accordingly.',
    subIntro:
      'This is careful, low-volume work: original plaster, original trim, narrow lanes and mature landscaping that a work truck has to respect.',
    neighborhoods: [
      'Diablo Country Club',
      'Alameda Diablo',
      'Calle Arroyo',
      'Caballo Ranchero',
      'Diablo Road corridor',
    ],
    localDetail:
      'The oldest Diablo homes date to the resort era and have plaster walls, plaster ceilings and detailing that is not replaceable — so the default approach is repair and conserve rather than cut and replace. Later custom homes on the surrounding lanes are conventional drywall with high-end finishes. Access is the practical constraint throughout: narrow lanes, tight driveways, and neighbours close enough that noise and dust control genuinely matter.',
    housingNote:
      'A century of building in one small village — historic plaster next door to modern custom drywall. Nothing here is a template job.',
    services: [
      {
        slug: 'drywall-repair',
        name: 'Plaster & Drywall Repair',
        intro:
          'Conservative repair on historic walls: patch and key the plaster, keep the original detailing, avoid unnecessary demolition.',
        bullets: [
          'Historic plaster over lath repaired rather than replaced',
          'Cracks worked around original moldings and casings',
          'Skim-coating where a wall has been patched too many times',
          'Conventional drywall repair on newer custom homes',
          'Low-dust methods in occupied historic rooms',
        ],
      },
      {
        slug: 'ceiling-repair',
        name: 'Ceiling Repair',
        intro:
          'Old plaster ceilings and modern vaulted ones sit side by side in Diablo. They are not the same job.',
        bullets: [
          'Sagging historic plaster ceilings stabilised',
          'Cracks along cornices and ceiling joints',
          'Storm-season roof leak damage',
          'Vaulted ceiling repair on newer homes',
          'Original finish matched or restored smooth',
        ],
      },
      {
        slug: 'texture-matching',
        name: 'Texture & Finish Matching',
        intro:
          'Period finishes are matched by hand and sampled first. Nothing gets sprayed onto a hundred-year-old wall on a guess.',
        bullets: [
          'Period sand-float and troweled finishes',
          'Smooth plaster finish restoration',
          'Modern Level 5 smooth on renovated rooms',
          'Sample panels for every non-standard finish',
          'Full-plane refinishing when blending is not honest',
        ],
      },
    ],
    faqs: [
      {
        q: 'Will you replace my plaster with drywall?',
        a: 'Only if it is genuinely past saving, and we will say so plainly either way. In a historic Diablo home the default is to repair the plaster — it is usually the better wall and it is part of what the house is.',
      },
      {
        q: 'The lane to our house is very narrow. Is that workable?',
        a: 'Yes. It is normal in Diablo. Mention it when you book and we will size the vehicle and plan material handling to suit.',
      },
    ],
    nearby: ['blackhawk', 'danville', 'alamo', 'clayton'],
  },

  {
    slug: 'pacheco',
    name: 'Pacheco',
    state: 'CA',
    county: 'Contra Costa County',
    zips: ['94553'],
    population: '4,000',
    region: 'Diablo Valley',
    tier: 2,
    lat: 37.9827,
    lng: -122.0716,
    metaTitle: 'Drywall Repair in Pacheco, CA | Patches, Ceilings & Water Damage',
    metaDescription:
      'Drywall and ceiling repair in Pacheco, CA. Holes, cracks, water damage and texture matching for homes between Martinez, Concord and Pleasant Hill.',
    primaryKeyword: 'drywall repair Pacheco CA',
    secondaryKeywords: [
      'Pacheco drywall contractor',
      'ceiling repair Pacheco California',
      'water damage drywall Pacheco',
    ],
    h1: 'Drywall & Ceiling Repair in Pacheco, CA',
    intro:
      'Pacheco is a small unincorporated community wedged between Martinez, Concord and Pleasant Hill, with modest older housing along the Pacheco Boulevard corridor and newer pockets around it.',
    subIntro:
      'Smaller homes and lower ceilings keep repair costs down here — this is one of the more affordable places in the valley to have drywall work done properly.',
    neighborhoods: [
      'Pacheco Boulevard',
      'Center Avenue',
      'Camino Diablo',
      'Windhover',
      'Morello Avenue edge',
    ],
    localDetail:
      'Much of Pacheco’s older housing is single-storey and modest in size — quick access, standard 8-foot ceilings, and repairs that do not need staging. The area also sits low near the Walnut Creek channel and has a history of flooding, so ground-floor water damage repair comes up more often here than its size would suggest. As unincorporated county, permitted work runs through Contra Costa County rather than a city building department.',
    housingNote:
      'Modest single-storey homes, low ceilings, easy access — and a low-lying location that makes ground-level water damage more common.',
    services: [
      {
        slug: 'water-damage-drywall-repair',
        name: 'Water Damage Repair',
        intro:
          'Ground-floor water damage is over-represented in Pacheco. Repaired in the right order, with the cavity actually dried.',
        bullets: [
          'Ground-level flood and storm water damage',
          'Wet board cut back above the water line to sound material',
          'Saturated insulation removed, not boxed back in',
          'Cavity dried before anything is closed up',
          'Stain-blocking primer on every affected surface',
        ],
      },
      {
        slug: 'drywall-repair',
        name: 'Drywall Repair',
        intro:
          'Small homes, simple access, straightforward pricing. Most Pacheco repairs are a single short visit.',
        bullets: [
          'Holes, dents and doorknob damage',
          'Settling cracks in older single-storey homes',
          'Corner bead repair',
          'Rental turnover patching',
          'Texture matched and primed ready for paint',
        ],
      },
      {
        slug: 'ceiling-repair',
        name: 'Ceiling Repair',
        intro:
          'Standard-height ceilings and no staging needed — the cheapest ceiling repairs in our service area.',
        bullets: [
          'Water-stained ceilings cut back and rebuilt',
          'Sagging board re-secured',
          'Wall-to-ceiling joint cracks taped',
          'Fixture cut-outs closed',
          'Spray texture matched overhead',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you cover Pacheco even though it is small?',
        a: 'Yes. It sits between three cities we work in daily, so it is an easy stop with no travel surcharge.',
      },
      {
        q: 'We had water on the floor. How far up does the drywall need to come out?',
        a: 'Higher than the visible line, almost always. Board wicks moisture upward, so it gets cut back to material that reads dry on a meter — typically well above where the staining stops.',
      },
    ],
    nearby: ['martinez', 'pleasant-hill', 'concord', 'walnut-creek'],
  },

  {
    slug: 'san-ramon',
    name: 'San Ramon',
    state: 'CA',
    county: 'Contra Costa County',
    zips: ['94582', '94583'],
    population: '85,000',
    region: 'San Ramon Valley',
    tier: 2,
    lat: 37.7799,
    lng: -121.978,
    metaTitle: 'Drywall Repair in San Ramon, CA | Ceilings, Patches & Remodel Drywall',
    metaDescription:
      'Drywall and ceiling repair in San Ramon, CA. Patches, water damage and texture matching in Dougherty Valley, Windemere, Gale Ranch and Twin Creeks.',
    primaryKeyword: 'drywall repair San Ramon CA',
    secondaryKeywords: [
      'drywall contractor San Ramon California',
      'ceiling repair San Ramon CA',
      'drywall patch Dougherty Valley',
    ],
    h1: 'Drywall & Ceiling Repair in San Ramon, CA',
    intro:
      'San Ramon is newer than most of the valley — Dougherty Valley, Windemere and Gale Ranch largely went up after 1997, and even the older Twin Creeks side is mostly 1970s and 80s. Newer construction changes the work: less age-related cracking, more damage repair and remodel drywall.',
    subIntro:
      'What San Ramon does have in abundance is tall two-storey entries and open-plan great rooms, which puts a lot of otherwise simple repairs up on staging.',
    neighborhoods: [
      'Dougherty Valley',
      'Windemere',
      'Gale Ranch',
      'Twin Creeks',
      'Bishop Ranch area',
      'Old Ranch',
      'Canyon Lakes',
      'Bollinger Canyon',
    ],
    localDetail:
      'The Dougherty Valley communities are the most consistent housing in our whole service area — built fast, built recently, built similarly. Textures are light orange peel or smooth, ceilings are high, and the common calls are impact damage, remodel work and the occasional upstairs plumbing failure. Twin Creeks and Canyon Lakes are older and behave more like Danville. HOA rules across much of San Ramon govern contractor hours and parking, so worth checking before the day.',
    housingNote:
      'Mostly post-1980 and much of it post-1997 — no asbestos concern, but tall ceilings and light textures that show every imperfection.',
    services: [
      {
        slug: 'drywall-repair',
        name: 'Drywall Repair',
        intro:
          'Modern board, modern texture, clean patches. The finish standard is high because these walls are flat and well lit.',
        bullets: [
          'Impact damage in stairwells and hallways',
          'Doorknob holes and furniture damage',
          'TV mount and AV cut-outs closed properly',
          'Seam cracking in fast-built two-storey homes',
          'Light orange peel and smooth finishes matched',
        ],
      },
      {
        slug: 'ceiling-repair',
        name: 'Ceiling & High-Wall Repair',
        intro:
          'Two-storey entries and open great rooms are standard in Dougherty Valley — and they need proper staging.',
        bullets: [
          'Two-storey entry and stairwell walls',
          'Vaulted great room ceilings',
          'Upstairs bathroom leaks into downstairs ceilings',
          'Recessed lighting and fan retrofits',
          'Overhead texture matched under skylight light',
        ],
      },
      {
        slug: 'drywall-installation',
        name: 'Drywall Installation',
        intro:
          'San Ramon generates steady remodel volume — offices, media rooms, garage conversions and ADUs.',
        bullets: [
          'Home office and media room build-outs',
          'Garage conversions and ADUs',
          'Kitchen and bath remodels',
          'Level 5 smooth for modern interiors',
          'Coordinated with your GC and HOA rules',
        ],
      },
    ],
    faqs: [
      {
        q: 'My San Ramon home is only fifteen years old and the walls are already cracking. Is that normal?',
        a: 'It is common. Fast-built homes settle and the framing dries out, and seam cracks at headers and along ceiling joints are the usual result. They are straightforward to repair permanently — cut, tape, float, texture.',
      },
      {
        q: 'Our HOA restricts contractor hours. Is that a problem?',
        a: 'No, it is normal across Dougherty Valley. Tell us the window when you book and we will schedule the job to fit inside it.',
      },
    ],
    nearby: ['danville', 'blackhawk', 'dublin', 'alamo', 'pleasanton'],
  },

  /* ------------------------------ TIER 3 ------------------------------ */

  {
    slug: 'dublin',
    name: 'Dublin',
    state: 'CA',
    county: 'Alameda County',
    zips: ['94568'],
    population: '72,000',
    region: 'Tri-Valley',
    tier: 3,
    lat: 37.7022,
    lng: -121.9358,
    metaTitle: 'Drywall Repair in Dublin, CA | Patches, Ceilings & Texture Matching',
    metaDescription:
      'Drywall and ceiling repair in Dublin, CA. Holes, cracks, water damage and texture matching across Dublin Ranch, Emerald Glen and West Dublin.',
    primaryKeyword: 'drywall repair Dublin CA',
    secondaryKeywords: [
      'drywall contractor Dublin California',
      'ceiling repair Dublin CA',
      'drywall patch Dublin Ranch',
    ],
    h1: 'Drywall & Ceiling Repair in Dublin, CA',
    intro:
      'Dublin has grown faster than almost anywhere in the Tri-Valley, and most of what stands today went up after 2000. East Dublin — Dublin Ranch, Positano, the Emerald Glen area — is new enough that age cracking is rare and damage repair dominates.',
    subIntro:
      'West Dublin is the older half, with 1960s and 70s tract housing that behaves much more like Concord or Pleasant Hill.',
    neighborhoods: [
      'Dublin Ranch',
      'Positano',
      'Emerald Glen',
      'West Dublin',
      'Jordan Ranch',
      'Schaefer Ranch',
      'Dublin Boulevard corridor',
    ],
    localDetail:
      'The east side is dense modern construction — townhomes, condos and tightly spaced single-family homes with light textures and tall ceilings. Shared-wall living means water intrusion from a neighbouring or upstairs unit is a recurring cause of damage, and HOA rules commonly govern access, parking and work hours. West Dublin, around Dublin Boulevard and the older streets, has the more traditional repair profile: settling cracks, nail pops and original texture.',
    housingNote:
      'Two Dublins in one city: post-2000 east side with damage-and-remodel work, 1960s–70s west side with age-related cracking.',
    services: [
      {
        slug: 'drywall-repair',
        name: 'Drywall Repair',
        intro:
          'Clean patch-and-blend on modern board, and proper crack repair on the older west-side homes.',
        bullets: [
          'Doorknob holes and moving damage in townhomes',
          'Stairwell and hallway impact repair',
          'Settling cracks in older West Dublin homes',
          'TV mount and shelving cut-outs closed',
          'Light texture and smooth finishes matched',
        ],
      },
      {
        slug: 'water-damage-drywall-repair',
        name: 'Water Damage Repair',
        intro:
          'In attached and stacked housing the leak often is not yours. It still has to be found before the wall goes back.',
        bullets: [
          'Water from a neighbouring or upstairs unit',
          'Bathroom and laundry failures',
          'Wet board removed back to dry material',
          'Cavity dried before closing up',
          'Stains sealed with blocking primer',
        ],
      },
      {
        slug: 'ceiling-repair',
        name: 'Ceiling Repair',
        intro:
          'Modern Dublin ceilings are tall and lightly textured, which makes access the cost driver and matching the skill test.',
        bullets: [
          'Two-storey entry and stairwell repairs',
          'Water-stained ceilings cut back and rebuilt',
          'Sagging sections re-secured',
          'Fixture and can-light cut-outs closed',
          'Light orange peel matched overhead',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you work in Dublin condos and townhomes with HOA rules?',
        a: 'Yes. Tell us the access, parking and work-hour rules when you book and we will schedule inside them.',
      },
      {
        q: 'The leak came from my neighbour’s unit. Can you still repair my side?',
        a: 'Yes, once the source is stopped. We will document the damage for your HOA or insurance conversation, but the wall does not go back until the water has stopped and the cavity is dry.',
      },
    ],
    nearby: ['san-ramon', 'pleasanton', 'danville'],
  },

  {
    slug: 'pleasanton',
    name: 'Pleasanton',
    state: 'CA',
    county: 'Alameda County',
    zips: ['94566', '94588'],
    population: '80,000',
    region: 'Tri-Valley',
    tier: 3,
    lat: 37.6624,
    lng: -121.8747,
    metaTitle: 'Drywall Repair in Pleasanton, CA | Ceilings, Plaster & Texture Matching',
    metaDescription:
      'Drywall and ceiling repair in Pleasanton, CA. Downtown Victorians, Vintage Hills and Ruby Hill — cracks, water damage, texture matching and remodel drywall.',
    primaryKeyword: 'drywall repair Pleasanton CA',
    secondaryKeywords: [
      'drywall contractor Pleasanton California',
      'ceiling repair Pleasanton CA',
      'plaster repair downtown Pleasanton',
    ],
    h1: 'Drywall & Ceiling Repair in Pleasanton, CA',
    intro:
      'Pleasanton spans more eras than almost any city in the Tri-Valley. Downtown around Main Street holds genuine Victorians and early-1900s homes; Vintage Hills and Val Vista are 1960s–80s tracts; Ruby Hill and the newer east side are large post-1990 customs.',
    subIntro:
      'Three eras, three different repairs. The build year is the first question we ask, because in downtown Pleasanton the answer is often "plaster".',
    neighborhoods: [
      'Downtown / Main Street',
      'Vintage Hills',
      'Val Vista',
      'Ruby Hill',
      'Birdland',
      'Mission Park',
      'Foothill Road corridor',
      'Stoneridge',
    ],
    localDetail:
      'The downtown historic district is the interesting part — small older homes with plaster over lath, original trim and low ceilings, where the right repair is conservative and the wrong one is a drywall square that cracks out. Vintage Hills, Birdland and Val Vista are conventional 1960s–80s tract stock with orange peel and predictable seam failure. Ruby Hill and the Foothill Road customs are big, tall and finished to a standard that punishes an approximate texture match.',
    housingNote:
      'From 1890s downtown plaster to 2000s custom smooth-wall — confirm what is behind the paint before anyone quotes a patch.',
    services: [
      {
        slug: 'drywall-repair',
        name: 'Drywall & Plaster Repair',
        intro:
          'Method matched to the wall: plaster patching downtown, conventional drywall repair everywhere else.',
        bullets: [
          'Plaster over lath in downtown historic homes',
          'Seam and header cracking in 1960s–80s tracts',
          'Impact and doorknob damage',
          'Repairs around original trim and built-ins',
          'Texture matched before priming',
        ],
      },
      {
        slug: 'texture-matching',
        name: 'Texture Matching',
        intro:
          'Ruby Hill and Foothill Road walls are large, flat and well lit. Close is not good enough on those.',
        bullets: [
          'Level 5 smooth for modern custom homes',
          'Orange peel and knockdown on tract housing',
          'Period sand-float finishes downtown',
          'Sample panels before large or visible areas',
          'Full-wall re-texture over a visible blend',
        ],
      },
      {
        slug: 'drywall-installation',
        name: 'Drywall Installation',
        intro:
          'Steady remodel volume across Pleasanton — kitchens, primary suites, ADUs and garage conversions.',
        bullets: [
          'Kitchen and primary bath remodels',
          'ADUs and garage conversions',
          'Additions and bonus rooms',
          'Moisture-resistant board in wet areas',
          'Finish level agreed in writing before we start',
        ],
      },
    ],
    faqs: [
      {
        q: 'Our downtown Pleasanton house is from 1905. Can you work on it?',
        a: 'Yes. Expect plaster over lath, and expect us to repair it as plaster rather than cutting in a drywall patch that will crack around its edges within a year.',
      },
      {
        q: 'Do you travel to Pleasanton from the Walnut Creek side?',
        a: 'Yes, it is inside our service area. Larger jobs are scheduled as full days there rather than short visits, which keeps the pricing sensible.',
      },
    ],
    nearby: ['dublin', 'san-ramon', 'danville'],
  },

  {
    slug: 'antioch',
    name: 'Antioch',
    state: 'CA',
    county: 'Contra Costa County',
    zips: ['94509', '94531'],
    population: '115,000',
    region: 'East Contra Costa',
    tier: 3,
    lat: 38.0049,
    lng: -121.8058,
    metaTitle: 'Drywall Repair in Antioch, CA | Patches, Ceilings & Water Damage',
    metaDescription:
      'Affordable drywall and ceiling repair in Antioch, CA. Holes, cracks, water damage, rental turnover and texture matching in Rivertown, Lone Tree and Deer Valley.',
    primaryKeyword: 'drywall repair Antioch CA',
    secondaryKeywords: [
      'drywall contractor Antioch California',
      'ceiling repair Antioch CA',
      'cheap drywall repair Antioch',
    ],
    h1: 'Drywall & Ceiling Repair in Antioch, CA',
    intro:
      'Antioch is the largest city in East Contra Costa and one of the most varied. Rivertown near the waterfront holds genuinely old housing; the Lone Tree and Deer Valley corridors are 1990s and 2000s subdivisions; and in between there is a large body of post-war tract housing and rental stock.',
    subIntro:
      'It is also the most price-sensitive market we work in, so we quote plainly: what the repair is, what it costs, and what we are not doing.',
    neighborhoods: [
      'Rivertown',
      'Lone Tree Valley',
      'Deer Valley',
      'Sand Creek',
      'Mira Vista',
      'Hillcrest',
      'Somersville',
    ],
    localDetail:
      'Rivertown and the older waterfront streets include pre-war homes where plaster shows up behind the paint and where deferred maintenance means water damage is often older and more extensive than it first looks. The Lone Tree and Sand Creek subdivisions are conventional modern construction — orange peel, two storeys, standard repairs. Antioch also carries a heavy rental component, which makes turnover patching a large and repeatable share of the work here.',
    housingNote:
      'Pre-war Rivertown through 2000s subdivisions, with a large rental segment that drives steady turnover patching.',
    services: [
      {
        slug: 'drywall-repair',
        name: 'Drywall Repair',
        intro:
          'Straightforward, honestly priced patch work — the highest-volume service in Antioch by a distance.',
        bullets: [
          'Doorknob holes, dents and punch-throughs',
          'Rental turnover patching between tenants',
          'Settling cracks in post-war tract homes',
          'Corner bead damage',
          'Textured and primed ready for paint',
        ],
      },
      {
        slug: 'water-damage-drywall-repair',
        name: 'Water Damage Repair',
        intro:
          'Older Antioch roofs and plumbing mean the damage is frequently larger than the stain suggests.',
        bullets: [
          'Roof leaks along exterior walls and ceilings',
          'Failed supply lines and water heaters',
          'Older, long-standing damage opened up and assessed',
          'Wet insulation removed and the cavity dried',
          'Stain-blocking primer so rings do not return',
        ],
      },
      {
        slug: 'ceiling-repair',
        name: 'Ceiling Repair',
        intro:
          'Standard-height ceilings across most of Antioch keep this affordable relative to the western valley.',
        bullets: [
          'Water-stained ceilings cut back and rebuilt',
          'Sagging board re-secured to framing',
          'Wall-to-ceiling joint cracking taped',
          'Fixture cut-outs closed',
          'Spray texture matched overhead',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you handle multi-unit or rental turnover work in Antioch?',
        a: 'Yes, and it is priced as a batch rather than unit by unit. Give us the unit count and a rough scope and we will quote the whole run.',
      },
      {
        q: 'Is drywall repair cheaper in Antioch than in Walnut Creek?',
        a: 'Generally yes, for the same repair — single-storey homes, standard ceilings and easier access all reduce the labour. Height and staging are what make the western valley more expensive, not the compound.',
      },
    ],
    nearby: ['brentwood', 'clayton', 'concord'],
  },

  {
    slug: 'brentwood',
    name: 'Brentwood',
    state: 'CA',
    county: 'Contra Costa County',
    zips: ['94513'],
    population: '65,000',
    region: 'East Contra Costa',
    tier: 3,
    lat: 37.9319,
    lng: -121.6958,
    metaTitle: 'Drywall Repair in Brentwood, CA | Patches, Ceilings & Remodel Drywall',
    metaDescription:
      'Drywall and ceiling repair in Brentwood, CA. Newer subdivision homes, remodel drywall, water damage and texture matching in Shadow Lakes, Deer Ridge and downtown.',
    primaryKeyword: 'drywall repair Brentwood CA',
    secondaryKeywords: [
      'drywall contractor Brentwood California',
      'ceiling repair Brentwood CA',
      'drywall installation Brentwood CA',
    ],
    h1: 'Drywall & Ceiling Repair in Brentwood, CA',
    intro:
      'Brentwood grew from an orchard town into a city of 65,000 in about twenty-five years, so the overwhelming majority of its housing is post-2000. That shifts the work: very little age-related cracking, and much more damage repair, remodel drywall and garage conversion.',
    subIntro:
      'The exception is the small original downtown core, where the housing is genuinely old and needs a different approach entirely.',
    neighborhoods: [
      'Downtown Brentwood',
      'Shadow Lakes',
      'Deer Ridge',
      'Brentwood Hills',
      'Summerset',
      'Garin Ranch',
      'Balfour Road corridor',
    ],
    localDetail:
      'Shadow Lakes, Deer Ridge and the Summerset communities are modern subdivision building — light orange peel, tall entries, two-storey layouts — where the common calls are impact damage, upstairs plumbing failures and remodel work as first owners start updating. Downtown Brentwood’s older streets are the outlier, with early-1900s homes that can hide plaster. Brentwood is the eastern edge of our service area, so jobs here are scheduled as full or half-day blocks rather than quick visits.',
    housingNote:
      'Predominantly post-2000 construction — no asbestos concern, minimal age cracking, and a growing volume of first-remodel work.',
    services: [
      {
        slug: 'drywall-repair',
        name: 'Drywall Repair',
        intro:
          'Modern board, light textures, clean invisible patches. Most Brentwood repairs are quick and inexpensive.',
        bullets: [
          'Doorknob holes and impact damage',
          'Stairwell and hallway repairs',
          'TV mount and shelving cut-outs closed',
          'Seam cracking in fast-built subdivision homes',
          'Light orange peel matched and primed',
        ],
      },
      {
        slug: 'drywall-installation',
        name: 'Drywall Installation',
        intro:
          'Brentwood’s first wave of homeowners is now remodeling, and garage and bonus-room conversions lead the list.',
        bullets: [
          'Garage conversions and home offices',
          'ADUs and bonus rooms',
          'Kitchen and bath remodels',
          'Moisture-resistant board in wet areas',
          'Finish level agreed before work starts',
        ],
      },
      {
        slug: 'water-damage-drywall-repair',
        name: 'Water Damage Repair',
        intro:
          'Two-storey layouts put bathrooms above living space, which is where the costly failures show up.',
        bullets: [
          'Upstairs bathroom leaks into downstairs ceilings',
          'Water heater and laundry failures',
          'Wet board removed back to dry material',
          'Cavity dried before closing up',
          'Stains sealed so they do not bleed back',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you come out to Brentwood?',
        a: 'Yes — it is the eastern edge of our area, so we schedule Brentwood work as half or full-day blocks rather than short stops. That keeps travel out of your price.',
      },
      {
        q: 'My Brentwood home is from 2006 and the walls are cracking. Should I worry?',
        a: 'Usually not. Seam cracks at headers and along ceiling joints are normal as fast-built framing dries and settles. They repair permanently once they are cut, taped and floated rather than filled.',
      },
    ],
    nearby: ['antioch', 'clayton'],
  },
];

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug);
export const citiesByTier = (tier: 1 | 2 | 3) => cities.filter((c) => c.tier === tier);
export const cityNames = () => cities.map((c) => `${c.name}, ${c.state}`);
