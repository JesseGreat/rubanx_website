import type { ReactNode } from "react";

/**
 * The image slot for a piece of client work.
 *
 * Client products are never shown on this site. The software belongs to the
 * client, and most of the organisations we build for do not want their
 * interfaces published anywhere else. Each project is drawn instead as an
 * abstract plate of the problem it solved, in brand colours, on a hairline
 * grid. No screen, logo or data from the client appears in it.
 *
 * The orange element in each drawing carries the `advance` class, so it
 * moves right when the surrounding row is hovered, like every chevron.
 */

type Tone = "light" | "dark";

type Palette = {
  ground: string;
  line: string;
  faint: string;
  soft: string;
};

const ORANGE = "#ee6625";

const palettes: Record<Tone, Palette> = {
  light: {
    ground: "#ffffff",
    line: "#231f20",
    faint: "rgba(28, 24, 25, 0.28)",
    soft: "rgba(28, 24, 25, 0.08)",
  },
  dark: {
    ground: "#231f20",
    line: "#ffffff",
    faint: "rgba(255, 255, 255, 0.34)",
    soft: "rgba(255, 255, 255, 0.1)",
  },
};

/** Escrow: funds held between two parties until both are satisfied. */
function Escrow({ p }: { p: Palette }) {
  return (
    <>
      <line x1="120" y1="150" x2="190" y2="150" stroke={p.faint} strokeWidth="2" strokeDasharray="6 6" />
      <line x1="290" y1="150" x2="360" y2="150" stroke={p.faint} strokeWidth="2" strokeDasharray="6 6" />
      <rect x="40" y="110" width="80" height="80" fill={p.ground} stroke={p.line} strokeWidth="2" />
      <rect x="360" y="110" width="80" height="80" fill={p.ground} stroke={p.line} strokeWidth="2" />
      <rect x="56" y="134" width="48" height="4" fill={p.faint} />
      <rect x="56" y="148" width="32" height="4" fill={p.faint} />
      <rect x="376" y="134" width="48" height="4" fill={p.faint} />
      <rect x="376" y="148" width="32" height="4" fill={p.faint} />
      <rect x="190" y="95" width="100" height="110" fill={p.soft} stroke={p.line} strokeWidth="2" />
      <rect x="40" y="206" width="80" height="4" fill={p.line} />
      <rect x="360" y="206" width="80" height="4" fill={p.line} />
      <g className="advance">
        <rect x="215" y="125" width="50" height="50" fill={ORANGE} />
      </g>
      <line x1="190" y1="222" x2="290" y2="222" stroke={p.faint} strokeWidth="2" />
      <rect x="190" y="218" width="36" height="8" fill={p.line} />
    </>
  );
}

/** A client portal: scattered tools replaced by one path from enquiry to delivery. */
function Portal({ p }: { p: Palette }) {
  return (
    <>
      <line x1="170" y1="50" x2="170" y2="250" stroke={p.faint} strokeWidth="1.5" strokeDasharray="4 6" />
      <line x1="310" y1="50" x2="310" y2="250" stroke={p.faint} strokeWidth="1.5" strokeDasharray="4 6" />
      <rect x="46" y="58" width="22" height="22" fill="none" stroke={p.faint} strokeWidth="2" />
      <rect x="92" y="84" width="22" height="22" fill="none" stroke={p.faint} strokeWidth="2" />
      <rect x="58" y="116" width="22" height="22" fill="none" stroke={p.faint} strokeWidth="2" />
      <path d="M40 224 H170 V152 H310 V80 H412" fill="none" stroke={p.line} strokeWidth="3" />
      <circle cx="40" cy="224" r="8" fill={p.ground} stroke={p.line} strokeWidth="3" />
      <circle cx="170" cy="188" r="6" fill={p.line} />
      <circle cx="310" cy="116" r="6" fill={p.line} />
      <rect x="196" y="176" width="64" height="4" fill={p.faint} />
      <rect x="196" y="188" width="42" height="4" fill={p.faint} />
      <rect x="336" y="104" width="64" height="4" fill={p.faint} />
      <rect x="336" y="116" width="42" height="4" fill={p.faint} />
      <g className="advance">
        <rect x="412" y="64" width="32" height="32" fill={ORANGE} />
      </g>
    </>
  );
}

