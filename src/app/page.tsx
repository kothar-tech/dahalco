import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ClosingCta from "@/components/ClosingCta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const { contact, credentials, headerCtas } = siteConfig;

const facts = [
  { value: String(credentials.yearEstablished), label: "Established" },
  {
    value: "CPA Practice",
    label: `Held to ${credentials.professionalBody}'s standards`,
  },
  { value: credentials.tpbNumber, label: "Registered tax agent (TPB number)" },
  { value: "Mon–Fri", label: `${contact.hours[0].time}, ${contact.suburb}` },
];

const bringPersonal = [
  "Your TFN and photo ID, if you’re new to us",
  "Your income statements from myGov, or the details of who you worked for",
  "Bank interest, dividend and share sale statements",
  "Your private health insurance statement",
  "Receipts and records for work-related expenses",
  "Rental property statements and expense invoices",
  "BSB and account number for your refund",
];

const bringBusiness = [
  "Bank and credit card statements for the period",
  "Sales invoices and expense receipts, or access to your accounting software",
  "Payroll and super records",
  "Last year’s accounts and tax return, if we didn’t do them",
  "Any ATO letters, BAS or instalment notices",
  "Loan, lease and asset purchase documents",
];

export default function HomePage() {
  const reasons = siteConfig.whyChooseUs.slice(2, 5);

  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-white">
        <div className="container-page grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:py-24">
          <div className="lg:col-span-6">
            <h1 className="font-heading text-display-lg text-white">
              A CPA practice for the tax and books of{" "}
              <span className="whitespace-nowrap">south-west</span> Sydney.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/85">
              We&rsquo;re {siteConfig.name}, in {contact.suburb} since{" "}
              {credentials.yearEstablished}. Individuals, families and small
              businesses come to us for tax returns, BAS, bookkeeping and
              straight answers.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Link href={headerCtas.primary.href} className="btn-accent">
                {headerCtas.primary.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <p className="text-white/85">
                or ring{" "}
                <a
                  href={contact.phoneHref}
                  className="ml-1 font-heading text-2xl tabular text-white underline decoration-accent-400 decoration-2 underline-offset-8 transition-colors hover:decoration-white"
                >
                  {contact.phoneDisplay}
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-8">
            <div className="relative mr-3 mb-3 sm:mr-4 sm:mb-4">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 border-2 border-accent-500 sm:translate-x-4 sm:translate-y-4"
              />
              <div className="relative aspect-[5/4] overflow-hidden bg-primary-800">
                <Image
                  src="/images/about-consultation.jpg"
                  alt="Two people going through a printed document together at an office"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover object-[50%_62%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="border-b border-ink/15">
        <dl className="container-page grid grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex flex-col-reverse justify-end gap-1 border-ink/15 py-8 pr-6 odd:border-r even:pl-6 lg:border-l lg:border-r-0 lg:px-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <dt className="text-sm text-ink-muted">{fact.label}</dt>
              <dd className="font-heading text-3xl tabular text-ink sm:text-4xl">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-heading text-display-md">What we do</h2>
            <p className="mt-5 max-w-sm text-ink-soft">
              Six jobs, done by the same small team. If yours isn&rsquo;t on the
              list, ring us and we&rsquo;ll tell you straight whether we can
              help.
            </p>
            <Link href="/services" className="text-link mt-8 inline-block">
              The full list, with what&rsquo;s included
            </Link>
          </div>

          <ol className="border-b border-ink/15 lg:col-span-8">
            {siteConfig.services.map((service, i) => (
              <li key={service.slug} className="border-t border-ink/15">
                <Link
                  href={`/services#${service.slug}`}
                  className="group grid gap-x-6 gap-y-1 py-7 transition-colors hover:bg-paper-deep/70 md:grid-cols-[3rem_1fr_2rem] md:items-baseline md:px-4 lg:-mx-4"
                >
                  <span className="font-heading text-xl tabular text-accent-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-heading text-2xl text-ink underline decoration-transparent decoration-2 underline-offset-4 transition-colors group-hover:decoration-accent-500 sm:text-[1.7rem]">
                      {service.title}
                    </span>
                    <span className="mt-1.5 block text-ink-soft">
                      {service.short}
                    </span>
                  </span>
                  <ArrowRight
                    className="hidden h-5 w-5 justify-self-end text-primary-700 transition-transform group-hover:translate-x-1 md:block"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What to expect */}
      <section className="border-y border-ink/15 bg-paper-deep/60">
        <div className="container-page grid gap-12 py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-display-md">
              What you can expect from us
            </h2>
            <Link href="/why-choose-us" className="text-link mt-8 inline-block">
              More on how we work
            </Link>
          </div>
          <dl className="divide-y divide-ink/15 border-y border-ink/15 lg:col-span-7">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="grid gap-2 py-7 md:grid-cols-[14rem_1fr] md:gap-8"
              >
                <dt className="font-heading text-xl font-semibold text-ink">
                  {reason.title}
                </dt>
                <dd className="text-ink-soft">{reason.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* What to bring */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-4">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden lg:max-w-none">
              <Image
                src="/images/hero-desk-work.jpg"
                alt="A hand marking up a printed financial report on a wooden desk"
                fill
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="object-cover object-left"
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <h2 className="font-heading text-display-md">
              Coming in? Here&rsquo;s what to bring.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-ink-soft">
              You don&rsquo;t need everything in order. Bring what you&rsquo;ve
              got and we&rsquo;ll tell you what&rsquo;s missing.
            </p>

            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="border-b border-ink pb-3 font-heading text-xl">
                  For your tax return
                </h3>
                <ul className="tick-list mt-5 space-y-3 text-[15px] text-ink-soft">
                  {bringPersonal.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="border-b border-ink pb-3 font-heading text-xl">
                  For a business
                </h3>
                <ul className="tick-list mt-5 space-y-3 text-[15px] text-ink-soft">
                  {bringBusiness.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClosingCta
        heading="Tax time, BAS due, or a letter from the ATO sitting on the bench?"
        text="Ring us, or book a time online. We’ll confirm it by phone or email."
      />
    </>
  );
}
