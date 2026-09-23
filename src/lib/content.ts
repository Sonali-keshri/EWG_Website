export const navItems = [
  { label: "Practices", href: "/practices" },
  { label: "Industries", href: "/industries" },
  { label: "Blogs", href: "/blogs" },
  { label: "Careers", href: "/careers" },
] as const;

export const hero = {
  eyebrow: "Engineered with grit",
  headerLine1: "Proven where it matters.",
  headerLine2: "Building what's next",
  body: "For more than a decade, EWG has worked where systems, data and operations cannot afford to go wrong. That began in utilities, where we built deep expertise across Oracle Utilities and the meter-to-cash lifecycle. Today, we're taking that same engineering discipline into enterprise transformation, cloud, automation and intelligent systems.",
  primaryCta: { label: "See how we work", href: "/practices" },
  secondaryCta: { label: "Talk to our team", href: "/contact" },
};

export const partnerLogos = [
  { name: "Hertz", src: "/images/client/hertz.png", width: 120, height: 43 },
  { name: "Kroger", src: "/images/client/kroger.png", width: 122, height: 65 },
  { name: "FirstEnergy", src: "/images/client/firstenergy.png", width: 192, height: 44 },
  { name: "Evergy", src: "/images/client/evegry.png", width: 187, height: 37 },
  { name: "Bank of America", src: "/images/client/emericabank.png", width: 259, height: 27 },
  { name: "CPS Energy", src: "/images/client/cps.png", width: 149, height: 51 },
  { name: "Oncor", src: "/images/client/concor.png", width: 139, height: 85 },
  { name: "Cleveland Clinic", src: "/images/client/cleveland.png", width: 245, height: 38 },
  { name: "Toronto Hydro", src: "/images/client/toronto.png", width: 191, height: 75 },
  { name: "Energy Australia", src: "/images/client/energy.png", width: 207, height: 60 },
] as const;

export const stats = [
  { value: "40+", label: "Utilities & enterprises served" },
  { value: "96%", label: "Customer satisfaction" },
  { value: "150+", label: "Oracle certifications held" },
  { value: "7", label: "Countries, 3 continents" },
];

export const whoWeAre = {
  eyebrow: "Where it started. Where we're going.",
  headerLine1: "Utilities don't get",
  headerLine2: "second chances.",
  body: [
    "EWG was built in utilities, solving the systems problems that cannot wait.",
    "Billing. Metering. Customer platforms. Migrations. Infrastructure.",
    "That experience and expertise shapes how we work, and it's the standard we now approach enterprise systems, cloud, data, automation and intelligent applications, with.",
  ],
  cta: { label: "Read the full story", href: "/about-us" },
};

export const aboutUs = {
  eyebrow: "The crucible",
  headerLine1: "Same standard.",
  headerLine2: "Wider canvas.",
  body: "From the systems that keep the lights, water and gas on, to the systems that run your business. This is how we earned the standard we work to, and where it's going next.",
  stats: [
    { value: 40, suffix: "+", label: "Utilities &\nenterprises served" },
    { value: 96, suffix: "%", label: "Customer\nsatisfaction" },
    { value: 150, suffix: "+", label: "Oracle\ncertifications held" },
    { value: 7, suffix: "", label: "Countries" },
    { value: 3, suffix: "", label: "Continents" },
  ],
};

export const aboutStory = {
  eyebrow: "Our story",
  headerLine1: "We grew by",
  headerLine2: "solving harder problems.",
  body: "When you flip a switch, turn on a tap or light a stove, a chain of systems has to work: billing, metering, customer records, settlements. There's no room for error. For over a decade, EWG has worked in that environment. It shaped how we work: precise, resilient and accountable, with a focus on the details that matter during challenging times. That's the mindset we are taking beyond utilities.",
  closer:
    "So this is EWG. Same standard. Wider canvas. From the systems that keep the lights on, to the systems that run your business.",
  milestones: [
    {
      year: "2011",
      title: "Founded",
      body: "Started as Oracle Utilities architects and consultants.",
    },
    {
      year: "2016",
      title: "Gold Partner",
      body: "Achieved Oracle Gold status and stood up our offshore delivery center.",
    },
    {
      year: "2018",
      title: "Profit Solutions",
      body: "Acquired Profit Solutions (Singapore), broadening our technology capability.",
    },
    {
      year: "2019",
      title: "Global Expansion",
      body: "Grew across new markets on three continents.",
    },
    {
      year: "2025",
      title: "AI in production",
      body: "EWG Verity, Catalyst and Optix move from internal tools to production-ready products.",
    },
  ],
};

