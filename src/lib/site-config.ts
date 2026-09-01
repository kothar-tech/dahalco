// ---------------------------------------------------------------------------
// Central place for every piece of firm-specific content: name, contact
// details, services, nav links. Update values here rather than hunting
// through components — most of the site reads from this file.
//
// Fields marked "placeholder" below are demo content and must be replaced
// with the real values before this site goes live.
// ---------------------------------------------------------------------------

export const siteConfig = {
  name: "Dahal & Co",
  legalName: "Dahal & Co Pty Ltd",
  shortTagline: "Registered Tax Agents",
  metaDescription:
    "Dahal & Co are registered tax agents based in Austral, NSW, helping individuals and small businesses across Sydney with tax returns, BAS, tax planning and ATO correspondence.",

  // Placeholder domain — replace once a real domain is purchased/pointed here.
  url: "https://www.dahalandco.com.au",
  locale: "en-AU",

  contact: {
    // Placeholder contact details — swap these for the real phone/email once available.
    phoneDisplay: "(02) 0000 0000",
    phoneHref: "tel:+61200000000",
    email: "hello@dahalandco.com.au",
    // Suburb + postcode are real (public TPB register); exact street address is a placeholder.
    addressLine1: "Suite [Address to be confirmed]",
    suburb: "Austral",
    state: "NSW",
    postcode: "2179",
    areaServed:
      "Austral and the surrounding South-Western Sydney suburbs (Liverpool, Leppington, Edmondson Park, Cecil Hills and nearby areas)",
    hours: [
      { days: "Monday – Friday", time: "9:00am – 5:30pm" },
      { days: "Saturday", time: "By appointment" },
      { days: "Sunday", time: "Closed" },
    ],
  },

  credentials: {
    tpbNumber: "26201224",
    tpbRegisterUrl: "https://www.tpb.gov.au/public-register",
    // Set these once confirmed — left as placeholders so nothing is overstated.
    yearsExperience: null as number | null,
    professionalBody: null as string | null,
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "Contact", href: "/contact" },
  ],

  // Placeholder profile URLs — swap for the firm's real social profiles.
  social: [
    { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/" },
    { label: "Facebook", icon: "facebook", href: "https://www.facebook.com/" },
    { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/" },
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
  ],
} as const;

export type ServiceItem = (typeof siteConfig.services)[number];