/** Bookings: a schedule of slots, captured on the web and in an app. */
function Bookings({ p }: { p: Palette }) {
  const booked = new Set([3, 8, 9, 15, 19, 24]);
  const cells: ReactNode[] = [];
  for (let row = 0; row < 4; row += 1) {
    for (let col = 0; col < 7; col += 1) {
      const i = row * 7 + col;
      cells.push(
        <rect
          key={i}
          x={40 + col * 40}
          y={78 + row * 36}
          width="34"
          height="30"
          fill={booked.has(i) ? p.line : i % 5 === 0 ? p.soft : "none"}
          stroke={booked.has(i) ? "none" : p.faint}
          strokeWidth="1.5"
        />,
      );
    }
  }

  return (
    <>
      <rect x="40" y="54" width="274" height="8" fill={p.faint} />
      {cells}
      <line x1="314" y1="93" x2="364" y2="93" stroke={p.faint} strokeWidth="2" strokeDasharray="5 5" />
      <rect x="344" y="40" width="104" height="210" rx="16" fill={p.ground} stroke={p.line} strokeWidth="2.5" />
      <rect x="380" y="52" width="32" height="4" rx="2" fill={p.faint} />
      <rect x="362" y="76" width="54" height="5" fill={p.faint} />
      <rect x="362" y="88" width="36" height="5" fill={p.faint} />
      <g className="advance">
        <rect x="362" y="110" width="68" height="34" fill={ORANGE} />
      </g>
      <rect x="362" y="160" width="68" height="1.5" fill={p.faint} />
      <rect x="362" y="176" width="68" height="1.5" fill={p.faint} />
      <rect x="362" y="192" width="68" height="1.5" fill={p.faint} />
      <rect x="362" y="218" width="68" height="16" fill={p.line} />
    </>
  );
}

/** Video research: frames under review, and the tooling that marks them. */
function Frames({ p }: { p: Palette }) {
  const ticks: ReactNode[] = [];
  for (let x = 60; x <= 420; x += 30) {
    ticks.push(
      <line key={x} x1={x} y1="246" x2={x} y2="254" stroke={p.faint} strokeWidth="1.5" />,
    );
  }

  return (
    <>
      <rect x="60" y="40" width="200" height="112" fill="none" stroke={p.faint} strokeWidth="2" />
      <rect x="92" y="62" width="200" height="112" fill={p.ground} stroke={p.faint} strokeWidth="2" />
      <rect x="124" y="84" width="220" height="124" fill={p.ground} stroke={p.line} strokeWidth="2.5" />
      <path d="M222 128 L256 146 L222 164 Z" fill={p.line} />
      <rect x="372" y="92" width="10" height="10" fill={p.line} />
      <rect x="392" y="94" width="46" height="5" fill={p.faint} />
      <rect x="372" y="120" width="10" height="10" fill="none" stroke={p.line} strokeWidth="1.5" />
      <rect x="392" y="122" width="34" height="5" fill={p.faint} />
      <rect x="372" y="148" width="10" height="10" fill="none" stroke={p.line} strokeWidth="1.5" />
      <rect x="392" y="150" width="40" height="5" fill={p.faint} />
      <line x1="60" y1="250" x2="420" y2="250" stroke={p.faint} strokeWidth="2" />
      {ticks}
      <rect x="84" y="232" width="70" height="8" fill={p.faint} />
      <rect x="170" y="232" width="96" height="8" fill={p.line} />
      <rect x="282" y="232" width="48" height="8" fill={p.faint} />
      <g className="advance">
        <rect x="266" y="226" width="16" height="20" fill={ORANGE} />
        <line x1="274" y1="214" x2="274" y2="264" stroke={ORANGE} strokeWidth="2.5" />
      </g>
    </>
  );
}

const drawings: Record<string, (props: { p: Palette }) => ReactNode> = {
  safebarter: Escrow,
  "guzman-career-services": Portal,
  fuelsmart: Bookings,
  curator: Frames,
};

export function ProjectPlate({
  slug,
  label,
  tone = "light",
  ratio = "aspect-[16/10]",
  className = "",
}: {
  slug: string;
  /** Accessible description of what the drawing represents. */
  label: string;
  tone?: Tone;
  ratio?: string;
  className?: string;
}) {
  const p = palettes[tone];
  const Drawing = drawings[slug] ?? Portal;

  return (
    <figure
      className={`plate relative w-full overflow-hidden border ${
        tone === "dark"
          ? "plate-dark border-charcoal bg-charcoal"
          : "border-rule-strong bg-white"
      } ${ratio} ${className}`}
    >
      {/* Corner registration marks, as on a drawing sheet. */}
      <span aria-hidden="true" className="plate-mark left-3 top-3 border-l-2 border-t-2" />
      <span aria-hidden="true" className="plate-mark right-3 top-3 border-r-2 border-t-2" />
      <span aria-hidden="true" className="plate-mark bottom-3 left-3 border-b-2 border-l-2" />
      <span aria-hidden="true" className="plate-mark bottom-3 right-3 border-b-2 border-r-2" />

      <svg
        viewBox="0 0 480 300"
        role="img"
        aria-label={label}
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 m-auto h-[78%] w-[84%]"
      >
        <Drawing p={p} />
      </svg>
    </figure>
  );
}
