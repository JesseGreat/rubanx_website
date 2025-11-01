import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zypa Tech - Building Tomorrow's Smart Cities",
  description:
    "Zypa Tech builds scalable solutions to real-life city problems through innovative technology and urban planning.",
  keywords:
    "urban planning, smart cities, technology, transportation, housing, digital services",
  authors: [{ name: "Zypa Tech Team" }],
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
