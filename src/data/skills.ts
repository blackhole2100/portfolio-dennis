export type SkillGroup = {
  key: string;
  title: string;
  blurb: string;
  items: string[];
  /** bento sizing hint */
  size: "lg" | "md" | "sm";
};

export const skillGroups: SkillGroup[] = [
  {
    key: "ai",
    title: "AI Engineering",
    blurb:
      "AI applications, agents, and automation built around real business workflows.",
    items: [
      "AI Agent Development",
      "AI App Development",
      "RAG",
      "LangGraph",
      "LangChain",
      "MCP",
      "Multi-Agent Workflows",
      "Prompt Engineering",
      "Claude API",
      "OpenAI",
      "Groq",
      "Gemini",
      "Pinecone",
      "Whisper",
      "YOLOv8 / OpenCV",
      "Machine Learning",
      "XGBoost",
      "LightGBM",
    ],
    size: "md",
  },

  {
    key: "frontend",
    title: "Frontend",
    blurb:
      "Fast, responsive interfaces built around usability, product flow, and real business needs.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Vue",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "GSAP",
      "Responsive UI",
      "UX / UI Implementation",
      "React Native / Expo",
    ],
    size: "sm",
  },

  {
    key: "backend",
    title: "Backend",
    blurb:
      "APIs, business logic, integrations, authentication, and application architecture.",
    items: [
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "Flask",
      "REST APIs",
      "API Development",
      "WebSockets",
      "JWT",
      "Zod",
      "Pydantic",
      "Server-side Architecture",
    ],
    size: "sm",
  },

  {
    key: "data",
    title: "Data & Storage",
    blurb:
      "Reliable data foundations for applications, CRM systems, analytics, and AI workflows.",
    items: [
      "PostgreSQL",
      "Supabase",
      "MongoDB",
      "SQLAlchemy",
      "SQLite",
      "Pinecone",
      "Prisma",
      "RLS Policies",
      "Database Design",
      "Data Modeling",
      "SQL",
    ],
    size: "sm",
  },

  {
    key: "crm",
    title: "CRM & Business Systems",
    blurb:
      "CRM and business platforms connected to the applications and workflows around them.",
    items: [
      "CRM Development",
      "CRM Integration",
      "HubSpot",
      "Pipedrive",
      "Zoho",
      "WordPress",
      "WooCommerce",
      "Shopify",
      "CMS Architecture",
      "Client Portals",
      "Custom Business Systems",
    ],
    size: "md",
  },

  {
    key: "automation",
    title: "Automation & Integrations",
    blurb:
      "Connect systems, remove repetitive work, and turn manual processes into workflows.",
    items: [
      "n8n",
      "Zapier",
      "Make",
      "Workflow Automation",
      "API Integrations",
      "Twilio",
      "Stripe",
      "Shippo",
      "Brevo",
      "WhatsApp API",
      "Self-hosted WhatsApp Gateway",
      "Edge Functions",
    ],
    size: "sm",
  },

  {
    key: "cms",
    title: "CMS & eCommerce",
    blurb:
      "Content and commerce platforms engineered for usability, performance, and growth.",
    items: [
      "WordPress",
      "Shopify",
      "WooCommerce",
      "HubSpot CMS",
      "Webflow",
      "Squarespace",
      "Wix",
      "Elementor",
      "Custom Themes",
      "Custom CMS Development",
      "eCommerce Development",
    ],
    size: "sm",
  },

  {
    key: "infra",
    title: "Infrastructure & Delivery",
    blurb:
      "Deploy, integrate, and maintain applications without making the stack harder than it needs to be.",
    items: [
      "AWS",
      "Vercel",
      "Railway",
      "Docker",
      "GitHub",
      "Edge Functions",
      "CI/CD",
      "Environment Management",
      "Production Deployment",
    ],
    size: "sm",
  },

  {
    key: "growth",
    title: "Marketing & Growth",
    blurb:
      "Technical implementation across search, analytics, advertising, and conversion workflows.",
    items: [
      "SEO",
      "Technical SEO",
      "Local SEO",
      "GEO / AI Search Optimization",
      "Meta Ads",
      "Facebook Advertising",
      "Marketing Analytics",
      "Lead Generation",
      "Funnel Optimization",
      "Conversion Optimization",
      "Web Design",
    ],
    size: "sm",
  },
  {
    key: "languages",
    title: "Languages",
    blurb:
      "The languages I use to build applications, automation, integrations, and data systems.",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "PHP",
      "Java",
      "SQL",
    ],
    size: "sm",
  },

];

export const marqueeSkills = [
  "AI Agents",
  "Python",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "FastAPI",
  "Flask",
  "RAG",
  "MCP",
  "Claude",
  "OpenAI",
  "Groq",
  "PostgreSQL",
  "Supabase",
  "MongoDB",
  "Prisma",
  "Pinecone",
  "WordPress",
  "Shopify",
  "WooCommerce",
  "HubSpot",
  "Pipedrive",
  "Zoho",
  "n8n",
  "Zapier",
  "Make",
  "Twilio",
  "Stripe",
  "Shippo",
  "Brevo",
  "AWS",
  "Vercel",
  "Docker",
  "WebSockets",
  "React Native",
  "Expo",
  "SEO",
  "GEO",
  "Meta Ads",
];