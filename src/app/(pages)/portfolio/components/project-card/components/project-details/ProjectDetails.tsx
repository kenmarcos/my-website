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

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const { name, description, techs, github, demo } = project;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="group/details"
          title="Detalhes"
        >
          <LuPlusCircle
            size={28}
            className="duration-300 ease-in-out group-hover/details:text-primary"
          />
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-background">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          <p className="whitespace-pre-line">{description}</p>

          <ul className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <li
                key={tech}
                className="bg-secondary-foreground rounded-full px-3 py-1 text-xs text-secondary"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <DialogFooter className="mt-10">
          <Button variant="outline" asChild>
            <a href={github} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
          </Button>

          {demo && (
            <Button asChild>
              <a href={demo} target="_blank" rel="noreferrer noopener">
                Deploy
              </a>
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetails;
