export type ExperienceItem = {
  title: string;
  org: string;
  type?: string;
  location?: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Senior Full-Stack & AI Engineer",

    org: "Elevate Digital Studio",

    type: "Full-time",

    location: "West Jordan, UT, USA",

    period: "Mar 2021 — Jun 2026",

    current: false,

    points: [
      "Architected and built end-to-end software across web applications, backend services, APIs, databases, cloud infrastructure, integrations, and automation using Python, C#, .NET, TypeScript, React, Next.js, and Node.js.",

      "Developed full-stack SaaS platforms, AI-powered applications, business systems, and connected workflows with responsibility spanning application architecture, implementation, integration, deployment, and ongoing technical improvement.",

      "Integrated AI/GenAI capabilities, third-party APIs, CRM platforms, payment systems, communication services, and automation workflows into production-oriented applications.",

      "Expanded into mobile application development with React Native, supporting connected iOS and Android experiences alongside web and backend systems.",

      "Progressed into senior full-stack and AI engineering as the scope of work expanded from CMS and business systems into complete application architecture, AI integration, backend engineering, and end-to-end product development.",
    ],
  },

  {
    title: "Full-Stack Developer & System Architect",

    org: "Wasatch Creative Systems",

    type: "Full-time",

    location: "West Jordan, UT, USA",

    period: "Jun 2016 — Feb 2021",

    current: false,

    points: [
      "Expanded from advanced CMS and eCommerce development into full-stack application development, system architecture, integrations, APIs, databases, and custom business systems.",

      "Architected and developed custom solutions connecting frontend experiences with backend logic, third-party services, CRM platforms, and business workflows.",

      "Built and customized WordPress, Shopify, and WooCommerce solutions while increasingly taking ownership of application structure, integrations, performance, and technical architecture.",

      "Translated complex business requirements into maintainable technical systems with clear application boundaries and reusable implementation patterns.",
    ],
  },

  {
    title: "Web & Mobile Developer",

    org: "Canyon Peak Interactive",

    type: "Full-time",

    location: "West Jordan, UT, USA",

    period: "Apr 2013 — May 2016",

    current: false,

    points: [
      "Built and maintained responsive web experiences while expanding into mobile application development and custom application functionality.",

      "Worked across frontend implementation, CMS architecture, custom development, APIs, integrations, and application workflows.",

      "Developed a strong foundation in responsive web and mobile development, translating business requirements into practical digital products.",

      "Progressively moved beyond content implementation into application development, technical integrations, and broader ownership of the systems behind the user experience.",
    ],
  },

  {
    title: "Process Documentation & Technical Operations Coordinator",

    org: "MountainView Business Solutions",

    type: "Full-time",

    location: "West Jordan, UT, USA",

    period: "Jan 2010 — Mar 2013",

    current: false,

    points: [
      "Coordinated technical operations and documented business processes.",

      "Worked with operational workflows and documentation, developing an early understanding of how business processes translate into repeatable systems.",

      "Built the process and operational foundation that later informed work in CMS, CRM, automation, and application development.",
    ],
  },

  {
    title: "B.S. in Information Technology",

    org: "Western Governors University",

    type: "Education",

    location: "Salt Lake City, UT, USA",

    period: "2006 — 2010",

    current: false,

    points: [
      "Studied Information Technology while developing a broad foundation in systems, software, and technical problem-solving.",

      "Research assistant contributing to data entry, archive digitization, and research support, including summer terms in 2007 and 2009.",
    ],
  },
];
