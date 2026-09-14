import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/button";
import {
  ArrowLink,
  PageHeader,
  Rule,
} from "@/components/primitives";
import { ProjectPlate } from "@/components/project-plate";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { cta, site } from "@/content/site";
import { getProject, projects } from "@/content/work";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.name,
    description: `${project.name}, ${project.sector.toLowerCase()}. ${project.summary}`,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} | ${site.shortName}`,
      description: project.summary,
      url: `${site.url}/work/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  const blocks = [
    { heading: "The challenge", body: project.challenge },
    { heading: "What we built", body: project.built },
    { heading: "The outcome", body: project.outcome },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Work", path: "/work" },
              { name: project.name, path: `/work/${project.slug}` },
            ]),
          ),
        }}
      />

      <PageHeader
        heading={project.name}
        lede={project.summary}
        aside={
          <dl className="space-y-6 border-t border-rule pt-6 md:border-t-0 md:pt-2">
            <div>
              <dt className="text-meta text-muted">Sector</dt>
              <dd className="mt-1 font-semibold text-charcoal">
                {project.sector}
              </dd>
            </div>
            {project.liveUrl ? (
              <div>
                <dt className="text-meta text-muted">Live site</dt>
                <dd className="mt-1">
                  <ArrowLink href={project.liveUrl}>
                    {project.liveUrl.replace(/^https?:\/\//, "")}
                  </ArrowLink>
                </dd>
              </div>
            ) : null}
            <div>
              <dt className="text-meta text-muted">Delivery</dt>
              <dd className="mt-1 font-semibold text-charcoal">
                Delivered and handed over
              </dd>
            </div>
          </dl>
        }
      />

      {/*
        The project drawn in outline. Client screens are never published: the
        product belongs to the client.
      */}
      <div className="shell">
        <ProjectPlate
          slug={project.slug}
          label={project.plateAlt}
          tone="dark"
          ratio="aspect-[16/10] md:aspect-[21/9]"
        />
        <p className="mt-4 flex items-start gap-3 text-meta text-muted">
          <span
            aria-hidden="true"
            className="mt-[0.7em] h-[3px] w-6 shrink-0 bg-orange"
          />
          Shown in outline. The product belongs to the client, so we do not
          publish its screens. A walkthrough can be arranged under NDA.
        </p>
      </div>

      {/* The challenge, what we built, the outcome. */}
      <div className="shell pt-16 md:pt-24">
        <Rule />
        {blocks.map((block) => (
          <section
            key={block.heading}
            className="grid gap-4 border-b border-rule py-10 md:grid-cols-12 md:gap-12 md:py-14"
          >
            <h2 className="text-h3 font-semibold md:col-span-4">
              {block.heading}
            </h2>
            <p className="measure text-ink md:col-span-8">{block.body}</p>
          </section>
        ))}
      </div>

      {/* Measurable result. Shown only once real, agreed figures exist. */}
      {project.result ? (
        <div className="shell pt-12 md:pt-16">
          <div className="bg-tint p-8 md:p-12">
            <p className="text-display font-bold text-charcoal">
              {project.result.value}
            </p>
            <p className="mt-3 text-lede text-ink">{project.result.label}</p>
          </div>
        </div>
      ) : null}

      <div className="shell flex flex-wrap items-center justify-between gap-6 py-16 md:py-24">
        <ButtonLink href={cta.primary.href}>
          Start a project like this
        </ButtonLink>
        <ArrowLink href={`/work/${next.slug}`}>
          Next project: {next.name}
        </ArrowLink>
      </div>
    </>
  );
}
