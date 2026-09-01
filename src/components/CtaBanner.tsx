import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

type CtaBannerProps = {
  title?: string;
  description?: string;
};

export default function CtaBanner({
  title = "Ready to Get Started?",
  description = "No obligation, no jargon — just straightforward advice on your tax and accounting needs.",
}: CtaBannerProps) {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900">
      <div
        aria-hidden="true"
        className="absolute inset-0 text-white/[0.06] bg-dot-grid"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl"
      />
      <Reveal>
        <div className="container-page relative flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="max-w-xl text-primary-100">{description}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={siteConfig.headerCtas.primary.href} className="btn-accent">
              {siteConfig.headerCtas.primary.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href={siteConfig.headerCtas.secondary.href} className="btn-outline">
              {siteConfig.headerCtas.secondary.label}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
