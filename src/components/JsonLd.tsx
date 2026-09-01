import { siteConfig } from "@/lib/site-config";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    description: siteConfig.metaDescription,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneHref.replace("tel:", ""),
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.suburb,
      addressRegion: siteConfig.contact.state,
      postalCode: siteConfig.contact.postcode,
      addressCountry: "AU",
    },
    areaServed: siteConfig.contact.areaServed,
    openingHoursSpecification: siteConfig.contact.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.time.split("–")[0]?.trim(),
      closes: h.time.split("–")[1]?.trim(),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
