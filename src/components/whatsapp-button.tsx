"use client";

import { useEffect, useState } from "react";

import { WhatsAppGlyph } from "./icons";
import { site } from "@/content/site";

/**
 * Most Nigerian clients will make contact this way, so the control carries a
 * visible label on desktop rather than hiding behind a bare glyph.
 *
 * It retracts whenever an element marked data-whatsapp-hide is on screen,
 * which covers the contact form and the footer, so it can never sit on top of
 * a form field or the contact details on a small screen.
 */
export function WhatsAppButton() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll("[data-whatsapp-hide]");
    if (targets.length === 0 || !("IntersectionObserver" in window)) return;

    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        setHidden(visible.size > 0);
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const href = `${site.whatsapp.href}?text=${encodeURIComponent(
    site.whatsapp.message,
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-hidden={hidden}
      className="group fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-charcoal text-white transition-[transform,opacity] duration-200 hover:bg-orange hover:text-charcoal data-[hidden=true]:pointer-events-none data-[hidden=true]:translate-y-24 data-[hidden=true]:opacity-0 md:bottom-6 md:right-6 md:h-auto md:w-auto md:rounded-none md:px-5 md:py-4"
    >
      <WhatsAppGlyph className="h-6 w-6 text-orange transition-colors group-hover:text-charcoal md:h-5 md:w-5" />
      <span className="sr-only md:not-sr-only md:text-meta md:font-semibold">
        {site.whatsapp.label}
      </span>
    </a>
  );
}
