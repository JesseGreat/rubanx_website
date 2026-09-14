import Image from "next/image";
import Link from "next/link";

import { site } from "@/content/site";

/**
 * The Zypa lockup.
 *
 * Brand guide rules honoured here:
 *  - The "zypa" wordmark is a custom logotype and is never recreated in a
 *    typeface, so it is always the supplied image file.
 *  - The wordmark and the chevron are never used separately. The only approved
 *    standalone use of the chevron is the app icon and favicon.
 *  - "Tech Limited" is set in a rounded face. Varela Round stands in for
 *    Arial Rounded MT Bold.
 *  - Minimum clear space on all sides equals the height of the letter "z",
 *    which is roughly 0.36 of this artwork's height.
 *  - No effects, no recolouring, no stretching. The intrinsic 849 by 252
 *    ratio is preserved.
 *
 * TODO: replace the PNG files in /public/brand/ with the master SVGs when the
 * client supplies them, then swap the src values below. The brand guide names
 * SVG as the correct format for web.
 */

const ARTWORK_RATIO = 849 / 252;
const CLEAR_SPACE_RATIO = 0.36;

type LockupProps = {
  /** Height of the wordmark artwork in pixels. */
  height?: number;
  tone?: "orange" | "white";
  /** Renders the lockup inside a link to the home page. */
  asLink?: boolean;
  /**
   * Preload the artwork. Only the header lockup should set this. The footer
   * lockup is below the fold and preloading it competes with the hero.
   */
  priority?: boolean;
  className?: string;
};

export function Lockup({
  height = 28,
  tone = "orange",
  asLink = true,
  priority = false,
  className = "",
}: LockupProps) {
  const width = Math.round(height * ARTWORK_RATIO);
  const clearSpace = Math.round(height * CLEAR_SPACE_RATIO);

  const mark = (
    <span
      className="inline-flex flex-col items-start"
      style={{ gap: `${Math.round(height * 0.16)}px` }}
    >
      <Image
        src={
          tone === "white"
            ? "/brand/lockup-white.png"
            : "/brand/lockup-orange.png"
        }
        alt={asLink ? `${site.name} home` : site.name}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        style={{ width: `${width}px`, height: `${height}px` }}
      />
      <span
        aria-hidden="true"
        className={
          tone === "white" ? "font-rounded text-white" : "font-rounded text-charcoal"
        }
        style={{
          /*
            Sized so "Tech Limited" spans roughly the width of the "zypa"
            wordmark above it, which is how the brand guide sets the lockup.
          */
          fontSize: `${(height * 0.56).toFixed(2)}px`,
          lineHeight: 1,
          letterSpacing: "-0.015em",
        }}
      >
        Tech Limited
      </span>
    </span>
  );

  if (!asLink) {
    return (
      <span className={className} style={{ padding: `${clearSpace}px 0` }}>
        {mark}
      </span>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex ${className}`}
      style={{ padding: `${clearSpace}px 0` }}
    >
      {mark}
    </Link>
  );
}
