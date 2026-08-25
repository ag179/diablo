import {
  SITE_NAME,
  SITE_URL,
  PHONE_DISPLAY,
  COMPANY_EMAIL,
  REGION_LONG,
  absoluteUrl,
} from './utils';
import type { City, Service, BlogPost } from '../types';

const TELEPHONE = PHONE_DISPLAY.replace(/[^\d]/g, '').replace(/^/, '+1-');

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    telephone: TELEPHONE,
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
    telephone: TELEPHONE,
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
