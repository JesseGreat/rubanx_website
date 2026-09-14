export type Faq = { question: string; answer: string };

export type Service = {
  slug: string;
  title: string;
  /** One line, used on the home page matrix. */
  summary: string;
  /** Two or three sentences, used on the services page. */
  body: string;
  tags: string[];
  /**
   * Search fields for the service's own page. The title is what people type
   * into Google, and is completed by the " | Zypa Tech" template. Keep it
   * under about 55 characters and the description under about 160.
   */
  seo: { title: string; description: string };
  /** Opening paragraph on the service page. */
  lede: string;
  included: { title: string; body: string }[];
  suitedTo: string[];
  faqs: Faq[];
  /** Slugs from src/content/work.ts. */
  relatedWork: string[];
};

export const services: Service[] = [
  {
    slug: "custom-web-applications",
    title: "Custom web applications",
    summary:
      "Internal platforms, customer portals, admin dashboards, booking and workflow systems.",
    body: "Internal platforms, customer portals, admin dashboards, booking and workflow systems. Built around the way your business runs rather than forcing it into off-the-shelf software that nearly fits.",
    tags: ["portals", "dashboards", "workflow"],
    seo: {
      title: "Custom web application development in Abuja",
      description:
        "Custom web applications built in Abuja for businesses across Nigeria: customer portals, admin dashboards, booking and workflow systems you own outright.",
    },
    lede: "We design and build custom web applications for businesses and organisations across Nigeria, from our office in Abuja. Customer portals, admin dashboards, booking and workflow systems, built around the way your business runs rather than forcing it into off-the-shelf software that nearly fits.",
    included: [
      {
        title: "Customer and client portals",
        body: "One place for your customers to sign in, submit information, track progress and pay, instead of email threads and spreadsheets.",
      },
      {
        title: "Admin and operations dashboards",
        body: "Oversight of transactions, accounts and cases, with every staff action recorded and attributable.",
      },
      {
        title: "Booking and scheduling systems",
        body: "Bookings, availability and customer records captured digitally rather than by phone and paper.",
      },
      {
        title: "Workflow and approval systems",
        body: "Multi-step processes with roles, approvals and notifications, built around how your organisation already works.",
      },
      {
        title: "Replacing spreadsheets and ageing tools",
        body: "Moving a process that has outgrown spreadsheets or old software onto a system built for it, with the existing data migrated.",
      },
      {
        title: "Role-based access and audit trails",
        body: "Access granted by role, and a record of who did what, for organisations that answer to regulators or auditors.",
      },
    ],
    suitedTo: [
      "Operations run across spreadsheets, email and tools that do not talk to each other.",
      "Off-the-shelf software that nearly fits, and the gap is costing staff time.",
      "A process that needs a reliable audit trail.",
      "A customer-facing service that should be self-service.",
    ],
    faqs: [
      {
        question: "How much does a custom web application cost in Nigeria?",
        answer:
          "It depends on scope: the number of user types, the workflows involved and the systems it has to connect to. We scope the work first, then agree the price and milestones in writing before anything is built, so you know the cost before you commit.",
      },
      {
        question: "How long does it take to build a web application?",
        answer:
          "The timeline is set during discovery, once the scope is written down, and the delivery date goes into the contract with the milestones. You see working software throughout the build rather than waiting for a single reveal at the end.",
      },
      {
        question: "Who owns the source code?",
        answer:
          "You do. Full IP and source code are assigned to you on completion, with documentation, so your own team or any other could take it over.",
      },
      {
        question: "Can you work with our existing systems?",
        answer:
          "Yes. The technology is chosen to fit your problem and the systems you already run. Where the application needs to exchange data with a payment gateway, an accounting package or a CRM, that integration is part of the scope.",
      },
    ],
    relatedWork: ["safebarter", "guzman-career-services"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile app development",
    summary:
      "Applications for iOS and Android, taken through store submission to approval.",
    body: "Applications for iOS and Android covering offline behaviour, push notifications, payments and store submission through to approval.",
    tags: ["iOS", "Android", "cross-platform"],
    seo: {
      title: "Mobile app development company in Abuja",
      description:
        "iOS and Android app development in Abuja for businesses across Nigeria. Offline behaviour, payments, push notifications and store submission through to approval.",
    },
    lede: "We design and build mobile apps for iOS and Android for businesses across Nigeria, from our office in Abuja. Offline behaviour, payments, push notifications and the web dashboard behind the app, taken all the way through App Store and Google Play approval.",
    included: [
      {
        title: "iOS and Android apps",
        body: "Native or cross-platform, chosen to suit your users, your budget and the features the app needs.",
      },
      {
        title: "Offline behaviour",
        body: "Apps that keep working on a weak or dropped connection and sync when the network returns.",
      },
      {
        title: "Payments",
        body: "In-app payments through the gateways your customers already use.",
      },
      {
        title: "Push notifications",
        body: "Reminders, status updates and alerts sent to the right users at the right time.",
      },
      {
        title: "App Store and Google Play submission",
        body: "Store listings, review requirements and submission handled through to approval.",
      },
      {
        title: "The dashboard behind the app",
        body: "Where staff need to manage bookings, users or content, the admin side is built alongside the app.",
      },
    ],
    suitedTo: [
      "Customers who expect to book, order or pay from their phone.",
      "Staff working in the field, away from a desk.",
      "A service that already works on the web and needs to be in people's pockets.",
      "An idea that needs a first release in the stores.",
    ],
    faqs: [
      {
        question: "Should we build for iOS, Android or both?",
        answer:
          "That depends on who your users are and what the app needs to do. Android is used by most phone owners in Nigeria, while some business audiences lean towards iOS. We look at your users during discovery and recommend an approach, including whether one cross-platform codebase will do the job.",
      },
      {
        question: "Do you publish the app to the App Store and Google Play?",
        answer:
          "Yes. Store submission is part of the work, including the listing, the review requirements and responding to feedback from Apple or Google until the app is approved.",
      },
      {
        question: "Will the app work on a poor connection?",
        answer:
          "Where it matters to your users, we design for it: data is kept on the device, actions are queued while offline, and everything syncs when the connection returns.",
      },
      {
        question: "What happens after the app launches?",
        answer:
          "Defects found against the agreed scope are fixed at our cost within the warranty period. After that, a support retainer covers updates for new operating system releases, monitoring and further feature work.",
      },
    ],
    relatedWork: ["fuelsmart"],
  },
  {
    slug: "business-websites-and-e-commerce",
    title: "Business websites and e-commerce",
    summary:
      "Corporate sites, landing pages and online stores that load fast and convert.",
    body: "Corporate sites, landing pages and online stores that load fast, rank well and convert. Content managed by your own team without a developer in the loop.",
    tags: ["corporate", "CMS", "online stores"],
    seo: {
      title: "Website design and development company in Abuja",
      description:
        "Corporate websites, landing pages and online stores designed and built in Abuja. Fast on mobile, set up to be found on Google, and managed by your own team.",
    },
    lede: "We design and build corporate websites, landing pages and online stores for businesses across Nigeria, from our office in Abuja. Sites that load fast on mobile data, are set up to be found on Google, and can be updated by your own team without a developer in the loop.",
    included: [
      {
        title: "Corporate websites",
        body: "A site that explains what your organisation does, earns the trust of larger clients and tender panels, and makes it easy to get in touch.",
      },
      {
        title: "Landing pages",
        body: "Focused pages for a campaign, product or service, built to turn visits into enquiries.",
      },
      {
        title: "Online stores",
        body: "Product catalogues, checkout and payment through Nigerian and international gateways, with orders your team can manage.",
      },
      {
        title: "Content your team manages",
        body: "A content management system so your staff can update pages, news and products without calling a developer.",
      },
      {
        title: "Search engine optimisation from the start",
        body: "Clean page structure, fast loading, metadata and structured data set up as the site is built, not bolted on afterwards.",
      },
      {
        title: "Fast on mobile data",
        body: "Pages kept light so they load quickly on a phone and do not use up a visitor's data.",
      },
    ],
    suitedTo: [
      "An outdated site that no longer reflects the business.",
      "No website at all, while customers are searching for you.",
      "Selling through social media and ready for a proper online store.",
      "A tender or partnership where credibility online matters.",
    ],
    faqs: [
      {
        question: "How much does a business website cost in Nigeria?",
        answer:
          "The price depends on the number of pages, whether you need an online store or a content management system, and any integrations. We agree the price in writing after scoping, so there are no surprises.",
      },
      {
        question: "Will our website rank on Google?",
        answer:
          "Every site we build has the technical groundwork search engines look for: fast pages, clean structure, metadata and structured data. Ranking also depends on your content and on other sites linking to yours, and we tell you plainly what that involves rather than promising a position.",
      },
      {
        question: "Can we update the website ourselves?",
        answer:
          "Yes. Where your team needs to change content, we build the site on a content management system and show your staff how to use it.",
      },
      {
        question: "Do you set up hosting and the domain?",
        answer:
          "Yes. We can set up the domain, the email records and the hosting, and look after the site afterwards under a support retainer.",
      },
    ],
    relatedWork: ["guzman-career-services", "fuelsmart"],
  },
  {
    slug: "product-and-ui-ux-design",
    title: "Product and UI/UX design",
    summary:
      "Research, user journeys and interface design, ending in a clickable prototype.",
    body: "Research, user journeys, wireframes and interface design, ending in a clickable prototype you can test with real users before a line of production code is written.",
    tags: ["research", "prototyping", "design systems"],
    seo: {
      title: "UI/UX and product design agency in Abuja",
      description:
        "Product and UI/UX design in Abuja: user research, journeys, wireframes and interface design, ending in a clickable prototype you can test before you build.",
    },
    lede: "We run product and UI/UX design for organisations across Nigeria, from our office in Abuja. User research, journeys, wireframes and interface design, ending in a clickable prototype you can test with real users before a line of production code is written.",
    included: [
      {
        title: "User research",
        body: "Conversations with the people who will use the product, so design decisions rest on how they actually work.",
      },
      {
        title: "User journeys and structure",
        body: "The routes people take through the product, mapped before any screen is drawn.",
      },
      {
        title: "Wireframes",
        body: "Low-detail layouts that settle what each screen does before time is spent on how it looks.",
      },
      {
        title: "Interface design",
        body: "Finished screens in your brand, designed for mobile and desktop and for accessibility.",
      },
      {
        title: "Clickable prototypes",
        body: "A prototype you can put in front of real users and stakeholders before production code is written.",
      },
      {
        title: "Design systems",
        body: "Reusable components and rules that keep the product consistent as it grows and as more people work on it.",
      },
    ],
    suitedTo: [
      "A new product that needs validating before investing in a build.",
      "An existing product that users find hard to use.",
      "Stakeholders who need to see and agree the product before approving budget.",
      "An in-house engineering team that needs design capacity.",
    ],
    faqs: [
      {
        question: "What is the difference between UI and UX design?",
        answer:
          "UX design is about how the product works: the journeys, the structure and whether people can complete what they came to do. UI design is how it looks and feels on screen. We do both, in that order.",
      },
      {
        question: "Can you design a product that another team will build?",
        answer:
          "Yes. Design can be a standalone engagement. The handover includes the prototype, the finished screens and the design system, prepared so any engineering team can build from it.",
      },
      {
        question: "Why test a prototype before building?",
        answer:
          "Changing a prototype is far cheaper than changing production software. Testing with real users shows what works and what confuses them while it is still quick to fix.",
      },
    ],
    relatedWork: ["curator", "guzman-career-services"],
  },
  {
    slug: "systems-integration-and-apis",
    title: "Systems integration and APIs",
    summary:
      "Connecting the tools you already pay for so data stops being rekeyed by hand.",
    body: "Connecting the tools you already pay for, including payment gateways, accounting packages, CRMs, logistics and messaging providers, so data stops being rekeyed by hand between systems.",
    tags: ["payments", "CRM", "third-party APIs"],
    seo: {
      title: "Systems integration and API development in Nigeria",
      description:
        "Systems integration and API development for Nigerian businesses. Payment gateways, accounting packages, CRMs and messaging connected so data stops being rekeyed.",
    },
    lede: "We connect the software Nigerian businesses already pay for, and build the APIs that let partners and apps work with their data. Payment gateways, accounting packages, CRMs, logistics and messaging providers, joined up so information stops being rekeyed by hand between systems.",
    included: [
      {
        title: "Payment gateway integration",
        body: "Collections, transfers and reconciliation connected to the gateways your business uses.",
      },
      {
        title: "Accounting and finance systems",
        body: "Sales, invoices and payments flowing into your accounting package without manual entry.",
      },
      {
        title: "CRM integration",
        body: "Customer records kept in step across your website, your apps and your sales tools.",
      },
      {
        title: "Messaging, SMS and WhatsApp",
        body: "Notifications and updates sent through the channels your customers actually read.",
      },
      {
        title: "Logistics and other third-party APIs",
        body: "Delivery, identity verification and other external services connected to your systems.",
      },
      {
        title: "APIs for your own platform",
        body: "Documented APIs so partners, apps or other teams can work with your data securely.",
      },
    ],
    suitedTo: [
      "Staff copying the same data between systems by hand.",
      "Reports that take days to assemble from several tools.",
      "A partner or client that needs to connect to your platform.",
      "Payments that have to be reconciled manually.",
    ],
    faqs: [
      {
        question: "What does systems integration mean?",
        answer:
          "It means connecting the software your business already uses so information moves between systems automatically. A payment received updates the accounts, a new customer appears in the CRM, and nobody has to rekey it.",
      },
      {
        question: "Can you integrate with Nigerian payment gateways?",
        answer:
          "Yes. Payment gateway integration, including collections, payment notifications and reconciliation, is part of this service.",
      },
      {
        question: "How is our data protected during the work?",
        answer:
          "A mutual NDA is signed before we see anything commercially sensitive, and access to your systems and data is granted by role and withdrawn at handover.",
      },
    ],
    relatedWork: ["safebarter"],
  },
  {
    slug: "support-hosting-and-maintenance",
    title: "Support, hosting and maintenance",
    summary:
      "Managed hosting, monitoring, patching and an agreed response time for incidents.",
    body: "Managed cloud hosting, monitoring, security patching, backups and an agreed response time for incidents. Ongoing feature work handled under the same retainer.",
    tags: ["SLA support", "cloud", "monitoring"],
    seo: {
      title: "Software support, hosting and maintenance in Abuja",
      description:
        "Managed hosting, monitoring, security patching, backups and an agreed incident response time for websites and applications run by businesses in Nigeria.",
    },
    lede: "We keep websites and applications running for businesses across Nigeria, from our office in Abuja. Managed cloud hosting, monitoring, security patching, backups and an agreed response time for incidents, with ongoing feature work handled under the same retainer.",
    included: [
      {
        title: "Managed cloud hosting",
        body: "Hosting set up and run for you, so your team does not have to look after servers.",
      },
      {
        title: "Monitoring",
        body: "Checks that alert us when a site or application goes down or slows.",
      },
      {
        title: "Security patching",
        body: "Updates applied to the software and what it depends on as vulnerabilities are published.",
      },
      {
        title: "Backups",
        body: "Regular backups, with a restore process that is tested rather than assumed.",
      },
      {
        title: "Agreed incident response",
        body: "A response time for incidents written into the retainer, so you know how quickly someone will act.",
      },
      {
        title: "Ongoing feature work",
        body: "A block of development hours each month for improvements, handled under the same retainer.",
      },
    ],
    suitedTo: [
      "Software that is live and critical to the business.",
      "A system built by a team that is no longer available.",
      "No one in-house responsible for keeping the site secure.",
      "A steady list of small improvements that never gets done.",
    ],
    faqs: [
      {
        question: "Can you support software another company built?",
        answer:
          "Yes. We start with a review of the code, the hosting and the documentation, tell you plainly what condition it is in, and then agree in writing what the retainer covers.",
      },
      {
        question: "What is included in a support retainer?",
        answer:
          "Hosting, monitoring, patching, backups and an agreed response time for incidents, with a block of development hours each month. The exact scope is agreed in writing.",
      },
      {
        question: "Is there a warranty after launch?",
        answer:
          "For software we build, defects found against the agreed scope are fixed at our cost within the warranty period. A retainer covers everything beyond that.",
      },
    ],
    relatedWork: [],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

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
