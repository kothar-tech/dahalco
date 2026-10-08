// ---------------------------------------------------------------------------
// Everything firm-specific lives here: name, contact details, credentials,
// services, team and the CEO message. Pages read from this file, so most
// content changes never need a component edit.
//
// Items marked "placeholder" (team names and photos, the CEO message) are
// draft content and need the practice’s own details before launch.
// ---------------------------------------------------------------------------

export type ServiceItem = {
  slug: string;
  title: string;
  short: string;
  description: string;
  includes: string[];
  goodFor: string;
  image: { src: string; alt: string };
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  /** Path under /public, e.g. "/images/team-1.jpg". Null shows a silhouette. */
  photo: string | null;
  tone: "blue" | "sand" | "orange";
  /** True until the real name and photo are supplied. */
  placeholder?: boolean;
};

const addressLine1 = "Tenancy 101-104, 39-47 Lasso Road";
const suburb = "Gregory Hills";
const state = "NSW";
const postcode = "2557";
const fullAddress = `${addressLine1}, ${suburb} ${state} ${postcode}`;

const services: ServiceItem[] = [
  {
    slug: "personal-tax-returns",
    title: "Personal tax returns",
    short: "Employees, contractors, landlords and investors.",
    description:
      "We prepare and lodge your return as a registered tax agent. First we go through what you earned, what you spent and what you can legitimately claim. Then we explain the result before anything is sent to the ATO.",
    includes: [
      "Wages, contracting and investment income",
      "Rental properties and capital gains",
      "Work-related deductions and record checks",
      "Late and prior-year returns",
    ],
    goodFor: "Employees, contractors, landlords, share investors and retirees.",
    image: {
      src: "/images/home-client-meeting.png",
      alt: "An accountant going through paperwork with a couple at a table",
    },
  },
  {
    slug: "business-returns-and-bas",
    title: "Business returns and BAS",
    short: "Company, trust and sole trader returns, plus BAS and GST.",
    description:
      "Annual returns for companies, trusts, partnerships and sole traders, and your BAS every quarter or month. We keep an eye on the due dates so you don’t have to.",
    includes: [
      "Company, trust and partnership returns",
      "BAS and GST lodgement",
      "PAYG instalments and withholding",
      "GST registration and reviews",
    ],
    goodFor: "Sole traders and owners of small companies and trusts.",
    image: {
      src: "/images/services-bas-papers.png",
      alt: "A BAS form and a tax return on a desk beside a calculator and laptop",
    },
  },
  {
    slug: "tax-planning",
    title: "Tax planning",
    short: "A sit-down before 30 June, not a phone call after it.",
    description:
      "Most tax savings have to be arranged before the financial year ends. We look at where your income is heading, what’s coming up, and what you can sensibly do about it while there’s still time.",
    includes: [
      "End-of-year projections",
      "Timing of income and expenses",
      "The tax side of big purchases, sales and investments",
      "A plan you can act on, in writing",
    ],
    goodFor:
      "Anyone expecting a change in income, or who would like fewer surprises at tax time.",
    image: {
      src: "/images/services-tax-planning.png",
      alt: "An accountant explaining a chart on a tablet to a client",
    },
  },
  {
    slug: "bookkeeping-and-payroll",
    title: "Bookkeeping and payroll",
    short: "Records kept straight, wages and super on time.",
    description:
      "Day-to-day records, kept in good order, so tax time is a tidy-up instead of a rescue job. We can run the books, the pay run and super reporting, or just check over what you’re doing yourself.",
    includes: [
      "Bank and card reconciliations",
      "Invoicing and bill tracking",
      "Pay runs, super and Single Touch Payroll",
      "Accounting software set-up and clean-up",
    ],
    goodFor: "Small businesses without a full-time bookkeeper.",
    image: {
      src: "/images/home-desk-detail.png",
      alt: "Hands marking up a financial report next to a tablet showing charts",
    },
  },
  {
    slug: "ato-letters-and-audits",
    title: "ATO letters and audits",
    short: "Bring us the letter. We’ll deal with the ATO.",
    description:
      "A notice, a review, a debt or a request for information is far easier to handle once someone has read it properly. We contact the ATO on your behalf and explain each step as it happens.",
    includes: [
      "Reading and responding to notices",
      "Reviews and audits",
      "Payment plans and debt",
      "Amended returns",
    ],
    goodFor: "Anyone with an ATO letter and no idea what it means.",
    image: {
      src: "/images/why-credentials.png",
      alt: "A man reading through a folder of letters and documents at a desk",
    },
  },
  {
    slug: "business-set-up-and-structure",
    title: "Business set-up and structure",
    short: "Sole trader, company or trust? Decide before you start.",
    description:
      "The structure you pick affects your tax, your risk and your paperwork for years. We talk through how you’ll actually operate, then help you register and set up the books to match.",
    includes: [
      "Comparing sole trader, partnership, company and trust",
      "ABN and GST registration",
      "Setting up your records and accounting software",
      "Changing structure as the business grows",
    ],
    goodFor:
      "People starting out, and owners whose business has outgrown its set-up.",
    image: {
      src: "/images/why-handshake.png",
      alt: "Two people shaking hands across a table after agreeing a plan",
    },
  },
];

