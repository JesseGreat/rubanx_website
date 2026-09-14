import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/button";
import {
  ArrowLink,
  AssetTodo,
  PageHeader,
  Rule,
} from "@/components/primitives";
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
            <div>
              <dt className="text-meta text-muted">Live site</dt>
              <dd className="mt-1">
                {project.liveUrl ? (
                  <ArrowLink href={project.liveUrl}>
                    {project.liveUrl.replace(/^https?:\/\//, "")}
                  </ArrowLink>
                ) : (
                  <span className="text-meta font-semibold text-muted">
                    TODO: live URL to be supplied
                  </span>
                )}
              </dd>
            </div>
          </dl>
        }
      />

      {/* Screenshots. */}
      <div className="shell">
        {project.images.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {project.images.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={1120}
                height={700}
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                className="w-full"
              />
            ))}
          </div>
        ) : (
          <AssetTodo
            label={`${project.name} screenshots. Save them to /public/work/${project.slug}/ and list them in src/content/work.ts`}
            ratio="aspect-[21/9]"
          />
        )}
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

      {/* Measurable result. Left empty on purpose until real figures arrive. */}
      <div className="shell pt-12 md:pt-16">
        {project.result ? (
          <div className="bg-tint p-8 md:p-12">
            <p className="text-display font-bold text-charcoal">
              {project.result.value}
            </p>
            <p className="mt-3 text-lede text-ink">{project.result.label}</p>
          </div>
        ) : (
          <AssetTodo
            label={`measurable result for ${project.name}. Add it to the result field in src/content/work.ts. No figure is invented here.`}
            ratio="min-h-[7rem]"
          />
        )}
      </div>

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
