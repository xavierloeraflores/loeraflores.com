import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "./ui/badge";
import { projects, type Project } from "~/constants/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { readonly project: Project }) {
  return (
    <Link href={`/projects/${project.id}`} target="_blank">
      <Card className="flex w-96 flex-col gap-2 overflow-hidden pt-0">
        <div className="relative h-48 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-lg">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
