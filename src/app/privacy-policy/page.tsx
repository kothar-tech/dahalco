import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy policy",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    title: "Information we collect",
    text: "When you send an enquiry or appointment request through this website, we collect the details you give us: your name, phone number, email address and the content of your message. We may also collect further personal and financial information directly from you as part of providing tax and accounting services.",
  },
  {
    title: "How we use your information",
    text: "We use the information you give us to respond to your enquiry, confirm appointment requests, and deliver the accounting and tax services you engage us for. We do not sell your personal information to anyone.",
  },
  {
    title: "How we store your information",
    text: "Information sent through this website is handled securely and kept only as long as we need it to respond to your enquiry or meet our professional and legal obligations as a registered tax agent.",
  },
];

export default function PrivacyPolicyPage() {
  const { contact } = siteConfig;

  return (
    <>
      <PageIntro title="Privacy policy." />

      <section className="section">
        <div className="container-page max-w-3xl">
          <div className="border border-dashed border-ink/40 bg-paper-deep/60 p-5 text-[15px] text-ink-soft">
            This is template text for the review version of the site. Have it
            checked by a qualified professional before publishing, so it
            reflects how {siteConfig.legalName} actually collects, uses and
            stores personal information and meets the Australian Privacy
            Principles.
          </div>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-heading text-2xl">{section.title}</h2>
                <p className="mt-3 text-ink-soft">{section.text}</p>
              </div>
            ))}

            <div>
              <h2 className="font-heading text-2xl">Your rights</h2>
              <p className="mt-3 text-ink-soft">
                You can ask to see, or correct, the personal information we hold
                about you at any time. Use the details on our{" "}
                <Link href="/contact" className="text-link">
                  contact page
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl">Questions</h2>
              <p className="mt-3 text-ink-soft">
                If you have a question about this policy, email{" "}
                <a href={`mailto:${contact.email}`} className="text-link">
                  {contact.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
