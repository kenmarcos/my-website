import { LuPlusCircle } from "react-icons/lu";

import { Button } from "components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "components/ui/dialog";

import { Project } from "types";

const techs = ["typescript", "react", "nextjs", "tailwind", "mongodb"];

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const { name, description, techs, github, demo, image } = project;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className="group/details bg-transparent hover:bg-transparent"
          title="Detalhes"
        >
          <LuPlusCircle
            size={28}
            className="duration-300 ease-in-out group-hover/details:text-blue-primary"
          />
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-blue-dark">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          <p>{description}</p>

          <ul className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <li
                key={tech}
                className="bg-gray-light rounded-full px-3 py-1 text-xs text-gray-dark"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <DialogFooter className="mt-10">
          {github && (
            <Button variant="secondary" asChild>
              <a href={github} target="_blank" rel="noreferrer noopener">
                GitHub
              </a>
            </Button>
          )}

          <Button className="bg-blue-primary" asChild>
            <a href={demo} target="_blank" rel="noreferrer noopener">
              Deploy
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetails;
