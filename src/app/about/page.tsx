import type { Metadata } from "next";
import Image from "next/image";
import { Target, MessageCircleHeart, Timer, HeartHandshake } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Our Practice",
  description: `Learn about ${siteConfig.name}, a registered tax agent based in ${siteConfig.contact.suburb}, ${siteConfig.contact.state} serving individuals and small businesses across South-Western Sydney.`,
  alternates: { canonical: "/about" },
};

const approach = [
  {
    icon: Target,
    title: "Accuracy first",
    description:
      "Every return and lodgement is checked carefully against current ATO rules — we'd rather get it right than get it out the door fast.",
  },
  {
    icon: MessageCircleHeart,
    title: "Plain-English advice",
    description:
      "No jargon, no lecture — just a clear explanation of your options and what we recommend, in language that actually makes sense.",
  },
  {
    icon: Timer,
    title: "Responsive turnaround",
    description:
      "Enquiries and questions get a real reply, promptly — not a queue behind a call centre or an automated ticketing system.",
  },
  {
    icon: HeartHandshake,
    title: "A year-round relationship",
    description:
      "We're here beyond tax time — for the business decision, the ATO letter, or the question that comes up in the middle of the year.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Our Practice"
        title="Accounting support built around you, not the other way around"
        description={`${siteConfig.name} is a registered tax agency based in ${siteConfig.contact.suburb}, ${siteConfig.contact.state}, providing tax and accounting services to individuals and small businesses across ${siteConfig.contact.areaServed}.`}
      />

      <section className="section">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-accent-500/20"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl shadow-primary-900/15">
              <Image
                src="/images/about-consultation.jpg"
                alt="Two professionals reviewing paperwork together during a consultation"
                fill
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="flex flex-col gap-8">
            <Reveal delay={0.08}>
              <SectionHeading
                eyebrow="Our Approach"
                title="Straightforward accounting, without the runaround"
                description="We work with individuals, sole traders and growing businesses who want a tax agent they can actually reach — someone who explains the 'why', not just the paperwork."
              />
            </Reveal>
            <RevealGroup className="grid gap-6 sm:grid-cols-2">
              {approach.map(({ icon: Icon, title, description }) => (
                <RevealItem key={title} className="flex flex-col gap-3">
                  <span className="icon-badge">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{description}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <Reveal>
            <SectionHeading
              eyebrow="Who We Work With"
              title="Individuals and small businesses across South-Western Sydney"
              description="From a first tax return to ongoing BAS and payroll, we tailor the level of support to what you actually need."
            />
          </Reveal>
          <RevealGroup className="flex flex-wrap content-start gap-3 lg:col-span-2">
            {siteConfig.clientTypes.map((type) => (
              <RevealItem key={type}>
                <span className="inline-block rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-medium text-primary-800 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                  {type}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBanner
        title="Want to know if we're the right fit?"
        description="A quick conversation is the easiest way to find out. Reach out and let's talk about what you need."
      />
    </>
  );
}
