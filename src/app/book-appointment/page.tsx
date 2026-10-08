import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";
import PageIntro from "@/components/PageIntro";
import { siteConfig } from "@/lib/site-config";

const { contact } = siteConfig;

export const metadata: Metadata = {
  title: "Book a time",
  description: `Request an appointment with ${siteConfig.name}. Tell us what you need and when suits you, and we’ll confirm by phone or email.`,
  alternates: { canonical: "/book-appointment" },
};

const steps = [
  "You send the request, with a day and time that suit you.",
  "We ring or email to confirm a time, or suggest one close by.",
  "You come to our office, or we do it by phone or video.",
];

export default function BookAppointmentPage() {
  return (
    <>
      <PageIntro title="Book a time.">
        <p>
          Tell us what you need and when suits you. This is a request, so
          we&rsquo;ll confirm the time with you by phone or email.
        </p>
      </PageIntro>

      <section className="section">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src="/images/home-hero-consultation.png"
                alt="An accountant and a client going through a document at a desk"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>

            <h2 className="mt-10 font-heading text-2xl">How booking works</h2>
            <ol className="mt-5 divide-y divide-ink/15 border-y border-ink/15">
              {steps.map((step, i) => (
                <li key={step} className="flex gap-5 py-4">
                  <span className="font-heading text-xl tabular text-accent-700">
                    {i + 1}
                  </span>
                  <span className="text-ink-soft">{step}</span>
                </li>
              ))}
            </ol>

            <p className="mt-8 text-ink-soft">
              Rather talk it through first? Ring{" "}
              <a href={contact.phoneHref} className="text-link tabular">
                {contact.phoneDisplay}
              </a>{" "}
              or{" "}
              <Link href="/contact" className="text-link">
                send an enquiry
              </Link>
              .
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-ink bg-white p-6 sm:p-9">
              <h2 className="font-heading text-3xl">Your details</h2>
              <div className="mt-8">
                <AppointmentForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
