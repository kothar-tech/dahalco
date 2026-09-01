import type { Metadata } from "next";
import Image from "next/image";
import { CalendarCheck2, PhoneCall, Mail } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: `Request a tax or accounting consultation with ${siteConfig.name}. Tell us what you need and your preferred time, and we'll confirm by phone or email.`,
  alternates: { canonical: "/book-appointment" },
};

const steps = [
  {
    icon: CalendarCheck2,
    title: "1. Send your request",
    description: "Tell us what you need help with and a date/time that suits you.",
  },
  {
    icon: PhoneCall,
    title: "2. We confirm the time",
    description: "We'll call or email to lock in a time — adjusting it if needed.",
  },
  {
    icon: Mail,
    title: "3. Meet with us",
    description: "In person, by phone, or by video — whichever works best for you.",
  },
];

export default function BookAppointmentPage() {
  return (
    <section className="section relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-20 h-96 w-96 rounded-full bg-accent-50 blur-3xl"
      />
      <div className="container-page relative grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <Reveal>
            <span className="eyebrow">Appointment Request</span>
            <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Book a consultation
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Fill in a few details below and let us know when suits you. This
              submits a request — we&apos;ll follow up personally to confirm the exact
              time.
            </p>
          </Reveal>

          <Reveal delay={0.06} className="relative h-44 overflow-hidden rounded-2xl shadow-lg shadow-primary-900/10">
            <Image
              src="/images/contact-handshake.jpg"
              alt="A professional handshake sealing an agreement"
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
          </Reveal>

          <RevealGroup className="flex flex-col gap-6">
            {steps.map(({ icon: Icon, title, description }) => (
              <RevealItem key={title} className="flex items-start gap-4">
                <span className="icon-badge-accent h-10 w-10 rounded-lg">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-slate-900">{title}</p>
                  <p className="text-sm text-slate-600">{description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2} className="rounded-xl bg-slate-50 p-5 text-sm text-slate-600">
            Need a faster response, or have a general question first? Call{" "}
            <a href={siteConfig.contact.phoneHref} className="font-semibold text-primary-700 hover:text-primary-800">
              {siteConfig.contact.phoneDisplay}
            </a>{" "}
            or{" "}
            <a href="/contact" className="font-semibold text-primary-700 hover:text-primary-800">
              send an enquiry
            </a>{" "}
            instead.
          </Reveal>
        </div>

        <Reveal delay={0.1} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
          <AppointmentForm />
        </Reveal>
      </div>
    </section>
  );
}
