import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { CpaPracticeMark } from "@/components/icons/CpaPracticeIcon";
import { GoogleIcon } from "@/components/icons/SocialIcons";
import { siteConfig } from "@/lib/site-config";

const socialIcons: Record<string, typeof GoogleIcon> = {
  google: GoogleIcon,
};

export default function Footer() {
  const year = new Date().getFullYear();
  const { contact, credentials } = siteConfig;

  return (
    <footer>
      <div className="border-y border-ink/15 bg-paper-deep">
        <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:gap-8">
          <CpaPracticeMark className="h-32" />
          <div>
            <p className="font-heading text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              {siteConfig.name} is a CPA Practice.
            </p>
            <p className="mt-2 max-w-2xl text-ink-soft">
              Our work is held to {credentials.professionalBody}&rsquo;s
              professional and ethical standards. We&rsquo;re also a registered
              tax agent, TPB number{" "}
              <span className="tabular">{credentials.tpbNumber}</span>.
            </p>
          </div>
          <a
            href={credentials.cpaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link inline-flex items-center gap-1.5 sm:ml-auto"
          >
            About CPA Practices
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="bg-ink text-paper/80">
        <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label={`${siteConfig.name} home`}
              className="inline-block"
            >
              <Logo variant="white" className="h-16" />
            </Link>
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed">
              Accountants and registered tax agents in {contact.suburb}, looking
              after individuals, families and small businesses since{" "}
              {credentials.yearEstablished}.
            </p>
            {siteConfig.social.length > 0 && (
              <div className="mt-6 flex items-center gap-3">
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
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink transition-colors hover:bg-accent-300"
                    >
                      <Icon
                        className="h-[1.1rem] w-[1.1rem]"
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <div className="lg:col-span-3 lg:col-start-6">
            <h2 className="font-heading text-xl text-white">Services</h2>
            <ul className="mt-5 space-y-3 text-[15px]">
              {siteConfig.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h2 className="font-heading text-xl text-white">Visit or ring</h2>
            <ul className="mt-5 space-y-4 text-[15px]">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-1 h-4 w-4 shrink-0 text-white"
                  aria-hidden="true"
                />
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {contact.addressLine1}
                  <br />
                  {contact.suburb} {contact.state} {contact.postcode}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  className="mt-1 h-4 w-4 shrink-0 text-white"
                  aria-hidden="true"
                />
                <a
                  href={contact.phoneHref}
                  className="tabular transition-colors hover:text-white"
                >
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  className="mt-1 h-4 w-4 shrink-0 text-white"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${contact.enquiryEmail}`}
                  className="transition-colors hover:text-white"
                >
                  {contact.enquiryEmail}
                </a>
              </li>
            </ul>
            <p className="mt-5 text-sm text-paper/60">
              {contact.hours[0].days}, {contact.hours[0].time}
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="underline decoration-paper/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-paper/15">
          <div className="container-page flex flex-col gap-3 py-6 text-[13px] text-paper/60 md:flex-row md:items-center md:justify-between">
            <p>
              © {year} {siteConfig.legalName}. ABN {credentials.abn}. Registered
              tax agent, TPB {credentials.tpbNumber}.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy policy
              </Link>
              <p>
                Website by{" "}
                <a
                  href="https://kothartechsolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-white"
                >
                  Kothar Tech
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
