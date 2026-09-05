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
  company: "Hagerstone International Pvt. Ltd.",
  role: "Full-Stack & AI Engineer",
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
  slug: "warehouse-inventory-management-system",

  title: "Warehouse & Inventory Management System",

  short: "Full-stack platform for inventory, orders, warehouses, and business operations",

  tag: "SaaS · Full-Stack",

  solution:
    "Replaces disconnected inventory and operational processes with one role-based platform for managing products, orders, invoices, warehouses, support, and connected services.",

  flagship: true,

  summary:
    "A scalable full-stack warehouse and inventory management platform designed to bring core operational workflows into one system. The application combines role-based access, analytics dashboards, inventory and order management, invoicing, warehouse operations, support workflows, and integrations for payments, shipping, and customer communications.",

  stats: [
    { value: "1", label: "unified operations platform" },
    { value: "3", label: "external service integrations" },
    { value: "6+", label: "core operational areas" },
    { value: "RBAC", label: "role-based access" },
  ],

  problem:
    "Inventory and warehouse operations often become fragmented across separate tools, spreadsheets, and manual processes. Product records, orders, invoices, warehouse activity, customer support, payments, shipping, and communications become difficult to manage consistently when they live in disconnected systems.",

  built: [
    "A full-stack operations platform covering products, orders, invoices, warehouses, and support workflows within one application.",

    "Role-based access so different users can work with the parts of the system relevant to their responsibilities.",

    "Analytics dashboards that provide operational visibility instead of relying entirely on manual reporting.",

    "Payment integration through Stripe, allowing financial workflows to connect directly with the application.",

    "Shipping integration through Shippo, connecting order workflows with shipping operations.",

    "Customer communication integration through Brevo, connecting transactional or operational communication to the platform.",

    "A scalable application structure designed so additional business workflows and integrations can be added without turning the platform into a collection of disconnected features.",
  ],

  architecture: [
    "Full-stack application architecture combining a modern frontend with application logic, database access, authentication, and third-party service integrations.",

    "Role-based permissions keep operational areas separated while maintaining a single application and shared data model.",

    "Business workflows are connected through application-level integrations rather than requiring users to repeatedly move information between unrelated tools.",

    "External services such as Stripe, Shippo, and Brevo are treated as integrated components of the platform rather than standalone systems.",
  ],

  ai: [
    "AI is not presented as a core feature of this project; the primary engineering focus is the full-stack operational platform and its integrations.",
  ],

  impact: [
    "Core warehouse and inventory workflows operate from one platform.",

    "Users gain centralized visibility into products, orders, invoices, warehouses, and support operations.",

    "Payments, shipping, and communications become part of the same operational workflow instead of separate disconnected processes.",
  ],

  stack: [
    "Next.js",
    "React",
    "Prisma",
    "MongoDB",
    "Stripe",
    "Shippo",
    "Brevo"
  ],

  accent: "#7C3AED",
},
{
  slug: "roastery-saas-platform",

  title: "Roastery SaaS Platform",

  short: "Multi-party SaaS platform for coffee roasters with automated billing",

  tag: "SaaS · Payments",

  solution:
    "Creates a SaaS foundation for coffee roasters with multi-party payments and automated billing built into the product experience.",

  flagship: false,

  summary:
    "A SaaS platform designed specifically around the operational and commercial model of coffee roasters. The system combines a multi-party payment architecture with automated billing so the software can support transactions between different participants while keeping payment workflows inside the application.",

  stats: [
    { value: "1", label: "SaaS platform" },
    { value: "Multi-party", label: "payment model" },
    { value: "Stripe", label: "payment infrastructure" },
    { value: "Auto", label: "billing workflow" },
  ],

  problem:
    "A SaaS product serving multiple parties has to handle more than a simple one-customer payment flow. Payment ownership, connected accounts, billing, and application workflows need to work together without creating a disconnected financial process.",

  built: [
    "A SaaS application designed around the needs of coffee roasters and their operational workflows.",

    "Stripe Connect integration to support multi-party payment flows rather than a basic single-merchant checkout.",

    "Automated billing workflows designed to reduce the need for manual recurring payment administration.",

    "A product architecture where payment activity is part of the broader SaaS experience instead of being treated as a separate external process.",

    "A foundation intended to support continued expansion of the platform as additional business workflows are introduced.",
  ],

  architecture: [
    "SaaS-oriented application architecture with the payment layer integrated directly into the product.",

    "Stripe Connect handles the multi-party payment infrastructure while the application controls the surrounding business workflow.",

    "Automated billing reduces the amount of recurring financial administration that would otherwise have to happen manually.",
  ],

  ai: [
    "AI is not a primary component of this project; the main technical challenge is SaaS architecture combined with multi-party payments and billing.",
  ],

  impact: [
    "Provides coffee roasters with a purpose-built SaaS platform instead of a generic payment workflow.",

    "Multi-party payments are handled through a dedicated payment architecture.",

    "Recurring billing becomes an integrated part of the application rather than a manual back-office task.",
  ],

  stack: [
    "SaaS",
    "Stripe Connect",
    "Automated Billing",
    "Payments"
  ],

  accent: "#06B6D4",
},
  {
  slug: "ai-appointment-customer-service-automation",

  title: "AI Appointment & Customer-Service Automation",

  short: "AI workflow for automated booking and appointment rescheduling",

  tag: "AI · Automation",

  solution:
    "Connects an AI agent, communication infrastructure, automation workflows, and CRM data into one automated appointment experience.",

  flagship: false,

  summary:
    "An AI-driven customer-service automation system that connects an LLM agent with Twilio, n8n, and a CRM. The workflow is designed to automate appointment booking and rescheduling while keeping customer communication and business records connected.",

  stats: [
    { value: "1", label: "AI-driven workflow" },
    { value: "4", label: "connected system components" },
    { value: "2", label: "automated appointment actions" },
    { value: "CRM", label: "business record layer" },
  ],

  problem:
    "Appointment scheduling creates repetitive customer-service work when every booking or rescheduling request requires manual intervention. The challenge is not simply adding a chatbot, but connecting AI conversations to communication tools, automation, and the CRM where the business actually stores customer information.",

  built: [
    "An LLM-powered agent capable of participating in the appointment workflow.",

    "Twilio integration for customer communication and interaction handling.",

    "n8n workflows connecting the AI layer with external services and business logic.",

    "CRM integration so appointment activity remains connected to the customer's business record.",

    "Automated booking workflows that reduce the amount of manual scheduling work.",

    "Rescheduling workflows that allow the same automation layer to handle changes instead of treating every interaction as a new manual task.",
  ],

  architecture: [
    "The system is organized as a workflow connecting the LLM agent, automation layer, communication infrastructure, and CRM.",

    "n8n acts as the orchestration layer between the AI agent and external services.",

    "Twilio provides the communication layer while the CRM maintains the business context behind customer interactions.",

    "The design separates conversational intelligence from workflow execution, allowing the automation layer to control how AI decisions translate into actual business actions.",
  ],

  ai: [
    "An LLM agent handles the customer-service portion of the workflow instead of relying entirely on fixed scripted responses.",

    "AI is connected to real business actions, including appointment booking and rescheduling, rather than operating as an isolated conversational demo.",

    "The orchestration layer determines how AI output moves into external services and CRM workflows.",
  ],

  impact: [
    "Appointment booking can move from a manual customer-service process into an automated workflow.",

    "Rescheduling can be handled through the same connected system.",

    "Customer communication, AI processing, automation, and CRM records operate as one workflow.",
  ],

  stack: [
    "AI",
    "LLM",
    "n8n",
    "Twilio",
    "CRM",
    "Automation"
  ],

  accent: "#8B5CF6",
},
  {
  slug: "crm-marketing-automation-platform",

  title: "CRM Marketing Automation Platform",

  short: "Layered CRM automation platform built with Python and Flask",

  tag: "CRM · Automation",

  solution:
    "Turns CRM marketing processes into a structured application with a clean architecture instead of a collection of disconnected automation rules.",

  flagship: false,

  summary:
    "A CRM marketing automation platform built with Flask and designed around a clean layered architecture. The system focuses on separating application responsibilities so marketing workflows, business logic, and data operations remain maintainable as the platform grows.",

  stats: [
    { value: "1", label: "CRM automation platform" },
    { value: "Python", label: "application foundation" },
    { value: "Flask", label: "web framework" },
    { value: "Layered", label: "architecture" },
  ],

  problem:
    "CRM automation can quickly become difficult to maintain when business rules, application logic, and data access become tightly coupled. Marketing workflows need a structure that can evolve as the underlying business processes change.",

  built: [
    "A dedicated CRM marketing automation application rather than relying exclusively on disconnected automation rules.",

    "A Flask-based application layer for handling the platform's business workflows.",

    "A clean separation of application responsibilities through a layered architecture.",

    "Automation capabilities designed around CRM-driven marketing processes.",

    "A structure intended to make future workflow changes easier to implement without rewriting unrelated parts of the application.",
  ],

  architecture: [
    "Python and Flask provide the application foundation.",

    "A layered architecture separates concerns so business logic does not become tightly coupled to presentation or data access.",

    "CRM workflows are treated as application processes rather than isolated one-off automations.",

    "The architecture creates a cleaner foundation for extending the automation platform with additional functionality.",
  ],

  ai: [
    "AI is not identified as a core component of this project in the resume; the primary focus is CRM architecture and marketing automation.",
  ],

  impact: [
    "CRM marketing workflows are managed through a dedicated application structure.",

    "The layered architecture provides a cleaner foundation for maintaining and expanding automation logic.",

    "Business automation becomes easier to organize as the number of workflows grows.",
  ],

  stack: [
    "Python",
    "Flask",
    "CRM",
    "Marketing Automation"
  ],

  accent: "#F97316",
},
  {
  slug: "crm-integrated-client-portal",

  title: "CRM-Integrated Client Portal",

  short: "Bi-directional WordPress portal synchronized with Pipedrive CRM",

  tag: "CRM · CMS · Integration",

  solution:
    "Connects a customer-facing WordPress portal directly with Pipedrive so information can move between the website experience and the CRM.",

  flagship: false,

  summary:
    "A CRM-integrated client portal built with WordPress and Elementor, connected to Pipedrive through a custom API wrapper. The project combines a customer-facing CMS experience with bi-directional CRM synchronization, allowing the portal and CRM to operate as connected parts of the same system.",

  stats: [
    { value: "2", label: "connected systems" },
    { value: "↔", label: "bi-directional sync" },
    { value: "1", label: "custom API wrapper" },
    { value: "CRM", label: "Pipedrive integration" },
  ],

  problem:
    "A website and a CRM can easily become two separate sources of truth. When users have to manually copy information between a client portal and the CRM, data becomes inconsistent and the customer experience becomes harder to manage.",

  built: [
    "A customer-facing client portal built with WordPress and Elementor.",

    "A custom API wrapper connecting the portal directly with Pipedrive.",

    "Bi-directional synchronization so information can move between the portal and CRM rather than flowing in only one direction.",

    "Integration logic designed to keep the CMS experience connected to the underlying CRM data.",

    "A solution that preserves the usability of a WordPress-based portal while adding deeper CRM functionality behind it.",
  ],

  architecture: [
    "WordPress and Elementor provide the client-facing portal layer.",

    "A custom API wrapper abstracts the communication between the portal and Pipedrive.",

    "Bi-directional synchronization keeps the two systems connected instead of creating a one-way export/import process.",

    "The integration layer separates CRM communication from the frontend experience, making the connection more maintainable.",
  ],

  ai: [
    "AI is not a core component of this project; the primary engineering focus is CRM integration and bi-directional data synchronization.",
  ],

  impact: [
    "The client portal and CRM operate as connected systems rather than isolated applications.",

    "Manual duplication of information between WordPress and Pipedrive is reduced.",

    "Customers interact with a dedicated portal while the business retains CRM visibility behind the experience.",
  ],

  stack: [
    "WordPress",
    "Elementor",
    "Pipedrive",
    "Custom API",
    "CRM Integration"
  ],

  accent: "#2563EB",
},
  {
  slug: "shopify-superfoods-wellness-store",

  title: "Shopify Store — Superfoods & Wellness Brand",

  short: "Conversion-focused Shopify storefront with a custom theme and layout",

  tag: "Shopify · eCommerce",

  solution:
    "Transforms a standard Shopify foundation into a tailored storefront built around the brand, customer experience, and conversion goals.",

  flagship: false,

  summary:
    "A custom Shopify storefront developed for a superfoods and wellness brand. The project focused on building a conversion-oriented shopping experience using a tailored theme and layout rather than relying on a generic storefront presentation.",

  stats: [
    { value: "1", label: "custom storefront" },
    { value: "Shopify", label: "eCommerce platform" },
    { value: "Custom", label: "theme and layout" },
    { value: "UX", label: "conversion focus" },
  ],

  problem:
    "A Shopify store can technically be ready for commerce while still failing to communicate the brand or guide customers effectively. Generic templates often leave important parts of the shopping experience disconnected from the product and brand positioning.",

  built: [
    "A custom Shopify storefront tailored to the visual identity and needs of the wellness brand.",

    "A customized theme and page layout rather than relying on a generic Shopify presentation.",

    "Conversion-focused page structure designed to make the shopping experience clearer and more effective.",

    "A responsive customer experience built around product presentation, navigation, and usability.",

    "A storefront foundation that keeps Shopify's commerce capabilities while providing a more differentiated frontend experience.",
  ],

  architecture: [
    "Shopify provides the underlying commerce platform, catalog, checkout, and store infrastructure.",

    "The custom theme controls the customer-facing presentation and user experience.",

    "Layout and UX decisions are organized around the buying journey rather than simply reproducing a standard theme.",
  ],

  ai: [
    "AI is not a core component of this project; the primary focus is Shopify development, UX, and conversion-oriented storefront design.",
  ],

  impact: [
    "The brand receives a storefront tailored to its specific market rather than a generic Shopify template.",

    "The customer journey is structured around clearer product presentation and conversion.",

    "The business retains Shopify's established commerce infrastructure while gaining a customized frontend.",
  ],

  stack: [
    "Shopify",
    "Custom Theme",
    "eCommerce",
    "UX",
    "Conversion Optimization"
  ],

  accent: "#16A34A",
},
  {
  slug: "hvac-lead-generation-website",

  title: "HVAC Lead Generation Website",

  short: "Trust-focused WordPress website built to generate service leads",

  tag: "WordPress · Lead Generation",

  solution:
    "Turns a service-business website into a clearer lead-generation experience focused on trust, usability, and customer action.",

  flagship: false,

  summary:
    "A WordPress website developed for an HVAC company with lead generation as the primary business objective. The experience was structured around building trust with prospective customers and making it easier for visitors to take the next step.",

  stats: [
    { value: "1", label: "service-business website" },
    { value: "WordPress", label: "CMS platform" },
    { value: "Lead", label: "generation focus" },
    { value: "UX", label: "trust-centered experience" },
  ],

  problem:
    "For a local service business, a website has to do more than display information. Visitors need enough clarity and confidence to understand the service, trust the company, and take action. Poor information structure or unclear calls to action can turn qualified traffic into missed opportunities.",

  built: [
    "A WordPress website designed specifically around lead generation.",

    "A trust-focused information structure intended to help prospective customers understand the business and its services.",

    "Customer-oriented page layouts designed to make the next action clear.",

    "A responsive web experience focused on usability across devices.",

    "A CMS foundation that allows the business to maintain its web content while keeping the user experience focused on conversion.",
  ],

  architecture: [
    "WordPress provides the CMS foundation for ongoing content management.",

    "The frontend structure is organized around service discovery, trust, and customer action.",

    "Content and page architecture support the lead-generation objective rather than treating the website as a simple digital brochure.",
  ],

  ai: [
    "AI is not a component of this project; the focus is website architecture, UX, and lead generation.",
  ],

  impact: [
    "The website is structured around generating qualified service inquiries.",

    "Prospective customers receive a clearer and more trust-oriented experience.",

    "The business gains a maintainable WordPress foundation designed around a measurable business goal rather than simply an online presence.",
  ],

  stack: [
    "WordPress",
    "CMS",
    "Web Design",
    "UX",
    "Lead Generation"
  ],

  accent: "#0EA5E9",
},
  {
  slug: "meta-ads-funnel-audit-fix",

  title: "Meta Ads & Funnel Audit + Fix",

  short: "Technical diagnosis and repair of a broken lead-generation funnel",

  tag: "Marketing · Troubleshooting",

  solution:
    "Diagnoses the technical failures behind a lead-generation drop and repairs the funnel instead of assuming the problem is simply the advertising traffic.",

  flagship: false,

  summary:
    "A technical audit and remediation project focused on a failing Meta advertising funnel. The work centered on identifying problems across the landing experience, lead capture, tracking, attribution, and automation so the actual source of the lead-generation failure could be addressed.",

  stats: [
    { value: "1", label: "lead-generation funnel" },
    { value: "Meta", label: "ads platform" },
    { value: "End-to-end", label: "funnel investigation" },
    { value: "Fix", label: "implementation + testing" },
  ],

  problem:
    "Advertising performance can appear to be the problem when the real failure happens after the click. Broken forms, incorrect destinations, tracking issues, attribution problems, or disconnected automation can turn otherwise useful traffic into a funnel that produces little or no usable lead data.",

  built: [
    "A technical audit of the complete lead-generation funnel rather than analyzing ad performance in isolation.",

    "Investigation of the relationship between Meta advertising, landing pages, lead capture, tracking, and downstream automation.",

    "Identification of technical failures affecting the lead-capture path.",

    "Repair of the underlying funnel components responsible for lost or incorrectly captured leads.",

    "Testing of the corrected workflow to verify that the customer journey and tracking behaved correctly after the fixes.",

    "A troubleshooting approach focused on separating traffic problems from technical implementation problems.",
  ],

  architecture: [
    "The funnel was treated as an end-to-end system spanning advertising, landing experience, lead capture, tracking, and automation.",

    "Each stage was reviewed as part of the same conversion path instead of diagnosing individual components independently.",

    "Fixes were implemented against the underlying system behavior rather than relying only on campaign-level changes.",
  ],

  ai: [
    "AI is not a core component of this project; the focus is technical diagnosis, funnel architecture, tracking, and marketing-system troubleshooting.",
  ],

  impact: [
    "The lead-generation problem was approached as a technical funnel issue rather than automatically attributing the decline to advertising performance.",

    "Broken or unreliable parts of the conversion path were identified and addressed.",

    "The resulting workflow was tested as an end-to-end system instead of stopping after making isolated changes.",
  ],

  stack: [
    "Meta Ads",
    "Tracking",
    "Lead Generation",
    "Funnels",
    "Automation",
    "Technical Troubleshooting"
  ],

  accent: "#EC4899",
},
];
