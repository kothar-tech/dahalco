import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock3 } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact & Enquiries",
  description: `Get in touch with ${siteConfig.name} — send an enquiry and we'll respond promptly, usually within one business day.`,
  alternates: { canonical: "/contact" },
};

const details = [
  {
    icon: Phone,
    label: "Phone",
    content: (
      <a href={siteConfig.contact.phoneHref} className="hover:text-primary-700">
        {siteConfig.contact.phoneDisplay}
      </a>
    ),
  },
  {
    icon: Mail,
    label: "Email",
    content: (
      <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary-700">
        {siteConfig.contact.email}
      </a>
    ),
  },
  {
    icon: MapPin,
    label: "Location",
    content: (
      <>
        {siteConfig.contact.addressLine1}
        <br />
        {siteConfig.contact.suburb} {siteConfig.contact.state} {siteConfig.contact.postcode}
        <span className="mt-1 block text-xs text-slate-400">
          Serving {siteConfig.contact.areaServed}
        </span>
      </>
    ),
  },
  {
    icon: Clock3,
    label: "Hours",
    content: (
      <ul>
        {siteConfig.contact.hours.map((h) => (
          <li key={h.days}>
            {h.days}: {h.time}
          </li>
        ))}
      </ul>
    ),
  },
];

export default function ContactPage() {
  return (
    <section className="section relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -left-40 -top-20 h-96 w-96 rounded-full bg-primary-50 blur-3xl"
      />
      <div className="container-page relative grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <Reveal>
            <span className="eyebrow">Contact & Enquiry</span>
            <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Get in touch
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Have a general question, or not sure which service you need? Send us
              an enquiry and we&apos;ll get back to you — usually within one business
              day. Prefer to lock in a specific time instead?{" "}
              <a href="/book-appointment" className="font-semibold text-primary-700 hover:text-primary-800">
                Request an appointment
              </a>
              .
            </p>
          </Reveal>

          <RevealGroup className="flex flex-col gap-5">
            {details.map(({ icon: Icon, label, content }) => (
              <RevealItem key={label} className="flex items-start gap-4">
                <span className="icon-badge h-10 w-10 rounded-lg">
                  <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <div className="text-sm text-slate-600">
                  <p className="text-sm font-semibold text-slate-900">{label}</p>
                  {content}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.1} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
