// ---------------------------------------------------------------------------
// Central place for every piece of firm-specific content: name, contact
// details, services, nav links. Update values here rather than hunting
// through components — most of the site reads from this file.
// ---------------------------------------------------------------------------

export const siteConfig = {
  name: "Dahal & Co",
  legalName: "Dahal & Co",
  shortTagline: "Accountant & Tax Agent",
  metaDescription:
    "Dahal & Co are accountants and registered tax agents based in Gregory Hills, NSW, helping individuals and small businesses across the Sydney region with tax returns, BAS, tax planning and ATO correspondence.",

  url: "https://www.dahalco.com.au",
  locale: "en-AU",

  contact: {
    phoneDisplay: "0406 747 733",
    phoneHref: "tel:+61406747733",
    email: "uday@dahalco.com.au",
    enquiryEmail: "tax@dahalco.com.au",
    addressLine1: "Tenancy 101-104, 39-47 Lasso Road",
    suburb: "Gregory Hills",
    state: "NSW",
    postcode: "2557",
    areaServed: "Sydney region",
    hours: [
      { days: "Monday – Friday", time: "9:00am – 5:00pm" },
      { days: "Saturday", time: "Closed" },
      { days: "Sunday", time: "Closed" },
    ],
  },

  credentials: {
    abn: "21 160 588 500",
    tpbNumber: "26201224",
    tpbRegisterUrl: "https://www.tpb.gov.au/public-register",
    yearEstablished: 2016,
    yearsExperience: 10 as number | null,
    professionalBody: null as string | null,
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "Contact", href: "/contact" },
  ],

  social: [
    {
      label: "Google Business Profile",
      icon: "google",
      href: "https://share.google/JbpCagFEy3VBmil4r",
    },
  ],

  headerCtas: {
    secondary: { label: "Send Enquiry", href: "/contact" },
    primary: { label: "Book a Consultation", href: "/book-appointment" },
  },

  services: [
    {
      slug: "individual-tax-returns",
      title: "Individual Tax Returns",
      short: "Accurate, on-time returns for employees, investors and retirees.",
      description:
        "Straightforward, accurate tax returns for employees, sole traders, investors and retirees — prepared and lodged by a registered tax agent, with every eligible deduction accounted for.",
    },
    {
      slug: "business-tax-bas",
      title: "Business Tax Returns & BAS",
      short: "Company, trust and partnership returns plus quarterly BAS.",
      description:
        "Company, trust and partnership tax returns alongside quarterly BAS and GST lodgement, so your business obligations are met accurately and on time, every time.",
    },
    {
      slug: "tax-planning",
      title: "Tax Planning & Advice",
      short: "Forward-looking advice, not just a once-a-year conversation.",
      description:
        "Practical, forward-looking advice to help you understand your position and plan ahead — a year-round relationship rather than a once-a-year lodgement.",
    },
    {
      slug: "bookkeeping-payroll",
      title: "Bookkeeping & Payroll",
      short: "Ongoing support so your records stay accurate between returns.",
      description:
        "Ongoing bookkeeping and payroll support so your records stay accurate and current between returns, giving you a clear picture of your business at any time.",
    },
    {
      slug: "ato-correspondence",
      title: "ATO Correspondence & Compliance",
      short: "Notices, audits and payment plans handled on your behalf.",
      description:
        "Notices, reviews, audits and payment plan negotiations handled directly with the ATO on your behalf, explained to you in plain English at every step.",
    },
    {
      slug: "business-structuring",
      title: "Business Structuring Advice",
      short: "Guidance on the right structure for how you operate.",
      description:
        "Guidance on choosing and setting up the right structure — sole trader, company, trust or partnership — based on how you actually operate and where you're headed.",
    },
  ],

  clientTypes: [
    "Individuals & Employees",
    "Sole Traders",
    "Investors & Landlords",
    "Companies",
    "Trusts & Partnerships",
    "Tradies & Contractors",
    "Rideshare & Delivery Drivers",
    "First-Time Lodgers",
  ],

  whyChooseUs: [
    {
      title: "Registered Tax Agent",
      description:
        "Registered with the Tax Practitioners Board (TPB #26201224), so your return is prepared and lodged with proper professional accountability.",
    },
    {
      title: "Personalised, Direct Access",
      description:
        "You deal directly with your accountant — not a call centre or a rotating cast of juniors — for advice that actually fits your situation.",
    },
    {
      title: "Clear, Jargon-Free Advice",
      description:
        "Tax and compliance explained in plain language, so you understand exactly what's happening with your return and why.",
    },
    {
      title: "Secure Handling of Your Information",
      description:
        "Your financial documents and personal details are treated as strictly confidential, in line with professional and privacy obligations.",
    },
    {
      title: "Local Sydney Practice",
      description:
        "Based in Gregory Hills and serving clients across the Sydney region — easy to reach by phone, email or appointment when you need us.",
    },
    {
      title: "Established Since 2016",
      description:
        "Over a decade helping individuals and small businesses stay compliant, organised and confident about their tax position.",
    },
  ],
} as const;

export type ServiceItem = (typeof siteConfig.services)[number];
