import { useEffect, useState } from "react";

import { twMerge } from "tailwind-merge";

export const useSidebar = () => {
  const [isShow, setIsShow] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    setIsShow(window.innerWidth >= 768);
  }, []);

  const asideClassName = twMerge(
    "fixed z-10 overflow-y-auto ease-in-out duration-500 left-0 bg-blue-dark h-screen flex flex-col md:sticky top-0 border-r border-blue-primary",
    isCollapsed ? "w-16 px-2" : "w-[230px] px-4",
    isShow ? "translate-x-0" : "-translate-x-full"
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
    setIsShow,
  };
};
