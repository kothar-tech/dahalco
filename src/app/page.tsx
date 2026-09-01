import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, UserCheck, Clock, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import HeroVisual from "@/components/HeroVisual";
import FinanceIllustration from "@/components/illustrations/FinanceIllustration";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";
import { serviceIcons } from "@/lib/service-icons";

export const metadata: Metadata = {
  title: `${siteConfig.shortTagline} in ${siteConfig.contact.suburb}, ${siteConfig.contact.state}`,
  alternates: { canonical: "/" },
};

const trustBadges = [
  { icon: ShieldCheck, label: `Registered Tax Agent (TPB #${siteConfig.credentials.tpbNumber})` },
  { icon: UserCheck, label: "Personalised, direct-access service" },
  { icon: Clock, label: "Responsive, plain-English communication" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-950">
        <Image
          src="/images/hero-desk-work.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/85 to-primary-950/25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-primary-950/40"
        />
        <div className="container-page relative section grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col items-start gap-6">
            <Reveal>
              <span className="eyebrow-dark rounded-full border border-accent-500/20 bg-accent-500/10 px-3.5 py-1.5">
                {siteConfig.shortTagline} in {siteConfig.contact.suburb}, {siteConfig.contact.state}
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="max-w-2xl font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Your tax, handled <span className="text-gradient-accent">properly</span> — every time.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="max-w-xl text-lg leading-relaxed text-primary-100">
                {siteConfig.name} provides straightforward tax returns, BAS lodgement and
                year-round advice for individuals and small businesses across{" "}
                {siteConfig.contact.suburb} and South-Western Sydney.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href={siteConfig.headerCtas.primary.href} className="btn-accent">
                  {siteConfig.headerCtas.primary.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href={siteConfig.headerCtas.secondary.href} className="btn-outline">
                  {siteConfig.headerCtas.secondary.label}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <ul className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
                {trustBadges.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2 text-sm text-primary-200">
                    <Icon className="h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <HeroVisual />
        </div>
      </section>

      {/* Services overview */}
      <section className="section">
        <div className="container-page flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Expert tax and accounting, tailored to you"
              description="From straightforward individual returns to ongoing business compliance — handled with precision and explained in plain English."
            />
          </Reveal>

          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service) => {
              const Icon = serviceIcons[service.slug];
              return (
                <RevealItem key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="card group flex h-full flex-col gap-4 p-6"
                  >
                    <span className="icon-badge transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {service.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                        {service.short}
                      </p>
                    </div>
                    <span className="mt-auto flex items-center gap-1 text-sm font-semibold text-primary-700 opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </Link>
                </RevealItem>
              );
            })}
          </RevealGroup>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
          >
            View all services <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Who we help */}
      <section className="section relative overflow-hidden bg-slate-50">
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-1/2 text-primary-100 bg-dot-grid"
        />
        <div className="container-page relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-10">
            <Reveal>
              <SectionHeading
                eyebrow="Who We Help"
                title="Built for every stage of your journey"
                description="Whether you're lodging your first return or managing a growing business, we tailor our advice to your situation."
              />
            </Reveal>
            <RevealGroup className="flex flex-wrap gap-3">
              {siteConfig.clientTypes.map((type) => (
                <RevealItem key={type}>
                  <span className="inline-block rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-medium text-primary-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md">
                    {type}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
          <Reveal delay={0.1} className="hidden lg:block">
            <FinanceIllustration className="mx-auto w-full max-w-md" />
          </Reveal>
        </div>
      </section>

      {/* Why choose us teaser */}
      <section className="section">
        <div className="container-page flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Advice you can actually trust"
              description="A registered tax agent providing direct, personal service — not a call centre."
            />
          </Reveal>
          <RevealGroup className="grid gap-6 sm:grid-cols-2">
            {siteConfig.whyChooseUs.map((item) => (
              <RevealItem key={item.title}>
                <div className="card flex h-full gap-4 p-6">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent-500" />
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <Link
            href="/why-choose-us"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
          >
            More about our credentials <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
