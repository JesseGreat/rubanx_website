# Claude Code build prompt: zypatech.online

Copy everything below the line into Claude Code.

---

Build the marketing website for **Zypa Tech Limited**, a software engineering and product design company based in Abuja, Nigeria. The site will live at **zypatech.online** and its job is to convert three audiences: corporate and enterprise buyers, government tender committees, and SMEs or startups looking for a build partner.

## Before you write any code

Work in two passes.

**Pass one: produce a short design plan.** Colour tokens, type scale, layout concept with ASCII wireframes for the home page, and three principles that make this site specific to Zypa rather than generic. Show me the plan and wait for my approval before building.

Two constraints on that plan:

The brand palette and typefaces below are fixed. Follow them exactly. Where the brief leaves an axis free (layout, motion, imagery, section rhythm), do not spend that freedom on defaults. Specifically avoid: identical rounded cards with the same soft grey shadow under each, gradient washes as decoration, a tracked-out all-caps eyebrow label above every heading, meta strings joined with middle dots, and a fade-and-slide-up entrance on every section.

The company already has a printed profile document with its own visual system. Do not port that layout to the web. The site should read as the same brand expressed natively for screen, not as a PDF in a browser.

**Pass two: build it**, then screenshot and critique your own work at desktop and mobile widths before telling me it's done.

## Stack

- Next.js (App Router) with TypeScript
- Tailwind CSS
- Deployed on Vercel, using server functions for the contact form. Do not use `output: 'export'`, because the contact form needs a route handler.
- `next/font` for typefaces, `next/image` for all imagery
- No component library. Build the primitives.

## Brand

These come from the official Zypa brand guide and are not negotiable.

| Token | Value | Use |
|---|---|---|
| Velocity Orange | `#EE6625` | Primary brand colour, calls to action, accents |
| Zypa Charcoal | `#231F20` | Dark sections, headings |
| Body text | `#1C1819` | All body copy. It must read solid, never grey |
| Pure White | `#FFFFFF` | Primary light background |
| Warm tint | `#FDF1EA` | Sparingly, for a single highlighted element per page |

**Typefaces.** Montserrat for headings and body, loaded through `next/font/google`. Varela Round only for the words "Tech Limited" in the logo lockup, where it stands in for Arial Rounded MT Bold.

**Logo.** I will place the files in `/public/brand/`. Expect: full lockup in orange, full lockup in white, wordmark only, and the chevron monogram. The monogram is the favicon and the app icon. Never use the wordmark and the chevron separately anywhere else. Minimum clear space around the logo equals the height of the letter "z". Never stretch, recolour, or add effects to it.

**Brand meaning, for tone.** Orange carries energy, speed, creativity and enthusiasm. Charcoal carries stability, competence, authority and sophistication. The chevron mark represents forward motion, speed and arrival. The rounded wordmark makes the brand approachable. The site should feel fast, direct and grown-up, never playful or corporate-bland.

## Pages

Five pages: Home, Services, Work, About, Contact.

### Home

Hero, then a condensed version of each other page with a link through to it.

The hero must not be a big number with a small label, supporting stats and a gradient accent. Open with the sharpest thing Zypa has to say. Working headline, which you may improve on but not dilute:

> Software that moves your business forward.

Supporting line:

> We design and build the websites, web applications and mobile apps that businesses run on. Based in Abuja, working with clients across Nigeria and beyond.

Primary call to action: "Start a project", linking to Contact. Secondary: "See our work".

Below the hero, in order: what we build (six services, condensed), selected work (three projects, condensed), a single pull quote, and a closing call-to-action band.

The pull quote, set as the one bold typographic moment on the page:

> We are measured by one thing. Whether the software we deliver does what the business needed it to do, on the date we said it would.

### Services

Six services. Each needs a heading, two or three sentences, and three short capability tags.

1. **Custom web applications.** Internal platforms, customer portals, admin dashboards, booking and workflow systems. Built around the way your business runs rather than forcing it into off-the-shelf software that nearly fits. Tags: portals, dashboards, workflow.
2. **Mobile app development.** Applications for iOS and Android covering offline behaviour, push notifications, payments and store submission through to approval. Tags: iOS, Android, cross-platform.
3. **Business websites and e-commerce.** Corporate sites, landing pages and online stores that load fast, rank well and convert. Content managed by your own team without a developer in the loop. Tags: corporate, CMS, online stores.
4. **Product and UI/UX design.** Research, user journeys, wireframes and interface design, ending in a clickable prototype you can test with real users before a line of production code is written. Tags: research, prototyping, design systems.
5. **Systems integration and APIs.** Connecting the tools you already pay for, including payment gateways, accounting packages, CRMs, logistics and messaging providers, so data stops being rekeyed by hand between systems. Tags: payments, CRM, third-party APIs.
6. **Support, hosting and maintenance.** Managed cloud hosting, monitoring, security patching, backups and an agreed response time for incidents. Ongoing feature work handled under the same retainer. Tags: SLA support, cloud, monitoring.

Below the six, add the delivery process as a five-step sequence. This content genuinely is a sequence, so numbered markers are appropriate here and only here: Discover, Design, Build, Launch, Support.

Then the three engagement models: fixed-scope project, dedicated team, support retainer.

### Work

Four projects. Each gets a card on the index and its own detail route at `/work/[slug]`.

