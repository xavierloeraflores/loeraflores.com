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

const propslab: Project = {
  id: "propslab",
  title: "PropsLab",
  description:
    "A contracted promotional landing site for a sports betting company built in Next.js.",
  image: "/images/projects/propslab.png",
  links: [
    {
      name: "Live",
      url: "https://www.propslab.io",
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
  links: [
    {
      name: "Live (Backup)",
      url: "https://mappy.loeraflores.com",
      icon: "site",
    },
  ],
  tags: ["React", "Sass"],
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
    "End to end machine learning application implemented to detect offensive content in social media posts using Natural Language Processing. This is the final capstone project for my Bachelor's of Science in Computer Science.",
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
      url: "https://notes.loeraflores.com",
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
  description:
    "A simple tool built to convert Github.io URLS to their repo URLs. Developed when I was mentoring engineering students and would need to grade their submission assignments.",
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

const vercel_redirect: Project = {
  id: "vercel-redirect",
  title: "Vercel Redirect Template",
  description:
    "A minimal Vercel template for one-click domain redirects that forwards traffic to another site with optional path preservation.",
  image: "/images/projects/vercel-redirect.svg",
  links: [
    {
      name: "GitHub",
      url: "https://github.com/xavierloeraflores/vercel-redirect",
      icon: "github",
    },
    {
      name: "Demo",
      url: "https://vercel-domain-redirect-demo.vercel.app",
      icon: "site",
    },
    {
      name: "Deploy",
      url: "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fxavierloeraflores%2Fvercel-redirect",
      icon: "link",
    },
  ],
  tags: ["Vercel", "vercel.json", "Redirects"],
};

const infinitytool: Project = {
  id: "infinitytool",
  title: "InfinityTool",
  description:
    "A growing library of focused tools with searchable discovery and dedicated tool pages built for fast repeat use.",
  image: "/images/projects/infinitytool.svg",
  links: [
    {
      name: "Live",
      url: "https://www.infinitytool.app/",
      icon: "site",
    },
    {
      name: "Tools",
      url: "https://www.infinitytool.app/tools",
      icon: "link",
    },
  ],
  tags: ["Next.js", "Vercel", "Utilities"],
};

const studytype: Project = {
  id: "studytype",
  title: "StudyType",
  description:
    "A study tool that helps users retain subject knowledge by repeatedly taking typing tests, combining repetition-based practice with faster typing and AI-generated study sets for premium users.",
  image: "/images/projects/studytype.svg",
  links: [
    {
      name: "Live",
      url: "https://www.studytype.app",
      icon: "site",
    },
  ],
  tags: ["Next.js", "Convex", "Clerk"],
};

// New projects are added at the top of this list.
export const projects: Project[] = [
  studytype,
  infinitytool,
  vercel_redirect,
  github_url_converter,
  mappy,
  propslab,
  kurios,
  notes,
  content_moderation,
  scam_scammer,
  custodia,
  momopromo,
];

export const projectsMap = new Map<string, Project>(
  projects.map((project) => [project.id, project]),
);
