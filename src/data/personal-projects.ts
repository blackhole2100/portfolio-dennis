export type PersonalProject = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  live?: string;
  accent: string;
};

export const personalProjects: PersonalProject[] = [
  {
  title: "AI Ticket Management System",

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
  live: "https://ticket-system-nextjs-kappa.vercel.app",
  accent: "#7C3AED",
},

{
  title: "MCP Secure AI Database Platform",

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
  accent: "#0E7490",
},

{
  title: "AI Interview Scheduler",

  description:
    "Multi-agent scheduling system using LangGraph stateful workflows, LLM intent classification, tool-based execution, and real-time agent observability.",

  stack: [
    "FastAPI",
    "LangGraph",
    "Groq",
    "SQLAlchemy"
  ],

  github: "",
  live: "https://ai-interview-chatbot-gilt.vercel.app",
  accent: "#6366F1",
},
];
