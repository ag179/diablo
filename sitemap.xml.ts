import type { APIRoute } from 'astro';
import { cities } from '../data/cities';
import { services } from '../data/services';
import { blogPosts } from '../data/blogs';
import { SITE_URL } from '../lib/utils';

/** Static build date. Bump when you make a substantive content update. */
const LASTMOD = '2026-08-24';

interface Entry {
  loc: string;
  priority: string;
  changefreq: string;
}

export const GET: APIRoute = () => {
  const entries: Entry[] = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/services/', priority: '0.8', changefreq: 'monthly' },
    { loc: '/locations/', priority: '0.8', changefreq: 'monthly' },
    { loc: '/blog/', priority: '0.7', changefreq: 'weekly' },
    { loc: '/contact/', priority: '0.9', changefreq: 'monthly' },
    ...services.map((s) => ({
      loc: `/services/${s.slug}/`,
      priority: '0.8',
      changefreq: 'monthly',
    })),
    ...cities.map((c) => ({
      loc: `/locations/${c.slug}/`,
      priority: c.tier === 1 ? '0.9' : c.tier === 2 ? '0.8' : '0.7',
      changefreq: 'monthly',
    })),
    ...blogPosts.map((p) => ({
      loc: `/blog/${p.slug}/`,
      priority: '0.6',
      changefreq: 'monthly',
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${SITE_URL}${e.loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
