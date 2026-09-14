import type { Metadata, Viewport } from "next";
import { Montserrat, Varela_Round } from "next/font/google";

import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { organisationJsonLd } from "@/lib/json-ld";
import { seoKeywords, site } from "@/content/site";

/*
  No weight array, so next/font serves the variable font: one file covering
  400 to 700 instead of four static instances. That matters on a metered
  connection.
*/
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

/**
 * Varela Round stands in for Arial Rounded MT Bold and is used for exactly
 * one string on the site: the words "Tech Limited" in the logo lockup.
 */
const varelaRound = Varela_Round({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-varela-round",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} | Software engineering and product design, Abuja`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: seoKeywords,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: site.url,
    siteName: site.name,
    title: `${site.shortName} | Software engineering and product design, Abuja`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} | Software engineering and product design, Abuja`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/icon.png?v=2", type: "image/png", sizes: "32x32" },
      { url: "/favicon-512.png?v=2", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png?v=2", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#231F20",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NG" className={`${montserrat.variable} ${varelaRound.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-charcoal focus:px-4 focus:py-3 focus:text-meta focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organisationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
