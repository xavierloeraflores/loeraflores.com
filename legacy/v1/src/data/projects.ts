import { type Project } from '../types';
import { ProjectLinkIcon } from '../types/project';

const Notes: Project = {
	title: 'Notes: Static Markdown Blog',
	description:
		'A static site built with Hugo and Markdown used for hosting my personal notes/journal entries featuring rich markdown and MathJax rendering.',
	links: [
		{
			name: 'GitHub',
			url: 'https://github.com/xavierloeraflores/notes',
			icon: ProjectLinkIcon.GitHub
		},
		{
			name: 'Entries',
			url: 'https://github.com/xavierloeraflores/markdown-entries',
			icon: ProjectLinkIcon.GitHub
		},
		{
			name: 'Live',
			url: 'xavierloeraflores.github.io/notes/',
			icon: ProjectLinkIcon.Live
		}
	],
	technologies: ['Hugo', 'Markdown', 'MathJax', 'JavaScript', 'HTML', 'CSS', 'GitHub Pages']
};
const MappyCoin: Project = {
	title: 'MappyCoin: Promotional Landing Page',
	description:
		'Contracted project for a promotional marketing landing site for a cryptocurrency project built in React.',
	links: [
		{
			name: 'Live',
			url: 'https://mappycoin.com/',
			icon: ProjectLinkIcon.Live
		}
	],
	technologies: ['React', 'Sass']
};
const Kurios: Project = {
	title: 'Kurios: Crypto Paper Trading Dashboard',
	description:
		'Fullstack dashboard for crypto-currency paper trading featuring a real-time price data and transaction/wallet system.',
	links: [
		{
			name: 'Frontend',
			url: 'https://github.com/SITE-Capstone/capstone_fe',
			icon: ProjectLinkIcon.GitHub
		},
		{
			name: 'Backend',
			url: 'https://github.com/SITE-Capstone/capstone_be',
			icon: ProjectLinkIcon.GitHub
		},
		{
			name: 'Video',
			url: 'https://www.linkedin.com/feed/update/urn:li:activity:6833150855160721408',
			icon: ProjectLinkIcon.Live
		}
	],
	technologies: ['React', 'Node', 'Express', 'PostgreSQL', 'Cron', 'Heroku']
};
const Snake: Project = {
	title: 'Snake',
	description: 'Classic Snake Game with vanilla JS',
	links: [
		{
			name: 'GitHub',
			url: 'https://github.com/xavierloeraflores/Arcade',
			icon: ProjectLinkIcon.GitHub
		},
		{
			name: 'Live',
			url: 'https://xavierloeraflores.github.io/Arcade/',
			icon: ProjectLinkIcon.Live
		}
	],
	technologies: ['HTML', 'CSS', 'JavaScript']
};
const GitHubio: Project = {
	title: 'GitHub.io URL Converter',
	description:
		'A simple web app for quickly retrieving the GitHub repo URL from a GitHub.io URL built with Next.js.',
	links: [
		{
			name: 'GitHub',
			url: 'https://github.com/xavierloeraflores/github-url-converter',
			icon: ProjectLinkIcon.GitHub
		},
		{
			name: 'Live',
			url: 'https://github-url-converter.vercel.app/',
			icon: ProjectLinkIcon.Live
		}
	],
	technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel']
};
const SchedulingManager: Project = {
	title: 'Java Scheduling Manager GUI',
	description: 'A Java GUI for managing appointments',
	links: [
		{
			name: 'GitHub',
			url: 'https://github.com/xavierloeraflores/Scheduling-Manager-GUI',
			icon: ProjectLinkIcon.GitHub
		},
		{
			name: 'Docs',
			url: 'https://xavierloeraflores.github.io/Scheduling-Manager-GUI/',
			icon: ProjectLinkIcon.Live
		}
	],
	technologies: ['Java', 'JavaFX', 'MySQL', 'Time/Language Localization', 'Java Doc']
};
const InventoryManager: Project = {
	title: 'Java Inventory Manager GUI',
	description: 'A Java GUI for managing Inventory',
	links: [
		{
			name: 'GitHub',
			url: 'https://github.com/xavierloeraflores/Inventory-Management-GUI',
			icon: ProjectLinkIcon.GitHub
		},
		{
			name: 'Docs',
			url: 'https://xavierloeraflores.github.io/Inventory-Management-GUI/',
			icon: ProjectLinkIcon.Live
		}
	],
	technologies: ['Java', 'JavaFX', 'Java Doc']
};
const PandoraBot: Project = {
	title: 'Careers Chatbot',
	description: 'A simple chatbot for computer science careers',
	links: [
		{
			name: 'GitHub',
			url: 'https://github.com/xavierloeraflores/Pandorabot-Chatbot',
			icon: ProjectLinkIcon.GitHub
		}
	],
	technologies: ['AIML', 'PandoraBots']
};
const IOSTips: Project = {
	title: 'IOS Tipping App',
	description: 'A simple tipping app for IOS',
	links: [
		{
			name: 'GitHub',
			url: 'https://github.com/xavierloeraflores/tipIOSApp',
			icon: ProjectLinkIcon.GitHub
		}
	],
	technologies: ['IOS', 'Swift', 'Swift UI', 'XCode']
};
const Flixster: Project = {
	title: 'Flixster Web App',
	description: 'A website for viewing trailers and movie information',
	links: [
		{
			name: 'GitHub',
			url: 'https://github.com/xavierloeraflores/Flixster-Web-App',
			icon: ProjectLinkIcon.GitHub
		},
		{
			name: 'Live',
			url: 'https://xavierloeraflores.github.io/Flixster-Web-App/',
			icon: ProjectLinkIcon.Live
		}
	],
	technologies: ['HTML', 'CSS', 'JavaScript']
};
const Synema: Project = {
	title: 'Synema (In Progress)',
	description: 'A website for viewing trailers and movie information',
	links: [
		{
			name: 'GitHub',
			url: 'https://github.com/xavierloeraflores/synema',
			icon: ProjectLinkIcon.GitHub
		},
		{
			name: 'Live',
			url: 'https://synema.vercel.app/',
			icon: ProjectLinkIcon.Live
		}
	],
	technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel']
};
const Xavierslist: Project = {
	title: "Xavier's List (In Progress)",
	description: "Craig's List clone",
	links: [
		{
			name: 'GitHub',
			url: 'https://github.com/xavierloeraflores/xavierslist',
			icon: ProjectLinkIcon.GitHub
		},
		{
			name: 'Live',
			url: 'https://xavierslist.vercel.app',
			icon: ProjectLinkIcon.Live
		}
	],
	technologies: ['Go', 'Fiber', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel']
};
const LoeraFloresDB: Project = {
	title: 'LoeraFloresDB',
	description:
		'Drizzle project to manage multiple database projects in one planetScale mySQL database.',
	links: [
		{
			name: 'GitHub',
			url: 'https://github.com/xavierloeraflores/loeraflores.db',
			icon: ProjectLinkIcon.GitHub
		}
	],
	technologies: ['Drizzle', 'TypeScript', 'Node', 'mySQL', 'planetScale']
};
const CapybaraAuth: Project = {
	title: 'Capybara-Auth',
	description:
		'Auth service using JWT and bcrypt to authenticate/authorize users for multiple projects.',
	links: [
		{
			name: 'GitHub',
			url: 'https://github.com/xavierloeraflores/capybara-auth',
			icon: ProjectLinkIcon.GitHub
		}
	],
	technologies: ['Node', 'Express', 'TypeScript', 'mySQL', 'planetScale', 'Railway']
};
const MLContentModeration: Project = {
	title: 'ML Content Moderation System',
	description:
		'End to end machine learning application implemented to detect offensive content in social media posts using Natural Language Processing.',
	links: [
		{
			name: 'GitHub',
			url: 'https://github.com/xavierloeraflores/wgu-capstone',
			icon: ProjectLinkIcon.GitHub
		},
		{
			name: 'Live',
			url: 'https://wgu-capstone-xavier-loera-flores.vercel.app',
			icon: ProjectLinkIcon.GitHub
		},
		{
			name: 'API Docs',
			url: 'https://wgu-capstone-docs.vercel.app/',
			icon: ProjectLinkIcon.Live
		}
	],
	technologies: [
		'Next.js',
		'TypeScript',
		'FastAPI',
		'SciKit Learn',
		'Logistic Regression',
		'Python',
		'Vercel',
		'Railway'
	]
};
const ScamScammers: Project = {
	title: 'ScamScanner: Scam Call Detector',
	description:
		'End to end multimodal AI application powered by Hume AI & Groq that detects phone frauds & scams using custom emotionally intelligent LLMs.',
	links: [
		{
			name: 'GitHub',
			url: 'https://github.com/ScamScanners',
			icon: ProjectLinkIcon.GitHub
		},
		{
			name: 'Live',
			url: 'https://scam-scanner.vercel.app/',
			icon: ProjectLinkIcon.Live
		},
		{
			name: 'Video',
			url: 'https://www.youtube.com/watch?v=NEVwVvFSi5c',
			icon: ProjectLinkIcon.Live
		},
		{
			name: 'DevPost',
			url: 'https://devpost.com/software/scamscammer',
			icon: ProjectLinkIcon.Live
		}
	],
	technologies: [
		'Next.js',
		'TypeScript',
		'Flask',
		'Python',
		'LLMs',
		'Hume AI',
		'Groq',
		'TailwindCSS',
		'Jupyter Notebook',
		'Vercel',
		'Railway'
	]
};

const CustodiaAI: Project = {
	title: 'Custodia AI: Your personal AI voice assistant',
	description:
		'End to end multimodal AI voice assistant that can make outgoing calls to customer service centers on your behalf.',
	links: [
		{
			name: 'GitHub',
			url: 'https://github.com/ScamScanners',
			icon: ProjectLinkIcon.GitHub
		},
		{
			name: 'Live',
			url: 'https://www.custodia.life',
			icon: ProjectLinkIcon.Live
		},
		{
			name: 'Pitch',
			url: 'https://x.com/AlexReibman/status/1815535595961426244',
			icon: ProjectLinkIcon.Live
		},
		{
			name: 'Demo',
			url: 'https://www.youtube.com/clip/Ugkx6VVcSpIwEmEWlCcyHHfajpCorLnd7QPm',
			icon: ProjectLinkIcon.Live
		}
	],
	technologies: [
		'Next.js',
		'TypeScript',
		'Flask',
		'Python',
		'LLMs',
		'Hume AI',
		'Groq',
		'Llama 3',
		'TailwindCSS',
		'Vercel',
		'Railway'
	]
};

export const allProjectsData: Project[] = [
	CustodiaAI,
	ScamScammers,
	MLContentModeration,
	LoeraFloresDB,
	CapybaraAuth,
	Notes,
	Kurios,
	MappyCoin,
	GitHubio,
	Xavierslist,
	Synema,
	IOSTips,
	PandoraBot,
	Snake,
	SchedulingManager,
	InventoryManager,
	Flixster
];
export const projectsData: Project[] = [
	CustodiaAI,
	ScamScammers,
	MLContentModeration,
	Notes,
	Kurios,
	// MappyCoin,
	GitHubio
];
