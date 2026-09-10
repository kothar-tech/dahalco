import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";
import { serviceIcons } from "@/lib/service-icons";

export const metadata: Metadata = {
  title: "Services",
  description: `Tax returns, BAS lodgement, bookkeeping, tax planning and ATO correspondence from ${siteConfig.name}, registered tax agents serving ${siteConfig.contact.suburb} and the ${siteConfig.contact.areaServed}.`,
  alternates: { canonical: "/services" },
};

const serviceDetails: Record<
  string,
  { image: string; imageAlt: string; points: string[] }
> = {
  "individual-tax-returns": {
    image: "/images/home-desk-detail.png",
    imageAlt: "Reviewing individual tax documents and financial records",
    points: [
      "Employees, sole traders, investors and retirees",
      "Eligible deductions reviewed carefully",
      "Lodgement with the ATO by a registered tax agent",
    ],
  },
  "business-tax-bas": {
    image: "/images/services-bas-papers.png",
    imageAlt: "BAS and business tax paperwork organised on a desk",
    points: [
      "Company, trust and partnership returns",
      "Quarterly BAS and GST lodgement",
      "Clear reminders so deadlines are not missed",
    ],
  },
  "tax-planning": {
    image: "/images/services-tax-planning.png",
    imageAlt: "Accountant explaining tax planning options to a client",
    points: [
      "Year-round advice, not just tax-time catch-ups",
      "Practical options explained in plain English",
      "Support for decisions before they become urgent",
    ],
  },
  "bookkeeping-payroll": {
    image: "/images/services-finance-desk.jpg",
    imageAlt: "Bookkeeping workspace with laptop and financial documents",
    points: [
      "Ongoing record-keeping support between returns",
      "Payroll assistance for small businesses",
      "Cleaner books mean faster, smoother lodgements",
    ],
  },
  "ato-correspondence": {
    image: "/images/why-credentials.png",
    imageAlt: "Professional carefully reviewing official correspondence and files",
    points: [
      "ATO notices, reviews and audits handled on your behalf",
      "Payment plan discussions where appropriate",
      "Updates explained clearly at every step",
    ],
  },
  "business-structuring": {
    image: "/images/home-client-meeting.png",
    imageAlt: "Clients discussing business structure options with their accountant",
    points: [
      "Guidance on sole trader, company, trust or partnership",
      "Advice matched to how you actually operate",
      "Practical next steps when you are ready to set up or change",
    ],
  },
};

const whoItsFor = [
  "Individuals lodging an annual return",
  "Sole traders and contractors",
  "Small companies needing BAS and payroll support",
  "Investors and landlords with multiple income streams",
  "Anyone who has received an ATO letter and needs help responding",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services Offered"
        title="Everything from a single tax return to ongoing business compliance"
        description={`Honest advice and careful lodgement from a registered tax agent in ${siteConfig.contact.suburb} — serving clients across the ${siteConfig.contact.areaServed}.`}
      />

      <Reveal>
        <div className="container-page relative -mt-10">
          <div className="relative h-56 overflow-hidden rounded-2xl shadow-xl shadow-primary-900/15 sm:h-72">
            <Image
              src="/images/services-tax-planning.png"
              alt="Accountant explaining financial information during a client meeting"
              fill
              sizes="(min-width: 1024px) 1100px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/45 via-transparent to-transparent" />
          </div>
        </div>
      </Reveal>

      <section className="section">
        <div className="container-page flex flex-col gap-10">
          <Reveal>
            <SectionHeading
              eyebrow="Our Services"
              title="Practical support for individuals and small business"
              description="Pick the service you need, or ask us which one fits — we’re happy to point you in the right direction."
            />
          </Reveal>

          <div className="flex flex-col gap-10">
            {siteConfig.services.map((service, index) => {
              const Icon = serviceIcons[service.slug];
              const detail = serviceDetails[service.slug];
              const imageLeft = index % 2 === 0;

              return (
                <Reveal key={service.slug} delay={Math.min(index * 0.04, 0.16)}>
                  <div
                    id={service.slug}
                    className="card scroll-mt-24 overflow-hidden"
                  >
                    <div
                      className={`grid lg:grid-cols-2 ${
                        imageLeft ? "" : "lg:[&>*:first-child]:order-2"
                      }`}
                    >
                      <div className="relative min-h-[220px] bg-slate-100 sm:min-h-[280px]">
                        <Image
                          src={detail.image}
                          alt={detail.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-4 p-6 sm:p-8 lg:p-10">
                        <div className="flex items-center gap-3">
                          <span className="icon-badge">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-accent-700">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">
                          {service.title}
                        </h2>
                        <p className="text-base leading-relaxed text-slate-600">
                          {service.description}
                        </p>
                        <ul className="mt-1 flex flex-col gap-2.5">
                          {detail.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2.5 text-sm text-slate-700"
                            >
                              <CheckCircle2
                                className="mt-0.5 h-4 w-4 shrink-0 text-primary-700"
                                aria-hidden="true"
                              />
                              {point}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/book-appointment"
                          className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
                        >
                          Ask about {service.title.toLowerCase()}
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section border-t border-slate-100 bg-slate-50">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Who It’s For"
              title="Support that scales with your situation"
              description="Whether you need a one-off return or ongoing compliance help, we tailor the work to what you actually need."
            />
          </Reveal>
          <RevealGroup className="flex flex-col gap-3">
            {whoItsFor.map((item) => (
              <RevealItem
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
              >
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary-700"
                  aria-hidden="true"
                />
                {item}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBanner
        title="Not sure which service you need?"
        description="Tell us a little about your situation and we’ll recommend the simplest next step."
      />
    </>
  );
}
