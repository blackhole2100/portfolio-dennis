export type PersonalProject = {
  title: string;
  media: {
    type: "image" | "video";
    src: string;
  }[];
  description: string;
  stack: string[];
  github: string;
  live?: string;
  accent: string;
};

export const personalProjects: PersonalProject[] = [
  {
    title: "AI Full-Stack AI-Driven E-Commerce Architecture",
    media: [
      {
        type: "image",
        src: "/ai-full-stack-01.jpg",
      },
      {
        type: "image",
        src: "/ai-full-stack-02.jpg",
      },
      {
        type: "image",
        src: "/ai-full-stack-03.jpg",
      },
      {
        type: "video",
        src: "/ai-full-stack-04.mp4",
      },
      {
        type: "image",
        src: "/ai-full-stack-05.jpg",
      },
      {
        type: "image",
        src: "/ai-full-stack-06.jpg",
      },
      {
        type: "image",
        src: "/ai-full-stack-07.jpg",
      },
      {
        type: "image",
        src: "/ai-full-stack-08.jpg",
      },
    ],
    description:
      "AI-driven eCommerce platform engineered across the full stack, combining a Next.js and React frontend with Python/FastAPI services, multiple databases, Redis caching, AI/LLM integrations, authentication, search, and cloud infrastructure.",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "AI/LLM",
      "Cloud"
    ],

    github: "",
    live: "",
    accent: "#7C3AED",
  },

  {
    title: "QuickAI – Full-Stack AI Web App",
    media: [
      {
        type: "image",
        src: "/quickAI-01.jpg",
      },
      {
        type: "video",
        src: "/quickAI-02.webm",
      },
      {
        type: "image",
        src: "/quickAI-03.jpg",
      },
    ],
    description:
      "Full-stack AI application for generating articles, blog titles, and images through integrated AI services. Built with a React/Vite frontend, Node.js/Express backend, PostgreSQL, authentication, Cloudinary, and multiple AI APIs.",

    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Cloudinary",
      "AI APIs",
      "Authentication"
    ],

    github: "",
    live: "",
    accent: "#0E7490",
  },

  {
    title: "Full-Stack Warehouse & Inventory Management System",
    media: [
      {
        type: "image",
        src: "/warehouse-full-stack-01.jpg",
      },
      {
        type: "image",
        src: "/warehouse-full-stack-02.jpg",
      },
      {
        type: "image",
        src: "/warehouse-full-stack-03.jpg",
      },
      {
        type: "image",
        src: "/warehouse-full-stack-04.jpg",
      },
      {
        type: "video",
        src: "/warehouse-full-stack-05.mp4",
      },
      {
        type: "image",
        src: "/warehouse-full-stack-06.jpg",
      },
    ],
    description:
      "Full-stack warehouse platform for managing products, suppliers, clients, orders, invoices, warehouses, and support operations. Includes role-based access, analytics, QR workflows, Stripe payments, Shippo shipping, and Brevo notifications.",

    stack: [
      "Next.js",
      "React",
      "Prisma",
      "MongoDB",
      "Stripe",
      "Shippo",
      "Brevo",
      "RBAC"
    ],

    github: "",
    live: "",
    accent: "#2563EB",
  },

  {
    title: "Roastery SaaS Platform",
    media: [
      {
        type: "image",
        src: "/roastery-saas-01.jpg",
      },
      {
        type: "image",
        src: "/roastery-saas-02.jpg",
      },
      {
        type: "image",
        src: "/roastery-saas-03.jpg",
      },
      {
        type: "image",
        src: "/roastery-saas-04.jpg",
      },
      {
        type: "image",
        src: "/roastery-saas-05.jpg",
      },
    ],
    description:
      "SaaS platform for coffee roasters with multi-party payment infrastructure, seller onboarding, split transactions, platform commissions, and recurring subscription billing.",

    stack: [
      "SaaS",
      "Stripe Connect",
      "Payments",
      "Subscriptions",
      "API Integration",
      "Multi-Party Transactions"
    ],

    github: "",
    live: "",
    accent: "#B45309",
  },

    {
    title: "Various Service Platform",
    media: [
      {
        type: "image",
        src: "/hvac-01.jpg",
      },
      {
        type: "image",
        src: "/hvac-02.jpg",
      },
      {
        type: "image",
        src: "/hvac-03.jpg",
      },
      {
        type: "image",
        src: "/hvac-04.jpg",
      },
      {
        type: "image",
        src: "/hvac-05.jpg",
      },
      {
        type: "image",
        src: "/hvac-06.jpg",
      },
      {
        type: "image",
        src: "/hvac-07.jpg",
      },
      {
        type: "video",
        src: "/hvac-08.mp4",
      },
    ],
    description:
      "Modern service platform built with Next.js, React.js, Nuxt and Vue.js, featuring reusable components, dynamic service and location pages, lead forms, interactive maps, external integrations, SSR/SEO, and performance-focused frontend architecture.",

    stack: [
      "Nuxt",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "SSR",
      "SEO",
      "API Integration"
    ],

    github: "",
    live: "",
    accent: "#0284C7",
  },

  {
    title: "AI Appointment & Customer-Service Automation",
    media: [
      {
        type: "image",
        src: "/ai-appointment-01.jpg",
      },
      {
        type: "image",
        src: "/ai-appointment-02.jpg",
      },
      {
        type: "image",
        src: "/ai-appointment-03.jpg",
      },
      {
        type: "video",
        src: "/ai-appointment-04.mp4",
      },
    ],
    description:
      "AI-powered customer-service and appointment automation connecting an LLM agent with Twilio, CRM systems, and workflow automation to handle appointment booking and rescheduling.",

    stack: [
      "AI/LLM",
      "n8n",
      "Twilio",
      "CRM",
      "Workflow Automation",
      "API Integration"
    ],

    github: "",
    live: "",
    accent: "#059669",
  },

  {
    title: "CRM Marketing Automation Platform",
    media: [
      {
        type: "image",
        src: "/crm-marketing-01.jpg",
      },
      {
        type: "image",
        src: "/crm-marketing-02.jpg",
      },
      {
        type: "video",
        src: "/crm-marketing-03.mp4",
      },
    ],
    description:
      "Python-based CRM marketing automation platform built with layered architecture and separated authentication, model, repository, and service responsibilities for maintainable business workflows.",

    stack: [
      "Python",
      "Flask",
      "CRM",
      "REST APIs",
      "Repository Pattern",
      "Service Architecture"
    ],

    github: "",
    live: "",
    accent: "#DC2626",
  },

  {
    title: "MCP Secure AI Database Platform",
    media: [
      {
        type: "image",
        src: "/mcp-01.jpg",
      },
      {
        type: "image",
        src: "/mcp-02.jpg",
      },
      {
        type: "video",
        src: "/mcp-03.mp4",
      },
      {
        type: "image",
        src: "/mcp-04.jpg",
      },
      {
        type: "image",
        src: "/mcp-05.jpg",
      },
    ],

    description:
      "GPT-powered database agent that generates, validates, and executes SQL through MCP tools with RBAC, dry-run safeguards, and full audit logging.",

    stack: [
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "MCP",
      "OpenAI"
    ],

    github: "",
    live: "",
    accent: "#0E7490",
  },

];