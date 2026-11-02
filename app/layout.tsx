import type { Metadata } from "next";
import { Crimson_Pro, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { BottomNav } from "@/components/BottomNav";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/Motion";
import "./globals.css";

// Serif face matching the printed catalogue.
const sans = Crimson_Pro({ variable: "--font-geist-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://brightbristlebrush.com"),
  title: {
    default: "Bright Brush and Bristle Works India — Pig Hair & Boar Bristle Manufacturer",
    template: "%s — Bright Brush and Bristle Works India",
  },
  description:
    "Manufacturer and exporter of high-quality pig hair products, including boar bristle and hog hair. ISO 9001 certified, based in Uttar Pradesh, India.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <ScrollProgress />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
