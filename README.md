# zypatech.online

Marketing website for **Zypa Tech Limited**, a software engineering and product
design company based in Abuja, Nigeria.

Next.js App Router, TypeScript, Tailwind CSS v4, deployed on Vercel.

---

## Local setup

```bash
npm install
cp .env.example .env.local   # then fill in the values below
npm run dev                  # http://localhost:3000
```

Other scripts:

```bash
npm run build       # production build
npm run start       # serve the production build
npm run lint        # eslint
npm run typecheck   # tsc --noEmit
```

## Environment variables

Copy `.env.example` to `.env.local` for development, and set the same values in
the Vercel project settings for preview and production.

| Variable | Required | What it does |
|---|---|---|
| `RESEND_API_KEY` | Yes, for the contact form | Resend API key. Without it the form returns an error state and nothing is sent. Create one at <https://resend.com/api-keys> |
| `CONTACT_TO_EMAIL` | No | Where enquiries are delivered. Defaults to `techzypa@gmail.com` |
| `CONTACT_FROM_EMAIL` | No | The sending address. Resend only sends from a verified domain, so this stays on the Resend onboarding sender until `zypatech.online` is verified |
| `NEXT_PUBLIC_BOOKING_URL` | No | Cal.com or Calendly link. While it is `TODO` or unset, the contact page points visitors to the form and WhatsApp instead of showing a dead button |

## Deployment

1. Import the repository into Vercel. The framework is detected automatically
   and no build settings need changing.
2. Add the environment variables above under **Settings, Environment
   Variables**, for Production and Preview.
3. Add `zypatech.online` under **Settings, Domains** and point the DNS at
   Vercel.
4. If the canonical domain ever changes, update `site.url` in
   `src/content/site.ts`. Metadata, canonicals, the sitemap, `robots.txt` and
   the JSON-LD all read from that one value.

There is no `output: 'export'` and there must not be: the contact form posts to
a route handler at `/api/contact`, which a static export cannot serve.

## Editing the copy

**All text on the site lives in `src/content/`.** Components hold no copy, so
wording can be changed without touching a component.

| File | What it holds |
|---|---|
| `site.ts` | Company details, addresses, phone, email, RC number, navigation, WhatsApp, SEO keywords |
| `home.ts` | Hero, section headings, the pull quote, the closing call to action |
| `services.ts` | The six services, the five delivery steps, the three engagement models |
| `work.ts` | The four projects. Client screens are never published; each project is drawn as an abstract plate (`src/components/project-plate.tsx`). `liveUrl` and `result` render only when set |
| `about.ts` | Company story, leadership, staffing, the commercial assurances |
| `contact.ts` | Contact page copy, project type options, budget ranges, form labels |

## Assets still needed

These are marked with `TODO` in the code and render a visible asset-needed
marker on the page, so nothing silently breaks while they are outstanding.

- [ ] **Master logo files as SVG.** `/public/brand/` currently holds PNGs
      derived from the supplied artwork: `lockup-orange.png`,
      `lockup-white.png`, `wordmark-orange.png`, `chevron-orange.png`. The
      brand guide names SVG as the correct format for web. Replace the files
      and update the `src` values in `src/components/lockup.tsx`.
- [ ] **Favicon and app icon from the real monogram.** `/public/icon.png`,
      `/public/favicon-512.png` and `/public/apple-icon.png` are generated from
      the chevron cropped out of the supplied lockup. Replace them with the
      master monogram when it is available.
- [ ] **Project screenshots.** Save to `/public/work/<slug>/` and list them in
      the `images` array of each project in `src/content/work.ts`.
- [ ] **Live URLs** for each project, in the `liveUrl` field of
      `src/content/work.ts`.
- [ ] **A measurable result per project**, in the `result` field of
      `src/content/work.ts`. These are deliberately empty. No figure is
      invented anywhere on this site.
- [ ] **Booking link.** Set `NEXT_PUBLIC_BOOKING_URL`.
- [ ] **Resend domain verification** for `zypatech.online`, then update
      `CONTACT_FROM_EMAIL`.
- [ ] **Confirm the social profile URL** for `@zypatech` in
      `src/content/site.ts`. The handle is correct; the link is a placeholder.

## Design system

The concept is **ruled, not boxed**. Structure comes from hairlines and
alignment. No content surface in this codebase carries a shadow, and there are
no gradients.

**Colour.** Defined once in `src/app/globals.css` under Tailwind's `@theme`.
Velocity Orange `#EE6625`, Zypa Charcoal `#231F20`, body ink `#1C1819`, white,
and the warm tint `#FDF1EA` used for exactly one highlighted element per page.

Contrast, verified rather than assumed:

- Ink on white is 15.6:1, white on charcoal is 16.4:1.
- Orange on white is 3.2:1. That fails AA for normal text, so **orange is never
  used for small text on white.** It is reserved for rules, chevrons, large
  headings and interactive surfaces. Where a small label wanted an accent it
  gets an orange rule beside charcoal text instead.
- Orange on charcoal is 5.1:1, so orange text is allowed at any size inside
  dark sections.
- Primary buttons are **charcoal on orange**, which is 5.1:1 and passes AA at
  every size. White on orange would not.

**Type.** Montserrat throughout, loaded as a variable font through
`next/font/google`. Varela Round is loaded for exactly one string on the site,
the words "Tech Limited" in the logo lockup, where it stands in for Arial
Rounded MT Bold. The `zypa` wordmark is a custom logotype and is never
recreated in a typeface, per the brand guide, so it is always the image file.

**Motion** moves right, or not at all, taken from the chevron. There are three
behaviours in total: section rules draw in from the left, chevrons advance on
hover and focus, and the header compresses on scroll. The rule drawing is a
pure CSS scroll-driven animation and ships no JavaScript. Everything collapses
to its final state under `prefers-reduced-motion`.

## Accessibility

Targets WCAG 2.1 AA. Verified with axe-core across all six page types at 360px
and 1280px, with zero violations. The mobile menu traps focus, closes on
Escape, returns focus to its trigger, locks background scroll and reports
`aria-expanded`. Every page has a skip link, semantic landmarks and visible
keyboard focus.
