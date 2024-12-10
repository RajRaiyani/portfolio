import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import SimplePgImg from "@/assets/images/projects/simplepg.png";
import DisuntImg from "@/assets/images/projects/disunt.webp";
import AkhilamImg from "@/assets/images/projects/akhilam.webp";
import PlexusImg from "@/assets/images/projects/plexus.png";

const projects = [
  {
    title: "Simple PG",
    description:
      "Paying guest management system built with React, Node.js, and PostgreSQL. Features include user authentication, booking management, and payment processing.",
    image: SimplePgImg,
    technologies: ["React", "Node.js", "Postgres", "ShadCn UI"],
    demoLink: "https://simplepg.com/",
  },
  {
    title: "Disunt",
    description:
      "Portfolio website for a Disunt industries built with PHP, HTML, CSS, and JavaScript. Features a custom CMS for managing content.",
    image: DisuntImg,
    technologies: ["PHP", "HTML", "JavaScript", "CSS"],
    demoLink: "https://disuntindustries.com/",
  },
  {
    title: "Akhilam interior",
    description:
      "website of an architecture firm build with PHP, HTML, CSS, and Bootstrap. Features a custom CMS for managing content.",
    image: AkhilamImg,
    technologies: ["PHP", "HTML", "CSS", "Bootstrap"],
    demoLink: "https://akhilaminterio.com/",
  },
  {
    title: "Plexus",
    description:
      "website of an implant company build with PHP, HTML, CSS, and Bootstrap. Features a custom CMS for managing content.",
    image: PlexusImg,
    technologies: ["PHP", "HTML", "CSS", "Bootstrap"],
    demoLink: "https://plexusorthotech.com/",
  },
];

export default function Projects() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Projects
      </h2>

      <div className="grid mt-7 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="flex flex-col overflow-hidden transition-all hover:shadow-lg"
          >
            <CardHeader className="p-0">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition-all hover:scale-105"
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <CardTitle className="mb-2 text-2xl">{project.title}</CardTitle>
              <CardDescription className="mb-4">
                {project.description}
              </CardDescription>
              <div className="">
                <h4 className="text-sm font-semibold mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="">
              <div className="flex justify-between w-full">
                <Button asChild variant="outline" size="sm">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <ExternalLinkIcon className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
