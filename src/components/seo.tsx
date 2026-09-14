import Link from "next/link";

import { Chevron } from "./icons";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/json-ld";

/** Structured data for search engines. Renders nothing visible. */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={jsonLdScript(data)}
    />
  );
}

/**
 * A visible breadcrumb trail with matching BreadcrumbList markup. Divided by
 * chevrons, never joined by middle dots. The current page is the last item
 * and is not a link.
 */
export function Breadcrumbs({
  trail,
}: {
  trail: { name: string; path: string }[];
}) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="shell pt-8 md:pt-10">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-meta text-muted">
          {trail.map((crumb, index) => {
            const last = index === trail.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-charcoal">
                    {crumb.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={crumb.path}
                      className="border-b border-transparent transition-colors hover:border-current hover:text-charcoal"
                    >
                      {crumb.name}
                    </Link>
                    <Chevron className="h-2.5 w-2.5 text-orange" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(trail)} />
    </>
  );
}
