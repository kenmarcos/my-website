"use client";

import { Dispatch } from "react";
import { LuChevronsLeft, LuChevronsRight } from "react-icons/lu";

import { Button } from "components/ui/button";

import { useSidebarActions } from "./useSidebarActions";

interface sidebarActionsProps {
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<React.SetStateAction<boolean>>;
}

const SidebarActions = ({
  isCollapsed,
  setIsCollapsed,
}: sidebarActionsProps) => {
  const { collapseButtonClassName, handleSidebarCollapse } = useSidebarActions(
    isCollapsed,
    setIsCollapsed
  );

  return (
    <section className={collapseButtonClassName}>
      <Button variant="ghost" className="px-0" onClick={handleSidebarCollapse}>
        <LuChevronsLeft
          size={28}
          className={`duration-700 ${
            isCollapsed ? "rotate-90 scale-0" : "rotate-0 scale-100"
          } `}
        />

        <LuChevronsRight
          size={28}
          className={`absolute duration-700 ${ 
            isCollapsed ? "rotate-0 scale-100" : "-rotate-90 scale-0"
          } `}
        />
      </Button>
    </section>
  );
};

export default SidebarActions;
