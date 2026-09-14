import type { Leader } from "@/content/about";
import type { Faq, Service } from "@/content/services";
import { services } from "@/content/services";
import { site } from "@/content/site";
import type { Project } from "@/content/work";

/**
 * Structured data for search engines. Every node that is referenced more
 * than once has a stable @id, so page-level nodes point back to the
 * organisation instead of repeating it.
 */

const ORG_ID = `${site.url}/#organization`;
const BUSINESS_ID = `${site.url}/#localbusiness`;
const WEBSITE_ID = `${site.url}/#website`;

const areaServed = [
  { "@type": "City", name: site.locality },
  { "@type": "Country", name: site.country },
];

const officeAddress = {
  "@type": "PostalAddress",
  streetAddress: site.addresses.office.lines[0],
  addressLocality: "Lugbe",
  addressRegion: `${site.region}, ${site.locality}`,
  addressCountry: site.countryCode,
};

const registeredAddress = {
  "@type": "PostalAddress",
  streetAddress: site.addresses.registered.lines[0],
  addressLocality: "Katampe",
  addressRegion: `${site.region}, ${site.locality}`,
  addressCountry: site.countryCode,
};

/**
 * Organisation, local business and website, emitted once from the root
 * layout as a single graph.
 */
export const organisationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: site.name,
      legalName: site.name,
      alternateName: [site.shortName, "Zypa"],
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/brand/lockup-orange.png`,
        width: 849,
        height: 252,
      },
      image: `${site.url}/opengraph-image`,
      email: site.email,
      telephone: site.phone,
      description: site.description,
      slogan: site.tagline,
      identifier: site.rcNumber,
      sameAs: [site.social.url],
      founder: { "@type": "Person", name: site.founder },
      address: registeredAddress,
      areaServed,
      knowsAbout: [
        "Software development",
        "Web application development",
        "Mobile app development",
        "Website design",
        "E-commerce development",
        "UI/UX design",
        "Product design",
        "Systems integration",
        "API development",
        "Cloud hosting and maintenance",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        telephone: site.phone,
        areaServed: site.countryCode,
        availableLanguage: ["en"],
      },
    },
    {
      /* ProfessionalService is the LocalBusiness subtype for a firm like this. */
      "@type": "ProfessionalService",
      "@id": BUSINESS_ID,
      name: site.name,
      parentOrganization: { "@id": ORG_ID },
      url: site.url,
      image: `${site.url}/opengraph-image`,
      logo: `${site.url}/brand/lockup-orange.png`,
      email: site.email,
      telephone: site.phone,
      address: officeAddress,
      areaServed,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software engineering and product design",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@id": `${site.url}/services/${service.slug}#service` },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: site.url,
      name: site.shortName,
      alternateName: site.name,
      inLanguage: "en-NG",
      publisher: { "@id": ORG_ID },
    },
  ],
};

export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${site.url}${crumb.path === "/" ? "" : crumb.path}`,
    })),
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function serviceJsonLd(service: Service) {
  const url = `${site.url}/services/${service.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.lede,
    url,
    provider: { "@id": BUSINESS_ID },
    areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.included.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.body,
        },
      })),
    },
  };
}

export function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${site.url}/work/${project.slug}#work`,
    name: project.name,
    headline: `${project.name}: ${project.summary}`,
    description: project.summary,
    genre: project.sector,
    url: `${site.url}/work/${project.slug}`,
    creator: { "@id": ORG_ID },
    inLanguage: "en-NG",
  };
}

export function peopleJsonLd(leaders: Leader[]) {
  return {
    "@context": "https://schema.org",
    "@graph": leaders.map((leader) => ({
      "@type": "Person",
      name: leader.name,
      jobTitle: leader.role,
      description: leader.bio,
      image: leader.photo ? `${site.url}${leader.photo}` : undefined,
      worksFor: { "@id": ORG_ID },
    })),
  };
}

/** Serialises JSON-LD safely for a script tag. */
export function jsonLdScript(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
