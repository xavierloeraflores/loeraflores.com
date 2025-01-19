export enum ProjectLinkIcon {
	GitHub = 'github',
	Live = 'live',
	Other = 'other'
}

export type ProjectLink = {
	name: string;
	url: string;
	icon: ProjectLinkIcon;
};

export type Project = {
	title: string;
	description: string;
	links: ProjectLink[];
	technologies: string[];
};
