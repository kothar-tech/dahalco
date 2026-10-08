import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ClosingCta from "@/components/ClosingCta";
import PageIntro from "@/components/PageIntro";
import { siteConfig } from "@/lib/site-config";

const { contact } = siteConfig;

export const metadata: Metadata = {
  title: "Services",
  description: `Personal tax returns, business returns and BAS, tax planning, bookkeeping and payroll, and ATO letters and audits from ${siteConfig.name}, a CPA Practice and registered tax agent in ${contact.suburb}, NSW.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const { services } = siteConfig;

  return (
    <>
      <PageIntro title="What we do, and who it’s for.">
        <p>
          Everything below is done by a registered tax agent at our{" "}
          {contact.suburb} office. Not sure which one you need? Ring us and
          we&rsquo;ll point you the right way.
        </p>
      </PageIntro>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <nav aria-label="Services" className="lg:sticky lg:top-36">
              <p className="text-sm text-ink-muted">Jump to</p>
              <ol className="mt-3 divide-y divide-ink/15 border-y border-ink/15">
                {services.map((service, i) => (
                  <li key={service.slug}>
                    <a
                      href={`#${service.slug}`}
                      className="group flex gap-3 py-3 text-[15px] font-medium text-ink transition-colors hover:text-primary-700"
                    >
                      <span className="tabular text-accent-700">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="underline decoration-transparent decoration-2 underline-offset-4 group-hover:decoration-accent-500">
                        {service.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="space-y-20 lg:col-span-9">
            {services.map((service, i) => (
              <article
                key={service.slug}
                id={service.slug}
                className="border-t border-ink pt-8"
              >
                <div className="grid gap-10 md:grid-cols-12 md:gap-12">
                  <div className="md:col-span-7">
                    <p className="font-heading text-xl tabular text-accent-700">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-2 font-heading text-display-md">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                      {service.description}
                    </p>

                    <h3 className="mt-8 text-sm font-semibold text-ink">
                      What&rsquo;s included
                    </h3>
                    <ul className="tick-list mt-3 space-y-2 text-ink-soft">
                      {service.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <p className="mt-6 text-ink-soft">
                      <span className="font-semibold text-ink">Good for: </span>
                      {service.goodFor}
                    </p>

                    <Link
                      href="/book-appointment"
                      className="text-link mt-8 inline-flex items-center gap-2"
                    >
                      Ask us about this
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>

                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] overflow-hidden bg-paper-deep">
                      <Image
                        src={service.image.src}
                        alt={service.image.alt}
                        fill
                        sizes="(min-width: 1024px) 28vw, (min-width: 768px) 40vw, 90vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        heading="Not sure which of these you need?"
        text="Tell us what’s going on and we’ll say what we’d do first. If it’s not something we handle, we’ll say so."
      />
    </>
  );
}
