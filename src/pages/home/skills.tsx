import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { ImTree } from "react-icons/im";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { DiDatabase } from "react-icons/di";
import { FaServer } from "react-icons/fa";
import { FaTools } from "react-icons/fa";

const skills = [
  {
    category: "Frontend",
    icon: HiOutlineComputerDesktop,
    technologies: [
      { name: "React", icon: FaReact, iconClass: "text-blue-500" },
      { name: "Next.js", icon: RiNextjsFill },
      {
        name: "TypeScript",
        icon: TbBrandTypescript,
        iconClass: "text-blue-500",
      },
      {
        name: "Tailwind CSS",
        icon: RiTailwindCssFill,
        iconClass: "text-blue-500",
      },
    ],
  },
  {
    category: "Backend",
    icon: DiDatabase,
    technologies: [
      { name: "Node.js", icon: FaNodeJs, iconClass: "text-green-500" },
      { name: "Express", icon: ImTree, iconClass: "text-blue-500" },
      { name: "Python", icon: FaPython },
      {
        name: "PostgreSQL",
        icon: BiLogoPostgresql,
        iconClass: "text-blue-500",
      },
      { name: "MongoDB", icon: SiMongodb, iconClass: "text-green-700" },
    ],
  },
  {
    category: "DevOps",
    icon: FaServer,
    technologies: [
      { name: "Docker", icon: FaDocker, iconClass: "text-blue-500" },
      { name: "AWS", icon: FaAws },
      { name: "Git", icon: FaGithub },
      { name: "Gitlab", icon: FaGitlab, iconClass: "text-red-500" },
    ],
  },
  {
    category: "Tools",
    icon: FaTools,
    technologies: [
      { name: "VS Code", icon: VscVscode, iconClass: "text-blue-500" },
      { name: "Figma", icon: FaFigma },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-14">
      <h2
        data-aos="fade-up"
        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center"
      >
        Skills & Technologies
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <Card
            key={skill.category}
            data-aos="fade-up"
            className="overflow-hidden"
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-lg flex gap-2 items-center">
                <skill.icon className="w-5 h-5" /> {skill.category}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <Badge
                    data-aos="fade-left"
                    key={tech.name}
                    variant="secondary"
                    className="flex items-center gap-2 px-2 py-1"
                  >
                    <tech.icon className={cn("h-5 w-5", tech.iconClass)} />
                    <span>{tech.name}</span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
