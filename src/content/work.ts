export type Project = {
  slug: string;
  name: string;
  sector: string;
  /** One sentence, used on the home page and the work index. */
  summary: string;
  challenge: string;
  built: string;
  outcome: string;
  /**
   * TODO: client to supply. Until a live URL is provided the detail page
   * renders an asset-needed marker instead of a dead link.
   */
  liveUrl: string | null;
  /**
   * TODO: client to supply real, measured figures. Left empty on purpose.
   * No metric is invented anywhere on this site.
   */
  result: { value: string; label: string } | null;
  /**
   * TODO: client to supply screenshots. Files go in /public/work/<slug>/.
   */
  images: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "safebarter",
    name: "SafeBarter",
    sector: "Escrow and payments",
    summary:
      "An administrative dashboard covering transaction oversight, user and account management, and dispute handling.",
    challenge:
      "Escrow depends on holding funds until both sides of a transaction are satisfied, which means operations staff need to see the full state of every transaction and act on it quickly. Oversight, account management and disputes each needed to be handled without staff moving between disconnected tools, and every action taken on a transaction needed to be attributable after the fact.",
    built:
      "We built the administrative dashboard covering transaction oversight, user and account management, and dispute handling. Operations staff manage the full transaction lifecycle from a single interface, with actions recorded and auditable.",
    outcome:
      "Transaction oversight, account management and dispute handling run through one interface, and the record of who did what is available when a transaction is questioned.",
    liveUrl: null,
    result: null,
    images: [],
  },
  {
    slug: "guzman-career-services",
    name: "Guzman Career Services",
    sector: "Career services",
    summary:
      "An end-to-end client portal together with the marketing site and supporting digital assets.",
    challenge:
      "Enquiry, onboarding and service delivery were spread across separate tools, so client information had to be moved by hand between them and no single place showed where a client had reached in the process.",
    built:
      "We built an end-to-end client portal together with the marketing site and supporting digital assets. Enquiry, onboarding and service delivery now run through one owned platform rather than scattered tools.",
    outcome:
      "The business owns the platform its clients pass through, from first enquiry to delivery, and the marketing site feeds directly into it.",
    liveUrl: null,
    result: null,
    images: [],
  },
  {
    slug: "fuelsmart",
    name: "FuelSmart",
    sector: "Energy and mobility",
    summary:
      "A public website and an iOS application handling vehicle conversion bookings, scheduling and customer records.",
    challenge:
      "Vehicle conversion bookings were taken by phone and held on paper, which made scheduling and customer records difficult to keep accurate and impossible to see across the business at once.",
    built:
      "We built a public website and an iOS application handling vehicle conversion bookings, scheduling and customer records. Bookings are captured and managed digitally across web and mobile instead of by phone and paper.",
    outcome:
      "Bookings arrive digitally from both the website and the iOS app, and scheduling and customer records sit in one place rather than in a diary.",
    liveUrl: null,
    result: null,
    images: [],
  },
  {
    slug: "curator",
    name: "Curator",
    sector: "Video research",
    summary:
      "Product and engineering work across the supporting platform and tooling.",
    challenge:
      "The client needed product and engineering capacity across the platform and the tooling around it, delivered to a standard they could take ownership of and continue to run themselves.",
    built:
      "Product and engineering work across the supporting platform and tooling.",
    outcome: "Delivered and handed over to the client.",
    liveUrl: null,
    result: null,
    images: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