1. **SafeBarter**, escrow and payments. We built the administrative dashboard covering transaction oversight, user and account management, and dispute handling. Operations staff manage the full transaction lifecycle from a single interface, with actions recorded and auditable.
2. **Guzman Career Services**, career services. We built an end-to-end client portal together with the marketing site and supporting digital assets. Enquiry, onboarding and service delivery now run through one owned platform rather than scattered tools.
3. **FuelSmart**, energy and mobility. We built a public website and an iOS application handling vehicle conversion bookings, scheduling and customer records. Bookings are captured and managed digitally across web and mobile instead of by phone and paper.
4. **Curator**, video research. Product and engineering work across the supporting platform and tooling. Delivered and handed over to the client.

Structure each detail page as: the challenge, what we built, the outcome. Leave a clearly marked `TODO` slot in each for screenshots and a live URL, and a slot for a measurable result, because I will supply real numbers later. Do not invent metrics.

### About

Company story, then leadership, then how projects are staffed.

Story: Zypa Tech Limited is a software engineering and product design company based in Abuja. We work as the delivery team for organisations that either do not have in-house engineering capacity or need to move faster than their internal roadmap allows. Every engagement starts with the commercial problem rather than the technology. What we hand over is production grade: documented, tested, owned outright by the client, and supported after launch.

**Leadership.** Two people. Photos go in `/public/team/`.

- **Oluwatobiloba Okunogbe, Founder and Lead.** Leads product and engineering, bringing ten years across product management, software engineering and enterprise IT. Sets technical direction on every engagement, from the first scoping session through to architecture decisions and final handover.
- **Adebisi Oluwabukola, Head of Operations and Compliance.** Brings ten years in operations, documentation and regulatory compliance, built in an environment where every process had to stand up to statutory scrutiny and every record had to be defensible. Owns delivery assurance, setting how Zypa handles process governance, record keeping, data protection and client reporting.

**How we staff a project.** We do not tie ourselves to a single technology or a fixed bench. Each engagement is scoped first, then staffed with the specialists it actually requires. The technology is chosen to fit the problem and your existing systems, never the other way round. Every project is led by one accountable project manager who stays the client's point of contact from kick-off through to support.

Do not publish a technology stack list anywhere on this site. It narrows what clients think we can take on.

Include the commercial assurances, which matter for tender readers: mutual NDA before discovery, written contract with defined milestones, full IP and source code assignment on completion, role-based access control, documented testing and user acceptance sign-off, warranty period after go-live, company documents and client references available on request.

### Contact

- Working contact form: name, company, email, phone, project type (select), budget range (select), message. Validate client side and server side with zod. Post to a route handler that sends via Resend to `techzypa@gmail.com`. Read the API key from an environment variable and include a `.env.example`. Add a honeypot field and basic rate limiting. Show clear success and error states inline, never an alert.
- Booking link to a Cal.com or Calendly URL. I will supply it. Use an environment variable with a `TODO` default.
- Company details block: Zypa Tech Limited, RC 8918370. Registered address: No. 2 Samson Akinsulure Close, Katampe, FCT, Abuja. Office address: 4B CRD Layout, Lugbe, FCT, Abuja. Email techzypa@gmail.com. Phone +234 814 121 5567.

## Site-wide

**Header.** Sticky, logo left, five links, and a "Start a project" button. Mobile menu must be keyboard accessible and trap focus.

**WhatsApp button.** Floating, bottom right, linking to `https://wa.me/2348141215567` with a prefilled message. This is how most Nigerian clients will actually make contact, so give it real prominence without letting it cover content on mobile.

**Footer.** Logo, navigation, contact details, RC number, social handle `@zypatech`, copyright.

**SEO.** Per-page metadata, Open Graph and Twitter cards, an OG image using the brand, `sitemap.ts`, `robots.ts`, canonical URLs. Add JSON-LD for `Organization` and `LocalBusiness` including the Abuja address, phone, email and founder. Target phrases like "software development company Abuja", "web app developers Nigeria", "mobile app development Abuja".

**Performance.** Lighthouse 95 or above on performance, accessibility, best practices and SEO. Optimise and lazy-load all images. Keep JavaScript minimal, since a meaningful share of visitors will be on mid-range Android phones and metered data.

**Accessibility.** WCAG 2.1 AA. Visible keyboard focus everywhere, semantic landmarks, alt text on every image, `prefers-reduced-motion` respected, and verified contrast. Note that orange `#EE6625` on white fails AA for small text, so use charcoal for body copy and reserve orange for large text, accents and interactive elements with sufficient weight.

**Responsive.** Design mobile first, then scale up. Test at 360px, 768px, 1280px and 1600px.

## Copy rules

Write in British English. No em dashes anywhere, in code comments or on the page. Sentence case for headings. Active voice. Buttons say what happens: "Send message", not "Submit". No filler like "cutting-edge", "innovative", "solutions" or "seamless". Do not claim a founding year, a client count, a project count or a team size anywhere on the site.

## Deliverables

A running Next.js project with a README covering local setup, environment variables and deployment, a `.env.example`, all copy in a structured content layer rather than hardcoded in JSX so I can edit it without touching components, and `TODO` markers listing every asset you still need from me.

Start with the design plan. Do not begin coding until I approve it.