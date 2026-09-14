import Link from "next/link";

import { Lockup } from "./lockup";
import { nav, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    /*
      Marked so the floating WhatsApp control retracts rather than sitting on
      top of the contact details at the end of every page.
    */
    <footer className="bg-charcoal text-white" data-whatsapp-hide>
      <div className="shell pt-16 pb-10 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <Lockup height={22} tone="white" />
            <p className="mt-4 max-w-[34ch] text-meta text-muted-dark">
              {site.description}
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3 md:border-l md:border-rule-dark md:pl-8">
            <h2 className="text-meta font-semibold text-white">Pages</h2>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-meta text-muted-dark transition-colors hover:text-orange"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-5 md:border-l md:border-rule-dark md:pl-8">
            <h2 className="text-meta font-semibold text-white">Contact</h2>
            <ul className="mt-4 space-y-3 text-meta text-muted-dark">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-orange"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="transition-colors hover:text-orange"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.social.url}
                  className="transition-colors hover:text-orange"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.social.handle}
                </a>
              </li>
            </ul>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {[site.addresses.office, site.addresses.registered].map(
                (address) => (
                  <address
                    key={address.label}
                    className="text-meta not-italic text-muted-dark"
                  >
                    <span className="block font-semibold text-white">
                      {address.label}
                    </span>
                    {address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-rule-dark pt-6 text-meta text-muted-dark sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.name}, {site.rcNumber}
          </p>
          <p>
            &copy; {year} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
