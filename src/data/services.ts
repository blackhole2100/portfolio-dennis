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
    title: "Full-Stack Application Engineering",

    description:
      "I build complete software products across the frontend, backend, database, APIs, authentication, integrations, and cloud infrastructure. From SaaS platforms and internal applications to customer-facing products, the focus is on designing the system as a whole and delivering production-ready software end to end.",

    deliverables: [
      "Application architecture, database design, APIs, authentication, and role-based access",

      "React / Next.js frontends with Python, Node.js, or C# / .NET backends",

      "SaaS platforms, dashboards, portals, operational applications, and custom business systems",

      "REST APIs, third-party integrations, payments, communications, and external services",

      "Cloud deployment, environment configuration, documentation, and maintainable handoff",
    ],

    engagement:
      "Fixed-scope project or milestone-based development, typically 4–12 weeks depending on application complexity.",

    accent: "#7c3aed",
  },

  {
    title: "AI Engineering & Intelligent Automation",

    description:
      "I engineer practical AI systems that become part of real applications and workflows. This includes AI-powered products, agents, RAG systems, multi-agent workflows, MCP integrations, and automation designed to reason, retrieve information, generate content, and execute controlled actions.",

    deliverables: [
      "AI applications, AI agents, RAG pipelines, and multi-agent workflows",

      "LLM integrations with OpenAI, Claude, Gemini, Groq, and other model providers",

      "LangGraph, LangChain, MCP, tool-calling, and structured AI workflows",

      "AI connected to APIs, databases, CRMs, communication systems, and business applications",

      "n8n, Zapier, Make, Twilio, and custom workflow automation",

      "Validation, permissions, human-in-the-loop controls, logging, and secure server-side execution",
    ],

    engagement:
      "Fixed-scope AI sprint or staged implementation, typically 2–8 weeks depending on model integration and workflow complexity.",

    accent: "#0891b2",
  },

  {
    title: "Web, Mobile & Systems Integration",

    description:
      "I connect applications across web, mobile, backend services, APIs, cloud infrastructure, and external platforms. The result is a cohesive technical system rather than a collection of disconnected applications.",

    deliverables: [
      "React Native applications for iOS and Android with connected backend services",

      "Backend APIs and services using Python, Node.js, C#, and .NET",

      "API architecture, webhooks, authentication, data synchronization, and third-party integrations",

      "Cloud infrastructure, Docker, CI/CD, deployment, and production environments",

      "CRM, CMS, eCommerce, payment, shipping, communication, and automation integrations",

      "Legacy application modernization, system integration, and architecture improvements",
    ],

    engagement:
      "Fixed-scope integration or architecture project, typically 2–8 weeks depending on system complexity and integration requirements.",

    accent: "#d946ef",
  },
];