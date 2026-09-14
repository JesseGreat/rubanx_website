import type { Metadata } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/button";
import {
  ArrowLink,
  PageHeader,
  Section,
  SectionHead,
  Tags,
} from "@/components/primitives";
import { Breadcrumbs } from "@/components/seo";
import { engagementModels, process, services } from "@/content/services";
import { cta } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Software development services in Abuja",
  description:
    "Custom web applications, mobile apps, business websites and e-commerce, UI/UX design, systems integration and support, from a software company in Abuja.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <PageHeader
        heading="What we build"
        lede="Each of these starts with the commercial problem and ends with software your team owns outright and can run without us."
        aside={
          /* The single warm tint element on this page. */
          <div className="bg-tint p-7">
            <span aria-hidden="true" className="block h-[3px] w-10 bg-orange" />
            <p className="mt-4 text-meta text-ink">
              Not sure which of these you need? Describe the problem and we will
              tell you.
            </p>
            <div className="mt-6">
              <ButtonLink href={cta.primary.href} className="w-full sm:w-auto">
                {cta.primary.label}
              </ButtonLink>
            </div>
          </div>
        }
      />

      {/* The six services, ruled rather than boxed. */}
      <div className="shell">
        <ul className="grid border-t border-rule md:grid-cols-2">
          {services.map((service, index) => (
            <li
              key={service.slug}
              id={service.slug}
              className={`border-b border-rule py-10 md:py-12 ${
                index % 2 === 0
                  ? "md:pr-12"
                  : "md:border-l md:border-rule md:pl-12"
              }`}
            >
              <h2 className="text-h3 font-semibold">
                <Link
                  href={`/services/${service.slug}`}
                  className="transition-colors hover:text-orange-press"
                >
                  {service.title}
                </Link>
              </h2>
              <p className="measure mt-4 text-ink">{service.body}</p>
              <div className="mt-6">
                <Tags items={service.tags} />
              </div>
              <div className="mt-6">
                <ArrowLink href={`/services/${service.slug}`}>
                  {`More on ${service.title.charAt(0).toLowerCase()}${service.title.slice(1)}`}
                </ArrowLink>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/*
        The delivery process. This content genuinely is a sequence, which is
        the only place numbered markers appear on this site.
      */}
      <Section tone="dark" id="process" className="mt-20 scroll-mt-20 md:mt-28">
        <SectionHead heading="How a project runs" tone="dark" />
        <ol className="border-t border-rule-dark">
          {process.map((step) => (
            <li
              key={step.number}
              className="grid gap-3 border-b border-rule-dark py-8 md:grid-cols-12 md:gap-10 md:py-10"
            >
              <span
                aria-hidden="true"
                className="text-h3 font-bold text-orange md:col-span-1"
              >
                {step.number}
              </span>
              <h3 className="text-h3 font-semibold text-white md:col-span-3">
                {step.title}
              </h3>
              <p className="measure text-muted-dark md:col-span-8">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
        <div className="h-16 md:h-20" />
      </Section>

      {/* Engagement models. */}
      <Section topRule>
        <SectionHead heading="How we work together" />
        <ul className="grid border-t border-rule md:grid-cols-3">
          {engagementModels.map((model, index) => (
            <li
              key={model.title}
              className={`border-b border-rule py-8 md:py-10 ${
                index === 0 ? "md:pr-8" : "md:border-l md:border-rule md:px-8"
              } ${index === 2 ? "md:pr-0" : ""}`}
            >
              <h3 className="text-h3 font-semibold">{model.title}</h3>
              <p className="mt-4 text-ink">{model.body}</p>
              <p className="mt-4 text-meta text-muted">{model.suitedTo}</p>
            </li>
          ))}
        </ul>
        <div className="py-14 md:py-20">
          <ButtonLink href={cta.primary.href}>{cta.primary.label}</ButtonLink>
        </div>
      </Section>
    </>
  );
}
