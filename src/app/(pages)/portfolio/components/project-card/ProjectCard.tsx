import Image from "next/image";
import { LuPlusCircle } from "react-icons/lu";

import { Button } from "components/ui/button";

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

          <div>
            <Button
              size="icon"
              className="group/details bg-transparent hover:bg-transparent"
            >
              <LuPlusCircle
                size={28}
                className="duration-300 ease-in-out group-hover/details:text-blue-primary"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
