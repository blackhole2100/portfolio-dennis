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
    title: "Full-Stack Developer",
    org: "Elevate Digital Studio",
    type: "Full-time",
    location: "West Jordan, UT, USA",
    period: "Mar 2021 — Jun 2026",
    current: false,
    points: [
      "Built custom CMS/CRM solutions and full-stack web applications using Python and Node.js.",
      "Developed business systems that connected web applications, CRM workflows, APIs, databases, and automation into unified operational solutions.",
      "Worked across both application development and established CMS platforms, bringing together frontend, backend, integrations, and business logic.",
      "Progressed from Experienced CMS Architect to Full-Stack Developer in 2023 as the scope of work expanded from CMS implementation into application and systems development.",
    ],
  },

  {
    title: "Senior WordPress & Shopify Developer",
    org: "Wasatch Creative Systems",
    type: "Full-time",
    location: "West Jordan, UT, USA",
    period: "Jun 2016 — Feb 2021",
    current: false,
    points: [
      "Built and customized WordPress and Shopify websites for growing businesses.",
      "Developed custom themes, layouts, and customer-facing experiences around business goals, usability, and conversion.",
      "Worked extensively with CMS and eCommerce platforms while balancing frontend experience with maintainable implementation.",
    ],
  },

  {
    title: "CMS & Web Experience Specialist",
    org: "Canyon Peak Interactive",
    type: "Full-time",
    location: "West Jordan, UT, USA",
    period: "Apr 2013 — May 2016",
    current: false,
    points: [
      "Built and maintained CMS-driven websites with a strong focus on usability and web experience.",
      "Worked across website structure, content management, frontend implementation, and ongoing site improvements.",
      "Developed the foundation in CMS architecture and user-focused web development that later expanded into full-stack engineering.",
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