export const aboutEdge = {
  eyebrow: "Our edge",
  headerLine1: "We know where",
  headerLine2: "the hard parts are.",
  cards: [
    {
      title: "Oracle depth",
      body: "Built around the platforms we implement.",
      icon: "/images/oracle.png",
      iconAlt: "Oracle database stack",
    },
    {
      title: "Complexity",
      body: "We take on migrations and integrations others often avoid.",
      icon: "/images/complexity.png",
      iconAlt: "Puzzle pieces forming a head",
    },
    {
      title: "Practical innovation",
      body: "Our products start with problems we've actually had to solve.",
      icon: "/images/innovation.png",
      iconAlt: "Hand holding a lightbulb beside a gear",
    },
    {
      title: "Accountability",
      body: "One team from architecture through delivery and support.",
      icon: "/images/accountability.png",
      iconAlt: "Clipboard with a person profile",
    },
  ],
};

export const aboutNextPhase = {
  eyebrow: "The next phase",
  headerLine1: "We're building on",
  headerLine2: "what got us here.",
  body: "More capability. More IP. More ways to turn experience into an advantage for our clients. Because the future is more than technology.",
  cta: { label: "Talk to EWG", href: "/contact" },
};

export const products = {
  eyebrow: "Our IP",
  header: "On-Field Learnings To Customer Capability",
  body: "The best ideas often start with a real delivery problem. We solve it, prove it, then turn the solution into something our clients can use again and again.",
  cta: { label: "Explore our products & AI", href: "/#products" },
  cardCta: { label: "Explore our products & AI", href: "/#products" },
  cards: [
    {
      name: "EWG Verity",
      tagline: "AI-accelerated testing",
      body: "Tests critical utility applications faster and with less manual effort. Verity uses intelligent test generation and automation to expand coverage across complex Oracle environments while helping teams catch issues earlier.",
      metrics: ["40% cost & time saved", "80% less manual testing effort"],
      image: "/images/carousalImg1.png",
      imageAlt: "Field engineer reviewing data on a tablet at a utility site",
    },
    {
      name: "EWG Catalyst",
      tagline: "AI workflow automation for utilities",
      body: "Automate repetitive workflows efficiently. From bill estimation to payment reminders, Catalyst enables faster implementation, without adding bespoke customisation to the OUAF framework.",
      metrics: ["30–50% lower implementation cost", "Zero framework customization"],
      image: "/images/carousalImg1.png",
      imageAlt: "Utility engineer using a tablet in the field",
    },
    {
      name: "EWG Optix",
      tagline: "Cloud cost & optimization",
      body: "Gives teams a live view of cloud spend across AWS, GCP and Azure, identifies where money can be saved, and helps move reporting data where it is most useful. Less guessing, more saving.",
      metrics: ["Multi-cloud monitoring", "Real-time cost recommendations"],
      image: "/images/carousalImg1.png",
      imageAlt: "Field engineer reviewing cloud and network data on a tablet",
    },
  ],
};

export const practicesPage = {
  eyebrow: "Services",
  headerLine1: "One Standard.",
  headerLine2: "Four practices.",
  body: "EWG brings its engineering expertise together across four practices, each built around a specific set of technologies and transformation needs. Choose the practice that fits your challenge, and bring in the wider EWG team when the work calls for it.",
};

