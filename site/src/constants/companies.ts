export type Company = {
  id: string;
  name: string;
  logo: string;
  location: string;
  industry: string;
  website: string;
  description: string;
  role: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
  projects: { name: string; description: string; impact: string }[];
};

const begin: Company = {
  id: "begin",
  name: "Begin Software",
  logo: "/images/companies/begin.png",
  website: "https://www.beginsoftware.com/",
  location: "Chicago, IL",
  industry: "Software Development",
  description:
    "Your Guide to a Business on Autopilot: We help rapidly growing SMBs leverage technology to drive sustainable growth without high switching costs. Our workflow consulting, process automation, and low code development solutions are designed to save hundreds of hours every week.",
  role: "Automation Engineer",
  period: "May 2022 - December 2022",
  responsibilities: [],
  technologies: [
    "JavaScript",
    "Node.js",
    "Make",
    "Integromat",
    "HubSpot",
    "ActiveCampaign",
  ],
  projects: [],
};

const fullstack: Company = {
  id: "fullstack",
  name: "FullStack Academy",
  logo: "/images/companies/fullstack.png",
  website: "https://www.fullstackacademy.com",
  location: "Brooklyn, NY",
  industry: "Higher Education",
  description:
    "Fullstack Academy is one of the nation's longest-running and most reputable tech bootcamp providers. Founded in 2012, Fullstack Academy offers immersive, live online bootcamps in Coding, Cybersecurity, Data Analytics, AI & Machine Learning, and more. Fullstack Academy also offers the Grace Hopper Program, an immersive web development training program for women and non-binary students, in addition to partnerships with leading universities, organizations, and government agencies nationwide. We've helped over 10,000 graduates build fulfilling tech careers at companies like Google, Facebook, Amazon, Fortune 100 firms, and more. \n Fullstack Academy is headquartered in New York City but operates as a remote company with staff members located all around the nation. As a team, we work to consistently improve the student experience while trusting each other to do the right thing. United under the common cause of skilling and empowering the next generation of tech professionals, we aim to grow an innovative, respectful, and collaborative work environment to help our team thrive. ",
  role: "Fullstack Developer & Amazon Software Engineering Mentor II",
  period: "February 2023 - March 2025",
  responsibilities: [],
  technologies: [
    "Next.js",
    "TailwindCSS",
    "AWS",
    "Hugo",
    "React",
    "Node.js",
    "PostgreSQL",
    "Express",
  ],
  projects: [],
};

const codepath: Company = {
  id: "codepath",
  name: "CodePath",
  logo: "/images/companies/codepath.png",
  website: "https://www.codepath.org",
  location: "San Francisco, CA",
  industry: "Higher Education",
  description:
    "CodePath is reprogramming higher education to create the first AI-native generation of engineers, CTOs, and founders. \n We deliver industry-vetted courses and career support centered on the needs of first-generation and low-income students. Our students train with senior engineers, intern at top companies, and rise together to become the tech leaders of tomorrow. \n With 30,000 students and alumni from 700 colleges now working at 2,000 companies, we are reshaping the tech workforce and the industries of the future.",
  role: "Software Engineer Intern",
  period: "June 2021 - August 2021",
  responsibilities: [],
  technologies: ["React", "Node.js", "PostgreSQL", "Express"],
  projects: [],
};

const propslab: Company = {
  id: "propslab",
  name: "PropsLab",
  logo: "/images/companies/propslab.png",
  website: "https://www.propslab.io",
  location: "San Jose, CA",
  industry: "Software Development",
  description:
    "PropsLab is a community of sports and betting enthusiasts who use cutting-edge technology to predict outcomes and provide valuable insights into the world of sports betting.",
  role: "Software Engineer",
  period: "August 2024 - December 2024",
  responsibilities: [],
  technologies: ["Next.js", "Tailwind CSS", "Shadcn UI"],
  projects: [],
};

const mappy: Company = {
  id: "mappy",
  name: "MappyCoin",
  logo: "/images/companies/mappy.png",
  website: "https://mappycoin.vercel.app",
  location: "Remote",
  industry: "Blockchain",
  description:
    "(Now out of development) Named after the famous Namco game “Mappy”, Mappy Coin takes its roots from the arcade universe and transcends it into the Crypto world. With Hassle-free token distribution in your wallet, Mappy provides an all-new take on Yield Farming & Staking through its unique DEX platform.",
  role: "Software Developer & Community Manager",
  period: "August 2021 - March 2022",
  responsibilities: [
    "MappyCoin.com was a cryptocurrency project on the Binance Smart Chain Network where I contributed with development of the website and expanded my role to include community management duties and assisting in making business decisions.",
  ],
  technologies: ["React", "Sass", "Node.js"],
  projects: [],
};

export const companies: Company[] = [
  fullstack,
  propslab,
  begin,
  mappy,
  codepath,
];

export const companiesMap = new Map<string, Company>(
  companies.map((company) => [company.id, company]),
);
