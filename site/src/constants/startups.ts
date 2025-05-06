import type { Company } from "./companies";

const custodia: Company = {
  id: "custodia",
  name: "Custodia AI",
  logo: "/images/startups/custodia.png",
  location: "Remote",
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

export const startups: Company[] = [custodia];

export const startupsMap = new Map<string, Company>(
  startups.map((startup) => [startup.id, startup]),
);
