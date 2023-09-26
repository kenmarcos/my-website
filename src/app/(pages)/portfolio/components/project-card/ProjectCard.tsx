import Image from "next/image";

import ProjectDetails from "./components/project-details/ProjectDetails";

const ProjectCard = () => {
  return (
    <div className="group/card rounded-md overflow-hidden">
      <div className="overflow-hidden">
        <Image
          src="/work-2.jpg"
          alt="project-card"
          width={960}
          height={600}
          className="object-cover group-hover/card:scale-[1.3] duration-700 ease-in-out"
        />
      </div>

      <div className="bg-gray-primary">
        <div className="flex items-center py-5 px-4">
          <h4 className="flex-1 text-lg font-semibold">Lorem impsum dolor</h4>

          <ProjectDetails />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
