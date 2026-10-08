import { Mail, MapPin, Phone } from "lucide-react";
import { GoogleIcon } from "@/components/icons/SocialIcons";
import { siteConfig } from "@/lib/site-config";

const socialIcons: Record<string, typeof GoogleIcon> = {
  google: GoogleIcon,
};

export default function TopBar() {
  const { contact } = siteConfig;

  return (
    <div className="hidden bg-ink text-paper lg:block">
      <div className="container-page flex h-10 items-center justify-between text-[13px]">
        <div className="flex items-center gap-6">
          <a
            href={contact.phoneHref}
            className="flex items-center gap-2 font-medium tabular transition-colors hover:text-accent-300"
          >
            <Phone className="h-3.5 w-3.5 text-accent-400" aria-hidden="true" />
            {contact.phoneDisplay}
          </a>
          <a
            href={`mailto:${contact.enquiryEmail}`}
            className="flex items-center gap-2 font-medium transition-colors hover:text-accent-300"
          >
            <Mail className="h-3.5 w-3.5 text-accent-400" aria-hidden="true" />
            {contact.enquiryEmail}
          </a>
          <a
            href={contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 border-l border-paper/20 pl-6 font-medium transition-colors hover:text-accent-300 xl:inline-flex"
          >
            <MapPin className="h-3.5 w-3.5 text-accent-400" aria-hidden="true" />
            {contact.suburb}, {contact.state} · {contact.hoursShort}
          </a>
        </div>

        {siteConfig.social.length > 0 && (
          <div className="flex items-center gap-2">
            {siteConfig.social.map((item) => {
              const Icon = socialIcons[item.icon];
              if (!Icon) return null;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 text-ink transition-colors hover:bg-accent-300"
                >
                  <Icon className="h-3 w-3" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
