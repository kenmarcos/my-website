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

const techs = ["typescript", "react", "nextjs", "tailwind", "mongodb"];

const ProjectDetails = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className="group/details bg-transparent hover:bg-transparent"
        >
          <LuPlusCircle
            size={28}
            className="duration-300 ease-in-out group-hover/details:text-blue-primary"
          />
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-blue-dark">
        <DialogHeader>
          <DialogTitle>Lorem impsum dolor</DialogTitle>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            dignissimos nulla ad minima distinctio fuga, praesentium corrupti at
            sit expedita hic ut illum natus ex nam quam possimus quo soluta.
          </p>

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
          <Button variant="secondary">GitHub</Button>

          <Button className="bg-blue-primary">Demonstração</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetails;
