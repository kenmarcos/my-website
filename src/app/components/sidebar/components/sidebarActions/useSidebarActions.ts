import { Dispatch } from "react";

import { twMerge } from "tailwind-merge";

export const useSidebarActions = (
  isCollapsed: boolean,
  setIsCollapsed: Dispatch<React.SetStateAction<boolean>>
) => {
  const handleSidebarCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const collapseButtonClassName = twMerge(
    "flex px-4",
    isCollapsed ? "justify-center" : "justify-end"
  );

  return {
    handleSidebarCollapse,
    collapseButtonClassName,
  };
};
