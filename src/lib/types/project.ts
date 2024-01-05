enum ProjectLinkIcon {
	GitHub = 'github',
	Live = 'live',
	Other = 'other'
}

type ProjectLink = {
	name: string;
	url: string;
};

type Project = {
	title: string;
	description: string;
	links: ProjectLink[];
	technologies: string[];
};

export type { Project, ProjectLink, ProjectLinkIcon };
