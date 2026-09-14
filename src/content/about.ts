export const story = {
  heading: "We are the delivery team",
  paragraphs: [
    "Zypa Tech Limited is a software engineering and product design company based in Abuja. We work as the delivery team for organisations that either do not have in-house engineering capacity or need to move faster than their internal roadmap allows.",
    "Every engagement starts with the commercial problem rather than the technology. What we hand over is production grade: documented, tested, owned outright by the client, and supported after launch.",
  ],
};

export type Leader = {
  name: string;
  role: string;
  bio: string;
  /** TODO: photographs go in /public/team/. */
  photo: string | null;
  photoAlt: string;
};

export const leaders: Leader[] = [
  {
    name: "Oluwatobiloba Okunogbe",
    role: "Founder and Lead",
    bio: "Leads product and engineering, bringing ten years across product management, software engineering and enterprise IT. Sets technical direction on every engagement, from the first scoping session through to architecture decisions and final handover.",
    photo: "/team/oluwatobiloba.jpg",
    photoAlt: "Oluwatobiloba Okunogbe, Founder and Lead at Zypa Tech Limited",
  },
  {
    name: "Adebisi Oluwabukola",
    role: "Head of Operations and Compliance",
    bio: "Brings ten years in operations, documentation and regulatory compliance, built in an environment where every process had to stand up to statutory scrutiny and every record had to be defensible. Owns delivery assurance, setting how Zypa handles process governance, record keeping, data protection and client reporting.",
    photo: "/team/adebisi.jpg",
    photoAlt:
      "Adebisi Oluwabukola, Head of Operations and Compliance at Zypa Tech Limited",
  },
];

export const staffing = {
  heading: "How we staff a project",
  paragraphs: [
    "We do not tie ourselves to a single technology or a fixed bench. Each engagement is scoped first, then staffed with the specialists it actually requires.",
    "The technology is chosen to fit the problem and your existing systems, never the other way round. Every project is led by one accountable project manager who stays the client's point of contact from kick-off through to support.",
  ],
};

export const assurances = {
  heading: "How we contract",
  intro:
    "The commitments below apply to every engagement and are written into the contract.",
  items: [
    {
      title: "Mutual NDA before discovery",
      body: "Signed before we see anything commercially sensitive.",
    },
    {
      title: "Written contract with defined milestones",
      body: "Scope, price and dates agreed in writing before work starts.",
    },
    {
      title: "Full IP and source code assignment",
      body: "Everything we build is assigned to you on completion. You own it outright.",
    },
    {
      title: "Role-based access control",
      body: "Access to your systems and data is granted by role and withdrawn on handover.",
    },
    {
      title: "Documented testing and user acceptance sign-off",
      body: "Nothing is called finished until you have tested it and signed it off.",
    },
    {
      title: "Warranty period after go-live",
      body: "Defects found against the agreed scope are fixed at our cost within the warranty period.",
    },
    {
      title: "Company documents and client references",
      body: "Certificate of incorporation, tax records and referees available on request.",
    },
  ],
};
