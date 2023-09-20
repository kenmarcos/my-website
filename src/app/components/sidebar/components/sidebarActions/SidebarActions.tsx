"use client";

import { Dispatch } from "react";

import { useSidebarActions } from "./useSidebarActions";

import { Button } from "app/components/ui/button";
import { ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react";

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
      <Button className="bg-transparent px-0" onClick={handleSidebarCollapse}>
        {!isCollapsed && (
          <ChevronsLeftIcon size={32} className="text-gray-light" />
        )}

        {isCollapsed && (
          <ChevronsRightIcon size={32} className="text-gray-light" />
        )}
      </Button>
    </section>
  );
};

export default SidebarActions;
