import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const sans = Instrument_Sans({ variable: "--font-geist-sans", subsets: ["latin"] });
const newsreader = Newsreader({ variable: "--font-newsreader", subsets: ["latin"] });

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
    <html lang="en" className={`${sans.variable} ${newsreader.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
