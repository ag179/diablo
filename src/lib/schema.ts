import {
  SITE_NAME,
  SITE_URL,
  COMPANY_EMAIL,
  REGION_LONG,
  absoluteUrl,
} from './utils';
import type { Business, City, Service, BlogPost } from '../types';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    email: COMPANY_EMAIL,
    description: `Drywall repair, ceiling repair and texture matching across ${REGION_LONG}.`,
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: 37.9101, longitude: -122.0652 },
      geoRadius: '32000',
    },
  };
}

export function localBusinessSchema(city: City, services: Service[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': absoluteUrl(`/locations/${city.slug}/#business`),
    name: `${SITE_NAME} — ${city.name}`,
    url: absoluteUrl(`/locations/${city.slug}/`),
    email: COMPANY_EMAIL,
    description: city.metaDescription,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.state,
      postalCode: city.zips[0],
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: city.lat, longitude: city.lng },
    areaServed: [
      { '@type': 'City', name: `${city.name}, ${city.state}` },
      ...city.neighborhoods.map((n) => ({ '@type': 'Place', name: n })),
    ],
    makesOffer: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: `${s.name} in ${city.name}` },
    })),
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
  };
}

export function serviceSchema(service: Service, cityNames: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    serviceType: service.name,
    description: service.longDescription,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: cityNames.map((n) => ({ '@type': 'City', name: n })),
    url: absoluteUrl(`/services/${service.slug}/`),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/**
 * LocalBusiness schema for a third-party directory listing. This describes
 * the listed business itself, not Diablo Valley Drywall — it carries no
 * `parentOrganization` link and no makesOffer tie to our services.
 */
export function directoryListingSchema(business: Business) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': absoluteUrl(`/directory/${business.slug}/#business`),
    name: business.name,
    url: business.website || undefined,
    telephone: business.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.street ?? business.address,
      addressLocality: business.city,
      addressRegion: business.stateCode,
      postalCode: business.postalCode,
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: business.latitude, longitude: business.longitude },
    ...(business.rating !== null && business.reviews !== null && business.reviews > 0
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: business.rating,
            reviewCount: business.reviews,
          },
        }
      : {}),
    ...(business.hours.length > 0
      ? {
          openingHoursSpecification: business.hours.map((h) => ({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: `https://schema.org/${h.day}`,
            opens: h.open24h ? '00:00' : h.open,
            closes: h.open24h ? '23:59' : h.close,
          })),
        }
      : {}),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: absoluteUrl(t.path),
    })),
  };
}

export function articleSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}/`),
  };
}
