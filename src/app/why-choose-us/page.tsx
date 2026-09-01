import type { Metadata } from "next";
import { ShieldCheck, GraduationCap, Award, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description: `Credentials and registration details for ${siteConfig.name}, a registered Tax Practitioners Board tax agent serving ${siteConfig.contact.suburb} and South-Western Sydney.`,
  alternates: { canonical: "/why-choose-us" },
};

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us / Credentials"
        title="Advice backed by real accountability"
        description="Choosing a tax agent is about trust as much as expertise. Here's what stands behind ours."
      />

      <section className="section">
        <RevealGroup className="container-page grid gap-6 sm:grid-cols-2">
          {siteConfig.whyChooseUs.map((item) => (
            <RevealItem key={item.title} className="card p-6">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="section bg-slate-50">
        <div className="container-page flex flex-col gap-10">
          <Reveal>
            <SectionHeading
              eyebrow="Registration & Credentials"
              title="Where our accountability comes from"
            />
          </Reveal>

          <RevealGroup className="grid gap-6 sm:grid-cols-3">
            <RevealItem className="card flex flex-col gap-3 p-6">
              <span className="icon-badge">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-semibold text-slate-900">Registered Tax Agent</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Registered with the Tax Practitioners Board under number{" "}
                <span className="font-semibold text-slate-900">
                  {siteConfig.credentials.tpbNumber}
                </span>
                .
              </p>
              <a
                href={siteConfig.credentials.tpbRegisterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary-700 hover:text-primary-800"
              >
                Verify on the TPB public register
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </RevealItem>

            <RevealItem className="flex flex-col gap-3 rounded-2xl border border-dashed border-slate-300 bg-white p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-semibold text-slate-500">Years of Experience</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                To be confirmed — add the real figure here once available.
              </p>
            </RevealItem>

            <RevealItem className="flex flex-col gap-3 rounded-2xl border border-dashed border-slate-300 bg-white p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                <Award className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-semibold text-slate-500">Professional Membership</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                To be confirmed — e.g. CPA Australia, Chartered Accountants ANZ, or
                the Institute of Public Accountants, if applicable.
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <CtaBanner
        title="Talk to your accountant directly"
        description="No account managers, no hand-offs — just a straightforward conversation about your tax and accounting needs."
      />
    </>
  );
}
