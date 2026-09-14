import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = `${site.name}. Software that moves your business forward.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Brand Open Graph card. Charcoal ground, the orange lockup, the sharpest
 * line the company has to say. No gradient, no decoration.
 */
export default async function OpengraphImage() {
  const logo = await readFile(
    path.join(process.cwd(), "public/brand/lockup-orange.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  /* Montserrat for the card. Falls back to the default face if unavailable. */
  let fontData: ArrayBuffer | null = null;
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0" } },
    ).then((response) => response.text());

    const url = css.match(/src: url\((https:[^)]+)\) format\('(?:truetype|woff2)'\)/)?.[1];
    if (url) fontData = await fetch(url).then((response) => response.arrayBuffer());
  } catch {
    fontData = null;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#231F20",
          padding: "72px",
          fontFamily: fontData ? "Montserrat" : "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img src={logoSrc} width={236} height={70} alt="" />
          <span
            style={{
              color: "#FFFFFF",
              fontSize: 26,
              marginTop: 10,
              letterSpacing: "-0.01em",
            }}
          >
            Tech Limited
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{ width: 84, height: 5, background: "#EE6625", marginBottom: 28 }}
          />
          <span
            style={{
              color: "#FFFFFF",
              fontSize: 66,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 900,
            }}
          >
            Software that moves your business forward.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#EE6625",
            fontSize: 24,
            borderTop: "1px solid rgba(255,255,255,0.24)",
            paddingTop: 24,
          }}
        >
          <span>Software engineering and product design</span>
          <span>{site.locality}, {site.country}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [{ name: "Montserrat", data: fontData, style: "normal", weight: 700 }]
        : [],
    },
  );
}
