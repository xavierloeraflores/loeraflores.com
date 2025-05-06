import type { Company } from "./companies";

const custodia: Company = {
  id: "custodia",
  name: "Custodia AI",
  logo: "/images/startups/custodia.png",
  location: "San Francisco Bay Area",
  industry: "AI",
  website: "https://custodia.life",
  description:
    "Custodia AI and ScamScanner are two AI voice-based applications that leverage LLM models to detect scams and automate customer service tasks. The company was co-founded by Sophie Chance, Shubham Shinde, and I initially building the ScamScanner application and later pivoting to building the Custodia AI application.",
  role: "Co-Founder & CTO",
  period: "Jun 2024 - Sep 2024",
  responsibilities: [
    "Spearheaded the development of AI voice-based applications using LLMs to detect scams and automate customer service.",
    "Led backend architecture using FastAPI and PostgreSQL to support scalable AI features.",
    "Deployed and managed cloud infrastructure to support LLM-powered voice processing.",
    "Collaborated with co-founders to define product vision, pivot strategy, and technical roadmap.",
  ],
  technologies: ["Next.js", "Python FastAPI", "PostgreSQL", "LLM models"],
  projects: [
    {
      name: "ScamScanner",
      description:
        "Developed an empathetic AI system trained on voicemails to detect scam calls in real time.",
      impact:
        "Awarded Groq's ”Star Award” by leveraging Groq's chat based LLM to summarize & analyze call transcripts for key insights. Awarded Hume AI's ”Most Socially Impactful Empathic AI Integration” by leveraging Hume's Empathetic Voice Interface, Expression Measurement API, & Custom Models API to develop an empathetic AI system trained on voicemails to detect scam calls in real time.",
    },
    {
      name: "Custodia AI",
      description:
        "Developed a multi-agent system to automate customer service tasks.",
      impact:
        "Awarded 1st place overall at the AgentOps and MultiOn's AI Agents 2.0 hackathon. Was selected as one of only 10 startups to present a Llama Lounge 11 and featured on the Founder Alchemy Podcast.",
    },
  ],
};

const momopromo: Company = {
  id: "momopromo",
  name: "MomoPromo",
  logo: "/images/startups/momopromo.png",
  location: "San Jose, CA",
  industry: "Marketing | Creator Economy",
  website: "https://momopromo.net",
  description:
    "MomoPromo is a two-sided influencer marketing marketplace where creators list advertising opportunities on their social media profiles and businesses can directly purchase ad placements. The platform streamlines collaboration between small creators and brands, with a focus on transparency, monetization, and ease of use.",
  role: "Solo Founder",
  period: "Sep 2024 - Present",
  responsibilities: [
    "Designed and built a two-sided marketplace connecting social media influencers with brands.",
    "Implemented listing management, messaging, and transaction flows using full-stack web technologies.",
    "Conducted user research with creators and small businesses to inform product development.",
    "Developed an automated content creation system to generate promotional content.",
  ],
  technologies: ["Next.js", "TypeScript", "MongoDB", "Clerk Auth", "Stripe"],
  projects: [
    {
      name: "Marketplace MVP",
      description:
        "Launched a minimal viable product allowing influencers to list ad space and businesses to discover, message, and purchase placements directly.",
      impact:
        "Selected as one of Beta University's Batch 7 startups to join their startup accelerator program.",
    },
  ],
};

export const startups: Company[] = [momopromo, custodia];

export const startupsMap = new Map<string, Company>(
  startups.map((startup) => [startup.id, startup]),
);
