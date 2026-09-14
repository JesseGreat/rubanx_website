import { services } from "@/content/services";
import { site } from "@/content/site";

/**
 * Organization and LocalBusiness, emitted once from the root layout as a
 * graph so the two nodes reference each other rather than repeating.
 */
export const organisationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      alternateName: site.shortName,
      url: site.url,
      logo: `${site.url}/brand/lockup-orange.png`,
      image: `${site.url}/opengraph-image`,
      email: site.email,
      telephone: site.phone,
      description: site.description,
      identifier: site.rcNumber,
      sameAs: [site.social.url],
      founder: {
        "@type": "Person",
        name: site.founder,
        jobTitle: "Founder and Lead",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: site.addresses.registered.lines[0],
        addressLocality: site.locality,
        addressRegion: site.region,
        addressCountry: site.countryCode,
      },
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
      "@type": "LocalBusiness",
      "@id": `${site.url}/#localbusiness`,
      name: site.name,
      parentOrganization: { "@id": `${site.url}/#organization` },
      url: site.url,
      image: `${site.url}/brand/lockup-orange.png`,
      email: site.email,
      telephone: site.phone,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.addresses.office.lines[0],
        addressLocality: site.locality,
        addressRegion: site.region,
        addressCountry: site.countryCode,
      },
      areaServed: [
        { "@type": "Country", name: site.country },
        { "@type": "City", name: site.locality },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software engineering and product design",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.summary,
          },
        })),
      },
    },
  ],
};

export function breadcrumbJsonLd(
  trail: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${site.url}${crumb.path}`,
    })),
  };
}
