import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { Chevron } from "./icons";

/**
 * Contrast note.
 *
 * White on Velocity Orange is 3.2:1, which fails AA for anything that is not
 * large text. Charcoal on Velocity Orange is 5.1:1 and passes AA at every
 * size, so the primary button carries a charcoal label. Both are brand
 * colours, so nothing is introduced to make this work.
 */

type Variant = "primary" | "secondary" | "secondary-dark";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold text-[1.0625rem] leading-none px-6 py-4 transition-colors duration-150";

const variants: Record<Variant, string> = {
  primary:
    "on-orange bg-orange text-charcoal hover:bg-orange-press hover:text-white",
  secondary:
    "border border-rule-strong text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-white",
  "secondary-dark":
    "border border-rule-dark-strong text-white hover:border-white hover:bg-white hover:text-charcoal",
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  withChevron?: boolean;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
  withChevron = true,
  onClick,
}: ButtonLinkProps) {
  const external = href.startsWith("http");
  const content = (
    <>
      {children}
      {withChevron ? <Chevron className="advance h-3 w-3" /> : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={`${base} ${variants[variant]} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {content}
    </Link>
  );
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} disabled:opacity-60 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
