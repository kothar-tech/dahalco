import Link from "next/link";
import { Landmark, Mail, MapPin, Phone } from "lucide-react";
import { LinkedinIcon, FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import { siteConfig } from "@/lib/site-config";

const socialIcons: Record<string, typeof LinkedinIcon> = {
  linkedin: LinkedinIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-primary-950 text-primary-100">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-primary-800/30 blur-3xl"
      />
      <div className="container-page relative grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-primary-800">
              <Landmark className="h-4.5 w-4.5 text-white" aria-hidden="true" />
            </span>
            <span className="font-heading text-lg font-bold text-white">
              {siteConfig.name}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-200">
            {siteConfig.metaDescription}
          </p>
          <div className="mt-5 flex items-center gap-3">
            {siteConfig.social.map((item) => {
              const Icon = socialIcons[item.icon];
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent-500 hover:text-primary-950"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {siteConfig.services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="text-primary-200 hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-primary-200 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/book-appointment" className="text-primary-200 hover:text-white">
                Book a Consultation
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-primary-200 hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Get In Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-200">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={siteConfig.contact.phoneHref} className="hover:text-white">
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {siteConfig.contact.suburb}, {siteConfig.contact.state}{" "}
                {siteConfig.contact.postcode}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-primary-200 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName} · Registered Tax Agent (TPB #
            {siteConfig.credentials.tpbNumber})
          </p>
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
