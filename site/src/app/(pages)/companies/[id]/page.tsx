import Link from "next/link";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export default async function ProjectPage({
  params,
}: {
  readonly params: Promise<{ id: string }>;
}) {
  const companyId = (await params).id;
  const company = {};
  if (!company) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Company not found</h1>
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
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground mb-4 flex items-center"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back Home
      </Link>
      <div className="relative mt-8 aspect-video max-h-96 min-h-32 max-w-full grow overflow-hidden rounded-lg">
        Company Page: {companyId}
      </div>
    </main>
  );
}

function CompanyHeader({
  logo,
  name,
  location,
  industry,
  website,
}: {
  logo: string;
  name: string;
  location: string;
  industry: string;
  website: string;
}) {
  return (
    <div className="mb-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="flex-shrink-0">
          <Image
            src={logo || "/placeholder.svg"}
            alt={`${name} logo`}
            width={80}
            height={80}
            className="rounded-md border"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{name}</h1>
          <div className="text-muted-foreground mt-2 flex flex-wrap items-center gap-3">
            <span className="flex items-center">
              <MapPin className="mr-1 h-4 w-4" />
              {location}
            </span>
            <span className="hidden md:inline">•</span>
            <span>{industry}</span>
            <span className="hidden md:inline">•</span>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Visit website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanyAbout({ description }: { description: string }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold">About the Company</h2>
      <p className="text-muted-foreground">{description}</p>
    </section>
  );
}

function CompanyRole({
  role,
  period,
  responsibilities,
  technologies,
}: {
  role: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold">My Role</h2>
      <Card>
        <CardContent className="pt-6">
          <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h3 className="text-xl font-medium">{role}</h3>
            <div className="text-muted-foreground flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{period}</span>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="mb-2 font-medium">Responsibilities</h4>
              <ul className="text-muted-foreground list-disc space-y-1 pl-5">
                {responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-medium">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

function CompanyProjects({
  projects,
}: {
  projects: { name: string; description: string; impact: string }[];
}) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold">Key Projects</h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <h3 className="mb-2 text-xl font-medium">{project.name}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div>
                <h4 className="font-medium">Impact:</h4>
                <p className="text-muted-foreground">{project.impact}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

type Company = {
  name: string;
  logo: string;
  location: string;
  industry: string;
  website: string;
  description: string;
  role: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
  projects: { name: string; description: string; impact: string }[];
};

function CompanyPage({ company }: { company: Company }) {
  return (
    <div className="container max-w-4xl py-10">
      <CompanyHeader
        logo={company.logo}
        name={company.name}
        location={company.location}
        industry={company.industry}
        website={company.website}
      />

      <Separator className="my-6" />

      <div className="space-y-10">
        <CompanyAbout description={company.description} />

        <CompanyRole
          role={company.role}
          period={company.period}
          responsibilities={company.responsibilities}
          technologies={company.technologies}
        />

        <CompanyProjects projects={company.projects} />

        <div className="flex justify-center pt-4">
          <Button asChild>
            <Link href="/contact">Contact me to learn more</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
