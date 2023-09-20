"use client";

import { Button } from "../ui/button";
import SidebarActions from "./components/sidebarActions/SidebarActions";
import SidebarContent from "./components/sidebarContent/SidebarContent";
import SidebarFooter from "./components/sidebarFooter/SidebarFooter";
import { useSidebar } from "./useSidebar";

import { MenuIcon, XIcon } from "lucide-react";

const Sidebar = () => {
  const {
    asideClassName,
    isShow,
    isCollapsed,
    setIsCollapsed,
    handleSidebarShow,
  } = useSidebar();

  return (
    <>
      {isShow && (
        <aside className={asideClassName}>
          <SidebarActions
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />

          <SidebarContent isCollapsed={isCollapsed} />

          <SidebarFooter isCollapsed={isCollapsed} />
        </aside>
      )}

      <Button
        className="absolute h-12 w-12 p-2 right-4 top-4 rounded-full"
        onClick={handleSidebarShow}
        title="Menu"
      >
        {!isShow && <MenuIcon />}
        {isShow && <XIcon />}
      </Button>
    </>
  );
};

export default Sidebar;
