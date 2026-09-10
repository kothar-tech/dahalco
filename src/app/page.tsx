import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, UserCheck, Clock, ArrowRight, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import HeroVisual from "@/components/HeroVisual";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";
import { serviceIcons } from "@/lib/service-icons";

export const metadata: Metadata = {
  title: `${siteConfig.shortTagline} in ${siteConfig.contact.suburb}, ${siteConfig.contact.state}`,
  alternates: { canonical: "/" },
};

const trustBadges = [
  {
    icon: ShieldCheck,
    label: `Registered Tax Agent (TPB #${siteConfig.credentials.tpbNumber})`,
  },
  { icon: UserCheck, label: "Personalised, direct-access service" },
  { icon: Clock, label: "Responsive, plain-English communication" },
];

const highlights = [
  {
    image: "/images/home-desk-detail.png",
    alt: "Accountant reviewing financial documents and charts on a tablet",
    title: "Clear, careful work",
    text: "Every return and lodgement checked properly — so nothing important is missed.",
  },
  {
    image: "/images/home-client-meeting.png",
    alt: "Accountant meeting with clients in a bright office",
    title: "Advice you can talk through",
    text: "Sit down with your accountant, ask questions, and leave knowing what happens next.",
  },
  {
    image: "/images/home-local-office.png",
    alt: "Quiet sunny suburban street near a local professional office",
    title: `Based in ${siteConfig.contact.suburb}`,
    text: `Serving individuals and businesses across the ${siteConfig.contact.areaServed} since ${siteConfig.credentials.yearEstablished}.`,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[78vh] overflow-hidden bg-primary-950">
        <Image
          src="/images/home-hero-consultation.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/88 to-primary-900/45"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-primary-950/35"
        />
        <div className="container-page relative grid min-h-[78vh] items-center gap-12 py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
          <div className="flex flex-col items-start gap-6">
            <Reveal>
              <span className="eyebrow-dark rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
                {siteConfig.shortTagline} · {siteConfig.contact.suburb},{" "}
                {siteConfig.contact.state}
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="max-w-2xl font-heading text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                Your tax, handled{" "}
                <span className="text-gradient-accent">properly</span> — every
                time.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="max-w-xl text-lg leading-relaxed text-primary-100">
                {siteConfig.name} provides straightforward tax returns, BAS
                lodgement and year-round advice for individuals and small
                businesses across the {siteConfig.contact.areaServed}.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={siteConfig.headerCtas.primary.href}
                  className="btn-accent"
                >
                  {siteConfig.headerCtas.primary.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href={siteConfig.headerCtas.secondary.href}
                  className="btn-outline"
                >
                  {siteConfig.headerCtas.secondary.label}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <ul className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
                {trustBadges.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2 text-sm text-primary-100"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-accent-400"
                      aria-hidden="true"
                    />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <HeroVisual />
        </div>
      </section>

      {/* Image life / atmosphere strip */}
      <section className="section bg-white">
        <div className="container-page flex flex-col gap-10">
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="Professional support with a personal feel"
              description="Real conversations, careful paperwork, and a local practice you can actually reach."
            />
          </Reveal>

          <RevealGroup className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <RevealItem key={item.title} className="group flex flex-col gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-md shadow-primary-950/10">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Services overview */}
      <section className="section border-y border-slate-100 bg-slate-50">
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
                      Learn more{" "}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
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
            View all services{" "}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Who we help */}
      <section className="section overflow-hidden">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl shadow-primary-950/15 sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/home-client-meeting.png"
                alt="Clients meeting with their accountant in a bright office"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-transparent to-transparent"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/95 p-4 backdrop-blur-sm">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <MapPin className="h-4 w-4 text-primary-700" aria-hidden="true" />
                  {siteConfig.contact.addressLine1}, {siteConfig.contact.suburb}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Serving the {siteConfig.contact.areaServed}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
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
                  <span className="inline-block rounded-full border border-primary-100 bg-primary-50/70 px-4 py-2 text-sm font-medium text-primary-800 transition-all hover:-translate-y-0.5 hover:border-primary-200 hover:bg-white hover:shadow-md">
                    {type}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* Why choose us teaser */}
      <section className="section border-t border-slate-100 bg-slate-50">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl shadow-primary-950/10">
              <Image
                src="/images/why-handshake.png"
                alt="Handshake after a successful tax consultation"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="order-1 flex flex-col gap-8 lg:order-2">
            <Reveal>
              <SectionHeading
                eyebrow="Why Choose Us"
                title="Advice you can actually trust"
                description="A registered tax agent providing direct, personal service — not a call centre."
              />
            </Reveal>
            <RevealGroup className="grid gap-4 sm:grid-cols-2">
              {siteConfig.whyChooseUs.slice(0, 4).map((item) => (
                <RevealItem key={item.title}>
                  <div className="card h-full p-5">
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
            <Link
              href="/why-choose-us"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
            >
              More about our credentials{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