// Placeholder team: replace names, roles, bios and photos with the real people.
const team: TeamMember[] = [
  {
    name: "Name to be added",
    role: "Senior Tax Accountant",
    bio: "Prepares and reviews personal and business returns, and is usually the person you’ll speak to about your tax.",
    photo: null,
    tone: "blue",
    placeholder: true,
  },
  {
    name: "Name to be added",
    role: "BAS and Bookkeeping",
    bio: "Keeps records, BAS and payroll on schedule for our small-business clients.",
    photo: null,
    tone: "sand",
    placeholder: true,
  },
  {
    name: "Name to be added",
    role: "Client Services",
    bio: "Looks after bookings and paperwork, and makes sure nothing sits in the queue.",
    photo: null,
    tone: "orange",
    placeholder: true,
  },
];

// Draft message for the CEO to approve or rewrite.
const ceo = {
  name: "Uday Dahal",
  title: "CEO",
  photo: null as string | null,
  message: [
    "Tax stresses people out mostly because nobody explains it. I’d rather you walk out of our office understanding your own numbers than walk out with a return and a head full of questions.",
    "We’re a CPA Practice, so there are professional standards behind every return we lodge. The standard I care about most is simpler: when you ring us, someone who knows your file should pick up.",
    "If you’re not sure where to start, call us or book a time. We’ll work it out together.",
  ],
};

export const siteConfig = {
  name: "Dahal & Co",
  legalName: "Dahal & Co",
  shortTagline: "Accountant & Tax Agent",
  metaDescription:
    "Dahal & Co is a CPA Practice and registered tax agent in Gregory Hills, NSW. Personal tax returns, business returns and BAS, tax planning, bookkeeping and ATO help for Sydney individuals and small businesses.",

  url: "https://www.dahalco.com.au",
  locale: "en-AU",

  contact: {
    phoneDisplay: "0406 747 733",
    phoneHref: "tel:+61406747733",
    email: "uday@dahalco.com.au",
    enquiryEmail: "tax@dahalco.com.au",
    addressLine1,
    suburb,
    state,
    postcode,
    areaServed: "Sydney region",
    // Opens the office location in Google Maps
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Tenancy+101-104%2C+39-47+Lasso+Road%2C+Gregory+Hills+NSW+2557",
    mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`,
    hoursShort: "Mon–Fri 9am–5pm",
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
    professionalBody: "CPA Australia",
    cpaUrl: "https://www.cpaaustralia.com.au/",
    // Drop the official "CPA Practice" logo from CPA Australia into /public/images
    // and set its path here (e.g. "/images/cpa-practice.png") to replace the
    // placeholder badge icon in the footer and on the Why us page.
    cpaLogo: "/images/cpa-practive.jpg",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Why us", href: "/why-choose-us" },
    { label: "Contact", href: "/contact" },
  ],

  social: [
    {
      label: "Google Business Profile",
      icon: "google",
      href: "https://share.google/JbpCagFEy3VBmil4r",
    },
    {
      label: "Facebook",
      icon: "facebook",
      href: "https://share.google/JbpCagFEy3VBmil4r",
    },
  ],

  headerCtas: {
    primary: { label: "Book a time", href: "/book-appointment" },
    secondary: { label: "Send an enquiry", href: "/contact" },
  },

  services,

  whyChooseUs: [
    {
      title: "A CPA Practice",
      description:
        "Our work is held to CPA Australia’s professional and ethical standards, on top of what the law requires of tax agents.",
    },
    {
      title: "Registered with the Tax Practitioners Board",
      description:
        "Registered tax agent number 26201224. You can check us on the TPB public register whenever you like.",
    },
    {
      title: "The same people every time",
      description:
        "Whoever did your return last year knows your situation this year, so you’re not explaining yourself from scratch.",
    },
    {
      title: "Plain answers",
      description:
        "We explain what we’ve done and why before it’s lodged, and we’ll tell you early if something is going to cost you.",
    },
    {
      title: "A real office",
      description:
        "Tenancy 101-104, 39-47 Lasso Road, Gregory Hills. Visit by appointment, or deal with us entirely by phone and email.",
    },
    {
      title: "Private by default",
      description:
        "Your records are used for the work you’ve asked us to do, and handled under our professional confidentiality obligations and the Privacy Act.",
    },
  ],

  team,
  ceo,
} as const;
