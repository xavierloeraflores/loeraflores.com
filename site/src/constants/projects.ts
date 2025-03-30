export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
};
export const projects: Project[] = [
  {
    title: "Project 1",
    description: "Description 1",
    image: "/images/projects/mappy.png",
    link: "https://example.com/project1",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
];