export const practices = {
  eyebrow: "One standard · Four practices",
  headerLine1: "Deep where it matters.",
  headerLine2: "Broad where it counts.",
 
  cards: [
    {
      name: "EWG Utilities",
      tagline: "The Practice we were built on",
      body: "CC&B, C2M and MDM implementations, upgrades and migrations for utilities that can't tolerate downtime. If it's the meter-to-cash migration another partner walked away from, this is the practice that takes it on.",
    },
    {
      name: "EWG Enterprise",
      tagline: "Enterprise systems without the silos",
      body: "Finance, supply chain, HR and project delivery across Oracle Fusion and SAP.",
    },
    {
      name: "EWG Cloud & Infrastructure",
      tagline: "Modernise without compromising reliability",
      body: "OCI, ODA, cloud migration, and infrastructure engineered for performance, resilience and control.",
    },
    {
      name: "EWG Labs",
      tagline: "Where new capability takes shape",
      body: "Data, automation and intelligent systems, built around real delivery problems, tested in real environments, and deployed when they earn their place.",
    },
  ],
};

export const oracleStack = {
  eyebrow: "What we cover",
  headerLine1: "The Full Oracle Stack",
  headerLine2: "We Cover",
  cards: [
    {
      title: "Oracle Utilities",
      body: "CC&B · C2M · MDM · OFS · WAM · MWM",
      iconSrc: "/utilities.png",
    },
    {
      title: "Oracle ERP",
      body: "Fusion Financials · SCM · HCM · PPM · ORMB",
      iconSrc: "/erp.png",
    },
    {
      title: "Integration & Cloud",
      body: "OIC · OCI · APEX · ODA",
      iconSrc: "/integration.png",
    },
    {
      title: "Data & AI",
      body: "ML forecasting · Agentic Systems · EWG Verity · Catalyst",
      iconSrc: "/AI.png",
    },
    {
      title: "Beyond",
      body: "SAP · AWS",
      iconSrc: "/beyond.png",
    },
  ] as const,
};

export const howWeEngage = {
  eyebrow: "Our story",
  headerLine1: "How we",
  headerLine2: "Engage",
  project: {
    eyebrow: "Project-based delivery",
    headerLine1: "Fixed scope,",
    headerLine2: "Fixed outcome",
    body: "You know what your business needs. We design, build, test, and transition it to you. Not just the hours.",
    points: [
      "End-to-end ownership from design through go-live",
      "Fixed scope, fixed timeline, fixed accountability",
      "Built-in knowledge transfer to your team",
    ],
  },
  talent: {
    eyebrow: "Talent on demand",
    headerLine1: "Your team,",
    headerLine2: "Our depth",
  },
};

export const howWeDeliver = {
  eyebrow: "Process",
  headerLine1: "How we",
  headerLine2: "Deliver",
  steps: [
    {
      title: "Discover",
      body: "Understand the business and the systems that cannot fail.",
    },
    {
      title: "Assess",
      body: "Assess the risk and agree the path before delivery starts.",
    },
    {
      title: "Design",
      body: "Understand the business, assess the risk, build the right foundation before a line of code moves.",
    },
    {
      title: "Deliver",
      body: "End-to-end ownership from design through go-live, with knowledge transfer to your team.",
    },
  ],
};

export const industries = {
  eyebrow: "Who we serve",
  headerLine1: "Where reliability is",
  headerLine2: "non-negotiable.",
  sectors: [
    "Utilities",
    "Financial Services",
    "Healthcare & Public Sector",
    "Manufacturing & Services",
  ],
  /* Swap `image` for the licensed sector photography once it lands. */
  cards: [
    {
      name: "Utilities",
      description: "Meter-to-cash, billing and customer platforms built to run at scale.",
      image: "/images/carousalImg1.png",
    },
    {
      name: "Financial Services",
      description: "Core systems and data pipelines where every figure gets audited.",
      image: "/images/carousalImg1.png",
    },
    {
      name: "Healthcare & Public Sector",
      description: "Secure, compliant platforms serving patients and citizens.",
      image: "/images/carousalImg1.png",
    },
    {
      name: "Manufacturing & Services",
      description: "Connected operations across finance, supply chain and the field.",
      image: "/images/carousalImg1.png",
    },
  ],
  cta: { label: "Explore industries", href: "/industries" },
};

