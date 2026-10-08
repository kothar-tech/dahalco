import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page grid gap-8 lg:grid-cols-12">
        <p
          aria-hidden="true"
          className="font-heading text-[9rem] leading-none text-primary-700 lg:col-span-5 lg:text-[14rem]"
        >
          404
        </p>
        <div className="self-end lg:col-span-7">
          <h1 className="font-heading text-display-lg">
            That page isn&rsquo;t here.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-ink-soft">
            It may have moved, or the link might be wrong. Head back to the
            start, or ring us on {siteConfig.contact.phoneDisplay} and
            we&rsquo;ll point you to the right place.
          </p>
          <Link href="/" className="btn-primary mt-8">
            Back to the home page
          </Link>
        </div>
      </div>
    </section>
  );
}
