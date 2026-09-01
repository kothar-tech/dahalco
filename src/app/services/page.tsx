import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";
import { serviceIcons } from "@/lib/service-icons";

export const metadata: Metadata = {
  title: "Services",
  description: `Tax returns, BAS lodgement, bookkeeping, tax planning and ATO correspondence from ${siteConfig.name}, registered tax agents serving ${siteConfig.contact.suburb} and South-Western Sydney.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services Offered"
        title="Everything from a single tax return to ongoing business compliance"
        description="Clear pricing, honest advice, and a registered tax agent handling the detail — so nothing slips through the cracks."
      />

      <Reveal>
        <div className="container-page -mt-10 relative">
          <div className="relative h-56 overflow-hidden rounded-2xl shadow-xl shadow-primary-900/15 sm:h-72">
            <Image
              src="/images/services-finance-desk.jpg"
              alt="Organised financial paperwork, a laptop and a calculator on a desk"
              fill
              sizes="(min-width: 1024px) 1100px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-transparent to-transparent" />
          </div>
        </div>
      </Reveal>

      <section className="section">
        <div className="container-page flex flex-col gap-6">
          {siteConfig.services.map((service, index) => {
            const Icon = serviceIcons[service.slug];
            return (
              <Reveal key={service.slug} delay={Math.min(index * 0.05, 0.2)}>
                <div
                  id={service.slug}
                  className="card scroll-mt-24 grid gap-8 p-8 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-12"
                >
                  <span className="icon-badge h-14 w-14 rounded-2xl">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div className="max-w-2xl">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-1 text-2xl font-bold text-slate-900">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                    <Link
                      href="/book-appointment"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
                    >
                      Ask about {service.title.toLowerCase()}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
