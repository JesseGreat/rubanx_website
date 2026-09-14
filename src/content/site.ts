/**
 * Company-wide facts and site configuration.
 * Edit copy here rather than in components.
 */

export const site = {
  name: "Zypa Tech Limited",
  shortName: "Zypa Tech",
  domain: "zypatech.online",
  url: "https://zypatech.online",
  tagline: "Software that moves your business forward.",
  description:
    "Zypa Tech Limited designs and builds websites, web applications and mobile apps for businesses. Based in Abuja, working with clients across Nigeria and beyond.",
  rcNumber: "RC 8918370",
  email: "techzypa@gmail.com",
  phone: "+234 814 121 5567",
  phoneHref: "tel:+2348141215567",
  whatsapp: {
    number: "2348141215567",
    href: "https://wa.me/2348141215567",
    message:
      "Hello Zypa Tech, I would like to talk about a project.",
    label: "WhatsApp us",
  },
  social: {
    handle: "@zypatech",
    // TODO: confirm the live profile URL for @zypatech.
    url: "https://www.linkedin.com/company/zypatech",
  },
  addresses: {
    registered: {
      label: "Registered address",
      lines: ["No. 2 Samson Akinsulure Close", "Katampe, FCT, Abuja"],
    },
    office: {
      label: "Office address",
      lines: ["4B CRD Layout", "Lugbe, FCT, Abuja"],
    },
  },
  locality: "Abuja",
  region: "FCT",
  country: "Nigeria",
  countryCode: "NG",
  founder: "Oluwatobiloba Okunogbe",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const cta = {
  primary: { label: "Start a project", href: "/contact" },
  work: { label: "See our work", href: "/work" },
} as const;

/**
 * Booking link. Supplied later by the client.
 * Set NEXT_PUBLIC_BOOKING_URL in the environment to enable the booking block.
 */
export const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? "TODO";
export const bookingReady = bookingUrl !== "TODO" && bookingUrl.length > 0;

/**
 * The date the site's content last changed. Used as lastModified in the
 * sitemap. Update it when copy changes; search engines stop trusting a date
 * that moves on every deploy without the content moving with it.
 */
export const contentUpdated = "2026-09-14";

/** The home page title and description, written for search. */
export const homeSeo = {
  title: "Software development company in Abuja, Nigeria | Zypa Tech",
  description:
    "Zypa Tech is a software development company in Abuja. We design and build websites, web applications and mobile apps for businesses across Nigeria.",
};

export const seoKeywords = [
  "software development company Abuja",
  "web app developers Nigeria",
  "mobile app development Abuja",
  "custom software Abuja",
  "product design Nigeria",
  "systems integration Nigeria",
  "website design company Abuja",
  "web development company Nigeria",
  "UI/UX design agency Abuja",
  "e-commerce website developers Nigeria",
];
