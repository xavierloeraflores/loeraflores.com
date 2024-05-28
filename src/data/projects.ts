import { type Project } from '../types';
import { ProjectLinkIcon } from '../types/project';

const Notes: Project = {
	title: 'Notes',
	description:
		'A static site built with Hugo and Markdown used for hosting my personal notes/journal entries.',
	links: [
		{
			name: 'GitHub',
			url: '',
			icon: ProjectLinkIcon.GitHub
		},
		{
			name: 'Live',
			url: '',
			icon: ProjectLinkIcon.Live
		}
	],
	technologies: ['Hugo', 'Markdown']
};
const MappyCoin: Project = {
	title: 'MappyCoin',
	description:
		'Contracted project for a promotional marketing site for cryptocurrency project built in React.',
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
	title: 'Kurios',
	description:
		'Fullstack dashboard for crypto-currency trading featuring a real-time transaction system.',
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
	technologies: ['React', 'Node', 'Express', 'PostgreSQL', 'Heroku']
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
const RacismDetector: Project = {
	title: 'ML Content Moderation System',
	description:
		'End to end machine learning application implemented to detect offensive content in social media posts using Natural Language Processing.',
	links: [
		{
			name: 'GitHub',
			url: 'https://github.com/xavierloeraflores/wgu-capstone',
			icon: ProjectLinkIcon.GitHub
		}
	],
	technologies: ['Next.js', 'TypeScript', 'FastAPI', 'SciKit Learn', 'Python', 'Vercel', 'Railway']
};

export const projectsData: Project[] = [
	RacismDetector,
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
