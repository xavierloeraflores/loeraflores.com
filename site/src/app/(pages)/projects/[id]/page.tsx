import Image from "next/image";
import { projectsMap } from "~/constants/projects";
import ProjectLink from "~/components/project-link";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import Link from "next/link";
export default async function ProjectPage({
  params,
}: {
  readonly params: Promise<{ id: string }>;
}) {
  const projectId = (await params).id;
  const project = projectsMap.get(projectId);
  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link
          href="/"
          className="text-accent-foreground text-sm hover:underline"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-4">
      {/* Back Button */}
      <Link href="/" className="text-accent-foreground text-sm hover:underline">
        Back Home
      </Link>
      <div className="relative mt-8 aspect-video max-h-96 min-h-32 max-w-full grow overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          className="object-cover"
          fill
        />
      </div>
      <Card className="w-full max-w-2xl p-4">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
          <div className="flex flex-row gap-4">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p>{project.description}</p>
          <div className="flex flex-col gap-4">
            {project.links.map((link) => (
              <ProjectLink key={link.name} link={link} />
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
