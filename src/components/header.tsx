"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { ButtonLink } from "./button";
import { CloseGlyph, MenuGlyph } from "./icons";
import { Lockup } from "./lockup";
import { cta, nav, site } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  /* Motion behaviour three of three: the header compresses past first scroll. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  /* Scroll lock, Escape to close, and a focus trap while the menu is open. */
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusables = () =>
      Array.from(
        panel?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter((element) => element.offsetParent !== null);

    focusables()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab") return;

      const items = focusables();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && (active === first || !panel?.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div
        className={`header-shell border-b ${
          scrolled ? "border-rule" : "border-transparent"
        }`}
      >
        <div
          className={`shell flex items-center justify-between ${
            scrolled ? "h-16 md:h-[68px]" : "h-16 md:h-[84px]"
          } header-shell`}
        >
          <Lockup height={20} priority />

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`relative block py-2 text-meta font-semibold transition-colors ${
                      isActive(item.href)
                        ? "text-charcoal"
                        : "text-muted hover:text-charcoal"
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) ? (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-orange"
                      />
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <ButtonLink href={cta.primary.href} className="px-5 py-3">
              {cta.primary.label}
            </ButtonLink>
          </div>

          <button
            ref={triggerRef}
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center text-charcoal md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => (open ? close() : setOpen(true))}
          >
            <span className="sr-only">
              {open ? "Close menu" : "Open menu"}
            </span>
            {open ? (
              <CloseGlyph className="h-5 w-5" />
            ) : (
              <MenuGlyph className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto bg-white md:hidden"
        >
          <div className="shell flex min-h-full flex-col pb-10">
            <nav aria-label="Main">
              <ul>
                {nav.map((item) => (
                  <li key={item.href} className="border-b border-rule">
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 py-5 text-h3 font-semibold text-charcoal"
                    >
                      {/*
                        The active item is marked with an orange rule rather
                        than orange text. At this size orange text would not
                        clear AA on white.
                      */}
                      {isActive(item.href) ? (
                        <span
                          aria-hidden="true"
                          className="h-[3px] w-6 shrink-0 bg-orange"
                        />
                      ) : null}
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-8">
              <ButtonLink
                href={cta.primary.href}
                className="w-full"
                onClick={() => setOpen(false)}
              >
                {cta.primary.label}
              </ButtonLink>
            </div>

            <div className="mt-auto space-y-1 pt-10 text-meta text-muted">
              <p>{site.addresses.office.lines.join(", ")}</p>
              <p>
                <a href={site.phoneHref} className="font-semibold text-charcoal">
                  {site.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
