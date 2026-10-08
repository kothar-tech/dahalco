import { siteConfig } from "@/lib/site-config";

export default function MapEmbed({ className = "" }: { className?: string }) {
  const { contact } = siteConfig;

  return (
    <div className={`overflow-hidden border border-ink/15 bg-paper-deep ${className}`}>
      <iframe
        title={`Map showing ${siteConfig.name} at ${contact.addressLine1}, ${contact.suburb}`}
        src={contact.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-72 w-full border-0"
      />
    </div>
  );
}
