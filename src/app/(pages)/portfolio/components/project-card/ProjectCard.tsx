import Image from "next/image";

import ProjectDetails from "./components/project-details/ProjectDetails";

import { Project } from "types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { name, image } = project;

  return (
    <div className="group/card rounded-md overflow-hidden">
      <div className="overflow-hidden">
        <Image
          src={image.url}
          alt={name}
          width={960}
          height={600}
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMMvAYAAX4BKd5Md4EAAAAASUVORK5CYII="
          className="object-cover group-hover/card:scale-[1.3] duration-700 ease-in-out"
        />
      </div>

      <div className="bg-gray-primary">
        <div className="flex items-center py-5 px-4">
          <h4 className="flex-1 text-lg font-semibold">{name}</h4>

          <ProjectDetails project={project} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
