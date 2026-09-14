import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/button";
import { Chevron } from "@/components/icons";
import { AssetTodo, PageHeader } from "@/components/primitives";
import { cta, site } from "@/content/site";
import { projects } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects from Zypa Tech: SafeBarter, Guzman Career Services, FuelSmart and Curator. Escrow dashboards, client portals, booking systems and mobile apps.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: `Work | ${site.shortName}`,
    description:
      "Selected projects from Zypa Tech: escrow dashboards, client portals, booking systems and mobile apps.",
    url: `${site.url}/work`,
  },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        heading="Selected work"
        lede="Each of these was delivered and handed over to the client. Every one is described in terms of the problem it solved rather than the technology behind it."
      />

      <div className="border-t border-rule">
        {projects.map((project, index) => (
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
                  <h2 className="text-h2 font-bold transition-colors group-hover:text-orange-press">
                    {project.name}
                  </h2>
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
                  {project.images[0] ? (
                    <Image
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      width={1120}
                      height={700}
                      sizes="(max-width: 768px) 100vw, 58vw"
                      loading="lazy"
                      className="w-full"
                    />
                  ) : (
                    <AssetTodo label={`${project.name} screenshot`} />
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* The single warm tint block on this page. */}
      <section className="bg-tint">
        <div className="shell py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <h2 className="text-h2 font-bold md:col-span-7">
              Your project could be the next one here.
            </h2>
            <div className="md:col-span-5 md:justify-self-end">
              <ButtonLink href={cta.primary.href} className="on-tint">
                {cta.primary.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
