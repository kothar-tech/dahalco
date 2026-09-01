import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section">
      <div className="container-page max-w-3xl">
        <span className="eyebrow">Legal</span>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
          Privacy Policy
        </h1>

        <div className="mt-6 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-600">
          This is placeholder/template text for the demo. Please have it reviewed
          by a qualified professional before publishing, so it accurately reflects
          how {siteConfig.legalName} actually collects, uses and stores personal
          information, and meets Australian Privacy Principles obligations.
        </div>

        <div className="mt-10 flex flex-col gap-8">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Information we collect</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              When you submit an enquiry or appointment request through this
              website, we collect the details you provide — such as your name,
              phone number, email address, and the content of your message. We
              may also collect further personal and financial information
              directly from you as part of providing tax and accounting
              services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">How we use your information</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              We use the information you provide to respond to your enquiry,
              confirm appointment requests, and deliver the accounting and
              taxation services you engage us for. We do not sell your personal
              information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">How we store your information</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Information submitted through this website is handled securely
              and retained only as long as necessary to respond to your
              enquiry or fulfil our professional and legal obligations as a
              registered tax agent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">Your rights</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              You may request access to, or correction of, the personal
              information we hold about you at any time by contacting us using
              the details on our{" "}
              <a href="/contact" className="font-semibold text-primary-700 hover:text-primary-800">
                Contact page
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">Contact us</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              If you have questions about this privacy policy, contact us at{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-semibold text-primary-700 hover:text-primary-800"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
