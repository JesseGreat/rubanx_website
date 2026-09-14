import type { Faq } from "@/content/services";
import { faqJsonLd } from "@/lib/json-ld";

import { Section, SectionHead } from "./primitives";
import { JsonLd } from "./seo";

/**
 * Questions and answers as a ruled list of disclosures. The answers stay in
 * the page markup when closed, so search engines read them in full. There is
 * no animation: the marker swaps, nothing slides.
 */
export function Faqs({
  faqs,
  heading = "Questions we are asked",
}: {
  faqs: Faq[];
  heading?: string;
}) {
  return (
    <Section topRule>
      <div className="grid md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <SectionHead heading={heading} marker />
        </div>
        <ul className="border-t border-rule md:col-span-8 md:mt-16">
          {faqs.map((faq) => (
            <li key={faq.question} className="border-b border-rule">
              <details className="faq group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 md:py-7">
                  <h3 className="text-h3 font-semibold">{faq.question}</h3>
                  <span
                    aria-hidden="true"
                    className="relative mt-2.5 block h-3.5 w-3.5 shrink-0"
                  >
                    <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-orange" />
                    <span className="faq-vertical absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-orange" />
                  </span>
                </summary>
                <p className="measure -mt-1 pb-7 text-ink">{faq.answer}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-12 md:h-20" />
      <JsonLd data={faqJsonLd(faqs)} />
    </Section>
  );
}
