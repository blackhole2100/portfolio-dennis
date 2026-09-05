export type Service = {
  title: string;
  description: string;
  deliverables: string[];
  /** how the engagement is actually shaped and priced */
  engagement: string;
  accent: string;
};

export const servicesIntro = {
  title: "Three ways we can work.",
  description:
    "Whether you're building something new, connecting systems you already have, or improving an existing application, the goal is the same: turn complex business requirements into software that is useful, maintainable, and ready to grow.",
};

export const services: Service[] = [
  {
    title: "Full-Stack Applications & Business Systems",
    description:
      "From internal tools and SaaS platforms to client portals and operational applications, I build complete systems across the frontend, backend, database, APIs, authentication, and third-party integrations. The focus is on solving the workflow behind the software, not just producing another interface.",
    deliverables: [
      "Application architecture, database design, APIs, authentication, and role-based access",
      "React / Next.js frontends with Python or Node.js backends",
      "Business workflows, dashboards, reporting, and operational tools",
      "Payments, shipping, communications, and external API integrations",
      "Production deployment, documentation, and maintainable handoff",
    ],
    engagement:
      "Fixed-scope project or milestone-based build, typically 4–10 weeks depending on system complexity.",
    accent: "#7c3aed",
  },

  {
    title: "AI, Agents & Workflow Automation",
    description:
      "Practical AI systems that connect models to real business workflows. I build AI applications, agentic workflows, RAG pipelines, and automation that can classify, summarize, retrieve, reason, and trigger actions without turning the system into an uncontrolled black box.",
    deliverables: [
      "AI applications, agents, RAG pipelines, and tool-using workflows",
      "LLM integrations with OpenAI, Claude, Gemini, and other model providers",
      "LangGraph / LangChain / MCP-based agent workflows",
      "n8n, Zapier, Make, Twilio, CRM, and API automation",
      "Human-in-the-loop controls, validation, logging, and secure server-side execution",
    ],
    engagement:
      "Fixed-scope AI sprint or staged implementation, typically 2–6 weeks depending on integrations and workflow complexity.",
    accent: "#0891b2",
  },

  {
    title: "CRM, CMS & eCommerce Development",
    description:
      "Websites and business platforms built around the tools companies already depend on. With deep experience across WordPress, Shopify, HubSpot, WooCommerce, and CRM integrations, I can extend an existing platform, rebuild a broken workflow, or connect the website to the systems behind it.",
    deliverables: [
      "Custom WordPress, Shopify, WooCommerce, and HubSpot implementations",
      "CRM integrations with platforms such as HubSpot, Pipedrive, and Zoho",
      "Custom themes, portals, CMS experiences, and conversion-focused interfaces",
      "API integrations connecting websites, CRMs, automation, and external services",
      "Performance, usability, SEO, and ongoing technical improvements",
    ],
    engagement:
      "Fixed-scope implementation or monthly development retainer, typically 2–6 weeks for defined projects.",
    accent: "#d946ef",
  },
];