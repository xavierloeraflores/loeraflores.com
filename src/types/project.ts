enum ProjectLinkIcon {
	GitHub = 'github',
	Live = 'live',
	Other = 'other'
}

type ProjectLink = {
	name: string;
	url: string;
	icon: ProjectLinkIcon;
};

type Project = {
	title: string;
	description: string;
	links: ProjectLink[];
	technologies: string[];
};

export type { Project, ProjectLink, ProjectLinkIcon };
