export type PersonalProject = {
  title: string;
  image: string[];
  description: string;
  stack: string[];
  github: string;
  live?: string;
  accent: string;
};

export const personalProjects: PersonalProject[] = [
  {
    title: "AI Full-Stack AI-Driven E-Commerce Architecture",
    image: [
      "/ai-full-stack-01.jpg",
      "/ai-full-stack-02.jpg",
      "/ai-full-stack-03.jpg",
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
    image:["/quickAI-02.jpg",],
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
    image:["/warehouse-full-stack-03.jpg",],
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
    image:["/roastery-saas-04.jpg",],
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
    title: "AI Appointment & Customer-Service Automation",
    image:["/ai-appointment-05.jpg",],
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
    image:["/crm-marketing-06.jpg",],
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
    title: "Electrical & HVAC Service Platform",
    image:["/hvac-07.jpg",],
    description:
      "Modern service platform built with Nuxt and Vue.js, featuring reusable components, dynamic service and location pages, lead forms, interactive maps, external integrations, SSR/SEO, and performance-focused frontend architecture.",

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
    title: "AI Ticket Management System",
    image:["/ai-ticket-08.jpg",],
    description:
      "Multi-role ticketing platform with AI classification, summarization, and smart reply suggestions. Includes Zod-validated APIs, Cloudinary uploads, and automated email notifications.",

    stack: [
      "Next.js",
      "MongoDB",
      "Zod",
      "Cloudinary",
      "AI APIs"
    ],

    github: "",
    live: "",
    accent: "#7C3AED",
  },

  {
    title: "MCP Secure AI Database Platform",
    image:["/mcp-09.jpg",],

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