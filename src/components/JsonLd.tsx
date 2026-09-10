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
    email: siteConfig.contact.enquiryEmail,
    foundingDate: String(siteConfig.credentials.yearEstablished),
    taxID: siteConfig.credentials.abn.replace(/\s/g, ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.addressLine1,
      addressLocality: siteConfig.contact.suburb,
      addressRegion: siteConfig.contact.state,
      postalCode: siteConfig.contact.postcode,
      addressCountry: "AU",
    },
    areaServed: siteConfig.contact.areaServed,
    sameAs: siteConfig.social.map((item) => item.href),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
