import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/button";
import { Faqs } from "@/components/faqs";
import { Chevron } from "@/components/icons";
import {
  ArrowLink,
  PageHeader,
  Section,
  SectionHead,
} from "@/components/primitives";
import { ProjectPlate } from "@/components/project-plate";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getService, services } from "@/content/services";
import { cta, site } from "@/content/site";
import { projects } from "@/content/work";
import { serviceJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return { title: "Service not found" };

  return pageMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const related = service.relatedWork
    .map((workSlug) => projects.find((project) => project.slug === workSlug))
    .filter((project) => project !== undefined);
  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />

      <PageHeader
        heading={service.title}
        lede={service.lede}
        aside={
          <div className="border-t border-rule pt-6 md:border-t-0 md:pt-2">
            <dl className="space-y-6">
              <div>
                <dt className="text-meta text-muted">Delivered from</dt>
                <dd className="mt-1 font-semibold text-charcoal">
                  {site.addresses.office.lines[1]}
                </dd>
              </div>
              <div>
                <dt className="text-meta text-muted">For</dt>
                <dd className="mt-1 text-meta text-ink">
                  Businesses and organisations across Nigeria and beyond
                </dd>
              </div>
            </dl>
            <div className="mt-8">
              <ButtonLink href={cta.primary.href}>{cta.primary.label}</ButtonLink>
            </div>
          </div>
        }
      />

      {/* What is included. A ruled matrix, like the services page. */}
      <Section topRule>
        <SectionHead heading="What is included" />
        <ul className="grid border-t border-rule md:grid-cols-2">
          {service.included.map((item, index) => (
            <li
              key={item.title}
              className={`border-b border-rule py-8 md:py-10 ${
                index % 2 === 0
                  ? "md:pr-12"
                  : "md:border-l md:border-rule md:pl-12"
              }`}
            >
              <h3 className="text-h3 font-semibold">{item.title}</h3>
              <p className="measure mt-3 text-ink">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Who it suits. The single warm tint block on this page. */}
      <section className="mt-20 bg-tint md:mt-28">
        <div className="shell py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <h2 className="text-h2 font-bold">When this is the right fit</h2>
              <div className="mt-6">
                <ArrowLink href="/services#process">
                  How a project runs
                </ArrowLink>
              </div>
            </div>
            <ul className="border-t border-rule-strong md:col-span-7">
              {service.suitedTo.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-4 border-b border-rule-strong py-5"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.8em] h-[3px] w-6 shrink-0 bg-orange"
                  />
                  <span className="text-ink">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related work, drawn in outline. */}
      {related.length > 0 ? (
        <Section>
          <SectionHead
            heading="Related work"
            link={{ label: "See all work", href: "/work" }}
          />
          <ul className="grid gap-10 border-t border-rule pt-10 md:grid-cols-2 md:gap-12">
            {related.map((project) => (
              <li key={project.slug}>
                <Link href={`/work/${project.slug}`} className="group block">
                  <ProjectPlate slug={project.slug} label={project.plateAlt} />
                  <h3 className="mt-6 text-h3 font-semibold transition-colors group-hover:text-orange-press">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-meta text-muted">{project.sector}</p>
                  <p className="measure mt-3 text-ink">{project.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <div className={related.length > 0 ? "mt-16 md:mt-24" : "mt-8"}>
        <Faqs
          faqs={service.faqs}
          heading={`${service.title}: common questions`}
        />
      </div>

      {/* Other services, for readers who landed on the wrong one. */}
      <Section tone="dark">
        <SectionHead heading="Other services" tone="dark" />
        <ul className="grid border-t border-rule-dark md:grid-cols-2">
          {others.map((item, index) => (
            <li
              key={item.slug}
              className={`border-b border-rule-dark ${
                index % 2 === 0 ? "md:pr-12" : "md:border-l md:border-rule-dark md:pl-12"
              }`}
            >
              <Link
                href={`/services/${item.slug}`}
                className="group flex items-center justify-between gap-6 py-6"
              >
                <span>
                  <span className="block font-semibold text-white transition-colors group-hover:text-orange">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-meta text-muted-dark">
                    {item.summary}
                  </span>
                </span>
                <Chevron className="advance h-3.5 w-3.5 shrink-0 text-orange" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="py-14 md:py-20">
          <ButtonLink href={cta.primary.href} variant="secondary-dark">
            Start a project like this
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
