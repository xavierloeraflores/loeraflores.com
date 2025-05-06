import type { Company } from "./companies";

const custodia: Company = {
  id: "custodia",
  name: "Custodia AI",
  logo: "/images/startups/custodia.png",
  location: "Remote",
  industry: "AI",
  website: "https://custodia.life",
  description:
    "Custodia AI is a platform that helps businesses manage their customer relationships.",
  role: "Software Engineer",
  period: "Jun 2024 - Sep 2024",
  responsibilities: [""],
  technologies: ["React", "Node.js", "PostgreSQL", "Express"],
  projects: [
    {
      name: "ScamScanner",
      description: "",
      impact:
        "Awarded Groq's ”Star Award” by leveraging Groq's chat based LLM to summarize & analyze call transcripts for key insights. Awarded Hume AI's ”Most Socially Impactful Empathic AI Integration” by leveraging Hume's Empathetic Voice Interface, Expression Measurement API, & Custom Models API to develop an empathetic AI system trained on voicemails to detect scam calls in real time.",
    },
    {
      name: "Custodia AI",
      description: "",
      impact: "",
    },
  ],
};

export const startups: Company[] = [custodia];

export const startupsMap = new Map<string, Company>(
  startups.map((startup) => [startup.id, startup]),
);
