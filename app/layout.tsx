import type React from "react";
import type { Metadata } from "next";
import { Shantell_Sans, Geist } from "next/font/google";
import "./globals.css";

const display = Shantell_Sans({ subsets: ["latin"], variable: "--font-shantell" });
const body = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Junting Lu — Code, keys, and curiosity",
  description: "Links to Junting Lu's work, socials, and calendar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
