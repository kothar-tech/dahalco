import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type ClosingCtaProps = {
  heading: string;
  text?: string;
};

// Closing block shared by the inner pages: a prompt on the left, the office
// address and hours on the right.
export default function ClosingCta({ heading, text }: ClosingCtaProps) {
  const { contact, headerCtas } = siteConfig;

  return (
    <section className="bg-primary-700 text-white">
      <div className="container-page grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-7">
          <h2 className="font-heading text-display-md text-white">{heading}</h2>
          {text && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              {text}
            </p>
          )}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Link href={headerCtas.primary.href} className="btn-accent">
              {headerCtas.primary.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={contact.phoneHref}
              className="font-heading text-3xl tabular text-white underline decoration-accent-400 decoration-2 underline-offset-8 transition-colors hover:decoration-white"
            >
              {contact.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="border-t border-white/25 pt-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <p className="text-sm text-white/70">Visit us</p>
          <address className="mt-2 font-heading text-2xl not-italic leading-snug text-white">
            {contact.addressLine1}
            <br />
            {contact.suburb} {contact.state} {contact.postcode}
          </address>
          <ul className="mt-6 space-y-1 text-white/85">
            {contact.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-6 tabular">
                <span>{h.days}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
          <a
            href={contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-white underline decoration-accent-400 decoration-2 underline-offset-4 hover:decoration-white"
          >
            Get directions
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
