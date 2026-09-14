import Link from "next/link";

import type { Metadata } from "next";

import { ButtonLink } from "@/components/button";
import { Faqs } from "@/components/faqs";
import { Chevron } from "@/components/icons";
import {
  ArrowLink,
  Section,
  SectionHead,
  Tags,
} from "@/components/primitives";
import { ProjectPlate } from "@/components/project-plate";
import { RevealRule } from "@/components/reveal-rule";
import { faqs, hero, pullQuote, sections } from "@/content/home";
import { services } from "@/content/services";
import { cta, homeSeo, site } from "@/content/site";
import { projects } from "@/content/work";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: homeSeo.title,
  description: homeSeo.description,
  path: "/",
  absoluteTitle: true,
});

const featured = projects.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* Hero. Asymmetric split, divided by a full height hairline. */}
      <section className="shell relative isolate pt-12 pb-16 md:pt-20 md:pb-24">
        <div
          aria-hidden="true"
          className="blueprint absolute inset-y-0 right-0 -z-10 w-full md:w-3/5"
        />
        <div className="grid gap-10 md:grid-cols-12 md:gap-0">
          <div className="md:col-span-7 md:pr-12 lg:col-span-8 lg:pr-20">
            <h1 className="text-display font-bold">{hero.heading}</h1>
            <p className="measure-lede mt-8 text-lede">{hero.lede}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <ButtonLink href={cta.primary.href}>
                {cta.primary.label}
              </ButtonLink>
              <ButtonLink href={cta.work.href} variant="secondary">
                {cta.work.label}
              </ButtonLink>
            </div>
          </div>

          <div className="md:col-span-5 md:border-l md:border-rule md:pl-12 lg:col-span-4">
            <div className="border-t border-rule pt-8 md:border-t-0 md:pt-2">
              <dl className="grid gap-6">
                <div>
                  <dt className="text-meta text-muted">Based in</dt>
                  <dd className="mt-1 text-h3 font-semibold text-charcoal">
                    {hero.locus.place}
                  </dd>
                </div>
                <div>
                  <dt className="text-meta text-muted">Reach</dt>
                  <dd className="mt-1 text-meta text-ink">{hero.locus.reach}</dd>
                </div>
              </dl>
              <p className="mt-6 text-meta font-semibold text-charcoal">
                <span
                  aria-hidden="true"
                  className="mb-3 block h-[3px] w-10 bg-orange"
                />
                {hero.locus.availability}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we build. A ruled matrix, no cards, no shadows. */}
      <Section topRule>
        <SectionHead
          heading={sections.services.heading}
          link={sections.services.link}
        />
        <ul className="grid border-t border-rule md:grid-cols-2">
          {services.map((service, index) => (
            <li
              key={service.slug}
              className={`border-b border-rule py-8 md:py-10 ${
                index % 2 === 0 ? "md:pr-12" : "md:border-l md:border-rule md:pl-12"
              }`}
            >
              <h3 className="text-h3 font-semibold">
                <Link
                  href={`/services/${service.slug}`}
                  className="transition-colors hover:text-orange-press"
                >
                  {service.title}
                </Link>
              </h3>
              <p className="measure mt-3 text-ink">{service.summary}</p>
              <div className="mt-5">
                <Tags items={service.tags} />
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Selected work. Wide rows, drawings alternating sides. Client screens are never shown. */}
      <Section topRule>
        <SectionHead heading={sections.work.heading} link={sections.work.link} />
      </Section>

      <div className="border-t border-rule">
        {featured.map((project, index) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group block border-b border-rule"
          >
            <div className="shell">
              <div className="grid items-center gap-8 py-10 md:grid-cols-12 md:gap-12 md:py-14">
                <div
                  className={`md:col-span-5 ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <h3 className="text-h2 font-bold transition-colors group-hover:text-orange-press">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-meta text-muted">{project.sector}</p>
                  <p className="measure mt-5 text-ink">{project.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-meta font-semibold text-charcoal">
                    <span className="border-b border-current pb-0.5">
                      Read the case
                    </span>
                    <Chevron className="advance h-3 w-3 text-orange" />
                  </span>
                </div>

                <div
                  className={`md:col-span-7 ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <ProjectPlate slug={project.slug} label={project.plateAlt} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* The one bold typographic moment on the page. */}
      <section className="relative isolate overflow-hidden bg-charcoal text-white">
        <div
          aria-hidden="true"
          className="blueprint blueprint-dark absolute inset-y-0 right-0 -z-10 w-full md:w-1/2"
        />
        <div className="shell py-20 md:py-32">
          <RevealRule tone="dark" />
          <blockquote className="mt-12 md:mt-16">
            <p className="text-quote font-semibold text-white">
              {pullQuote.lead}{" "}
              <span className="text-orange">{pullQuote.emphasis}</span>
            </p>
          </blockquote>
        </div>
      </section>

      <Faqs faqs={faqs} />

      {/* The single warm tint block on this page. */}
      <section className="bg-tint">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-12">
            <div className="md:col-span-7">
              <h2 className="text-h2 font-bold">{sections.closing.heading}</h2>
              <p className="measure mt-5 text-ink">{sections.closing.body}</p>
            </div>
            <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
              <ButtonLink href={cta.primary.href} className="on-tint">
                {cta.primary.label}
              </ButtonLink>
              <ArrowLink href={`mailto:${site.email}`}>{site.email}</ArrowLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
