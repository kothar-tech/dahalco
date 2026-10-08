import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import ClosingCta from "@/components/ClosingCta";
import PageIntro from "@/components/PageIntro";
import { CpaPracticeMark } from "@/components/icons/CpaPracticeIcon";
import { siteConfig } from "@/lib/site-config";

const { contact, credentials } = siteConfig;

export const metadata: Metadata = {
  title: "Why choose us",
  description: `Credentials and registration details for ${siteConfig.name}: a CPA Practice and registered tax agent (TPB ${credentials.tpbNumber}) in ${contact.suburb}, NSW.`,
  alternates: { canonical: "/why-choose-us" },
};

const steps = [
  {
    title: "Tell us what you need.",
    text: "Ring, send an enquiry or book a time. A short conversation is usually enough for us to see what’s involved.",
  },
  {
    title: "We do the work.",
    text: "We go through your documents, ask our questions early, and prepare your return or lodgement properly.",
  },
  {
    title: "You hear from us.",
    text: "We explain what’s done, what happens next and whether there’s anything you need to do.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <PageIntro title="Why Dahal & Co." tone="blue">
        <p>
          You&rsquo;re handing over your financial records, so it&rsquo;s fair
          to ask who we are and what stands behind us. Here&rsquo;s the short
          answer.
        </p>
      </PageIntro>

      {/* Credentials */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-heading text-display-md">
              What stands behind us
            </h2>
            <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden lg:block">
              <Image
                src="/images/contact-handshake.jpg"
                alt="Two people shaking hands in business clothes"
                fill
                sizes="30vw"
                className="object-cover"
              />
            </div>
          </div>

          <dl className="border-t border-ink lg:col-span-8">
            <div className="grid gap-4 border-b border-ink/15 py-7 md:grid-cols-[12rem_1fr] md:gap-8">
              <dt className="font-heading text-xl font-semibold">
                CPA Practice
              </dt>
              <dd className="flex items-start gap-4 text-ink-soft">
                <CpaPracticeMark className="h-16" />
                <span>
                  Our work is held to {credentials.professionalBody}&rsquo;s
                  professional and ethical standards, on top of what the law
                  requires of tax agents.
                </span>
              </dd>
            </div>

            <div className="grid gap-4 border-b border-ink/15 py-7 md:grid-cols-[12rem_1fr] md:gap-8">
              <dt className="font-heading text-xl font-semibold">
                Registered tax agent
              </dt>
              <dd className="text-ink-soft">
                Tax Practitioners Board number{" "}
                <span className="font-semibold tabular text-ink">
                  {credentials.tpbNumber}
                </span>
                .{" "}
                <a
                  href={credentials.tpbRegisterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link inline-flex items-center gap-1"
                >
                  Check the public register
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </dd>
            </div>

            <div className="grid gap-4 border-b border-ink/15 py-7 md:grid-cols-[12rem_1fr] md:gap-8">
              <dt className="font-heading text-xl font-semibold">
                Business details
              </dt>
              <dd className="text-ink-soft">
                {siteConfig.legalName}, ABN{" "}
                <span className="tabular">{credentials.abn}</span>. Established{" "}
                {credentials.yearEstablished}.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Reasons */}
      <section className="border-y border-ink/15 bg-paper-deep/60">
        <div className="container-page grid gap-12 py-20 lg:grid-cols-12 lg:py-24">
          <h2 className="font-heading text-display-md lg:col-span-4">
            What you can count on
          </h2>
          <ol className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {siteConfig.whyChooseUs.slice(2).map((reason, i) => (
              <li key={reason.title} className="border-t border-ink pt-5">
                <span className="font-heading text-lg tabular text-accent-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-heading text-2xl">{reason.title}</h3>
                <p className="mt-2 text-ink-soft">{reason.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container-page">
          <h2 className="font-heading text-display-md">
            What working with us looks like
          </h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t border-ink pt-5">
                <span className="font-heading text-5xl tabular text-primary-700">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-heading text-2xl">{step.title}</h3>
                <p className="mt-2 text-ink-soft">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ClosingCta
        heading="Talk to the people who’ll do the work."
        text="No account managers and no ticket queue. Ring, and someone who knows tax picks up."
      />
    </>
  );
}
