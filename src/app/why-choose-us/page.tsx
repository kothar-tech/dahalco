import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  GraduationCap,
  ExternalLink,
  Phone,
  MessageSquare,
  FileCheck2,
  Clock3,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description: `Credentials and registration details for ${siteConfig.name}, a registered Tax Practitioners Board tax agent serving the ${siteConfig.contact.areaServed}.`,
  alternates: { canonical: "/why-choose-us" },
};

const workingWithUs = [
  {
    icon: MessageSquare,
    title: "1. Tell us what you need",
    description:
      "Send an enquiry or book a consultation — a quick conversation is usually enough to understand your situation.",
  },
  {
    icon: FileCheck2,
    title: "2. We prepare the work",
    description:
      "Documents are reviewed carefully, questions are asked early, and your return or lodgement is prepared properly.",
  },
  {
    icon: Phone,
    title: "3. Stay in the loop",
    description:
      "You hear from us in plain English — what’s done, what’s next, and what (if anything) you need to action.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="Advice backed by real accountability"
        description={`Choosing a tax agent is about trust as much as expertise. ${siteConfig.name} is a registered practice based in ${siteConfig.contact.suburb}, helping clients across the ${siteConfig.contact.areaServed} since ${siteConfig.credentials.yearEstablished}.`}
      />

      <Reveal>
        <div className="container-page relative -mt-10">
          <div className="relative h-56 overflow-hidden rounded-2xl shadow-xl shadow-primary-900/15 sm:h-72">
            <Image
              src="/images/why-handshake.png"
              alt="Handshake after a successful client consultation"
              fill
              sizes="(min-width: 1024px) 1100px, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/45 via-transparent to-transparent" />
          </div>
        </div>
      </Reveal>

      <section className="section">
        <div className="container-page flex flex-col gap-10">
          <Reveal>
            <SectionHeading
              eyebrow="What Sets Us Apart"
              title="A practice built around clear advice and direct access"
              description="No account managers, no ticket queues — just straightforward tax and accounting support from a registered agent."
            />
          </Reveal>

          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.whyChooseUs.map((item) => (
              <RevealItem key={item.title} className="card p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg shadow-primary-950/10">
              <Image
                src="/images/why-credentials.png"
                alt="Accountant carefully reviewing client files and documents"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            <Reveal>
              <SectionHeading
                eyebrow="Registration & Credentials"
                title="Where our accountability comes from"
                description="Professional registration and a long-standing local presence are the foundation of how we work."
              />
            </Reveal>

            <RevealGroup className="grid gap-5">
              <RevealItem className="card flex flex-col gap-3 p-6">
                <span className="icon-badge">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-slate-900">
                  Registered Tax Agent
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Registered with the Tax Practitioners Board under number{" "}
                  <span className="font-semibold text-slate-900">
                    {siteConfig.credentials.tpbNumber}
                  </span>
                  . ABN {siteConfig.credentials.abn}.
                </p>
                <a
                  href={siteConfig.credentials.tpbRegisterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-primary-700 hover:text-primary-800"
                >
                  Verify on the TPB public register
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </RevealItem>

              <RevealItem className="card flex flex-col gap-3 p-6">
                <span className="icon-badge">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-slate-900">
                  Established {siteConfig.credentials.yearEstablished}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Serving clients across the {siteConfig.contact.areaServed} for{" "}
                  {siteConfig.credentials.yearsExperience}+ years with personal,
                  accountable tax and accounting support from our Gregory Hills
                  office.
                </p>
              </RevealItem>

              <RevealItem className="card flex flex-col gap-3 p-6">
                <span className="icon-badge">
                  <Clock3 className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-slate-900">
                  Easy to reach during business hours
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Monday to Friday, 9:00am – 5:00pm. Call{" "}
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="font-semibold text-primary-700 hover:text-primary-800"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>{" "}
                  or email{" "}
                  <a
                    href={`mailto:${siteConfig.contact.enquiryEmail}`}
                    className="font-semibold text-primary-700 hover:text-primary-800"
                  >
                    {siteConfig.contact.enquiryEmail}
                  </a>
                  .
                </p>
              </RevealItem>
            </RevealGroup>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page flex flex-col gap-10">
          <Reveal>
            <SectionHeading
              eyebrow="Working With Us"
              title="A simple process from first enquiry to lodgement"
              description="We keep the steps clear so you always know where things stand."
            />
          </Reveal>

          <RevealGroup className="grid gap-6 md:grid-cols-3">
            {workingWithUs.map(({ icon: Icon, title, description }) => (
              <RevealItem key={title} className="card flex flex-col gap-4 p-6">
                <span className="icon-badge">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal>
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
            >
              Book a consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Talk to your accountant directly"
        description="No account managers, no hand-offs — just a straightforward conversation about your tax and accounting needs."
      />
    </>
  );
}
