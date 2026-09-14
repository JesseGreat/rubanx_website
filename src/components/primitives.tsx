import Link from "next/link";
import type { ReactNode } from "react";

import { Chevron } from "./icons";
import { RevealRule } from "./reveal-rule";

/**
 * The whole layout vocabulary. Structure comes from hairlines and alignment,
 * never from a card on a shadow. Nothing in this file sets a box-shadow.
 */

type Tone = "light" | "dark" | "tint";

const tones: Record<Tone, string> = {
  light: "bg-white text-ink",
  dark: "bg-charcoal text-white",
  tint: "bg-tint text-ink",
};

type SectionProps = {
  children: ReactNode;
  tone?: Tone;
  /** Draws a hairline across the top of the section as it enters the viewport. */
  topRule?: boolean;
  className?: string;
  id?: string;
  as?: "section" | "div" | "footer";
};

export function Section({
  children,
  tone = "light",
  topRule = false,
  className = "",
  id,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={`${tones[tone]} ${className}`}>
      <div className="shell">
        {topRule ? <RevealRule tone={tone} /> : null}
        {children}
      </div>
    </Tag>
  );
}

/** A plain hairline. */
export function Rule({
  tone = "light",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <div
      role="presentation"
      className={`h-px w-full ${
        tone === "dark" ? "bg-rule-dark" : "bg-rule"
      } ${className}`}
    />
  );
}

/**
 * A section heading paired with an optional link through to the full page.
 * There is no tracked-out all-caps eyebrow above it. The short orange rule
 * does that job instead, and only on the few sections that need it.
 */
export function SectionHead({
  heading,
  link,
  tone = "light",
  marker = false,
}: {
  heading: string;
  link?: { label: string; href: string };
  tone?: Tone;
  marker?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pt-12 pb-10 md:pt-16 md:pb-14">
      <h2
        className={`text-h2 font-bold ${tone === "dark" ? "text-white" : ""}`}
      >
        {marker ? (
          <span
            aria-hidden="true"
            className="mb-4 block h-[3px] w-10 bg-orange"
          />
        ) : null}
        {heading}
      </h2>
      {link ? (
        <ArrowLink href={link.href} tone={tone}>
          {link.label}
        </ArrowLink>
      ) : null}
    </div>
  );
}

/** A text link that advances a chevron on hover and focus. */
export function ArrowLink({
  href,
  children,
  tone = "light",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  /*
    Small text, so the hover state is carried by the underline rather than by
    a colour change. Orange on white is 3.2:1, which clears AA for a non-text
    element like a rule but not for text this size.
  */
  const colour =
    tone === "dark"
      ? "text-white hover:text-orange"
      : "text-charcoal [&_span]:hover:border-orange";

  const classes = `group inline-flex items-center gap-2 text-meta font-semibold ${colour} ${className}`;
  const content = (
    <>
      <span className="border-b border-current pb-0.5 transition-colors">
        {children}
      </span>
      <Chevron className="advance h-3 w-3 text-orange" />
    </>
  );

  /* mailto, tel and off-site links are plain anchors, not router links. */
  if (/^(https?:|mailto:|tel:)/.test(href)) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

/**
 * Capability tags. Divided by vertical hairlines, never joined by middle dots.
 */
export function Tags({
  items,
  tone = "light",
}: {
  items: string[];
  tone?: Tone;
}) {
  const divider = tone === "dark" ? "border-rule-dark" : "border-rule-strong";
  const colour = tone === "dark" ? "text-muted-dark" : "text-muted";

  return (
    <ul className={`flex flex-wrap items-center text-meta ${colour}`}>
      {items.map((item, index) => (
        <li
          key={item}
          className={`${
            index === 0 ? "" : `ml-3 border-l ${divider} pl-3`
          } py-0.5`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** The quiet label used beside page headings. */
export function PageHeader({
  heading,
  lede,
  aside,
}: {
  heading: string;
  lede: string;
  aside?: ReactNode;
}) {
  return (
    <header className="shell pt-14 pb-14 md:pt-24 md:pb-20">
      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-8">
          <h1 className="text-h2 font-bold md:text-display">{heading}</h1>
          <p className="measure-lede mt-6 text-lede text-ink md:mt-8">{lede}</p>
        </div>
        {aside ? (
          <div className="md:col-span-4 md:border-l md:border-rule md:pl-10">
            {aside}
          </div>
        ) : null}
      </div>
    </header>
  );
}

/** An explicit marker for an asset the client still owes us. */
export function AssetTodo({
  label,
  className = "",
  ratio = "aspect-[16/10]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-rule-strong p-6 text-center ${ratio} ${className}`}
    >
      <span className="text-meta font-semibold text-muted">TODO: {label}</span>
    </div>
  );
}
