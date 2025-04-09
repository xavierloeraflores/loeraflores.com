import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "./ui/badge";
import { projects, type Project } from "~/constants/projects";
import Link from "next/link";
import { Separator } from "./ui/separator";

export default function Projects() {
  return (
    <section className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { readonly project: Project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <Card className="flex w-96 flex-col gap-2 overflow-hidden pt-0 hover:shadow-md">
        <CardHeader className="gap-0 p-0">
          <div className="relative h-48 w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <Separator />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-xl">{project.title}</CardTitle>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
