/**
 * Motion behaviour one of three: a section's top hairline draws in from the
 * left as the section enters the viewport.
 *
 * This is a server component. The drawing is done with a CSS scroll-driven
 * animation, so it ships no JavaScript and creates no observer. Where
 * animation-timeline is unsupported, or the visitor prefers reduced motion,
 * the rule is simply there from the start.
 */
export function RevealRule({
  tone = "light",
}: {
  tone?: "light" | "dark" | "tint";
}) {
  return (
    <div
      role="presentation"
      className={`rule-draw h-px w-full ${
        tone === "dark" ? "bg-rule-dark-strong" : "bg-rule-strong"
      }`}
    />
  );
}
