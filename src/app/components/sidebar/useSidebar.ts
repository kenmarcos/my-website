import { useState } from "react";

import { twMerge } from "tailwind-merge";

export const useSidebar = () => {
  const [isShow, setIsShow] = useState(innerWidth > 768);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const asideClassName = twMerge(
    "absolute left-0 bg-blue-dark h-screen flex flex-col md:static ",
    isCollapsed ? "w-16 p-2" : "w-52 p-4"
  );

  const handleSidebarShow = () => {
    setIsShow(!isShow);
  };

  return {
    asideClassName,
    isShow,
    isCollapsed,
    setIsCollapsed,
    handleSidebarShow,
  };
};