export const industriesPage = {
  eyebrow: "Utilities",
  headerLine1: "Essential systems,",
  headerLine2: "Four practices.",
  body: "EWG brings its engineering expertise together across four practices, each built around a specific set of technologies and transformation needs. Choose the practice that fits your challenge, and bring in the wider EWG team when the work calls for it.",
  ctaLabel: "Explore the industry",
  slides: [
    {
      eyebrow: "Utilities",
      title: "Essential systems, end to end.",
      body: "Oracle Utilities across meter-to-cash, AMI, customer systems and core operations, with experience across implementations, migrations and modernization.",
      href: "/industries",
      image: "/images/carousalImg1.png",
    },
    {
      eyebrow: "Finance",
      title: "Technology for the business of money.",
      body: "Oracle Fusion, Oracle financials and core operations on connected, dependable platforms.",
      href: "/industries",
      image: "/images/carousalImg1.png",
    },
    {
      eyebrow: "Healthcare",
      title: "Platforms patients and citizens rely on.",
      body: "Secure, compliant systems for healthcare and the public sector, built to run without interruption.",
      href: "/industries",
      image: "/images/carousalImg1.png",
    },
    {
      eyebrow: "Manufacturing",
      title: "Connected operations, end to end.",
      body: "Finance, supply chain and field systems on one dependable estate, with the same engineering standard.",
      href: "/industries",
      image: "/images/carousalImg1.png",
    },
  ],
};

export const blogsPage = {
  eyebrow: "Utilities",
  headerLine1: "Essential systems,",
  headerLine2: "Four practices.",
  body: "EWG brings its engineering expertise together across four practices, each built around a specific set of technologies and transformation needs. Choose the practice that fits your challenge, and bring in the wider EWG team when the work calls for it.",
  ctaLabel: "View Full Blog",
  posts: [
    {
      eyebrow: "Utilities",
      title: "Essential systems, end to end.",
      body: "Oracle Utilities across meter-to-cash, AMI, customer systems and core operations, with experience across implementations, migrations and modernization.",
      href: "/blogs",
      image: "/images/carousalImg1.png",
    },
    {
      eyebrow: "Utilities",
      title: "Essential systems, end to end.",
      body: "Oracle Utilities across meter-to-cash, AMI, customer systems and core operations, with experience across implementations, migrations and modernization.",
      href: "/blogs",
      image: "/images/carousalImg1.png",
    },
    {
      eyebrow: "Finance",
      title: "Technology for the business of money.",
      body: "Oracle Fusion, Oracle financials and core operations on connected, dependable platforms.",
      href: "/blogs",
      image: "/images/carousalImg1.png",
    },
  ],
};

export const caseStudies = {
  eyebrow: "Case study · Water utility",
  headerLead: "Featured",
  headerRest: "Works",
  cta: { label: "View case studies", href: "/#case-studies" },
  items: [
    {
      title: "A full Oracle Utilities estate, moved to ODA, on schedule.",
      body: "One of the largest water utilities in the country asked EWG to migrate its entire Oracle Utilities estate, applications, reports and integrations, onto Oracle Database Appliance. We delivered it to plan.",
      metrics:
        "On-time go-live · Zero data loss at cutover · 100% of apps, reports and integrations migrated",
      image: "/images/carousalImg1.png",
    },
    {
      title: "A full Oracle Utilities estate, moved to ODA, on schedule.",
      body: "One of the largest water utilities in the country asked EWG to migrate its entire Oracle Utilities estate, applications, reports and integrations, onto Oracle Database Appliance. We delivered it to plan.",
      metrics:
        "On-time go-live · Zero data loss at cutover · 100% of apps, reports and integrations migrated",
      image: "/images/carousalImg1.png",
    },
  ],
};

