export type CaseStudy = {
  slug: string;
  title: string;
  short: string;
  tag: string;
  /** the business problem this system solves, in one line */
  solution: string;
  summary: string;
  stats: { value: string; label: string }[];
  problem: string;
  built: string[];
  architecture: string[];
  ai: string[];
  impact: string[];
  stack: string[];
  accent: string;
  flagship?: boolean;
};

export const companyIntro = {
  company: "",
  role: "Senior Full-Stack & AI Engineer",
  context:
    "AI, full-stack development, CRM, CMS, and automation come together when the goal isn't just to launch software, but to make the business run better.",
  themes: [
    "WhatsApp as the company's operating system — approvals, dispatch and reminders over chat, in English and Hindi",
    "AI proposes, a named human disposes — an LLM never releases money",
    "API keys never touch the browser — every AI call runs through a server-side proxy",
    "Cost engineering built-in — model routing by task, cost-gated LLM calls, free-tier caches",
  ],
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-full-stack-ai-driven-e-commerce-architecture",

    title: "AI Full-Stack AI-Driven E-Commerce Architecture",

    short:
      "AI-driven eCommerce architecture combining modern frontend, backend, data, APIs, and intelligent workflows",

    tag: "AI · Full-Stack · Architecture",

    solution:
      "Architected a modern AI-driven eCommerce platform around modular application layers, scalable backend services, structured data architecture, APIs, and intelligent workflows.",

    flagship: true,

    summary:
      "A full-stack AI-driven eCommerce architecture designed to demonstrate how modern web applications can combine frontend experiences, backend services, structured data, APIs, AI capabilities, authentication, caching, search, and cloud infrastructure within one maintainable system.",

    stats: [
      { value: "AI", label: "intelligent application layer" },
      { value: "Full-Stack", label: "end-to-end architecture" },
      { value: "API", label: "service integration layer" },
      { value: "Cloud", label: "deployment-ready foundation" },
    ],

    problem:
      "Modern eCommerce applications require more than a storefront. Product experiences, customer workflows, search, data, payments, AI capabilities, authentication, and backend services need to operate as one coherent system while remaining maintainable as the product grows.",

    built: [
      "A modular full-stack application architecture separating presentation, application, domain, and infrastructure responsibilities.",

      "Modern frontend architecture designed around reusable components and scalable application patterns.",

      "Backend services and API boundaries structured around business capabilities rather than tightly coupled frontend logic.",

      "Database architecture designed around transactional data, relationships, search requirements, and future scalability.",

      "AI integration architecture designed to connect intelligent capabilities with real application workflows.",

      "Authentication, caching, search, integrations, and infrastructure treated as first-class parts of the application architecture.",

      "A repository and service structure designed to make the system easier to extend without turning future features into tightly coupled code.",
    ],

    architecture: [
      "Frontend layer built around modern React and Next.js application patterns.",

      "Application and backend layers designed to separate business logic from presentation and infrastructure concerns.",

      "API architecture provides controlled boundaries between application services and external integrations.",

      "Data architecture combines relational and document-oriented storage patterns where appropriate.",

      "Caching and search layers are designed to improve application responsiveness and scalability.",

      "AI services are integrated as part of the application architecture rather than isolated as a standalone demo.",
    ],

    ai: [
      "AI/LLM capabilities are treated as an application service that can participate in real product workflows.",

      "The architecture allows intelligent features to interact with structured application data and business logic.",

      "AI integration is designed around extensibility so additional models and intelligent workflows can be introduced without restructuring the entire application.",
    ],

    impact: [
      "Demonstrates end-to-end ownership of modern application architecture.",

      "Provides a technical foundation for combining AI with real business and eCommerce workflows.",

      "Shows how frontend, backend, APIs, data, AI, and infrastructure can be designed as one cohesive system.",
    ],

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
      "Cloud",
    ],

    accent: "#7C3AED",
  },

  {
    slug: "quickai-full-stack-ai-web-app",

    title: "QuickAI – Full-Stack AI Web App",

    short:
      "Full-stack AI application integrating multiple generative AI services",

    tag: "AI · Full-Stack · APIs",

    solution:
      "Built a complete AI-powered web application connecting modern frontend, backend APIs, authentication, database persistence, cloud storage, and multiple generative AI services.",

    flagship: true,

    summary:
      "A full-stack AI web application that provides article generation, blog title generation, and AI image generation through one authenticated application experience.",

    stats: [
      { value: "3", label: "AI generation workflows" },
      { value: "Full-Stack", label: "frontend + backend" },
      { value: "API", label: "AI service integration" },
      { value: "Cloud", label: "deployed application" },
    ],

    problem:
      "AI capabilities become significantly more useful when they are integrated into a complete application rather than presented as isolated API demonstrations. The challenge was connecting multiple AI services with authentication, persistence, APIs, and a usable product interface.",

    built: [
      "React-based frontend application with reusable components and authenticated user workflows.",

      "Node.js and Express backend providing application APIs and business logic.",

      "Multiple AI API integrations for article, blog-title, and image generation.",

      "Secure authentication and user access management.",

      "PostgreSQL database integration for application data.",

      "Cloudinary integration for AI-generated image storage and delivery.",

      "Production deployment covering both frontend and backend environments.",
    ],

    architecture: [
      "React/Vite frontend communicates with a Node.js/Express API layer.",

      "Backend services handle authentication, application logic, database access, and AI API communication.",

      "AI providers are integrated through backend services rather than exposed directly to the client.",

      "PostgreSQL provides persistent application data storage.",

      "Cloudinary handles generated image storage and delivery.",
    ],

    ai: [
      "Integrated generative AI APIs into real application workflows.",

      "Separated AI service communication from the frontend through backend APIs.",

      "Implemented multiple AI capabilities within one authenticated product experience.",
    ],

    impact: [
      "Demonstrates hands-on AI application engineering rather than AI-only experimentation.",

      "Connects AI services with authentication, persistence, APIs, and cloud infrastructure.",

      "Provides a complete example of taking generative AI capabilities into a deployable full-stack application.",
    ],

    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "JavaScript",
      "PostgreSQL",
      "AI APIs",
      "Cloudinary",
      "REST APIs",
      "Authentication",
    ],

    accent: "#8B5CF6",
  },

  {
    slug: "warehouse-inventory-management-system",

    title: "Full-Stack Warehouse & Inventory Management System",

    short:
      "Scalable full-stack platform for inventory, orders, warehouses, and connected operations",

    tag: "SaaS · Full-Stack",

    solution:
      "Architected a unified full-stack platform connecting inventory, orders, invoices, warehouses, support, payments, shipping, and customer communications.",

    flagship: true,

    summary:
      "A scalable business application designed to bring warehouse and inventory workflows into one system with role-based access, analytics, operational data, and integrated third-party services.",

    stats: [
      { value: "6+", label: "core operational areas" },
      { value: "3", label: "external integrations" },
      { value: "RBAC", label: "role-based access" },
      { value: "Full-Stack", label: "end-to-end application" },
    ],

    problem:
      "Warehouse and inventory operations can become fragmented across spreadsheets, separate applications, payment systems, shipping tools, and communication platforms. A unified application requires consistent data, permissions, workflows, and integrations across the entire operation.",

    built: [
      "Full-stack application covering products, orders, invoices, warehouses, clients, and support operations.",

      "Role-based access controlling different operational responsibilities.",

      "Analytics dashboards providing centralized operational visibility.",

      "Stripe integration connecting payment workflows to the application.",

      "Shippo integration connecting orders with shipping operations.",

      "Brevo integration connecting customer communications with business workflows.",

      "QR-code workflows supporting inventory and operational processes.",
    ],

    architecture: [
      "Next.js and React provide the application interface.",

      "Prisma provides structured application-level database access.",

      "MongoDB provides persistent operational data storage.",

      "Role-based permissions separate operational responsibilities while maintaining one shared application.",

      "External services are integrated through application workflows rather than treated as disconnected tools.",
    ],

    ai: [
      "AI is not a core feature of this project. The primary engineering focus is full-stack architecture, business workflows, data, and integrations.",
    ],

    impact: [
      "Centralizes inventory and warehouse operations in one application.",

      "Connects payments, shipping, and communications directly to operational workflows.",

      "Demonstrates end-to-end engineering across frontend, backend, data, integrations, and business logic.",
    ],

    stack: [
      "Next.js",
      "React",
      "Prisma",
      "MongoDB",
      "Stripe",
      "Shippo",
      "Brevo",
      "QR Codes",
      "Full-Stack Development",
    ],

    accent: "#7C3AED",
  },

  {
    slug: "roastery-saas-platform",

    title: "Roastery SaaS Platform",

    short:
      "SaaS marketplace architecture with multi-party payments and automated billing",

    tag: "SaaS · Payments · APIs",

    solution:
      "Architected a SaaS platform with multi-party payment flows, seller onboarding, split transactions, commissions, subscriptions, and automated billing.",

    flagship: false,

    summary:
      "A SaaS platform designed around marketplace-style transactions where payment infrastructure and recurring billing need to operate as integrated parts of the application.",

    stats: [
      { value: "SaaS", label: "application model" },
      { value: "Multi-party", label: "payment architecture" },
      { value: "Stripe", label: "payment infrastructure" },
      { value: "Auto", label: "billing workflow" },
    ],

    problem:
      "Multi-party SaaS products require more complex payment architecture than a standard checkout. Connected accounts, seller onboarding, split payments, commissions, and recurring billing all need to remain synchronized with application workflows.",

    built: [
      "SaaS application architecture designed around marketplace and subscription workflows.",

      "Stripe Connect integration for multi-party payment processing.",

      "Seller onboarding and connected account workflows.",

      "Split transaction and platform commission handling.",

      "Automated recurring subscription billing.",

      "Payment activity integrated into the broader application experience.",
    ],

    architecture: [
      "Application workflows control the business logic surrounding payment operations.",

      "Stripe Connect provides the multi-party payment infrastructure.",

      "Payment events are incorporated into the product workflow rather than treated as isolated transactions.",

      "Subscription and billing workflows are structured for continued SaaS expansion.",
    ],

    ai: [
      "AI is not a core component of this project. The primary engineering focus is SaaS architecture, payments, and automated billing.",
    ],

    impact: [
      "Demonstrates SaaS architecture beyond basic CRUD functionality.",

      "Handles multi-party payment requirements through Stripe Connect.",

      "Connects recurring billing with application-level business workflows.",
    ],

    stack: [
      "SaaS",
      "Stripe Connect",
      "Payments",
      "Subscription Billing",
      "APIs",
      "Marketplace Architecture",
    ],

    accent: "#06B6D4",
  },

  {
    slug: "ai-appointment-customer-service-automation",

    title: "AI Appointment & Customer-Service Automation",

    short:
      "AI-powered workflow connecting LLMs, communications, automation, and CRM data",

    tag: "AI · Automation · CRM",

    solution:
      "Connected an AI agent, Twilio, n8n, and CRM data into an automated customer-service workflow for appointment booking and rescheduling.",

    flagship: false,

    summary:
      "An AI-driven automation system that turns conversational customer requests into real business actions while keeping communication and CRM records connected.",

    stats: [
      { value: "AI", label: "LLM-powered workflow" },
      { value: "4", label: "connected system components" },
      { value: "2", label: "automated appointment actions" },
      { value: "CRM", label: "business context layer" },
    ],

    problem:
      "Appointment scheduling becomes repetitive when every booking or rescheduling request requires manual customer-service intervention. The engineering challenge is connecting conversational AI to communication infrastructure, automation logic, and the CRM where customer information lives.",

    built: [
      "LLM-powered customer-service agent.",

      "Twilio communication integration.",

      "n8n workflow orchestration connecting multiple systems.",

      "CRM integration for customer and appointment context.",

      "Automated appointment booking workflows.",

      "Automated appointment rescheduling workflows.",
    ],

    architecture: [
      "The LLM provides conversational intelligence while the automation layer controls business execution.",

      "n8n acts as the orchestration layer between AI, communication services, and CRM systems.",

      "Twilio provides the communication infrastructure.",

      "CRM data provides the business context required for customer interactions.",

      "The architecture separates AI reasoning from actual workflow execution.",
    ],

    ai: [
      "LLM-based agent handles customer-service interactions.",

      "AI output is connected to real business actions rather than remaining inside a conversational interface.",

      "The orchestration layer translates AI-driven decisions into appointment and CRM workflows.",
    ],

    impact: [
      "Transforms repetitive appointment operations into an automated workflow.",

      "Connects AI with real communication and business systems.",

      "Demonstrates practical AI engineering integrated with existing business infrastructure.",
    ],

    stack: [
      "AI",
      "LLM",
      "n8n",
      "Twilio",
      "CRM",
      "Automation",
      "APIs",
    ],

    accent: "#8B5CF6",
  },

  {
    slug: "crm-marketing-automation-platform",

    title: "CRM Marketing Automation Platform",

    short:
      "Python-based CRM automation platform with layered application architecture",

    tag: "Python · CRM · Automation",

    solution:
      "Designed and engineered a CRM marketing automation platform with a layered Python architecture for campaigns, segmentation, workflows, and analytics.",

    flagship: false,

    summary:
      "A Flask-based CRM automation platform designed around separation of concerns, maintainable application services, structured data access, and evolving marketing workflows.",

    stats: [
      { value: "Python", label: "application foundation" },
      { value: "Flask", label: "backend framework" },
      { value: "Layered", label: "architecture pattern" },
      { value: "CRM", label: "business domain" },
    ],

    problem:
      "CRM automation becomes difficult to maintain when business rules, application logic, and data access become tightly coupled. A structured application architecture makes workflow changes easier to implement as marketing requirements evolve.",

    built: [
      "Flask-based CRM marketing automation application.",

      "Separated authentication, models, repositories, and service layers.",

      "Campaign management and customer segmentation workflows.",

      "Marketing automation logic organized as application services.",

      "Analytics-oriented application structure.",

      "Architecture prepared for future production database integration.",
    ],

    architecture: [
      "Python and Flask provide the backend application foundation.",

      "Repository and service layers separate data access from business logic.",

      "Authentication is separated from core application services.",

      "Marketing workflows are treated as structured application processes rather than isolated automation rules.",
    ],

    ai: [
      "AI is not a core feature of this project. The primary engineering focus is Python backend architecture, CRM workflows, and automation.",
    ],

    impact: [
      "Demonstrates structured backend engineering using Python and Flask.",

      "Creates a maintainable foundation for CRM-driven automation.",

      "Shows separation of concerns across authentication, data, repositories, and services.",
    ],

    stack: [
      "Python",
      "Flask",
      "REST APIs",
      "CRM",
      "Marketing Automation",
      "Layered Architecture",
    ],

    accent: "#F97316",
  },

  {
    slug: "electrical-hvac-service-platform",

    title: "Electrical & HVAC Service Platform",

    short:
      "Modern Nuxt application engineered for performance, SEO, and scalable content",

    tag: "Nuxt · Vue · TypeScript",

    solution:
      "Architected and developed a modern Nuxt application with component-driven frontend architecture, dynamic content, integrations, and conversion-focused workflows.",

    flagship: false,

    summary:
      "A production-oriented web application built with modern Vue and Nuxt architecture, combining reusable components, dynamic service and location content, interactive functionality, external integrations, and SEO-focused rendering.",

    stats: [
      { value: "Nuxt", label: "application framework" },
      { value: "Vue", label: "frontend architecture" },
      { value: "TypeScript", label: "application language" },
      { value: "SSR", label: "rendering strategy" },
    ],

    problem:
      "Modern service platforms need to balance rich interactive experiences with performance, responsive rendering, search visibility, and maintainable content architecture.",

    built: [
      "Component-driven Nuxt and Vue application architecture.",

      "Dynamic service and location page structures.",

      "Reusable responsive UI components.",

      "Custom lead-generation and inquiry workflows.",

      "Interactive service-area mapping.",

      "External API and service integrations.",

      "SSR and SEO-focused application structure.",

      "Performance and responsive rendering optimization.",
    ],

    architecture: [
      "Nuxt provides the application and server-rendering foundation.",

      "Vue components provide reusable presentation and interaction patterns.",

      "TypeScript improves maintainability across application logic.",

      "Dynamic content structures support scalable service and location pages.",

      "External services are integrated through controlled application interfaces.",
    ],

    ai: [
      "AI is not a core feature of this project. The primary engineering focus is modern frontend architecture, SSR, integrations, SEO, and performance.",
    ],

    impact: [
      "Demonstrates modern Vue/Nuxt application engineering.",

      "Combines responsive frontend architecture with server-side rendering and integrations.",

      "Shows the ability to build production-oriented applications beyond traditional CMS development.",
    ],

    stack: [
      "Nuxt",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "SSR",
      "API Integration",
      "HTML5",
      "CSS3",
    ],

    accent: "#06B6D4",
  },

  {
    slug: "crm-integrated-client-portal",

    title: "CRM-Integrated Client Portal",

    short:
      "Bi-directional CRM integration connecting a customer portal with Pipedrive",

    tag: "CRM · APIs · Integration",

    solution:
      "Built a customer-facing portal connected to Pipedrive through a custom API layer and bi-directional synchronization.",

    flagship: false,

    summary:
      "A CRM-integrated client portal combining a WordPress frontend with custom API integration and synchronized CRM data.",

    stats: [
      { value: "2", label: "connected systems" },
      { value: "↔", label: "bi-directional synchronization" },
      { value: "API", label: "custom integration layer" },
      { value: "CRM", label: "Pipedrive integration" },
    ],

    problem:
      "Customer portals and CRMs often become separate sources of information. Manual data duplication creates inconsistency and prevents the customer experience from staying connected to the business system.",

    built: [
      "Customer-facing portal using WordPress and Elementor.",

      "Custom API wrapper connecting the portal to Pipedrive.",

      "Bi-directional data synchronization.",

      "Integration logic connecting customer-facing workflows with CRM records.",

      "A dedicated integration layer separating CRM communication from the frontend.",
    ],

    architecture: [
      "WordPress and Elementor provide the portal presentation layer.",

      "Custom API wrapper abstracts communication with Pipedrive.",

      "Bi-directional synchronization keeps the two systems connected.",

      "The integration layer isolates CRM-specific logic from the frontend experience.",
    ],

    ai: [
      "AI is not a core component of this project. The primary engineering focus is API integration, synchronization, and CRM architecture.",
    ],

    impact: [
      "Connects a customer portal directly to an operational CRM.",

      "Reduces manual duplication between systems.",

      "Demonstrates practical API architecture and third-party system integration.",
    ],

    stack: [
      "WordPress",
      "Elementor",
      "Pipedrive",
      "Custom API",
      "REST APIs",
      "CRM Integration",
    ],

    accent: "#2563EB",
  },
];