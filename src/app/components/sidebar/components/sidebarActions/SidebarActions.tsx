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
        {!isCollapsed && <LuChevronsLeft size={32} />}

        {isCollapsed && <LuChevronsRight size={32} />}
      </Button>
    </section>
  );
};

export default SidebarActions;