export const proof = {
  eyebrow: "Case study · Water utility",
  header: "A full Oracle Utilities estate, moved to ODA, on schedule.",
  body: "One of the largest water utilities in the country asked EWG to migrate its entire Oracle Utilities estate, applications, reports and integrations, onto Oracle Database Appliance. We delivered it to plan.",
  metrics: [
    { value: "On-time", label: "Go-live" },
    { value: "Zero", label: "Data loss at cutover" },
    { value: "100%", label: "Apps, reports and integrations migrated" },
  ],
  cta: { label: "View case studies", href: "/#proof" },
};

export const testimonials = {
  eyebrow: "In their words",
  headerLine1: "Trusted by the people",
  headerLine2: "who run the platforms.",
    quotes: [
    {
      quote:
        "EWG took on the parts of our C2M migration other partners wouldn't touch, and we went live on schedule.",
      role: "VP, Information Technology",
      org: "North American electric utility",
    },
    {
      quote:
        "Their Oracle pedigree shows. The team understood our billing edge cases before we finished explaining them.",
      role: "Director, Customer Systems",
      org: "Water utility",
    },
  ],
};

export const contactCta = {
  eyebrow: "What we were built for",
  headerLine1: "Have a system you",
  headerLine2: "can't afford to get wrong?",
  body: "That's the kind of work we were built for. Talk to us about your Oracle Utilities, ERP, cloud or AI roadmap.",
  primaryCta: { label: "Contact us", href: "/contact" },
  secondaryCta: { label: "Client & employee portal", href: "/contact" },
};

export const contactPage = {
  eyebrow: "Let's start a conversation",
  headerLine1: "Great ideas begin with",
  headerLine2: "a simple conversation.",
  body: "Have a project in mind, exploring a new idea, or simply want to know more? Get in touch with us to discuss your project's potential, and the right way forward. We're here to listen, understand, and turn ideas into meaningful outcomes.",
  fields: [
    { name: "brandName", label: "BrandName", type: "text", autoComplete: "organization" },
    { name: "email", label: "Email ID", type: "email", autoComplete: "email" },
    { name: "mobile", label: "Mobile Number", type: "tel", autoComplete: "tel" },
    { name: "requirement", label: "Requirement", type: "text", autoComplete: "off" },
  ] as const,
  message: { name: "message", label: "Message" },
  submit: "Talk to EWG",
  mapSrc:
    "https://maps.google.com/maps?q=Indiranagar,+Bengaluru&z=14&output=embed",
  mapTitle: "EWG office map — Indiranagar, Bengaluru",
};

export const footer = {
  columns: [
    {
      title: "Products",
      links: [
        { label: "EWG Utilities", href: "/practices" },
        { label: "EWG Enterprise", href: "/practices" },
        { label: "EWG Cloud & Infrastructure", href: "/practices" },
        { label: "EWG Labs", href: "/practices" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "Electricity, Water & Gas", href: "/industries" },
        { label: "Financial Services", href: "/industries" },
        { label: "Healthcare & Public Sector", href: "/industries" },
        { label: "Manufacturing & Services", href: "/industries" },
      ],
    },
    {
      title: "Insights",
      links: [
        { label: "About Us", href: "/about-us" },
        { label: "Blogs", href: "/blogs" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Contact us",
      links: [
        { label: "partners@ewgcs.com", href: "mailto:partners@ewgcs.com" },
        { label: "+1 (415) 935-5884", href: "tel:+14159355884" },
      ],
    },
  ],
  social: [
    { label: "Facebook", href: "https://facebook.com", src: "/facebook.png" },
    { label: "X", href: "https://x.com", src: "/twitter.png" },
    { label: "LinkedIn", href: "https://linkedin.com", src: "/linkedin.png" },
    { label: "Instagram", href: "https://instagram.com", src: "/insta.png" },
  ],
  copyright: "COPYRIGHTS © 2026 EWG | ALL RIGHTS RESERVED",
} as const;
