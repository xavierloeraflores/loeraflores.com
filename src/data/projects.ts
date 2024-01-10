import { type Project } from '../types';
import { ProjectLinkIcon } from '../types/project';

const Notes: Project = {
	title: 'Notes',
	description: 'A simple note taking app built with Hugo and Markdown',
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
	description: 'Contracted Promotional Site for Cryptocurrency Project',
	links: [
		{
			name: 'Live',
			url: 'https://mappycoin.com/',
			icon: ProjectLinkIcon.Live
		}
	],
	technologies: ['Hugo', 'Markdown']
};
const Kurios: Project = {
	title: 'Kurios',
	description: 'Crypto Currency Simulation Trading Dashboard',
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

export const projectsData: Project[] = [Notes, MappyCoin, Kurios];
