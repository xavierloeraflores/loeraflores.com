export type ProjectLink = {
  name: string;
  url: string;
  icon: "github" | "link" | "site" | "docs" | "video";
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  links: ProjectLink[];
  tags: string[];
};

const momopromo: Project = {
  id: "momopromo",
  title: "MomoPromo",
  description:
    "Influencer marketing marketplace for small brands and creators.",
  image: "/images/projects/momo.png",
  links: [
    {
      name: "Live",
      url: "https://www.momopromo.net",
      icon: "site",
    },
  ],
  tags: ["Next.js", "MongoDB", "Tailwind CSS"],
};

const mappy: Project = {
  id: "mappy",
  title: "MappyCoin",
  description:
    "Contracted project for a promotional marketing landing site for a cryptocurrency project built in React.",
  image: "/images/projects/mappy.png",
  links: [],
  tags: ["React"],
};

const custodia: Project = {
  id: "custodia",
  title: "Custodia AI",
  description:
    "End to end multimodal AI voice assistant that can make outgoing calls to customer service centers on your behalf.",
  image: "/images/projects/custodia.png",
  links: [
    {
      name: "GitHub",
      url: "https://github.com/ScamScanners",
      icon: "github",
    },
    {
      name: "Live",
      url: "https://www.custodia.life",
      icon: "site",
    },
    {
      name: "Pitch",
      url: "https://x.com/AlexReibman/status/1815535595961426244",
      icon: "site",
    },
    {
      name: "Demo",
      url: "https://www.youtube.com/clip/Ugkx6VVcSpIwEmEWlCcyHHfajpCorLnd7QPm",
      icon: "site",
    },
  ],
  tags: ["Next.js", "FastAPI"],
};

const scam_scammer: Project = {
  id: "scam-scammer",
  title: "Scam Scammer",
  description: "Description 3",
  image: "/images/projects/scam.png",
  links: [
    {
      name: "GitHub",
      url: "https://github.com/ScamScanners",
      icon: "github",
    },
    {
      name: "Live",
      url: "https://scam-scanner.vercel.app/",
      icon: "site",
    },
    {
      name: "Video",
      url: "https://www.youtube.com/watch?v=NEVwVvFSi5c",
      icon: "video",
    },
    {
      name: "DevPost",
      url: "https://devpost.com/software/scamscammer",
      icon: "docs",
    },
  ],
  tags: ["Next.js", "Django"],
};

const content_moderation: Project = {
  id: "content",
  title: "ML Content Moderation System",
  description:
    "End to end machine learning application implemented to detect offensive content in social media posts using Natural Language Processing.",
  image: "/images/projects/moderation.png",
  links: [
    {
      name: "GitHub",
      url: "https://github.com/xavierloeraflores/wgu-capstone",
      icon: "github",
    },
    {
      name: "Live",
      url: "https://wgu-capstone-xavier-loera-flores.vercel.app",
      icon: "site",
    },
    {
      name: "API Docs",
      url: "https://wgu-capstone-docs.vercel.app/",
      icon: "docs",
    },
  ],
  tags: ["Next.js", "FastAPI", "Scikit-learn"],
};

const notes: Project = {
  id: "notes",
  title: "Notes: Static Markdown Blog",
  description:
    "A static site built with Hugo and Markdown used for hosting my personal notes/journal entries featuring rich markdown and MathJax rendering.",
  image: "/images/projects/notes.png",
  links: [
    {
      name: "GitHub",
      url: "https://github.com/xavierloeraflores/notes",
      icon: "github",
    },
    {
      name: "Entries",
      url: "https://github.com/xavierloeraflores/markdown-entries",
      icon: "github",
    },
    {
      name: "Live",
      url: "xavierloeraflores.github.io/notes/",
      icon: "site",
    },
  ],
  tags: ["Hugo", "Markdown"],
};

const kurios: Project = {
  id: "kurios",
  title: "Kurios",
  description: "Description 6",
  image: "/images/projects/kurios.png",
  links: [
    {
      name: "Frontend",
      url: "https://github.com/SITE-Capstone/capstone_fe",
      icon: "github",
    },
    {
      name: "Backend",
      url: "https://github.com/SITE-Capstone/capstone_be",
      icon: "github",
    },
    {
      name: "Video",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:6833150855160721408",
      icon: "video",
    },
  ],
  tags: ["React", "Node", "PostgreSQL", "Express"],
};

const github_url_converter: Project = {
  id: "github-url-converter",
  title: "Github URL Converter",
  description: "Description 7",
  image: "/images/projects/github.png",
  links: [
    {
      name: "GitHub",
      url: "https://github.com/xavierloeraflores/github-url-converter",
      icon: "github",
    },
    {
      name: "Live",
      url: "https://github-url-converter.vercel.app/",
      icon: "site",
    },
  ],
  tags: ["React", "Next.js", "Tailwind CSS"],
};

export const projects: Project[] = [
  momopromo,
  custodia,
  scam_scammer,
  content_moderation,
  notes,
  kurios,
  mappy,
  github_url_converter,
];

export const projectsMap = new Map<string, Project>(
  projects.map((project) => [project.id, project]),
);
