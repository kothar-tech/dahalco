import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const body = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const heading = Newsreader({
  variable: "--font-heading",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const homeTitle = `${siteConfig.name} | CPA Practice, ${siteConfig.shortTagline} in ${siteConfig.contact.suburb} ${siteConfig.contact.state}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: homeTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.metaDescription,
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: homeTitle,
    description: siteConfig.metaDescription,
  },
  twitter: {
    card: "summary",
    title: homeTitle,
    description: siteConfig.metaDescription,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${body.variable} ${heading.variable}`}>
      <body className="flex min-h-screen flex-col">
        <JsonLd />
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
