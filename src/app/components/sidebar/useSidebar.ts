import { useState } from "react";

import { twMerge } from "tailwind-merge";

export const useSidebar = () => {
  const [isShow, setIsShow] = useState(innerWidth > 768);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const asideClassName = twMerge(
    "fixed left-0 bg-blue-dark h-screen flex flex-col md:sticky top-0",
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
