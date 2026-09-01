import { Mail, Phone } from "lucide-react";
import { LinkedinIcon, FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import { siteConfig } from "@/lib/site-config";

const socialIcons: Record<string, typeof LinkedinIcon> = {
  linkedin: LinkedinIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
};

export default function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-primary-950 text-white lg:block">
      <div className="container-page flex h-10 items-center justify-between text-xs">
        <div className="flex items-center gap-5">
          <a
            href={siteConfig.contact.phoneHref}
            className="flex items-center gap-1.5 font-medium text-white/90 transition-colors hover:text-accent-400"
          >
            <Phone className="h-3.5 w-3.5 text-accent-400" aria-hidden="true" />
            {siteConfig.contact.phoneDisplay}
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-1.5 font-medium text-white/90 transition-colors hover:text-accent-400"
          >
            <Mail className="h-3.5 w-3.5 text-accent-400" aria-hidden="true" />
            {siteConfig.contact.email}
          </a>
          <span className="hidden border-l border-white/15 pl-5 text-white/60 xl:inline">
            {siteConfig.contact.suburb}, {siteConfig.contact.state} · Mon–Fri 9am–5:30pm
          </span>
        </div>

        <div className="flex items-center gap-2">
          {siteConfig.social.map((item) => {
            const Icon = socialIcons[item.icon];
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent-500 hover:text-primary-950"
              >
                <Icon className="h-3 w-3" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
