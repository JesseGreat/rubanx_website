import type { Metadata } from "next";

import { ButtonLink } from "@/components/button";
import { ContactForm } from "@/components/contact-form";
import { ArrowLink, PageHeader, Rule } from "@/components/primitives";
import { contactPage } from "@/content/contact";
import { bookingReady, bookingUrl, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Zypa Tech. Offices in Lugbe, Abuja. Send a message, book a call or reach us on WhatsApp.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${site.shortName}`,
    description:
      "Start a project with Zypa Tech. Offices in Lugbe, Abuja. Send a message, book a call or reach us on WhatsApp.",
    url: `${site.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader heading={contactPage.heading} lede={contactPage.lede} />

      {/*
        Marked so the floating WhatsApp control retracts while the form and
        the contact details are on screen.
      */}
      <div className="shell pb-20 md:pb-28" data-whatsapp-hide>
        <Rule />
        <div className="grid gap-14 pt-12 md:grid-cols-12 md:gap-16 md:pt-16">
          <div className="md:col-span-7">
            <h2 className="text-h3 font-semibold">
              {contactPage.form.heading}
            </h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="md:col-span-5 md:border-l md:border-rule md:pl-12">
            {/* The single warm tint block on this page. */}
            <div className="bg-tint p-7">
              <h2 className="text-h3 font-semibold">
                {contactPage.booking.heading}
              </h2>
              <p className="mt-3 text-meta text-ink">
                {contactPage.booking.body}
              </p>
              {bookingReady ? (
                <div className="mt-6">
                  <ButtonLink href={bookingUrl} className="on-tint">
                    {contactPage.booking.label}
                  </ButtonLink>
                </div>
              ) : (
                <p className="mt-5 border-t border-rule-strong pt-4 text-meta font-semibold text-muted">
                  TODO: {contactPage.booking.pending}
                </p>
              )}
            </div>

            <div className="mt-10">
              <h2 className="text-h3 font-semibold">
                {contactPage.details.heading}
              </h2>

              <dl className="mt-6 space-y-6 text-meta">
                <div>
                  <dt className="text-muted">Registered name</dt>
                  <dd className="mt-1 font-semibold text-charcoal">
                    {site.name}
                  </dd>
                  <dd className="text-ink">{site.rcNumber}</dd>
                </div>

                {[site.addresses.registered, site.addresses.office].map(
                  (address) => (
                    <div key={address.label}>
                      <dt className="text-muted">{address.label}</dt>
                      <dd className="mt-1 text-ink">
                        <address className="not-italic">
                          {address.lines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </address>
                      </dd>
                    </div>
                  ),
                )}

                <div>
                  <dt className="text-muted">Email</dt>
                  <dd className="mt-2">
                    <ArrowLink href={`mailto:${site.email}`}>
                      {site.email}
                    </ArrowLink>
                  </dd>
                </div>

                <div>
                  <dt className="text-muted">Phone</dt>
                  <dd className="mt-2">
                    <ArrowLink href={site.phoneHref}>{site.phone}</ArrowLink>
                  </dd>
                </div>

                <div>
                  <dt className="text-muted">WhatsApp</dt>
                  <dd className="mt-2">
                    <ArrowLink
                      href={`${site.whatsapp.href}?text=${encodeURIComponent(
                        site.whatsapp.message,
                      )}`}
                    >
                      {site.whatsapp.label}
                    </ArrowLink>
                  </dd>
                </div>

                <div>
                  <dt className="text-muted">Social</dt>
                  <dd className="mt-2">
                    <ArrowLink href={site.social.url}>
                      {site.social.handle}
                    </ArrowLink>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
