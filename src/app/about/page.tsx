import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink } from "@/components/button";
import { PageHeader, Section, SectionHead } from "@/components/primitives";
import { assurances, leaders, staffing, story } from "@/content/about";
import { cta, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zypa Tech Limited is a software engineering and product design company in Abuja. We work as the delivery team for organisations that need engineering capacity or need to move faster.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About | ${site.shortName}`,
    description:
      "A software engineering and product design company in Abuja, working as the delivery team for organisations across Nigeria and beyond.",
    url: `${site.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        heading={story.heading}
        lede={story.paragraphs[0]}
        aside={
          <div className="border-t border-rule pt-6 md:border-t-0 md:pt-2">
            <span aria-hidden="true" className="block h-[3px] w-10 bg-orange" />
            <p className="mt-4 text-meta text-ink">{story.paragraphs[1]}</p>
          </div>
        }
      />

      {/* Leadership. */}
      <Section topRule>
        <SectionHead heading="Leadership" />
        <ul className="grid border-t border-rule md:grid-cols-2">
          {leaders.map((leader, index) => (
            <li
              key={leader.name}
              className={`border-b border-rule py-10 md:py-12 ${
                index === 0
                  ? "md:pr-12"
                  : "md:border-l md:border-rule md:pl-12"
              }`}
            >
              <div className="max-w-[18rem]">
                {leader.photo ? (
                  /*
                    The two photographs arrive at different aspect ratios, so
                    they are cropped to a common 4:5 box to keep the ruled
                    grid aligned.
                  */
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={leader.photo}
                      alt={leader.photoAlt}
                      fill
                      sizes="(max-width: 768px) 60vw, 18rem"
                      loading="lazy"
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  /* No photograph yet: a quiet monogram, never a visible gap. */
                  <div
                    aria-hidden="true"
                    className="plate flex aspect-[4/5] w-full items-end border border-rule-strong p-5"
                  >
                    <span className="text-h2 font-bold text-charcoal">
                      {leader.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="mt-6 text-h3 font-semibold">{leader.name}</h3>
              {/*
                The role is small text, so it is set in charcoal rather than
                orange. Orange on white is 3.2:1 and only clears AA at large
                sizes, so the accent is carried by the rule instead.
              */}
              <p className="mt-2 flex items-center gap-3 text-meta font-semibold text-charcoal">
                <span aria-hidden="true" className="h-[3px] w-6 shrink-0 bg-orange" />
                {leader.role}
              </p>
              <p className="measure mt-4 text-ink">{leader.bio}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* How we staff a project. The single warm tint block on this page. */}
      <section className="mt-20 bg-tint md:mt-28">
        <div className="shell py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:gap-12">
            <h2 className="text-h2 font-bold md:col-span-5">
              {staffing.heading}
            </h2>
            <div className="space-y-5 md:col-span-7">
              {staffing.paragraphs.map((paragraph) => (
                <p key={paragraph} className="measure text-ink">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commercial assurances, written for tender readers. */}
      <Section tone="dark">
        <SectionHead heading={assurances.heading} tone="dark" />
        <p className="measure -mt-4 pb-10 text-muted-dark">
          {assurances.intro}
        </p>
        <ul className="grid border-t border-rule-dark md:grid-cols-2">
          {assurances.items.map((item, index) => (
            <li
              key={item.title}
              className={`border-b border-rule-dark py-7 ${
                index % 2 === 0
                  ? "md:pr-12"
                  : "md:border-l md:border-rule-dark md:pl-12"
              } ${
                /* An odd count leaves the last item alone, so it spans both
                   columns rather than trailing a half-width rule. */
                index === assurances.items.length - 1 && index % 2 === 0
                  ? "md:col-span-2 md:pr-0"
                  : ""
              }`}
            >
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="measure mt-2 text-meta text-muted-dark">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
        <div className="py-14 md:py-20">
          <ButtonLink href={cta.primary.href} variant="secondary-dark">
            {cta.primary.label}
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
