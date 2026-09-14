export type Service = {
  slug: string;
  title: string;
  /** One line, used on the home page matrix. */
  summary: string;
  /** Two or three sentences, used on the services page. */
  body: string;
  tags: string[];
};

export const services: Service[] = [
  {
    slug: "custom-web-applications",
    title: "Custom web applications",
    summary:
      "Internal platforms, customer portals, admin dashboards, booking and workflow systems.",
    body: "Internal platforms, customer portals, admin dashboards, booking and workflow systems. Built around the way your business runs rather than forcing it into off-the-shelf software that nearly fits.",
    tags: ["portals", "dashboards", "workflow"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile app development",
    summary:
      "Applications for iOS and Android, taken through store submission to approval.",
    body: "Applications for iOS and Android covering offline behaviour, push notifications, payments and store submission through to approval.",
    tags: ["iOS", "Android", "cross-platform"],
  },
  {
    slug: "business-websites-and-e-commerce",
    title: "Business websites and e-commerce",
    summary:
      "Corporate sites, landing pages and online stores that load fast and convert.",
    body: "Corporate sites, landing pages and online stores that load fast, rank well and convert. Content managed by your own team without a developer in the loop.",
    tags: ["corporate", "CMS", "online stores"],
  },
  {
    slug: "product-and-ui-ux-design",
    title: "Product and UI/UX design",
    summary:
      "Research, user journeys and interface design, ending in a clickable prototype.",
    body: "Research, user journeys, wireframes and interface design, ending in a clickable prototype you can test with real users before a line of production code is written.",
    tags: ["research", "prototyping", "design systems"],
  },
  {
    slug: "systems-integration-and-apis",
    title: "Systems integration and APIs",
    summary:
      "Connecting the tools you already pay for so data stops being rekeyed by hand.",
    body: "Connecting the tools you already pay for, including payment gateways, accounting packages, CRMs, logistics and messaging providers, so data stops being rekeyed by hand between systems.",
    tags: ["payments", "CRM", "third-party APIs"],
  },
  {
    slug: "support-hosting-and-maintenance",
    title: "Support, hosting and maintenance",
    summary:
      "Managed hosting, monitoring, patching and an agreed response time for incidents.",
    body: "Managed cloud hosting, monitoring, security patching, backups and an agreed response time for incidents. Ongoing feature work handled under the same retainer.",
    tags: ["SLA support", "cloud", "monitoring"],
  },
];

/**
 * The delivery process. This content genuinely is a sequence, which is the
 * only reason numbered markers appear anywhere on this site.
 */
export type ProcessStep = {
  number: string;
  title: string;
  body: string;
};

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    body: "We start with the commercial problem. Sessions with the people who will use the system, a written scope, a budget range and a date you can plan around.",
  },
  {
    number: "02",
    title: "Design",
    body: "User journeys, wireframes and interface design, ending in a clickable prototype. You approve what the software does before we build it.",
  },
  {
    number: "03",
    title: "Build",
    body: "Delivery in short cycles against the agreed milestones. You see working software throughout, not a status report describing one.",
  },
  {
    number: "04",
    title: "Launch",
    body: "Testing, user acceptance sign-off, data migration and deployment. Documentation and source code are handed over and owned outright by you.",
  },
  {
    number: "05",
    title: "Support",
    body: "Monitoring, patching and an agreed response time after go-live, with further feature work handled under the same retainer.",
  },
];

export type EngagementModel = {
  title: string;
  body: string;
  suitedTo: string;
};

export const engagementModels: EngagementModel[] = [
  {
    title: "Fixed-scope project",
    body: "A defined build with agreed milestones, a fixed price and a delivery date. Changes are priced and approved in writing before they are made.",
    suitedTo: "Suited to a scope that can be written down up front.",
  },
  {
    title: "Dedicated team",
    body: "A team working to your roadmap on a monthly basis, reporting to your product owner. You set the priorities each cycle.",
    suitedTo: "Suited to work that will keep evolving.",
  },
  {
    title: "Support retainer",
    body: "Hosting, monitoring, patching and an agreed response time for incidents, with a block of development hours each month.",
    suitedTo: "Suited to software that is already live.",
  },
];
