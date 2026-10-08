import type { Metadata } from "next";
import ClosingCta from "@/components/ClosingCta";
import PageIntro from "@/components/PageIntro";
import PersonTile from "@/components/PersonTile";
import { siteConfig } from "@/lib/site-config";

const { contact, credentials, ceo, team } = siteConfig;

export const metadata: Metadata = {
  title: "About us",
  description: `Meet the people at ${siteConfig.name}, a CPA Practice and registered tax agent in ${contact.suburb}, NSW, looking after individuals, families and small businesses since ${credentials.yearEstablished}.`,
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Explain first, lodge second.",
    text: "You’ll hear what we’ve done, and why, before anything goes to the ATO.",
  },
  {
    title: "Same people, every time.",
    text: "Your file stays with the people who know it, so you’re never starting the story again.",
  },
  {
    title: "Early warnings.",
    text: "If something will cost you money or a deadline is slipping, we tell you when we know, not when it’s due.",
  },
  {
    title: "Your records stay private.",
    text: "We use them for the work you’ve asked us to do, and nothing else.",
  },
];

const facts = [
  ["Established", String(credentials.yearEstablished)],
  ["Practice", "CPA Practice"],
  ["Tax agent", `TPB ${credentials.tpbNumber}`],
  ["ABN", credentials.abn],
  ["Office", `${contact.addressLine1}, ${contact.suburb} ${contact.state}`],
  ["Hours", `${contact.hours[0].days}, ${contact.hours[0].time}`],
];

export default function AboutPage() {
  const initials = ceo.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <>
      <PageIntro title="Who you’ll be dealing with." tone="blue">
        <p>
          {siteConfig.name} is a CPA Practice and registered tax agency on Lasso
          Road in {contact.suburb}. Since {credentials.yearEstablished} we&rsquo;ve
          done the tax and accounts for local individuals, families and small
          businesses.
        </p>
      </PageIntro>

      {/* The practice */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-7">
            <p className="font-heading text-display-md leading-snug text-ink">
              We work with people who&rsquo;d like their tax sorted by someone
              they can ring.
            </p>
            <p>
              Some clients come once a year for a return. Others have us on call
              for BAS, payroll and everything in between. Either way, you deal
              with a small team that knows your file.
            </p>
            <p>
              As a registered tax agent we&rsquo;re bound by the Tax
              Practitioners Board&rsquo;s code of conduct, and as a CPA Practice
              we&rsquo;re held to {credentials.professionalBody}&rsquo;s
              professional and ethical standards too.
            </p>
          </div>

          <dl className="border-t border-ink lg:col-span-5">
            {facts.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-ink/15 py-4"
              >
                <dt className="text-sm text-ink-muted">{label}</dt>
                <dd className="font-medium tabular text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CEO message */}
      <section className="border-y border-ink/15 bg-paper-deep/60">
        <div className="container-page grid gap-12 py-20 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-28">
          <div className="w-full max-w-[15rem] lg:col-span-4 lg:max-w-none">
            <PersonTile
              name={ceo.name}
              photo={ceo.photo}
              initials={initials}
              tone="blue"
            />
          </div>

          <figure className="lg:col-span-8">
            <p className="text-sm text-ink-muted">A word from our CEO</p>
            <blockquote className="mt-4">
              <p className="font-heading text-[1.7rem] leading-snug text-ink sm:text-3xl">
                &ldquo;{ceo.message[0]}&rdquo;
              </p>
              <div className="mt-6 space-y-4 text-lg text-ink-soft">
                {ceo.message.slice(1).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </blockquote>
            <figcaption className="mt-8 border-t border-ink/20 pt-5">
              <span className="font-heading text-xl font-semibold text-ink">
                {ceo.name}
              </span>
              <span className="text-ink-soft">, {ceo.title}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-12">
            <h2 className="font-heading text-display-md lg:col-span-5">
              The team
            </h2>
            <p className="max-w-lg text-lg text-ink-soft lg:col-span-6 lg:col-start-7">
              The people you&rsquo;ll speak to when you ring, email or come in.
            </p>
          </div>

          <ul className="mt-12 grid gap-x-8 gap-y-10 sm:mt-14 sm:grid-cols-3 sm:gap-y-14">
            {team.map((member) => (
              <li
                key={member.role}
                className="grid grid-cols-[6.5rem_1fr] items-start gap-x-5 sm:block"
              >
                <PersonTile
                  name={member.name}
                  photo={member.photo}
                  tone={member.tone}
                />
                <div className="sm:mt-5">
                  <h3
                    className={`font-heading text-2xl ${
                      member.placeholder ? "text-ink-muted" : "text-ink"
                    }`}
                  >
                    {member.name}
                  </h3>
                  <p className="mt-0.5 font-semibold text-primary-700">
                    {member.role}
                  </p>
                  <p className="mt-3 text-ink-soft">{member.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How we work */}
      <section className="border-t border-ink/15">
        <div className="container-page grid gap-12 py-20 lg:grid-cols-12 lg:py-24">
          <h2 className="font-heading text-display-md lg:col-span-4">
            How we work
          </h2>
          <ol className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {principles.map((item, i) => (
              <li key={item.title} className="border-t border-ink pt-5">
                <span className="font-heading text-lg tabular text-accent-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-heading text-2xl">{item.title}</h3>
                <p className="mt-2 text-ink-soft">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ClosingCta
        heading="Want to meet us before you decide?"
        text="Ring, or book a time. The first conversation is a chance to see whether we’re the right fit."
      />
    </>
  );
}
