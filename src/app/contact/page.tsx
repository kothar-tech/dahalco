import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import PageIntro from "@/components/PageIntro";
import { siteConfig } from "@/lib/site-config";

const { contact } = siteConfig;

export const metadata: Metadata = {
  title: "Contact",
  description: `Ring ${contact.phoneDisplay}, email ${contact.enquiryEmail} or visit ${siteConfig.name} at ${contact.addressLine1}, ${contact.suburb} ${contact.state}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro title="Ring, write, or come in.">
        <p>
          The quickest way to reach us is the phone, 9am to 5pm on weekdays.
          If you&rsquo;d rather write, use the form and we&rsquo;ll reply, usually
          within one business day.
        </p>
      </PageIntro>

      <section className="section">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <dl className="border-t border-ink">
              <div className="border-b border-ink/15 py-5">
                <dt className="text-sm text-ink-muted">Phone</dt>
                <dd className="mt-1">
                  <a
                    href={contact.phoneHref}
                    className="font-heading text-3xl tabular text-ink underline decoration-accent-500 decoration-2 underline-offset-8 transition-colors hover:text-primary-700"
                  >
                    {contact.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="border-b border-ink/15 py-5">
                <dt className="text-sm text-ink-muted">Enquiries</dt>
                <dd className="mt-1 text-lg">
                  <a
                    href={`mailto:${contact.enquiryEmail}`}
                    className="text-ink underline decoration-ink/30 underline-offset-4 hover:text-primary-700"
                  >
                    {contact.enquiryEmail}
                  </a>
                </dd>
              </div>
              <div className="border-b border-ink/15 py-5">
                <dt className="text-sm text-ink-muted">Direct to Uday</dt>
                <dd className="mt-1 text-lg">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-ink underline decoration-ink/30 underline-offset-4 hover:text-primary-700"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div className="border-b border-ink/15 py-5">
                <dt className="text-sm text-ink-muted">Office</dt>
                <dd className="mt-1 text-lg">
                  <a
                    href={contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline decoration-ink/30 underline-offset-4 hover:text-primary-700"
                  >
                    {contact.addressLine1}
                    <br />
                    {contact.suburb} {contact.state} {contact.postcode}
                  </a>
                </dd>
              </div>
              <div className="border-b border-ink/15 py-5">
                <dt className="text-sm text-ink-muted">Hours</dt>
                <dd className="mt-1">
                  <ul className="space-y-1 tabular">
                    {contact.hours.map((h) => (
                      <li key={h.days} className="flex justify-between gap-6">
                        <span>{h.days}</span>
                        <span className="text-ink-soft">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>

            <MapEmbed className="mt-10 h-72" />
          </div>

          <div className="lg:col-span-7">
            <div className="border border-ink bg-white p-6 sm:p-9">
              <h2 className="font-heading text-3xl">Send us a message</h2>
              <p className="mt-2 text-ink-soft">
                Want a set time instead?{" "}
                <Link href="/book-appointment" className="text-link">
                  Book a time
                </Link>
                .
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
